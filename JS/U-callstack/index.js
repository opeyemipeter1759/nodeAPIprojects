// call stack
const repeat = ( str, times ) => {
    let result = ""
    for ( let i = 0; i < times; i++ ) {
        result += str
    }
    return result
}

const scream = ( str ) => {
    return str.toUpperCase() + "!!!"
}

const getRantText = ( phrase ) => {
    let text = scream( phrase )
    let rant = repeat( text, 8 )

    return rant
}

const makeRant = ( phrase, el ) => {
    const h1 = document.createElement( "h1" )
    h1.innerText = getRantText( phrase )
    el.appendChild( h1 )
}

makeRant( " Making a Rant about APC GOVT      ", document.body )
makeRant( " Making a Rant about APC GOVT      ", document.body )

// async, callbacks, 

console.log( "I got called first" )
setTimeout( () => console.log( "timer" ) )


//  Promises ;

const willGetADog = new Promise( ( resolve, reject ) => {
            const rand = Math.random()
            setTimeout( () => {
                if ( rand > 0.5)
                {
                    resolve()
                    console.log(rand)
                    
                } else {
                    reject()
                    console.log(rand)
                }
            }, 1000 )
} )
        
willGetADog.then( () => console.log( "I got a dog" ) )
willGetADog.catch( () => console.log( "I got no dog" ) )