import { Injectable } from '@angular/core';
import { ComponentPropertyValues } from '../interfaces/components-property-values';

@Injectable({
  providedIn: 'root'
})
export class SetPropertiesService {
  private readonly XLARGE = "(min-width: 1200px)";
  private readonly LARGE = "(min-width: 992px)";
  private readonly MEDIUM = "(min-width: 768px)";
  private readonly SMALL = "(min-width: 600px)";

  private componentPropertyValues: ComponentPropertyValues = {
    appPropertyValues: {},
    navigationPropertyValues: {},
    homePropertyValues: {}

  };

  public setValues(name: string, breakpoint: string): void {
    switch (name) {
      case "app":
        this.setAppValues(breakpoint);
        this.setProperties(0);
        break;

      case "navigation":
        this.setNavigationValues(breakpoint);
        this.setProperties(1);
        break;

      case "home":
        this.setHomeValues(breakpoint);
        this.setProperties(2);
        break;

      default:
        break;
    }

  }
  private setAppValues(breakpoint: string): void {
    switch (breakpoint) {
      case this.XLARGE:
        this.componentPropertyValues.appPropertyValues = {
          "--app-section-margin-left": "25%"

        }
        break;

      case this.LARGE:
        this.componentPropertyValues.appPropertyValues = {
          "--app-section-margin-left": "25%"

        }
        break;

      case this.MEDIUM:
        this.componentPropertyValues.appPropertyValues = {
          "--app-section-margin-left": "26%"

        }
        break;

      default:
        this.componentPropertyValues.appPropertyValues = {
          "--app-section-margin-left": "0%"

        }
        break;

    }

  }

  private setNavigationValues(breakpoint: string): void {
    switch (breakpoint) {
      case this.XLARGE:
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
          "--navigation-nav-width": "26vw",
          "--navigation-nav-transform": "0px",
          "--navigation-nav-photo-height-width": "100px",
          "--navigation-nav-h2-font-size": "1.6em",
          "--navigation-nav-icons-container-contacts-height-width": "39px",
          "--navigation-nav-icons-container-contacts-fa-icon-font-size": "1.6em",
          "--navigation-nav-options-ul-li-width": "93%",
          "--navigation-nav-options-ul-li-left": "18px",
          "--navigation-nav-options-ul-li-fa-icon-font-size": "1.2em",
          "--navigation-nav-options-ul-li-span-font-size": "0.87em",
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

  private setHomeValues(breakpoint: string): void {
    switch (breakpoint) {
      case this.XLARGE:
        this.componentPropertyValues.homePropertyValues = {
          "--home-section-content-inicio-width": "75%",
          "--home-section-content-inicio-padding-left": "50px",
          "--home-section-text-move-animation-position": "relative",
          "--home-section-text-move-animation-height": "unset",
          "--home-section-text-move-animation-width": "unset",
          "--home-section-text-move-animation-left": "0%",
          "--home-section-text-move-animation-h1-font-size": "2.65em",
          "--home-section-text-move-animation-h2-font-size": "1.5em",
          "--home-section-img-move-animation-text-div-background-color": "transparent",
          "--home-section-img-move-animation-text-div-bottom": "0px",
          "--home-section-img-move-animation-div-position": "relative",
          "--home-section-img-move-animation-foto-principal-width": "444px",
          "--home-section-img-move-animation-foto-principal-right": "0%",
          "--home-section-img-move-animation-foto-principal-img-height": "100%",
          "--home-section-img-move-animation-foto-principal-img-width": "100%",
          "--home-section-img-move-animation-foto-principal-img-margin-right": "0px"

        };
        break;

      case this.LARGE:
        this.componentPropertyValues.homePropertyValues = {
          "--home-section-content-inicio-width": "75%",
          "--home-section-content-inicio-padding-left": "50px",
          "--home-section-text-move-animation-position": "relative",
          "--home-section-text-move-animation-left": "0%",
          "--home-section-text-move-animation-height": "unset",
          "--home-section-text-move-animation-width": "unset",
          "--home-section-text-move-animation-h1-font-size": "2em",
          "--home-section-text-move-animation-h2-font-size": "1.3em",
          "--home-section-img-move-animation-text-div-background-color": "transparent",
          "--home-section-img-move-animation-text-div-bottom": "0px",
          "--home-section-img-move-animation-div-position": "relative",
          "--home-section-img-move-animation-foto-principal-width": "380px",
          "--home-section-img-move-animation-foto-principal-right": "0%",
          "--home-section-img-move-animation-foto-principal-img-height": "100%",
          "--home-section-img-move-animation-foto-principal-img-width": "100%",
          "--home-section-img-move-animation-foto-principal-img-margin-right": "0px"

        };
        break;

      case this.MEDIUM:
        this.componentPropertyValues.homePropertyValues = {
          "--home-section-content-inicio-width": "74%",
          "--home-section-content-inicio-padding-left": "30px",
          "--home-section-text-move-animation-position": "relative",
          "--home-section-text-move-animation-height": "unset",
          "--home-section-text-move-animation-width": "unset",
          "--home-section-text-move-animation-left": "0%",
          "--home-section-text-move-animation-h1-font-size": "1.62em",
          "--home-section-text-move-animation-h2-font-size": "1.12em",
          "--home-section-img-move-animation-text-div-background-color": "transparent",
          "--home-section-img-move-animation-text-div-bottom": "0px",
          "--home-section-img-move-animation-div-position": "relative",
          "--home-section-img-move-animation-foto-principal-width": "287px",
          "--home-section-img-move-animation-foto-principal-right": "0%",
          "--home-section-img-move-animation-foto-principal-img-height": "85%",
          "--home-section-img-move-animation-foto-principal-img-width": "118%",
          "--home-section-img-move-animation-foto-principal-img-margin-right": "0px"

        };
        break;

      case this.SMALL:
        this.componentPropertyValues.homePropertyValues = {
          "--home-section-content-inicio-width": "100%",
          "--home-section-content-inicio-padding-left": "0px",
          "--home-section-text-move-animation-position": "relative",
          "--home-section-text-move-animation-height": "unset",
          "--home-section-text-move-animation-width": "unset",
          "--home-section-text-move-animation-left": "0%",
          "--home-section-text-move-animation-h1-font-size": "1.62em",
          "--home-section-text-move-animation-h2-font-size": "1.24em",
          "--home-section-img-move-animation-text-div-background-color": "transparent",
          "--home-section-img-move-animation-text-div-bottom": "0px",
          "--home-section-img-move-animation-div-position": "relative",
          "--home-section-img-move-animation-foto-principal-width": "244px",
          "--home-section-img-move-animation-foto-principal-right": "0%",
          "--home-section-img-move-animation-foto-principal-img-height": "85%",
          "--home-section-img-move-animation-foto-principal-img-width": "142%",
          "--home-section-img-move-animation-foto-principal-img-margin-right": "48px"

        };
        break;

      default:
        this.componentPropertyValues.homePropertyValues = {
          "--home-section-content-inicio-width": "100%",
          "--home-section-content-inicio-padding-left": "30px",
          "--home-section-text-move-animation-position": "absolute",
          "--home-section-text-move-animation-height": "96%",
          "--home-section-text-move-animation-width": "100vw",
          "--home-section-text-move-animation-left": "20%",
          "--home-section-text-move-animation-h1-font-size": "1.62em",
          "--home-section-text-move-animation-h2-font-size": "1.24em",
          "--home-section-img-move-animation-text-div-background-color": "var(--background)",
          "--home-section-img-move-animation-text-div-bottom": "59px",
          "--home-section-img-move-animation-div-position": "absolute",
          "--home-section-img-move-animation-foto-principal-width": "100vw",
          "--home-section-img-move-animation-foto-principal-right": "30%",
          "--home-section-img-move-animation-foto-principal-img-height": "85%",
          "--home-section-img-move-animation-foto-principal-img-width": "350px",
          "--home-section-img-move-animation-foto-principal-img-margin-right": "0px"

        };
        break;

    }

  }

  private setProperties(index: number): void {
    const properties = Object.values(this.componentPropertyValues)[index];
    const arr = Object.entries(properties)

    for (const [ property, value ] of arr) {
      window.document.body.style.setProperty(property, value as string);

    }

  }

}
