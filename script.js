const recipelist = document.getElementById('recipe-list');
const filterInput = document.getElementById('filter');
const loadingDiv = document.getElementById('loading');

let recipes = [];
let filteredRecipes = [];
let page = 1;
let isLoading = false;
const limit = 10;

const fetchRecipes = ( page, limit) => {
    return new Promise((resole) => {
        setTimeout(() => {
            const newRecipes = Array.from ({length:limit}, (_,i)=> ({
                id: i+(page-1) * limit + 1,
                title: `Recipe ${i+(page-1) * limit + 1}`
            }));
            resolve (newRecipes);

        },1000);
    }); 
};