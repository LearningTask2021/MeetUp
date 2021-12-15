import { add } from "ngx-bootstrap/chronos";
import { Address } from "./address";

export class Employee {
     id:String;
     firstName:String;
     lastName:String;
     address:Address;
     company:String;
     designation:String;
     dob:Date;
     username:String;
     password:String;
/**
 *
 */
constructor(firstName:String,lastName:String,address:Address,company:String,designation:String,dob:Date,username:String,password:String){
this.firstName=firstName;
this.lastName=lastName;
this.address=address;
this.company=company;
this.designation=designation;
this.dob=dob;
this.username=username;
this.password=password;
}

}
