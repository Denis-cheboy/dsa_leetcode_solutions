let promise=new Promise((resolve,reject)=>{
    let condition=true

    setTimeout(()=>{
        if(condition){
          resolve("Promised Resolved")
        }
        else{
            reject("Promise rejected")
        }
    },1000)
})
// promise.then((value)=>console.log(value)).catch((err)=>console.log(err))

// another way

const resolveAfter2Seconds=()=>{
    return new Promise(()=>{
        setTimeout(()=>{
            resolve("resolved")
        },2000)
    })
}
async function asyncCall(){
    console.log("calling")
    const res=await resolveAfter2Seconds()
    console.log(result)
}

// anotheer way 

async function asyncCall1(millis){
    await new Promise(resolve=>setTimeout(resolve("resolved 2"),millis))
}

// returns undefined since it doesnt have any return keyword

asyncCall1(2000).then((value)=>console.log(value)).catch(err=>console.log(err))