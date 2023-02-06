var root = document.querySelector("#root");
var navList = ["alphabet", "/pages/flex_panel", "clock"];
var navbar = document.createElement("div");
var homeNav = document.createElement("a");
homeNav.textContent = "Home";
homeNav.href = "/dist";
homeNav.style.textDecoration = "none";
homeNav.style.marginLeft = "50px";
homeNav.style.color = "white";
navbar.append(homeNav);
var navs = document.createElement("div");
navList.map(function (navLink) {
    var nav = document.createElement("a");
    nav.href = "/dist/".concat(navLink, ".html");
    nav.textContent = navLink.lastIndexOf("/") ? navLink.slice(navLink.lastIndexOf("/")) : navLink;
    nav.style.textDecoration = "none";
    nav.style.margin = "0 10px";
    nav.style.color = "white";
    navs.append(nav);
});
navs.style.padding = "0 50px";
navbar.append(navs);
navbar.classList.add("navbar");
root.append(navbar);
//# sourceMappingURL=index.js.map