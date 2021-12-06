class Storage{
    constructor(){
        this.city=city;
        this.defaultCity='Ankara';
        
    }

    //Burada JSON formatının dönüşüm özelliklerini kullanmadık, çünkü elimizdeki veriler string veri tipindeydi.
    getLocationData(){
        if(localStorage.getItem('city')===null){
            this.city=this.defaultCity;
        }else{
            this.city=localStorage.getItem('city');
        }

        return{
            city:this.city
        }

    }

    setLocationData(city){
        localStorage.setItem('city',city);
    }
}