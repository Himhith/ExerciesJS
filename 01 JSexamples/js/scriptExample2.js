// EXAMPLE 2 
// Cleaned up and styled with bootstrap


window.onload = function(){
    
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
