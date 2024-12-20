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

  public setValues(name: string, breakpoint: string): void {
    switch (name) {
      case "navigation":
        this.setNavigationValues(breakpoint);
        this.setProperties();
        break;

      default:
        break;
    }

  }

  private setNavigationValues(breakpoint: string): void {
    switch (breakpoint) {
      case this.LARGE:
        this.componentPropertyValues.navigationPropertyValues = {
          "--navigation-overlay-display": "none",
          "--navigation-menu-display": "none",
          "--navigation-nav-width": "25vw",
          "--navigation-nav-transform": "0px",
          "--navigation-nav-photo-height-width": "100px",
          "--navigation-nav-h2-font-size": "1.9em",
          "--navigation-nav-icons-container-contacts-height-width": "45px",
          "--navigation-nav-icons-container-contacts-fa-icon-font-size": "1.8em",
          "--navigation-nav-options-ul-li-width": "95%",
          "--navigation-nav-options-ul-li-left": "20px",
          "--navigation-nav-options-ul-li-fa-icon-font-size": "1.2em",
          "--navigation-nav-options-ul-li-span-font-size": "1em",
          "--navigation-nav-container-info-info-h4-font-size": "19px"

        };
        break;

      case this.MEDIUM:
        this.componentPropertyValues.navigationPropertyValues = {
          "--navigation-overlay-display": "none",
          "--navigation-menu-display": "none",
          "--navigation-nav-width": "29vw",
          "--navigation-nav-transform": "0px",
          "--navigation-nav-photo-height-width": "100px",
          "--navigation-nav-h2-font-size": "1.6em",
          "--navigation-nav-icons-container-contacts-height-width": "39px",
          "--navigation-nav-icons-container-contacts-fa-icon-font-size": "1.6em",
          "--navigation-nav-options-ul-li-width": "95%",
          "--navigation-nav-options-ul-li-left": "18px",
          "--navigation-nav-options-ul-li-fa-icon-font-size": "1.2em",
          "--navigation-nav-options-ul-li-span-font-size": "0.9em",
          "--navigation-nav-container-info-info-h4-font-size": "16.3px"

        };
        break;

      case this.SMALL:
        this.componentPropertyValues.navigationPropertyValues = {
            "--navigation-overlay-display": "none",
            "--navigation-menu-display": "flex",
            "--navigation-nav-width": "45vw",
            "--navigation-nav-transform": "-600px",
            "--navigation-nav-photo-height-width": "100px",
            "--navigation-nav-h2-font-size": "1.6em",
            "--navigation-nav-icons-container-contacts-height-width": "45px",
            "--navigation-nav-icons-container-contacts-fa-icon-font-size": "1.7em",
            "--navigation-nav-options-ul-li-width": "95%",
            "--navigation-nav-options-ul-li-left": "20px",
            "--navigation-nav-options-ul-li-fa-icon-font-size": "1.2em",
            "--navigation-nav-options-ul-li-span-font-size": "0.9em",
            "--navigation-nav-container-info-info-h4-font-size": "18px"

        };
        break;

      default:
        this.componentPropertyValues.navigationPropertyValues = {
            "--navigation-overlay-display": "none",
            "--navigation-menu-display": "flex",
            "--navigation-nav-width": "100vw",
            "--navigation-nav-transform": "-600px",
            "--navigation-nav-photo-height-width": "130px",
            "--navigation-nav-h2-font-size": "1.9em",
            "--navigation-nav-icons-container-contacts-height-width": "55px",
            "--navigation-nav-icons-container-contacts-fa-icon-font-size": "1.9em",
            "--navigation-nav-options-ul-li-width": "89%",
            "--navigation-nav-options-ul-li-left": "10%",
            "--navigation-nav-options-ul-li-fa-icon-font-size": "1.2em",
            "--navigation-nav-options-ul-li-span-font-size": "1.3em",
            "--navigation-nav-container-info-info-h4-font-size": "21px"

        };
        break;
    }


  }

  private setProperties(): void {
    const properties = Object.values(this.componentPropertyValues)[0];
    const obj = Object.entries(properties)

    for (const [ property, value ] of obj) {
      window.document.body.style.setProperty(property, value as string);

    }

  }

}
