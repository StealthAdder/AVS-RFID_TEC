const speedLimitRef = require('../../../api/models/speedLimitRef');
const addlocationsvs = () => {
  return async (req, res, next) => {
    const addLocation = async () => {
      await speedLimitRef.create(
        {
          location: req.body.location,
          zipcode: req.body.zipcode,
          speedlimit: req.body.speedlimit,
        },
        (err, docs) => {
          if (err) return console.log(err);
          res.send({ msg: 'Added', res: docs });
        }
      );
    };

    try {
      // console.log(req.body);
      await speedLimitRef.findOne(
        { zipcode: req.body.zipcode },
        (err, docs) => {
          if (err) return console.log(err);
          // console.log(docs);
          if (docs === null) {
            // add this location
            addLocation();
          } else {
            res.send({ msg: 'existing' });
          }
        }
      );
    } catch (error) {
      console.log(error);
    }
  };
};

module.exports = addlocationsvs;
