import { useState } from 'react';
const ShowDetails = ({ data }) => {
  // const [rf_tag, setTag] = useState(data.rf_tag);
  // const [manufacturer, setManufacturer] = useState(data.manufacturer);
  // const [model, setModel] = useState(data.vehicleModel);
  // const [yom, setYom] = useState(data.yom);
  // const [type, setType] = useState('');
  // const [chassisNum, setChassisNum] = useState(data.chassisNumber);
  // const [engineNum, setEngineNum] = useState(data.engineNumber);

  const [DL, setDL] = useState(data.DL);
  const [RC, setRC] = useState(data.RC);
  const [address, setAddress] = useState(data.address);
  const [phone, setPhone] = useState(data.phone);
  const [regdOwner, setRegdOwner] = useState(data.regdOwner);

  const onSubmit = (e) => {
    e.preventDefault();

    const onUpdate = async (userInfo) => {
      const BackendIp = process.env.REACT_APP_BACKEND_IP;
      const id = data._id;
      const response = await fetch(
        `${BackendIp}/manufacturer_sso/updateInfo/${id}`,
        {
          method: 'PATCH',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(userInfo),
        }
      );
      const res = await response.json();
      // console.log(userInfo);
      console.log(res);
    };

    onUpdate({
      DL,
      RC,
      address,
      phone,
      regdOwner,
    });
  };

  return (
    <>
      {/* <h3>Results</h3>
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
      <p>yom: {data.yom}</p> */}
      <form onSubmit={onSubmit}>
        <div className='form-control'>
          <label>RFID Tag</label>
          <input
            type='text'
            placeholder='RFID Tag Number'
            value={data.rf_tag}
            readOnly
          />
          <label>Manufacturer Name</label>
          <input
            type='text'
            placeholder='Manufacturer name'
            value={data.manufacturer}
            readOnly
          />
          <label>Vehicle Model</label>
          <input
            type='text'
            placeholder='Vehicle Model'
            value={data.vehicleModel}
            // onChange={(e) => setModel(e.target.value.toUpperCase())}
            readOnly
          />
          <label>Year Of Manufacture</label>
          <input
            type='text'
            placeholder='Vehicle Manufacture Date'
            value={data.yom}
            readOnly
          />
          <label>Vehicle Type</label>
          <input
            type='text'
            placeholder='Type of Vehicle'
            value={data.engineType}
            readOnly
          />
          <label>Engine Number</label>
          <input
            type='text'
            placeholder='Engine Number'
            value={data.engineNumber}
            readOnly
          />
          <label>Chassis Number</label>
          <input
            type='text'
            placeholder='Chassis Number'
            value={data.chassisNumber}
            readOnly
          />
          <label>Registered Owner</label>
          <input
            type='text'
            placeholder='Registered Owner Name'
            value={regdOwner}
            onChange={(e) => setRegdOwner(e.target.value.toUpperCase())}
          />
          <label>DL No</label>
          <input
            type='text'
            placeholder='DRIVER LICENSE No'
            value={DL}
            onChange={(e) => setDL(e.target.value.toUpperCase())}
          />
          <label>RC No.</label>
          <input
            type='text'
            placeholder='RC No'
            value={RC}
            onChange={(e) => setRC(e.target.value.toUpperCase())}
          />
          <label>Address</label>
          <input
            type='text'
            placeholder='Address'
            value={address}
            onChange={(e) => setAddress(e.target.value.toUpperCase())}
          />
          <label>Phone</label>
          <input
            type='text'
            placeholder='Phone No'
            value={phone}
            onChange={(e) => setPhone(e.target.value.toUpperCase())}
          />
          <input
            type='submit'
            value='Update Details'
            className='btn btn-block'
          />
        </div>
      </form>
    </>
  );
};

export default ShowDetails;
