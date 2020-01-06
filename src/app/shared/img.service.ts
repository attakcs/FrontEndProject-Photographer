import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})



export class ImgService {
	imgsArray = [];
	
	getImages() {
		return this.imgsArray = imagesList.slice(0);
	}



	
}

const imagesList = [
	{'id':1, 'category':'Street', 'src':'H703026-R1-26-27.JPG'},
	{'id':2, 'category':'Human', 'src':'000036.JPG'},
	{'id':3, 'category':'Human', 'src':'DSC_7260.JPG'},
	{'id':4, 'category':'Portraits', 'src':'H703026-R1-23-24.JPG'},
	{'id':5, 'category':'Portraits', 'src':'DSC_7321.JPG'},
	{'id':6, 'category':'Portraits', 'src':'H703028-R1-12-13.JPG'},
	{'id':7, 'category':'Street', 'src':'img433.jpg'},
	{'id':8, 'category':'Portraits', 'src':'img435.jpg'},
	{'id':9, 'category':'Street', 'src':'img436.jpg'},
	{'id':10, 'category':'Street', 'src':'img429.jpg'},
	{'id':11, 'category':'Portraits', 'src':'img432.jpg'},
	{'id':12, 'category':'Street', 'src':'img431.jpg'},
	{'id':13, 'category':'Street', 'src':'img434.jpg'},
	{'id':14, 'category':'Street', 'src':'img436.jpg'},
	{'id':15, 'category':'Street', 'src':'img438.jpg'},
	{'id':16, 'category':'Portraits', 'src':'img439.jpg'},
	{'id':17, 'category':'Street', 'src':'000038.JPG'},
	{'id':18, 'category':'Street', 'src':'000019.JPG'},
	{'id':19, 'category':'Street', 'src':'000023.JPG'},
	{'id':20, 'category':'Street', 'src':'000011.JPG'},
	{'id':21, 'category':'Street', 'src':'000007.JPG'},
	{'id':22, 'category':'Street', 'src':'000037.JPG'},
	{'id':23, 'category':'Street', 'src':'000033.JPG'},
	{'id':24, 'category':'Street', 'src':'000029.JPG'},
	{'id':25, 'category':'Street', 'src':'000024.JPG'},
	{'id':26, 'category':'Street', 'src':'000020.JPG'},
	{'id':27, 'category':'Street', 'src':'000015.JPG'},
	{'id':28, 'category':'Street', 'src':'000031.JPG'},
	{'id':29, 'category':'Street', 'src':'000026.JPG'},
	{'id':30, 'category':'Street', 'src':'000010_a.JPG'},
	{'id':31, 'category':'Street', 'src':'img441.jpg'},
	{'id':32, 'category':'Street', 'src':'img440.jpg'},
	{'id':33, 'category':'Portraits', 'src':'img437.jpg'}

	
]