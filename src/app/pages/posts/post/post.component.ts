import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {

  @Input() mensaje: any;
  @Output() clickPost = new EventEmitter<number>(); // Evento

  constructor() { }

  ngOnInit(): void {
  }

  // Al dar click, emite un evento. Lo recibe Posts.
  onClick(): void{
    this.clickPost.emit( this.mensaje.id );
  }

}
