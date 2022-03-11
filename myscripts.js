
let resolution = Number(window.prompt('Enter resolution desired!', 'lowest: 1 ---> highest: 100'));
createGrid(resolution);

//creates grid of divs
function createGrid(resolution){
    for(let i = 1; i <= resolution; i++){
        const div = document.createElement("div");
        div.classList.add('row' + i + '-1');
        div.style.width = (500/resolution) + 'px';
        div.style.height = (500/resolution) + 'px';
        document.getElementById("container").appendChild(div);
        document.querySelector(`div.row${i}-1`).addEventListener(
            "mouseover", function () {
                document.querySelector(`div.row${i}-1`).style.background = "#000000";
            }
        )
        
        for(let j = 1; j < resolution; j++){
            const div = document.createElement("div");
            div.style.width = (500/resolution) + 'px';
            div.style.height = (500/resolution) + 'px';
            div.classList.add('row' + i + '-' + (j+1));
            document.getElementById("container").appendChild(div);
            document.querySelector(`div.row${i}-${j+1}`).addEventListener(
                "mouseover", function () {
                    document.querySelector(`div.row${i}-${j+1}`).style.background = "#000000";
                }
            )
        }
    }
}

const btn = document.querySelector('#btn');
btn.onclick = () => {
    var el = document.getElementById('container');

    while ( el.firstChild ) el.removeChild( el.firstChild );
    resolution = Number(window.prompt('Enter resolution desired!', 'lowest: 1 ---> highest: 100'));
    createGrid(resolution);
   
};




/**************************************************************************************************/
/*const btn = document.querySelector('#btn');
btn.onclick = () => {
    //let resolution = Number(window.prompt('Enter resolution desired!', 'lowest: 1 ---> highest: 100'));
    for(let i = 1; i <= resolution; i++){
        for(let j = 1; j <= resolution; j++){
            document.querySelector(`div.row${i}-${j}`).style.background = "#FFFFFF";
           
        }
    } 
    //createGrid(resolution);

   
};
*/
