import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IssuesTableComponent } from './issues-table.component';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
describe('IssuesTableComponent', () => {
  let component: IssuesTableComponent;
  let fixture: ComponentFixture<IssuesTableComponent>;
 
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IssuesTableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IssuesTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  
});






