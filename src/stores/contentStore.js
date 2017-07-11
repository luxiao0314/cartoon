/**
 * Created by luthor on 11/07/2017.
 */
import {action, observable} from "../../node_modules/mobx/lib/mobx";
import * as apiService from "../config/apiService";

export class ContentStore {

    @observable errorMsg = '';
    @observable recommendData = null;
    @observable bangumiData = null;

    // 大部分视频版块数据
    @observable mostData = [
        createMostData('国创区', 'guoman', 'guochuang'),
        createMostData('动画区', 'douga', 'douga'),
        createMostData('音乐区', 'music', 'music'),
        createMostData('舞蹈区', 'dance', 'dance'),
        createMostData('游戏区', 'game', 'game'),
        createMostData('科技区', 'technology', 'technology'),
        createMostData('生活区', 'life', 'life'),
        createMostData('鬼畜区', 'kichiku', 'kichiku'),
        createMostData('时尚区', 'fashion', 'fashion'),
        createMostData('娱乐区', 'ent', 'ent'),
        createMostData('电视剧区', 'teleplay', 'teleplay'),
        createMostData('电影区', 'movie', 'movie'),
        createMostData('广告区', 'advertise', 'ad')
    ];

    @action indexRecommend() {
        return apiService.HomeService.indexRecommend()
            .then(action(({data}) => {
                this.recommendData = data;
            }))
            .catch(action(error => {
                if (error.msg) {
                    this.errorMsg = error.msg
                } else {
                    this.errorMsg = error
                }
            }));
    }

    @action indexBangumi() {
        return apiService.HomeService.indexBangumi()
            .then(action(({data}) => {
                this.bangumiData = data.data;
            }))
            .catch(action(error => {
                if (error.msg) {
                    this.errorMsg = error.msg
                } else {
                    this.errorMsg = error
                }
            }));
    }

    @action indexMost() {
        return apiService.HomeService.indexMost()
            .then(action(({data}) => {
                let responseMostData = data.data;
                this.mostData.map(mostDataItem => {
                    mostDataItem.data = responseMostData[mostDataItem.dataName];
                })
            }))
            .catch(action(error => {
                if (error.msg) {
                    this.errorMsg = error.msg
                } else {
                    this.errorMsg = error
                }
            }));
    }
}

export default new ContentStore();

// 创建存放大部分视频版块初始的数据
function createMostData(title, iconName, dataName) {
    return {
        // 视频版块标题
        title: title,
        // 视频版块图标
        iconName: iconName,
        // 视频版块数据名
        dataName: dataName,
        // 存放视频版块相应的数据
        data: null
    };
}