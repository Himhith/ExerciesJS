// EXAMPLE 3 Hover

function createTooltips(){
    var elementsWithTooltip = document.getElementsByTagName('img');
    
    var toolTipContainter = document.createElement('div');
    document.body.appendChild(toolTipContainter);
    toolTipContainter.id = "tooltipContainer"
    for(var i = 0; i < elementsWithTooltip.length; i++){
        elementsWithTooltip[i].addEventListener('mouseover',function(e){
            toolTipContainter.style.display="block";
           toolTipContainter.innerHTML = this.alt;
           toolTipContainter.style.left = e.clientX + document.documentElement.scrollLeft +'px';
           toolTipContainter.style.top = e.clientY + document.documentElement.scrollTop+'px';
            });
        elementsWithTooltip[i].addEventListener('mouseout',function(e){
            toolTipContainter.style.display= "none";
                });
    }
}
window.onload = function(){
    createTooltips();
    var mainImage = document.getElementById("mainImage");
    var image = new Image();
    mainImage.appendChild(image);   
    var thumbnails = document.getElementsByClassName("thumbnail");
    var currentThumbnail = thumbnails[0];
    image.src= currentThumbnail.getAttribute("src");
    for( var i = 0; i < thumbnails.length; i++){
        thumbnails[i].addEventListener("mouseover",function()
        {
            image.src = this.getAttribute("src");
        });
    }
};
