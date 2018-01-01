

export default function patch(oldElement, newElement) {
    if (oldElement === false || oldElement === null || oldElement === undefined) {
        return newElement;
    }
    if (newElement === false || newElement === null || newElement === undefined) {
        return oldElement;
    }
    if (oldElement.tagName !== newElement.tagName) {
        oldElement.parentNode.replaceChild(newElement, oldElement);
        return newElement;
    }
    if (oldElement !== undefined) {
        for (let index = 0; index < newElement.attributes.length; index++) {
            const element = newElement.attributes[index];
            if (newElement.getAttribute(element.name) !== oldElement.getAttribute(element.name)) {
                oldElement.setAttribute(element.name, element.value);
            }
        }
        if (oldElement.tagName === "INPUT" && oldElement.value !== newElement.value) {
            oldElement.value = newElement.value;
        }
        if (oldElement.childNodes.length > newElement.childNodes.length) {
            for (let index = oldElement.childNodes.length - 1; index >= newElement.childNodes.length; index--) {
                oldElement.removeChild(oldElement.childNodes[index]);
            }    
        }
        oldElement.listeners = newElement.listeners;
        for (let index = newElement.childNodes.length - 1; index >= 0; index--) {
            const newE = newElement.childNodes[index];
            const oldE = oldElement.childNodes[index];
            if (oldE === undefined) {
                oldElement.appendChild(newE);
            } else if (newE === undefined) {
                oldElement.removeChild(oldE);
            } else if (newE.nodeType === 3) {
                if (oldE.data !== newE.data) {
                    oldE.data = newE.data;
                }
            } else {
                patch(oldE, newE);
            }
        }
        return oldElement;
    }
}