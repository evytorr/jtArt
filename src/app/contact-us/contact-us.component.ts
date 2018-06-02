import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';

const validator = require('validator');
const async = require('async');
@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.css']
})
export class ContactUsComponent implements OnInit {

  public contacts = [];
  public loading = false;
  public contact = {
    firstName: '',
    lastName: '',
    email: '',
    comments: ''
  };
  public errors = {
    firstName: false,
    lastName: false,
    email: false,
    comments: false
  };

  constructor(public http: HttpClient, private modalService: NgbModal) { }
closeResult: string;
  ngOnInit() {
  }

  submit(content) {
    this.loading = true;
    async.forEachOf(this.contact, (value, key, callback) => {
        let err = false;
        if (validator.isEmpty(value)) {
          this.errors[key] = true;
          err = true;
        }
        callback(err);

    }, err => {
      if (!err) {
        console.log('submitting');
        this.http.post('https://jtart-server.herokuapp.com/sendEmail', this.contact)
          .subscribe((response: any) => {
            console.log(response);
            this.loading = false;
            this.openModal(content);
          }, (error) => {
            console.log(error);
            this.loading = false;
          });
      } else {
        // if there is an error turn loader off imediatly
        this.loading = false;
      }
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


  checkIfEmpty(input) {
    if (validator.isEmpty(this.contact[input])) {
      // if its empty run this code
      this.errors[input] = true;
    } else {
      // if its not empty run this code
      this.errors[input] = false;
    }
  }
}
