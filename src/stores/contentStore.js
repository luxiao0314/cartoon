/**
 * Created by luthor on 11/07/2017.
 */
import {action, observable} from "../../node_modules/mobx/lib/mobx";
import * as apiService from "../config/apiService";

const title = ['国创区', '动画区', '音乐区', '舞蹈区', '游戏区', '科技区', '生活区', '鬼畜区', '时尚区', '娱乐区', '电视剧区', '电影区', '广告区', '连载动画'];
const iconName = ['guoman', 'douga', 'music', 'dance', 'game', 'technology', 'life', 'kichiku', 'fashion', 'ent', 'teleplay', 'movie', 'advertise', 'bangumi'];
const dataNames = ['guochuang', 'douga', 'music', 'dance', 'game', 'technology', 'life', 'kichiku', 'fashion', 'ent', 'teleplay', 'movie', 'ad', 'bangumi'];
const dataBean = {"title": '', 'iconName': '', 'data': []};

export class ContentStore {

    @observable errorMsg = '';
    @observable recommendData = null;
    @observable bangumiData = null;
    @observable mostData = [];

    // 创建存放大部分视频版块初始的数据
    @action createMostData(title, iconName, dataName) {
        return {
            // 视频版块标题
            @observable title: title,
            // 视频版块图标
            @observable iconName: iconName,
            // 视频版块数据名
            @observable dataName: dataName,
            // 存放视频版块相应的数据
            @observable data: []
        };
    };

    @action indexRecommend() {
        return apiService.HomeService.indexRecommend()
            .then(action(({data}) => {
                data = JSON.parse(data);
                this.recommendData = data.recommend;
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
                this.bangumiData = JSON.parse(data);
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
                let responseMostData = JSON.parse(data);
                for (let i = 0; i < title.length; i++) {
                    dataBean.title = title[i];
                    dataBean.iconName = iconName[i];
                    dataBean.data = responseMostData[dataNames[i]];
                    this.mostData.push(dataBean);
                }
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