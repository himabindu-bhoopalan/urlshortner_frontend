import { Injectable } from '@angular/core';
import  {HttpClient} from "@angular/common/http";
import { Observable } from 'rxjs';
import { ConstantPool } from '@angular/compiler';
@Injectable({
  providedIn: 'root'
})
export class ShrinkerService {

  constructor(private http:HttpClient) { 

  }
  postURL(data):Observable<any>{
    console.log('posted');
    return this.http.post("http://localhost:5000/shorturl",data);
  }
  getURL(): Observable<any> {
    console.log('inside shrinker.service.ts')
    return this.http.get("http://localhost:5000/view");
  }
}
