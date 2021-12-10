const app = new Vue({
  el: "#root",
  data: {
    pgs: [],
  },
  methods: {
  },
  created() {
    for (let x = 1; x < 5; x++) {
      axios.get('https://swapi.dev/api/people/' + x)
        .then((response) => {
          // axios.get('https://swapi.dev/api/people/' + x + '/homeworld')
          //   .then((resp2) => {
          //     response.data.homeworld = resp2.data;
          //   })
          //   .catch(function (error) {
          //     console.log(error);
          //   })
          this.pgs.push(response.data);
        })
        .catch(function (error) {
          console.log(error);
        })
    }
  }
});