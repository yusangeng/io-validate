var expect = require('chai').expect;

module.exports = function (fn) {
	var err = null;

	try {
		fn()
	} catch (e) {
		err = e;
		//console.log(e);
	}

	expect(err).to.be.not.a('null');
}