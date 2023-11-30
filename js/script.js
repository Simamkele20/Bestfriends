cardContainer = document.querySelector("[data-cards")
SearchName= document.querySelector("[data-search]")
fetch("https://randomuser.me/api?results=20")
.then(data=> data.json())
.then(result=> {
    let {results} = result 
    results.forEach( people =>{
        console.log(people);
        cardContainer.innerHTML += 
        `
        <div class="card" style="width: 18rem;">
            <img src="${people.picture.large}" class="card-img-top img-fluid" alt="${people.name.first}">
            <div class="card-body">
            <h5 class="card-title">${people.name.title}. ${people.name.first} ${people.name.last}</h5>
            <p class="card-text">Age: ${people.registered.age}</p>
        </div>
        `
    })
})

SearchName.addEventListener("keyup", function(event){
    event.preventDefault();
    let searchTerm = event.target.value.toLowerCase();
    let cards = document.querySelectorAll(".card");
    cards.forEach(card =>{
        let name = card.querySelector(".card-title").textContent.toLowerCase();
        if(name.includes(searchTerm)){
            card.style.display = "block";
        }else{
            card.style.display = "none"
        }
        
    })
})

