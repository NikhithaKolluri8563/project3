import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Router} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  @ViewChild('name', {static: false}) name: ElementRef;
  @ViewChild('password', {static: false}) password: ElementRef;
  lname: any;
  lpassword: any;
  constructor(private router: Router) { }

  ngOnInit() {
  }
  login() {
    this.lname = this.name.nativeElement.value;
    this.lpassword = this.password.nativeElement.value;
    var name = localStorage.getItem('name');
    var pass = localStorage.getItem('password');
    if(this.lname == name && this.lpassword == pass) {
      this.router.navigate(['/search-recipe']);
    }
    else{
      alert('Invalid Credentails');
    }
  }

  register() {
    this.router.navigate(['/register']);
  }

}
