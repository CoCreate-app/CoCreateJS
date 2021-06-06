const level = "all" // 'all', 'error', 'warn', 'log'
let compoentToLoad = ['builder', 'attribute'];

function logger(comName) {

    return {

        error: function(msg) {
            if (compoentToLoad.includes(comName))
                if (['all', 'error'].includes(level))
                    console.error(msg)
        },
        warn: function(msg) {
            if (compoentToLoad.includes(comName))
                if (['all', 'error', 'warn'].includes(level))
                    console.error(msg)
        },
        log: function(msg) {
            if (compoentToLoad.includes(comName))
                if (['all', 'error', 'warn', 'log'].includes(level))
                    console.log(msg)
        },
    }

}
