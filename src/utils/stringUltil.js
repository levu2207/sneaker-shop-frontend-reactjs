const GenUrlFriendly = (str) => {
  if (str != null) {
    let newtext = str.toLowerCase();

    newtext = newtext.replace(/à|á|ạ|ả|ã|â|ầ|ấ|ậ|ẩ|ẫ|ă|ằ|ắ|ặ|ẳ|ẵ/gi, "a");
    newtext = newtext.replace(/è|é|ẹ|ẻ|ẽ|ê|ề|ế|ệ|ể|ễ/gi, "e");
    newtext = newtext.replace(/ì|í|ị|ỉ|ĩ/gi, "i");
    newtext = newtext.replace(/ò|ó|ọ|ỏ|õ|ô|ồ|ố|ộ|ổ|ỗ|ơ|ờ|ớ|ợ|ở|ỡ/gi, "o");
    newtext = newtext.replace(/ù|ú|ụ|ủ|ũ|ư|ừ|ứ|ự|ử|ữ/gi, "u");
    newtext = newtext.replace(/ỳ|ý|ỵ|ỷ|ỹ/gi, "y");
    newtext = newtext.replace(/đ/gi, "d");

    newtext = newtext.replace(
      /!|@|%|\^|\*|\(|\)|\+|\=|\<|\>|\?|\/|,|\.|\:|\;|\'|\"|\&|\#|\[|\]|~|\$|_|`|-|{|}|\||\\/g,
      " "
    );
    newtext = newtext.replace(/ +/g, "-");
    return newtext;
  } else {
    return "";
  }
};
const stringUtil = {
  GenUrlFriendly,
};
export default stringUtil;
