
# The Masker

This is an input masking package, and it was made with javascript. Works on both vanilla and framework projects.




## Get Started

Install my-project with npm

```bash
  npm install the-masker
```

To use it, import it on your entry point .js/.ts file.

```js
    import {applyMask} from "the-masker";
    // if you render anything via js, render it before executing the next line
    applyMask();
```


    
## Documentation

| Mask Character | Regex | Represents |
|----------------|-------|------------|
| 9 | [0-9] | Any digit |
| A | [A-Z] | Any uppercase letter |
| a | [a-z] | Any lowercase letter |

*Special characters and spaces are not replaced.


### Usage
You need only to change the html you want to mask.

** The mask will be applied only on keyup fired on maskable inputs.


**Maskable inputs must:**
- be of type text
- contain the class "masked"
- contain attribute mask


#### Example:
```html
<input type="text" class="masked" mask="99/99/99">
```

*This input will accept only numbers.*

**User input**: 10122000

**Output**: 10/12/2000


#### Other Examples
- Mixed digits, uppercase, lowercase and special characters
```html
<input type="text" class="masked" mask="99-AA-9a">
```

- Brazilian phone number
```html
<input type="text" class="masked" mask="(99) 9 9999-9999">
```

- Credit card number
```html
<input type="text" class="masked" mask="9999 9999 9999 9999">
```
## Feedback/Suggestions

If there are any bugs or if you would like to suggest an improvement, feel free to open an issue and I'll check it out asap.
## Roadmap

- Support regex masks

- Add pre-made templates to be called only by its name. 
Ex.: mask="phone-br-9"
is the same as
mask="(99) 9 9999-9999"

- Allow user to use any class they want instead of .masked

