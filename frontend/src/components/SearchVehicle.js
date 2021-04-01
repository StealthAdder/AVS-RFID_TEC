import { useState } from 'react';
import UpdateTable from './UpdateTable';
const SearchVehicle = () => {
  const BackendIp = process.env.REACT_APP_BACKEND_IP;
  // Fetch POST to get user information.

  const [results, setResults] = useState([]);
  const getSearchedTag = async (tag) => {
    const res = await fetch(`${BackendIp}/manufacturer_sso/searchTag`, {
      method: 'POST',
      headers: {
        'Content-type': 'application/json',
      },
      body: JSON.stringify(tag),
    });
    // Result of search for vehicle.
    const data = await res.json();
    console.log(data);
    setResults(data);
  };
  const onSubmit = (event) => {
    event.preventDefault();

    // check if he has entered all the fields
    getSearchedTag({ rf_tag });
    setTag('');
  };
  let [rf_tag, setTag] = useState('');
  return (
    <div className='amc-div-form'>
      <form className='add-form' onSubmit={onSubmit}>
        <div className='form-control'>
          <label>RFID Tag</label>
          <input
            type='text'
            placeholder='RFID Tag Number'
            value={rf_tag}
            onChange={(event) => setTag(event.target.value.toUpperCase())}
            required
          />
        </div>

        <input type='submit' value='Search Tag' className='btn btn-block' />
      </form>
      <UpdateTable />
    </div>
  );
};

export default SearchVehicle;
