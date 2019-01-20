import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams, HttpResponse  } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { Project } from '../models/project';
import { Global } from './global';
import { asTextData } from '@angular/core/src/view';

@Injectable()
export class ProjectService{
    public url: String;
    public h = new HttpHeaders().set('Content-Type', 'application/json');
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

		return this._http.post(this.url+'save-project', params,{ headers: headers } );
    }

    getProjects(): Observable<any>{
        let headers = new HttpHeaders().set('Content-Type', 'application/json');
        return this._http.get(this.url+'projects', {headers : headers});
    }

    getProject(id): Observable<any>{
        let headers = new HttpHeaders().set('Content-Type', 'application/json');
        return this._http.get(this.url+'project/'+id, {headers : headers});
    }

    deleteProject(id): Observable<any>{
        let headers = new HttpHeaders().set('Content-Type', 'application/json');
        return this._http.delete(this.url+'project/'+id, {headers : this.h});
    }

    updateProject(project):Observable<any>{
        let params = JSON.stringify(project);
        return this._http.put(this.url+'project/'+project._id, params, {headers : this.h});
    }
}