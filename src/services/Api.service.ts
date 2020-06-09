// Returns the characters count for use in the first load
// @ts-ignore
async function getCharacterCount() {
    const response = await fetch("https://rickandmortyapi.com/api/character/");
    const { info } = await response.json();
    return info.count;
}

// Returns one character data for use in individual components
async function getCharacterById(id: number) {
    const response = await fetch(
        `https://rickandmortyapi.com/api/character/${id}`
    );
    return response.json();
}

async function getAllCharacters() {
    const response = await fetch(`https://rickandmortyapi.com/api/character/`);
    return response.json();
}

async function getCharactersByName(name: string) {
    const response = await fetch(`https://rickandmortyapi.com/api/character/?name=${encodeURIComponent(name)}`);
    return response.json();
}

async function filterCharacters(gender: string, specie: string) {
    let url = `https://rickandmortyapi.com/api/character/?`;
    if (gender) {
        url += `gender=${encodeURIComponent(gender)}&`
    }
    if (specie) {
        url += `species=${encodeURIComponent(specie)}&`
    }
    const response = await fetch(url);
    return response.json();
}

// returns all characters iterative
// async function getAllCharacters() {
//   const { info, results } = await rickmortyapi.getCharacter()
//   let characters = [
//     ...results
//   ]

//   for (let i = 2; i <= info.pages; i++) {
//     console.log('Voy en', i)
//     const { results } = await rickmortyapi.getCharacter({ page: i })
//     characters = [
//       ...characters,
//       ...results
//     ]
//   }

//   return characters
// }

// // returns all characters recursively
// async function getCharactersFromPage(pageNumber = 1) {
//   let characters = []
//   const { info, results } = await rickmortyapi.getCharacter({ page: pageNumber })

//   if (info.next !== '') {
//     characters = await getCharactersFromPage(pageNumber + 1)
//   }

//   return [
//     ...characters,
//     ...results
//   ]
// }

async function getCharactersByPage(url: string) {
    const response = await fetch(url);
    return response.json();
}

const Api = {
    getCharactersByPage,
    filterCharacters,
    getCharactersByName,
    getCharacterCount,
    getCharacterById,
    getAllCharacters
    // getCharactersFromPage
};

export default Api;