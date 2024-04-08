export function dragElement(
    event,
    elements,
    setElements,
    setSingleActiveElement
) {
    const canvasElement = document.querySelector(".canvas");
    const element = event.target;
    let isDragging = false;

    const canvasLeft = canvasElement.offsetLeft;
    const canvasTop = canvasElement.offsetTop;

    function onMouseMove(event) {
        if (isDragging) {
            const x = event.clientX - canvasLeft;
            const y = event.clientY - canvasTop;

            const maxX = canvasElement.clientWidth - element.clientWidth;
            const maxY = canvasElement.clientHeight - element.clientHeight;

            const adjustedX = Math.min(Math.max(x, 0), maxX);
            const adjustedY = Math.min(Math.max(y, 0), maxY);

            const newTop = `${adjustedY}px`;
            const newLeft = `${adjustedX}px`;

            element.style.position = "absolute";
            element.style.left = newLeft;
            element.style.top = newTop;
            setSingleActiveElement((prevElement) => ({
                ...prevElement,
                left: newLeft,
                top: newTop,
            }));
            const updated = elements.map((originalElement) => {
                if (originalElement.id === element.id) {
                    return {
                        ...originalElement,
                        top: newTop,
                        left: newLeft,
                    };
                }
                return originalElement;
            });
            setElements(updated);
        }
    }

    function onMouseUp() {
        document.removeEventListener("mousemove", onMouseMove);
        document.removeEventListener("mouseup", onMouseUp);
        isDragging = false;
    }

    isDragging = true;
    document.addEventListener("mousemove", onMouseMove);
    document.addEventListener("mouseup", onMouseUp);
}
