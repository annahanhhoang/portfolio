import Api from './API'
import endPoints from './apiConfig'

export default {
    sendEmail(emailOption) {
        return Api().post(endPoints.email, emailOption)
    },
}