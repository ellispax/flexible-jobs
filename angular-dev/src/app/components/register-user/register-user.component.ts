import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/shared/auth.service';
import { GeneralUser } from 'src/app/models/user.models';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-register-user',
  templateUrl: './register-user.component.html',
  styleUrls: ['./register-user.component.scss'],
})
export class RegisterUserComponent implements OnInit {
  registrationForm: FormGroup;

  userData: GeneralUser = {
    email: '',
    username: '',
    password: '',
    firstName: '',
    lastName: '',
    gender: '',
    address: '',
    phoneNumber: '',
  };

  constructor(
    private auth: AuthService,
    private formBuilder: FormBuilder,
  ) {
    this.registrationForm = this.formBuilder.group(
      {
        firstName: ['', Validators.required],
        lastName: ['', Validators.required],
        email: ['', [Validators.required, Validators.email]],
        username: ['', Validators.required],
        gender: [''],
        address: [''],
        phoneNumber: [''],
        password: ['', Validators.required],
        confirmPassword: ['', Validators.required],
      },
      { validators: this.passwordMatchValidator },
    );
  }
  passwordMatchValidator(formGroup: FormGroup) {
    const passwordControl = formGroup.get('password');
    const confirmPasswordControl = formGroup.get('confirmPassword');

    if (passwordControl?.value !== confirmPasswordControl?.value) {
      confirmPasswordControl?.setErrors({ passwordMismatch: true });
    } else {
      confirmPasswordControl?.setErrors(null);
    }
  }

  // register() {
  //   console.log(this.userData);
  //   // Call the Auth method to save the User profile
  //   this.auth.register(this.userData).subscribe(
  //     (response) => {
  //       // Handle successful response here, if needed
  //       console.log('User has been  created successfully:', response);
  //     },
  //     (error) => {
  //       // Handle error response here, if needed
  //       console.error('Error registering user:', error);
  //     },
  //   );
  // }
  register() {
    if (this.registrationForm.valid) {
      // Call the Auth method to save the User profile
      this.auth.register(this.registrationForm.value).subscribe(
        (response) => {
          // Handle successful response here, if needed
          console.log('User has been created successfully:', response);
        },
        (error) => {
          // Handle error response here, if needed
          console.error('Error registering user:', error);
        },
      );
    } else {
      console.log('Form is invalid. Please check the fields.');
    }
  }

  onSubmit() {
    // Your registration form submission logic goes here
    if (this.registrationForm.valid) {
      // Handle form submission
      console.log(this.registrationForm.value);
      this.register();
    } else {
      // Handle form errors
      console.log('Form is invalid. Please check the fields.');
    }
  }

  ngOnInit() {}
}
