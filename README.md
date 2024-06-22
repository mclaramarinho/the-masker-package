
# The Masker

This is an input masking package, and it was made with javascript. Works on both vanilla and framework projects.




## Get Started

Install my-project with [npm](https://www.npmjs.com/package/the-masker)

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

### Custom Mask - Usage
| Mask Character | Regex | Represents |
|----------------|-------|------------|
| 9 | [0-9] | Any digit |
| A | [A-Z] | Any uppercase letter |
| a | [a-z] | Any lowercase letter |

*Special characters and spaces are not replaced.
** The mask will be applied only on keyup fired on maskable inputs.

You need only to change the html you want to mask.

**Maskable inputs must:**
- be of type text
- contain the class "masked"
- contain attribute mask


##### Example:
```html
<input type="text" class="masked" mask="99/99/99">
```

*This input will accept only numbers.*

**User input**: 10122000

**Output**: 10/12/2000


##### Other Examples
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

### Template Mask - Usage
Use it the same way you would use the custom mask.
Add the class "masked" and type the mask name in the mask attribute.

| Mask name | Mask | Represents |
|----------------|-------|------------|
| **ID NUMBER** |
| cpf | 999.999.999-99 | Brazilian CPF |
| cnpj | 99.999.999/9999-99 | Brazilian CNPJ |
| **PHONE NUMBER** |
| phone-br | (99) 9999-9999 | Brazilian phone number |
| phone-br-i | +99 99 9999-9999 | International Format - Brazilian phone number |
| phone-us-i | +9 999 999-9999 | International Format - US phone number |
| phone-uk-i | +99 99 9999-9999 | International Format - UK phone number |
| phone-au-i | +99 9 9999-9999 | International Format - Australian phone number |
| phone-ca-i | +9 999 999-9999 | International Format - Canadian phone number |
| phone-it-i | +99 99 9999-9999 | International Format - Italian phone number |
| phone-in-i | +99 99999-99999 | International Format - India phone number |
| phone-fr-i | +99 99 99 99 99 99 | International Format - France phone number |
| phone-de-i | +99 99 99999999 | International Format - German phone number |
| phone-cn-i | +99 999 9999-9999 | International Format - China phone number |
| **ADDRESS** |
| cep | 99999-999 | Brazilian zip code number |
| zip-9 | 99999-9999 | 9-digit zip code number |
| zip-5 | 99999 | 5-digit zip code number |
| **DATE** |
| date | 99/99/9999 | Date |
| date-month | 99/99 | Date and Month format |
| month-year | 99/9999 | Month and Year format |
| year | 9999 | Year format |
| **TIME** |
| time | 99:99 | Time with hour and minute |
| datetime | 99/99/9999 99:99 | Date and Time |
| iso-datetime | 9999-99-99T99:99 | Iso datetime format |
| **CREDIT CARD** |
| credit-card | 9999 9999 9999 9999 | Credit card number format |
| cvv-3 | 999 | 3-digit CVV |
| cvv-4 | 9999 | 4-digit CVV |


#### Regex Mask - Usage
You'll need only regex knowledge to apply it directly on the HTML.

**IMPORTANT**
- Pass the regex without the delimiters //.
    E.g.: Instead of ```/[0-9]{0,5}/```, pass only ```[0-9]{0,5}```
- Regex here needs to be carefully handled, otherwise it will not work.
- Make sure to divide the regex in groups.
    - Example 1:
        You want an input of three letters only:
         - Normal regex: ```/[A-z]{3}/```
         - The Masker regex: ```([A-z]{1,3})```
         - Explanation: You need to allow at least one letter to match the group regex and the maximum will be 3.
         
    - Example 2:
        You want an input like this: 123 AB 567
        - Normal regex: ```/(\d{0,3})?(\s)?([A-Z]{2})?(\s)?(\d{4})?/```
        - The Masker regex: ```(\d{1,3})?(\s)?([A-Z]{1,2})?(\s)?(\d{1,4})?```
        - Explanation: It's important to determine the min and the max for each group of characters; instead of saying [A-Z] accepts up to 2 chars, you need to specify the min to 0 or 1, otherwise, the output will block further entries. This happens because the method checks each character typed and if it's not a match, it keeps returning the string with the correct format.

##### Example:
```html
<input type="text" class="masked" regex="(\d{0,3})?(\s)?([A-Z]{1}[A-Z]{0,1})?(\s)?(\d{1}\d{0,1}\d{0,1}\d{0,1})?">
```
*This input will accept numbers and uppercase letters.*

**User input**: 123AZ2121

**Output**: 123 AZ 2121


```html
<input type="text" class="masked" regex="([a-z]{1,3})?(_)?([a-z]{1,3})?(_)?([a-z]{1,3})?">
```
*This input will accept lowercase letters.*

**User input**: abcdefghi

**Output**: abc_def_ghi

## Feedback/Suggestions

If there are any bugs or if you would like to suggest an improvement, feel free to open an issue and I'll check it out asap.
## Roadmap

- Support regex masks

- Add pre-made templates to be called only by its name. 
Ex.: mask="phone-br-9"
is the same as
mask="(99) 9 9999-9999"

- Allow user to use any class they want instead of .masked

