import React, { Component } from "react";
import "./App.css";
import Axios from "axios";

class App extends Component {
  componentDidMount() {
    this.getVenues();
    this.renderMap();
  }

  renderMap = () => {
    loadScript(
      "https://maps.googleapis.com/maps/api/js?key=AIzaSyBwNIPdWHUSaCTo0S4auHHRd_1WBdLiI6k&callback=initMap"
    );
    window.initMap = this.initMap;
  };

  getVenues = () => {
    const endPoint = "https://api.foursquare.com/v2/venues/explore";
    const parameters = {
      client_id: "MH3QUI3MB2ICJGR2PLI4I0K2QMQOJVF5LCERZU3W4S4JSWUA",
      client_secret: "SWX1KVDFHPVQLEKPAPAX1Q3HEEFJ0DVL0VDIOQRQCCZAIGEZ",
      query: "food",
      near: "Sydne",
      v: "20182507"
    };

    Axios.get(endPoint + new URLSearchParams(parameters))
      .then(res => {
        console.log(res);
      })
      .catch(a => {
        console.log(a);
      });
  };

  initMap = () => {
    var map = new window.google.maps.Map(document.getElementById("map"), {
      center: { lat: -34.397, lng: 150.644 },
      zoom: 8
    });
  };

  render() {
    return (
      <main>
        <div id="map" />
      </main>
    );
  }
}

function loadScript(url) {
  var index = window.document.getElementsByTagName("script")[0];
  var script = window.document.createElement("script");
  script.src = url;
  script.defer = true;
  index.parentNode.insertBefore(script, index);
}
export default App;
