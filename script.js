const addNewCardBtn = document.querySelector("#add-card-btn")
const cardsContainer = document.querySelector("#cards-container")

const api = "https://randomuser.me/api/"

addNewCardBtn.addEventListener("click", function(){
    fetchData(api)
}) 

async function fetchData(url){
    const res = await fetch(url)
    const data = await res.json()

    generateNewCard(data.results[0]);
}

function generateNewCard(data){
    const card = document.createElement("div")
    card.innerHTML = `
        <div class="bg-zinc-800 p-4 w-[16rem] rounded-xl">
            <div class="w-20 h-20 rounded-md mb-4 bg-zinc-600 overflow-hidden"> 
                <img src=${data.picture.large} class="w-full h-full object-cover" />
            </div>
            <h2 class="text-2xl text-white font-semibold">${data.name.first}</h2>
            <p class="text-zinc-500 font-semibold">${data.gender}</p>
            <p class="text-zinc-500">${data.email}</p>
            <p class="mt-4 text-sm text-white w-[15rem]">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Laudantium, sunt.</p>
        </div>
    `

    cardsContainer.appendChild(card)
}