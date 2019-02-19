import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Observable} from "rxjs/internal/Observable";

@Injectable({
  providedIn: 'root'
})

export class GitHubIssuesAPIService {

  constructor(private http: HttpClient) { }

  //Obtener issues
  getIssuesFromUrl(RepoURL){

  const url_api="https://api.github.com/repos"+RepoURL+"/issues?state=all";

  return this.http.get(url_api);
  
    }


}
