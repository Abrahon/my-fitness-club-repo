import React from 'react';
import './Question.css'

const Question = () => {
    return (
        <div className='question'>
            <div className='question-1'>
                <h1> 1. How React works?</h1>
                <p>At its very core, React basically maintains a tree for you. This tree is able to do efficient diff computations on the nodes.

                    Think of your HTML code as a tree. In fact, that is exactly how the browser treats your DOM (your rendered HTML on the browser). React allows you to effectively re-construct your DOM in JavaScript and push only those changes to the DOM which have actually occurred.React Native allows developers to build apps by spinning up JS threads that interpret JavaScript code, by making a native bridge between the app and the target platform. The bridge concept leverages the library and transfers the component's hierarchy to the mobile devices view</p>
            </div>
            <div className='question-2'>
                <h1>2. What is the difference between state and props in React?</h1>
                <p>State should contain data that a component's event handlers may change to trigger a UI update. In real apps this data tends to be very small and JSON-serializable. When building a stateful component, think about the minimal possible representation of its state, and only store those properties in this.state. Inside of render() simply compute any other information you need based on this state. <br />813
                    Props and state are related. The state of one component will often become the props of a child component. Props are passed to the child within the render method of the parent as the second argument to React.createElement() or, if you're using JSX, the more familiar tag attributes.</p>
            </div>

        </div>

    );
};

export default Question;