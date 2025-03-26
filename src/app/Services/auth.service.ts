import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';
import { ToastrService } from 'ngx-toastr';
import { jwtDecode } from "jwt-decode";


@Injectable({
  providedIn: 'root'
})

export class AuthService {
  

  constructor(private http:HttpClient,private spiner:NgxSpinnerService,private toster:ToastrService,private router:Router) { }

  login(email:string,password:string){

    // debugger

    var body = {
      email:email,
      password:password
    }

    const headerDirc={

      'Content-Type':'application/json',
      'Accept':'application/json'
    }

    const requestOption={
      headers:new HttpHeaders(headerDirc)
    }

    this.spiner.show();
    this.http.post("https://localhost:7140/api/jwt",body,requestOption).subscribe((respo)=>{
     
      localStorage.setItem('token',respo.toString());  //bring the response encoded

      const user:any = jwtDecode(respo.toString());   //make deccoded to response

      localStorage.setItem('user',JSON.stringify(user));   //convert the respose to string BC the respose came as an obj

       //Authentication Step
       if(user.role_id=='1'){

        this.toster.success('Welcome To Dashboard');
        
        this.router.navigate(['']);

      } 

      else if(user.role_id=='2'){
        this.toster.info('Cant Access')
        this.router.navigate([''])
      }
    
      this.spiner.hide();

   
    },
    err=>{

      console.log(err);
      this.toster.error('username or passowrd incorect');

      this.spiner.hide();
      
      
      
       }
     )
    
  }

  //End.....
  
  RegisterUsers(body:any){
      
    debugger;

    body.ProfileImage = this.display_image;
    this.http.post("https://localhost:7140/api/UserProfile/Register/",body).subscribe(
      (respo:any)=>{

        this.toster.success('User Created');

        this.router.navigate(['sign/login']);
        
        }
      ,
        // 
      err=>{
        console.log(body);   
        
        console.log(err.status);
      }
  )
  // window.location.reload();
  }

  //End .........

  display_image:any;
  uploadAttachment(file:FormData){
    debugger
    this.http.post("https://localhost:7140/api/UserProfile/Image",file).subscribe(
    (respo:any)=>{
        this.display_image = respo.profileImage;
        console.log(respo);
        
    },

    err=>{console.log(err.status);}
  )
  }

  //End .........





}


