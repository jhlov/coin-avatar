const utils = {
  intComma(str: number | string): string {
    if (typeof str == "number") {
      str = str.toString();
    }

    const reg = /(^[+-]?\d+)(\d{3})/;
    while (reg.test(str)) str = str.replace(reg, "$1" + "," + "$2");
    return str;
  }
};

export { utils };
