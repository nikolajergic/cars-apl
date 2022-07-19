import React, {  useState } from 'react';
import {useHistory} from 'react-router-dom';

import CarService from '../services/CarService';

const YEARS = Array(2018 - 1990 + 1)
  .fill(1990)
  .map((el, index) => el + index)


  const ENGINES = ['diesel', 'petrol', 'electric', 'hybrid'];

    function AddCar() {


    const history = useHistory();
    const [newCar,setNewCar] = useState({
        brand: '',
        model: '',
        year: YEARS[0],
        maxSpeed: '',
        numberOfDoors: '',
        isAutomatic: false,
        engine: '',

    });

    const handleSubmit = async (e) => {
        e.preventDefault();

        await CarService.add(newCar);

        history.push('/cars');
    
      };

      

    return(
            <div>
              <h2>Add new car</h2>
              <form
                onSubmit={handleSubmit}
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  width: 200,
                  marginLeft: 15,
                }}
              >
                <input
                  required
                  type='text'
                  minLength='2'
                  value={newCar.brand}
                  placeholder='Brand'
                  onChange={({ target }) =>
                    setNewCar({ ...newCar, brand: target.value })
                  }
                />
                <input
                  required
                  type='text'
                  minLength='2'
                  value={newCar.model}
                  placeholder='Model'
                  onChange={({ target }) =>
                    setNewCar({ ...newCar, model: target.value })
                  }
                />
                <select
                  style={{ width: 200 }}
                  onChange={({ target }) =>
                    setNewCar({ ...newCar, year: Number(target.value) })
                  }
                  value={newCar.year}
                >
                  {YEARS.map((year, index) => (
                    <option key={index} value={year}>
                      {year}
                    </option>
                  ))}
                </select>
                <input
                  type='number'
                  min='1'
                  value={newCar.maxSpeed}
                  placeholder='Max speed'
                  onChange={({ target }) =>
                    setNewCar({ ...newCar, maxSpeed: target.value })
                  }
                />
                <input
                  required
                  type='number'
                  min='1'
                  value={newCar.numberOfDoors}
                  placeholder='Number of door'
                  onChange={({ target }) =>
                    setNewCar({ ...newCar, numberOfDoors: target.value })
                  }
                />
                <span>
                  <label>Is automatic?</label>
                  <input
                    type='checkbox'
                    checked={newCar.isAutomatic}
                    onChange={({ target }) => {
                      setNewCar({ ...newCar, isAutomatic: target.checked });
                    }}
                  />
                </span>
        
                <div style={{ display: 'flex', flexDirection: 'column' }}>
                  <h4>Pick engine:</h4>
                  {ENGINES.map((engine, index) => (
                    <span key={index}>
                      <input
                        type='radio'
                        name='engine'
                        required
                        checked={engine === newCar.engine}
                        value={engine}
                        onChange={() => setNewCar({ ...newCar, engine })}
                      />
                      {engine.toUpperCase()}
                    </span>
                  ))}
                </div>
                <div>
                  <button>Add</button>
                
                </div>
              </form>
            </div>
          );
    
}


export default AddCar;
