const chai = require("chai");
const expect = chai.expect;
const should = chai.should();
const chaiHttp = require("chai-http");
const server = require("../server");
chai.use(chaiHttp);

describe("Testing from Toolbox challenge", () => {
  it("Testing readData endpoint", (done) => {
    chai
      .request(server)
      .get("/files/data")
      .end((err, res) => {
        expect(err, "Exist some error in testing request").to.be.null;
        res.should.have.status(200);
        res.body.should.be.a("object");
        expect(res.body, "Don't have success property").to.have.property(
          "success"
        );
        expect(res.body, "Don't have error property").to.have.property("error");
        expect(res.body.success, "The success property must be true").to.equal(
          true
        );
        expect(res.body.error, "The error property must be false").to.equal(
          false
        );
        res.body.response.should.be.a("array");
        done();
      });
  });
});
