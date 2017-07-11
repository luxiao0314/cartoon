import ReactDOM from 'react-dom';
import promiseFinally from 'promise.prototype.finally';
import React from 'react';
import {Router,hashHistory} from 'react-router';
import {useStrict} from 'mobx';
import {Provider} from 'mobx-react';

import routes from "./config/routes";
import homeStore from "./stores/homeStore";
import authStore from "./stores/authStore";
import commonStore from "./stores/commonStore";
import userStore from "./stores/userStore";
import contentStore from "./stores/contentStore";

const stores = {
    homeStore,
    authStore,
    commonStore,
    userStore,
    contentStore
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
