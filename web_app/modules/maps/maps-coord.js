        var a=sessionStorage.long;
        var b=sessionStorage.lat;
        var lo=parseFloat(a);
        var la=parseFloat(b);
function initMap() {
        var loc = {lat: la, lng: lo};
        var map = new google.maps.Map(document.getElementById('map'), {
          zoom: 16,
          center: loc
        });
        var marker = new google.maps.Marker({
          position: loc,
          map: map
        });
      }
