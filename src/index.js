console.log('%c HI', 'color: firebrick')

document.addEventListener('DOMContentLoaded', pageFunctionality)

function pageFunctionality(){

    // challenge 1: Get images of dogs
    function getDogImages(){
        const imgUrl = "https://dog.ceo/api/breeds/image/random/4"
        return fetch(imgUrl)
        .then(res => res.json())
        .then(data => {
            for (let image of data["message"]){
                let img = document.createElement('img')
                img.src = image
                document.querySelector('div#dog-image-container').appendChild(img)
            }
        })
    }
    getDogImages()

    // challenge 2: Get a list of dog breeds
    function getDogBreeds(){
        const breedUrl = 'https://dog.ceo/api/breeds/list/all'
        return fetch(breedUrl)
        .then(res => res.json())
        .then(data => {
            for (let breed in data["message"]){
                let li = document.createElement('li')
                li.textContent = breed

                // add event listener to change color on click
                li.addEventListener('click', (e) => {
                    e.target.style.color = 'blue'
                })

                // append to DOM
                document.querySelector('ul#dog-breeds').appendChild(li)
            }
        })
        }
    getDogBreeds()

    // challenge 3: List item changes colour when clicked
    // Best to add event listener when creating the li elements; 
    // Implemented in challenge 2 above


    // challenge 4: Filter list of dog breeds based on first letter
    // Reference: https://www.w3schools.com/howto/howto_js_filter_lists.asp
    function filterBreeds(){
        let displayLetter = document.querySelector('select#breed-dropdown')
        displayLetter.addEventListener('change', () => {
            let filter = displayLetter.value

            let listOfBreeds = document.getElementById('dog-breeds')
            let allBreeds = document.getElementsByTagName('li')

            for (let i = 0; i < allBreeds.length; i++) {
                if (allBreeds[i].textContent[0].indexOf(filter) > -1){
                    allBreeds[i].style.display = ""
                } else {
                    allBreeds[i].style.display = "none"
                }
            }
            })
    }
    filterBreeds()
    
    }
   