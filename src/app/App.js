import React, { Component } from 'react';

import WeatherForm from './components/CoronaForm';
import WeatherInfo from './components/CoronaInfo';


class App extends Component {

    state = {
        country: '',
        countries: '',
        confirmed: '',
        recovered: '',
        deaths: ''
    };



    componentDidMount() {
        this.fetchData();
    }
 
 
     fetchData() {
         fetch('https://covid19.mathdro.id/api/countries')
          .then(res => res.json())
          .then(data => {
              this.setState({countries: data});
              console.log(this.state.countries)
          })
 
     }
 

    getWeather = async (e) => {
        e.preventDefault();
        const { country } = e.target.elements;
        const countryValue = country.value;

        if (countryValue) {
            // metric parameter is for Celcius Unit
            const API_URL = `https://covid19.mathdro.id/api/countries/${countryValue}`;
            const response = await fetch(API_URL);
            const data = await response.json();
            console.log(data)

            this.setState({
              country: country.value,
              confirmed: data.confirmed.value,
              recovered: data.recovered.value,
              deaths: data.deaths.value
            });
        } else {
            this.setState({
                error: 'Please enter a City and a Country.'
            });
        }

    }

  



    render() {
        return <div className="container p-4">
            <div className="row">
                <div className="col-md-6 mx-auto">
                    <WeatherForm
                        getWeather={this.getWeather}
                    />
                    <WeatherInfo {...this.state} />
                </div>
            </div>
        </div>
    }
}

export default App;