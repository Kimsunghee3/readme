const hamburger_btn = document.querySelector(".hamburger_btn")
const menus = document.querySelector(".header_navigation_menus_folded")
const menu = document.querySelectorAll(".header_navigation_menu_fold")


hamburger_btn.addEventListener("click", () => {
    if(menus.style.maxHeight !== "17.75rem"){
        menus.style.maxHeight = "17.75rem";
    } else {
        menus.style.maxHeight = "0rem"
    }
})


menu[0].addEventListener("click", () => {
    if(menus.style.maxHeight !== "17.75rem"){
        menus.style.maxHeight = "17.75rem";
    } else {
        menus.style.maxHeight = "0rem"
    }
})

menu[1].addEventListener("click", () => {
    if(menus.style.maxHeight !== "17.75rem"){
        menus.style.maxHeight = "17.75rem";
    } else {
        menus.style.maxHeight = "0rem"
    }
})

menu[2].addEventListener("click", () => {
    if(menus.style.maxHeight !== "17.75rem"){
        menus.style.maxHeight = "17.75rem";
    } else {
        menus.style.maxHeight = "0rem"
    }
})

menu[3].addEventListener("click", () => {
    if(menus.style.maxHeight !== "17.75rem"){
        menus.style.maxHeight = "17.75rem";
    } else {
        menus.style.maxHeight = "0rem"
    }
})



const header = document.querySelector(".header")
const header_title = document.querySelector(".header_title")

window.addEventListener("scroll", ()=>{
    if(window.scrollY <= 800){
        header.classList.remove("header_background_color")
    } else {
        header.classList.add("header_background_color")
    }
})