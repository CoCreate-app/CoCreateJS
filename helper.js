import observer from '../CoCreate-components/CoCreate-observer/src/index.js';

function listen(callback, selector) {

    function observerCallback() {
        callback()
        observer.remove(observerCallback)
    }

    observer.init({
        name: 'lazyloadObserver',
        observe: ['subtree', 'childList', 'attributes'],
        include: selector,
        callback: observerCallback
    })

    // todo: observer add attributes
}

export async function add(name, selector, cb) {
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


export async function addToCoCreate(name, promise){
    let module = await promise;
    Object.assign(window.CoCreate, {[name]:module.default})
}