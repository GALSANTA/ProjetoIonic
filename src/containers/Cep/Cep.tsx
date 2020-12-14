import React from 'react';
import { findCEP } from '../../services/cepAPI';
import { IonContent } from '@ionic/react';
import ToolBar from '../../components/ToolBar/ToolBar';

import './Cep.css';

const Cep: React.FC = () => {
    
    const [cep, setCep] = React.useState(String);
    const [api, setApi] = React.useState(Object);

    function update(e: React.ChangeEvent<HTMLInputElement>) {
        if (e.target.id === "cep") setCep(e.target.value);
    }

    async function search() {
        const result = await findCEP(cep);
        setApi(result);
    }
    return (
        <IonContent>
            <ToolBar/>

            <div className="container cep">
                <div className="row">
                    <div className="input-field col s12 m10 l10">
                        <input id="cep" type="text" className="validate" onChange={update} />
                        <label htmlFor="cep">Digite aqui o CEP</label>
                    </div>
                    <button className="waves-effect waves-light btn-large center-align col s12 m2 l2 " onClick={search}>Buscar</button>
                </div>
                <div className="row">
                    <div className="col s12 m12">
                        {
                            Object.keys(api).length !== 0 ?
                                <div className="card horizontal cyan darken-2 white-text">
                                    <div className="card-image">
                                        <img className="image-tempo" src={`assets/img/${api.img}.jpg`} alt="tempo" />
                                    </div>
                                    <div className="card-stacked">
                                        <div className="card-content">
                                            <h3><strong>{api.cidade}</strong></h3>
                                            <h6>Descrição: {api.descricao}</h6>
                                            <p>
                                                Temperatura: {api.temperatura.atual} <br />
                               Mínima: {api.temperatura.minima} <br />
                               Máxima: {api.temperatura.maxima} <br />
                               Umidade: {api.umidade}<br />
                               Vento: {api.vento}<br />
                                            </p>
                                        </div>
                                    </div>
                                </div> : <></>
                        }
                    </div>
                </div>
            </div>
        </IonContent>
    )
}

export default Cep;