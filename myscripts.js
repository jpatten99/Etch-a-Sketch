
//creates grid of divs
for(let i = 1; i < 10; i++){
    const div = document.createElement("div");
    div.classList.add('row' + i + '-0');
    div.style.width = "10px";
    div.style.height = "10px";
    document.getElementById("container").appendChild(div);
    document.querySelector(`div.row${i}-0`).addEventListener(
        "mouseover", function () {
    document.querySelector(`div.row${i}-0`).style.background = "#000000";
})
    
    for(let j = 1; j < 10; j++){
        const div = document.createElement("div");
        div.style.width = "10px";
        div.style.height = "10px";
        div.classList.add('row' + i + '-' + j);
        document.getElementById("container").appendChild(div);
        document.querySelector(`div.row${i}-${j}`).addEventListener(
            "mouseover", function () {
        document.querySelector(`div.row${i}-${j}`).style.background = "#000000";
    })
    }
}




/*for(let i = 1; i < 10; i++){
    document.querySelector(`div.row${i}`).addEventListener(
        "mouseover", function () {
    document.querySelector(`div.row${i}`).style.background = "#000000";
})
    for(let j = 1; j < 10; j++){
        document.querySelector(`div.column${j}`).addEventListener(
            "mouseover", function () {
        document.querySelector(`div.column${j}`).style.background = "#000000";
    })
    }
}


  
     
*/


