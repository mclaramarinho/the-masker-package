import { maskValue } from "./lib/masker.js";
function applyMask(){
    const allMaskedInputs = document.querySelectorAll('input[type="text"].masked');

    allMaskedInputs.forEach(el => {
        el.addEventListener("keyup", ev => {
            const mask = el.getAttribute("mask");
            if(mask === null) return console.warn("Mask attribute is required if you add the \'masked\' class");
            if(mask.length === 0) return console.warn("Mask attribute can't be empty");
            

            const value = el.value;

            if(ev.key!=="Backspace"){
                const newValue = maskValue(mask, value);

                el.value = newValue;
                el.setAttribute('value', newValue);
            }

        })
    })
}

// exports.applyMask = applyMask]

applyMask();