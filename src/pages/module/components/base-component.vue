<template>
    <div>
        <base-container title="vuex"></base-container>
        <h3>0</h3>
        <button @click="increase">Add 1</button>
    </div>
</template>
<script>
import BaseContainer from './base-container.vue';

export default {
    data(){
        return {

        }
    },
    methods: {
        increment() {
            this.$store.commit('increment');
            console.log(this.$store.state.count);
        },
        increase(){
            this.$store.commit('increase', 10);
            console.log(this.$store.state.count);
        }
    },
    components: {
        BaseContainer,
    }
}
</script>