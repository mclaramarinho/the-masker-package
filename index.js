import { maskValue, maskWithRegex } from "./lib/masker.js";
import { verifyIfRegexOrMask } from "./lib/verifyAttributes.js";

function applyMask(){
    const allMaskedInputs = document.querySelectorAll('input[type="text"].masked');

    allMaskedInputs.forEach(el => {
        el.addEventListener("keyup", ev => {
            if(ev.key!=="Backspace"){

                const maskOrRegex = verifyIfRegexOrMask(el);

                if(maskOrRegex !== "mask" && maskOrRegex !== "regex"){
                    console.warn(maskOrRegex);
                    return;
                }

                let newValue = "";
                const value = el.value;
                if(maskOrRegex === "mask"){
                    const mask = el.getAttribute("mask");
                    newValue = maskValue(mask, value);
                }else{
                    const regex = el.getAttribute("regex");
                    newValue = maskWithRegex(regex, value);
                }


                el.value = newValue;
                el.setAttribute('value', newValue);
            }
        })
    })
}

exports.applyMask = applyMask;