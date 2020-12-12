import React from 'react';
import '../ParallaxHeader/ParallaxHeader.css';

const ParallaxHeader: React.FC<{text:any, component:any}> = (props: React.PropsWithChildren<{text:any, component:any}>) => {

    return (
        <div className="parallax-container">
                <div className="row">
                    <div className="col s12 m6 l6 xl6 text-side hide-on-small-only valign-wrapper">
                        <div className="container">
                            <h1 className="white-text texto-tamanho">{props.text.texto1}</h1>
                            <h5 className="white-text">
                                {props.text.texto2}
                            </h5>
                        </div>
                    </div>
                    <div className="col s12 m6 l6 xl6 ">
                            <div className="row center">
                                {props.component}
                            </div>
                    </div>
                </div>
            
            <div className="parallax">
                <img src={props.text.url} style={{ opacity: '1'}} alt="PC" />
            </div>
        </div>
        
    )
}
export default ParallaxHeader;