// business.service.ts

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BusinessService {

  uri = 'http://localhost:3000';



  constructor(private http: HttpClient) { }

  addBusiness(person_name, business_name, business_gst_number) {
    console.log("hello");
    const obj = {
      post_name: person_name,
      post_desc: business_name,
      business_gst_number: business_gst_number
    };
    console.log(obj);

    this.http.post(`http://localhost:5200/register`, obj)
      .subscribe(res => {
        if (res.status == "success") {
          alert("Record Added");
        } else {
          alert("Problem with backend, Please try after sometime.")
        }
        console.log(res)
      });
  }

  getBusiness(): Observable<any[]> {
    return this.http.get<any[]>(`http://localhost:5200/users`);
  }
}