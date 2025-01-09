import { Injectable } from '@angular/core';
import { ComponentPropertyValues } from '../interfaces/components-property-values';

@Injectable({
  providedIn: 'root'
})
export class SetPropertiesService {
  private readonly breakpoints = {
    XLARGE: "(min-width: 1200px)",
    LARGE:  "(min-width: 992px)",
    MEDIUM_PORT: "(min-width: 768px) and (min-height: 500px)",
    MEDIUM_LAND: "(min-width: 768px) and (max-height: 500px)",
    SMALL:  "(min-width: 600px)",
    XSMALL: "(max-width: 600px)"

  }

  private componentPropertyValues: ComponentPropertyValues = {
    navigationPropertyValues: {},
    homePropertyValues: {},
    aboutMePropertyValues: {},
    mySkillsPropertyValues: {},
    myProjectsPropertyValues: {},
    aboutThisProjectPropertyValues: {}

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
        this.setAboutThisProjectValues(breakpoint);
        this.setProperties(5);
        break;

    }

  }

  private setNavigationValues(breakpoint: string): void {
    this.componentPropertyValues.navigationPropertyValues = this.getNavigationValues(breakpoint);

  }

  private getNavigationValues(breakpoint: string): object {
    const isMediumScreen = breakpoint === this.breakpoints.MEDIUM_PORT || this.breakpoints.MEDIUM_LAND;
    const isSmallScreen = breakpoint === this.breakpoints.SMALL;
    const isExtraSmallScreen = breakpoint === this.breakpoints.XSMALL;
    let values = {
      "--navigation-menu-display": (isSmallScreen || isExtraSmallScreen) ? "flex" : "none",
      "--navigation-nav-width": (isExtraSmallScreen) ? "100vw" : (isSmallScreen) ? "45vw" : (isMediumScreen) ? "26vw" : "25vw",
      "--navigation-nav-transform": (isExtraSmallScreen || isSmallScreen) ? "-600px" : "0px",
      "--navigation-nav-photo-height-width": (isExtraSmallScreen) ? "130px" : "100px",
      "--navigation-nav-h2-font-size": (isExtraSmallScreen) ? "1.9em" : (isSmallScreen || isMediumScreen) ? "1.6em" : "1.9em",
      "--navigation-nav-icons-container-contacts-height-width": (isExtraSmallScreen) ? "55px" : (isSmallScreen) ? "45px" : (isMediumScreen) ? "39px" : "45px",
      "--navigation-nav-icons-container-contacts-fa-icon-font-size": (isExtraSmallScreen) ? "1.9em" : (isSmallScreen) ? "1.7em" : (isMediumScreen) ? "1.6em" : "1.8em",
      "--navigation-nav-options-ul-li-width": (isExtraSmallScreen) ? "89%" : (isSmallScreen) ? "95%" : (isMediumScreen) ? "93%" : "95%",
      "--navigation-nav-options-ul-li-left": (isExtraSmallScreen) ? "10%" : "20px",
      "--navigation-nav-options-ul-li-span-font-size": (isExtraSmallScreen) ? "1.3em" : (isSmallScreen) ? "0.9em" : (isMediumScreen) ? "0.87em" : "1em",
      "--navigation-nav-container-info-info-h4-font-size": (isExtraSmallScreen) ? "21px" : (isSmallScreen) ? "18px" : (isMediumScreen) ? "16.3px" : "19px"

    };

    return { "--navigation-overlay-display": "none", ...values };

  }

  private setHomeValues(breakpoint: string): void {
    this.componentPropertyValues.homePropertyValues = this.getHomeValues(breakpoint);

  }

  private getHomeValues(breakpoint: string): object { console.log(breakpoint)
    console.log(this.breakpoints.MEDIUM_LAND)
    console.log(breakpoint === this.breakpoints.MEDIUM_LAND)
    const isExtraLargeScreen = breakpoint === this.breakpoints.XLARGE;
    const isLargeScreen = breakpoint === this.breakpoints.LARGE;
    const isMediumScreen = breakpoint === this.breakpoints.MEDIUM_PORT || breakpoint === this.breakpoints.MEDIUM_LAND;
    const isSmallScreen = breakpoint === this.breakpoints.SMALL;
    const isExtraSmallScreen = breakpoint === this.breakpoints.XSMALL;
    const values = {
      "--home-section-margin-left": (isExtraLargeScreen || isLargeScreen) ? "25.292%" : (isMediumScreen) ? "26.5%" : "0%",
      "--home-section-content-inicio-width": (isExtraLargeScreen || isLargeScreen) ? "75%" : (isMediumScreen) ? "74%" : "100%",
      "--home-section-content-inicio-padding-left": (isExtraLargeScreen || isLargeScreen) ? "50px" : (isMediumScreen || isSmallScreen) ? "30px" : "0px",
      "--home-section-text-move-animation-position": (isExtraSmallScreen) ? "absolute" : "relative",
      "--home-section-text-move-animation-height": (isExtraSmallScreen) ? "96%" : "unset",
      "--home-section-text-move-animation-width": (isExtraSmallScreen) ? "100vw" : "unset",
      "--home-section-text-move-animation-left": (isExtraSmallScreen) ? "20%" : "0%",
      "--home-section-text-move-animation-h1-font-size": (isExtraLargeScreen) ? "2.65em" : (isLargeScreen) ? "2em" : "1.62em",
      "--home-section-text-move-animation-h2-font-size": (isExtraLargeScreen) ? "1.5em" : (isLargeScreen) ? "1.3em" : "1.24em",
      "--home-section-img-move-animation-text-div-background-color": (isExtraSmallScreen) ? "var(--background)" : "transparent",
      "--home-section-img-move-animation-text-div-bottom": (isExtraSmallScreen) ? "100px" : "0px",
      "--home-section-img-move-animation-div-position": (isExtraSmallScreen) ? "absolute" : "relative",
      "--home-section-img-move-animation-foto-principal-width": (isExtraLargeScreen)
        ? "444px"
        : (isLargeScreen)
        ? "380px"
        : (isMediumScreen)
        ? "260px"
        : (isSmallScreen)
        ? "244px"
        : "100vw",
      "--home-section-img-move-animation-foto-principal-right": (isExtraLargeScreen)
      ? "0%"
      : (isExtraSmallScreen)
      ? "30%"
      : "0%",
      "--home-section-img-move-animation-foto-principal-img-height": (isExtraLargeScreen)
      ? "100%"
      : (isLargeScreen)
      ? "90%"
      : (breakpoint === this.breakpoints.MEDIUM_LAND)
      ? "50%"
      : (isMediumScreen)
      ? "85%" : "80%",
      "--home-section-img-move-animation-foto-principal-img-width": (isExtraLargeScreen || isLargeScreen || breakpoint === this.breakpoints.MEDIUM_LAND)
        ? "100%"
        : (isMediumScreen)
        ? "118%"
        : "350px",
      "--home-section-img-move-animation-foto-principal-img-margin-right": (isSmallScreen) ? "48px" : "0px"
    };

    return { ...values };

  }

  private setAboutMeValues(breakpoint: string): void {
    this.componentPropertyValues.aboutMePropertyValues = this.getAboutMeValues(breakpoint);

  }

  private getAboutMeValues(breakpoint: string): object {
    const isMediumScreen = breakpoint === this.breakpoints.MEDIUM_PORT || this.breakpoints.MEDIUM_LAND;
    const isSmallScreen = breakpoint === this.breakpoints.SMALL;
    const isExtraSmallScreen = breakpoint === this.breakpoints.XSMALL;
    const values = {
      "--about-me-section-margin-left": (isExtraSmallScreen || isSmallScreen) ? "0%" : (isMediumScreen) ? "26%" : "25.292%",
      "--about-me-section-conteudo-sobre-mim-h1-font-size": (isExtraSmallScreen)
        ? "1.8em"
        : (isSmallScreen)
        ? "2.0em"
        : "2.3em",
      "--about-me-section-content-odd-flex-direction": (isExtraSmallScreen) ? "column" : "row",
      "--about-me-section-content-even-flex-direction": (isExtraSmallScreen) ? "column" : "row-reverse",
      "--about-me-section-content-margin-left-right": (isExtraSmallScreen) ? "0px" : (isMediumScreen || isSmallScreen) ? "20px" : "40px",
      "--about-me-section-content-text-width": (isExtraSmallScreen) ? "90%" : (isMediumScreen || isSmallScreen) ? "80%" : "48%",
      "--about-me-section-content-text-h2-font-size": (isExtraSmallScreen)
        ? "24px"
        : (isSmallScreen)
        ? "19px"
        : "19px",
      "--about-me-section-content-text-p-font-size": "1.18em",
      "--about-me-section-content-text-icons-margin-left-right": "30px",
      "--about-me-section-content-text-icons-fa-icon-font-size": (isExtraSmallScreen) ? "5em" : "6em",
      "--about-me-section-content-text-logo__icons-grid-template-areas": (isExtraSmallScreen)
        ? `
          "html js css"
        `
        : `
          "html . css"
          ". js ."
        `,
      "--about-me-section-content-text-logo__icons-fa-icon-font-left-right": (isExtraSmallScreen) ? "0px" : "20px",
      "--about-me-section-content-text-logo__icons-fa-icon-font-size": (isExtraSmallScreen) ? "4em" : (isSmallScreen) ? "5em" : "6em"
    };

    return { ...values };

  }


  private setMySkillsValues(breakpoint: string): void {
    this.componentPropertyValues.mySkillsPropertyValues = this.getMySkillsValues(breakpoint);

  }

  private getMySkillsValues(breakpoint: string): object {
    const isXLarge = breakpoint === this.breakpoints.XLARGE;
    const isLarge = breakpoint === this.breakpoints.LARGE;
    const isMedium = breakpoint === this.breakpoints.MEDIUM_PORT || this.breakpoints.MEDIUM_LAND;
    const isSmall = breakpoint === this.breakpoints.SMALL;
    const isExtraSmall = breakpoint === this.breakpoints.XSMALL;

    const values = {
      "--my-skills-section-margin-left": (isExtraSmall || isSmall) ? "0%" : (isMedium) ? "26.5%" : "25.292%",
      "--my-skills-section-width": (isSmall || isExtraSmall) ? "100vw" : "77vw",
      "--my-skills-section-content-skills-width": (isXLarge) ? "75%" : "88%",
      "--my-skills-section-list__skills-column-gap": (isExtraSmall) ? "10px" : (isLarge || isMedium || isSmall) ? "20px" : "30px",
      "--my-skills-section-list__skills-grid-template-columns": (isExtraSmall) ? "repeat(2, 1fr)" : "repeat(3, 1fr)",
      "--my-skills-section-skill-height-width": (isXLarge) ? "180px" : (isLarge) ? "160px" : (isMedium || isSmall) ? "140px" : "130px",
      "--my-skills-section-skill-div-i-font-size": (isXLarge)
        ? "4.5em"
        : (isLarge)
        ? "4.3em"
        : (isMedium || isSmall)
        ? "4.1em"
        : "3.7em",
      "--my-skills-section-skill-div-h2-font-size": (isExtraSmall) ? "0.9em" : (isMedium || isSmall) ? "1.0em" : "1.2em"
    };

    return { ...values };

  }

  private setMyProjectsValues(breakpoint: string): void {
    this.componentPropertyValues.myProjectsPropertyValues = this.getMyProjectsValues(breakpoint);

  }

  private getMyProjectsValues(breakpoint: string): object {
    const isXLarge = breakpoint === this.breakpoints.XLARGE;
    const isLarge = breakpoint === this.breakpoints.LARGE;
    const isMedium = breakpoint === this.breakpoints.MEDIUM_PORT || this.breakpoints.MEDIUM_LAND;
    const isSmall = breakpoint === this.breakpoints.SMALL;
    const isExtraSmall = breakpoint === this.breakpoints.XSMALL;

    const values = {
      "--my-projects-section-margin-left": (isSmall || isExtraSmall) ? "0%" : (isMedium) ? "26.5%" : "25.292%",
      "--my-projects-section-container-grid-width": (isExtraSmall)
        ? "120vw"
        : (isSmall)
        ? "100vw"
        : "89vw",
      "--my-projects-section-projeto-height": (isXLarge)
        ? "350px"
        : (isLarge)
        ? "330px"
        : (isMedium)
        ? "310px"
        : (isSmall)
        ? "300px"
        : "290px",
      "--my-projects-section-projeto-width": (isExtraSmall)
        ? "90%"
        : (isMedium)
        ? "79%"
        : (isSmall)
        ? "75%"
        : "65%",
      "--my-projects-section-buttons-gap": (isExtraSmall)
        ? "10px"
        : (isSmall)
        ? "40px"
        : "60px"
    };

    return { ...values };
  }


  private setAboutThisProjectValues(breakpoint: string): void {
    this.componentPropertyValues.aboutThisProjectPropertyValues = this.getAboutThisProjectValues(breakpoint);

  }

  private getAboutThisProjectValues(breakpoint: string): object {
    const isXLarge = breakpoint === this.breakpoints.XLARGE;
    const isLarge = breakpoint === this.breakpoints.LARGE;
    const isMedium = breakpoint === this.breakpoints.MEDIUM_PORT || this.breakpoints.MEDIUM_LAND;
    const isSmall = breakpoint === this.breakpoints.SMALL;
    const isExtraSmall = breakpoint === this.breakpoints.XSMALL;

    const values = {
      "--about-this-project-section-margin-left": (isSmall || isExtraSmall) ? "0%" : (isMedium) ? "26.5%" : "25.292%",
      "--about-this-project-section-div-width": (isSmall || isExtraSmall) ? "100vw" : "74.7vw",
      "--about-this-project-section-container-content-area__content-font-size": (isXLarge)
        ? "16px"
        : (isLarge)
        ? "16px"
        : (isMedium)
        ? "15px"
        : (isSmall)
        ? "14px"
        : "13px",
      "--about-this-project-section-icons__area-width": (isXLarge)
        ? "67.9%"
        : (isLarge)
        ? "75%"
        : (isMedium || isSmall)
        ? "58%"
        : "47%",
      "--about-this-project-section-icons-width": (isExtraSmall) ? "95px" : (isMedium || isSmall) ? "100px" : (isLarge) ? "110px" : "129px",
      "--about-this-project-section-icons-i-font-size": (isXLarge)
        ? "7em"
        : (isLarge)
        ? "6em"
        : (isMedium)
        ? "5.2em"
        : (isSmall)
        ? "4.8em"
        : "4.5em",
      "--about-this-project-section-icons-h3-font-size": (isXLarge)
        ? "1em"
        : (isLarge)
        ? "0.95em"
        : (isMedium)
        ? "0.9em"
        : (isSmall)
        ? "0.92em"
        : "0.87em"
    };

    return { ...values };
  }


  private setProperties(index: number): void {
    const properties = Object.values(this.componentPropertyValues)[index];
    const arr = Object.entries(properties)

    for (const [ property, value ] of arr) {
      window.document.body.style.setProperty(property, value as string);

    }

  }

}
