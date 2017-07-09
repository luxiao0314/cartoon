/**
 * @Description
 * @Author lucio
 * @Email lucio0314@163.com
 * @Date 08/07/2017$
 * @Version
 */
import React, {Component} from 'react';
import {action, observable} from "../../node_modules/mobx/lib/mobx";
import {apiURL} from "../utils/UrlCons";
import * as HTTPTools from "../utils/HttpTools";

export default class HomeStore {

    @observable dataArr = [];
    @observable errorMsg = '';
    @observable isRefreshing = true;

    @action
    fetchData(callBack) {
        let url = "http://weizijie.cc:3000/livePageData";
        console.log(url);
        HTTPTools.get(url)
            .then((data) => {
                this.isRefreshing = false;
                this.errorMsg = '';
                this.dataArr.replace(data.data.data);
                callBack(this.dataArr);
            })
            .catch(error => {
                this.isRefreshing = false;
                if (error.msg) {
                    this.errorMsg = error.msg
                } else {
                    this.errorMsg = error
                }
            });
    };
}