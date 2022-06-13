const submitBtn = document.getElementById("Submit")
const BookName = document.getElementById("BookName")
const Author = document.getElementById("Author")
const detailsList = document.getElementById("detailslist")

submitBtn.addEventListener("click", (e)=>{
   e.preventDefault();
   addDetails();
})

function addDetails(){ 
    if(BookName.value == ""){
        alert("enter book name")
    }else if(Author.value ==""){
        alert("enter author name")
    }else{
    const TableRow = document.createElement('tr')    
    
    const addDetails= document.createElement('td')
    addDetails.innerText = BookName.value
    TableRow.appendChild(addDetails)

    const authorDetail = document.createElement('td')
    authorDetail.innerText = Author.value
    TableRow.appendChild(authorDetail)

    const deleteButton = document.createElement('button')
    deleteButton.innerText ="delete"
    deleteButton.classList.add("btn-danger" ,"px-4" ,"m-2" ,"rounded-3", "border-none")
   

    TableRow.appendChild(deleteButton)

    detailsList.appendChild(TableRow)
    BookName.value.innerText= ""
    Author.value.innerText =""

}
}
