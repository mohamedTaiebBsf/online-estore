const displayPrice = (prices, currentCurrency) => {
  const price = prices.find(
    (price) => currentCurrency === price.currency.symbol
  );

  return `${price.currency.symbol}${price.amount}`;
};

export { displayPrice };
