const posizione = document.getElementById("demo");

function getLocation() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(showPosition, showError);
    } else { 
      posizione.innerHTML = "Geolocation is not supported by this browser.";
    }
  }
  
  function showPosition(position) {
    posizione.innerHTML = `<a href="https://www.google.com/maps/dir//'${position.coords.latitude},${position.coords.longitude}'">clicca qua</a>`
  }
  
  function showError(error) {
    switch(error.code) {
      case error.PERMISSION_DENIED:
        posizione.innerHTML = "User denied the request for Geolocation."
        break;
      case error.POSITION_UNAVAILABLE:
        posizione.innerHTML = "Location information is unavailable."
        break;
      case error.TIMEOUT:
        posizione.innerHTML = "The request to get user location timed out."
        break;
      case error.UNKNOWN_ERROR:
        posizione.innerHTML = "An unknown error occurred."
        break;
    }
  }