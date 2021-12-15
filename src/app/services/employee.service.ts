import { Injectable } from '@angular/core';
import { Employee } from '../model/employee';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  
  USER_SESSION_ATTRIBUTE_NAME= 'authenticatedUser';

   httpOptions = {
    headers: new HttpHeaders({
        'Accept': 'application/json',
        'Content-Type': 'application/json'
    })
};

  constructor(public http:HttpClient) { }

  addEmployee(employee:Employee){
    return this.http.post("http://localhost:8080/Employee/employee",employee,)
    
  }

  loginUser(user:Map<String,String>){
    return this.http.post("http://localhost:8080/Employee/employee/login",user,this.httpOptions);
  }

  handleLogin(user) {
    sessionStorage.setItem(this.USER_SESSION_ATTRIBUTE_NAME,JSON.stringify(user));
   // console.log(sessionStorage.getItem(this.USER_SESSION_ATTRIBUTE_NAME));
  }

  handleError(): void {
    alert("username or password is incorrect!");
  }
  isUserLoggedIn() {
    let user = sessionStorage.getItem(this.USER_SESSION_ATTRIBUTE_NAME)
    if (user === null) return false
    return true
  }

  getLoggedInUserName() {
    let user = JSON.parse(sessionStorage.getItem(this.USER_SESSION_ATTRIBUTE_NAME));
    if (user === null) return ''
    console.log(user);
    return user.username
  }

  logoutUser(){
    sessionStorage.removeItem(this.USER_SESSION_ATTRIBUTE_NAME);
    alert("logged-out successfully");
    return true;
  }
  
}
