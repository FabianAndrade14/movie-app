/* eslint-disable no-trailing-spaces */
/* eslint-disable prefer-const */
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PeliService } from 'src/app/services/peli.service';


@Component({
  selector: 'app-peli-details',
  templateUrl: './peli-details.page.html',
  styleUrls: ['./peli-details.page.scss'],
})
export class PeliDetailsPage implements OnInit {

  content: object = null;

  constructor(
    private peliService: PeliService,
    private ar: ActivatedRoute,
  ) { }

  ngOnInit() {
    this.obtenerPeliculas();
  }

  obtenerPeliculas() {
    let id = this.ar.snapshot.paramMap.get('id');
    this.peliService.getDetails(id).subscribe( result => {
      this.content = result;
    });
  }

}
