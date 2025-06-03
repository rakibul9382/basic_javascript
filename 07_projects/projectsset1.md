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
```
# project 2
# solution code 

``` java script
const form = document.querySelector('form');

form.addEventListener('submit', function (e) {
  e.preventDefault();
  const height = parseInt(document.querySelector('#height').value);
  const weight = parseInt(document.querySelector('#weight').value);
  const result = document.querySelector('#results');
  if (height === '' || height < 0 || isNaN(height)) {
    result.innerHTML = 'plaese give a valid height ';
  } else if (weight === '' || weight < 0 || isNaN(weight)) {
    result.innerHTML = 'plaese give a valid weight ';
  } else {
    const BMI = (weight / ((height * height) / 10000)).toFixed(2);
    //show the result
    let bmivalue = parseFloat(BMI); //  convert string to float
    let message = '';
    if (bmivalue < 18.6) {
      message = 'under weight';
    } else if (bmivalue > 18.6 && bmivalue < 24.9) {
      message = 'normal weight';
    } else {
      message = 'over weight weight';
    }
    result.innerHTML = `<span>${BMI}- ${message}</span>`;
  }
})
  ```