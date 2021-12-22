//Your task is to write a function maskify, which changes all but the last four characters into '#'.

function maskify(cc) {
  if (cc.length <= 4) {
    return cc;
  };
  let hidden = cc.slice(0, -4);
  let visible = cc.slice(-4);
  let change = hidden.replace(/./g, '#');
  let result = change + visible;
  return result;
  };