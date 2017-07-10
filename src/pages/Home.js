/**
 * @Description
 * @Author lucio
 * @Email lucio0314@163.com
 * @Date 08/07/2017$
 * @Version
 */
import React, {Component} from 'react';
import {inject, observer} from 'mobx-react';
import {AppBar, MuiThemeProvider, Tab, Tabs} from "material-ui";
import NewsList from "../components/NewsList";
import FlashList from "../components/FlashList";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

let tabs = ['新闻', '快讯'];
let settings = {
    lazyLoad: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    initialSlide: 2
};

const baseUrl = "https://s3.amazonaws.com/static.neostack.com/img/react-slick";


@inject('homeStore')
@observer
export default class Home extends Component {

    componentWillMount() {
        this.props.homeStore.fetchData();
    }

    render() {
        const {banner} = this.props.homeStore;
        let slice = banner.slice();
        return (
            <dev>
                <MuiThemeProvider>
                    <dev>
                        <AppBar title="动漫之家"/>
                        <Slider {...settings}>
                            <dev>
                                <a href={slice[0].link}>
                                    <img src={slice[0].img} alt={slice[0].title}/>
                                </a>
                                <a href={slice[1].link}>
                                    <img src={slice[1].img} alt={slice[1].title}/>
                                </a>
                                <a href={slice[2].link}>
                                    <img src={slice[2].img} alt={slice[2].title}/>
                                </a>
                            </dev>
                        </Slider>
                        <Tabs onChange={this.handleChange} value={0}>{
                            tabs.map((tab, i) =>
                                <Tab onActive={this.onActive} key={i} label={tab} value={i}>
                                    {this.childPage(i)}
                                </Tab>
                            )}
                        </Tabs>
                    </dev>
                </MuiThemeProvider>
            </dev>
        )
    };

    childPage = (i) => {
        if (i === 0) {
            return (<NewsList/>)
        } else {
            return (<FlashList/>);
        }
    };

    handleChange = (value) => {
    };

    onActive = (tab) => {
    };

}