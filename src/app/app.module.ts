//Modules
import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { AppRoutingModule } from './modules/app-routing.module';
import {HttpClientModule} from '@angular/common/http';
import {FormsModule} from '@angular/forms';
import {NgxPaginationModule} from 'ngx-pagination';
import { AngularFontAwesomeModule } from 'angular-font-awesome';
//Services
import {GitHubIssuesAPIService} from './services/git-hub-issues-api.service';

//Components
import { AppComponent } from './app.component';
import { IssuesTableComponent } from './components/issues-table/issues-table.component';
import { NgxSpinnerComponent } from 'ngx-spinner';
import {ModalModule} from 'ngx-bootstrap/modal';
import { ModalContentComponent } from './components/modal-content-component/modal-content-component.component';

@NgModule({
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
],
  declarations: [
    AppComponent,
    IssuesTableComponent,
    NgxSpinnerComponent,
    ModalContentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule, // cargamos el módulo en el array de imports
    FormsModule,
    NgxPaginationModule,
    ModalModule.forRoot(),
    AngularFontAwesomeModule
  ],
  providers: [GitHubIssuesAPIService],
  bootstrap: [AppComponent],
  entryComponents:[ModalContentComponent]

})
export class AppModule { }

