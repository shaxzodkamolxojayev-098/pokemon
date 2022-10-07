"use strict"
// console.log(pokemons);

// {
//   "id": 1,
//   "num": "001",
//   "name": "Bulbasaur",
//   "img": "http://www.serebii.net/pokemongo/pokemon/001.png",
//   "type": [
//   "Grass",
//   "Poison"
//   ],
//   "height": "0.71 m",
//   "weight": "6.9 kg",
//   "candy": "Bulbasaur Candy",
//   "candy_count": 25,
//   "egg": "2 km",
//   "spawn_chance": 0.69,
//   "avg_spawns": 69,
//   "spawn_time": "20:00",
//   "multipliers": [
//   1.58
//   ],
//   "weaknesses": [
//   "Fire",
//   "Ice",
//   "Flying",
//   "Psychic"
//   ],
//   "next_evolution": [
//   {
//       "num": "002",
//       "name": "Ivysaur"
//   },
//   {
//       "num": "003",
//       "name": "Venusaur"
//   }
//   ]
// }

let data=pokemons.splice(0,20)

let newInfo=data.map((item,index,arry)=>{
  return {
    img: item.img,
    title: item.name,
    age: item.height,
    category: item.type,
    weight: item.weight
  }
})

// console.log(newInfo);


let elFormSelect=document.querySelector('#category');

elFormSelect.addEventListener('change',(e)=>{
   console.log(e.target.value);
})

renderData()

function renderData() {
  newInfo.forEach ((e) => {
    const card=plusElement('div', 'card shedow box my-2',`
    <img src="${e.img}" alt="${e.title}">
    <div class="card-body my-2 mx-2">
     <h3>${e.title}</h3>
     <ul>
     <li>${e.category}</li>
     <li>${e.age}</li>
     <li>${e.weight}</li>
     </ul>
     </div>
     `)
  
     $qs('.box').appendChild(card);
     
  })
}



let pokemonCategories=[];

function category(){
  newInfo.forEach((item)=>{
    item.category.forEach((e)=>{
      if(!pokemonCategories.includes(e)){
        pokemonCategories.push(e);
        }
        
    })
  })
  
}

category()

console.log(pokemonCategories);

pokemonCategories.forEach((e)=>{
  const option=plusElement('option','option-item', e);
  $qs('#category').appendChild(option);
})





// console.log(pokemonCategories);

// const filterOption=pokemonCategories.filter((e)=>{
//   return e.category.toLowerCase()==='normal'
// })



// console.log(filterOption);