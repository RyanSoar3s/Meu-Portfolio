import {
  Component, ElementRef,
  Renderer2, ViewChild

} from '@angular/core';

@Component({
  selector: 'app-meus-projetos',
  standalone: true,
  imports: [],
  templateUrl: './meus-projetos.component.html',
  styleUrl: './meus-projetos.component.scss'
})

export class MeusProjetosComponent {
  @ViewChild("border") border!: ElementRef;
  @ViewChild("content") content!: ElementRef;
  show_detail: boolean = false;

  path: string = "../../../assets/projeto-vazio.png";

  constructor(private renderer: Renderer2) {

  }

  showDetails(event: MouseEvent) {
    if (event.type === "mouseleave" && !this.show_detail && this.border.nativeElement.style.display === "none") {
      this.renderer.setStyle(this.border.nativeElement, "display", "none");
      return;

    }

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

