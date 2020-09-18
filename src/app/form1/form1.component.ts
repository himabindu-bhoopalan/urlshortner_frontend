import { Component, OnInit } from '@angular/core';
import { ShrinkerService } from '../shrinker.service';
import { Router } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';
@Component({
  selector: 'app-form1',
  templateUrl: './form1.component.html',
  styleUrls: ['./form1.component.css']
})
export class Form1Component implements OnInit {

  urlform
  click = 0
  // new1
  show: boolean = false;
  dataLoaded: Boolean = false;
  urldb
  gotbackData = true;
  notRedirected = false;
  duplicateData=false;
  constructor(private shrinker: ShrinkerService, private router: Router) {

    //to take input url  
    this.urlform = new FormGroup({
      'url': new FormControl('', Validators.required)

    })


    //get all the urls 

    this.shrinker.getURL().subscribe((data) => {
      if (data !== null) {
        this.dataLoaded = true;
      }
      console.log('inside viewurl.comp.ts');
      this.urldb = data;
      console.log(this.urldb);
      var shortURL='';
      this.urldb.map((x)=>{
        x["shortURL"]="http://localhost:3040/"+x.short;
      });
    })




  }

  ngOnInit(): void {
  }
  postURL() {
    if (this.urlform.valid) {
      console.log(this.urlform.value.url);

      this.shrinker.postURL(this.urlform.value).subscribe((data) => {
        if (data === null) {
          this.gotbackData = false;
        } else {
          if (data.status === 200) {
            console.log(data.message);
            location.reload();
          } else if(data.status==409){
            this.duplicateData=true
            console.log(data.message);
          }else{
            console.log(data);
          }


        }


      })

    }

  }


  deleteItem(index, id) {
    console.log(index, id);
    this.urldb.splice(index, 1);
    this.shrinker.deleteURL(id).subscribe((data) => {
      console.log(data)
    })

  }

  redirect(shortURL) {
    console.log('shorturl' + shortURL);
    this.shrinker.redirectURL(shortURL).subscribe((data) => {
      console.log(data);
      window.location.href = data.url;
      // this.router.navigate([''])
    })


  }


}
