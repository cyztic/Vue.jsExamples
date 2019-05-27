<template>
<div>
    <h1>new quotes up in here</h1>
    <button @click="counter++">Increase Counter </button>
    <p> {{ counter}} </p>
 </div>
</template>

<script>

export default {
    data: function () {
        return {
            counter: 0
        }
    }
}

</script>

<style scoped>

div {
    border: 1px solid #ccc;
    box-shadow: 1px 1px 2px black;
    padding: 30px;
    margin: 30px auto;
    text-align: center;
}

</style>