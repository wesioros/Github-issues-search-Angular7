import { NgModule, Component, OnInit, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import {GitHubIssuesAPIService} from '../../services/git-hub-issues-api.service';
import {issuesListInterface, issuesItemInterface, userInterface} from '../../models/issues-interface';
import {NgxSpinnerService} from 'ngx-spinner';
import {BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
import { ModalContentComponent } from '../modal-content-component/modal-content-component.component';
import { retry, catchError } from 'rxjs/operators';

@Component({
  selector: 'app-issues-table',
  templateUrl: './issues-table.component.html',
  styleUrls: ['./issues-table.component.css']
})

@NgModule({
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
})
export class IssuesTableComponent implements OnInit {
  
  //Declaro la variable de tipo issuesInterface
  private issues: issuesListInterface;
  
  pageActual:number = 1;
  modalRef: BsModalRef;
  total: number = 0;
  itemPerPage: number = 10;
  
  constructor(private dataApi:GitHubIssuesAPIService,
              private spinnerService:NgxSpinnerService, 
              private modalService: BsModalService
            ) {}
 //Exporta la clase al iniciar
  ngOnInit() {}
  
  
 //valido y busco Issues
  searchIssues(RepoURL){
  
    //Compruebo que la URL no esta vacía
      if(RepoURL != "" && RepoURL != undefined)
      {  
        //activo el spinner
        this.spinnerService.show();
        
        //Extraigo lo que necesito de la URL
        RepoURL = new URL(RepoURL).pathname;
        //Dejo un mínimo tiempo para que se vea el spinner y quede claro que esta pasando algo   
        setTimeout(() => {
        //obtengo issues   
      this.getIssuesRepository(RepoURL);
    
    }, 200);
      }else{
        alert("empty URL")
      }
   
    }


  //LLamada a la API 
  getIssuesRepository(RepoURL){
    
    //Respuesta   
   const subscription= this.dataApi.getIssuesFromUrl(RepoURL, this.pageActual, this.itemPerPage).pipe(
      retry(1),
      catchError(this.handleError)
    )
    .subscribe((issues: issuesListInterface)=> this.issues = issues)
    subscription.add(this.hideSpinner())
      }
      //Dejo un tiempo ya que tarda un poco en renderizar los avatares
      hideSpinner(){
        setTimeout(() => {
        this.spinnerService.hide()
      }, 300);
       

      }
    //Modal para ver el detalle de la issue
      viewIssue(issue){

     // console.log(issue);// pruebas
        const initialState = {
          body: issue.body,
          title: issue.title,
          avatar:issue.user.avatar_url,
          user:issue.user.login,
          closeBtnName:"Close"
        }
        this.modalRef = this.modalService.show(ModalContentComponent, {initialState, class: 'gray modal-lg'});
      }
    
      //Manejar errores
      private handleError(error: any): Promise<any> {
        //console.error('error producido', error); // pruebas       
        alert("Error URL " + error.statusText)
        return Promise.reject(error.message || error);
     }
}
