
import './App.css';
import CarList from "./components/CarList/CarList";
import Form from "./components/Form/Form";
import {useState} from "react";
import {carService} from "./service/car.service";
import {set} from "react-hook-form";

function App() {
    const[car,setCar] = useState({})

    const onSubmit=(data)=>{
        carService.createCar(data).then(value =>setCar(value))
    }

    const deleteCar=(id)=>{
        carService.deleteById(id).then(value => setCar(value))
    }

  return (
    <div>
        <Form onSubmit={onSubmit}/>
        <CarList car={car} deleteCar={deleteCar} />
    </div>
  );
}

export default App;
