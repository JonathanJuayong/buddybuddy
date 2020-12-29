export const capitalize:(text: string) => string = (text) => {
  const [firstLetter, ...otherLetters] = text.split("");
  return [firstLetter.toUpperCase(), ...otherLetters].join("");
}