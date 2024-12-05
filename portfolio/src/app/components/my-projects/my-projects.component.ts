import {
  Component, ElementRef,
  Renderer2, ViewChild

} from '@angular/core';

@Component({
  selector: 'app-my-projects',
  standalone: true,
  imports: [],
  templateUrl: './my-projects.component.html',
  styleUrl: './my-projects.component.scss'
})

export class MyProjectsComponent {
  @ViewChild("border") border!: ElementRef;
  @ViewChild("content") content!: ElementRef;
  private show_detail: boolean = false;

  protected path: string = "../../../assets/projeto-vazio.png";

  constructor(private renderer: Renderer2) {

  }

  showDetails(event: MouseEvent) {
    this.show_detail = !this.show_detail;

    if (!this.show_detail) {
      this.renderer.setStyle(this.border.nativeElement, "display", "none");
      return;

    }

    const target = event.target as HTMLElement;
    this.renderer.setStyle(this.border.nativeElement, "display", "block");

    const id = Number(target.getAttribute("data-id"));
    this.flip(id);
    this.positionElement(id);

  }

  private flip(id: number) {
    const scaleX = (id & 1) ? 1 : -1;
    this.renderer.setStyle(this.border.nativeElement, "transform", `scale(${scaleX}, 1)`);
    this.renderer.setStyle(this.content.nativeElement, "transform", `scale(${scaleX}, 1)`);

  }

  private positionElement(id: number) {
    const pos_x = (id & 1) ? 234 : 414;
    const pos_y = (id < 3) ? 19 : 525;

    this.renderer.setStyle(this.border.nativeElement, "top", `${pos_y}px`);
    this.renderer.setStyle(this.border.nativeElement, "right", `${pos_x}px`);

  }

}

