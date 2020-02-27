import { useState, useEffect, Component, Config } from '@tarojs/taro'

function List() {
  const [count, setCount] = useState(0)
  useEffect(() => {
    console.log('add')
    return () => {
      console.log(1)
    }
  }, [count])
  function add() {
    setCount(count + 1)
  }
  return (
    <view>
      <button onClick={add}>add</button>
      counter: {count}
    </view>)
}
List.config = {
  navigationBarTitleText: '列表'
}

// import { ComponentClass } from 'react'
// import Taro, { Component, Config } from '@tarojs/taro'
// import { View, Button, Text } from '@tarojs/components'
// import { connect } from '@tarojs/redux'

// import { add, minus, asyncAdd } from '../../actions/counter'


// // #region 书写注意
// //
// // 目前 typescript 版本还无法在装饰器模式下将 Props 注入到 Taro.Component 中的 props 属性
// // 需要显示声明 connect 的参数类型并通过 interface 的方式指定 Taro.Component 子类的 props
// // 这样才能完成类型检查和 IDE 的自动提示
// // 使用函数模式则无此限制
// // ref: https://github.com/DefinitelyTyped/DefinitelyTyped/issues/20796
// //
// // #endregion

// type PageStateProps = {
//   counter: {
//     num: number
//   }
// }

// type PageDispatchProps = {
//   add: () => void
//   dec: () => void
//   asyncAdd: () => any
// }

// type PageOwnProps = {}

// type PageState = {}

// type IProps = PageStateProps & PageDispatchProps & PageOwnProps

// interface List {
//   props: IProps;
// }

// @connect(({ counter }) => ({
//   counter
// }), (dispatch) => ({
//   add() {
//     dispatch(add())
//   },
//   dec() {
//     dispatch(minus())
//   },
//   asyncAdd() {
//     dispatch(asyncAdd())
//     Taro.navigateTo({
//       url: '/pages/list/index'
//     })
//   }
// }))
// class List extends Component {

//   /**
//  * 指定config的类型声明为: Taro.Config
//  *
//  * 由于 typescript 对于 object 类型推导只能推出 Key 的基本类型
//  * 对于像 navigationBarTextStyle: 'black' 这样的推导出的类型是 string
//  * 提示和声明 navigationBarTextStyle: 'black' | 'white' 类型冲突, 需要显示声明类型
//  */
//   config: Config = {
//     navigationBarTitleText: '列表'
//   }

//   componentWillReceiveProps(nextProps) {
//     console.log(this.props, nextProps)
//   }

//   componentWillUnmount() { }

//   componentDidShow() { }

//   componentDidHide() { }

//   render() {
//     return (
//       <View className='index'>
//         <Button className='add_btn' onClick={this.props.add}>+</Button>
//         <Button className='dec_btn' onClick={this.props.dec}>-</Button>
//         <Button className='dec_btn' onClick={this.props.asyncAdd}>async</Button>
//         <View><Text>{this.props.counter.num}</Text></View>
//         <View><Text>Hello, World fxxk是是是</Text></View>
//       </View>
//     )
//   }
// }

// // #region 导出注意
// //
// // 经过上面的声明后需要将导出的 Taro.Component 子类修改为子类本身的 props 属性
// // 这样在使用这个子类时 Ts 才不会提示缺少 JSX 类型参数错误
// //
// // #endregion

// export default List as ComponentClass<PageOwnProps, PageState>
export default List