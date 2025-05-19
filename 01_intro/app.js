// const inputEl = document.querySelector("input");
// const buttonEl = document.querySelector("button");
// const listEl = document.querySelector("ul");

// const addTodo = () => {
//   const enteredValue = inputEl.value;
//   const item = document.createElement("li");
//   item.textContent = enteredValue;
//   listEl.append(item);
//   inputEl.value = "";
// };

// buttonEl.addEventListener("click", addTodo);

Vue.createApp({
  data() {
    return {
      inputVal: "",
      todoList: [],
    };
  },
  methods: {
    handleClick() {
      this.todoList.push(this.inputVal);
      this.inputVal = "";
    },
  },
}).mount("#app");
