document.getElementById('add').addEventListener('click', addToList);
document.getElementById('numberInput').addEventListener('submit', addToList);
document.getElementById('reset').addEventListener('click', resetAll);
let list = [];
let UIList = [];

function addToList(){
  // Selectors
  const input = document.getElementById('numberInput')
  const outputList = document.getElementById('list');
  const UItotal = document.getElementById('total');
  const UIMean = document.getElementById('mean')
  
  // Input number into list
  list.push(parseFloat(input.value))

  const li = document.createElement('span');
  li.className = 'list-item';
  li.appendChild(document.createTextNode(`${input.value} `))
  outputList.appendChild(li);


  // outputList.innerText = `${list}`;
  
  // UIlist.push(` ${input.value}`)

  //Output the sum
  let sum = list.reduce((a, b) => a + b, 0)
  UItotal.innerText = `Total: ${sum}`;

  //Output the mean
  UIMean.innerText = `Mean: ${(sum / list.length).toFixed(2) }`

  //
  getMode(list);
  getMedian(list)
  
  input.value = '';
}

const getMedian = arr => {
  const UIMedian = document.getElementById('median')
  const mid = Math.floor(arr.length / 2),
  nums = [...arr].sort((a, b) => a - b);
  median = arr.length % 2 !== 0 ? nums[mid] : (nums[mid - 1] + nums[mid]) / 2;
  UIMedian.innerText = `Median: ${median}`
};

function getMode(arr) {
  const UIMode = document.getElementById('mode');
  var freq = {}
  
  for (item of arr) {
    freq[item] ? freq[item]++ : freq[item] = 1
  }  
  
  var compare = 0
  var mode
  
  for (item in freq) {
    if (freq[item] > compare) {
      compare = freq[item]
      mode = item
    }
  }
  UIMode.innerText = `Mode: ${parseInt(mode)}`;
}


function resetAll(){
  const UIMean = document.getElementById('mean')
  const UIMedian = document.getElementById('median')
  const UIMode = document.getElementById('mode')
  const outputList = document.querySelector('.total');
  const UItotal = document.getElementById('total');
  console.log('John')
  list = [];
  outputList.innerText = '';
  UItotal.innerText = `Total:`;
  UIList = [];
  UIMean.innerText = `Mean: `
  UIMedian.innerText = `Median:`
  UIMode.innerText = `Mode:`

}

