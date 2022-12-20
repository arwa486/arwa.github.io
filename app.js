const iconButton = () => {
    let navbar = document.getElementById("topnav");
    if (navbar.className === "nav"){
        navbar.className += "responsive";
    } else {
        navbar.className = "nav";
    }
}