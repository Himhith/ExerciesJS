// EXAMPLE 1 SLIDE SHOW


window.onload = function(){
    var slideShow = document.getElementById("slideShow");

    var imageSrc = ["a.jpg","b.jpg","c.jpg","d.jpg"];

    for (var i=0; i<imageSrc.length; i++){
        var image = new Image();
        image.src = "images/" + imageSrc[i];
        slideShow.appendChild(image);

    }

    var i = 0; 
    setInterval(function(){
        if (i < slideShow.childNodes.length){
            slideShow.childNodes[i].setAttribute('class',
            'current');
            if (i != 0)slideShow.childNodes[i-1].setAttribute('class',
            '');
            i++;
        }    
        else{
            slideShow.childNodes[0].setAttribute('class',
            'current');
            slideShow.childNodes[i-1].setAttribute('class',
            '');
            i=1;
        }
    },3000);

};

