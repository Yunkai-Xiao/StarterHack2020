import Autocomplete from 'react-google-autocomplete';

class autocomplete extends Component {
  onPlaceSelected = ( place ) => {
    const address = place.formatted_address,
    addressArray =  place.address_components,
    city = this.getCity( addressArray ),
    area = this.getArea( addressArray ),
    state = this.getState( addressArray ),
    latValue = place.geometry.location.lat(),
    lngValue = place.geometry.location.lng();

  this.setState({
   address: ( address ) ? address : '',
   area: ( area ) ? area : '',
   city: ( city ) ? city : '',
   state: ( state ) ? state : '',
   markerPosition: {
    lat: latValue,
    lng: lngValue
   },
   mapPosition: {
    lat: latValue,
    lng: lngValue
   },
  })
 };
render(){
return(
      <Autocomplete
       style={{
        width: '100%',
        height: '40px',
        paddingLeft: '16px',
        marginTop: '2px',
        marginBottom: '100px'
       }}
       onPlaceSelected={ this.onPlaceSelected }
       types={['(regions)']}
      />
)
      }}

export default autocomplete;
