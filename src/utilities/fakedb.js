// use local storage to manage cart data
const addToDb = id => {
    console.log(id);
    let jobStorage = getStoredJobs();
    // add quantity
    const quantity = jobStorage[id];
    console.log(quantity);
    if (!quantity) {
        jobStorage[id] = 1;
    }
    else {
        const newQuantity = quantity + 1;
        jobStorage[id] = newQuantity;
    }
    localStorage.setItem('job-storage', JSON.stringify(jobStorage));
}

const removeFromDb = id => {
    const shoppingCart = getStoredJobs();
    if (id in shoppingCart) {
        delete shoppingCart[id];
        localStorage.setItem('shopping-cart', JSON.stringify(shoppingCart));
    } 
}

const getStoredJobs = () => {
    let jobStorage = {};

    //get the shopping cart from local storage
    const storedJobs = localStorage.getItem('job-storage');
    if (storedJobs) {
        jobStorage = JSON.parse(storedJobs);
    }
    return jobStorage;
}

const deleteShoppingCart = () => {
    localStorage.removeItem('shopping-cart');
}

export {
    addToDb,
    removeFromDb,
    getStoredJobs,
    deleteShoppingCart
}
