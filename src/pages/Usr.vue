
<template>

  <div>
  <main id="main-holder">
    <h1 id="login-header">User page</h1>

    <div id="login-error-msg-holder">
      <p id="login-error-msg">Invalid username <span id="error-msg-second-line">and/or password</span></p>
    </div>

    <form id="mypage-form" >
      <label>ID  :<input type="text" id="ID"  v-model= "usrs.user_id" ></label><br><br>
      <label>PW  : <input type="password" id="PW"  v-model= "usrs.password"></label><br><br>
      <label>이름 : <input type="text" id="이름" v-model= "usrs.name"></label><br><br>
      <label>성별 : <input type="text"  id = "성별" v-model= "usrs.sex"></label><br><br>
      <label>폰 : <input type="text" id = "폰" v-model= "usrs.phone_number"></label><br><br>
      <label>주소 : <input type="text" id = "주소" v-model= "usrs.address"></label><br><br>
      <div class = "btn" @click="updateUserInfo()">Correction</div>

    </form>
  </main>
  </div>>

</template>

<script>
import {ref} from "vue";
import axios from "axios";


export default {

  name: "Usr",
  setup() {

    var usrs = ref([]); // eslint-disable-line no-unused-vars
    axios.get(`/user/Lee/0000`).then((Response) => {
      console.log(Response.data);
      usrs.value = Response.data
    });
    function updateUserInfo(){
      console.log('dd',usrs.value)
      axios.put('/user',usrs.value).then((Response) => {
        console.log(Response.data);
      });
      // axios.put('/user/'+usrs.value.user_id+'/'+usrs.value.password+'/'+usrs.value.name+'/'+usrs.value.sex+'/'+usrs.value.phone_number+'/'+usrs.value.address).then((Response) => {
      //   console.log(Response.data);
      // });
    }
    console.log('usrs', usrs.value)
    return {usrs,updateUserInfo}
  }
}






</script>

<style scoped>
html{
  height: 100%;
}
body {
  height: 100%;
  margin: 0;
  font-family: Arial, Helvetica, sans-serif;
  display: grid;
  justify-items: center;
  align-items: center;
  background-color: #3a3a3a;
}

#main-holder {
  width: 100%;
  height: 700px;
  display: grid;
  justify-items: center;
  align-items: center;
  background-color: white;
  border-radius: 7px;
  box-shadow: 0px 0px 5px 2px purple;
  color: purple;
}

#login-error-msg-holder {
  width: 100%;
  height: 100%;
  display: grid;
  justify-items: center;
  align-items: center;
}

#login-error-msg {
  width: 23%;
  text-align: center;
  margin: 0;
  padding: 5px;
  font-size: 12px;
  font-weight: bold;
  color: #8a0000;
  border: 1px solid #8a0000;
  background-color: #e58f8f;
  opacity: 0;
}

#error-msg-second-line {
  display: block;
}

#mypage-form {
  align-self: flex-start;
  display: grid;
  float: left;
}

.login-form-field::placeholder {
  color: #3a3a3a;
}

.login-form-field {
  border: none;
  border-bottom: 1px solid #3a3a3a;
  margin-bottom: 10px;
  border-radius: 3px;
  outline: none;
  padding: 0px 0px 5px 5px;
}
.btn{
  width: 15vw;
  height:6vh;
  background: #eeeeee;
}

</style>