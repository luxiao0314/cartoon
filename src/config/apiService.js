/**
 * Created by luthor on 11/07/2017.
 */
import React, {Component} from 'react'
import {requests} from "./agent";

export const Banner = {
    data: () => requests.get('/livePageData')
    // data: () => requests.get('/article/recommend/header.json')
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
