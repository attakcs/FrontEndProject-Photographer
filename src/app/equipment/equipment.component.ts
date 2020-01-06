import { Component, OnInit } from '@angular/core';

declare var $: any;

@Component({
  selector: 'app-equipment',
  templateUrl: './equipment.component.html',
  styleUrls: ['./equipment.component.css']
})
export class EquipmentComponent implements OnInit {

searchText:string = "";

equipment = [
{
	"cam_brand": "Rolleiflex",
	"cam_model": "2.8A",
	"cam_year": "1949",
	"cam_picture": "https://images.squarespace-cdn.com/content/v1/50f89597e4b0df5f0985004b/1515871369794-BLS292FZD38ETZO6BDAU/ke17ZwdGBToddI8pDm48kOM0wi0zWgY49OChaGdbQod7gQa3H78H3Y0txjaiv_0fDoOvxcdMmMKkDsyUqMSsMWxHk725yiiHCCLfrh8O1z5QPOohDIaIeljMHgDF5CVlOqpeNLcJ80NK65_fV7S1Udq808UFTE3RUCYZpscC1JaI0xjbDb9OOCsv-L8MD1ND_7k-9-XsFQ9lvpTgv0wwCA/010.jpg",
	"cam_description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque vitae justo at sem malesuada rhoncus sed et metus. Morbi ut laoreet lacus. Phasellus at malesuada nisi. Suspendisse id est velit."
},{
	"cam_brand": "Rolleiflex",
	"cam_model": "6008 LR Professional",
	"cam_year": "1975",
	"cam_picture": "https://static.bhphoto.com/images/images2000x2000/1257249713_376449.jpg",
	"cam_description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque vitae justo at sem malesuada rhoncus sed et metus. Morbi ut laoreet lacus. Phasellus at malesuada nisi. Suspendisse id est velit."
},{
	"cam_brand": "Nikon",
	"cam_model": "D850. FX format. 45.7 MP.",
	"cam_year": "2005",
	"cam_picture": "https://images-na.ssl-images-amazon.com/images/I/71NxaDA-zSL._SL1500_.jpg",
	"cam_description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque vitae justo at sem malesuada rhoncus sed et metus. Morbi ut laoreet lacus. Phasellus at malesuada nisi. Suspendisse id est velit."
},{
	"cam_brand": "Nikon",
	"cam_model": "D750. FX format. 24.3 MP.",
	"cam_year": "2007",
	"cam_picture": "https://specials-images.forbesimg.com/imageserve/5d61d310fead280008920def/960x0.jpg?fit=scale",
	"cam_description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque vitae justo at sem malesuada rhoncus sed et metus. Morbi ut laoreet lacus. Phasellus at malesuada nisi. Suspendisse id est velit."
},{
	"cam_brand": "Nikon",
	"cam_model": "D5. FX format. 20.8 MP.",
	"cam_year": "2010",
	"cam_picture": "https://upload.wikimedia.org/wikipedia/commons/thumb/6/69/Nikon_D3_0803.jpg/800px-Nikon_D3_0803.jpg",
	"cam_description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque vitae justo at sem malesuada rhoncus sed et metus. Morbi ut laoreet lacus. Phasellus at malesuada nisi. Suspendisse id est velit."
},{
	"cam_brand": "Nikon",
	"cam_model": "F3",
	"cam_year": "1980",
	"cam_picture": "https://specials-images.forbesimg.com/imageserve/5d61d310fead280008920def/960x0.jpg?fit=scale",
	"cam_description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque vitae justo at sem malesuada rhoncus sed et metus. Morbi ut laoreet lacus. Phasellus at malesuada nisi. Suspendisse id est velit."
},{
	"cam_brand": "Canon",
	"cam_model": "Rebel T6",
	"cam_year": "2012",
	"cam_picture": "https://static.bhphoto.com/images/images1000x1000/1458905663_1238183.jpg",
	"cam_description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque vitae justo at sem malesuada rhoncus sed et metus. Morbi ut laoreet lacus. Phasellus at malesuada nisi. Suspendisse id est velit."
},{
	"cam_brand": "Nikon",
	"cam_model": "D-90",
	"cam_year": "2008",
	"cam_picture": "https://upload.wikimedia.org/wikipedia/commons/thumb/9/90/Nikon_D810_EM1B6357-2.jpg/1024px-Nikon_D810_EM1B6357-2.jpg",
	"cam_description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque vitae justo at sem malesuada rhoncus sed et metus. Morbi ut laoreet lacus. Phasellus at malesuada nisi. Suspendisse id est velit."
},{
	"cam_brand": "Canon",
	"cam_model": "EOS 4000d",
	"cam_year": "2010",
	"cam_picture": "https://brain-images-ssl.cdn.dixons.com/6/0/10177606/l_10177606_001.jpg",
	"cam_description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque vitae justo at sem malesuada rhoncus sed et metus. Morbi ut laoreet lacus. Phasellus at malesuada nisi. Suspendisse id est velit."
},{
	"cam_brand": "Canon",
	"cam_model": "EOS R",
	"cam_year": "2019",
	"cam_picture": "https://www.incredible.co.za/media/catalog/product/cache/3/image/1400x/0dc2d03fe217f8c83829496872af24a0/l/e/lens_kit.jpg",
	"cam_description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque vitae justo at sem malesuada rhoncus sed et metus. Morbi ut laoreet lacus. Phasellus at malesuada nisi. Suspendisse id est velit."
}]


  constructor() { }

  ngOnInit() {
  	$(document).ready(function(){
	$(window).scroll(function () {
			if ($(this).scrollTop() > 50) {
				$('#back-to-top').fadeIn();
			} else {
				$('#back-to-top').fadeOut();
			}
		});
		// scroll body to 0px on click
		$('#back-to-top').click(function () {
			$('body,html').animate({
				scrollTop: 0
			}, 400);
			return false;
		});
});
  }

  filterCondition(cams){
     return cams.cam_brand.toLowerCase().indexOf(this.searchText.toLowerCase()) != -1 ||
     		cams.cam_year.toLowerCase().indexOf(this.searchText.toLowerCase()) != -1 ||
     		cams.cam_model.toLowerCase().indexOf(this.searchText.toLowerCase()) != -1;
   }



}


