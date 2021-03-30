import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {

  mensajes: any;

  constructor( private dataService: DataService ) { }

  ngOnInit(): void {
    this.mensajes = this.dataService.getPots();
      // .then( (posts: any[]) => {
      //     console.log(posts);
      //     this.mensajes = posts;
      // }
    // );
  }

  // Recibe el evento y ejecuta el código.
  // La declaración del evento se lo coloca en el HTML.
  escuchaClick( id: number ): void {
    console.log('Click en:', id);
  }

}
