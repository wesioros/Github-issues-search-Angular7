import { Component, OnInit } from '@angular/core';
import {BsModalRef } from 'ngx-bootstrap/modal';
import {NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

@Component({
  selector: 'modal-content',
  templateUrl: './modal-content-component.component.html'
})
@NgModule({
  
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
})
export class ModalContentComponent implements OnInit {
  title: string;
 
  constructor(public bsModalRef: BsModalRef) {}
 
  ngOnInit() {
  }
}
