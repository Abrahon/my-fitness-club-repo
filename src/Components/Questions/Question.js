
const Question = () => {
    return (
        <div className='question'>
            <div className='question-1'>
                <h1> 1. How React works?</h1>
                <p>At its very core, React basically maintains a tree for you. This tree is able to do efficient diff computations on the nodes.

                    Think of your HTML code as a tree. In fact, that is exactly how the browser treats your DOM (your rendered HTML on the browser). React allows you to effectively re-construct your DOM in JavaScript and push only those changes to the DOM which have actually occurred.React Native allows developers to build apps by spinning up JS threads that interpret JavaScript code, by making a native bridge between the app and the target platform. The bridge concept leverages the library and transfers the component's hierarchy to the mobile devices view</p>
            </div>