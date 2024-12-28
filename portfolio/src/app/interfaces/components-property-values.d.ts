import { NavigationPropertyValues } from './navigation-property-values';
import { HomePropertyValues } from './home-property-values';
import { AboutMePropertyValues } from './about-me-property-values';
import { MySkillsPropertyValues } from './my-skills-property-values'
import { MyProjectsPropertyValues } from './my-projects-property-values';

export declare interface ComponentPropertyValues {
  navigationPropertyValues: NavigationPropertyValues | {},
  homePropertyValues: HomePropertyValues | {},
  aboutMePropertyValues: AboutMePropertyValues | {},
  mySkillsPropertyValues: MySkillsPropertyValues | {},
  myProjectsPropertyValues: MyProjectsPropertyValues | {}

}
