const imageLocations = ["img/Images_For_Random/black_logo.png"]

function ChangeImageRandomly() 
{
    let randomFlip = Math.floor(Math.random() * 2);
    var image = document.getElementById('image');
    switch (randomFlip) 
    {
        case 0:
            image.src = "img/black_logo.png";
            break;
        case 1:
            image.src = "img/white_logo.png";
            break;
    }
}

ChangeImageRandomly();