const chai = require('chai');
const chaiHttp = require('chai-http');
const expect = require('chai').expect;


chai.use(chaiHttp);
const url = 'http://localhost:3000';

describe("get all drivers", () =>{
	it('should get all alements', (done) =>{
		chai.request(url)
			.get('/api/connected')
			.end((err, res) => {
				expect(res).to.have.status(200);
				done();
			})
	})
});

describe("Send Request Status", () =>{
	it('should send request status to all drivers', (done) =>{
		chai.request(url)
			.get('/api/status')
			.end((err, res) => {
				expect(res).to.have.status(200);
				done();
			})
	})
});