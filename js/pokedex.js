//selección elementos a manipular
//const cards= document.getElementById('user-list');
//const cards= document.querySelector('#user-list');
const cards= document.getElementById("user-list");
/* const fetchUser = async () => {
    const promises = [];
    await fetch('https://jsonplaceholder.typicode.com/users')
    .then((res)) => res.json())
    .then((res)) => console.log(res));

    
}; */
//console.log(fetchUser());

const fecthUser = ()=> {
    const promises = [];

    for (let i = 1; i <= 100; i++) {
        const url = `https://pokeapi.co/api/v2/pokemon/${i}`;
        promises.push(fetch(url).then((res) => res.json()));

    }
    Promise.all(promises).then((results) => {
        console.log(results);
        const user = results.map((result) =>({
                name: result.name,
	            image: result.sprites['front_default'],
	            type: result.types.map((type) => type.type.name).join(', '),
	            id: result.id,
                height: result.height,
        }));
        displayUser(user);
    });
}

const displayUser = (user) => {
    console.log(user);

    const myUser = user.map((newUser) =>
    
    `   
    
    <li>
        <div class="orden">
        <img class="card-image" src="${newUser.image}"/>
        <h2>${newUser.name}</h2>
        </div>
        <div class="orden--2">
        <p>TIPO:${newUser.type}</p>
        <p class="id">ID:${newUser.id}</p>
        </div>
        <p class="otra">ALTURA:${newUser.height}pulgadas</p>
    </li>
    `
    ).join("");
    cards.innerHTML = myUser;
};

fecthUser();

