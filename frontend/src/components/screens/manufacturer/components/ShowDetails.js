const ShowDetails = ({ data }) => {
  return (
    <>
      <h3>Results</h3>
      <p>DL: {data.DL}</p>
      <p>RC: {data.RC}</p>
      <p>address: {data.address}</p>
      <p>chassisNumber: {data.chassisNumber}</p>
      <p>engineNumber: {data.engineNumber}</p>
      <p>manufacturer: {data.manufacturer}</p>
      <p>phone: {data.phone}</p>
      <p>regdOwner: {data.regdOwner}</p>
      <p>rf_tag: {data.rf_tag}</p>
      <p>vehicleModel: {data.vehicleModel}</p>
      <p>yom: {data.yom}</p>
    </>
  );
};

export default ShowDetails;
