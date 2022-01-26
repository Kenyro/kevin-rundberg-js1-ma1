const cats = [
  {
    name: "Blob",
    age: 10,
  },
  {
    name: "Harold",
  },
  {
    name: "Blurt",
    age: 21,
  },
];

// Question 1

const cat = {
  complain: function () {
    console.log("Meow!");
  },
};

cat.complain();

// Question 2

const heading = document.querySelector("h3");
heading.innerHTML = "Updated heading";

// Question 3

heading.style.fontSize = "2em";

// Question 4
heading.classList.add("subheading");

// Question 5

const paragraphs = document.querySelectorAll("p");

paragraphs.forEach((element) => {
  element.style.color = "red";
});
// Question 6

const resultsContainer = document.getElementsByClassName("results");
const para = document.createElement("p");
for (var i = 0; i < resultsContainer.length; i++) {
  resultsContainer[i].style.backgroundColor = "yellow";
  resultsContainer[i].append(para);
  para.innerHTML = "New Paragraph";
}

console.log(resultsContainer);

// Question 7

function LoopList(list) {
  list.forEach((listElement) => {
    console.log(listElement.name);
  });
}

LoopList(cats);

// Question 8

function createCats(cats) {
  const catcontainer = document.getElementsByClassName("cat-container");

  const container = document.createElement("div");
  const catName = document.createElement("h5");
  const catAge = document.createElement("p");

  cats.forEach((cat) => {
    catName.innerHTML = cat.name;
    catAge.innerHTML = cat.age;
  });

  for (var i = 0; i < catcontainer.length; i++) {
    catcontainer[i].append(container);
    container.append(catName, catAge);
  }
}

createCats(cats);
