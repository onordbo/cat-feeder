//Declare variables
var docTitle = document.title;
var altDocTitle = "Do you even cat?";


//Modification functions
window.onblur = function () {
  document.title = altDocTitle;
};

window.onfocus = function () {
  document.title = docTitle;
};
