import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl,  FormGroup,  Validators } from '@angular/forms';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent{
  logForm!: FormGroup
  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.createForm()
  }
  createForm() {
    this.logForm = this.fb.group({
      username: new FormControl('', Validators.minLength(2)),
      password: new FormControl(''),
     
    });
  }

  onSubmit() {
    console.log(this.logForm.value)
  }
  
  forgetPassword(){

  }
  
}
