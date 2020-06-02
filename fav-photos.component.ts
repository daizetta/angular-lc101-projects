import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'fav-photos',
  templateUrl: './fav-photos.component.html',
  styleUrls: ['./fav-photos.component.css']
})
export class FavPhotosComponent implements OnInit {
  photosTitle = 'Random Images';
  image1 = 'https://www.launchcode.org/assets/icons/trophy-95e8cbe9bfda44123422302951deb1c92a237d39052669b8fbfafec00cb4f608.png';
  image2 = 'https://www.seattlenorthcountry.com/imager/s3_amazonaws_com/snohomish-2018/craft/Outdoors/Goat-Yoga-4_930104bc5592b0f48aa7a928055610d9.jpg';
  image3 = 'https://www.top.me/wp-content/uploads/2014/11/Stretching-Dog.jpg';

  constructor() { }

  ngOnInit() {
  }

}