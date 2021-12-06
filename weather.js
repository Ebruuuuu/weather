class Weather{
  constructor(city){
      this.apiKey='5a6ddf464afb6756071cc6aebb9cfcfb';
      this.city=city;
  }  

  //Fetch weather from API
  async getWeather(){

      const response=await fetch
      (`http://api.openweathermap.org/data/2.5/weather?q=${this.city}&appid=${this.apiKey}`);
      
      const responseData=await response.json();

      return responseData;
  }

  //Change weather location

  changeLocation(city){
      this.city=city;
  }
}