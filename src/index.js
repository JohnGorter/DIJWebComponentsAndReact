import ReactDOM from 'react-dom'
import React, {useEffect, useState} from 'react'

function MyList(props) {
     // Declare a new state variable, which we'll call "count"
  const [count, setCount] = useState(0);

  return (
    <div>
      { JSON.stringify(props) }
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>
        Click me
      </button>
    </div>
  );
}

export const MyHeader = () => <h1>Hello world</h1>

function MyComp2({parent}) {
  console.log("MyComp2 rendering stuff!")
  const [test,refresh] = useState(1);
  useEffect(()=>{
    parent.refreshTimer2 = (t) => { refresh(t);} 
  })
  const date = new Date(); 
  return <div>test:{test}</div>
}

function MyComp({parent}) {
    console.log("MyComp rendering stuff!")
    const [test,refresh] = useState(1);
    useEffect(()=>{
        parent.refreshTimer1 = (t) => { parent.test = t;parent.setAttribute("test",t);refresh(t); parent.dispatchEvent(new CustomEvent('test'))} 
    })
    const date = new Date(); 
    return <div>test:{test}</div>
}

class johnElement extends HTMLElement {
    static get observedAttributes() { return ['test'] }
    attributeChangedCallback(_, __, newvalue){
        this.test = newvalue;
        console.log('newvalue', newvalue);
      //  this.refreshTimer2?.call(+newvalue); 
    }
    connectedCallback(){
        ReactDOM.render(<div><MyComp parent={this}/><MyComp2 parent={this}/></div>, this);
    }
}
customElements.define('john-element', johnElement);

console.log("react", React);

export { React, ReactDOM } 
export let test = 100
