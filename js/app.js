
const num = document.querySelector('#title')
const text = document.querySelector('#text')
const bottom = document.querySelector('.bottom_img')


// const getAdvice = () =>{

//     const abs = new XMLHttpRequest()

//     abs.open('GET', 'https://api.adviceslip.com/advice')

//     abs.send()


//     abs.addEventListener('readystatechange', () =>{
//         if(abs.status === 200 && abs.readyState === 4){
//             const response = JSON.parse(abs.response)
//             title.innerText = response.slip.id
//             text.innerText = response.slip.advice;
//         }
//     })

// }

// getAdvice()

// bottom.addEventListener('click', () =>{
//     getAdvice()
// })

// let request = new XMLHttpRequest()
// request.open()
bottom.addEventListener('click', getInfo)
function getInfo(){
    fetch('https://api.adviceslip.com/advice')
    .then(res => res.json())
    .then(data => {title.innerHTML = data.slip.id
            text.innerHTML = data.slip.advice})
    .catch(er => main.innerText = "Ma'lumot kiritilmagan")
}

// getInfo()

















// // let abs = new XMLHttpRequest()

// // abs.open('GET', 'https://api.adviceslip.com/advice')

// // abs.setRequestHeader("Content_type", "application/json")

// // abs.send() 


// // abs.addEventListener('readystatechange', () =>{
// //     if(abs.status === 200 && abs.readyState === 4){
// //     console.log(JSON.parse(abs.response));
// //     }
// // })

 


// // bottom.addEventListener('click', () =>{
// //     say()
// // })
// // const say = async () =>{

// //     const res = await fetch ('https://api.adviceslip.com/advice')
// //     const data = await res.json()

// //     // console.log(data);

// //     document.getElementById('title').innerHTML = `${data.slip.id}`
// //     document.getElementById('text').innerHTML = `${data.slip.advice}`


// // }

// // say()

// let str = 'aka'


// let str = +prompt('malumot kiriting')

// let str = +prompt('malumot kirit')





function argument(str){
    return new Promise((resolve, reject)=>{
        if(str !== '' && str !== undefined){
            return resolve(str)
        }else{
            return reject('argument kiritmadiz')
        }
    })
}



(argument('Open Web')).then((str)=>{
    console.log(str);

    return str
}).then((str2)=>{
    let abs = str2.slice(2)
    console.log(abs);
    return abs
}).then((str3)=>{
    let arr = str3.slice(2)
    console.log(arr);
}).catch((str)=>{
    console.log(str);
})








// );
// let prom = new Promise ((str) =>{
    
//     setInterval(()=>{
//         str('Open Web')
//     },2000)
// })

// prom.then((arr)=>{
//     console.log(arr);

//     return new Promise((str)=>{
//         setTimeout(()=>{
//             str('Open Web')
//         },1000)
//     })
    
// }).then((result2)=>{
//     for(let i = 0; i < result2.length; i++){
//         let ss = result2.slice(2, )
//         console.log(ss);
//     }

//     return new Promise((str)=>{
//         setTimeout(()=>{
//             str('Open Web')
//         },1000)
//     }).then((result3)=>{
//         for(let i = 0; i < result3.length; i++){
//         let dd = result3.slice(4, )
//         console.log(dd);
//     }

//     })
//     .catch((error)=> {
//         console.log('Siz argument kiritmadiz')
//     });
// })

// for(let i = 0; i < arr.length; i++){
//         let ss = arr.slice(2, )
//         console.log(ss);
//     }




