# DOM projects
## project link

[click here](https://stackblitz.com/edit/dom-project-chaiaurcode?file=index.html)

# solution code

# projecte 1
```java script
const selectButton = document.querySelectorAll('.button');
const body = document.querySelector('body')

selectButton.forEach(function(button){
  button.addEventListener('click',function(e){
    console.log(e.target);
    if(e.target.id ==='grey'){
      body.style.backgroundColor = e.target.id;
    }
    else if(e.target.id==='white'){
      body.style.backgroundColor = e.target.id;
    }
    else if(e.target.id==='blue'){
      body.style.backgroundColor = e.target.id;
    }
    else if(e.target.id==='yellow'){
      body.style.backgroundColor = 'yellow';
    }
  })
})
