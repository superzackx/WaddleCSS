# WaddleCSS

A easy to use framework for making good looking websites. Support us by starring this repo!

## Usage

To use WaddleCSS, firstly download all the code or simply use the link and script tags!
```html
<link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/superzackx/WaddleCSS.V2@latest/app.css">
<script src="https://cdn.jsdelivr.net/gh/superzackx/WaddleCSS.V2@latest/script.js"></script>
```

## Docs

### 1. Buttons

Buttons are a big part of WaddleCSS, there are different color buttons such as
 ```html
 <button class="btn-primary">
 <button class="btn-olive">
 ```

 ![Example](https://github.com/superzackx/WaddleCSS.V2/blob/main/asset/btn.png)
 
 ### 2. Accordions
 
 Good old accordions which are easy to use and interact with.
 ```html
 <button class="accordion">Section 1</button>
<div class="panel">
  <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
</div>

<button class="accordion">Section 2</button>
<div class="panel">
  <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
</div>

<button class="accordion">Section 3</button>
<div class="panel">
  <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
</div>
 ```
 ![Example](https://github.com/superzackx/WaddleCSS.V2/blob/main/asset/acc.png)
 
### 3. Navbar

Ah, a navbar. Responsive navbars are always useful. Example below:

```html
    <nav>
        <input id="nav-toggle" type="checkbox">
        <div class="logo">EXAMPLE<strong>NAV</strong></div>
        <ul class="links">
            <li><a href="#home">Home</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#work">Work</a></li>
            <li><a href="#projects">Projects</a></li>
            <li><a href="#contact">Contact</a></li>
        </ul>
        <label for="nav-toggle" class="icon-burger">
            <div class="line"></div>
            <div class="line"></div>
            <div class="line"></div>
        </label>
    </nav>
    <br>
    <br>
    <br> --- Add these! Very important
```

![Example](https://github.com/superzackx/WaddleCSS.V2/blob/main/asset/nav.png)

### 4. Grid System

Our framework uses a 12 grid system. For making a coloum row, do this:
```html
<div class="row">
  <div class="col col-4">
    <h1>Hello!</h1>
  </div>
    <div class="col col-4">
    <h1>Hello There!</h1>
  </div>
    <div class="col col-4">
    <h1>Hello!</h1>
  </div>
</div>
```
![Example](https://github.com/superzackx/WaddleCSS.V2/blob/main/asset/grid.png)

## 5. Forms
These forms are WaddleCSS Forms. They have a nice swoosh to it!
So this is a form without our Strength class
```html
        <main>
            <form>
                <div class="field">
                    <input type="email" name="email" class = "input" />
                    <label for="email" class="label">Email</label>
                </div>
                <div class="field">
                    <input type="password" name="password" class= "input" />
                    <label for="password" class="label">Password</label>
                </div>
                <!--        
                    Below is the strength
                        
                    <div class="strength">
                        <span class = "bar bar-1"></span>
                        <span class = "bar bar-2"></span>
                        <span class = "bar bar-3"></span>
                        <span class = "bar bar-4"></span>
                    </div>
                    
                    <ul>
                        <li>must be at least 5 characters</li>
                        <li>must contain a capital</li>
                        <li>must contain a number</li>
                    </ul>
                -->
            </form>
        </main>
```
If you would like to add the strength then simply uncomment what I did. 
For showing the strength you would need some javascript:
```js
let strength = 0;
let validations = []; 
            
function validatePassword(e) {
    const password = e.target.value;
    validations = [
        (password.length > 5), // use regex
        (password.search(/[A-Z]/) > -1), // now simply searching for cap letters
        (password.search(/[0-9]/) > -1), // searching for numbers
    ]
    return validations; 
}
```
### 6. Alert Boxes

Alert boxes are dismissable and require minimal JavaScript.
```html
  <div class="alert-teal">
    <span class="closebtn" onclick="this.parentElement.style.display='none';">&times;</span>
    <h1 class="alert-title">Hello there</h1>
    <p class="alert-des">Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo id architecto deleniti, labore facilis amet possimus porro asperiores laborum praesentium doloribus, molestiae voluptatibus sed consectetur odio neque saepe ratione blanditiis.</p>
  </div>
```

## File Tree
```
Main
 - � __Beta__
     - � [README.MD](Beta/README.MD)
     - � __forms__
       - � [forms.css](Beta/forms/forms.css)
       - � [index.html](Beta/forms/index.html)
       - � [strength.js](Beta/forms/strength.js)
   - � [README.md](README.md)
   - � [app.css](app.css)
   - � __asset__
     - � [acc.png](asset/acc.png)
     - � [btn.png](asset/btn.png)
     - � [grid.png](asset/grid.png)
     - � [main.png](asset/main.png)
     - � [nav.png](asset/nav.png)
   - � [index.html](index.html)
   - � [main.html](main.html)
   - � [node\_modules](node_modules)
   - � [package\-lock.json](package-lock.json)
   - � [package.json](package.json)
   - � [script.js](script.js)
```

## Credits
1. <b>Superzackx</b>
2. <b>NightZan999</b>
