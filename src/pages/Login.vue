
<template>
  <form @submit.prevent="loginUser(username, password)">
    <div style="margin-left:20vw; margin-top:20vh;">
      <label for="username" class ="login-bar-title">Username:</label>
      <input class ="login-bar"  type="text" v-model="username"><br>
      <label class ="login-bar-title" for="password">Password:</label>
      <input class ="login-bar" type="password" v-model="password" /><br>
      <button class ="login-bar" style="margin:10vh 18.8vw;" type="submit">Login</button>
    </div>

</form>
</template>


<script >

import axios from "axios";
//import {createRouter as $router} from "vue-router";
export default {

  name: "Login",
  data() {
    return {
      username: "",
      password: "",
    };
  },

  methods: {
    async loginUser(user_id, user_pw) {
      try {
        const response = await axios.post(`/user/${user_id}/${user_pw}`);
        if (response.data == '성공') {
          alert('로그인에 성공했습니다')

           window.location.href = "http://localhost:3003";
        } else {
          alert('없는 계정입니다')
          console.log()
        }

      }catch(error){
        console.error("POST요청에 실패했습니다",error);
      }
    }
  },


// setup(){
  //  var user_id = ref('') // eslint-disable-line no-unused-vars
   // var user_pw = ref('') // eslint-disable-line no-unused-vars

  //  function fnLogin(user_id,user_pw){
    //  axios.post(`/user/${user_id}/${user_pw}`).then((Response) => {
    //    console.log('res data 성공인지 아닌지 확인',Response.data)
        //if (Response.data == '성공'){//. value
          //홈으로 이동
       // }
       // else{
          // 로그인 안됨

     // });
   //  }


    //return {
    //  user_id,
     // user_pw,
     // fnLogin
   // }
  //},

  // methods: {
  //   fnLoginsss() {
  //     if (this.user_id === '') {
  //       alert('ID를 입력하세요.')
  //       return
  //     }
  //
  //     if (this.user_pw === '') {
  //       alert('비밀번호를 입력하세요.')
  //       return
  //     }
  //
  //     alert('로그인 되었습니다.')
  //   }
  // }


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
.login-bar-title{
  font-size:5vh;
  margin-top:2vh;
  width:17vw;
}
.login-bar{
  margin-left:2vw;
  width:24vw;
  height: 5vh;
  border-radius: 1vh;
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

#login-form {
  align-self: flex-start;
  display: grid;
  justify-items: center;
  align-items: center;
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

#login-form-submit {
  width: 100%;
  padding: 7px;
  border: none;
  border-radius: 5px;
  color: white;
  font-weight: bold;
  background-color: #3a3a3a;
  cursor: pointer;
  outline: none;
}
</style>