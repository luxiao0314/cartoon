/**
 * @Description
 * @Author lucio
 * @Email lucio0314@163.com
 * @Date 08/07/2017$
 * @Version
 */
import React, {Component} from 'react';
import Header from "../components/Header";
import ListExampleSimple from "../components/ListExampleSimple";
import {inject, observer} from 'mobx-react';
import Banner from "../components/Banner";

let tabs = ['新闻', '快讯'];

@inject('homeStore')
@observer
export default class Home extends Component {

    componentWillMount() {
        this.props.homeStore.fetchData();
    }

    render() {
        const {homeStore} = this.props;
        return (
            <dev>
                <Banner bannerData={homeStore.dataArr}/>
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