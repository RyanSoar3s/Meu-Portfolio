import { Injectable } from '@angular/core';
import { MapComponentValues } from '../interfaces/component-values';

@Injectable({
  providedIn: 'root'
})
export class ResponsiveComponentValuesService {
  private mapComponentValues!: MapComponentValues<string, object>;

  //private XLARGE = "(min-width: 1200px)";
  private LARGE = "(min-width: 992px)"
  private MEDIUM = "(min-width: 768px)";
  private SMALL = "(min-width: 600px)";
  //private XSMALL = "(max-width: 600px)";

  public defineComponentValues(breakpoint: string): MapComponentValues<string, object> {
    switch (breakpoint) {
      case this.LARGE:
        this.mapComponentValues = {
          components: {
            navigation: this.getNavigationValues(false, [ "25vw", "1.9em", "19px", "42px", "95%", "1.6em", "40px", "53px", "1.2em", "1em" ])

          }

        }
        break;

      case this.MEDIUM:
        this.mapComponentValues = {
          components: {
            navigation: this.getNavigationValues(false, [ "29vw", "1.6em", "18px", "39px", "95%", "1.6em", "40px", "53px", "1.2em", "15px" ])

          }

        }
        break;

      case this.SMALL:
        this.mapComponentValues = {
          components: {
            navigation: this.getNavigationValues(true, [ "45vw", "1.6em", "18px", "45px", "95%", "1.7em", "40px", "53px", "1.2em", "17px"  ])

          }

        }
        break;

      default:
        this.mapComponentValues = {
          components: {
            navigation: this.getNavigationValues(true, [ "62vw", "1.6em", "16px", "38px", "100%", "1.4em", "40px", "53px", "1.1em", "14px"  ])

          }

        }

        break

    }

    return this.mapComponentValues;

  }

  private getNavigationValues(isHidden: boolean, sizes: string[]): any {
    let navigationValues = {
      isHidden: isHidden,

      sizes: {
        navWidth: sizes[0],
        titles: { h2: sizes[1], h4: sizes[2] },
        contacts: { size: sizes[3], divIcons: { width: sizes[4] },  faIcon: sizes[5] },
        options: { marginTop: sizes[6], marginBottom: sizes[7], faIcon: sizes[8], span: sizes[9] }

      }

    }
    return navigationValues;

  }

}
