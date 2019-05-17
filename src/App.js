import React,{
  Component
} 
from 'react';

import {
  onGetCurrentCoordinatesAsync
}
from "./store/actions/coordinates";

import {
  onGetWeatherDataAsync
}
from "./store/actions/weatherData"

import {
  connect
}
from "react-redux";

import {
  getKey,
  addClassesToBody
}
from "./utilities"

import * as Layout from "./components/bootstrap/layout";

import Container from "./components/bootstrap/container";

import Header from "./components/header/header";

import SunRiseSet from "./components/sunRiseSet/sunRiseSet";

import Loader from "./hoc/loader/loader";

import CatchAllError from './hoc/catchAllError';

import timeToString from "./functions/timeToString";

import Card from "./components/card/card";

import {
  Title
} 
from "./components/bootstrap";

import * as units from "./components/units";

class App extends Component {
  componentDidMount() {
    this.props.onGetCurrentCoordinatesAsync();
    this.props.onGetWeatherDataAsync();
    addClassesToBody("bg-light px-5 py-4")
  }

  getDataProperty = (...properties) => {
    return getKey(this.props.data, properties);
  }

  getHeader = () => {
    const city = this.getDataProperty("name");
    const country = this.getDataProperty("sys", "country");

    if (city && country) {
      return `${city}, ${country}`;
    }

    else if (city) {
      return city;
    }
  }

  render() {
    return (
      <CatchAllError>
        <Loader>
          <Header>
            {this.getHeader()}
          </Header>

          <Container color="white">
            <Layout.Grid>
              <SunRiseSet
              rise={timeToString(this.getDataProperty("sys", "sunrise"))}
              set={timeToString(this.getDataProperty("sys", "sunset"))}/>

              <Layout.Row>
                <Card header="Temperature">
                  <Title level="6" transform="capitalize"> 
                    {this.getDataProperty("weather", 0, "description")}
                  </Title>

                  <units.Temperature value={this.getDataProperty("main", "temp")}/>

                  <units.Moisture value={this.getDataProperty("main", "humidity")}/>
                </Card>

                <Card header="Wind">
                  <units.WindDirection value={this.getDataProperty("wind", "deg")}/>

                  <units.WindVelocity value={this.getDataProperty("wind", "speed")}/>

                  <units.Pressure value={this.getDataProperty("main", "pressure")}/>
                </Card>
              </Layout.Row>  
            </Layout.Grid> 
          </Container>
        </Loader>
      </CatchAllError>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  onGetCurrentCoordinatesAsync: () => dispatch(onGetCurrentCoordinatesAsync()),
  onGetWeatherDataAsync: () => dispatch(onGetWeatherDataAsync())
});

const mapStateToProps = state => ({
  data: state.weatherData.data,
  dataError: state.weatherData.isErrorWeatherData,
  gpsError: state.coordinates.isGpsFailure
});

export default connect(mapStateToProps, mapDispatchToProps)(App);