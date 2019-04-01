import axios from 'axios'
import VueAxios from 'vue-axios'
import config from './apiConfig'
const baseURL = (process.env.NODE_ENV) === 'development' ? config.devBaseURL : config.prodBaseURL

export default () => {
    return axios.create({
        baseURL: `${baseURL}`
    })
}
