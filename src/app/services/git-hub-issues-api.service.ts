import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Observable} from "rxjs/internal/Observable";

@Injectable({
  providedIn: 'root'
})

export class GitHubIssuesAPIService {

  constructor(private http: HttpClient) { }

  //Obtener issues
  getIssuesFromUrl(RepoURL, pageActual, itemsPerPage){

  const url_api="https://api.github.com/search/issues?q=repo"+RepoURL+"/issues?state=all&page="+pageActual+"&per_page="+itemsPerPage+"";
 
  return this.http.get(url_api);
  
    }


}
