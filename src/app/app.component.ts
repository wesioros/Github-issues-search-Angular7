import { Component, OnInit,NgModule,CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import {NgxSpinnerService} from 'ngx-spinner';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
@NgModule({
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
})
export class AppComponent implements OnInit {
  constructor(private spinnerService:NgxSpinnerService){

  }
  title = 'Github-issues';

ngOnInit(){
this.spinner();

}  
//Al cargar la página muestro spinner
spinner():void{

this.spinnerService.show();
setTimeout(()=> {
this.spinnerService.hide();
},200)

}


}
