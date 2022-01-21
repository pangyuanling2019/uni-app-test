<template>
  <view class="login-container">
    <!-- <u--image src="https://cdn.uviewui.com/uview/album/1.jpg" shape="circle" style="width:100px;height:100px;"></u--image> -->

    <view style="margin-top:100px;">
      <u--input placeholder="请填写账号" border="bottom" v-model="account" ></u--input>
      <u--input placeholder="请填写密码" border="bottom" v-model="pwd" type="password"></u--input>
    </view>

    <u-button class="login" type="primary"  @click="handleLogin" style="margin-top:100px;">登录</u-button>
    <u-button class="login" type="primary"  @click="handleToken" style="margin-top:100px;">获取token</u-button>
  </view>
</template>
<script lang="ts">
import { storage, IStorageEnum } from '@/utils/storage'
import { yhMessage } from '@/utils/message'
import { loginServiceAuth } from './LoginService'
interface IPageData {
  account?: string
  pwd?: string
}
export default {
  data() {
    return {
      account: '',
      pwd: ''
    }
  },
  methods: {
    // 登录
    async handleLogin() {
      const { account, pwd } = this as IPageData
      if (!account) {
        yhMessage.toast('请输入账号')
        return
      }
      if (!pwd) {
        yhMessage.toast('请输入密码')
        return
      }
      //获取token
      let { retData: token } = await loginServiceAuth.Login({
        userCode: account,
        userPassword: pwd
      })
      storage.set(IStorageEnum.TOKEN, token)
      //通过token拿到用户信息
      let { retData } = await loginServiceAuth.VerifyInfo({
        sourceApp: 'gtm',
        token
      })
      let { menus, resources, roles, shops, ...userInfo } = retData ?? {}
      yhMessage.toast('登录成功')
      storage.set(IStorageEnum.USER_INFO, userInfo)

      uni.switchTab({
        url: '../home/index'
      })
    },
    async handleToken() {
      console.log(storage.get(IStorageEnum.TOKEN))
    }
  }
}
</script>

<style lang="scss" scoped>
page {
  background-color: #fff;
}

// .logo {
//   width: 458rpx;
//   height: 120rpx;
//   display: block;
//   margin: 100rpx auto;
// }

// .login {
//   display: block;
//   width: 80%;
//   margin: 100rpx auto;
// }
</style>
