const products = [
  { title: "Samsunf f23", amount: 2, price: 350.55, category: "mobile" },
  { titel: "Apple watch", amount: 5, price: 100.34, category: "watch" },
  { title: "Apple XIII", amount: 4, price: 2350.55, category: "mobile" },
];

// creating unique category //

const mobileCategory = products.map((item) => item.category);

console.log(Array.from(new Set(mobileCategory)));

// rest operator //

const fruits = ["apple", "orange", "pineapple", "malta", "grape", "banana"];

const [myFruits, ...rest] = fruits;

console.log(myFruits);

// Spread operator//

// Object destructing //

const male = {
  name: "nuruzzaman",
  age: 32,
  job: "engineer",
  isMarried: true,
  siblings: {
    brothers: {
      bigBrother: "abdur rahman",
      smallBrother: "khairul",
    },
    sister: "taslima",
  },
  father: "shawkat ali",
  mother: "baby akter",
  district: "khulna",
  division: "khulna",
};

const {
  name,
  age,
  father,
  isMarried,
  division,
  siblings: {
    brothers: { bigBrother, smallBrother },
    sister,
  },
} = male;

console.log(bigBrother);
console.log(division);
console.log(sister);

const female = {
  name: "jeni",
  age: 32,
  district: "dhaka",
};

const Participant = { ...male, ...female };

console.log(Participant);

// Spread operator //

const boys = ["john", "junaid", "kamal"];

const girls = ["selena", "jeni", "litun"];

const students = [...boys, ...girls, "nuru", "nabil"];

console.log(students);

// reduce example: shopping cart //

const cart = [
  { title: "Samsunf f23", amount: 2, price: 350.55, category: "mobile" },
  { titel: "Apple watch", amount: 5, price: 100.34, category: "watch" },
  { title: "Apple XIII", amount: 4, price: 2350.55, category: "mobile" },
];

const { totalCost, totalItem } = cart.reduce(
  (total, cartItem) => {
    const { amount, price } = cartItem;

    // item count //
    total.totalItem += amount;

    // cost count //
    total.totalCost += amount * price;

    return total;
  },
  {
    totalCost: 0,
    totalItem: 0,
  }
);

console.log("$" + totalCost, totalItem + " pcs ");

// Reduce advanced example: github profile //

const URL = "https://api.github.com/users/john-smilga/repos?per_page=100";

const fetchRepos = async () => {
  const response = await fetch(URL);
  const data = await response.json();
  console.log(data);
};

fetchRepos();
