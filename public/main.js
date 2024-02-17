const btn = document.querySelector('button')

// const clickHandler = () => alert('The cat name is: Rascal') //no server

//server
const clickHandler = () => {
    axios.get('http://localhost:4000/api/cat')
    .then(res => alert(res.data))
    .catch(err => console.log(err));
}

btn.addEventListener('click', clickHandler)