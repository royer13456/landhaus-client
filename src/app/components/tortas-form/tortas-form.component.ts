import { Component, OnInit, HostBinding } from '@angular/core';
import { Torta } from 'src/app/models/tortas';
import { ActivatedRoute, Router } from '@angular/router';

import { TortasService } from '../../services/tortas.service';

@Component({
  selector: 'app-tortas-form',
  templateUrl: './tortas-form.component.html',
  styleUrls: ['./tortas-form.component.css']
})
export class TortasFormComponent implements OnInit {

  @HostBinding('class') classes = 'row';

  torta: Torta ={
    id_tortas: 0,
    img: '',
    nombre: '',
    descripcion: '',
    precio: 0
  };

  edit: boolean = false;

  constructor(
    private tortasService: TortasService, 
    private router: Router,
    private activedRoute: ActivatedRoute
    ) { }

  ngOnInit(): void {
    const params = this.activedRoute.snapshot.params;
    if (params["id_tortas"]) {
      this.tortasService.getTorta(params["id_tortas"])
      .subscribe(
        res => {
          console.log(res);
          this.torta = res;
          this.edit = true;
        },
        err => console.error(err)
      )
    }
  }
  
  saveNewTorta(){
    // delete this.torta.id_tortas;

    this.tortasService.saveTorta(this.torta)
    .subscribe(
      res => {
        console.log(res);
        this.router.navigate(['/tortas']);
      },
      err => console.error(err)
    )
  }

  updateTorta(){
    // const id : Number = this.torta.id_tortas!;
    this.tortasService.updateTorta(this.torta.id_tortas!, this.torta )
    .subscribe(
      res => {    
        console.log(res);
        this.router.navigate(['/tortas']);  
      },
      err => console.log(err)
    )
  }

}
