<template>
    <div class="card shadow-sm">

      <div class="bd-placeholder-img card-img-top" width="100%" height="225" role="img" aria-label="Placeholder: Thumbnail" preserveAspectRatio="xMidYMid slice" focusable="false">
        <title>Placeholder</title>

        <img :src="`${img.image}`"  style="width: 100%; height:100%; fill:#55595c"/>
        <text x="50%" y="50%" fill="#eceeef" dy=".3em"></text>
      </div>
      <div class="card-body">
        <p class="card-text">{{products.name}}</p>
        <div class="d-flex justify-content-between align-items-center">
          <div class="btn-group">
            <button type="button" class="btn btn-sm btn-outline-secondary" @click="addToCart(products.product_id)">
              장바구니
            </button>
          </div>
          <small class="text-body-secondary">{{ products.price}}$</small>
        </div>
      </div>
    </div>
</template>
<script>
import {toRefs} from 'vue'
import axios from "axios";
  export default {

    name : "Card",
    props:{
      products : Object
    },
    setup(props){
      const addToCart = (id) => {
        axios.post(`/carts/1/${id}`).then(() =>{
          console.log('success')
        })
      };

      const { products } = toRefs(props)
      let img = products.value // eslint-disable-line no-unused-vars
      return {img,addToCart}
    }

  }
</script>

<style scoped>

</style>