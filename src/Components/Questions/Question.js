import React from 'react';
import './Question.css'

const Question = () => {
    return (
        <div className='question-container'>
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
            <div className='question-3'>
                <h1>3. what purpose useeffect in react?</h1>
                <p>The motivation behind the introduction of useEffect Hook is to eliminate the side-effects of using class-based components. For example, tasks like updating the DOM, fetching data from API end-points, setting up subscriptions or timers, etc can be lead to unwarranted side-effects. Since the render method is to quick to produce a side-effect one needs to use life cycle methods to observe the side effects. For example, consider updating the document title for a simple counter component to the current value. On the initial render, we set the current clicked value to 0 clicks. So, this section is coded into the componentDidMount() method which is executed only once in the component life cycle. Then we create a button to increment the count state value by one on every click. As the count value state changes, we also need to update the document title again and for that, we need to write the same piece of code in componentDidUpdate(). The componentDidupdate() method is perfect for updating the counter value at any time the state changes but the repetition of code is one of the side-effects.</p>
            </div>

        </div>

    );
};

export default Question;