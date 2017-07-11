/**
 * Created by luthor on 11/07/2017.
 */
import React, {Component} from 'react'
import {requests} from "./agent";

export const HomeService = {
    //轮播图
    indexBanner: () => requests.get('/indexBanner'),
    // data: () => requests.get('/article/recommend/header.json')
    //推荐
    indexRecommend: () => requests.get('/indexRecommend'),
    //番剧
    indexBangumi: () => requests.get('/indexBangumi'),
    //其余全部视频数据获取
    indexMost: () => requests.get('/indexMost'),
};

export const Auth = {
    current: () =>
        requests.get('/user'),
    login: (email, password) =>
        requests.post('/users/login', {user: {email, password}}),
    register: (username, email, password) =>
        requests.post('/users', {user: {username, email, password}}),
    save: user =>
        requests.put('/user', {user})
};
