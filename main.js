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


// imgAltText = {
//     'pic1.jpg': 'alt text goes here',
//     'pic2.jpg': 'something',
// }


/* Looping through images */
function arrayLoop()  {
    
    for (i = 0; i <= imgArray.length; i++) {
        console.log('image: ', imgArray[i])
        const newImage = document.createElement('img');
        // <img />
           newImage.setAttribute('src', './imageGallery/img.png');
          <img src={'./pic2.jpg/img.png'} />
           newImage.setAttribute('alt', 'main image - eye');
        // <img src={'./filepathToSomething/img.png'} alt='alt text describing pic' />
        thumbBar.appendChild(newImage);
        // <div class='thumbBar'>
            // <img src={'./filepathToSomething/img.png'} alt='alt text describing pic' />
        // </div>
    }

}



/* Wiring up the Darken/Lighten button */
