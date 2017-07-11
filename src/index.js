import ReactDOM from 'react-dom';
import promiseFinally from 'promise.prototype.finally';
import React from 'react';
import {Router,hashHistory} from 'react-router';
import {useStrict} from 'mobx';
import {Provider} from 'mobx-react';

import headerStore from "./stores/headerStore";
import routes from "./config/routes";
import homeStore from "./stores/homeStore";
import authStore from "./stores/authStore";
import commonStore from "./stores/commonStore";
import userStore from "./stores/userStore";

const stores = {
    headerStore,
    homeStore,
    authStore,
    commonStore,
    userStore,
};

// For easier debugging
window._____APP_STATE_____ = stores;

promiseFinally.shim();
useStrict(true);

ReactDOM.render((
    <Provider {...stores}>
        <Router routes={routes} history={hashHistory}/>
    </Provider>
), document.getElementById('root'));
