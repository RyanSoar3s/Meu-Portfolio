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
  private readonly XSMALL = "(max-width: 600px)";

  private componentPropertyValues: ComponentPropertyValues = {
    navigationPropertyValues: {},
    homePropertyValues: {},
    aboutMePropertyValues: {},
    mySkillsPropertyValues: {},
    myProjectsPropertyValues: {}

  };

  public setValues(name: string, breakpoint: string): void {
    switch (name) {
      case "navigation":
        this.setNavigationValues(breakpoint);
        this.setProperties(0);
        break;

      case "home":
        this.setHomeValues(breakpoint);
        this.setProperties(1);
        break;

      case "about-me":
        this.setAboutMeValues(breakpoint);
        this.setProperties(2);
        break;

      case "my-skills":
        this.setMySkillsValues(breakpoint);
        this.setProperties(3);
        break;

      case "my-projects":
        this.setMyProjectsValues(breakpoint);
        this.setProperties(4);
        break;

      default:
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
          "--home-section-margin-left": "25.292%",
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
          "--home-section-margin-left": "25.292%",
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
          "--home-section-margin-left": "26.5%",
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
          "--home-section-margin-left": "0%",
          "--home-section-content-inicio-width": "100%",
          "--home-section-content-inicio-padding-left": "30px",
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
          "--home-section-margin-left": "0%",
          "--home-section-content-inicio-width": "100%",
          "--home-section-content-inicio-padding-left": "0px",
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

  private setAboutMeValues(breakpoint: string): void {
    switch (breakpoint) {
      case this.MEDIUM:
        this.componentPropertyValues.aboutMePropertyValues = {
          "--about-me-section-margin-left": "26.5%",
          "--about-me-section-conteudo-sobre-mim-h1-font-size": "2.3em",
          "--about-me-section-content-odd-flex-direction": "row",
          "--about-me-section-content-even-flex-direction": "row-reverse",
          "--about-me-section-content-margin-left-right": "20px",
          "--about-me-section-content-text-width": "80%",
          "--about-me-section-content-text-h2-font-size": "18px",
          "--about-me-section-content-text-p-font-size": "1.18em",
          "--about-me-section-content-text-icons-margin-left-right": "30px",
          "--about-me-section-content-text-icons-fa-icon-font-size": "6em",
          "--about-me-section-content-text-logo__icons-grid-template-areas": `
            "html . css"
            ". js ."
          `,
          "--about-me-section-content-text-logo__icons-fa-icon-font-size": "5em"

        }

        break;

      case this.SMALL:
        this.componentPropertyValues.aboutMePropertyValues = {
          "--about-me-section-margin-left": "0%",
          "--about-me-section-conteudo-sobre-mim-h1-font-size": "2.0em",
          "--about-me-section-content-odd-flex-direction": "row",
          "--about-me-section-content-even-flex-direction": "row-reverse",
          "--about-me-section-content-margin-left-right": "20px",
          "--about-me-section-content-text-width": "80%",
          "--about-me-section-content-text-h2-font-size": "19px",
          "--about-me-section-content-text-p-font-size": "1.18em",
          "--about-me-section-content-text-icons-margin-left-right": "30px",
          "--about-me-section-content-text-icons-fa-icon-font-size": "6em",
          "--about-me-section-content-text-logo__icons-grid-template-areas": `
            "html . css"
            ". js ."
          `,
          "--about-me-section-content-text-logo__icons-fa-icon-font-left-right": "20px",
          "--about-me-section-content-text-logo__icons-fa-icon-font-size": "5em"

        }
        break;

      case this.XSMALL:
        this.componentPropertyValues.aboutMePropertyValues = {
          "--about-me-section-margin-left": "0%",
          "--about-me-section-conteudo-sobre-mim-h1-font-size": "1.8em",
          "--about-me-section-content-odd-flex-direction": "column",
          "--about-me-section-content-even-flex-direction": "column",
          "--about-me-section-content-margin-left-right": "0px",
          "--about-me-section-content-text-width": "90%",
          "--about-me-section-content-text-h2-font-size": "24px",
          "--about-me-section-content-text-p-font-size": "1.18em",
          "--about-me-section-content-text-icons-margin-left-right": "30px",
          "--about-me-section-content-text-icons-fa-icon-font-size": "5em",
          "--about-me-section-content-text-logo__icons-grid-template-areas": `
            "html js css"
          `,
          "--about-me-section-content-text-logo__icons-fa-icon-font-left-right": "0px",
          "--about-me-section-content-text-logo__icons-fa-icon-font-size": "4em"

        }
        break;

      default:
        this.componentPropertyValues.aboutMePropertyValues = {
          "--about-me-section-margin-left": "25.292%",
          "--about-me-section-conteudo-sobre-mim-h1-font-size": "2.3em",
          "--about-me-section-content-odd-flex-direction": "row",
          "--about-me-section-content-even-flex-direction": "row-reverse",
          "--about-me-section-content-margin-left-right": "40px",
          "--about-me-section-content-text-width": "48%",
          "--about-me-section-content-text-h2-font-size": "19px",
          "--about-me-section-content-text-p-font-size": "1.18em",
          "--about-me-section-content-text-icons-margin-left-right": "60px",
          "--about-me-section-content-text-icons-fa-icon-font-size": "7em",
          "--about-me-section-content-text-logo__icons-grid-template-areas": `
            "html . css"
            ". js ."
          `,
          "--about-me-section-content-text-logo__icons-fa-icon-font-left-right": "20px",
          "--about-me-section-content-text-logo__icons-fa-icon-font-size": "6em"

        }
        break;

    }

  }

  private setMySkillsValues(breakpoint: string): void {
    switch (breakpoint) {
      case this.XLARGE:
        this.componentPropertyValues.mySkillsPropertyValues = {
          "--my-skills-section-margin-left": "25.292%",
          "--my-skills-section-width": "77vw",
          "--my-skills-section-content-skills-width": "75%",
          "--my-skills-section-list__skills-column-gap": "30px",
          "--my-skills-section-list__skills-grid-template-columns": "repeat(3, 1fr)",
          "--my-skills-section-skill-height-width": "180px",
          "--my-skills-section-skill-div-i-font-size": "4.5em",
          "--my-skills-section-skill-div-h2-font-size": "1.2em"

        }

        break;

      case this.LARGE:
        this.componentPropertyValues.mySkillsPropertyValues = {
          "--my-skills-section-margin-left": "25.292%",
          "--my-skills-section-width": "77vw",
          "--my-skills-section-content-skills-width": "88%",
          "--my-skills-section-list__skills-column-gap": "20px",
          "--my-skills-section-list__skills-grid-template-columns": "repeat(3, 1fr)",
          "--my-skills-section-skill-height-width": "160px",
          "--my-skills-section-skill-div-i-font-size": "4.3em",
          "--my-skills-section-skill-div-h2-font-size": "1.2em"

        }
        break;

      case this.MEDIUM:
        this.componentPropertyValues.mySkillsPropertyValues = {
          "--my-skills-section-margin-left": "26.5%",
          "--my-skills-section-width": "77vw",
          "--my-skills-section-content-skills-width": "88%",
          "--my-skills-section-list__skills-column-gap": "20px",
          "--my-skills-section-list__skills-grid-template-columns": "repeat(3, 1fr)",
          "--my-skills-section-skill-height-width": "140px",
          "--my-skills-section-skill-div-i-font-size": "4.1em",
          "--my-skills-section-skill-div-h2-font-size": "1.0em"

        }
        break;

      case this.SMALL:
        this.componentPropertyValues.mySkillsPropertyValues = {
          "--my-skills-section-margin-left": "0%",
          "--my-skills-section-width": "100vw",
          "--my-skills-section-content-skills-width": "88%",
          "--my-skills-section-list__skills-column-gap": "20px",
          "--my-skills-section-list__skills-grid-template-columns": "repeat(3, 1fr)",
          "--my-skills-section-skill-height-width": "140px",
          "--my-skills-section-skill-div-i-font-size": "4.1em",
          "--my-skills-section-skill-div-h2-font-size": "1.0em"

        }
        break;

      default:
        this.componentPropertyValues.mySkillsPropertyValues = {
          "--my-skills-section-margin-left": "0%",
          "--my-skills-section-width": "100vw",
          "--my-skills-section-content-skills-width": "88%",
          "--my-skills-section-list__skills-column-gap": "10px",
          "--my-skills-section-list__skills-grid-template-columns": "repeat(2, 1fr)",
          "--my-skills-section-skill-height-width": "130px",
          "--my-skills-section-skill-div-i-font-size": "3.7em",
          "--my-skills-section-skill-div-h2-font-size": "0.9em"

        }
        break;

    }

  }

  private setMyProjectsValues(breakpoint: string): void {
    switch (breakpoint) {
      case this.XLARGE:
        this.componentPropertyValues.myProjectsPropertyValues = {
          "--my-projects-section-margin-left": "25.292%",
          "--my-projects-section-container-grid-width": "89vw",
          "--my-projects-section-projeto-height": "350px",
          "--my-projects-section-projeto-width": "65%",
          "--my-projects-section-buttons-gap": "60px"

        }
        break;

      case this.LARGE:
        this.componentPropertyValues.myProjectsPropertyValues = {
          "--my-projects-section-margin-left": "25.292%",
          "--my-projects-section-container-grid-width": "89vw",
          "--my-projects-section-projeto-height": "330px",
          "--my-projects-section-projeto-width": "65%",
          "--my-projects-section-buttons-gap": "60px"

        }
        break;

      case this.MEDIUM:
        this.componentPropertyValues.myProjectsPropertyValues = {
          "--my-projects-section-margin-left": "26.5%",
          "--my-projects-section-container-grid-width": "89vw",
          "--my-projects-section-projeto-height": "280px",
          "--my-projects-section-projeto-width": "79%",
          "--my-projects-section-buttons-gap": "60px"

        }
        break;

      case this.SMALL:
        this.componentPropertyValues.myProjectsPropertyValues = {
          "--my-projects-section-margin-left": "0%",
          "--my-projects-section-container-grid-width": "100vw",
          "--my-projects-section-projeto-height": "270px",
          "--my-projects-section-projeto-width": "75%",
          "--my-projects-section-buttons-gap": "40px"

        }
        break;

      default:
        this.componentPropertyValues.myProjectsPropertyValues = {
          "--my-projects-section-margin-left": "0%",
          "--my-projects-section-container-grid-width": "120vw",
          "--my-projects-section-projeto-height": "260px",
          "--my-projects-section-projeto-width": "90%",
          "--my-projects-section-buttons-gap": "10px"

        }
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
