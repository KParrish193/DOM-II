// Your code goes here


//10 Unique Event Listeners
//1 mouseenter
    const bigDest = document.querySelectorAll('.destination');

    bigDest.forEach(big => {                big.addEventListener("mouseenter",() => {
        big.style.transform = "scale(2.0)";
        big.style.border = "thin solid #000000";
        big.style.backgroundColor = "white";
        });
    });

//2 mouseleave
    bigDest.forEach(small => {
        small.addEventListener("mouseleave",() => {
        small.style.transform = "scale(1)";
        small.style.borderStyle = "none";
        });
    });

//3 mousemove
    const colorDest = document.querySelector('.content-destination');

    colorDest.addEventListener("mousemove",() => {
        colorDest.style.backgroundColor = "lightgrey";
    });

//4 auxclick
    const colorBack = document.querySelector('.content-destination');

    colorBack.addEventListener("auxclick",() => {
        colorBack.style.backgroundColor = "#FFFFFF";
    });

//5 click
    const contentKey = document.querySelectorAll('.text-content');
        contentKey.forEach(cKey => {
        cKey.addEventListener("click",() => { 
        cKey.style.backgroundColor = "#000000";
        cKey.style.color = "#FFFFFF";
        });
    });

//6 click (propagation)
    const yellow = document.querySelectorAll('.content-section h2');
        yellow.forEach(yellowH => {
        yellowH.addEventListener("click",(event) => {
        yellowH.style.color = "#FDB94B"
        event.stopPropagation()
        });
    });

//7 dblclick
    const notYellow = document.querySelectorAll('.content-section h2');
        notYellow.forEach(cotta => {
        cotta.addEventListener("dblclick",() => {
        cotta.style.color = "#C9897D"
        });
    });

//8 keypress
    const allCaps = document.querySelectorAll('body');  

    allCaps.forEach(txtCaps => { 
        txtCaps.addEventListener("keypress",() => {
        txtCaps.style.textTransform = "uppercase";
        });
    });

//9 keyup
    const backLow = document.querySelectorAll('body');
    
    backLow.forEach(txtLow => { 
        txtLow.addEventListener("keyup",(event) => {
        txtLow.style.textTransform = "lowercase";
        event.stopPropagation()
        });
    });

//10 copy
    const copy = document.querySelector(".footer p");

    copy.addEventListener("copy",() => {
        copy.style.color = "#C9897D";
    });




// preventDefault
    const stopNav = document.querySelector(".nav");

    stopNav.addEventListener("click", (event) => {
    event.preventDefault();
});