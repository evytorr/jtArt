import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.css']
})
export class ContactUsComponent implements OnInit {

  public contacts = [];

  public contact = {
    firstName: '',
    lastName: '',
    email: '',
    comments: ''
  };

  constructor(public http: HttpClient) { }

  ngOnInit() {
  }

  submit() {
    this.http.post('http://localhost:8080/sendEmail', this.contact)
      .subscribe((response: any) => {
        console.log(response);
      }, (error) => {
        console.log(error);
      });
  }
}
