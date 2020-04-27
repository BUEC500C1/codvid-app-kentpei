import React, { Component } from 'react';
import { Text, StyleSheet, View, Dimensions, TouchableHighlight } from 'react-native';
import MapView, { PROVIDER_GOOGLE } from 'react-native-maps';



let { width, height } = Dimensions.get('window');
const ASPECT_RATIO = width / height;

getJson = (country) => {
    country = country.replace(" ", "-")
    console.log(country)
    const URL = `https://api.covid19api.com/total/country/${country}`;
    return fetch(URL)
            .then((res) => res.json());
}

export default class MapExample extends Component {
  constructor() {
    super();
    this.state = {
      region: {
        latitude: 42.3505,
        longitude: -71.1054,
        latitudeDelta: 90.0,
        longitudeDelta: 90.0,
      },
      i:0,
      worldtotalCases: '',
      worldtotalRecovered: '',
      worldtotalDeaths: '',
      country: 'Brazil',
      totalConfirmed: '',
      totalRecovered: '',
      totalDeaths: '',
      newConfirmed: '',
      newDeaths: '',
      newRecovered: '',
      error: false,
      US: '',
      Japan: '',
      Italy: '',
      UK: '',
      Brazil:'',
      China: '',
      Canada: '',
      Mexico:'',
      Russia: '',
      India: '',
      Australia:'',
      Germany: '',
      marker1:{
             title: 'US',
             description: 'Covid in United States',
             coordinates: {
               latitude: 34.0522,
               longitude: -118.2437
             }
           },

      marker2:{
        title: 'Japan',
        description: 'Covid in Japan',
        coordinates: {
        latitude: 36.2048,
        longitude: 139.6503
        }
      },

      marker3:{
        title: 'Italy',
        description: 'Covid in Italy',
        coordinates: {
        latitude: 41.8719,
        longitude: 12.5674
        }
      },
      marker4:{
          title: 'UK',
          description: 'Covid in United Kingdom',
          coordinates: {
          latitude: 53.3691,
          longitude: -0.1278
          }
        },
     marker5:{
        title: 'Brazil',
        description: 'Covid in Brazil',
        coordinates: {
          latitude: -15.8267,
          longitude: -47.9218
        }
      },

      marker6:{
        title: 'China',
        description: 'Covid in China',
        coordinates: {
        latitude: 39.9042,
        longitude: 116.4074
        }
      },

      marker7:{
        title: 'Canada',
        description: 'Covid in Canada',
        coordinates: {
        latitude: 45.4215,
        longitude: -75.6972
        }
      },

      marker8:{
        title: 'Mexico',
        description: 'Covid in Mexico',
        coordinates: {
        latitude: 19.4326,
        longitude: -99.1312
        }
      },

      marker9:{
        title: 'Russia',
        description: 'Covid in Russia',
        coordinates: {
        latitude: 61.5240,
        longitude: 105.3188
        }
      },

      marker10:{
        title: 'Australia',
        description: 'Covid in India',
        coordinates: {
         latitude: -25.2744,
         longitude: 133.7751
        }
      },
     marker11:{
              title: 'india',
              description: 'Covid in India',
              coordinates: {
              latitude: 28.6139,
              longitude: 77.2090
              }
            },


      marker12:{
        title: 'Germany',
        description: 'Covid in Germany',
        coordinates: {
        latitude: 51.1657,
        longitude: 10.4515
        }
      }
    };
    
  }

  componentDidMount() {
    var requestOptions = {
      method: 'GET',
      redirect: 'follow'
    };
    fetch('https://api.covid19api.com/summary', requestOptions)
      .then(response => response.json())
      .then(json => {
      this.setState({ worldtotalCases:  json['Global']['TotalConfirmed'] });
      this.setState({ worldtotalDeaths: json['Global']['TotalDeaths'] });
      this.setState({ worldtotalRecovered: json['Global']['TotalRecovered'] });
    })
      
    .catch(error => {
      console.log(error);
    });
            
}


  render() {
    //const { totalCon, TotalD, TotalRec } = this.state;
    const { Brazil, Japan, Italy, UK, US, China, Canada, Mexico, Russia, India, Germany,Australia } = this.state;
    const {marker1, marker2, marker3, marker4, marker5, marker6, marker7, marker8, marker9, marker10, marker11,marker12} = this.state;
    var Country = [
    "US",
    "Japan",
    "Italy",
    "UK",
    "Brazil",
    "China",
    "Canada",
    "Mexico",
    "Russia",
    "India",
    "Australia",
    "Germany"];
    var i = this.state.i;
    if(i<1){
        this.setState({i:1});
    for(let i = 0; i < Country.length; i++) {
        getJson(Country[i]).then((res) => {
            switch (Country[i]) {
            case "Brazil":
            var Confirmed = res[res.length-1]['Confirmed'];
            var Deaths = res[res.length-1]['Deaths'];
            var Recovered = res[res.length-1]['Recovered'];
            var NEWDeaths = res[res.length-1]['Deaths'] - res[res.length-2]['Deaths'];
            var NEWConfirmed = res[res.length-1]['Confirmed'] - res[res.length-2]['Confirmed'];
            var NEWRecovered = res[res.length-1]['Recovered'] - res[res.length-2]['Recovered'];
            this.setState({"Brazil":
                  'totalConfirmed: ' + Confirmed + '\n' +
                  'totalRecovered: ' + Recovered + '\n' +
                  'totalDeaths: ' + Deaths + '\n' +
                  'newConfirmed: ' + NEWConfirmed + '\n' +
                  'newDeaths: ' + NEWDeaths + '\n' +
                  'newRecovered: ' + NEWRecovered
                })
            break;
            case "Japan":
            var Confirmed = res[res.length-1]['Confirmed'];
            var Deaths = res[res.length-1]['Deaths'];
            var Recovered = res[res.length-1]['Recovered'];
            var NEWDeaths = res[res.length-1]['Deaths'] - res[res.length-2]['Deaths'];
            var NEWConfirmed = res[res.length-1]['Confirmed'] - res[res.length-2]['Confirmed'];
            var NEWRecovered = res[res.length-1]['Recovered'] - res[res.length-2]['Recovered'];
            this.setState({Japan:
                  'totalConfirmed: ' + Confirmed + '\n' +
                  'totalRecovered: ' + Recovered + '\n' +
                  'totalDeaths: ' + Deaths + '\n' +
                  'newConfirmed: ' + NEWConfirmed + '\n' +
                  'newDeaths: ' + NEWDeaths + '\n' +
                  'newRecovered: ' + NEWRecovered
                })
            break;
            case "Italy":
            var Confirmed = res[res.length-1]['Confirmed'];
            var Deaths = res[res.length-1]['Deaths'];
            var Recovered = res[res.length-1]['Recovered'];
            var NEWDeaths = res[res.length-1]['Deaths'] - res[res.length-2]['Deaths'];
            var NEWConfirmed = res[res.length-1]['Confirmed'] - res[res.length-2]['Confirmed'];
            var NEWRecovered = res[res.length-1]['Recovered'] - res[res.length-2]['Recovered'];
            this.setState({Italy:
                  'totalConfirmed: ' + Confirmed + '\n' +
                  'totalRecovered: ' + Recovered + '\n' +
                  'totalDeaths: ' + Deaths + '\n' +
                  'newConfirmed: ' + NEWConfirmed + '\n' +
                  'newDeaths: ' + NEWDeaths + '\n' +
                  'newRecovered: ' + NEWRecovered
                })
            break;
            case "UK":
            var Confirmed = res[res.length-1]['Confirmed'];
            var Deaths = res[res.length-1]['Deaths'];
            var Recovered = res[res.length-1]['Recovered'];
            var NEWDeaths = res[res.length-1]['Deaths'] - res[res.length-2]['Deaths'];
            var NEWConfirmed = res[res.length-1]['Confirmed'] - res[res.length-2]['Confirmed'];
            var NEWRecovered = res[res.length-1]['Recovered'] - res[res.length-2]['Recovered'];
            this.setState({UK:
                  'totalConfirmed: ' + Confirmed + '\n' +
                  'totalRecovered: ' + Recovered + '\n' +
                  'totalDeaths: ' + Deaths + '\n' +
                  'newConfirmed: ' + NEWConfirmed + '\n' +
                  'newDeaths: ' + NEWDeaths + '\n' +
                  'newRecovered: ' + NEWRecovered
                })
            break;
            case "US":
            var Confirmed = res[res.length-1]['Confirmed'];
            var Deaths = res[res.length-1]['Deaths'];
            var Recovered = res[res.length-1]['Recovered'];
            var NEWDeaths = res[res.length-1]['Deaths'] - res[res.length-2]['Deaths'];
            var NEWConfirmed = res[res.length-1]['Confirmed'] - res[res.length-2]['Confirmed'];
            var NEWRecovered = res[res.length-1]['Recovered'] - res[res.length-2]['Recovered'];
            this.setState({US:
                  'totalConfirmed: ' + Confirmed + '\n' +
                  'totalRecovered: ' + Recovered + '\n' +
                  'totalDeaths: ' + Deaths + '\n' +
                  'newConfirmed: ' + NEWConfirmed + '\n' +
                  'newDeaths: ' + NEWDeaths + '\n' +
                  'newRecovered: ' + NEWRecovered
                })
            break;
            case "China":
            var Confirmed = res[res.length-1]['Confirmed'];
            var Deaths = res[res.length-1]['Deaths'];
            var Recovered = res[res.length-1]['Recovered'];
            var NEWDeaths = res[res.length-1]['Deaths'] - res[res.length-2]['Deaths'];
            var NEWConfirmed = res[res.length-1]['Confirmed'] - res[res.length-2]['Confirmed'];
            var NEWRecovered = res[res.length-1]['Recovered'] - res[res.length-2]['Recovered'];
            this.setState({China:
                  'totalConfirmed: ' + Confirmed + '\n' +
                  'totalRecovered: ' + Recovered + '\n' +
                  'totalDeaths: ' + Deaths + '\n' +
                  'newConfirmed: ' + NEWConfirmed + '\n' +
                  'newDeaths: ' + NEWDeaths + '\n' +
                  'newRecovered: ' + NEWRecovered
                })
            break;
            case "Canada":
            var Confirmed = res[res.length-1]['Confirmed'];
            var Deaths = res[res.length-1]['Deaths'];
            var Recovered = res[res.length-1]['Recovered'];
            var NEWDeaths = res[res.length-1]['Deaths'] - res[res.length-2]['Deaths'];
            var NEWConfirmed = res[res.length-1]['Confirmed'] - res[res.length-2]['Confirmed'];
            var NEWRecovered = res[res.length-1]['Recovered'] - res[res.length-2]['Recovered'];
            this.setState({Canada:
                  'totalConfirmed: ' + Confirmed + '\n' +
                  'totalRecovered: ' + Recovered + '\n' +
                  'totalDeaths: ' + Deaths + '\n' +
                  'newConfirmed: ' + NEWConfirmed + '\n' +
                  'newDeaths: ' + NEWDeaths + '\n' +
                  'newRecovered: ' + NEWRecovered
                })
            break;
            case "Mexico":
            var Confirmed = res[res.length-1]['Confirmed'];
            var Deaths = res[res.length-1]['Deaths'];
            var Recovered = res[res.length-1]['Recovered'];
            var NEWDeaths = res[res.length-1]['Deaths'] - res[res.length-2]['Deaths'];
            var NEWConfirmed = res[res.length-1]['Confirmed'] - res[res.length-2]['Confirmed'];
            var NEWRecovered = res[res.length-1]['Recovered'] - res[res.length-2]['Recovered'];
            this.setState({Mexico:
                  'totalConfirmed: ' + Confirmed + '\n' +
                  'totalRecovered: ' + Recovered + '\n' +
                  'totalDeaths: ' + Deaths + '\n' +
                  'newConfirmed: ' + NEWConfirmed + '\n' +
                  'newDeaths: ' + NEWDeaths + '\n' +
                  'newRecovered: ' + NEWRecovered
                })
            break;
            case "Russia":
            var Confirmed = res[res.length-1]['Confirmed'];
            var Deaths = res[res.length-1]['Deaths'];
            var Recovered = res[res.length-1]['Recovered'];
            var NEWDeaths = res[res.length-1]['Deaths'] - res[res.length-2]['Deaths'];
            var NEWConfirmed = res[res.length-1]['Confirmed'] - res[res.length-2]['Confirmed'];
            var NEWRecovered = res[res.length-1]['Recovered'] - res[res.length-2]['Recovered'];
            this.setState({Russia:
                  'totalConfirmed: ' + Confirmed + '\n' +
                  'totalRecovered: ' + Recovered + '\n' +
                  'totalDeaths: ' + Deaths + '\n' +
                  'newConfirmed: ' + NEWConfirmed + '\n' +
                  'newDeaths: ' + NEWDeaths + '\n' +
                  'newRecovered: ' + NEWRecovered
                })
            break;
            case "India":
            var Confirmed = res[res.length-1]['Confirmed'];
            var Deaths = res[res.length-1]['Deaths'];
            var Recovered = res[res.length-1]['Recovered'];
            var NEWDeaths = res[res.length-1]['Deaths'] - res[res.length-2]['Deaths'];
            var NEWConfirmed = res[res.length-1]['Confirmed'] - res[res.length-2]['Confirmed'];
            var NEWRecovered = res[res.length-1]['Recovered'] - res[res.length-2]['Recovered'];
            this.setState({India:
                  'totalConfirmed: ' + Confirmed + '\n' +
                  'totalRecovered: ' + Recovered + '\n' +
                  'totalDeaths: ' + Deaths + '\n' +
                  'newConfirmed: ' + NEWConfirmed + '\n' +
                  'newDeaths: ' + NEWDeaths + '\n' +
                  'newRecovered: ' + NEWRecovered
                })
            break;
            case "Germany":
            var Confirmed = res[res.length-1]['Confirmed'];
            var Deaths = res[res.length-1]['Deaths'];
            var Recovered = res[res.length-1]['Recovered'];
            var NEWDeaths = res[res.length-1]['Deaths'] - res[res.length-2]['Deaths'];
            var NEWConfirmed = res[res.length-1]['Confirmed'] - res[res.length-2]['Confirmed'];
            var NEWRecovered = res[res.length-1]['Recovered'] - res[res.length-2]['Recovered'];
            this.setState({Germany:
                  'totalConfirmed: ' + Confirmed + '\n' +
                  'totalRecovered: ' + Recovered + '\n' +
                  'totalDeaths: ' + Deaths + '\n' +
                  'newConfirmed: ' + NEWConfirmed + '\n' +
                  'newDeaths: ' + NEWDeaths + '\n' +
                  'newRecovered: ' + NEWRecovered
                })
            break;
            case "Australia":
            var Confirmed = res[res.length-1]['Confirmed'];
            var Deaths = res[res.length-1]['Deaths'];
            var Recovered = res[res.length-1]['Recovered'];
            var NEWDeaths = res[res.length-1]['Deaths'] - res[res.length-2]['Deaths'];
            var NEWConfirmed = res[res.length-1]['Confirmed'] - res[res.length-2]['Confirmed'];
            var NEWRecovered = res[res.length-1]['Recovered'] - res[res.length-2]['Recovered'];
            this.setState({Australia:
                  'totalConfirmed: ' + Confirmed + '\n' +
                  'totalRecovered: ' + Recovered + '\n' +
                  'totalDeaths: ' + Deaths + '\n' +
                  'newConfirmed: ' + NEWConfirmed + '\n' +
                  'newDeaths: ' + NEWDeaths + '\n' +
                  'newRecovered: ' + NEWRecovered
                })
            break;
            }
            })
            
          .catch(error => {
            console.log(error);
          });
    }
        }
        

      
    
    return (
      <View style={styles.container}>
      <MapView
        style={styles.map}
        provider={PROVIDER_GOOGLE}
        initialRegion={this.state.region}
        //showsUserLocation={true}
        onMapReady={this.onMapReady}
        onRegionChangeComplete={this.onRegionChange}>
        <MapView.Marker
          coordinate={marker1.coordinates}
        >
        <MapView.Callout>
            <View>
              <Text>
                {marker1.title}{"\n"}
                {marker1.description} {"\n"}
                {US}
              </Text>
            </View>
          </MapView.Callout>
        </MapView.Marker>
            
        <MapView.Marker
          coordinate={marker2.coordinates}
        >
          <MapView.Callout>
            <View>
              <Text>
                {marker2.title}{"\n"}
                {marker2.description} {"\n"}
                {Japan}
              </Text>
            </View>
          </MapView.Callout>
        </MapView.Marker>

        <MapView.Marker
            coordinate={marker3.coordinates}
               >
                 <MapView.Callout>
                   <View>
                     <Text>
                       {marker3.title}{"\n"}
                       {marker3.description} {"\n"}
                       {Italy}
                     </Text>
                   </View>
                 </MapView.Callout>
               </MapView.Marker>
        <MapView.Marker
            coordinate={marker4.coordinates}
               >
                 <MapView.Callout>
                   <View>
                     <Text>
                       {marker4.title}{"\n"}
                       {marker4.description} {"\n"}
                       {UK}
                     </Text>
                   </View>
                 </MapView.Callout>
               </MapView.Marker>
        <MapView.Marker
        coordinate={marker5.coordinates}
           >
             <MapView.Callout>
               <View>
                 <Text>
                   {marker5.title}{"\n"}
                   {marker5.description} {"\n"}
                   {Brazil}
                 </Text>
               </View>
             </MapView.Callout>
           </MapView.Marker>
        <MapView.Marker
        coordinate={marker6.coordinates}
           >
             <MapView.Callout>
               <View>
                 <Text>
                   {marker6.title}{"\n"}
                   {marker6.description} {"\n"}
                   {China}
                 </Text>
               </View>
             </MapView.Callout>
           </MapView.Marker>
        <MapView.Marker
        coordinate={marker7.coordinates}
           >
             <MapView.Callout>
               <View>
                 <Text>
                   {marker7.title}{"\n"}
                   {marker7.description} {"\n"}
                   {Canada}
                 </Text>
               </View>
             </MapView.Callout>
           </MapView.Marker>
        <MapView.Marker
        coordinate={marker8.coordinates}
           >
             <MapView.Callout>
               <View>
                 <Text>
                   {marker8.title}{"\n"}
                   {marker8.description} {"\n"}
                   {Mexico}
                 </Text>
               </View>
             </MapView.Callout>
           </MapView.Marker>
        <MapView.Marker
        coordinate={marker9.coordinates}
           >
             <MapView.Callout>
               <View>
                 <Text>
                   {marker9.title}{"\n"}
                   {marker9.description} {"\n"}
                   {Russia}
                 </Text>
               </View>
             </MapView.Callout>
           </MapView.Marker>
        <MapView.Marker
        coordinate={marker10.coordinates}
           >
             <MapView.Callout>
               <View>
                 <Text>
                   {marker10.title}{"\n"}
                   {marker10.description} {"\n"}
                   {Australia}
                 </Text>
               </View>
             </MapView.Callout>
           </MapView.Marker>
        <MapView.Marker
        coordinate={marker11.coordinates}
           >
             <MapView.Callout>
               <View>
                 <Text>
                   {marker11.title}{"\n"}
                   {marker11.description} {"\n"}
                   {India}
                 </Text>
               </View>
             </MapView.Callout>
           </MapView.Marker>
        <MapView.Marker
        coordinate={marker12.coordinates}
           >
             <MapView.Callout>
               <View>
                 <Text>
                   {marker12.title}{"\n"}
                   {marker12.description} {"\n"}
                   {Germany}
                 </Text>
               </View>
             </MapView.Callout>
           </MapView.Marker>
            
            
            
             </MapView>
    



       <View style={styles.whiteView}>
            
    <Text style={styles.title}>World Summary </Text>
    <Text style={styles.result}>Total Cases: {this.state.worldtotalCases} </Text>
    <Text style={styles.result}>Total Deaths: {this.state.worldtotalDeaths} </Text>
    <Text style={styles.result}>Total Recovered: {this.state.worldtotalRecovered}
            </Text>
                
            

      </View>
      </View>
      
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    backgroundColor: 'white',
    margin: 0,
    alignItems: 'center',
    justifyContent: 'center',
  },
  instruction: {
    color: "red"
  },
  map: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
  },
  whiteView: {
    position:'absolute',
    backgroundColor: 'black',
    justifyContent: 'center',
    height: 150,
    top: height-150,
    width: width,
  },
  title: {
    fontWeight: 'bold',
    fontSize: 30,
    textAlign: 'center',
    top: 5,
    color: 'white'
  },
  result: {
    padding: 10,
    textAlign: 'center',
    color: 'white',
    fontSize: 14,
  }

});
/*
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
 */



