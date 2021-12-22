function decToBin(d) {
  if (d === 1) {
    return '1';
  }
  if (d === 0) {
    return '0';
  }
  return decToBin(Math.floor(d / 2)) + (d % 2);
}

/*Convert decimal numbers to binary. Enjoy! No cheating. No toString*/