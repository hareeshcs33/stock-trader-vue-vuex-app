<template>
    <div>
        <product-one></product-one>
        <product-two></product-two>
    </div>
</template>
<script>
import ProductOne from './product-one.vue';
import ProductTwo from './product-two.vue';

export default {
    data(){
        return {
            // products: [
            //     {name: 'Mango', price: 50},
            //     {name: 'Banana', price: 40},
            //     {name: 'Chikku', price: 70},
            //     {name: 'Orange', price: 80},
            //     {name: 'Lemon', price: 20}
            // ]
        }
    },
    components: {
        ProductOne,
        ProductTwo,
    }
}
</script>