import { Component, OnInit, Input } from '@angular/core';
import { ImgService } from '../shared/img.service';

declare var $: any;

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.css']
})
export class GalleryComponent implements OnInit {
	test = "Hello";

	imgsArray: any[] = [];
	@Input() filterBy?: string = 'all'

	constructor(public imgService: ImgService) { 
		this.imgsArray = this.imgService.getImages();
	}

	getBtnToWork(i,u,obj){
		document.getElementById("button").innerHTML= `<div class="modal" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="${u}" aria-hidden="true" style="max-height:100%">
          <div class="modal-dialog modal-dialog-centered" role="document">
            <div class="modal-content">
              <div class="modal-header imgModal" style="position:relative">
                <h5 class="modal-title mx-auto" id="${u}">
                  <img src="../assets/imgs/${ obj.src }" class="img-fluid" style="height:700px; max-height:100%; object-fit:cover; object-position:center">
                </h5>
                <button type="button" class="close btnClose" data-dismiss="modal" aria-label="Close" style="position:absolute; top:15px; right:25px; box-shadow:none; outline:none">
                  <span aria-hidden="true" class='text-white'>&times;</span>
                </button>
  
              </div>
            </div>
          </div>
        </div>`
	}

  
	ngOnInit() {
		this.imgsArray = this.imgService.getImages();	

    $(document).ready(function(){
  $(window).scroll(function () {
      if ($(this).scrollTop() > 50) {
        $('#back-to2-top').fadeIn();
      } else {
        $('#back-to2-top').fadeOut();
      }
    });
    // scroll body to 0px on click
    $('#back-to2-top').click(function () {
      $('body,html').animate({
        scrollTop: 0
      }, 400);
      return false;
    });
});

}


}