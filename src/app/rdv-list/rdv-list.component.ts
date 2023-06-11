import { Component } from '@angular/core';
import { Rdv } from '../core/rdv';
import { RdvService } from '../core/rdv.service';

@Component({
  selector: 'app-rdv-list',
  templateUrl: './rdv-list.component.html',
  styleUrls: ['./rdv-list.component.css']
})
export class RdvListComponent {
  rdv=new Rdv();
  rdvs: Rdv[] = [];
constructor(public rdvService: RdvService)
{
this.getRdv();

}
  getRdv()
  {
    this.rdvs=this.rdvService.getRdvs();
  }

  addRdv()
  {
    this.rdvService.createRdv(this.rdv);
    this.getRdv();
    this.rdv=new Rdv();
  }
  deleteRdv(id:any)
  {
    this.rdvService.deleteRdv(id);
    this.getRdv();

  }

}
