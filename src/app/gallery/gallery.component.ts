import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.css']
})
export class GalleryComponent implements OnInit {
  public search = 'All';
  public filter = '';
  public galleryArray = [];

  // inside of constructor(), write the following:
  constructor(public http: HttpClient) { }

  // ngOnInit is a life cycle function that runs when the page starts//
  // the stuff you write in () is the path from the server//
  ngOnInit() {
    this.http.get('https://jtart-server.herokuapp.com/getGallery')
      .subscribe((response: any) => {
        // res is the name you can give it. you can also name it response or whatever //
        console.log(response);
        this.galleryArray = response;
        // then you write a function to throw if there is an error //
      }, (error) => {
        console.log(error);
      });
      // ^this is a note to tell it to listen. or grab data//
  }

  changeCategory() {
    if (this.search === 'All') {
      this.filter = '';
    } else {
      this.filter = this.search;
    }

    console.log(this.filter);
  }
}
