// Handler that listens to data assignment operations
const handler={
    set(user,property,value){
        const query=`[data-mark=${property}]`;
        const elements=document.querySelectorAll(query);
        for(const el of elements){
            el.innerText=value
        }
        console.log(`${property} is being updated`);
        return Reflect.set(user,property,value)
    }
}

// Creating a proxy with the handler
const user={name:'liuyi'}
const proxy=new Proxy(user,handler);


proxy.name='lily';
proxy.age=12;
