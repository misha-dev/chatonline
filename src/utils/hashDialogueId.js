const hash = (str1, str2) => {
  let hash = 0;
  for (let index = 0; index < str1.length; index++) {
    hash += str1.charCodeAt(index);
  }
  for (let index = 0; index < str2.length; index++) {
    hash += str2.charCodeAt(index);
  }

  return hash * 22;
};

console.log(hash("great", "misha"));
console.log(hash("misha", "great"));
