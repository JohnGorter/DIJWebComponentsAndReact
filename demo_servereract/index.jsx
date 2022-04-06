import React from 'react'
import reactDom from 'react-dom'
import { MyHeader } from '../public/dist/bundle.js'

const MyComp = () => <h1>Hello universe<MyHeader/></h1>

reactDom.render(<MyComp/>, document.querySelector("#app"))