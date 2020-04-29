<template>
  <div>
    ค้นหาเส้นทาง
    <div>{{ result.status }}</div>
    <h3>My Google Maps Demo</h3>
    <button v-on:click="setDirections(result)">Get direction</button>

    <div id="map"></div>
  </div>
</template>
<script>
import axios from "axios";

const initMap = () => {
  var directionsService = new google.maps.DirectionsService();
  var directionsRenderer = new google.maps.DirectionsRenderer();
  var haight = new google.maps.LatLng(37.7699298, -122.4469157);
  var chicago = new google.maps.LatLng(41.850033, -87.6500523);
  var mapOptions = {
    zoom: 7,
    center: haight
  };
  var map = new google.maps.Map(document.getElementById("map"), mapOptions);
  directionsRenderer.setMap(map);
};

const getDirection = async () => {
  let result = await axios("http://localhost:4000/api/doscg/direction");
  const { data } = result.data;
  return data;
};

export default {
  name: "Direction",
  data() {
    return {
      result: ""
    };
  },
  async mounted() {
    initMap();
    this.result = await getDirection();
  },
  methods: {
    setDirections: result => {
      var directionsService = new google.maps.DirectionsService();
      var directionsRenderer = new google.maps.DirectionsRenderer();
      console.log("result: " + result);
      directionsRenderer.setDirections(result);
    }
  }
};
</script>

<style scoped>
#map {
  height: 400px; /* The height is 400 pixels */
  width: 100%; /* The width is the width of the web page */
}
</style>
