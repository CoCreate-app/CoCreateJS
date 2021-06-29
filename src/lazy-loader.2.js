import observer from '@cocreate/observer';

function listen(callback, selector) {

    function observerCallback({ target }) {
        let isInit = target.querySelector(selector)
        if (isInit) {
            callback()
            console.log('lazyloaded', selector)
            observer.uninit(observerCallback)
        }
    }

    observer.init({
        name: 'lazyloadObserver',
        observe: ['addedNodes'],
        // attributeFilter: selector,
        classFilter: ['test'], // only works for attributes but some of our components use class... if we update to target.atributes.value contains test 
        callback: observerCallback
    })

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
        listen(cc, selector)

}


export async function dependency(name, promise) {
    let module = await promise;
    Object.assign(window.CoCreate, {
        [name]: module.default
    })
}
