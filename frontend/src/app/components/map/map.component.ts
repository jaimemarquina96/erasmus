import { Component, OnInit } from '@angular/core';
import { MapService } from 'src/app/services/map.service';

declare var $: any;

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent implements OnInit {

  public paises = [];
  constructor(private servicioPaises: MapService) { }

  ngOnInit() {
    this.servicioPaises.verPaises().subscribe(
      res => {

        console.log('BUSQUEDA BBDD', res);
        res.forEach(pais => {
          const objeto = {
            label : pais.nombre,
            coord : [pais.latitud, pais.longitud]
          };
          this.paises.push(objeto);
        });

      },
      err => {
        console.log(err);
      }
    );


  }


  autocompletar(lista: Array<any>) {// AUTOCOMPLETAR CAMPOS DE BUSQUEDA
    console.log('FUNCION-> autocompletar()');

    $('#pais_buscado').autocomplete({
      source: lista,
      minLength: 2,
      classes: {
        'ui-autocomplete': 'lista_autocomplete',
        'ui-menu-item': 'elemento_autocomplete'
      },
      focus(event, ui) {
         event.preventDefault();
         $('#pais_buscado').val(ui.item.label);
         $('#ubi_buscada').val(ui.item.coord);
     },
     select(event, ui) {
         event.preventDefault();
         $('#ubi_buscada').val(ui.item.coord);
         $('#pais_buscado').val(ui.item.label);
         // coordenadas = ui.item.coord;
      }
    });

  }







}
