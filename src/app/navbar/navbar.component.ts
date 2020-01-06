import { Component, OnInit } from '@angular/core';
declare var $: any;

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor() { }

  ngOnInit() {$(document).ready(function(){
  $(window).scroll(function(){
    var scroll = $(window).scrollTop();
    if (scroll > 300) {
      $(".mynav").css("background-color" , "black");
    }

    else{
      $(".mynav").css("background-color" , "transparent");    
    }
  })
})
  }
}



