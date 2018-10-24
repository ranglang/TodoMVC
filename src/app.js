import Taro, { Component } from '@tarojs/taro'
import '@tarojs/async-await'
import { Provider } from '@tarojs/redux'
import { createStore, applyMiddleware } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'

import reducer from './reducers'
import Index from './pages/index'

import './app.scss'

const store = createStore(reducer, composeWithDevTools(
  applyMiddleware()
  // other store enhancers if any
))

class App extends Component {

  onTabItemTap(e) {
    console.log('onTabItemTap', e);
  }

  config = {
    pages: [
      'pages/index/index'
    ],
    window: {
      backgroundTextStyle: 'light',
      navigationBarBackgroundColor: '#fff',
      navigationBarTitleText: 'WeChat',
      navigationBarTextStyle: 'black'
    },
    tabBar: {
      backgroundColor: '#fff',
      selectedColor: '#000',
      list: [
        {
          pagePath: 'pages/index/index',
          text: 'A',
          color: '#94949B',
          selectedColor: '#252525',
        },
        {
          pagePath: 'pages/index/index',
          text: 'B',
          color: '#94949B',
          selectedColor: '#252525',
        },
        {
          pagePath: 'pages/index/index',
          text: 'C',
          color: '#94949B',
          selectedColor: '#252525'
        }
      ],
    },
  }

  componentDidMount () {}

  componentDidShow () {}

  componentDidHide () {}

  componentCatchError () {}

  render () {
    return (
      <Provider store={store}>
        <Index/>
      </Provider>
    )
  }
}

Taro.render(<App/>, document.getElementById('app'))
