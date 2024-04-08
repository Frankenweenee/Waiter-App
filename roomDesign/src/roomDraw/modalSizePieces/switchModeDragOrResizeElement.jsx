export function switchModeDragOrResizeElement (
    switchModeDragOrResize,
 
) {
    let actualswitchModeDragOrResize;

    if (switchModeDragOrResize === "drag") {
        actualswitchModeDragOrResize = "mover";
       
    } else if (switchModeDragOrResize === "resize") {
        actualswitchModeDragOrResize = "redimensionar";
    } else {
        actualswitchModeDragOrResize = "off";
    }
};