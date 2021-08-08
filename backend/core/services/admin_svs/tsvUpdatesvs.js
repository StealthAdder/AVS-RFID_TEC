const fineRef = require('../../../api/models/fineRef');
const tsvUpdatesvs = () => {
  return async (req, res, next) => {
    console.log(req.body);
    try {
      // await fineRef.find
    } catch (error) {
      console.log(error);
    }
    res.send({ msg: 'okay' });
  };
};

module.exports = tsvUpdatesvs;
