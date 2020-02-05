const supertest = require('supertest');
const env = require('dotenv').config();

const api = supertest(process.env.PHRI_BASE_URL_LOKAL);

const Login = (email_user, password_user, type_user) => api.get('')
 .set('Content-Type', 'application/json')
 .set('Accept', 'application/json')
 .query({email :  email_user, password : password_user , type :type_user})

module.exports = {
   Login,
}