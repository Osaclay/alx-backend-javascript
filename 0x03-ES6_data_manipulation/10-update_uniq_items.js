export default function updateUniqueItems(itemMap) {
  if (!(itemMap instanceof Map)) {
    throw new Error('Cannot process');
  }
  for (const [key, value] of itemMap) {
    if (value === 1) {
      itemMap.set(key, 100);
    }
  }
  return itemMap;
}
