const displayPrice = (prices, currentCurrency) => {
  const price = prices.find(
    (price) => currentCurrency === price.currency.symbol
  );

  return `${price.currency.symbol}${price.amount}`;
};

const omit = (obj, keys) => {
  const keysToRemove = new Set(keys);

  return Object.fromEntries(
    Object.entries(obj).filter(([k]) => !keysToRemove.has(k))
  );
};

const copy = (data) => {
  const cloneObject = () => {
    let clone = {};

    for (const key in data) {
      if (data.hasOwnProperty(key)) {
        clone[key] = copy(data[key]);
      }
    }

    return clone;
  };

  const cloneArray = () => {
    return data.map((item) => {
      return copy(item);
    });
  };

  const type = Object.prototype.toString.call(data).slice(8, -1).toLowerCase();

  if (type === "object") {
    return cloneObject();
  }

  if (type === "array") {
    return cloneArray();
  }

  return data;
};

const format = (number) => {
  return new Intl.NumberFormat().format(number.toFixed(2));
};

const isEmpty = (object) => {
  const type = Object.prototype.toString
    .call(object)
    .slice(8, -1)
    .toLowerCase();

  if (type === "object") {
    return Object.keys(object).length === 0;
  }

  return object.length === 0;
};

const findById = (arr, id) => {
  return arr.find((elt) => elt.id === id);
};

const pluralize = (number, word, plural = word + "s") =>
  number === -1 || number === 1 ? word : plural;

const serialize = (data) => JSON.stringify(data);

const unserialize = (data) => JSON.parse(data);

export {
  displayPrice,
  omit,
  copy,
  format,
  isEmpty,
  findById,
  pluralize,
  serialize,
  unserialize,
};
