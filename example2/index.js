const template=document.getElementsByTagName('template')[0];
const componentName=template.getAttribute('name');
customElements.define(componentName,class extends HTMLElement{
    constructor(){
        super();
        const component=template.content.children[0].cloneNode(true);
        this.attachShadow({mode:'open'}).appendChild(component);
    }
})