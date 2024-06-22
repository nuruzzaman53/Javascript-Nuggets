// dot notation//

const person = {
  name: "john",
  favFruits: ["apple", "orange"],
};

console.log(person.name);
console.log(person["name"]);

person.age = 29;

console.log(person);

// square bracket notation //

const items = {
  "featured-items": ["item1", "item2"],
};

console.log(items["featured-items"]);

// Dynamic object //

let appState = "loading";

appState = "error";

const keyName = "fruit";

const app = {
  [appState]: true,
};

app[keyName] = "apple";

console.log(app);

const state = {
  loading: true,
  name: "",
  job: "",
};

const updateState = (key, value) => {
  state[key] = value;
};

updateState("name", "Nuruzzaman");
updateState("job", "developer");
updateState("loading", false);
updateState("products", []);

console.log(state);
