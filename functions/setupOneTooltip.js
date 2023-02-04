import { isMobile } from "~/functions/isMobile.js"

export function setupOneTooltip(planeClass, holeClass, tooltipClass, tooltipShowClass) {
    function removeClass(removedClass) {
        return function (node) {
            node.classList.remove(removedClass)
        }
    }

    function hideAllTooltips() {
        let nodeListOf = document.querySelectorAll(tooltipClass)
        nodeListOf.forEach(removeClass(tooltipShowClass))
    }
    function showAndMoveCurrentTooltip(e) {
        const name = `#${e.target.id}-tooltip`
        const tooltip = document.querySelector(name)
        tooltip.classList.add(tooltipShowClass)
        tooltip.style.top = e.clientY + 20 + "px"
        tooltip.style.left = e.clientX + 20 + "px"
    }

    const listener = (e) => {
        if (!isMobile.any()) {
            const hoverOnHole = e.target.classList.contains(holeClass)
            if (hoverOnHole) {
                console.log("hover")
                hideAllTooltips()
                showAndMoveCurrentTooltip(e)
            } else {
                hideAllTooltips()
                console.log("not hover")
            }
        }
    }
    return listener
}
