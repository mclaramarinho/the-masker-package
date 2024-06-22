
export function verifyIfRegexOrMask(el){
    const mask = el.getAttribute("mask");
    const regex = el.getAttribute("regex");
    

    if(regex === null && mask === null) return "Mask or Regex attribute is required if you add the \'masked\' class";

    if(regex !== null && mask === null){
        if(regex.length === 0) return "Regex attribute can't be empty";
        return "regex";
    }

    if(regex === null && mask !== null){
        if(mask.length === 0) return "Mask attribute can't be empty";
        if(mask==="iso-datetime") return "regex-iso-datetime";
        return "mask";
    }

    if(regex !== null && mask !== null){
        return "You can't use both mask and regex attributes";
    }

    if(regex !== null && mask !== null) return "regex";
}
