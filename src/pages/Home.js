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
import Banner from "../components/Banner";
import ContentList from "../components/ContentList";

let tabs = ['新闻', '快讯'];

@inject('homeStore')
@inject('contentStore')
@observer
export default class Home extends Component {

    componentWillMount() {
        this.props.homeStore.fetchData();
        this.props.contentStore.indexRecommend();
        this.props.contentStore.indexBangumi();
        this.props.contentStore.indexMost();
    }

    render() {
        const {banner} = this.props.homeStore;
        return (
            <dev>
                <MuiThemeProvider>
                    <dev>
                        <AppBar title="动漫之家"/>
                        <Banner bannerData={banner.slice()}/>
                        <Tabs onChange={this.handleChange} value={0}>{
                            tabs.map((tab, i) =>
                                <Tab onActive={this.onActive} key={i} label={tab} value={i}>
                                    {this.childPage(i)}
                                </Tab>
                            )}
                        </Tabs>
                        <ContentList loadingChange={false}/>
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