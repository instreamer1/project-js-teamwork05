<<<<<<< Updated upstream
=======
import axios from 'axios'
import iziToast from 'izitoast';


const BASE_URL = "https://portfolio-js.b.goit.study/api";
const END_POINT = "/reviews";

const url = `${BASE_URL}${END_POINT}`;

let currentId = 1;



const selectors = {
    container: document.querySelector(".reviews-list"),
    btnPrev: document.querySelector(".swiper-button-prev"),
    btnNext: document.querySelector(".swiper-button-next")

}


getReviews(currentId)
.then ((data) => {
  
console.log(data)
  selectors.container.insertAdjacentHTML("beforeend",createMarkup(data)) 
})
.catch ((error) => {console.log(error);
iziToast.error({
    title: 'Error',
    message: 'Not found',
});
})

async function getReviews (id) {
    const { data } = await axios.get (url, {params: { id }})
    return data;
    
}

function createMarkup (arr) {
    return arr.map (({ _id, author, avatar_url, review }) => `
    
    <li class="reviews-item swiper-slide" data="${_id}">
    <img class="reviews-img" src="${avatar_url}" alt="${author}"
    
    <p class="reviews-text">${review}</p>
    <h2 class="reviews-subtitle">${author}</h2>

    </li>
    
    `).join ("")
}
>>>>>>> Stashed changes
