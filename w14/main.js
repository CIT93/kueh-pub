// const url = 'http://worldtimeapi.org/api/timezone/America/New_York'

// async function getData(){
//     const response = await fetch(url)
//     const data = await response.json()
//     console.log(data)
// }

// getData()


// const url = 'http://api.spotify.com/v1/artists/0k17h0D3J5VfsdmQ1iZtE9'

// async function getData(){
//     const request = new Request(url, {
//         headers: {
//             'Authorization':'Bearer'
//         }
//     })
//     const response = await fetch(url)
//     const data = await response.json()
//     console.log(data)
// }

// getData()


const url = 'http://api.spotify.com/v1/artists/0k17h0D3J5VfsdmQ1iZtE9'

    const request = new Request(url, {
        headers: {
            'Authorization':'Bearer'
        }
    })
    
async function getData(){
    try{
        const response = await fetch(request)
        const data = await response.json()
        if(response.status === 200){
            console.log('Success', data)            
        }else{
            console.log('Server Error', data.error.message)
        }

    } catch(error){
        console.log('Error', error)
    }
}


getData()