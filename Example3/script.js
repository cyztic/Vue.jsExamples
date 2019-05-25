new Vue ({
    el: "#app",
    data: {
        name: "Josh",
        counter: 2,
        secondCounter: 0
    },

    computed: {
        output: function() {
            console.log("computed");
            return this.counter > 5 ? "Greater than 5" : "less than 5";
        }
    },
    watch: {
        counter: function(value) {
            var vm = this;
            setTimeout(function() {
                vm.counter = 0;
            }, 2000);
        }
    },
    methods: {
        result: function() {
            console.log("method");
            return this.secondCounter > 5 ? "Greater than 5" : "less than 5";
        }
    }
})