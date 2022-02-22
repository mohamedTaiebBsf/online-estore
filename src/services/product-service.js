import { copy, findById, format } from "../utils";

const price = (prices, currentCurrency) => {
  const price = prices.find(
    (price) => currentCurrency === price.currency.symbol
  );

  return `${price.currency.symbol}${format(price.amount)}`;
};

const updateSelectedOption = (options, attribute) => {
  const selectedOprions = copy(options);
  const option = findById(selectedOprions, attribute.id);

  if (option) {
    selectedOprions[selectedOprions.indexOf(option)].selectItem =
      attribute.selectItem;

    return selectedOprions;
  } else {
    throw new Error("Option not found!");
  }
};

export { price, updateSelectedOption };
