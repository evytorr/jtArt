import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';

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

  constructor(public http: HttpClient, private modalService: NgbModal) { }
closeResult: string;
  ngOnInit() {
  }

  submit(content) {
    console.log('submitting');
    this.http.post('https://jtart-server.herokuapp.com/sendEmail', this.contact)
      .subscribe((response: any) => {
        console.log(response);
        this.openModal(content);
      }, (error) => {
        console.log(error);
      });
  }
  openModal(content) {
    this.modalService.open(content).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {

    });
  }
  clear() {
    this.contact = {
      firstName: '',
      lastName: '',
      email: '',
      comments: '',
    };
  }
}
