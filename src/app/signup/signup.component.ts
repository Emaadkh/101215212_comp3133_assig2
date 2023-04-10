import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
selector: 'app-signup',
templateUrl: './signup.component.html',
styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
signupForm: FormGroup;

constructor(private formBuilder: FormBuilder, private router: Router) {
this.signupForm = this.formBuilder.group({
email: ['', [Validators.required, Validators.email]],
password: ['', Validators.required],
confirmPassword: ['', Validators.required],
});
}

ngOnInit(): void {
}

onSubmit() {
    if (this.signupForm.valid) {
      console.log('Form submitted successfully');
      this.router.navigate(['/login']);
    } else {
      console.log('Form is invalid');
    }
  }

goBack() {
this.router.navigate(['/login']);
}
}