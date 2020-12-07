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
  
  
  
  buildNavItem("home", divNavbarNav);
  buildNavItem("whatisazurestaticwebapps", divNavbarNav);
  buildNavItem("queues", divNavbarNav);

}


function buildNavItem(navItemName, divNavbarNav){
  var linkHome = document.createElement('a');
  linkHome.classList.add('nav-link')
  
  var capitalizedNavItemName = navItemName.substring(0,1).toUpperCase() + navItemName.substring(1);
  var linkText = document.createTextNode(capitalizedNavItemName);

  linkHome.appendChild(linkText);
  linkHome.title = navItemName;
  if (navItemName === "home") {
    linkHome.href = "/";
  }
  else if (location.hostname === "localhost" || location.hostname === "127.0.0.1") {
    linkHome.href = navItemName + ".html";
  }
  else {
    linkHome.href = navItemName;
  }
  divNavbarNav.appendChild(linkHome);
}

