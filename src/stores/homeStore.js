/**
 * @Description
 * @Author lucio
 * @Email lucio0314@163.com
 * @Date 08/07/2017$
 * @Version
 */
import {action, observable} from "../../node_modules/mobx/lib/mobx";
import * as HTTPTools from "../utils/HttpTools";
export class HomeStore {

    @observable dataArr = [];
    @observable errorMsg = '';
    @observable isRefreshing = true;

    @action fetchData = async () => {
        let url = "http://weizijie.cc:3000/livePageData";
        HTTPTools.get(url)
            .then((data) => {
                this.isRefreshing = false;
                this.errorMsg = '';
                let parse = JSON.parse(data.data);
                this.dataArr = (parse.data.banner);
            })
            .catch(error => {
                this.isRefreshing = false;
                if (error.msg) {
                    this.errorMsg = error.msg
                } else {
                    this.errorMsg = error
                }
            });
    };

    // @action fetchData() {
    //     return agent.Banner.getBanner()
    //         .then(action(({data}) => {
    //             this.isRefreshing = false;
    //             this.errorMsg = '';
    //             this.dataArr.replace(JSON.parse(data.data).data.banner);
    //         }))
    //         .finally(action((error) => {
    //             this.isRefreshing = false;
    //             if (error.msg) {
    //                 this.errorMsg = error.msg
    //             } else {
    //                 this.errorMsg = error
    //             }
    //         }))
    // }
}

export default new HomeStore();