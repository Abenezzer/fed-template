const addField = document.querySelector("#add-field-manage");
const managedSsystems = document.querySelector("#managed-system");

function createField() {
  return `
  
  
  
    <label for="dep1" class="form-label"
      >Systems Managed by this Department:
    </label>
    <input
      type="text"
      class="form-control"
      id="dep1"
      placeholder="System Mangaged by this department"
    />
   <div class="d-flex justify-content-end">
   <button class="btn btn-danger mt-2 col-2">Delete</button>
   </div>
   
  
    `;
}

addField.addEventListener("click", (e) => {
  console.log("the button is clicked");
  const newField = document.createElement("div");
  newField.classList.add("mb-3");
  newField.innerHTML = createField();
  managedSsystems.appendChild(newField);
});

managedSsystems.addEventListener("click", (e) => {
  if (e.target.textContent === "Delete") {
    e.target.parentElement.parentElement.remove();
  }
});
