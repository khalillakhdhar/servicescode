import { Injectable } from '@angular/core';
import { Rdv } from './rdv';

@Injectable({
  providedIn: 'root'
})
export class RdvService {
rdvs:Rdv[] = [];
  constructor() { }
  getRdvs():Rdv[] {
  return this.rdvs;
  }
  getOneRdv(id:number):Rdv
  {
    return this.rdvs[id];
  }
createRdv(rdv:Rdv)
{
  this.rdvs.push(rdv);
}
deleteRdv(id:number)
{
  this.rdvs.splice(id, 1);
}
}
