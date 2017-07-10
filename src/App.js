import React from 'react';
import Home from "./pages/Home";
import injectTapEventPlugin from 'react-tap-event-plugin';
//必须添加这个plugin,否则tab不能进行切换
injectTapEventPlugin();

export default class App extends React.Component {

    render() {
        return (
            <Home/>
        );
    }
}
