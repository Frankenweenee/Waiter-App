export const createNewElement = (
    typeElement,
    elImage,
    bgColor,
    tableNumber,
    elements,
    setElements,
    setSingleActiveElement
) => {
    const id = `element-${elements.length + 1}`;
    const newElement = {
        id,
        typeElement: typeElement,
        width: "60px",
        height: "60px",
        image: elImage,
        bgColor: bgColor,
        position: "absolute",
        top: "0px",
        left: "0px",
        tableNumber: tableNumber,
    };
    setElements((prevElements) => [...prevElements, newElement]);
    setSingleActiveElement(newElement)
};