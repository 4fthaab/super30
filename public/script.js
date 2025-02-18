// Define the item locations
const itemLocations = {
    "Paste": { rack: 3, compartment: 7, image: "images/paste.jpeg" },
    "Soap": { rack: 2, compartment: 15, image: "images/soap.jpeg" },
    "Pepsi": { rack: 4, compartment: 10, image: "images/pepsi.jpeg" },
    "5 star": { rack: 1, compartment: 20, image: "images/5star.jpeg" },
    "Mandhi": { rack: 3, compartment: 15, image: "images/mandhi.jpeg" },
    "Mirinda": { rack: 4, compartment: 12, image: "images/mirinda.jpeg" },
    "Brush": { rack: 3, compartment: 10, image: "images/brush.jpeg" },
    "Rice": { rack: 2, compartment: 5, image: "images/rice.jpeg" },
    "Sugar": { rack: 4, compartment: 10, image: "images/sugar.jpeg" },
    "Salt": { rack: 1, compartment: 3, image: "images/salt.jpeg" },
    "Tea": { rack: 2, compartment: 8, image: "images/tea.jpeg" },
    "Coffee": { rack: 3, compartment: 12, image: "images/coffee.jpeg" },
    "Biscuits": { rack: 4, compartment: 6, image: "images/biscuits.jpeg" },
    "Chips": { rack: 1, compartment: 14, image: "images/chips.jpeg" },
    "Juice": { rack: 2, compartment: 18, image: "images/juice.jpeg" },
    "Milk": { rack: 3, compartment: 2, image: "images/milk.jpeg" },
    "Butter": { rack: 4, compartment: 4, image: "images/butter.jpeg" },
    "Cheese": { rack: 1, compartment: 9, image: "images/cheese.jpeg" },
    "Yogurt": { rack: 2, compartment: 11, image: "images/yogurt.jpeg" },
    "Eggs": { rack: 3, compartment: 16, image: "images/eggs.jpeg" },
    "Bread": { rack: 4, compartment: 1, image: "images/bread.jpeg" },
    "Jam": { rack: 1, compartment: 5, image: "images/jam.jpeg" },
    "Honey": { rack: 2, compartment: 13, image: "images/honey.jpeg" },
    "Cereal": { rack: 3, compartment: 19, image: "images/cereal.jpeg" },
    "Oats": { rack: 4, compartment: 3, image: "images/oats.jpeg" },
    "Pasta": { rack: 1, compartment: 12, image: "images/pasta.jpeg" },
    "Noodles": { rack: 2, compartment: 7, image: "images/noodles.jpeg" },
    "Sauce": { rack: 3, compartment: 14, image: "images/sauce.jpeg" },
    "Ketchup": { rack: 4, compartment: 8, image: "images/ketchup.jpeg" },
    "Mustard": { rack: 1, compartment: 17, image: "images/mustard.jpeg" },
    "Mayonnaise": { rack: 2, compartment: 4, image: "images/mayonnaise.jpeg" },
    "Pickles": { rack: 3, compartment: 11, image: "images/pickles.jpeg" },
    "Olives": { rack: 4, compartment: 9, image: "images/olives.jpeg" },
    "Vinegar": { rack: 1, compartment: 6, image: "images/vinegar.jpeg" },
    "Oil": { rack: 2, compartment: 10, image: "images/oil.jpeg" },
    "Flour": { rack: 3, compartment: 1, image: "images/flour.jpeg" },
    "Pepper": { rack: 2, compartment: 9, image: "images/pepper.jpeg" },
    "Spices": { rack: 3, compartment: 13, image: "images/spices.jpeg" },
    "Herbs": { rack: 4, compartment: 7, image: "images/herbs.jpeg" },
    "Garlic": { rack: 1, compartment: 8, image: "images/garlic.jpeg" },
    "Onions": { rack: 2, compartment: 6, image: "images/onions.jpeg" },
    "Tomatoes": { rack: 3, compartment: 4, image: "images/tomatoes.jpeg" },
    "Potatoes": { rack: 4, compartment: 2, image: "images/potatoes.jpeg" },
    "Carrots": { rack: 1, compartment: 11, image: "images/carrots.jpeg" },
    "Broccoli": { rack: 2, compartment: 14, image: "images/broccoli.jpeg" },
    "Cabbage": { rack: 3, compartment: 17, image: "images/cabbage.jpeg" },
    "Lettuce": { rack: 4, compartment: 13, image: "images/lettuce.jpeg" },
    "Spinach": { rack: 1, compartment: 10, image: "images/spinach.jpeg" },
    "Cucumber": { rack: 2, compartment: 12, image: "images/cucumber.jpeg" },
    "Zucchini": { rack: 3, compartment: 18, image: "images/zucchini.jpeg" },
    "Peppers": { rack: 4, compartment: 11, image: "images/peppers.jpeg" },
    "Chillies": { rack: 1, compartment: 13, image: "images/chillies.jpeg" },
    "Mushrooms": { rack: 2, compartment: 16, image: "images/mushrooms.jpeg" },
    "Pumpkin": { rack: 3, compartment: 20, image: "images/pumpkin.jpeg" },
    "Squash": { rack: 4, compartment: 14, image: "images/squash.jpeg" },
    "Corn": { rack: 1, compartment: 15, image: "images/corn.jpeg" },
    "Peas": { rack: 2, compartment: 17, image: "images/peas.jpeg" },
    "Beans": { rack: 3, compartment: 5, image: "images/beans.jpeg" },
    "Lentils": { rack: 4, compartment: 15, image: "images/lentils.jpeg" },
    "Rice": { rack: 1, compartment: 4, image: "images/rice.jpeg" },
    "Quinoa": { rack: 2, compartment: 3, image: "images/quinoa.jpeg" },
    "Barley": { rack: 3, compartment: 6, image: "images/barley.jpeg" },
    "Oats": { rack: 4, compartment: 16, image: "images/oats.jpeg" },
    "Bread": { rack: 1, compartment: 1, image: "images/bread.jpeg" },
    "Bagels": { rack: 2, compartment: 2, image: "images/bagels.jpeg" },
    "Croissants": { rack: 3, compartment: 3, image: "images/croissants.jpeg" },
    "Muffins": { rack: 4, compartment: 17, image: "images/muffins.jpeg" },
    "Donuts": { rack: 1, compartment: 16, image: "images/donuts.jpeg" },
    "Cookies": { rack: 2, compartment: 1, image: "images/cookies.jpeg" },
    "Brownies": { rack: 3, compartment: 8, image: "images/brownies.jpeg" },
    "Cakes": { rack: 4, compartment: 18, image: "images/cakes.jpeg" },
    "Pies": { rack: 1, compartment: 19, image: "images/pies.jpeg" },
    "Pastries": { rack: 2, compartment: 19, image: "images/pastries.jpeg" },
    "Ice Cream": { rack: 3, compartment: 9, image: "images/icecream.jpeg" },
    "Frozen Yogurt": { rack: 4, compartment: 19, image: "images/frozenyogurt.jpeg" },
    "Popsicles": { rack: 1, compartment: 18, image: "images/popsicles.jpeg" },
    "Frozen Pizza": { rack: 2, compartment: 20, image: "images/frozenpizza.jpeg" },
    "Frozen Vegetables": { rack: 3, compartment: 10, image: "images/frozenvegetables.jpeg" },
    "Frozen Meals": { rack: 4, compartment: 20, image: "images/frozenmeals.jpeg" },
    "Water": { rack: 1, compartment: 7, image: "images/water.jpeg" },
    "Soda": { rack: 2, compartment: 5, image: "images/soda.jpeg" },
    "Juice": { rack: 3, compartment: 2, image: "images/juice.jpeg" },
    "Milk": { rack: 4, compartment: 4, image: "images/milk.jpeg" },
    "Coffee": { rack: 1, compartment: 9, image: "images/coffee.jpeg" },
    "Tea": { rack: 2, compartment: 8, image: "images/tea.jpeg" },
    "Energy Drinks": { rack: 3, compartment: 12, image: "images/energydrinks.jpeg" },
    "Sports Drinks": { rack: 4, compartment: 6, image: "images/sportsdrinks.jpeg" },
    "Wine": { rack: 1, compartment: 14, image: "images/wine.jpeg" },
    "Beer": { rack: 2, compartment: 18, image: "images/beer.jpeg" },
    "Liquor": { rack: 3, compartment: 16, image: "images/liquor.jpeg" },
    "Cocktail Mixers": { rack: 4, compartment: 1, image: "images/cocktailmixers.jpeg" }
};

// Create racks dynamically
const map = document.getElementById("map");
for (let i = 1; i <= 5; i++) {
    const rack = document.createElement("div");
    rack.classList.add("rack");
    rack.id = `rack${i}`;

    for (let j = 1; j <= 20; j++) {
        const compartment = document.createElement("div");
        compartment.textContent = j;
        compartment.id = `rack${i}-compartment${j}`;
        compartment.addEventListener("click", () => {
            const item = Object.keys(itemLocations).find(key => itemLocations[key].rack === i && itemLocations[key].compartment === j);
            if (item) {
                showPopup(compartment, item);
            }
        });
        rack.appendChild(compartment);
    }

    map.appendChild(rack);
}
function showPopup(element, item) {
    let popup = document.createElement("div");
    popup.classList.add("popup");

    // Create and append the image
    const img = document.createElement("img");
    img.src = itemLocations[item].image;
    img.alt = item;
    img.style.width = "50px";
    img.style.height = "50px";
    img.style.marginRight = "10px";

    // Create and append the text
    const text = document.createElement("span");
    text.textContent = item;

    // Append image and text to the popup
    popup.appendChild(img);
    popup.appendChild(text);

    element.appendChild(popup);
    popup.style.display = "block";

    setTimeout(() => {
        popup.style.display = "none";
        element.removeChild(popup);
    }, 2000);
}
// Handle search functionality
const searchButton = document.getElementById("search-button");
const searchBox = document.getElementById("search-box");
const suggestionsBox = document.getElementById("suggestions");

searchBox.addEventListener("input", () => {
    const query = searchBox.value.toLowerCase();
    suggestionsBox.innerHTML = "";
    if (query) {
        const suggestions = Object.keys(itemLocations).filter(item => item.toLowerCase().includes(query));
        suggestions.forEach(suggestion => {
            const suggestionItem = document.createElement("div");
            suggestionItem.style.display = "flex";
            suggestionItem.style.alignItems = "center";
            const img = document.createElement("img");
            img.src = itemLocations[suggestion].image;
            img.alt = suggestion;
            img.style.width = "30px";
            img.style.height = "30px";
            img.style.marginRight = "10px";
            suggestionItem.appendChild(img);
            const text = document.createElement("span");
            text.textContent = suggestion;
            suggestionItem.appendChild(text);
            suggestionItem.addEventListener("click", () => {
                searchBox.value = suggestion;
                suggestionsBox.innerHTML = "";
            });
            suggestionsBox.appendChild(suggestionItem);
        });
    }
});
searchBox.addEventListener("keydown", (event) => {
    if (event.key === "Enter") {
        event.preventDefault();
        searchButton.click();
    }
});

searchButton.addEventListener("click", () => {
    const query = searchBox.value;
    if (itemLocations[query]) {
        const location = itemLocations[query];
        const compartment = document.getElementById(`rack${location.rack}-compartment${location.compartment}`);
        if (compartment) {
            document.querySelectorAll('.highlight').forEach(el => el.classList.remove('highlight'));
            compartment.classList.add('highlight');
        }
    } else {
        alert("Item not found");
    }
});
function addToList(item) {
    let list = document.getElementById("shopping-list-items");
    let listItem = document.createElement("li");
    listItem.textContent = item;
    list.appendChild(listItem);
}

function addToListFromInput() {
    let input = document.getElementById("shopping-list-input");
    if (input.value.trim() !== "") {
        addToList(input.value);
        input.value = "";
    }
}