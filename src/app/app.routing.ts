import {ModuleWithProviders} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';

import { AboutmeComponent } from './component/aboutme/aboutme.component';
import { ProjectsComponent } from './component/projects/projects.component';
import { CreateComponent } from './component/create/create.component';
import { ContactComponent } from './component/contact/contact.component';
import { InitComponent } from './component/init/init.component';
import { DetailComponent } from './component/detail/detail.component';
import {  EditComponent } from './component/edit/edit.component';

const appRoutes: Routes =[
    {path:'', component: InitComponent},
    {path:'sobre-mi', component: AboutmeComponent},
    {path:'crear-proyecto', component: CreateComponent},
    {path:'proyectos', component: ProjectsComponent},
    {path:'contacto', component: ContactComponent},
    {path:'proyectos/:id', component: DetailComponent},
    {path:'editar/:id', component: EditComponent},
    {path:'**', component: InitComponent},
];

export const appRoutingProviders: any[] = [];
export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
