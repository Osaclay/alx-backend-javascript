export default function cleanSet(setInstance, startString) {
  if (!startString || !startString.length || typeof startString !== 'string') return '';

  let cleanedString = '';
  setInstance.forEach((element) => {
    if (element && element.startsWith(startString)) cleanedString += `${element.slice(startString.length)}-`;
  });

  return cleanedString.slice(0, cleanedString.length - 1);
}
