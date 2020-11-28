{/* <nav class="navbar navbar-expand-lg navbar-light bg-light">
  <a class="navbar-brand" href="#">Navbar</a>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>
  <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
    <div class="navbar-nav">
      <a class="nav-link active" href="#">Home <span class="sr-only">(current)</span></a>
      <a class="nav-link" href="#">Features</a>
      <a class="nav-link" href="#">Pricing</a>
      <a class="nav-link disabled" href="#" tabindex="-1" aria-disabled="true">Disabled</a>
    </div>
  </div>
</nav> */}


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