import { Component, OnInit, HostBinding } from '@angular/core';
import { Torta } from 'src/app/models/tortas';

import { TortasService } from '../../services/tortas.service';

@Component({
  selector: 'app-tortas-list',
  templateUrl: './tortas-list.component.html',
  styleUrls: ['./tortas-list.component.css']
})
export class TortasListComponent implements OnInit {

  @HostBinding('class') classes = 'row';
  tortas: Torta[] = [];
  tortas_show: Torta[] = [];
  textSearch: string ='';

  constructor( private tortasService: TortasService) { }

  ngOnInit(): void {
    this.getTortas();
  }

  getTortas() {
    this.tortasService.getTortas().subscribe(
      (res:Torta[]) => {
        this.tortas = res;
        this.tortas_show = [...this.tortas];
      },
      err => console.log(err)
    );
  }

  deleteTorta(id_tortas:number){
    this.tortasService.deleteTorta(id_tortas).subscribe(
      res =>{
        console.log(res)
        this.getTortas();
      },
      err => console.log(err)
    )
  }

  searchTorta(){
    this.tortas_show = [];
    // debugger;
    
    this.tortas_show = this.tortas.filter(x => 
      `${x.nombre} ${x.descripcion}`.toLowerCase().includes(this.textSearch.toLowerCase())
    );
    // this.tortas_show = this.tortas.filter(x => {
    //   x.descripcion?..toLowerCase().includes(this.textSearch.toLowerCase());
    // });

    // this.tortas_show = this.tortas.filter(x => {
    //   `${x.nombre}${x.descripcion}`.toLowerCase().includes(this.textSearch.toLowerCase());
    //   });
  }

}
