import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-scale-image',
  standalone: true,
  imports: [],
  templateUrl: './scale-image.component.html',
  styleUrl: './scale-image.component.scss'
})
export class ScaleImageComponent{
  @Input() path!: string;
  @Input() hidden!: boolean;
  @Output() change_scale = new EventEmitter<void>();

  emit() {
    this.change_scale.emit();

  }

}
