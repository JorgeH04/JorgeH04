import React from 'react';

const WeatherForm = props => (



  <div className="cardd card-body mt-5" >

  <form onSubmit={props.getWeather}>
              
              <div className="form-group ">
                  <input type="text" name="country" placeholder="Digite el código del país" className="form-control" />
              </div>
              <button className="btn btn-success btn-block">
                  OBTENER PAÍS
              </button>
          </form>
  
          
  </div>
  
    
);

export default WeatherForm;