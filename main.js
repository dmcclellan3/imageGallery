const displayedImage = document.querySelector('.displayed-img');
const thumbBar = document.querySelector('.thumb-bar');

const btn = document.querySelector('button');
const overlay = document.querySelector('.overlay');

/* Declaring the array of image filenames */

const imgArray = ["pic1.jpg", "pic2.jpg", "pic3.jpg", "pic4.jpg", "pic5.jpg"];

/* Declaring the alternative text for each image file */

const imgAltText = new Object()
imgAltText['pic1.jpg'] = 'main image - eye',
imgAltText['pic2.jpg'] = 'stone',
imgAltText['pic3.jpg'] = 'flowers',
imgAltText['pic4.jpg'] = 'hieroglyphics'
imgAltText['pic5.jpg'] = 'moth'

console.log('imgAltText: ', imgAltText)


/* Looping through images */
function arrayLoop()  {
    
    for (i = 0; i < imgArray.length; i++) {
        console.log('image: ', imgArray[i])
        const newImage = document.createElement('img');
          
        newImage.setAttribute('src', `./imageGallery.img/${imgArray[i]}`);
        newImage.setAttribute('alt', imgAltText[ imgArray[i] ]);

        // event listener to handle click
        newImage.addEventListener('click', e => {
            displayedImage.src = e.target.src;
            displayedImage.alt = e.target.alt;
        });

    
        thumbBar.appendChild(newImage);
    }
        
}

arrayLoop()

/* Wiring up the Darken/Lighten button */

        btn.setAttribute("class", xxx);
        btn.textContent = xxx 
        overlay.style.backgroundColor = xxx;
