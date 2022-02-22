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
  const str = number.toFixed(2).toString();

  const arr = str.split(".");
  let integer = arr[0];
  const decimal = arr.length > 1 ? "." + arr[1] : "";

  const regex = /(\d+)(\d{3})/;

  while (regex.test(integer)) {
    integer = integer.replace(regex, "$1,$2");
  }

  return integer + decimal;
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

const uuid = () => {
  const s4 = () =>
    Math.floor((1 + Math.random()) * 0x10000)
      .toString(16)
      .substring(1);

  return s4() + s4() + "-" + s4() + "-" + s4() + s4() + s4();
};

export {
  omit,
  copy,
  format,
  isEmpty,
  findById,
  pluralize,
  serialize,
  unserialize,
  uuid,
};
