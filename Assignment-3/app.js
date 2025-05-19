Vue.createApp({
  data() {
    return {
      number: 0,
    };
  },
  watch: {
    result() {
      const that = this;
      console.log("watcher");

      setTimeout(() => {
        that.number = 0;
      }, 5000);
    },
  },
  computed: {
    result() {
      if (this.number < 37) {
        return "Not there yet " + this.number;
      } else if (this.number === 37) {
        return his.number;
      } else {
        return "Too much! " + this.number;
      }
    },
  },
  methods: {
    addFive() {
      this.number += 5;
    },
    addOne() {
      this.number += 1;
    },
  },
}).mount("#assignment");
