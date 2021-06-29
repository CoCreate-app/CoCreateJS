import observer from '@cocreate/observer';
let imports = {};
window.CoCreate = {}
function observerCallback( target ) {
    for(let [name, {callback, selector}] of Object.entries(imports))
    {   
        // if(!name)
        //     return;
        let isInit = target.querySelector(selector) //
        if (isInit && callback) {
            callback()
            delete imports[name] ;
        }
    }

}

export async function lazyLoad(name, selector, cb) {
    async function cc() {
        let component = (await cb()).default;
        Object.assign(window.CoCreate, {
            [name]: component
        })
    }
    if (document.querySelector(selector))
        await cc()
    else
        imports[name] = { selector, cb };

}


export async function dependency(name, promise) {
    let module = await promise;
    Object.assign(window.CoCreate, {
        [name]: module.default
    })
}

observer.init({
    name: 'lazyloadObserver',
    observe: ['childList'],
    callback: function(mutation) {
        observerCallback(mutation.target)
    }
})
