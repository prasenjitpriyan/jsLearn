## JavaScript Can Change HTML Attribute Values

This example demonstrates how JavaScript can dynamically change the attribute values of HTML elements, such as modifying the `src` attribute of an image. The code showcases a simple implementation where two buttons allow users to switch between two different images by updating the `src` attribute of an `<img>` element.

---

### 🚀 **Features**

- Dynamically updates the `src` attribute of an image using JavaScript.
- Provides interactive buttons to navigate between two image states.
- Includes a visually appealing user interface with styled buttons.
- Logs the changes to the console for better debugging and learning.

---

### 🖼️ **Code Examples**

#### **HTML**

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <link rel="stylesheet" href="./style.css" />
    <title>Introduction</title>
  </head>

  <body>
    <div class="src">
      <img
        id="logo"
        class="logo"
        src="./assets/images/javascript1.svg"
        alt="logo"
      />
      <button onclick="previous()">Go to Previous</button>
      <button onclick="next()">Go to Next</button>
    </div>
    <script src="./script.js"></script>
  </body>
</html>
```

#### **JavaScript**

```javascript
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
```

#### **CSS**

```css
body {
  background-color: cadetblue;
  min-height: 100vh;
  width: 100vw;
  margin: 0;
  padding: 0;
  color: black;
  display: flex;
  align-items: center;
  justify-content: center;
}

.src {
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.logo {
  width: 250px;
  height: auto;
  margin-bottom: 20px;
}

button {
  background-color: #323330;
  color: white;
  padding: 10px 25px;
  margin: 5px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  width: 150px;
}

button:hover {
  background-color: #61dbfb;
  color: black;
}
```

---

### ✨ **How It Works**

1. **HTML**:

   - A `<div>` contains an image (`<img>`) and two buttons.
   - Buttons are linked to JavaScript functions via `onclick` attributes.

2. **JavaScript**:

   - The `previous()` and `next()` functions change the `src` attribute of the `<img>` element.
   - The `logoElement.src.endsWith()` method checks the current image source and updates it accordingly.
   - Console logs provide feedback about the changes.

3. **CSS**:
   - The layout centers the content with Flexbox.
   - Buttons are styled for an intuitive and modern user experience.

---

### 🎯 **Use Cases**

- Switching themes, logos, or icons dynamically.
- Interactive image galleries.
- Any scenario requiring real-time updates to HTML attributes.

---

### 📝 **Notes**

- Ensure that the image paths provided in the JavaScript are valid and relative to your project structure.
- Use appropriate fallback mechanisms or error handling for broken or missing images.
- Experiment with additional attributes (e.g., `alt`, `title`, `class`) to extend functionality.

---

# 🔍 JavaScript Statements vs. Expressions

In JavaScript, **statements** and **expressions** are two fundamental building blocks of code. While they may seem similar, they serve different purposes. Here's a detailed breakdown:

---

## ✨ **1. JavaScript Expressions**

An **expression** is any valid unit of code that produces a value.

### **Key Characteristics**:

- ✅ Always evaluates to a value.
- ✅ Can be used wherever a value is expected (e.g., in assignments or function arguments).
- ✅ Examples include literals, variables, or combinations of operators and function calls.

### **Examples**:

```javascript
5 + 10 // Expression that evaluates to 15
'Hello' + 'World' // Expression that evaluates to "HelloWorld"
Math.max(3, 7) // Expression that evaluates to 7
```

### **Usage in Code**:

```javascript
let result = 5 + 10 // Expression used in an assignment
console.log('Hello' + 'World') // Expression passed as an argument
```

---

## ✨ **2. JavaScript Statements**

A **statement** is a piece of code that performs an action. It often contains expressions but does not always produce a value directly.

### **Key Characteristics**:

- 📜 Describes a task or action.
- 📜 Typically ends with a semicolon (`;`), though it's optional in some cases.
- 📜 Examples include variable declarations, loops, conditionals, and function calls.

### **Examples**:

```javascript
let x = 10 // Declaration statement
if (x > 5) {
  // If statement
  console.log(x) // Expression as part of a statement
}
```

### **Usage in Code**:

```javascript
let age = 25 // Statement
if (age > 18) {
  console.log('Adult') // Statement containing an expression
}
```

---

## 🔑 **Key Differences**

| **Feature**        | **Expression**                            | **Statement**                        |
| ------------------ | ----------------------------------------- | ------------------------------------ |
| **Definition**     | Produces a value.                         | Performs an action.                  |
| **Example**        | `5 + 10`, `"Hello" + "World"`.            | `let x = 10;`, `if (x > 5) { ... }`. |
| **Standalone Use** | Can be used as part of another statement. | Often forms a complete unit of code. |
| **Evaluation**     | Always evaluates to a value.              | May or may not include expressions.  |

---

## 🔗 **Relationship Between the Two**

- **Expressions** can be part of a **statement**:
  ```javascript
  let total = 5 + 10 // `5 + 10` is an expression within the assignment statement.
  ```
- Some constructs, like function calls, can act as both expressions and statements:
  ```javascript
  console.log('Hello') // Statement
  ;('Hello') // Expression
  ```

---

## 💡 Conclusion

Understanding when to use statements or expressions will help you write more efficient and structured JavaScript code!

---
