export const generateRandomName = (arrayOfNames) => {
  return arrayOfNames[Math.floor(Math.random() * arrayOfNames.length)];
};
