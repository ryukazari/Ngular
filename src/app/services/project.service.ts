import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams, HttpResponse  } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { Project } from '../models/project';
import { Global } from './global';

@Injectable()
export class ProjectService{
    public url: String;
    
    constructor(
        private _http: HttpClient
    ){
        this.url=Global.url;
    }

    testService(){
        return 'Test';
    }

    saveProject(project: Project): Observable<any>{
        let params = JSON.stringify(project);
        let headers = new HttpHeaders().set('Content-Type','application/json');

        return this._http.post(this.url+'/save-project', params, {headers: headers});
        
       /*const body = new HttpParams()
        .set('name', project.name)
        .set('description', project.description)
        .set('year',project.category)
        .set('langs',project.langs)
        .set('category',project.category)
        .set('image',project.image);
        const headers = new HttpHeaders({ 'Content-Type': 'application/x-www-form-urlencoded' });

        return this._http.post(this.url+'/save-project', body.toString(), { headers, observe: 'response' })*/

    }
}