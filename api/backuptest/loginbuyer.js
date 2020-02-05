const assert = require('chai').expect;

const page = require('../backuppage/loginbuyer.js/index.js.js');

const testCase = {
 "positive" : {
    "getList" : "Buyer can login",
 },
 "negative" : {
    "noSearch" : "password and email wrong",
    "invalidemailorpassword" : ""
 }
}

describe(`Login PHRI`, () => {
 const email = 'arkagege@gmail.com';
 const password = 'secret123';
 const type = 'buyyer';
 const invalidemail = 'arka@gmail.com';

 it(`@get ${testCase.positive.getList}`, async() => {
  console.log(res.body);
//   assert(res.status).to.equal(405);
  
 })

//  it(`@get ${testCase.negative.noSearch}`, async() => {
//   const response = await page.getMovieList(apiKey, '');
//   assert(response.status).to.equal(200, response.body.Error);
//   assert(response.body.Response).to.equal('False');
//   assert(response.body.Error).to.equal('Something went wrong.');
//  }),

//  it(`@get ${testCase.negative.noSearch}`, async() => {
//    const response = await page.Login(invalidemail, password, '');
   
//    assert(response.status).to.equal(200);
//    console.log(response.body);
   // assert(response.body.meta.message.type).to.equal('The type field is required.');
   // done();
   // assert(response.body.meta.message).to.equal('The email or password you entered is incorrect');
//   })
}) 