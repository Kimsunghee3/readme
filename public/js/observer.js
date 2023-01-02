const observer_opacity = document.querySelectorAll('.observer_opacity')

let observer = new IntersectionObserver((e)=>{
    e.forEach((box) => {
        if(box.isIntersecting){
            box.target.classList.remove("observer_opacity")
            box.target.classList.add("observer_opacity__1")
        } else {
            box.target.classList.remove("observer_opacity__1")
            box.target.classList.add("observer_opacity")
        }
    })
})

for(let i = 0; i < observer_opacity.length; i++){
    observer.observe(observer_opacity[i])
}


// ===========================================================================


const observer_opacity_2 = document.querySelectorAll('.observer_opacity_2')

let observer_2 = new IntersectionObserver((e)=>{
    e.forEach((box) => {
        if(box.isIntersecting){
            box.target.style.opacity = 1;
            box.target.style.bottom = 0;
        } else {
            box.target.style.opacity = 0;
            box.target.style.bottom = "-3rem";
        }
    })
})

for(let i = 0; i < observer_opacity_2.length; i++){
    observer_2.observe(observer_opacity_2[i])
}


// ===========================================================================


const project = document.querySelectorAll('.project_board')

let observer_proj = new IntersectionObserver((e)=>{
    e.forEach((box) => {
        if(box.isIntersecting){
            box.target.style.opacity = 1;
            box.target.style.bottom = 0;
        } else {
            box.target.style.opacity = 0;
            box.target.style.bottom = "-3rem";
        }
    })
})

for(let i = 0; i < project.length; i++){
    observer_proj.observe(project[i])
}