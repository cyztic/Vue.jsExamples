<template>
    <div class="row">
        <app-player v-for="(player, index) in playerList" @click.native="deletePlayer(index)"> {{player}} </app-player>
    </div>
</template>

<script>

import Player from "./Player";


export default {
    props: ['playerList'],
    components: {
        appPlayer : Player
    },
    methods: {
        deletePlayer(index) {
            this.$emit('playerDeleted', index);
        }
    }
}
</script>

<style>

</style>