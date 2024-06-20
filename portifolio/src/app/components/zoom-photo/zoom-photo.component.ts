import { Component, Input } from '@angular/core';
import { NavigationComponent } from '../navigation/navigation.component';

@Component({
  selector: 'app-zoom-photo',
  standalone: true,
  imports: [ NavigationComponent ],
  templateUrl: './zoom-photo.component.html',
  styleUrl: './zoom-photo.component.scss'
})
export class ZoomPhotoComponent{
  @Input() path!: string;
  @Input({
    transform: (value: string | boolean) => (typeof value === "string") ?
                                              value == "" || value == "true" : value

  }) hidden!: boolean;

}
