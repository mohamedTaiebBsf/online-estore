import { serialize, unserialize } from "../../utils";

const STATE_STORAGE_NAME = "scandiweb_storage";

const load = () => {
  try {
    let loadedState = localStorage.getItem(STATE_STORAGE_NAME);

    if (loadedState === null) return undefined;

    return unserialize(loadedState);
  } catch (error) {
    console.log(error);

    return undefined;
  }
};

const save = (data) => {
  try {
    let serialized = serialize(data);
    localStorage.setItem(STATE_STORAGE_NAME, serialized);
  } catch (error) {
    console.log(error);
  }
};

export { load, save };
