const template=document.getElementsByTagName('template')[0]

const componentName=template.getAttribute('name')
customElements.define(componentName,class extends HTMLElement{
    constructor(){
        super();
        const component=template.content.children[0].cloneNode(true)
        this.attachShadow({mode:'open'}).appendChild(component)
    }
})


const handler={
    set(target,property,value){
        const query=`[data-mark=${property}]`;
        const elements=document.querySelectorAll(query);
        for(let el of elements){
            el.innerHTML=value
        }
        console.log(`${property} has changed`)
        return Reflect.set(...arguments)
    }
}


