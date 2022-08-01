const hiraganaList =
  "あいうえおかきくけこさしすせそたちつてとなにぬねのはひふへほまみむめもやゆよらりるれろわんがぎぐげござじずぜぞだぢづでどばびぶべぼぱぴぷぺぽっゃゅょ";
const katakanaList =
  "アイウエオカキクケコサシスセソタチツテトナニヌネノハヒフヘホマミムメモヤユヨラリルレロワンガギグゲゴザジズゼゾダヂヅデドバビブベボパピプペポッャュョ";
const alphabetList = "abcdefghijklmnopqrstuvwxyz";
const suuziList = "0123456789";

export const randomChar = (char: any) => {
  const arr = [char];
  let selectedList = "";

  if (hiragana(char)) {
    selectedList = hiraganaList;
  } else if (katakana(char)) {
    selectedList = katakanaList;
  } else if (alphabet(char)) {
    selectedList = alphabetList;
  } else if (suuzi(char)) {
    selectedList = suuziList;
  }

  for (let i = 0; i < 3; i++) {
    let _random = Math.floor(Math.random() * (selectedList.length - 1));
    arr.push(selectedList[_random]);
  }

  return arr.sort(() => Math.random() - 0.5);
};

const hiragana = (char: any) => {
  var reg = new RegExp(/^[ぁ-んー]*$/);
  var res = reg.test(char);
  return res;
};

const katakana = (char: any) => {
  var reg = new RegExp(/^[ァ-ンヴー]*$/);
  var res = reg.test(char);
  return res;
};

const alphabet = (char: any) => {
  var reg = new RegExp(/^[a-zA-Z]*$/);
  var res = reg.test(char);
  return res;
};

const suuzi = (char: any) => {
  var reg = new RegExp(/^[0-9]*$/);
  var res = reg.test(char);
  return res;
};
