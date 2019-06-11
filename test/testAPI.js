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