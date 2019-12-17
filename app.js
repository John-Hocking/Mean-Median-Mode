document.getElementById('add').addEventListener('click', addToList);
let list = [];


function addToList(){
  // Selectors
  const input = document.getElementById('numberInput')
  const outputList = document.querySelector('.total');
  const UItotal = document.getElementById('total');
  const UIMean = document.getElementById('mean');
  const UIMode = document.getElementById('mode');
  const UIMedian = document.getElementById('median')

  // Input number into list
  list.push(parseFloat(input.value))
  outputList.innerText = `${list}`;
  let sum = list.reduce((a, b) => a + b, 0)
  UItotal.innerText = `Total: ${sum}`;
  UIMean.innerText = `Mean: ${Math.round(sum / list.length)}`
  console.log(sum / list.length)
  

  input.value = '';

}
