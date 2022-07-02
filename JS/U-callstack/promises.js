const fakeRequest = ( url ) => {
    return new Promise( ( resolve, reject ) => {
        setTimeout( () =>
        {
            const pages = {
                "/users": [
                    { id: 1, name: "John" },
                    { id: 2, name: "Sara" },
                    { id: 3, name: "Bill" }
                ],
                "/about": "About page",
            }
            const data = pages[url]
            resolve( {
                    status: 200, data
                } )
                reject( {
                    status: 404
                } )
        }, 1000 )
    } )
}

fakeRequest("/users")
    .then( ( res ) =>
    {
        console.log("status code :", res.status )
        console.log(  res.data )

    } )
    .catch( ( res ) => console.log( "status code :", res.status ) )

    fakeRequest( "/about" )
        .then( ( res ) => {
            console.log( "status code :", res.status )
            console.log( res.data )

        } )
        .catch( ( res ) => console.log( "status code :", res.status ) )