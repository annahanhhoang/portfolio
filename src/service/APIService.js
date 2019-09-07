import Api from './API';
import endPoints from '../../config/apiConfig';

export default {
  sendEmail(emailOption) {
    return Api().post(endPoints.email, emailOption);
  },

  verifyCaptcha(captchaResponse) {
    return Api().get(endPoints.recaptcha, {
      params: {
        response: captchaResponse,
      },
    });
  },
};
