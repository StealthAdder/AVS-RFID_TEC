import { useState } from 'react';

const SearchVehicle = ({ result }) => {
  const BackendIp = process.env.REACT_APP_BACKEND_IP;
  // Fetch POST to get user information.

  const getSearchedTag = async (tag) => {
    const res = await fetch(`${BackendIp}/manufacturer_sso/searchTag`, {
      method: 'POST',
      headers: {
        'Content-type': 'application/json',
        Authorization: `Bearer ${localStorage.getItem('token')}`,
      },
      body: JSON.stringify(tag),
    });
    // Result of search for vehicle.
    const data = await res.json();
    console.log(data);
    result(data);
  };
  const onSubmit = (event) => {
    event.preventDefault();

    // check if he has entered all the fields
    getSearchedTag({ rf_tag });
    setTag('');
  };
  let [rf_tag, setTag] = useState('');
  return (
    <>
      <div className='amc-div-form'>
        <form className='add-form' onSubmit={onSubmit}>
          <div className='form-control'>
            <h3>Search RFID-Tag Profile</h3>
            <input
              type='text'
              placeholder='RFID Tag Number'
              value={rf_tag}
              onChange={(event) => setTag(event.target.value.toUpperCase())}
              required
            />
            <input type='submit' value='Search Tag' className='btn btn-block' />
          </div>
        </form>
      </div>
    </>
  );
};

export default SearchVehicle;
