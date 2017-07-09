/**
 * @Description
 * @Author lucio
 * @Email lucio0314@163.com
 * @Date 08/07/2017$
 * @Version
 */
import React, {Component} from 'react';
import TabsExampleControlled from "../components/TabsExampleControlled";
import Header from "../components/Header";
import ListExampleSimple from "../components/ListExampleSimple";
// import Banner from "../components/Banner";
import {inject, observer} from 'mobx-react';

let tabs = ['新闻', '快讯'];

@inject('homeStore')
@observer
export default class Home extends Component {

    componentWillUnmount() {
        // this.props.homeStore.fetchData();
        // this.props.authStore.reset();
    }

    render() {
        const {dataArr} = this.props.homeStore;
        return (
            <dev>
                {/*<Banner bannerData={dataArr}/>*/}
                <Header tabs={tabs}>
                    <ListExampleSimple/>
                </Header>
            </dev>
        )
    }
}

const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
};