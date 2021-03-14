import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { Validators } from '@angular/forms';
import {MatDialog} from '@angular/material/dialog';
import { DialogComponent } from '../../common/dialog/dialog.component'; 

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(
    public dialog: MatDialog,
    private router: Router,
    private route: ActivatedRoute,
    ) { }

  ngOnInit(): void {
  }

  openDialog() {
    const dialogRef = this.dialog.open(DialogComponent);

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }

  loginForm = new FormGroup({
    login: new FormControl('', Validators.required),
    password: new FormControl('', Validators.required),
  })

  onSubmit() {
    console.warn(this.loginForm.value);
    const name = this.loginForm.value.login;
    const password = this.loginForm.value.password;
    if (name === 'vova' && password === '123') {
      this.router.navigate(['dashboard']);
    }
  }

}
