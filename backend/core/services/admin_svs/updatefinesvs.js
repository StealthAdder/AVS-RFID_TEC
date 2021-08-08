const fineRef = require('../../../api/models/fineRef');
const updatefinesvs = () => {
  return async (req, res, next) => {
    console.log(req.body);
    try {
      let _id = req.body._id;
      let query = {
        fineAmount: req.body.fineAmount,
      };
      await fineRef.findByIdAndUpdate(_id, query, async (err, docs) => {
        if (err) return console.log(err);
        if (docs) {
          res.send({ msg: 'okay' });
        }
      });
    } catch (error) {
      console.log(error);
    }
  };
};

module.exports = updatefinesvs;
