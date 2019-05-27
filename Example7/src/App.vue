<template>
    <div class="container">
        <div class="row">
            <div class="col-xs-12">
                <button @click="selectedComponent = 'appQuote'">Quote</button>
                <button @click="selectedComponent = 'appAuthor'">Author</button>
                <button @click="selectedComponent = 'appNew'">New</button>
                    <hr>
                    <p> {{ selectedComponent }} </p>
                    <component :is="selectedComponent">
                                <h2> poop </h2>
                                <p> {{ content }} </p>
                    </component>

               <!-- <app-quote>
                   <h2 slot="title"> {{ title }} </h2>
                   <p slot="content"> {{ content }} </p>
               </app-quote> -->
            </div>
        </div>
    </div>
</template>

<script>

import Quote from './components/Quote.vue';
import Author from './components/Author.vue';
import NewQuote from './components/NewQuote.vue';

    export default {
        data: function() {
            return {
                title: "Quotes",
                content: "My Quotes are great!",
                selectedComponent: "appQuote"
            }
        },
        components: {
            appQuote : Quote,
            appAuthor: Author,
            appNew: NewQuote
        }
    }
</script>

<style>
</style>
