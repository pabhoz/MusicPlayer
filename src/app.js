var username;

//Session handling
if (typeof(Storage) !== "undefined") {
    username =  sessionStorage.getItem("username");
} else {
    alert('Su navegador no soporta almacenamiento local. :(')
}

function setStorage(username){
    sessionStorage.setItem("username",username)
}

//UI interactions
window.onload = () => {
    document.getElementById("username").innerHTML = username;

    let newMusicplayer = new musicPlayer("Virtualscape","Concepts","assets/songs/virtualscape.mp3");
    document.body.appendChild(newMusicplayer.DOMElement);
}