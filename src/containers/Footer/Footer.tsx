import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="page-footer cyan darken-2 hide-on-small-only">
      <div className="container">
        <div className="row">
          <div className="col l6 s12">
            <h5 className="white-text">Sistema Estágio</h5>
            <p className="grey-text text-lighten-4">Aplicação feita para uma seleção de estágio na Idealit.</p>
          </div>
          <div className="col l4 offset-l2 s12">
            <h5 className="white-text">Links</h5>
            <li><a className="grey-text text-lighten-3" href="https://idealitlifecare.com.br/">Idealit</a></li>
            <li><a className="grey-text text-lighten-3" href="https://github.com/GALSANTA">My GitHub</a></li>
            <ul>

            </ul>
          </div>
        </div>
      </div>
      <div className="footer-copyright">
        <div className="container">
          Sistema desenvolvido com Materialize por Fernando Marques.
        </div>
      </div>
    </footer>
  );
}

export default Footer;