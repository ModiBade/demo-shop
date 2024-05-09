export const numberFormat = (num) => {
  return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
};

export const makeId = (length) => {
  let result = "";
  const characters =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  const charactersLength = characters.length;
  let counter = 0;
  while (counter < length) {
    result += characters.charAt(Math.floor(Math.random() * charactersLength));
    counter += 1;
  }
  return result;
};

export const dateConverter = (date, delimiter = "/") => {
  var jDate, month, day;
  if (date.day < 10) {
    day = "0" + date.day;
  } else {
    day = date.day;
  }
  if (date.month < 10) {
    month = "0" + date.month;
  } else {
    month = date.month;
  }
  jDate = date.year + delimiter + month + delimiter + day;
  return jDate;
};

export const getDate = (date) => {
  var splitedDate = date.split("/");
  var dateObject = {
    year: parseInt(splitedDate[0]),
    month: parseInt(splitedDate[1]),
    day: parseInt(splitedDate[2]),
  };
  return dateObject;
};
