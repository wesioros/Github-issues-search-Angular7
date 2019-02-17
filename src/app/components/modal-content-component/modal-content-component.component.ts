import { Component, OnInit } from '@angular/core';
import {BsModalRef } from 'ngx-bootstrap/modal';
@Component({
  selector: 'modal-content',
  templateUrl: './modal-content-component.component.html'
})
 
export class ModalContentComponent implements OnInit {
  title: string;
 
  constructor(public bsModalRef: BsModalRef) {}
 
  ngOnInit() {
  }
}
