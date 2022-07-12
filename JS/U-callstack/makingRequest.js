axios.get( 'https://swapi.dev/api/planets' ).then( ( response ) =>
{
    console.log(response.data.results[0].name)
} ).catch( ( e ) =>
{

    console.log(e)
})