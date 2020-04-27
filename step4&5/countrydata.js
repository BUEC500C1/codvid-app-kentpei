import React, { Component } from 'react';
import {View, Text, StyleSheet, TextInput, TouchableHighlight} from 'react-native';

getJson = (country) => {
    country = country.replace(" ", "-")
    console.log(country)
    const URL = `https://api.covid19api.com/total/country/${country}`;
    return fetch(URL)
            .then((res) => res.json());
}


export default class APP extends React.Component {
  constructor(props) {
      super(props);
      this.state = {
        worldtotalCases: '',
        worldtotalRecovered: '',
        worldtotalDeaths: '',
        country: '',
        totalConfirmed: '',
        totalRecovered: '',
        totalDeaths: '',
        newConfirmed: '',
        newDeaths: '',
        newRecovered: '',
        error: false
      }
      this.handleChange = this.handleChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
    }
    componentDidMount() {
    var requestOptions = {
      method: 'GET',
      redirect: 'follow'
    };
    fetch('https://api.covid19api.com/summary', requestOptions)
      .then(response => response.json())
      .then(json => {
        this.setState({
          worldtotalCases: json['Global']['TotalConfirmed'],
        });
        this.setState({
          worldtotalRecovered: json['Global']['TotalRecovered'],
        });
        this.setState({
          worldtotalDeaths: json['Global']['TotalDeaths'],
        });
          })
               .catch(error => {
                 console.error(error);
               });
           }

    handleChange(e) {
      this.setState({
        country: e.nativeEvent.text
      });
    }

    handleSubmit() {
      getJson(this.state.country)
          .then((res) => {
              var Confirmed = res[res.length-1]['Confirmed'];
              var Deaths = res[res.length-1]['Deaths'];
              var Recovered = res[res.length-1]['Recovered'];
              var NEWDeaths = res[res.length-1]['Deaths'] - res[res.length-2]['Deaths'];
              var NEWConfirmed = res[res.length-1]['Confirmed'] - res[res.length-2]['Confirmed'];
              var NEWRecovered = res[res.length-1]['Recovered'] - res[res.length-2]['Recovered'];
                  this.setState({
                    totalConfirmed: Confirmed,
                    totalRecovered: Recovered,
                    totalDeaths: Deaths,
                    newConfirmed: NEWConfirmed,
                    newDeaths: NEWDeaths,
                    newRecovered: NEWRecovered,
                  });
            
        });
    }
    
  render() {
    
    return (
 <MapView
 
     style={{ flex: 1 }}
     //provider={PROVIDER_GOOGLE}
     showsUserLocation
   >
          
     <Marker draggable
          
         coordinate={this.state.region}
         style={{position:'absolute',top:'50%',left:'50%'}}
         onPress={e => log('onPress', e)}

         //onDragEnd={(e) =>  this.setState({ x: e.nativeEvent.coordinate })}

          
         onDragEnd={(e) =>var coordinate1 =JSON.stringify(e.nativeEvent.coordinate)
 
       alert(coordinate1)}
         //"Total Cases: " + JSON.stringify(this.state.worldtotalCases)+ "<br/>" +"Total Deaths: "+JSON.stringify(this.state.worldtotalDeaths)

         title={'Marker'}
         //description={"coordinate: " + JSON.stringify(this.state.x)}
         description={"coordinate: " + JSON.stringify(this.state.region)}
         //infowindow.setContent("coordinate: " + JSON.stringify(this.state.region));
       />
          

     </MapView>

      <View style={styles.main}>
        <Text style={styles.title2}>World Summary </Text>
        <Text style={styles.result}>Total Cases: {this.state.worldtotalCases} </Text>
        <Text style={styles.result}>Total Deaths: {this.state.worldtotalDeaths} </Text>
        <Text style={styles.result}>Total Recovered: {this.state.worldtotalRecovered}
                </Text>

        <Text style={styles.title}>Input Country Name</Text>
        <TextInput
              style={styles.searchInput}
              onChange={this.handleChange}
        />
        <TouchableHighlight
                style = {styles.button}
                underlayColor= "white"
                onPress = {this.handleSubmit}
              >
              <Text
                  style={styles.buttonText}>
                  Search
              </Text>
        </TouchableHighlight>

        <Text style={styles.result}>Total Confirmed: {this.state.totalConfirmed} </Text>
        <Text style={styles.result}>Total Recovered: {this.state.totalRecovered} </Text>
        <Text style={styles.result}>Total Deaths: {this.state.totalDeaths} </Text>
        <Text style={styles.result}>New Confirmed: {this.state.newConfirmed} </Text>
        <Text style={styles.result}>New Recovered: {this.state.newRecovered}</Text>
        <Text style={styles.result}>New Deaths: {this.state.newDeaths}</Text>

          
      </View>
    )
  }
}

const styles = StyleSheet.create({
  main: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#000000'
  },
  title: {
    marginBottom: 50,
    fontSize: 30,
    color: 'white',
    textAlign: 'center'
  },
  title2: {
      marginBottom: 20,
      fontSize: 30,
      color: 'white',
      textAlign: 'center'
    },
  searchInput: {
    height: 40,
    padding: 4,
    marginRight: 5,
    fontSize: 20,
    borderWidth: 1,
    borderColor: 'white',
    color: 'white'
  },
  buttonText: {
    fontSize: 20,
    color: 'black',
    alignSelf: 'center'
  },
  button: {
    height: 40,
    width: 80,
    flexDirection: 'row',
    backgroundColor:'white',
    borderColor: 'black',
    borderWidth: 1,
    marginBottom: 5,
    marginTop: 5,
    //borderWidth: 20,
    alignSelf: 'center',
    justifyContent: 'center'
  },
  result: {
    padding: 10,
    color: 'white',
    fontSize: 20
  }
});
