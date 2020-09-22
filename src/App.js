import React, { Component } from 'react';
import './App.css';
import Card from './components/Card/Card'

const apiUrl = 'https://services3.arcgis.com/66aUo8zsujfVXRIT/arcgis/rest/services/colorado_covid19_daily_state_statistics_cumulative/FeatureServer/0/query?where=1%3D1&outFields=*&orderByFields=date%20ASC&outSR=4326&f=json'

class App extends Component  {
  state = {
    data: []
  }

  componentDidMount() {
    fetch(apiUrl)
      .then(res => res.json())
      .then(resJson => {
        const cleanedData = this.cleanData(resJson.features)
        this.setState({ data: cleanedData })
      }) 
      .catch(err => console.log(err))
  }

  cleanData(data){
    const newData = [];
    data.map(attr => newData.push(...Object.values(attr)))
    const filteredData = newData.filter(attr => attr.Date !== null)
    return filteredData;
  }

  render(){
    return (
      <div className="App">
          <Card data={this.state.data}/>
      </div>
    );
  }
  
}

export default App;
