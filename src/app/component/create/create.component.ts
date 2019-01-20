import { Component, OnInit } from '@angular/core';
import { Project } from '../../models/project';
import { ProjectService } from '../../services/project.service';
import { UploadService } from '../../services/upload.services';
import { Global } from  '../../services/global';
 
@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css'],
  providers: [ProjectService, UploadService]
})
export class CreateComponent implements OnInit {

  public title: String;
  public project: Project;
  public status: string;
  public filesUpload: Array<File>;
  public saveProyect;
  constructor(
    private _projectService: ProjectService,
    private _uploadService: UploadService
  ) {
    this.title = "Crear Proyecto",
    this.project= new Project('','','','',2019,'','');
   }

  ngOnInit() {
  }

  onSubmit(form){
    
    //guardar datos
    this._projectService.saveProject(this.project).subscribe(
      response=>{
        if(response.project){
          //Subir imagen
          if(this.filesUpload){
            this._uploadService.makeFileRequest(Global.url+'upload-image/'+response.project._id,[],
            this.filesUpload, 'image')
            .then((result: any) =>{
              this.status="succes";
              this.saveProyect=result.project;
              form.reset();         
            });
          }else{
              this.status="succes";
              this.saveProyect=response.project;
              form.reset();    
          }
        }
        else{
        this.status="failed"; 
        }
      },
      err=>{
        console.log(<any>Error);
        
      }
    );
  }

  fileChangeEvent(fileInput: any){
    this.filesUpload = <Array<File>>fileInput.target.files;
  }
}
