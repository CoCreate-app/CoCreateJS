import observer from '@cocreate/observer';

function listen(callback, selector) {

    function observerCallback({ target }) {
        if (target.matches && target.matches(selector)) {
            callback()
            observer.uninit(observerCallback)
        }
    }

    observer.init({
        name: 'lazyloadObserver',
        observe: ['addedNodes', 'attributes'],
        callback: observerCallback
    })

    // todo: observer add attributes
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
