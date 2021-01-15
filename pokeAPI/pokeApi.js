
let $typeOutput = $('#Output');


function pokemonType(response){
    const types = response.types;
    for (let i=1; i<(types.length + 1);i++){
        const type = response.types[i-1].type.name;
        $typeOutput.append(`<p>Type${i}:${type}</p>`);
    }
}




const url = "https://pokeapi.co/api/v2/pokemon/";
//const nameParam = "?name=";

const getData = async ()=>{
    const input = document.getElementById("name").value;
    console.log(input);
    const endpoint = `${url}${input}`;

    try {
        const response = await fetch(endpoint);
        if (response.ok){
            const jsonResponse = await response.json();
            console.log(jsonResponse);
            return pokemonType(jsonResponse);
        } throw new Error('Request failed!');
    } catch (error){
        console.log(error);
    }
}