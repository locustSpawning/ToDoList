import Project from './Project'


console.log('🦄')
var buttonAddProject;
var addProjectPopup;
var cancelProjectButton;
var createNewProjectButton;
var allProjects;
var mainScreen;
var projectList; 

// Making buttons work

window.addEventListener('load', (event)=> {
    //projects panel variables
  buttonAddProject = document.getElementById('button-add-project');
  addProjectPopup = document.getElementById('add-project-popup');
  cancelProjectButton = document.getElementById('button-cancel-project-popup');
  createNewProjectButton = document.getElementById('button-add-project-popup');
  projectList = document.getElementById('projects-list')

    //all projects section variables
  allProjects = document.getElementById('button-all-projects');
  mainScreen = document.getElementById('project-preview');


    //event listeners
  buttonAddProject.addEventListener('click', function(){
    buttonAddProject.style.display = 'none';
    addProjectPopup.style.display = 'block';
  });

  cancelProjectButton.addEventListener('click', function(){
    buttonAddProject.style.display = 'flex';
    addProjectPopup.style.display = 'none';
  })

  createNewProjectButton.addEventListener('click', function(){
    Project.createNewProjectAction(); //still have to write
  })

  allProjects.addEventListener('click', function(){
    loadAllScreen(); // still have to write this
  })
});
