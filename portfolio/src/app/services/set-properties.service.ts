import { Injectable } from '@angular/core';
import { ComponentPropertyValues } from '../interfaces/components-property-values';

@Injectable({
  providedIn: 'root'
})
export class SetPropertiesService {
  private readonly LARGE = "(min-width: 992px)";
  private readonly MEDIUM = "(min-width: 768px)";
  private readonly SMALL = "(min-width: 600px)";

  private componentPropertyValues: ComponentPropertyValues = {
    navigationPropertyValues: {}

  };

  public setValues(name: string, size: string): void {
    switch (name) {
      case "navigation":
        this.setNavigationValues(size);
        break;

      default:
        break;
    }

  }

  private setNavigationValues(size: string): void {
    switch (size) {
      case this.LARGE:
        this.componentPropertyValues.navigationPropertyValues = {
          "--navigation-nav-width": "25vw",
          "--navigation-nav-h2-font-size": "1.9em",
          "--navigation-nav-icons-container-contacts-height-width": "45px",
          "--navigation-nav-icons-container-contacts-fa-icon-font-size": "1.8em",
          "--navigation-nav-options-margin-top": "40px",
          "--navigation-nav-options-margin-bottom": "53px",
          "--navigation-nav-options-ul-li-left": "20px",
          "--navigation-nav-options-ul-li-fa-icon-font-size": "1.2em",
          "--navigation-nav-options-ul-li-span-font-size": "1em",
          "--navigation-nav-container-info-info-h4-font-size": "19px"

        };
        this.setProperties();
        break;

      case this.MEDIUM:
        this.componentPropertyValues.navigationPropertyValues = {
          "--navigation-nav-width": "29vw",
          "--navigation-nav-h2-font-size": "1.6em",
          "--navigation-nav-icons-container-contacts-height-width": "39px",
          "--navigation-nav-icons-container-contacts-fa-icon-font-size": "1.6em",
          "--navigation-nav-options-margin-top": "40px",
          "--navigation-nav-options-margin-bottom": "53px",
          "--navigation-nav-options-ul-li-left": "18px",
          "--navigation-nav-options-ul-li-fa-icon-font-size": "1.2em",
          "--navigation-nav-options-ul-li-span-font-size": "0.9em",
          "--navigation-nav-container-info-info-h4-font-size": "16.3px"

        };
        this.setProperties();
        break;

      case this.SMALL:
        this.componentPropertyValues.navigationPropertyValues = {
            "--navigation-nav-width": "45vw",
            "--navigation-nav-h2-font-size": "1.6em",
            "--navigation-nav-icons-container-contacts-height-width": "45px",
            "--navigation-nav-icons-container-contacts-fa-icon-font-size": "1.7em",
            "--navigation-nav-options-margin-top": "40px",
            "--navigation-nav-options-margin-bottom": "53px",
            "--navigation-nav-options-ul-li-left": "20px",
            "--navigation-nav-options-ul-li-fa-icon-font-size": "1.2em",
            "--navigation-nav-options-ul-li-span-font-size": "0.9em",
            "--navigation-nav-container-info-info-h4-font-size": "18px"

        };
        this.setProperties();
        break;

      default:
        this.componentPropertyValues.navigationPropertyValues = {
            "--navigation-nav-width": "100vw",
            "--navigation-nav-h2-font-size": "1.6em",
            "--navigation-nav-icons-container-contacts-height-width": "45px",
            "--navigation-nav-icons-container-contacts-fa-icon-font-size": "1.7em",
            "--navigation-nav-options-margin-top": "40px",
            "--navigation-nav-options-margin-bottom": "53px",
            "--navigation-nav-options-ul-li-left": "7px",
            "--navigation-nav-options-ul-li-fa-icon-font-size": "1.2em",
            "--navigation-nav-options-ul-li-span-font-size": "0.9em",
            "--navigation-nav-container-info-info-h4-font-size": "18px"

        };
        this.setProperties();
        break;
    }


  }

  private setProperties(): void {
    for (const properties of Object.values(this.componentPropertyValues)) {
      for (const [ property, value ] of Object.entries(properties)) {
        window.document.body.style.setProperty(property, value as string);

      }

    }

  }

}
