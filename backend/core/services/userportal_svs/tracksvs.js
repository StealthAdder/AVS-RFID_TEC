const Rfdata = require('../../../api/models/Rfdata');
const mongoose = require('mongoose');
const tracksvs = () => {
  return async (req, res, next) => {
    console.log(req.body);
    try {
      const data = await Rfdata.findOne({ rf_tag: req.body.rf_tag })
        .limit(1)
        .sort('-eventTime');
      console.log(data);
      res.send({ data });
      // const date = new Date(data.eventTime).toLocaleDateString();
      // const time = new Date(data.eventTime).toLocaleTimeString();
      // console.log(date);
      // console.log(time);
      next();
    } catch (error) {
      console.log(error);
    }
  };
};

module.exports = tracksvs;
