import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Employee } from '../model/employee';
import { EmployeeService } from '../services/employee.service';
import { Address } from '../model/address';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {

  form: FormGroup;
 
  submitted = false;
  private employee:Employee;
  
  

  constructor(
    private employeeService:EmployeeService,
    private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
  ) { }

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      address: this.formBuilder.group({
       streetName:[''],
      city:[''],
      state:[''],
      country:[''],
      zipCode:[''],
      }),
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      email:['', [Validators.email,Validators.required]],
      mobileNumber:['',[Validators.required, Validators.pattern("^((\\+91-?)|0)?[0-9]{10}$")]],
      company:[''],
      designation:[''],
      dateofBirth:[''],
      userName: ['', Validators.required],
      password: ['', [Validators.required, Validators.minLength(6)]],
      confirmPassword:['',Validators.required],
    }
    ,{ 
      // here we attach our form validator
      validators: this.controlsEqual('confirmPassword', 'password')
    });
}
 controlsEqual(
  controlName: string,
  equalToName: string,
  errorKey: string = controlName // here you can customize validation error key 
) {

  return (form: FormGroup) => {
    const control = form.get(controlName);

    if (control.value !== form.get(equalToName).value) {
      control.setErrors({ [errorKey]: true });
      return {
        [errorKey]: true
      }
    } else {
      control.setErrors(null);
      return null
    }
  }
}

  get f() { return this.form.controls; }

  onSubmit() {
    this.submitted = true;

    if(this.form.valid){
      if(this.form.controls.userName.value=="admin"){
        alert("username cannot be admin");
        return "";
      }
      this.employee=Object.assign({},this.form.value);
      this.employee.address=Object.assign({},this.employee.address);

      this.employeeService.addEmployee(this.employee).subscribe(
        data=>{
          if(data==null){
            alert("userName is already taken");
          }
          else{
          console.log('from post method');
          console.log(data);
         alert("Registerred successfully");
         this.router.navigate(['/login']);
          }
        }
      );
     

    }
}
}
