import React from 'react';
import {signOut} from '../../config/firebaseConfig';

import { routes } from '../../utils/.env.local';

const App: React.FC = () => {
    async function haddleSignOut() {
        
        await signOut();

        window.location.href = routes.home;        
    }
    return (<button onClick={haddleSignOut}>SignOUT</button>)
}

export default App;