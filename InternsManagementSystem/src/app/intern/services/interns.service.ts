import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Intern } from '../models/Intern';

@Injectable({
  providedIn: 'root'
})
export class InternsService {
  private url = 'https://crudcrud.com/api/8a6142469fbc46168b2d2757a33f6eab/intern';
  constructor(private http: HttpClient) { }

  // Get all the intern record into the api 
  getInterns(): Observable<any> {
    let data = this.http.get(this.url);
    return data;
  }

 // Get all the intern record by id 
  getInternsById(id: string): Observable<any> {
    console.log(id);
    return this.http.get(this.url + "/" + id);
  }

  // add the intern into the Api 
  post(InternPost: Intern) {
    console.log("In service " + InternPost);
    let headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    this.http.post(this.url, InternPost,{ headers: headers }).subscribe((res) => { console.log(res) });
  }

  // Active and Deactivate intern 
  deActivated(id: any, data: any): Observable<any> {
    console.log(data.isActive);
    delete data['_id'];
    let headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    return this.http.put(this.url + '/' + id, data, { headers: headers });
  }

  // the intern into the Api by id 
  delete(id: any) {
    return this.http.delete(this.url + '/' + id);
  }
}
