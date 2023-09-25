export default function hasValuesFromArray(setInstance, arr) {
  for (const item of arr) {
    if (!setInstance.has(item)) {
      return false;
    }
  }
  return true;
}
