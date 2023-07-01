import { toDate, isToday, isThisWeek, subDays } from 'date-fns'
import { format } from 'date-fns'
import buttonAddProject from './index.js';


export default class Project {

  static createNewProjectAction(){
    buttonAddProject.style.display = 'flex';
    addProjectPopup.style.display = 'none';
  }
}