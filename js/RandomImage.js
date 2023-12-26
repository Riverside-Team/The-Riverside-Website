var image = document.getElementById('image');

const imageLocations = 
[
    "img/white_logo.png",
    "img/Images_For_Random/RENDER1.png",
    "img/Images_For_Random/RENDER2.png",
    "img/Images_For_Random/RENDER3.png",
    "img/Images_For_Random/RENDER4.png",
    "img/Images_For_Random/RENDER5.png",
    "img/Images_For_Random/RENDER6.png",
    "img/Images_For_Random/RENDER7.png",
    "img/Images_For_Random/RENDERX.png"
]

function ChangeImageRandomly() 
{
    let randomFlip = Math.floor(Math.random() * imageLocations.length + 1);
    switch (randomFlip) 
    {
        case 1:
            image.src = imageLocations[0];
            break;
        case 2:
            image.src = imageLocations[1];
            break;
        case 3:
            image.src = imageLocations[2];
            break;
        case 4:
            image.src = imageLocations[3];
            break;
        case 5:
            image.src = imageLocations[4];
            break;
        case 6:
            image.src = imageLocations[5];
            break;
        case 7:
            image.src = imageLocations[6];
            break;
        case 8:
            image.src = imageLocations[7];
            break;
        case 9:
            image.src = imageLocations[8];
            break;
    }
}

function ShouldRandomImage() 
{
    switch (Math.floor(Math.random() * 6)) 
    {
        case 0:
            ChangeImageRandomly();
            break;
        case 1:
            image.src = imageLocations[0];
            break;
        case 2:
            image.src = imageLocations[0];
            break;
        case 3:
            image.src = imageLocations[0];
            break;
        case 4:
            image.src = imageLocations[0];
            break;
        case 5:
            image.src = imageLocations[0];
            break;
        case 6:
            image.src = imageLocations[0];
            break;
        default:
            image.src = imageLocations[0];
            break;
    }
}

ShouldRandomImage();
