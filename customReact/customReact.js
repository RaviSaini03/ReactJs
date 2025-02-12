function customReactRender(reactElement, customContainer) {
    /* normal way
    const domElement = document.createElement(reactElement.type);
    domElement.innerHTML = reactElement.children;
    domElement.setAttribute('href', reactElement.props.href);
    domElement.setAttribute('target', reactElement.props.target);
    customContainer.appendChild(domElement);
    */
    
    // advanced and efficent way
    const domElement = document.createElement(reactElement.type);
    domElement.innerHTML = reactElement.children;
    for (const prop in reactElement.props) {
        if(prop == reactElement.props.children) continue
        domElement.setAttribute(prop, reactElement.props[prop]);
    }
    customContainer.appendChild(domElement);
}

const reactElement = {
    type: 'a',
    props: {
        href: "https://google.com",
        target: "_blank"
    },
    children: 'Open Google.com'
}

const myContainer = document.querySelector('#root');

customReactRender(reactElement, myContainer);