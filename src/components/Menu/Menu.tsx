import React from 'react';
import '../Menu/Menu.css';
;

const Menu: React.FC<{ menuItems: Object }> = (menuItems) => {

    const m: Array<Object> = Object.values(menuItems.menuItems);

    return (
        <>
            <nav>
                <div className="nav-wrapper cyan darken-2">
                    
                    <img className="brand-logo" src="/assets/img/logo.png" alt="cafe" />
                    <a data-target="slide-out" className="sidenav-trigger"><i className="material-icons">menu</i></a>
                    <ul className="right hide-on-med-and-down">
                        {m.map((e: any) => {
                            return <li key={e}><a href={e[1]}>{e[0]}</a></li>
                        })}
                    </ul>
                </div>
            </nav>
            <ul id="slide-out" className="sidenav">

                {m.map((e: any) => {
                    return <li key={e}><a href={e[1]}>{e[0]}</a></li>
                })}
            </ul>
        </>

    );
}

export default Menu;