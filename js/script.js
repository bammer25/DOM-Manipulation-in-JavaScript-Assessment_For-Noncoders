// This function should retrieve all the project objects from projects array.
// It should then traverse over the array to create individual cards displaying each project details.
function loadProjects() {
   // Write your code here
   var projectElement = document.getElementById("projects");
   projectElement.innerHTML = "";
   for(var i=0; i<projects.length; i++){
    var individualElement = `
    <div class="card"> <img src="${projects[i]["image"]}"
    <div class="textarea"> ${projects[i]["title"]}
    <div class="text" ${projects[i]["desc"]}></div>
    `;
    projectElement.innerHTML += individualElement;
   }

}
  
 
// This function should create a new project by retrieving details from the form.
// The project is then added to the projects array and displayed.
function saveNewProject() {

  // Write your code here
  // Get the new project details by using the DOM elements
  var newTitle = document.getElementById("title").value;
  var newDescription = document.getElementById("desc").value;
  var newImage = document.getElementById("image").value;

 
 
  // Create a new project object

  console.log(newTitle);
  console.log(newDescription);
  console.log(newImage);
 


 
  // Add the new project object to the projects array 
  projects.push(saveNewProject);

 

  
  
  

  // Load the projects after adding the new project
  loadProjects();

  // Clear the values of the New Project Details Form after adding the new project
  document.getElementById("title").value = "";
  document.getElementById("desc").value = "";
  document.getElementById("image").value = "";
}
