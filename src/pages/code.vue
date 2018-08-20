<template>
  <div class="hello">
    <div class="code">
      <span>请输入验证码：</span>
      <input type="text" v-model="verificationCode">
      <VerificationCode
      :width='100'
      :height='30'
      @getCode='getCode'
      ></VerificationCode>
    </div>
    <p>*请区分大小写</p>
    <div class="button">
      <div @click='verification' >确定</div>
    </div>
  </div>
</template>

<script>

import VerificationCode from '../components/VerificationCode'

export default {
  name: 'Code',
  data () {
    return {
      code: '',
      verificationCode: ''
    }
  },
  components: {
    VerificationCode
  },
  methods: {
    getCode (code) {
      this.code = code
      console.log(code)
    },
    verification () {
      if (this.verificationCode === this.code) {
        console.log('success')
      } else {
        console.log('error')
      }
    }
  }
}
</script>

<style scoped>
.hello {
  background: #f5f5f5;
  height: 100%;
  padding: 20px;
}
.code {
  display: flex;
  align-items: center;
  padding: 20px 0;
}
.code span {
  font-size: 16px;
}
.code input {
  width: 70px;
  padding-left: 10px;
  margin-right: 10px;
  outline: none;
}
p {
  color: red;
  font-size: 14px;
  height: 20px;
  line-height: 20px;
}
.button {
  width: 100%;
  height: 30px;
  text-align: center;
}
.button div{
  margin: 0 auto;
  width: 100px;
  height: 100%;
  line-height: 30px;
  background: red;
  border-radius: 5px;
  color: #fff;
  font-size: 14px;

}
</style>
