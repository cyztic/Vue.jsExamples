<template>
    <div class="row">
        <form>
            <div class="col-sm-8 col-sm-offset col-xs-12 col-md-6 col-md-offset-3 form-group"> 
                <label> Player </label>
                <textarea class="form-control" rows="3" v-model="player"> </textarea>
            </div>
            <div class="col-sm-8 col-sm-offset col-xs-12 col-md-6 col-md-offset-3 form-group"> 
                <button class="btn btn-primary" @click.prevent="createNew">
                    Add New Player
                </button>
            </div>
        </form>
    </div>
</template>

<script>


export default {
    data: function () {
        return {
            player: ''
        };
    },
    methods: {
        createNew() {
            this.$emit('playerAdded', this.player);
            this.player = '';
        }
    }
}
</script>

<style>

</style>
