import React, {Component} from 'react';
import {inject, observer} from 'mobx-react';
import '../css/App.css';

/**
 * @Description
 * @Author lucio
 * @Email lucio0314@163.com
 * @Date 08/07/2017$
 * @Version
 */
@observer
export default class Header extends Component {
    render() {
        return (
            <dev className="App">
                <li>header</li>
            </dev>
        )
    }
}