import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TaskListComponent } from './task-list/task-list.component';
import { TaskDetailsComponent } from './task-details/task-details.component';
import { RdvListComponent } from './rdv-list/rdv-list.component';
import { RdvDetailComponent } from './rdv-detail/rdv-detail.component';

const routes: Routes = [
  {path:'',redirectTo:'tasks',pathMatch:'full'},
  {path:'tasks',component:TaskListComponent},
  {path:'tasks/:index',component:TaskDetailsComponent},
  {path:'rdv',component:RdvListComponent},
  {path:'rdv/:id',component:RdvDetailComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
