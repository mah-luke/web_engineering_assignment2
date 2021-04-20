import * as ArtworkCache from  './artwork-cache.js';
import * as MetApi from './met-api-wrapper.js';

const CURRENT_URL = new URL(window.location.href);
const objectId = CURRENT_URL.searchParams.get('objectID');

document.addEventListener('DOMContentLoaded', () => {
    console.log("--- load site ---");
    framing();
    
});

async function framing() {
    console.log("prova")
    if (ArtworkCache.retrieve(objectId) == null){
        console.log("ArtworkCache failed")
        var response = await MetApi.getArtworkObject(objectId);
        console.log(response);
        if (response == null || response.message == "ObjectID not found") {
            console.log("image")
            window.location.replace("search.html");
        }
    }



}