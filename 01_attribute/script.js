// Initialize image paths
const logoOnePath = './assets/images/javascript1.svg'
const logoTwoPath = './assets/images/javascript2.svg'

// Cache DOM elements
const logoElement = document.getElementById('logo')

// Define functions
const previous = () => {
  if (logoElement.src.endsWith('javascript2.svg')) {
    logoElement.src = logoOnePath
    console.log('Switched to logo one (Yellow)')
  } else {
    console.log('Already at logo one (Yellow)')
  }
}

const next = () => {
  if (logoElement.src.endsWith('javascript1.svg')) {
    logoElement.src = logoTwoPath
    console.log('Switched to logo two (White)')
  } else {
    console.log('Already at logo two (White)')
  }
}
