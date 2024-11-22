import { Component, OnInit } from '@angular/core';
import { trigger, style, transition, animate } from '@angular/animations';

@Component({
  selector: 'app-inicio',
  standalone: true,
  imports: [],
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.scss'],
  animations: [
    trigger("textLoadAnimation", [
      transition(":enter", [
        style({
          opacity: 0,
          right: "150px"

        }),
        animate("2s ease-in-out", style({
          opacity: 1,
          right: "0px"

        }))

      ])

    ]),
    trigger("imgLoadAnimation", [
        transition(":enter", [
          style({
            opacity: 0,
            left: "150px"


          }),
          animate("2s ease-in-out", style({
            opacity: 1,
            left: "0px"

          }))

        ])

    ])

  ]

})
export class InicioComponent {
  path: string = "assets/foto-principal.png";

}

