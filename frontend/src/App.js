import AddManufacturedCar from "./components/AddManufacturedCar";
import Header from "./components/Header";

function App() {
    return (
        <div className="container">
            <h1>Welcome to AVS RFID </h1>
            <Header />
            <AddManufacturedCar />
        </div>
    );
}

export default App;
