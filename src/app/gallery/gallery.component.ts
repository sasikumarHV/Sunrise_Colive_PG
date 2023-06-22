import { Component } from '@angular/core';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.css']
})
export class GalleryComponent {
  images: { url: string, name: string }[] = [
    {url:'assets/images/img8.jpg.JPG',name:'Single Sharing room'},
    {url:'assets/images/img1.jpg.JPG',name: 'Double Sharing room'},
    {url:'assets/images/img2.jpg.JPG', name: 'Three Sharing room'},
    {url:'assets/images/img6.jpg.JPG',name:'Lobby'},
    {url:'assets/images/img9.jpg.JPG',name:'Three Sharing room'},
    {url:'assets/images/img5.jpg.JPG',name:'Lounge'},
    {url:'assets/images/img3.jpg.JPG',name:'Toilets'},
    {url:'assets/images/img7.jpg.JPG',name:'Study table'},
    {url:'assets/images/img4.jpg.JPG',name:'Individual Locker'},
    {url:'assets/images/img10.jpg.JPG',name:'Single Sharing room'},
    {url:'assets/images/img11.JPG',name:'PG Building'},
    {url:'assets/images/img12.JPG',name:'Dinning Hall'},
    {url:'assets/images/img13.JPG',name:'Stair Cases'},
    {url:'assets/images/img14.JPG',name:'Lift'},
    {url:'assets/images/img15.JPG',name:'Laundry'},
    {url:'assets/images/img16.JPG',name:'Smart LED Tv'},
    {url:'assets/images/img17.JPG',name:'Reception'},
    {url:'assets/images/img18.JPG',name:'Hot Water'},

  ];

}
