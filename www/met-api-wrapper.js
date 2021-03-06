/**
 * return an ArtworkObject for the given Id
 * 
 * @param {*} id of the artwork. 
 * @returns the object for the given id.
 */
export function getArtworkObject(id){
    return fetch(`https://collectionapi.metmuseum.org/public/collection/v1/objects/${id}`, {
        method: 'GET',
        // body: myBody,
        headers: {
            'Content-Type': 'application/json'
        }
    })
    .then( response => response = response.json())
    .then(response => {return response.message == null? response : null});
}

/**
 * return an array of all objectIds (of artworks) for the given search parameters.
 * 
 * @param {*} searchParam the string by which it is searched.
 * @param {*} hasImages exclude artworks without images.
 * @returns the array of all objectIds
 */
export function getArtworkSearch(searchParam, hasImages){
    return fetch(`https://collectionapi.metmuseum.org/public/collection/v1/search?q=${searchParam}&hasImages=${hasImages}`, {
        method: 'GET',
        // body: myBody,
        headers: {
            'Content-Type': 'application/json'
        }
    })
    .then( response => response = response.json())
    .then( response => response = response.objectIDs);
}