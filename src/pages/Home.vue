<template>
  <div class="home">
    <section class="py-5 text-center container">

    </section>

    <div class="album py-5 bg-body-tertiary">
      <div class="container">

        <div class="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
          <div class="col" v-for="(product, idx) in products" :key="idx">
            <Card :products ="product"/>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>

import axios from "axios";

import Card from "@/components/Card.vue";
import {ref} from "vue"


export default {
  name: "Home",
  components: {Card},
  setup() {
    // const state = reactive({
    //   products: []
    // });
    var products = ref([]); // eslint-disable-line no-unused-vars
    axios.get("/products").then((Response) => {
      console.log(Response.data);
      products.value = Response.data

    });

    console.log('products', products.value)
    return {products}
  }
}

</script>

<style scoped>

</style>
