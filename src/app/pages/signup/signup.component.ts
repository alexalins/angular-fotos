import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { lowerCaseValidator } from 'src/app/shared/validator/lower-case.validator';
import { UserNotTakenService } from 'src/app/shared/services/user-not-taken.service';
import { NewUser } from 'src/app/models/newUser';
import { Router } from '@angular/router';
import { SignupService } from 'src/app/shared/services/signup.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  signupForm: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private userNotTakenValidatorService: UserNotTakenService,
    private signUpService: SignupService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.signupForm = this.formBuilder.group({
      email: ['',
        [
          Validators.required,
          Validators.email
        ]
      ],
      fullName: ['',
        [
          Validators.required,
          Validators.minLength(2),
          Validators.maxLength(40)
        ]
      ],
      userName: ['',
        [
          Validators.required,
          lowerCaseValidator,
          Validators.minLength(2),
          Validators.maxLength(30)
        ],
        this.userNotTakenValidatorService.checkUserNameTaken()
      ],
      password: ['',
        [
          Validators.required,
          Validators.minLength(4),
          Validators.maxLength(14)
        ]
      ]
    });
  }


  signup() {
    const newUser = this.signupForm.getRawValue() as NewUser;
    this.signUpService
    .signup(newUser)
    .subscribe(
        () => this.router.navigate(['']),
        err => console.log(err)
    );
  }
}
