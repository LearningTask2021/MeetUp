import { zip } from "rxjs";

export class Address {
    id:String;
    streetName:String;
    city:String;
    state:String;
    zipCode:String;
    country:String;

    /**
     *
     */
    constructor(streetName:String,city:string,state:String,zipCode:String,country:String) {
        this.streetName=streetName;
        this.city=city;
        this.state=state;
        this.country=country;
        this.zipCode=zipCode;
        
    }
}
