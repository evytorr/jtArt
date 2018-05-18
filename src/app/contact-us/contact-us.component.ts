import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.css']
})
export class ContactUsComponent implements OnInit {

  public contacts = [ ];

  public contact = {
    firstName: '',
    lastName: '',
    email: '',
    comments: ''
  };

  constructor() { }

  ngOnInit() {
  }

  submit() {
    console.log(this.contact);
  }

}
