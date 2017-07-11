/**
 * @Description
 * @Author lucio
 * @Email lucio0314@163.com
 * @Date 08/07/2017$
 * @Version
 */
import {observable, action, computed} from 'mobx';
import * as apiService from "../config/apiService";
export class homeStore {

    @observable banner = [];
    @observable errorMsg = '';

    @action fetchData() {
        return apiService.Banner.data()
            .then(action(({data}) => {
                data = JSON.parse(data);
                this.banner = data.data;
                this.errorMsg = '';
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

export default new homeStore();
