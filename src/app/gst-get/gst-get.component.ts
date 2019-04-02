import { Component, OnInit } from '@angular/core';
import { BusinessService } from '../business.service';
import { Observable } from 'rxjs';
@Component({
  selector: 'app-gst-get',
  templateUrl: './gst-get.component.html',
  styleUrls: ['./gst-get.component.css']
})
export class GstGetComponent implements OnInit {

  public products: any[];

  constructor(private bs: BusinessService) {
    this.getBusiness();
    console.log("ghfhf");
  }



  getBusiness() {
    this.bs.getBusiness().subscribe((res) => {
      this.products = res;
    }, (err) => {
      console.log(err);
    });
    console.log(this.products);
    console.log("result here");
  }
  ngOnInit() {
  }

}
