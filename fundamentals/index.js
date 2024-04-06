// function render(reactElement, containerDOMElement) {
//     // 1. Create a DOM element
//     const domElement = document.createElement (reactElement.type)

//     // 2. update properties

//     domElement.innerText = reactElement.children;

//     // 3. put it in the container

//     containerDOMElement.appendChild (domElement); 

    
// }

// const reactElement = {
//     type : 'a',
//     props: {    
//         href: 'http://yahoo.com/', 
//     },
//     children: 'Read more about this component',
// };

// const containerDOMElement = document.querySelector ('root');

// render (reactElement, containerDOMElement);


function App () {
    return React.createElement('header', null, "My Name Is IBRAHIM KAYODE");
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root,render (React.createElement(App))