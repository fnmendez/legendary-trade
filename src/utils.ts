import moment from "moment";

export const CHUNK_ARRAY = (arr: any[], n): any[][] => {
  let i = 0;
  const ret: any[] = [];
  while (i < arr.length) {
    ret.push(arr.slice(i, i + n));
    i += n;
  }
  return ret;
};

export const CHILE_TIME = (raw = false) => {
  const datetime = moment().utc();
  datetime.add(-3, "hours");
  return raw ? datetime : datetime.format("YYYY/MM/DD, HH:mm:ss");
};
