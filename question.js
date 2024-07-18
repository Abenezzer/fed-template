const addBtn = document.querySelector("#addBtn");
const questionFields = document.querySelector("#question-fields");
const questionForm = document.querySelector("#questionForm");
let questionNo = 0;
function createField() {
  questionNo++;
  return `
    <input
      name= "question" + ${questionNo}
      type="text"
      class="form-control"
      placeholder="Question " + ${questionNo}
    />
    <span class="btn btn-danger">Delete</span>
  
    `;
}

addBtn.addEventListener("click", (e) => {
  let divWrapper = document.createElement("div");
  divWrapper.classList.add("d-flex", "justify-content-around", "gap-2", "mb-3");
  divWrapper.innerHTML = createField();
  questionFields.appendChild(divWrapper);
});

questionForm.addEventListener("click", (e) => {
  if (e.target.textContent === "Delete") {
    e.target.parentElement.remove();
  }
});
