"use strict"

function solveEquation(a, b, c) {
  let d = (b * b) - (4 * a * c)

  if (d > 0) return [(-b + Math.sqrt(d)) / (2 * a), (-b - Math.sqrt(d)) / (2 * a)]
  if (d == 0) return [-b / (2 * a)]
  if (d < 0) return []
}

function calculateTotalMortgage(percent, contribution, amount, countMonths) {
  let P = (percent / 100) / 12;
  let S = amount - contribution;
  let monthlyPayment = S * (P + (P / (((1 + P) ** countMonths) - 1)));

  let totalAmount = monthlyPayment * countMonths;

  return Number(totalAmount.toFixed(2));
}