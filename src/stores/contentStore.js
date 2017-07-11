/**
 * Created by luthor on 11/07/2017.
 */
import {action, observable} from "../../node_modules/mobx/lib/mobx";
import * as apiService from "../config/apiService";
import {dataNames} from "../config/constant";
import {dataBean} from "../config/constant";
import {titles} from "../config/constant";
import {iconNames} from "../config/constant";

export class ContentStore {

    @observable errorMsg = '';
    @observable recommendData = null;
    @observable bangumiData = null;
    @observable mostData = [];

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
                for (let i = 0; i < titles.length; i++) {
                    dataBean.title = titles[i];
                    dataBean.iconName = iconNames[i];
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