function mobilemenu(){
    if(document.getElementById("mobile-menu").style.display == "block"){
        document.getElementById("mobile-menu").style.display = "none";
    }else{
        document.getElementById("mobile-menu").style.display = "block";
    }
}
document.getElementById("mobile-menu-icon").addEventListener("click" , mobilemenu);