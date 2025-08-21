const bodyEl=document.querySelector("body");
let colors=["#FF007F", "#00FFFF","#39FF14","#FF1DCE", "#FFFF33", "#FF3131", "#9400D3", "#30D5C8","#FF6700", "#7DF9FF","#8000FF","#FC0FC0", "#CCFF00","#6F00FF","#00FF9F"];
let colorIndex=0;
updateColors();

function updateColors(){
    bodyEl.style.backgroundColor=colors[colorIndex];
    colorIndex++;
    if(colorIndex===colors.length){
        colorIndex=0;
    }
    setTimeout(updateColors,200);
}