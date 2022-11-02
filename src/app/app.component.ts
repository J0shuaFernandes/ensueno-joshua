import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ensueno-joshua';

  displayVal = '';
  word = '';
  new_word = '';

  getUnique(val:string) {
  	//val = val.toLowerCase();
  	this.word = '';
  	for(let i=0; i<val.length; i++) {
  		if ((this.word).includes((val[i]).toLowerCase()) == false && (this.word).includes((val[i]).toUpperCase()) == false) {
  			this.word += val[i];
  		}
  	}
  }

}