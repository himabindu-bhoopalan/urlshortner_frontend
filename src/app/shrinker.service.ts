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
    return this.http.post("https://urlshortnerhima.herokuapp.com/shorturl",data);
  }
  getURL(): Observable<any> {
    console.log('inside shrinker.service.ts')
    return this.http.get("https://urlshortnerhima.herokuapp.com/view");
  }
}
