import { Component } from '@angular/core';
import { RdvService } from '../core/rdv.service';
import { Rdv } from '../core/rdv';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-rdv-detail',
  templateUrl: './rdv-detail.component.html',
  styleUrls: ['./rdv-detail.component.css']
})
export class RdvDetailComponent {
  rdv=new Rdv();
  id:number =0;
constructor(public rdvService: RdvService,private route: ActivatedRoute)
{
  this.id=parseInt(this.route.snapshot.paramMap.get("id")||"",10);



}

ngOnInit(): void {
  //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
  //Add 'implements OnInit' to the class.
  this.getRdv();
}
getRdv()
{
this.rdv=this.rdvService.getOneRdv(this.id);
console.log("rdv",this.rdv);
}

}
