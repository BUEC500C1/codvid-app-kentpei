import * as React from 'react';
import { Platform, StyleSheet, Text, View } from 'react-native';
import MapView, {Marker} from 'react-native-maps';
//import MapView,  {Marker} ,{ PROVIDER_GOOGLE } from 'react-native-maps';

export default

class App extends React.Component {
  render() {
    return (
      <MapView
        style={{ flex: 1 }}
        //provider={PROVIDER_GOOGLE}
        showsUserLocation
        initialRegion={{
        // Latitude and longitude are used to tell the position of the object
        // BU address
        latitude: 42.3505,
        longitude: -71.1054,
        // latitudeDelta and longitudeDelta are used to
        // provide the zoom options in the map.
        latitudeDelta: 0.0922,
        longitudeDelta: 0.0421}}
    >
        <Marker
            draggable
            coordinate={{
              latitude: 42.349300,
              longitude: -71.106537,
            }}
            onDragEnd={(e) => alert(JSON.stringify(e.nativeEvent.coordinate))}
            title={'Test Marker'}
            description={'This is a description of the marker'}
          />
        </MapView>

      
    );
  }
}
