export default function salesPrice(price: number, discount: number) {
  const realPrice = Math.round(price - (price * discount) / 100);
  return Math.round(realPrice / 10) * 10;
}
