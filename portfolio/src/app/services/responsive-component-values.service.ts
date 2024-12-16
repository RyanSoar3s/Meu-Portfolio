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
            navigation: this.getNavigationValues(false, ...[ "25vw", "1.9em", "16px", "42px", "85%", "1.4em", "40px", "40px", "7px", "53px", "1.2em", "1em" ])

          }

        }
        break;

      case this.MEDIUM:
        this.mapComponentValues = {
          components: {
            navigation: this.getNavigationValues(false, ...[ "29vw", "1.6em", "16px", "39px", "91%", "1.6em", "30px", "28px", "6px", "40px", "1.2em", "15px" ])

          }

        }
        break;

      case this.SMALL:
        this.mapComponentValues = {
          components: {
            navigation: this.getNavigationValues(true, ...[ "29vw", "1.5em", "16px", "39px",  "75%", "1.6em", "30px", "28px", "6px", "40px", "1.2em", "15px" ])

          }

        }
        break;

      default:
        this.mapComponentValues = {
          components: {
            navigation: this.getNavigationValues(true)

          }

        }

        break

    }

    return this.mapComponentValues;

  }

  private getNavigationValues(isHidden: boolean, ...sizes: string[]): any {
    let navigationValues = {
      isHidden: isHidden,

      sizes: {
        navWidth: sizes[0],
        titles: { h2: sizes[1], h4: sizes[2] },
        contacts: { size: sizes[3], divIcons: { width: sizes[4] },  faIcon: sizes[5] },
        options: { paddingLeft: sizes[6], marginTop: sizes[7], liPadding: sizes[8], marginBottom: sizes[9], faIcon: sizes[10], span: sizes[11] }

      }

    }
    return navigationValues;

  }

}
