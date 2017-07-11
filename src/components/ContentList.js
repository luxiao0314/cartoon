/**
 * Created by luthor on 11/07/2017.
 */
import React, {Component} from 'react'
import RecommendVideoContainer from "./RecommendVideoContainer";
import BangumiVideoContainer from "./BangumiVideoContainer";
import DefaultVideoContainer from "./DefaultVideoContainer";
import {observer} from 'mobx-react';

const ContentList = observer(props => {
    return (
        <div>
            <RecommendVideoContainer recommendData={props.recommendData}/>
            <BangumiVideoContainer bangumiData={props.bangumiData}/>{
            props.mostData.map((mostDataItem, index) => {
                return <DefaultVideoContainer mostDataItem={mostDataItem} key={index}/>
            })
        }
        </div>
    )
});

export default ContentList;
