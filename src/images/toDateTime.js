const toTwoLetters = (date) => {
  let str = JSON.stringify(date);
  if (str.length === 1) {
    str = "0" + str;
  }
  console.log(str);
  return str;
};

export const toDateTime = (date) => {
  console.log(
    `Minutes = ${date.getMinutes()}, length: ${date.getMinutes().length}`
  );
  return `${date.getDay()}/${date.getMonth()}/${date.getFullYear()} ${toTwoLetters(
    date.getHours()
  )}:${toTwoLetters(date.getMinutes())}`;
};
