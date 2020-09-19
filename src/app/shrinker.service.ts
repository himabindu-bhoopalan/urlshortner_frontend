import { Injectable } from '@angular/core';
import  {HttpClient} from "@angular/common/http";
import { Observable } from 'rxjs';
import { ConstantPool } from '@angular/compiler';
@Injectable({
  providedIn: 'root'
})

export class ShrinkerService {
  serverLink="https://hbbit.herokuapp.com/";
  // serverLink="http://localhost:3040/";
  constructor(private http:HttpClient) { 

  }
  
  postURL(data):Observable<any>{
    console.log('posted');
    
    return this.http.post(this.serverLink+"shorturl",data);
    // return this.http.post("http://localhost:3040/shorturl",data);
  }
  getURL(): Observable<any> {
    // console.log('inside shrinker.service.ts')
    
    return this.http.get(this.serverLink);
    // return this.http.get("http://localhost:3040/");
  }
  deleteURL(id):Observable<any>{
    // console.log(id);
    
    return this.http.delete(this.serverLink+"delete/"+id);
    // return this.http.delete("http://localhost:3040/delete/"+id);
  }
  redirectURL(shortURL):Observable<any>{
    // console.log('redirecting..');
    // console.log(shortURL);
    
    return this.http.get(this.serverLink+shortURL);
  }
}
