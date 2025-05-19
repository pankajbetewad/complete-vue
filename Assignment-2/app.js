Vue.createApp({
  data() {
    return {
      outputText1: "",
      outputText2: "",
    };
  },
  methods: {
    showAlert() {
      alert("showing alert when button is clicked");
    },
    changedText(event) {
      this.outputText1 = event.target.value;
    },
    changedText2(event) {
      this.outputText2 = event.target.value;
    },
  },
}).mount("#assignment");
