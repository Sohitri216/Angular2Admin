import { Component, OnInit,ElementRef,ViewChild } from '@angular/core';
import { ToasterService } from '../../../shared/services/toaster-service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
	private loginData:any
  private userData:any;
  public labelActive=false;
  public labelActivePass=false;
  // public checkboxFlag=false;
  private saveUsername: boolean = true;
  @ViewChild('email') email;
  @ViewChild('password') password;
  constructor(
    private toast: ToasterService,
    private router: Router) { 
    this.loginData = {
      email: '',
      password: ''
    };
  }

  ngOnInit() {
    if (window.localStorage.getItem("loginCreds") === null) {
      console.log('No username');
           this.saveUsername = true;
        } else {
           console.log("init", window.localStorage.getItem('loginCreds'));
           this.userData=JSON.parse(window.localStorage.getItem('loginCreds'));
           console.log('UserData:',this.userData,typeof(this.userData));
           this.labelActive=true;
           this.labelActivePass=true;
           this.loginData.email=this.userData.email;
           this.loginData.password=this.userData.password;
        }
  }  
/**
 * [focusOutEMail called when out of focus from email field]
 */
  focusOutEMail(){
    console.log('In focus out email',this.loginData);
    if(this.loginData.email===''){
      this.labelActive=false;
    }

    // this.labelActive=false;
  }
/**
 * [focusOutPassword called when out of focus from password field ]
 */
  focusOutPassword(){
    console.log('Focus out password');
     if(this.loginData.password===''){
      this.labelActivePass=false;
    }
  }

/**
 * [focusEmail called when focus is on email field]
 */
  focusEmail(){
    console.log('Focus in email');
    this.labelActive=true;
  }
/**
 * [focusPassword called when focus is on password field]
 */
   focusPassword(){
     console.log('Focus in password');
    this.labelActivePass=true;
  }
/**
 * [detectChangeEmail is called when any change is done on email field]
 * @param {[type]} e [change event]
 */
  detectChangeEmail(e){
    // labelActive
    console.log('In ng change',e,this.labelActive);
    if(e){
      console.log('In if',this.email.nativeElement);
      this.labelActive=true;
    }
    else{ 
     // console.log('else',this.email.nativeElement.blur());
     this.labelActive=false;
    }
  }
/**
 * [detectChangePassword is called when any change is done on password field]
 * @param {[type]} e [change event]
 */
  detectChangePassword(e){
    if(e){
      console.log('In if',this.password.nativeElement);
      this.labelActivePass=true;
    }
    else{
     // console.log('else',this.password.nativeElement.blur());
     this.labelActivePass=false;
    }
  }
  
  goToFP(){

    this.router.navigateByUrl('forget-password');

  }
  /**
   * [login function called on form submit]
   */
      login(){
        console.log('Login Info:',this.loginData,this.saveUsername);
        if(this.saveUsername){
          console.log('Stringified userdata:',JSON.stringify(this.loginData));
          window.localStorage.setItem('loginCreds',JSON.stringify(this.loginData));
        }
        this.router.navigateByUrl('/vendor/dashboard');
        this.toast.success('Welcome', 'You have been successfully logged in');
  }

}
