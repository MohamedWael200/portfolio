/////////////// local Storage /////////
// check if there is local storage color option
let mainColor = localStorage.getItem("color_option");

if(mainColor !== null){
    document.documentElement.style.setProperty('--main-color',mainColor);

    // remove class active from all color list item
    document.querySelectorAll(".colors-list li").forEach(element =>{
        element.classList.remove("active");

    // add active
    if(element.dataset.color=== mainColor){
        element.classList.add("active");
    }
    });
    
}

// random background option
let backgroundoption = true;
// control interval
let backgroundIntraval;

let backgroundLocalItam = localStorage.getItem("backgroun_opction");
// cheack if raandom background local storage is not empty
if(backgroundLocalItam !== null){
    
    if(backgroundLocalItam === 'true'){
        backgroundoption = true;
    }else{
        backgroundoption =false;
    }
    // remove active class
    document.querySelectorAll(".random-background span").forEach(element =>{

        element.classList.remove("active");
    });

    if(backgroundLocalItam === 'true'){
        document.querySelector(".random-background .yes").classList.add("active");
    }
    else{
        document.querySelector(".random-background .no").classList.add("active");
    }
}
//////////////// Setting Box ///////////
// toggle spin class on icon
document.querySelector(".toggle-setting .fa-gear").onclick = function(){

    // toggle class fa-spin for rotation
    this.classList.toggle("fa-spin");
    // toggle class open on element
    document.querySelector(".setting-box").classList.toggle("open");

}

// Switch Color
const colorLi = document.querySelectorAll(".colors-list li")
colorLi.forEach(li =>{

    // Loop in Li
    li.addEventListener("click",(e) =>{
        // set color on Root
        document.documentElement.style.setProperty('--main-color',e.target.dataset.color);

        // set color on Local Storage
        localStorage.setItem("color_option",e.target.dataset.color);

        // remove class active from all child
        e.target.parentElement.querySelectorAll(".active").forEach(element =>{
            element.classList.remove("active");
        });
        // Add active class to target
        e.target.classList.add("active");
    });
});


// Switch random background opction
const randomBackEl = document.querySelectorAll(".random-background span")
randomBackEl.forEach(span =>{

    // Loop in all span
    span.addEventListener("click",(e) =>{


        // remove class active from all span
        e.target.parentElement.querySelectorAll(".active").forEach(element =>{
            element.classList.remove("active");
        });
        // Add active class to target
        e.target.classList.add("active");
        
        if(e.target.dataset.background === 'yes'){

            backgroundoption = true;
            randomizeimage();

            localStorage.setItem("backgroun_opction",true);
        }
        else{
            backgroundoption = false;
            clearInterval(backgroundIntraval);
            localStorage.setItem("backgroun_opction",false);
        }
    });
});
//////////////////LANDING///////////
// Select landing page element
let landingpage = document.querySelector(".landing-page");
// get arrey of image
let imagesArrey = ['pexels-carlos-oliva-3586966.jpg','01.jpg','02.jpg','03.jpg','04.jpg'];


// function radom
function randomizeimage(){
    if(backgroundoption === true){

            backgroundIntraval=setInterval(() =>{
            // get random num
            let randomNum = Math.floor(Math.random() * imagesArrey.length);
            // change backGroung url image
            landingpage.style.backgroundImage='url("image/'+ imagesArrey[randomNum] +'")';
            
            },5000);
    }
}
randomizeimage();


/////////////////// Skills/////////////////////////
// select skills slelector
let ourSkills = document.querySelector(".skills");

window.onscroll = function(){
    // skill offset top
    let skikkOffsetTop = ourSkills.offsetTop;

    // Outer height
    let skillsOuterHeight = ourSkills.offsetHeight;

    // window height
    let windowHeight =this.innerHeight;

    // window scroll top
    let windowScrollTop = this.pageYOffset;
    
    if(windowScrollTop > (skikkOffsetTop + skillsOuterHeight - windowHeight )){
        
        let allSkills = document.querySelectorAll(".skill-box .skill-progres span");

        allSkills.forEach( skill => {
            skill.style.width = skill.dataset.progres;
        });
    }
};