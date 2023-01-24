export const boardfootCalculator = (thickness, width, length, quantity) => {
    let totalBoardFeet = (thickness * width * length * quantity) / 144
    if (totalBoardFeet % 1 !== 0) {
        return totalBoardFeet = totalBoardFeet.toFixed(3)
    }
    return totalBoardFeet
}