const firstElement  = document.querySelectorAll(".panel");


firstElement.forEach((i) => {
    console.log(i);
    i.addEventListener("mouseover", ()=>{
        i.classList.add("active");
        // console.log('mouseover')
        // i.style.flex= 5;
        
    });
    
    i.addEventListener("mouseout", ()=>{
        i.classList.add("active");
        // console.log('mouseout')
        // i.style.flex= 0.5;
    });
    
});


