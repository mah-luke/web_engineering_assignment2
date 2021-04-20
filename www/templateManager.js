import * as StorageHandler from './storageHandler.js';

const cart = document.querySelector('[href="cart.html"]');

// events

document.addEventListener('DOMContentLoaded', () => {    
    const size = StorageHandler.getSize('cart');
    cart.innerHTML = `Cart${ size > 0 ? ` (${size})` : "" }`;
});