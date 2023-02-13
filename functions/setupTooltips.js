export function setupTooltips(
    planeClass,
    shapeClass,
    shapeName,
    tooltipClass,
    toolTopShowClass,
    polygonShowClass,
    shadeClass
) {
    const plane = document.querySelector(planeClass)
    const shade = plane.querySelector(shadeClass)

    function removeClass(removedClass) {
        return function (node) {
            node.classList.remove(removedClass)
        }
    }

    function getShapes(mainEl, shapeEl, plane) {
        const shapes = plane.querySelectorAll(shapeEl)
        return shapes
    }

    function getShapesAndRemoveClass(planeClass, shapeClass, addedClass) {
        const shapes = getShapes(planeClass, shapeClass, plane)
        shapes.forEach(removeClass(addedClass))
    }

    function hideAllTooltips() {
        document.querySelectorAll(tooltipClass).forEach(removeClass(toolTopShowClass))
    }

    function showCurrentTooltip(e) {
        try {
            const name = `#${e.target.id}-tooltip`
            const tooltip = document.querySelector(name)
            tooltip.classList.add(toolTopShowClass)
            tooltip.style.transform = `translate(${e.layerX + 10}px, ${e.layerY}px)`
        } catch (e) {
            console.log("error")
        }
    }
    function setShade(value) {
        shade.style.fillOpacity = value
    }
    function showBorders(e, addedClass) {
        e.target.classList.add(addedClass)
    }
    const listener = (e) => {
        const hoverOnElement = e.target.classList.contains(shapeName)
        if (hoverOnElement) {
            console.log("contains shape")
            setShade(0.8)
            getShapesAndRemoveClass(planeClass, shapeClass, polygonShowClass)
            showBorders(e, polygonShowClass)
            hideAllTooltips()
            showCurrentTooltip(e)
        } else {
            console.log("not contains shape")
            setShade(0.2)
            getShapesAndRemoveClass(planeClass, shapeClass, polygonShowClass)
            hideAllTooltips()
        }
    }
    return listener
}
