const submitBtn = document.getElementById("Submit")
const BookName = document.getElementById("BookName")
const Author = document.getElementById("Author")
const detailsList = document.getElementById("detailslist")
const alert = document.querySelector(".alert")

submitBtn.addEventListener("click", (e)=>{
   e.preventDefault();
   addDetails();
})

function addDetails(){ 
    if(BookName.value == ""){
        alert("enter book name")
    }
    else if(Author.value ==""){
        alert("enter author name")
    }
    else{
      let entredDetails = localStorage.getItem("details")
      if(entredDetails == null){
        detailsObj =[]
      }else{
        detailsObj = JSON.parse(entredDetails)
      }


      let myObj ={
        book:BookName.value,
        auth:Author.value,
      }

      detailsObj.push(myObj)
      localStorage.setItem("details", JSON.stringify(detailsObj))
      BookName.value =""
      Author.value =""

      

      ShowBookDetails()
      }
    }

  

    function ShowBookDetails(){
         let entredDetails = localStorage.getItem("details")
            if(entredDetails == null){
                detailsObj =[]
            }else{
                detailsObj = JSON.parse(entredDetails)
            }
        let html ="";
        detailsObj.forEach(function (element,index){
            html+=`<tr>
                    <td>${element.index + 1}</td>
                    <td>${element.book}</td>
                    <td>${element.auth}</td>
                    <td><button class="btn-danger" onclick="Delete(this.id)" id="${index}">Delete</button></td>
                </tr>`
        });

        if(detailsObj.length != 0){
            detailsList.innerHTML = html
        }
        
    }

    function Delete(index){
        let entredDetails = localStorage.getItem("details")
            if(entredDetails == null){
                detailsObj =[]
            }else{
                detailsObj = JSON.parse(entredDetails)
            }
        detailsObj.splice(index, 1);
        localStorage.setItem("details", JSON.stringify(detailsObj));
       ShowBookDetails()
    }
