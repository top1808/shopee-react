import axios from 'axios';
import * as Config from '../constants/config'

export default function CallApi(endpoint, method, body) {
    return axios({
        method: method,
        url: `${Config.API_URL}/${endpoint}`,
        data: body,
    })
    .catch(err => console.error(err));
}