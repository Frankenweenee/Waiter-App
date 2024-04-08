export function resizeElement(event, elements, setElements, setSingleActiveElement  ) {
    const canvasElement = document.querySelector(".canvas");
    const resizableDiv = event.target;
    let startX, startY, startWidth, startHeight;
    let newWidth, newHeight; 

    const rect = resizableDiv.getBoundingClientRect()

    startX = rect.right;
    startY = rect.bottom;

    startWidth = parseInt(
        document.defaultView.getComputedStyle(resizableDiv).width
    );

    startHeight = parseInt(
        document.defaultView.getComputedStyle(resizableDiv).height
    );

    document.addEventListener("mousemove", resize);
    document.addEventListener("mouseup", stopResize);

    function resize(event) {
        const canvasRect = canvasElement.getBoundingClientRect();
        const minWidth = 20;
        const minHeight = 20;

        newWidth = startWidth + (event.clientX - startX);
        newHeight = startHeight + (event.clientY - startY);

        if (newWidth + resizableDiv.offsetLeft > canvasRect.right) {
            newWidth = canvasRect.right - resizableDiv.offsetLeft;
        } else if (newWidth < minWidth) {
            newWidth = minWidth;
        }

        if (newHeight + resizableDiv.offsetTop > canvasRect.bottom) {
            newHeight = canvasRect.bottom - resizableDiv.offsetTop;
        } else if (newHeight < minHeight) {
            newHeight = minHeight;
        }
        
        resizableDiv.style.width = `${newWidth}px`;
        resizableDiv.style.height = `${newHeight}px`; 
        setSingleActiveElement(prevElement=> ({...prevElement, width:  `${newWidth}px`, height: `${newHeight}px`}))
        const updated = elements.map((originalElement) => {
            if (originalElement.id === resizableDiv.id) {
                return {
                    ...originalElement,
                    width:  `${newWidth}px`, 
                    height: `${newHeight}px`
                };
            }
            return originalElement;
        });
        setElements(updated); 
    }

    function stopResize() {
        document.removeEventListener("mousemove", resize);
        document.removeEventListener("mouseup", stopResize)
     
}
}
