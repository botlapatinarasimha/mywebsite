import { Component, OnInit } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';
import {FormGroup,FormControl,Validators} from '@angular/forms';
import { Router } from '@angular/router';
 // navbar function
declare var $: any;
@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css']
})
export class BlogComponent implements OnInit {
  // click button scrolltop 
  scrollbtn:any; 
  
  
  //validations
  
  contactForm:FormGroup;
  uname:FormControl;
  email:FormControl;
  subject:FormControl;
  message:FormControl;
  
  // carousel

  customOptions: any = {
    loop: true,
    margin:10,
    // nav:false,
    autoplay:true,
    autoplayTimeout:1000,
    
    responsive: {
      0: {
        items: 1
      },
      400: {
        items: 2
      },
      740: {
        items: 3
      },
      940: {
        items: 4
      }
    },
    // nav: true
  }

  
  customOptions1: any = {
    loop: true,

    nav:false,
    autoplay:true,
    autoplayTimeout:2000,
    
    responsive: {
      0: {
        items: 1
      },
      400: {
        items: 2
      },
      740: {
        items: 3
      },
      940: {
        items: 1
      }
    },
    // nav: true
  }
 

  // end carousel

  constructor(private router: Router) { }
abc(){
  // debugger
  console.log("success");
   this.router.navigate(['/home']);
 }
asdf(){
  this.contactForm.reset();
}
  ngOnInit() {

      // validations

  this.contactForm=new FormGroup({
    uname:new FormControl('',[Validators.required]),
    email:new FormControl('',[Validators.required,Validators.pattern("^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$")]),
    subject:new FormControl('',[Validators.required]),
    message:new FormControl('',[Validators.required]),


  })
    // click button scrolltop 
    this.scrollbtn=document.querySelector("#scrollbtn");
    this.scrollbtn.addEventListener("click", function () {
      // window.scrollTo(0, 0);

      window.scrollTo({
          top: 0,
          left: 0,
          behavior: "smooth",
      });
  })
  // navbar function
  $('.anim-toggle').on('click', function () {
    $('.nav-content').toggleClass('active');
});
  
  }




}
