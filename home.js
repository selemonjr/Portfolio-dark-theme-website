var icon = document.getElementById("icon"); {
    icon.onclick = function() {
        document.body.classList.toggle("dark-theme");
        if(document.toggle.classList.contains("dark-theme")) {
            icon.src = "./images-icon/dark theme icon/sun.png";
        } else {
            icon.src =  "./images-icon/dark theme icon/moon.png";
        }
    }
}