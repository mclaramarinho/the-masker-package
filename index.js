import { maskValue } from "./lib/masker.js";
function applyMask(){
    const allMaskedInputs = document.querySelectorAll(".masked");

    allMaskedInputs.forEach(el => {
        el.addEventListener("keyup", ev => {
            const mask = el.getAttribute("mask");
            const value = el.value;

            if(ev.key!=="Backspace"){
                const newValue = maskValue(mask, value);
                
                el.value = newValue;
                el.setAttribute('value', newValue);
            }

        })
    })
}

exports.applyMask = applyMask