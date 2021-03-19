import AddManufacturedCar from "./components/AddManufacturedCar";
import Header from "./components/Header";

// add tag and car to json-server
const addVehicle = async (vehicle) => {
    console.log(vehicle);

    const res = await fetch(`http://localhost:5000/vehicle`, {
        method: "POST",
        headers: {
            "Content-type": "application/json",
        },
        body: JSON.stringify(vehicle),
    });

    // To display registered cars
    // const data = await res.json();
};

function App() {
    return (
        <div className="container">
            <h1>Welcome to AVS RFID </h1>
            <Header />
            <AddManufacturedCar onAdd={addVehicle} />
        </div>
    );
}

export default App;
