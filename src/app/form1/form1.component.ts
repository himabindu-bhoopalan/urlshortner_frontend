import { Component, OnInit } from '@angular/core';
import { ShrinkerService } from '../shrinker.service';
import { Router } from '@angular/router';
import {FormGroup,FormControl,Validators} from '@angular/forms';
@Component({
  selector: 'app-form1',
  templateUrl: './form1.component.html',
  styleUrls: ['./form1.component.css']
})
export class Form1Component implements OnInit {
  urlform
  click=0
  // new1
  show:boolean=false;
  constructor(private shrinker:ShrinkerService,private router:Router) { 
    this.urlform=new FormGroup({
      'url':new FormControl('URL',Validators.required)

    })
  }

  ngOnInit(): void {
  }
  postURL(){
    if(this.urlform.valid){
      
      alert(this.urlform.value);
      console.log(this.urlform.value);
      this.shrinker.postURL(this.urlform.value).subscribe((data)=>{
        this.router.navigate(['/view'])
        // this.show=true;
        // this.router.navigate(['/view']
        console.log(data);
      })
      
    }
    else{
      alert("Invalid form");
    }
  }
}
