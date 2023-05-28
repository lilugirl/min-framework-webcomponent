const templates=document.getElementsByTagName('template');
for(let template of templates){
    const componentName=template.getAttribute('name')
    customElements.define(componentName,class extends HTMLElement{
        constructor(){
            super()
            const component=template.content.children[0].cloneNode(true)
            this.attachShadow({mode:'open'}).appendChild(component)
        }
    })
}

const handler={
   set(target,property,value){
     const query=`[data-mark=${property}]`
     const elements=document.querySelectorAll(query);
     for(el of elements){
        el.childNodes[0].textContent=value
        const children=el.children
        for(child of children){
            child.value=value
        }
     }

     return Reflect.set(...arguments)
   } 
}

const $data=new Proxy({},handler)