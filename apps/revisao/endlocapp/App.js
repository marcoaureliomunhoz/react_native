import React, {Component} from 'react';
import {Button, Text, View} from 'react-native';
import Geolocation from 'react-native-geolocation-service';
import {PermissionsAndroid} from 'react-native';
import Geocoder from 'react-native-geocoding';

type Props = {};
export default class App extends Component<Props> {
  
  async requestLocationPermission() {
    try {
      const granted = await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
        {
          'title': 'Localizador de Endereço',
          'message': 'O aplicativo precisa acessar de permissão para acessar sua localização para obter o endereço'
        }
      );
      this.setState({ locationPermission: granted });
      if (granted !== PermissionsAndroid.RESULTS.GRANTED) {
        alert('Localização negada, não será possível obter o endereço');
      }
    } catch (err) {
      alert(err)
    }
  }

  constructor(props) {
    super(props);

    this.state = { locationPermission: true }
  }

  async componentWillMount() {
    await this.requestLocationPermission();
  }

  localizar() {
    if (this.state.locationPermission) {
      Geolocation.getCurrentPosition(
          (position) => {
            this.endereco(position);
          },
          (error) => {
            alert(`${error.code} - ${error.message}`);
          },
          { enableHighAccuracy: true, timeout: 15000, maximumAge: 10000 }
      );
    }
  }

  endereco(position) {
    Geocoder.init('AIza...');

    const crd = position.coords;

    Geocoder.from(crd.latitude, crd.longitude)
		.then(json => {
        const addressComponents = json && json.results[0] ? json.results[0].address_components : null;
        const addressComponent1 = addressComponents ? addressComponents.filter(adc => adc.types[0] === 'administrative_area_level_1') : null;
        const addressComponent2 = addressComponents ? addressComponents.filter(adc => adc.types[0] === 'administrative_area_level_2') : null;
        const estado = addressComponent1 && addressComponent1.length > 0 ? addressComponent1[0].short_name : '';
        const municipio = addressComponent2 && addressComponent2.length > 0 ? addressComponent2[0].long_name : '';
        const texto = 
        `Sua localização atual é:
          Latitude: ${crd.latitude}
          Longitude: ${crd.longitude}
          Mais ou menos ${crd.accuracy} metros
          Endereço: ${municipio} ${estado}`;
        alert(texto);
		})
		.catch(error => console.warn(error));
  }
  
  render() {
    return (
      <View style={{padding:20}}>
        <Button title="Localizar" onPress={() => this.localizar()}/>
      </View>
    );
  }
}
