import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  constructor(private _activatedRoute: ActivatedRoute, private _router: Router) { }
username: string;
password: string;
  ngOnInit() {
  }
  loginbutton() : void {
    console.log('golden');
    this._router.navigate(['/change-password'])
  }
  }