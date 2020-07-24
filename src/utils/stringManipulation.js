export function upperCaseFirstLetter(string) {
  if (string == null) {
    return '';
  }
  let firstLetter = string.charAt(0).toUpperCase();
  let remainingString = string.substring(1, string.length);
  return firstLetter + remainingString;
}
