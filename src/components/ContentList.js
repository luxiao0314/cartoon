/**
 * Created by luthor on 11/07/2017.
 */
import React, {Component} from 'react'
import RecommendVideoContainer from "./RecommendVideoContainer";
import {inject, observer} from 'mobx-react';
import BangumiVideoContainer from "./BangumiVideoContainer";
import DefaultVideoContainer from "./DefaultVideoContainer";

@inject('contentStore')
@observer
export default class ContentList extends Component {
    render() {
        const {recommendData, bangumiData, mostData} = this.props.contentStore;
        return (
            <div>
                <RecommendVideoContainer recommendData={recommendData}/>
                <BangumiVideoContainer bangumiData={bangumiData}/>{
                mostData.slice().map((mostDataItem, index) => {
                    return <DefaultVideoContainer mostDataItem={mostDataItem} key={index}/>
                })
            }</div>
        );
    }
}
