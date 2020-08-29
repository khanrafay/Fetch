// fetch('https://jsonplaceholder.typicode.com/todos/1')
//   .then(response => response.json())
//   .then(json => console.log(json))

 async function getData(){
       let data = await fetch('https://jsonplaceholder.typicode.com/todos/1');
      console.log(await data.json());
  }

getData();


fetch('https://jsonplaceholder.typicode.com/todos/1')
  .then(response => response.json())
  .then(json => console.log(json))

  
fetch('https://api.github.com/users/khanrafay/repos')
.then(response => response.json())
.then(json => console.log(json))

let promise = new Promise((resolve,reject) => {
  if(1 > 0)
    resolve('succ');
    else 
    reject('error');
})


promise.then(res => {
  console.log("success", res);
}).catch(rej =>{
  console.log('error', rej);
})
