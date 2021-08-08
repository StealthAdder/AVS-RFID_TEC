const fineRef = require('../../../api/models/fineRef');
const finesvs = () => {
  return async (req, res, next) => {
    // FineSVS
    const tsv = await fineRef.findOne({
      violationType: 'Traffic Signal Violation',
    });
    const sv = await fineRef.findOne({
      violationType: 'Speeding Violation',
    });
    res.send({ msg: 'fetched Fines', tsv: tsv, sv: sv });
  };
};

module.exports = finesvs;
