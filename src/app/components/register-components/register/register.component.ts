import { Component } from '@angular/core';
import { AuthService } from '../../../Services/auth.service';
import { Router } from '@angular/router';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {

  constructor(public auth:AuthService,public router:Router){}

  
  registerForm = new FormGroup({
    Email: new FormControl('', [Validators.required, Validators.email]),
    Password: new FormControl('********', [Validators.required, Validators.minLength(8)]),
    FirstName: new FormControl('', [Validators.required]),
    LastName: new FormControl('', [Validators.required]),
    Gender: new FormControl('', [Validators.required]),
    DateOfBirth: new FormControl('', [Validators.required]),
    ProfileImage: new FormControl('', [Validators.required]),
    City: new FormControl('', [Validators.required])
});


  minDate: string = new Date().toISOString().split('T')[0]; 
   
    Register(){

      this.auth.RegisterUsers(this.registerForm.value)

    }


    GoToLogin(){
      // debugger

      this.router.navigate(['login'])

    }

    UploadImage(file:any){
      debugger

      if(file.length==0)
        return ; 
      let fileToUpload=<File>file[0];
      const formData=new FormData();
      formData.append('file',fileToUpload,fileToUpload.name);
      this.auth.uploadAttachment(formData);

    }

}
