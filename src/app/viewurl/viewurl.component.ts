import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ShrinkerService } from '../shrinker.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-viewurl',
  templateUrl: './viewurl.component.html',
  styleUrls: ['./viewurl.component.css']
})
export class ViewurlComponent implements OnInit {
urldb;
  constructor(private http: ShrinkerService, private router: Router) { 
    this.http.getURL().subscribe((data) => {
      console.log('inside viewurl.comp.ts');
      this.urldb = data;
    })
    //console.log(this.activatedRoute.snapshot.params.id);
  }

  ngOnInit(): void {
  }
 
}
