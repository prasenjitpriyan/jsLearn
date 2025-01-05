let saveEl = document.getElementById('save-el')
let count = 0

// Increment button event listener
document.getElementById('increment').addEventListener('click', () => {
  count += 1
  document.getElementById('counter').textContent = count
})

// Save button event listener
document.getElementById('save').addEventListener('click', () => {
  let countStr = count + ' - '
  saveEl.textContent += countStr
  count = 0
  document.getElementById('counter').textContent = count
})
