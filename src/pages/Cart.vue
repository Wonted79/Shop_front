<template>
  <div class="cart">
    <div class="container">
      <ul>
        <li v-for=" (i,idx) in carts" :key="idx">

          <img :src="`${i.image}`"  style="width: 10%; height:10%; fill:#55595c"/>
          <span class="name">{{i.name}}</span>
          <span class="price">{{i.price}}</span>
          <i class="fa fa-trash" onclick="alert('해제되었습니다.')" @click="Remove(i.product_id)"></i>
        </li>
      </ul>
      <router-link to="/order" class="btn btn-primary" onclick="alert('구매가 완료되었습니다.')">구입하기</router-link>
    </div>
  </div>
</template>

<script>

import {ref} from "vue";
import axios from "axios";

export default {
  name: "Cart",


  setup() {
    var carts = ref([]); // eslint-disable-line no-unused-vars

    axios.get(`/carts/1`).then((Response) => {
      console.log(Response.data);
      carts.value = Response.data

    });
    const Remove = (id) =>{
      try {
        const response = axios.delete(`/carts/1/${id}`).then(res => {console.log(res);})
        if (response.data == '삭제완료') {
          window.location.href = "http://localhost:3002";
        } else {
          console.log()
        }

      }catch(error){
        console.error("POST요청에 실패했습니다",error);
      }
    }

    console.log('carts', carts.value)
    return {carts, Remove}
  }
}

</script>

<style scoped>
.cart ul {
  list-style: none;
  margin: 0;
  padding: 0;
}

.cart ul li {
  border: 1px solid #eee;
  margin-top: 25px;
  margin-bottom: 25px;
}

.cart ul li img {
  width: 150px;
  height: 150px;
}

.cart ul li .name {
  margin-left: 25px;
}

.cart ul li .price {
  margin-left: 25px;
}

.cart ul li i {
  float: right;
  font-size: 20px;
  margin-top: 65px;
  margin-right: 50px;
}

.cart .btn {
  width:300px;
  display:block;
  margin:0 auto;
  padding:30px 50px;
  font-size: 20px;
}

</style>