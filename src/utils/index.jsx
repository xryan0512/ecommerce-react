/**
 * This function calculates total price of a new order
 * @param {Array} products cartProducts: array of objects 
 * @returns {number} Total Price
 */

export const totalPrice = (products) => {
    let sum = 0
    products.forEach(product => sum = sum + product.price);
    return sum
} 