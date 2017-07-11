import superagentPromise from 'superagent-promise';
import _superagent from 'superagent';
import commonStore from '../stores/commonStore';
import authStore from '../stores/authStore';

const superagent = superagentPromise(_superagent, global.Promise);

const API_ROOT = 'http://weizijie.cc:3000';
// const API_ROOT = 'http://v2.api.dmzj.com';

const encode = encodeURIComponent;

/**
 * 异常统一处理
 * @param err
 * @returns {*}
 */
const handleErrors = err => {
    //401错误
    if (err && err.response && err.response.status === 401) {
        authStore.logout();
    }
    return err;
};

/**
 * 成功统一处理
 * @param res
 */
const responseBody = res => {
    // res.set("Access-Control-Allow-Origin", "*");
    if (res.ok) {
        return res.body;
    } else {
        superagent.reject({status: res.status})
    }
};

/**
 * 添加公共信息
 * @param req
 */
const commonPlugin = req => {
    if (commonStore.token) {
        //添加token
        req.set('authorization', `Token ${commonStore.token}`);
    }
    // req
    //     .set('Content-Type', 'application/json')
    //     .set('Accept', 'application/json')
    //     .timeout(2000)
};

export const requests = {
    del: url =>
        superagent
            .del(`${API_ROOT}${url}`)
            .use(commonPlugin)
            .end(handleErrors)
            .then(responseBody),
    get: (url, params) =>
        superagent
            .get(`${API_ROOT}${url}`)
            .use(commonPlugin)
            .query(params)
            .end(handleErrors)
            .then(responseBody),
    put: (url, body) =>
        superagent
            .put(`${API_ROOT}${url}`, body)
            .use(commonPlugin)
            .end(handleErrors)
            .then(responseBody),
    post: (url, body) =>
        superagent
            .post(`${API_ROOT}${url}`, body)
            .use(commonPlugin)
            .end(handleErrors)
            .then(responseBody),
};

export default {};
