export function updateValuesActualElement(event, updatedElement, setElements) {
    event.preventDefault();
    console.log(updatedElement)
    setElements((prevElements) => {
        return prevElements.map((element) => {
            if (element.id === updatedElement.id) {
                return {
                    ...element,
                    // Aquí puedes agregar las propiedades actualizadas del elemento
                };
            }
            return element;
        });
    });
}
