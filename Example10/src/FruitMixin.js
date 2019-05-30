export const fruitMixin = {
    data () {
        return {
            fruits: ['Apple', 'Orange', 'Strawberry', 'Banana', 'Melon', 'Mango'],
            filterText: ''
        }
    },
    computed: {
        filteredFruits() {
            return this.fruits.filter((element) => {
                return element.match(this.filterText);
            });
        }
    }
}