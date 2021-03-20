import { BrowserRouter as Router, Route } from "react-router-dom";

import AddManufacturedCar from "./components/screens/AddManufacturedCar";
import Header from "./components/Header";
import RegisterDriver from "./components/screens/RegisterDriver";

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

// verify tag
const verifyTag = async (tag) => {
    console.log(tag);
    // const res = await fetch(
    //     `http://localhost:5000/vehicle?rf_tag=${tag.rf_tag}`
    // );
    const res = await fetch(`http://localhost:5000/vehicle`);

    const data = await res.json();
    // ok so it gets all the tags and then checks
    const tagverified = data.find((p) => p.rf_tag === tag.rf_tag);
    console.log(data);
    console.log(tagverified);
    // if (data.lenght) return true;
    // else return false;
    return data;
};

function App() {
    return (
        <Router>
            <div className="container">
                <h1>Welcome to AVS RFID </h1>
                <Header />
                <Route
                    path="/manufacturer_console"
                    exact
                    render={(props) => (
                        <>
                            <AddManufacturedCar onAdd={addVehicle} />
                        </>
                    )}
                />
                <Route
                    path="/register_driver"
                    exact
                    render={(props) => <RegisterDriver onCheck={verifyTag} />}
                />
            </div>
        </Router>
    );
}

export default App;
