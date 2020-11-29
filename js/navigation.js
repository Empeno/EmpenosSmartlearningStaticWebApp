addMinifiedBootstrapCss();
buildMainNavigation();


function addMinifiedBootstrapCss() {
  var head = document.getElementsByTagName('HEAD')[0];  
  var link = document.createElement('link'); 
  link.rel = 'stylesheet';  
  link.type = 'text/css'; 
  link.href = 'css/bootstrap.min.css';  
  head.appendChild(link);  
}


function buildMainNavigation() {
  var navElement = document.getElementById("mainNavigation");
  navElement.classList.add('navbar', 'navbar-expand-lg', 'navbar-light', 'bg-light');
  
  var divNavBar = document.createElement("div"); 
  divNavBar.classList.add('collapse', 'navbar-collapse');
  navElement.appendChild(divNavBar);
  
  var divNavbarNav = document.createElement('div');
  divNavbarNav.classList.add('navbar-nav');
  divNavBar.appendChild(divNavbarNav);
  
  
  var linkHome = document.createElement('a');
  linkHome.classList.add('nav-link')
  var linkText = document.createTextNode("Home");
  linkHome.appendChild(linkText);
  linkHome.title = "Home";
  linkHome.href = "/";
  divNavbarNav.appendChild(linkHome);
  
  var linkStatic = document.createElement('a');
  linkStatic.classList.add('nav-link')
  var linkText2 = document.createTextNode("Static Web Apps");
  linkStatic.appendChild(linkText2);
  linkStatic.title = "Static";
  linkStatic.href = "what-is-azure-static-web-apps";
  divNavbarNav.appendChild(linkStatic);
}

