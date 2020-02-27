import { useState, useEffect, Component, Config, Taro } from '@tarojs/taro'
import { Button, View } from '@tarojs/components'

class Login extends Component {

  /**
 * 指定config的类型声明为: Taro.Config
 *
 * 由于 typescript 对于 object 类型推导只能推出 Key 的基本类型
 * 对于像 navigationBarTextStyle: 'black' 这样的推导出的类型是 string
 * 提示和声明 navigationBarTextStyle: 'black' | 'white' 类型冲突, 需要显示声明类型
 */
  config: Config = {
    navigationBarTitleText: '首页'
  }

  componentWillReceiveProps(nextProps) {
    console.log(this.props, nextProps)
  }

  componentWillUnmount() { }

  componentDidShow() { }

  componentDidHide() { }

  getUserInfo(u) {
    console.log(u)
  }

  login() {
    Taro.login({
      success(res) {
        Taro.request({
          url: 'http://127.0.0.1:4000/session',
          // url: 'http://leonewu.com:3000/session',
          data: { code: res.code },
          method: 'POST'
        }).then(res => {
          if (res.data.token) {
            Taro.setStorage({key: 'token', data: res.data.token}).catch(err => {
              console.log(err)
            })
          }
        })
      }
    })
  }

  render() {
    return (
      <View className='index'>
        <Button onClick={this.login}>登录</Button>
        <Button className='add_btn' openType='getUserInfo' onGetUserInfo={this.getUserInfo}>获取用户信息</Button>
      </View>
    )
  }
}

export default Login;