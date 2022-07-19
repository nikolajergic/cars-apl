 import carService from "../services/CarService";
 import SingleCar from "../components/SingleCar";
 import {useEffect,useState} from 'react';
 
function AppCars() {
    const [cars, setCars] = useState([]);

    useEffect(() => {
        const fetchCars = async () => {
          const data = await carService.getAll();
    
          setCars(data);
        };
        fetchCars();
      }, []);


      return (
        <div>
          <h2>Cars</h2>
          <ul>
            {cars.map((car) => (
              <SingleCar
                key={car.id}
                id={car.id}
                brand={car.brand}
                model={car.model}
                year={car.year}
                maxSpeed={car.maxSpeed}
                isAutomatic={car.isAutomatic}
                engine={car.engine}
                numberOfDoors={car.numberOfDoors}
              />
            ))}
            
          </ul>
        </div>
      );
    }


export default AppCars;