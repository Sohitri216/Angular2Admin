import { Component, OnInit } from '@angular/core';
import { ModalService } from '../../../shared/services/modal-service';
import { ToasterService } from '../../../shared/services/toaster-service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-forget-password',
  templateUrl: './forget-password.component.html',
  styleUrls: ['../login/login.component.css']
})
export class ForgetPasswordComponent implements OnInit {
  // private PasswordData:any
  PasswordData={
        email:'',
        phone:''
      }
  private userData:any;
  public labelActiveEmail=false;
  public labelActivePhone=false;
    constructor(private modal: ModalService,
      private toast: ToasterService,
    private router: Router) {

      this.PasswordData={
        email:'',
        phone:''
      }

    }

    ngOnInit() {
    }

    focusOutEMail(){
    if(this.PasswordData.email===''){
      this.labelActiveEmail=false;
    }
  }

   focusEmail(){
    console.log('Focus in email');
    this.labelActiveEmail=true;
  }

  focusPhoneNo(){
    this.labelActivePhone=true;
  }

  focusOutPhoneNo(){
     if(this.PasswordData.phone===''){
      this.labelActivePhone=false;
    }

  }

    detectChangeEmail(e){
    // labelActive
    console.log('In ng change',e,this.labelActiveEmail);
    if(e){
      // console.log('In if',this.email.nativeElement);
      this.labelActiveEmail=true;
    }
    else{ 
     // console.log('else',this.email.nativeElement.blur());
     this.labelActiveEmail=false;
    }
  }
/**
 * [detectChangePassword is called when any change is done on password field]
 * @param {[type]} e [change event]
 */
  detectChangePhone(e){
    if(e){
      // console.log('In if',this.password.nativeElement);
      this.labelActivePhone=true;
    }
    else{
     // console.log('else',this.password.nativeElement.blur());
     this.labelActivePhone=false;
    }
  }

  forgotSubmit(){

    console.log('In submit',this.PasswordData);
  }

  goToLogin(){
    this.router.navigateByUrl('login');
  }
    // openModal() {
    // this.modal.openModal({
    //  title:'Confirm Delete',
    //  body:'Are you sure to want to delete this item?'
    // },'confirm')
    // .then((success) => {
    //     success.result.then((suc) => {
    //         console.log('success', suc);                
    //     }, (err) => {
    //         console.log('Action canceled1');
    //     });           
    // }, (error) => {
    //     console.log('Action canceled2');            
    // });
    // }

}
