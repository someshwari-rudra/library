const submit_btn = document.getElementById("submit_btn")
const rating_btns= document.querySelectorAll(".rating-btn")
const box_container1= document.querySelector(".box-container1") 
const box_container2= document.querySelector(".box-container2") 

const score = document.querySelector(".score")
let stars_score=0;

rating_btns.forEach( btn =>{
    btn.addEventListener("click", handleRatingBtnClick);
});

function handleRatingBtnClick(event){
    console.log("rating_btn clicked")
    rating_btns.forEach(btn =>{
        btn.classList.add('active')
    });

    if(event.target.classList.contains('rating-btn')){
        event.target.classList.add('active')
    }else{
        event.target.parentElement.classList.add('active')
    }
     stars_score = event.target.textContent;
}

submit_btn.addEventListener("click", function handleOnSubmit(){
    box_container1.classList.add("hide")
    box_container2.classList.remove("hide")
    console.log("clicked")
});

