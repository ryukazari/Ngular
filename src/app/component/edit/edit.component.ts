import { Component, OnInit } from '@angular/core';
import { Project } from '../../models/project';
import { ProjectService } from '../../services/project.service';
import { UploadService } from '../../services/upload.services';
import { Global } from  '../../services/global';
import { Router, ActivatedRoute, Params} from '@angular/router';

@Component({
  selector: 'app-edit',
  templateUrl: '../create/create.component.html',
  styleUrls: ['../create/create.component.css'],
  providers: [ProjectService, UploadService]
})
export class EditComponent implements OnInit {

  public title: String;
  public project: Project;
  public status: string;
  public filesUpload: Array<File>;
  public saveProyect;
  public url: string;

  constructor(
    private _projectService: ProjectService,
    private _uploadService: UploadService,
    private _router: Router,
    private _route: ActivatedRoute
  ){
    this.title = "Editar Proyecto"
    this.url = Global.url;
    //this.project= _projectService.getProject(id);
   }

  ngOnInit() {
    this._route.params.subscribe(params=>{
      let id = params.id;
      this.getProject(id);
    }); 
  }

  getProject(id){
    this._projectService.getProject(id).subscribe(
      response => {
        console.log(response.project);
        
        this.project = response.project;
      },
      error => {
        console.log(<any>error);
      }
    );
  }

  onSubmit(){
    console.log("PROJECT: "+ this.project);
    
    this._projectService.updateProject(this.project).subscribe(
      response=>{
        if(response.project){
          //Subir imagen
          if(this.filesUpload){
            this._uploadService.makeFileRequest(Global.url+'upload-image/'+response.project._id,[],
            this.filesUpload, 'image')
            .then((result: any) =>{
              this.status="succes";
              this.saveProyect=result.project;
              console.log(result);           
            });
          }else{
            this.status="succes";
            this.saveProyect=response.project;
            console.log(response.project);         
          }          
      }
      else{
      this.status="failed"; 
      }
    },
      error=>{
        console.log(<any>error);
        
      }
    );
  }
  
  fileChangeEvent(fileInput: any){
    this.filesUpload = <Array<File>>fileInput.target.files;
  }

}
