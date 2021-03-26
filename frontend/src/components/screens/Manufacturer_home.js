import { useState } from 'react';
import AddManufacturedCar from '../AddManufacturedCar';
const Manufacturer_home = () => {
  const addVehicle = async (vehicle) => {
    console.log(vehicle);

    // const res = await fetch(`http://localhost:5000/vehicle`, {
    //   method: 'POST',
    //   headers: {
    //     'Content-type': 'application/json',
    //   },
    //   body: JSON.stringify(vehicle),
    // });

    // To display registered cars
    // const data = await res.json();
  };

  const [showAdd, setshowAdd] = useState(false);

  return (
    <>
      <nav className='manuf-dash'>
        <p
          className='avs manuf-dash-title'
          onClick={() => setshowAdd(!showAdd)}
        >
          Add Vehicle
        </p>

        <p href='' className='avs manuf-dash-title'>
          Update Information
        </p>
      </nav>
      {showAdd && <AddManufacturedCar onAdd={addVehicle} />}
    </>
  );
};

export default Manufacturer_home;
