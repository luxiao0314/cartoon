import React from 'react';
import Home from "./pages/Home";
import injectTapEventPlugin from 'react-tap-event-plugin';
import setRootFontsize from "./config/setRootFontsize";

//必须添加这个plugin,否则tab不能进行切换
injectTapEventPlugin();
// 根据屏幕宽度改变根节点的fontsize值remAdaptation.js
setRootFontsize();

export default class App extends React.Component {

    render() {
        return (
            <Home/>
        );
    }
}
