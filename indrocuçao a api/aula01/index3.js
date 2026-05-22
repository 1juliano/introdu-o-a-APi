const botaoBuscar = document.querySelector("#btn-buscar")
const inputPokemon = document.querySelector("#pokemonInput")
const resultado = document.querySelector("#resultado")

function getPokemonInput(){
    getPokemon(inputPokemon.value.toLowerCase())
}

async function getPokemon(pokemon){

    try{

        resultado.innerHTML = `<p>Carregando...</p>`

        const resposta = await fetch(
            `https://pokeapi.co/api/v2/pokemon/${pokemon}/`
        )

        if(!resposta.ok){
            throw new Error("Pokemon não encontrado")
        }

        const data = await resposta.json()

        renderizaPokemon(data)

    }catch(error){

        resultado.innerHTML = `
            <p>❌ Não encontrado</p>
        `
    }
}

function renderizaPokemon(data){

    const {
        name,
        weight,
        height,
        types,
        sprites:{front_default}
    } = data

    resultado.innerHTML = `
        <img src="${front_default}">

        <h2>${name}</h2>

        <p>Tipo: ${types[0].type.name}</p>

        <p>Altura: ${height}</p>

        <p>Peso: ${weight}</p>
    `
}

botaoBuscar.addEventListener("click", getPokemonInput)