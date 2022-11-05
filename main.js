let margheritaPicker = document.getElementById('margherita-serving');
let marIngredients = document.getElementById('ingredients');
onload

let margIngredientsSmall = ['200 grams of flour',
                            '2 grams of salt',
                            '100 mililiters of water', 
                            '2 grams of yeast',
                            '2 grams of sugar',
                            'piza sauce (enough to cover dough)'];

let margIngredientsMedium = ['300 grams of flour',
                             '4 grams of salt',
                             '150 mililiters of water', 
                             '4 grams of yeast',
                             '4 grams of sugar',
                             'piza sauce (enough to cover dough)'];

let margIngredientsLarge = ['450 grams of flour',
                            '7 grams of salt',
                            '200 mililiters of water', 
                            '7 grams of yeast',
                            '7 grams of sugar',
                            'piza sauce (enough to cover dough)'];

function margElementChange() {
    if(margheritaPicker.value === 'small') {
        margPicker(margIngredientsSmall);
    } else if (margheritaPicker.value === 'medium') {
        margPicker(margIngredientsMedium);
    } else {
        margPicker(margIngredientsLarge);
    }
}

function margPicker(array) {
    marIngredients.textContent="";
    for (const item of array) {
        console.log('loop');
        let listItem = document.createElement('li');
        listItem.textContent = item;
        marIngredients.appendChild(listItem);
    }
}