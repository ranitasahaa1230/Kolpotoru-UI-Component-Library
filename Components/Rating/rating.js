const ratingStars = document.querySelectorAll(".example-rating-form .rating-star-input");
const ratingStarsForm = document.querySelector(".example-rating-form");
const ratingExampleShowRating = document.querySelector(".rating-example-number-show");

ratingStars.forEach((star,id)=>{
    star.addEventListener("change", ()=>checkAllTheBelowStars(id));
})

function checkAllTheBelowStars (idx) {    
    if(ratingStars[idx].checked){
        for(let j=idx-1; j>=0; j--){
            ratingStars[j].checked = true;
        }
    }else{
        for(let j=idx+1; j<ratingStars.length ; j++){
            ratingStars[j].checked = false;
        }
    }
}

ratingStarsForm.addEventListener("submit", (e)=>{
    e.preventDefault();
    let sum = 0;
    ratingStars.forEach((star)=>{  if(star.checked) sum += 1 })
    ratingExampleShowRating.innerText=`You have submitted ${sum} rating`;
})