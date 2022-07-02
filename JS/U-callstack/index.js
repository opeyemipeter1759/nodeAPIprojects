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

// console.log( "I got called first" )
setTimeout( () =>
{
    // console.log( "timer" )
}
)


//  Promises ;

const willGetADogPromise = () => {
 return  new Promise( ( resolve, reject ) => {
        const rand = Math.random()
        setTimeout( () => {
            if ( rand > 0.5 ) {
                resolve()
            } else {
                reject()
            }
        }, 1000 )
    } )
}

willGetADogPromise()
    .then( () => console.log( "I got a dog" ) )
    .catch( () => console.log( "I got no dog" ) )

const fakeRequest = ( url ) => {
    return new Promise( ( resolve, reject ) =>
    {
        setTimeout( () =>
        {
            const rand = Math.random()
            if ( rand > 0.3 )
            {
                resolve( {
                    status: 200
                })
            }
             else {
                reject( {
                    status: 404
                 })
             }
        }, 1000)
    })
}

fakeRequest()
    .then( (res) => console.log( "I got a response",  res.status ) )
    .catch( (res) => console.log( "I got no response", res.status ) )