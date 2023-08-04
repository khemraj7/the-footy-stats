import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  form!: FormGroup
  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.createForm()
  }
  createForm() {
    this.form = this.fb.group({
      username: new FormControl('', Validators.minLength(2)),
      email: new FormControl(''),
      password: new FormControl(''),
      confirm: new FormControl(''),
    });
  }

  onSubmit() {
    console.log(this.form.value)
  }

}
