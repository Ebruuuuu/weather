const storage=new Storage();
const weatherLocation=storage.getLocationData();

const weather=new Weather(weatherLocation);


const ui=new UI();

document.addEventListener('DOMContentLoaded',getWeather);

document.getElementById('w-change-btn').addEventListener('click',
(e)=>{
    const city=document.getElementById('city').value;

     // Change location
    weather.changeLocation(city);

    // Set location in LS
    storage.setLocationData(city);

    
    // Get and display weather
    getWeather();

    
    // Close modal
    $('#locModal').modal('hide');//In here, jquery used
})


function getWeather(){
    weather.getWeather()
    .then(results=>{
      ui.paint(results);  
    })
    .catch(err=>console.log(err));

}

