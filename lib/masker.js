import * as reg from "./regex.js";
import { templateMasks } from "./templateMasks.js";

// 9 = decimal
// A = uppercase letter
// a = lowercase letter
// / \ ! @ # $ % & ( ) - = + 
export function maskValue(mask, value){

    if(templateMasks[mask] !== undefined){
        mask = templateMasks[mask];
    }

    const maskLength = mask.length;
    const prevValue = value.substring(0, value.length-1);
    
    if(value.length > maskLength){
        return prevValue;
    }
    
    const [maskArr, valueArr] = [Array.from(mask), Array.from(value)];

    let maskedValue = "";
   
    const updateMaskedValue = (conditional, char) => {
        if(conditional === true){
            maskedValue += char;
        }
    }

    let prevWasSpecial = false;

    maskArr.forEach((c, i) => {
        
        if(prevWasSpecial && valueArr[i] === undefined && valueArr[i-1]!==undefined){
            updateMaskedValue(true, valueArr[i-1]);
            return maskedValue;
        }else if(valueArr[i] === undefined){
            return maskedValue;
        }

        if(reg.specialCharacterRegex.test(c)){
            updateMaskedValue(true, c);
            prevWasSpecial = true;
        }else{
            if(c === "9"){
                const match = reg.decimalRegex.test(valueArr[i]);
                updateMaskedValue(match, valueArr[i]);
            }else if(c === "A"){
                const match = reg.uppercaseRegex.test(valueArr[i]);
                updateMaskedValue(match, valueArr[i]);
            }else if(c === "a"){
                const match = reg.lowercaseRegex.test(valueArr[i]);
                updateMaskedValue(match, valueArr[i]);
            }
            prevWasSpecial = false;

        }
    })

    return maskedValue;
}


export function maskWithRegex(regex, input){
    regex = new RegExp(regex);
    let regexGroups = regex.toString().split(/[()?/]/).filter(item => item !== "");
    regexGroups = regexGroups.map(g => {
        return g.replace("\\s", " ");
    })


    const result = input.match(regex)
    const nGroups = result.length-1

    let fString = "";
    for(let i=1; i<=nGroups;i++){
        if(result[i] === undefined){
            if(regexGroups[i-1].length === 1 
                && (reg.specialCharacterRegex.test(regexGroups[i-1]) || reg.decimalRegex.test(regexGroups[i-1])
                    || reg.uppercaseRegex.test(regexGroups[i-1]) || reg.lowercaseRegex.test(regexGroups[i-1]))
                && (result[i+1] !== undefined || i === nGroups)){
                fString += regexGroups[i-1];
            }else{
                break;
            }
            continue;
        }
        
        fString += result[i];
    }

    return fString;
}