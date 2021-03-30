const chai = require('chai');
const chaiHttp = require('chai-http');
const app  = require('../index');  // Aqui importamos a aplicação que configuramos no index.js
const { expect } = require('chai');
const should = chai.should();

chai.use(chaiHttp);

describe('Testes!', ()=>{
  
    describe('GET /',() => { 
       it ('Retorna ', (done) =>{
            chai.request(app)
            .get(`/`)
            .end((err, ret) => {
                expect(ret.status).to.be.equal(200);
                expect(ret.body).to.be.an('object').that.have.property('nome');
                expect(ret.body).to.be.an('object').that.have.property('idade');
                done();
            });
        });
    });
})