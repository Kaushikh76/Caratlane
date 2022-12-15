// DOM Elements
const CustomerForm = document.getElementById("CustomerForm");
const CustomersContainer = document.querySelector(".Customers");
const nameInput = CustomerForm["name"];
const ageInput = CustomerForm["age"];
const rollInput = CustomerForm["roll"];

/* 
{
  name: '',
  age: number,
  roll: number
}
*/

const Customers = JSON.parse(localStorage.getItem("Customers")) || [];

const addCustomer = (name, age, roll) => {
  Customers.push({
    name,
    age,
    roll,
  });

  localStorage.setItem("Customers", JSON.stringify(Customers));

  return { name, age, roll };
};

const createCustomerElement = ({ name, age, roll }) => {
  // Create elements
  const CustomerDiv = document.createElement("div");
  const CustomerName = document.createElement("h2");
  const CustomerAge = document.createElement("p");
  const CustomerRoll = document.createElement("p");

  // Fill the content
  CustomerName.innerText = "Customer name: " + name;
  CustomerAge.innerText = "Customer age: " + age;
  CustomerRoll.innerText = "Customer roll: " + roll;

  // Add to the DOM
  CustomerDiv.append(CustomerName, CustomerAge, CustomerRoll);
  CustomersContainer.appendChild(CustomerDiv);

  CustomersContainer.style.display = Customers.length === 0 ? "none" : "flex";
};

CustomersContainer.style.display = Customers.length === 0 ? "none" : "flex";

Customers.forEach(createCustomerElement);

CustomerForm.onsubmit = e => {
  e.preventDefault();

  const newCustomer = addCustomer(
    nameInput.value,
    ageInput.value,
    rollInput.value
  );

  createCustomerElement(newCustomer);

  nameInput.value = "";
  ageInput.value = "";
  rollInput.value = "";
};
