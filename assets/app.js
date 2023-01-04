let ul = document.querySelector("ul");
ul.addEventListener("click", e => {
    console.dir(e.target);
    
    var elem = e.target;
    var li = e.target;
    if(elem.tagName == "P")
        return 0;
    while(li.tagName != "LI"){
        li = li.parentNode;
    }
    console.log("LI found!");
    console.dir(li);
    li.classList.toggle("active");
    let index = Array.prototype.indexOf.call(ul.children,li)
    for(let i = 0; i < ul.children.length; i++){
        if(i != index)
            ul.children[i].classList.remove("active");
    }
})