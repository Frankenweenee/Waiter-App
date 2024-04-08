import React, { useState } from "react";
import "./roomDraw.style.css";
import { createNewElement } from "./modalSizePieces/createNewElement";
import { mainElementButtons } from "./modalSizePieces/mainElementButtons";
import { resizeElement } from "./modalSizePieces/resizeElement";
import { dragElement } from "./modalSizePieces/dragElement";
import { updateValuesActualElement } from "./modalSizePieces/updateValuesActualElement";
import usuario_1 from "./modalSizePieces/images/usuario_1.svg";

const userName = "Pedro";

const handleMouseDown = (switchModeDragOrResize, event, elements, setElements, setSingleActiveElement) => {
    if (switchModeDragOrResize === "cambiar tamaño") {
        resizeElement(event, elements, setElements, setSingleActiveElement);
    } else if (switchModeDragOrResize === "mover") {
        dragElement(event, elements, setElements,  setSingleActiveElement);
    }
};

export const RoomDraw = () => {
    const [elements, setElements] = useState([]);
    const [singleActiveElement, setSingleActiveElement] = useState([]);
    const [switchModeDragOrResize, setswitchModeDragOrResize] = useState("");
    console.log(singleActiveElement)
    return (
        <div className="main-room-container">
            <div className="elements-button-container">
                {mainElementButtons.map((button, index) => {
                    return (
                        <div key={index}>
                            <button
                                className="create-element-button"
                                onClick={() =>
                                    createNewElement(
                                        button.typeElement,
                                        button.bgImage,
                                        button.bgColor,
                                        button.tableNumber,
                                        elements,
                                        setElements,
                                        setSingleActiveElement
                                    )
                                }
                                style={{
                                    backgroundImage: button.bgImage,
                                    backgroundColor: button.bgColor,
                                    backgroundRepeat: "no-repeat",
                                    height:
                                        button.typeElement === "Silla"
                                            ? "60px"
                                            : "50px",
                                    border:
                                        button.typeElement === "Muro" ||
                                        button.typeElement === "Barra"
                                            ? "black 1px solid"
                                            : "",
                                    borderRadius:
                                        button.typeElement === "Muro" ||
                                        button.typeElement === "Barra"
                                            ? "10px"
                                            : "",
                                }}></button>
                            <p>{button.typeElement}</p>
                        </div>
                    );
                })}
            </div>
            <div className="elements-aside-controls-container">
                <div className="canvas">
                    {elements.map((element) => (
                        <div
                            key={element.id}
                            id={element.id}
                            style={{
                                width: element.width,
                                height: element.height,
                                backgroundImage: element.image,
                                backgroundColor: element.bgColor,
                                backgroundRepeat: "no-repeat",
                                position: "absolute",
                                top: element.top,
                                left: element.left,
                                cursor: "default",
                            }}
                            onMouseDown={(e) => {
                                e.preventDefault();
                                handleMouseDown(
                                    switchModeDragOrResize,
                                    e,
                                    elements,
                                    setElements,
                                    setSingleActiveElement
                                );
                            }}>
                            {element.typeElement === "table"
                                ? element.tableNumber
                                : ""}
                        </div>
                    ))}
                </div>
                <div>
                    <div className="bottom-controls-user-container">
                        <div className="inputs-container">
                            <div className="element-description-container">
                                <p>
                                    {`${singleActiveElement?.typeElement} ${switchModeDragOrResize}`}
                                </p>
                                <button
                                    onClick={() =>
                                        setswitchModeDragOrResize("mover")
                                    }>
                                    Mover
                                </button>
                                <button
                                    onClick={() =>
                                        setswitchModeDragOrResize(
                                            "cambiar tamaño"
                                        )
                                    }>
                                    Cambiar tamaño
                                </button>
                            </div>
                            <form
                                onSubmit={(e) =>
                                    updateValuesActualElement(
                                        e,
                                        singleActiveElement,
                                        setElements
                                    )
                                }
                                className="element-description-container">
                                <input
                                    placeholder={singleActiveElement.width}
                                />
                                <input
                                    placeholder={singleActiveElement.height}
                                />
                                <input placeholder={singleActiveElement.top} />
                            <input placeholder={singleActiveElement.left} />

                                <button type="submit">Actualizar</button>
                            </form>
                        </div>
                        <div className="user-show-container">
                            <p>{`Hola :${userName}`}</p>
                            <div
                                style={{
                                    backgroundImage: `url(${usuario_1})`,
                                    width: "60px",
                                    height: "60px",
                                }}></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
