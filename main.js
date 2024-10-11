const loadDog = async() => {
    document.getElementById('spinner').style.display = "none";
    

    const response = await fetch(`https://openapi.programming-hero.com/api/peddy/category/dog`);
    const data = await response.json()
    displayDog(data.data);
}



const displayDog = (dog) => {
    // console.log(dog);



    const dogDiv = document.getElementById('dog');

    dogDiv.classList.remove('hidden')


    dog.forEach(pets => {
        console.log(pets);
        const div = document.createElement('div');
        div.innerHTML=`
    <div class="card bg-base-100 w-96 shadow-xl pb-5" id="border1">
        <figure class="px-10 pt-10">
            <img
            src=${pets.image}
            alt="Shoes"
            class="rounded-xl" />
        </figure>

       <div class="p-10">
            <ul class="list-none">
                <li class="flex text-xl items-center gap-2"> <img src="https://img.icons8.com/?size=100&id=46218&format=png&color=000000" alt="" class="w-5 h-5"> Breed : ${pets.breed || "Not Available"}</li>
                <li class="flex text-xl items-center gap-2"> <img src="https://img.icons8.com/?size=100&id=84997&format=png&color=000000" alt="" class="w-5 h-5"> Birth :                     ${pets.date_of_birth || "Not Available"}</li>
                <li class="flex text-xl items-center gap-2"> <img src="https://img.icons8.com/?size=100&id=ykRtEUckI8mK&format=png&color=000000" alt="" class="w-5 h-5"> Gender :             ${pets.gender || "Not Available"} </li>
                <li class="flex text-xl items-center gap-2"> <img src="https://img.icons8.com/?size=100&id=85782&format=png&color=000000" alt="" class="w-5 h-5"> Price : ${pets.price || "Not Available"} </li>
            </ul>
       </div>

       <div class="flex items-center justify-evenly border py-5">

            <button class="btn px-5" onclick="like1()"><img src="https://img.icons8.com/?size=100&id=24816&format=png&color=000000" alt="" class="w-10 h-10"></button>

            <button class="btn text-[#0E7A81] text-xl">Adopt</button>

            <button class="btn text-[#0E7A81] text-xl">Details</button>

       </div>

        </div>
        `
        dogDiv.appendChild(div);

    });
}



const handleDog = () => {

    const allDiv = document.getElementById('pet-con');
    allDiv.classList.add('hidden')

    const dogDiv = document.getElementById('dog');
    dogDiv.classList.add('hidden')

    const catDiv = document.getElementById('cat');
    catDiv.classList.add('hidden')

    const rabbitDiv = document.getElementById('rabbit');
    rabbitDiv.classList.add('hidden')

    const birdDiv = document.getElementById('bird');
    birdDiv.classList.add('hidden')




    document.getElementById('spinner').style.display = "block";

    setTimeout(function () {
        loadDog();
    },2000)
}


// ......................................Dog btn ends up here......................................












//................................................... cat test is here...................................................







const loadCat = async() => {
    document.getElementById('spinner').style.display = "none";
    

    const response = await fetch(`https://openapi.programming-hero.com/api/peddy/category/cat`);
    const data = await response.json()
    displaycat(data.data);
}



const displaycat = (cat) => {
    // console.log(cat);



    const catDiv = document.getElementById('cat');

    catDiv.classList.remove('hidden')


    cat.forEach(pets => {
        console.log(pets);
        const div = document.createElement('div');
        div.innerHTML=`
    <div class="card bg-base-100 w-96 shadow-xl pb-5" id="border1">
        <figure class="px-10 pt-10">
            <img
            src=${pets.image}
            alt="Shoes"
            class="rounded-xl" />
        </figure>

       <div class="p-10">
            <ul class="list-none">
                <li class="flex text-xl items-center gap-2"> <img src="https://img.icons8.com/?size=100&id=46218&format=png&color=000000" alt="" class="w-5 h-5"> Breed : ${pets.breed || "Not Available"}</li>
                <li class="flex text-xl items-center gap-2"> <img src="https://img.icons8.com/?size=100&id=84997&format=png&color=000000" alt="" class="w-5 h-5"> Birth :                     ${pets.date_of_birth || "Not Available"}</li>
                <li class="flex text-xl items-center gap-2"> <img src="https://img.icons8.com/?size=100&id=ykRtEUckI8mK&format=png&color=000000" alt="" class="w-5 h-5"> Gender :             ${pets.gender || "Not Available"} </li>
                <li class="flex text-xl items-center gap-2"> <img src="https://img.icons8.com/?size=100&id=85782&format=png&color=000000" alt="" class="w-5 h-5"> Price : ${pets.price || "Not Available"} </li>
            </ul>
       </div>

       <div class="flex items-center justify-evenly border py-5">

            <button class="btn px-5" onclick="like1()"><img src="https://img.icons8.com/?size=100&id=24816&format=png&color=000000" alt="" class="w-10 h-10"></button>

            <button class="btn text-[#0E7A81] text-xl">Adopt</button>

            <button class="btn text-[#0E7A81] text-xl">Details</button>

       </div>

        </div>
        `
        catDiv.appendChild(div);

    });
}



const handleCat = () => {

    const allDiv = document.getElementById('pet-con');
    allDiv.classList.add('hidden')

    const dogDiv = document.getElementById('dog');
    dogDiv.classList.add('hidden')

    const catDiv = document.getElementById('cat');
    catDiv.classList.add('hidden')

    const rabbitDiv = document.getElementById('rabbit');
    rabbitDiv.classList.add('hidden')

    const birdDiv = document.getElementById('bird');
    birdDiv.classList.add('hidden')




    document.getElementById('spinner').style.display = "block";

    setTimeout(function () {
        loadCat();
    },2000)
}








// .....................................................rabbit test is here ..............................................................................







const loadRabbit = async() => {
    document.getElementById('spinner').style.display = "none";
    

    const response = await fetch(`https://openapi.programming-hero.com/api/peddy/category/rabbit`);
    const data = await response.json()
    displayRabbit(data.data);
}



const displayRabbit = (rabbit) => {
    // console.log(rabbit);



    const rabbitDiv = document.getElementById('rabbit');

    rabbitDiv.classList.remove('hidden')


    rabbit.forEach(pets => {
        console.log(pets);
        const div = document.createElement('div');
        div.innerHTML=`
    <div class="card bg-base-100 w-96 shadow-xl pb-5" id="border1">
        <figure class="px-10 pt-10">
            <img
            src=${pets.image}
            alt="Shoes"
            class="rounded-xl" />
        </figure>

       <div class="p-10">
            <ul class="list-none">
                <li class="flex text-xl items-center gap-2"> <img src="https://img.icons8.com/?size=100&id=46218&format=png&color=000000" alt="" class="w-5 h-5"> Breed : ${pets.breed || "Not Available"}</li>
                <li class="flex text-xl items-center gap-2"> <img src="https://img.icons8.com/?size=100&id=84997&format=png&color=000000" alt="" class="w-5 h-5"> Birth :                     ${pets.date_of_birth || "Not Available"}</li>
                <li class="flex text-xl items-center gap-2"> <img src="https://img.icons8.com/?size=100&id=ykRtEUckI8mK&format=png&color=000000" alt="" class="w-5 h-5"> Gender :             ${pets.gender || "Not Available"} </li>
                <li class="flex text-xl items-center gap-2"> <img src="https://img.icons8.com/?size=100&id=85782&format=png&color=000000" alt="" class="w-5 h-5"> Price : ${pets.price || "Not Available"} </li>
            </ul>
       </div>

       <div class="flex items-center justify-evenly border py-5">

            <button class="btn px-5" onclick="like1()"><img src="https://img.icons8.com/?size=100&id=24816&format=png&color=000000" alt="" class="w-10 h-10"></button>

            <button class="btn text-[#0E7A81] text-xl">Adopt</button>

            <button class="btn text-[#0E7A81] text-xl">Details</button>

       </div>

        </div>
        `
        rabbitDiv.appendChild(div);

    });
}



const handleRabbit = () => {

    const allDiv = document.getElementById('pet-con');
    allDiv.classList.add('hidden')

    const dogDiv = document.getElementById('dog');
    dogDiv.classList.add('hidden')

    const catDiv = document.getElementById('cat');
    catDiv.classList.add('hidden')

    const rabbitDiv = document.getElementById('rabbit');
    rabbitDiv.classList.add('hidden')

    const birdDiv = document.getElementById('bird');
    birdDiv.classList.add('hidden')




    document.getElementById('spinner').style.display = "block";

    setTimeout(function () {
        loadRabbit();
    },2000)
}









// bird start from here............................................................................









const handleBird = () => {

    const allDiv = document.getElementById('pet-con');
    allDiv.classList.add('hidden')

    const dogDiv = document.getElementById('dog');
    dogDiv.classList.add('hidden')

    const catDiv = document.getElementById('cat');
    catDiv.classList.add('hidden')

    const rabbitDiv = document.getElementById('rabbit');
    rabbitDiv.classList.add('hidden')

    const birdDiv = document.getElementById('bird');
    birdDiv.classList.add('hidden')




    document.getElementById('spinner').style.display = "block";

    setTimeout(function () {
        loadBird();
    },2000)
}


loadBird = () => {
    document.getElementById('spinner').style.display = "none";

    const birdDiv = document.getElementById('bird');
    birdDiv.classList.remove('hidden');
}












// ..........................................orginal.........................................................





const loadAll = async() => {
    

    const response = await fetch(`https://openapi.programming-hero.com/api/peddy/pets`);
    const data = await response.json()
    displayAll(data.pets);
}


const displayAll = (all) => {
    // console.log(all);

    div.classList.add("hidden")


    const petsDiv = document.getElementById('pet-con');

    all.forEach(pets =>
        {

            const breed = pets.breed || 'Not Available';
            const birth = pets.date_of_birth || 'Not Available';
            const gender = pets.gender || 'Not Available';
            const price = pets.price || 'Not Available';
            const name = pets.pet_name || 'Not Available';
            const vaccine = pets.vaccinated_status || 'Not Available';
            const details = pets.pet_details || 'Not Available';


        console.log(pets);

        const div = document.createElement('div');
        console.log(div);
        div.innerHTML=`
        <div id="">
        
                <div class="card bg-base-100 w-96 shadow-xl pb-5" id="border">
        <figure class="px-10 pt-10">
            <img src=${pets.image} alt="Shoes" class="rounded-xl" />
        </figure>

       <div class="p-10">
            <ul class="list-none">
                <li class="flex text-xl items-center gap-2"> <img src="https://img.icons8.com/?size=100&id=46218&format=png&color=000000" alt="" class="w-5 h-5"> Breed : ${pets.breed  || "Not Available"}</li>
                <li class="flex text-xl items-center gap-2"> <img src="https://img.icons8.com/?size=100&id=84997&format=png&color=000000" alt="" class="w-5 h-5"> Birth:                      ${birth || "Not Available"}</li>
                <li class="flex text-xl items-center gap-2"> <img src="https://img.icons8.com/?size=100&id=ykRtEUckI8mK&format=png&color=000000" alt="" class="w-5 h-5"> Gender :             ${gender || "Not Available"} </li>
                <li class="flex text-xl items-center gap-2"> <img src="https://img.icons8.com/?size=100&id=85782&format=png&color=000000" alt="" class="w-5 h-5"> Price : ${price || "Not Available"} </li>
            </ul>
       </div>

       <div class="flex items-center justify-evenly border py-5">

            <button class="btn px-5 like-btn text-[#0E7A81] text-xl" data-image="${pets.image}">Like</i></button>



            <button class="btn text-[#0E7A81] text-xl" onclick="openModal()">Adopt</button> 
            <dialog id="my_modal_1" class="modal"> 
            <div class="modal-box"> 
                <div class="flex justify-center">
                    <img src="https://img.icons8.com/?size=100&id=q6BlPrJZmxHV&format=png&color=000000">
                </div>
                <h3 class="text-4xl font-bold text-center">Congrates!</h3> 
                <p class="text-xl text-center mt-3">Adoption process has started For your pet</p>
                <div class="flex justify-center mt-5">
                    <p class=""><span id="timer" class="text-4xl font-bold">3</span></p> 
                </div>
                <div class="modal-action"> 
                <form method="dialog"> 
                </form> 
                </div> 
            </div> 
            </dialog>



            
    <button class="btn text-[#0E7A81] text-xl details" onclick="openModal2(${pets.petId || "Not Available"})">Details</button>
    
    <dialog id="my_modal_5" class="modal modal-bottom sm:modal-middle">
        <div class="modal-box">
        <img src=${pets.image} alt="Shoes" class="rounded-xl w-[1000px]" />

            <h3 class="text-2xl font-bold my-2">${name || "Not Available"}</h3>
            <div class="flex gap-5">

            <ul>
                <li>Breed : ${breed || "Not Available"}</li>
                <li>Gender : ${gender || "Not Available"}</li>
                <li>Vaccinated Status :  ${vaccine || "Not Available"}</li>
            </ul>

            <ul>
                <li>Birth : ${birth || "Not Available"}</li>
                <li>Price : ${price || "Not Available"}</li>
            </ul>

        </div>
            <p class="py-4 text-xl">Details Information</p>
            <p>${details || "Not Available"}</p>
            <div class="modal-action">
                <form method="dialog" class="w-full">
                    <button class="btn w-full">Close</button>
                </form>
            </div>
        </div>
    </dialog>

       </div>

        </div>

        </div>
        `



        petsDiv.appendChild(div);




        const likeButtons = document.querySelectorAll('.like-btn');
        likeButtons.forEach(button => {
            button.addEventListener('click', append);
        });

    });

}












// .............................................................side bar starts from here.......................................................






const append = (event) => {
    const petImg = event.target.getAttribute('data-image');
    const likedDis = document.getElementById('side-bar');


    const imgElement = document.createElement('img');
    imgElement.src = petImg;
    imgElement.alt = 'Liked Pet';
    imgElement.classList.add('liked-pet', 'border-2', 'border-solid', 'border-gray-300','h-[190px]', 'w-[260px]', 'm-[8px]', 'rounded-lg');


    likedDis.appendChild(imgElement);

    console.log(petImg);
}







let countdown;

function openModal() {
    const modal = document.getElementById('my_modal_1');
    const timerDisplay = document.getElementById('timer');
    let timeLeft = 3;

    // Reset the timer display
    timerDisplay.textContent = timeLeft;

    modal.showModal();

    // Clear any existing countdown interval before starting a new one
    clearInterval(countdown);

    countdown = setInterval(() => {
        timeLeft--;
        timerDisplay.textContent = timeLeft;

        if (timeLeft <= 0) {
            clearInterval(countdown);
            modal.close();
        }
    }, 1000); // Update every second
}



function openModal2() {
    const modal = document.getElementById('my_modal_5');
    modal.showModal();

    
}





document.getElementById('view').onclick = function() {
    const target = document.querySelector('.main'); // Select the target class
    target.scrollIntoView({ behavior: 'smooth' }); // Smoothly scroll to the target
};










let petsData = [];

// Fetch pet data from the API
async function fetchPets() {
    try {
        const response = await fetch('https://openapi.programming-hero.com/api/peddy/pets');
        const data = await response.json();
        petsData = data.pets;
        displayPets(petsData); // Display pets initially
    } catch (error) {
        console.error('Error fetching pets:', error);
    }
}

// Function to display pets
function displayPets(pets) {
    const petContainer = document.getElementById('pet-con');
    petContainer.innerHTML = ''; // Clear existing pets
    pets.forEach(pets => {


        const breed = pets.breed || 'Not Available';
            const birth = pets.date_of_birth || 'Not Available';
            const gender = pets.gender || 'Not Available';
            const price = pets.price || 'Not Available';
            const name = pets.pet_name || 'Not Available';
            const vaccine = pets.vaccinated_status || 'Not Available';
            const details = pets.pet_details || 'Not Available';


        const petDiv = document.createElement('div');
        petDiv.classList.add('pet');
        petDiv.innerHTML = `
        
                <div class="card bg-base-100 md:w-96 w-80  shadow-xl pb-5" id="border">
        <figure class="px-10 pt-10">
            <img src=${pets.image} alt="Shoes" class="rounded-xl" />
        </figure>

       <div class="p-10">
            <ul class="list-none">
                <li class="flex text-xl items-center gap-2"> <img src="https://img.icons8.com/?size=100&id=46218&format=png&color=000000" alt="" class="w-5 h-5"> Breed : ${pets.breed || "Not Available"}</li>
                <li class="flex text-xl items-center gap-2"> <img src="https://img.icons8.com/?size=100&id=84997&format=png&color=000000" alt="" class="w-5 h-5"> Birth:                      ${birth || "Not Available"}</li>
                <li class="flex text-xl items-center gap-2"> <img src="https://img.icons8.com/?size=100&id=ykRtEUckI8mK&format=png&color=000000" alt="" class="w-5 h-5"> Gender :             ${gender || "Not Available"} </li>
                <li class="flex text-xl items-center gap-2"> <img src="https://img.icons8.com/?size=100&id=85782&format=png&color=000000" alt="" class="w-5 h-5"> Price : ${price || "Not Available"} </li>
            </ul>
       </div>

       <div class="flex items-center justify-evenly border py-5">

            <button class="btn px-5 like-btn text-[#0E7A81] text-xl" data-image="${pets.image}">Like</i></button>



            <button class="btn text-[#0E7A81] text-xl" onclick="openModal()">Adopt</button> 
            <dialog id="my_modal_1" class="modal"> 
            <div class="modal-box"> 
                <div class="flex justify-center">
                    <img src="https://img.icons8.com/?size=100&id=q6BlPrJZmxHV&format=png&color=000000">
                </div>
                <h3 class="text-4xl font-bold text-center">Congrates!</h3> 
                <p class="text-xl text-center mt-3">Adoption process has started For your pet</p>
                <div class="flex justify-center mt-5">
                    <p class=""><span id="timer" class="text-4xl font-bold">3</span></p> 
                </div>
                <div class="modal-action"> 
                <form method="dialog"> 
                </form> 
                </div> 
            </div> 
            </dialog>



            
    <button class="btn text-[#0E7A81] text-xl details" onclick="openModal2(${pets.petId || "Not Available"})">Details</button>
    
    <dialog id="my_modal_5" class="modal modal-bottom sm:modal-middle">
        <div class="modal-box">
        <img src=${pets.image || "Not Available"} alt="Shoes" class="rounded-xl w-[1000px]" />

            <h3 class="text-2xl font-bold my-2">${name || "Not Available"}</h3>
            <div class="flex gap-5">

            <ul>
                <li>Breed : ${breed || "Not Available"}</li>
                <li>Gender : ${gender || "Not Available"}</li>
                <li>Vaccinated Status :  ${vaccine || "Not Available"}</li>
            </ul>

            <ul>
                <li>Birth : ${birth || "Not Available"}</li>
                <li>Price : ${price || "Not Available"}</li>
            </ul>

        </div>
            <p class="py-4 text-xl">Details Information</p>
            <p>${details || "Not Available"}</p>
            <div class="modal-action">
                <form method="dialog" class="w-full">
                    <button class="btn w-full">Close</button>
                </form>
            </div>
        </div>
    </dialog>

       </div>

        </div>

        
        `;
        petContainer.appendChild(petDiv);



        const likeButtons = document.querySelectorAll('.like-btn');
        likeButtons.forEach(button => {
            button.addEventListener('click', append1);

        });

    });
}


const append1 = (event) => {
    const petImg = event.target.getAttribute('data-image');
    const likedDis = document.getElementById('side-bar');


    const imgElement = document.createElement('img');
    imgElement.src = petImg;
    imgElement.alt = 'Liked Pet';
    imgElement.classList.add('liked-pet', 'border-2', 'border-solid', 'border-gray-300','h-[190px]', 'w-[260px]', 'm-[8px]', 'rounded-lg');


    likedDis.appendChild(imgElement);

    // console.log(petImg);
}



// Sort and display pets by price
document.getElementById('sortButton').addEventListener('click', () => {
    const sortedPets = petsData.sort((a, b) => (b.price || 0) - (a.price || 0));
    displayPets(sortedPets);
});

// Fetch pets when the page loads
fetchPets();



loadAll()
