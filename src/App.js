import './App.css';
import CarList from "./components/CarList/CarList";
import Form from "./components/Form/Form";
import {carService} from "./service/car.service";

import {useState} from "react";

function App() {
    const [car, setCar] = useState({})


    const onSubmit = (data) => {
        carService.createCar(data).then(value => setCar(value))
    }

    const deleteCar = (id) => {
        carService.deleteById(id).then(value => setCar(value))
    }

    const updateCar = (id, car) => {
        carService.updateById(id, car).then(value => setCar(value))
    }

    return (
        <div className={'container'}>
            <Form onSubmit={onSubmit}/>
            <CarList car={car} deleteCar={deleteCar} updateCar={updateCar}/>
        </div>
    );
}

export default App;
