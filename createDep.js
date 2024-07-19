const addFieldManaged = document.querySelector("#add-field-manage");
const managedSystems = document.querySelector("#managed-system");

const addFieldUsed = document.querySelector("#add-field-used");
const usedSystems = document.querySelector("#used-system");


function createFieldForManagedSystem() {
  return `   
    <input
      type="text"
      class="form-control"
      name="managedSystem"+${Date.now()}
      placeholder="System Mangaged by this department"
    />
   <div class="d-flex justify-content-end">
   <button class="btn btn-danger ">Delete</button>
   </div>
   
  
    `;
}

addFieldManaged.addEventListener("click", (e) => {
  console.log("the button is clicked");
  const newField = document.createElement("div");
  newField.classList.add("mb-3", "d-flex", "justify-content-between", "gap-2");
  newField.innerHTML = createFieldForManagedSystem();
  managedSystems.appendChild(newField);
});

managedSystems.addEventListener("click", (e) => {
  if (e.target.textContent === "Delete") {
    e.target.parentElement.parentElement.remove();
  }
});

// Used System

function createFieldForUsedSystem() {
  return `   
    <input
      type="text"
      class="form-control"
      name="usedSystem"+${Date.now()}
      placeholder="System Used by this department"
    />
   <div class="d-flex justify-content-end">
   <button class="btn btn-danger ">Delete</button>
   </div>
   
  
    `;
}

addFieldUsed.addEventListener("click", (e) => {
  console.log("the button is clicked");
  const newField = document.createElement("div");
  newField.classList.add("mb-3", "d-flex", "justify-content-between", "gap-2");
  newField.innerHTML = createFieldForManagedSystem();
  usedSystems.appendChild(newField);
});

usedSystems.addEventListener("click", (e) => {
  if (e.target.textContent === "Delete") {
    e.target.parentElement.parentElement.remove();
  }
});
