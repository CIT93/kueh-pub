// function getDate(){
//     return new Promise(resolve => {
//         setTimeout(()=>{
//             resolve(46)
//         }, 1)
//     })
// }


// async function start(){
//     const result = await getDate()
// console.log(result)
// }

// async function start2(){
//     getDate()
//     .then( result => {
//         console.log(result)
//     })
// }

// async function start(){
//     const data = await fetch('https://api.weather.gov/gridpoints/OKX/35,35/forecast')
//     const result = await data.json()
//     console.log(result.properties.periods[1].shortForecast)
// }

// async function start2(){
//     fetch('https://api.weather.gov/gridpoints/OKX/35,35/forecast')
//     .then(data => data.json() )
//     .then(result => {
//         console.log(result.properties.periods[1].shortForecast)
//     })
// }

// start()
// start2()



// function getDate(){
//     return new Promise(function(resolve, reject){
//         setTimeout(()=> {
//             resolve(`here is your data!`)
//             // reject(`Something went wrong!`)
//         }, 1)
//     })
// }

// function onSuccess(){

// }

// function onFailure(){

// }

// async function start(){
//     try {
//         const result = await getData()
//         onSuccess() 
//     } catch (error){
//         onFailure
//     }
// }

// start()

// async function start2(){
//         const result = await getData()
//         .catch(error => {
//             console.log(`ERROR: ${error}`)
//         })  
// }
// console.log(result)

// start2()

async function start(){
    try{
        const data = await fetch('https://api.weather.gov/gridpoints/OKX/35,35/forecast')
        const result = await data.json();
        onSuccess(result.properties.periods[1].shortForecast);
    } catch(e){
        onerror(e);
    }

    
}


function onSuccess(result){
    console.log(`Success: ${result}`)
}

function onFailure(){
    console.log(`Error: ${err}`)
}

start()