document.getElementById('burguer-menu').addEventListener('click', toggleNav);

function toggleNav(){
    const navList = document.getElementById('navlist');
    const header = document.querySelector('header');

    if(navList.style.display === "none" || navList.style.display === ""){
        navList.style.display = "grid";
        navList.style.position = "absolute";
        navList.style.zIndex = 5;
        header.style.height = "10rem";
        navList.style.width = "100%";
        navList.style.left= 0;
        navList.style.marginTop = "1rem";
        navList.querySelectorAll('a').forEach((anchor) =>{
            anchor.style.justifyContent = "start";
            anchor.style.position = "relative";
            anchor.style.left = "2rem";
            anchor.style.textDecoration = "none";
            anchor.style.color = "black";
            anchor.style.weight = 900;
        })
        
    }else{
        navList.style.display = "none";
        header.style.height = "auto";
    }
}