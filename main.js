

const loadData = ()=>{

  fetch("https://jsonplaceholder.typicode.com/posts")
  .then(res => res.json())
  .then(data => displayPost(data))
}

const displayPost = (data) =>{
    const container = document.getElementById('container');
    container.innerHTML =""
    data.map(element => {
        
        
        const li = document.createElement('li');

        li.innerText = element.title;
        li.classList.add("list")
        container.appendChild(li);
    })
}
