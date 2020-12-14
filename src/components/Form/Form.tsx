import React, { ChangeEvent, FormEvent } from 'react';
import { logInUser, registerUser } from '../../config/firebaseConfig';

import './Form.css';

import { routes } from '../../utils/.env.local';

const Form: React.FC<{typeForm:boolean}> = ({typeForm}) => {

    const [email, setEmail] = React.useState(String);
    const [password, setPassword] = React.useState(String);
    const [cpassword, setCpassword] = React.useState(String);


    async function handleSubmit(e: FormEvent<HTMLFormElement>) {
        e.preventDefault();
        
        if (typeForm) {            
            const result = await logInUser(email, password);
            console.log(result);
            
            if (result) window.location.href = routes.app;
            else window.location.href = routes.home;
        } else {
            if (password !== cpassword) window.location.href = routes.signUp;
            else await registerUser(email, password);
        }
        
      
    }

    function update(e: ChangeEvent<HTMLInputElement>) {
        if (e.target.id === "email") setEmail(e.target.value);
        else if (e.target.id === "password") setPassword(e.target.value);
        else setCpassword(e.target.value);
    }

    return (
        <>
            <form className="col s12" onSubmit={handleSubmit}>
                <div className="row">
                    <div className="col s12 m3 l3 xl3"></div>
                    <div className="input-field col s12 m6 l6 xl6">
                        <input id="email" type="email" className="validate" value={email} onChange={update} />
                        <label htmlFor="email">E-mail</label>
                    </div>
                    <div className="col s12 m3 l3 xl3"></div>
                </div>
                <div className="row">
                    <div className="col s12 m3 l3 xl3"></div>
                    <div className="input-field col s12 m6 l6 xl6">
                        <input id="password" type="password" className="validate" value={password} onChange={update} />
                        <label htmlFor="password">Senha</label>
                    </div>
                    <div className="col s12 m3 l3 xl3"></div>
                </div>
                {
                    typeForm ? <></> :(
                    <div className="row">
                    <div className="col s12 m3 l3 xl3"></div>
                    <div className="input-field col s12 m6 l6 xl6">
                        <input id="cpassword" type="password" className="validate" value={cpassword} onChange={update} />
                        <label htmlFor="cpassword">Confirme sua senha</label>
                    </div>
                    <div className="col s12 m3 l3 xl3"></div>
                </div>
                )
                }
                <div className="row center-align">
                <button className="btn waves-effect waves-light cyan darken-2" type="submit" name="action">
                    { typeForm ? (<>Sign In</>):(<>Sign Up</>)}
                </button>
                </div>
            </form>

        </>
    );
}

export default Form;