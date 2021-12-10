import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {

  form: FormGroup;
  loading = false;
  submitted = false;

  constructor(
    private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
  ) { }

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      email:['', [Validators.email,Validators.required]],
      mobileNumber:['',[Validators.required, Validators.pattern("^((\\+91-?)|0)?[0-9]{10}$")]],
      company:[''],
      designation:[''],
      dateofBirth:[''],
      username: ['', Validators.required],
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
    console.log(this.form.controls);
}
}
