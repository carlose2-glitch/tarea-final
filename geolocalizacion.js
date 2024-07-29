const button = document.getElementById('button');
(()=> {
    const body = document.querySelector('body')
    if(navigator.geolocation){
        navigator.geolocation.getCurrentPosition(obtener, error);
        
    }else{

    body.innerHTML = 'El navegador no soporta Geolocalizacion'
    }

})();

function obtener(p){
    const longitud = document.getElementById('longitud');
    const latitud = document.getElementById('latitud');

    longitud.textContent = p.coords.latitude;
    latitud.textContent = p.coords.longitude;


}

function error(p){
    console.log(p)
}

button.addEventListener('click', e => {
    e.preventDefault();

    url = `https://www.openstreetmap.org/#map=17/${latitud}/${longitud}`;
    window.open(url);
})

