var romanToInt = function (s) {
  const a = { I: 1, V: 5, X: 10, L: 50, C: 100, D: 500, M: 1000 };

  let res = 0;
  for (let i = 0; i < s.length; i++) {
    res += a[s[i]];
	/* if the current number is greater than prev number we should subtract the prev number which
	was accidentally added */
	/* consider 'IX' so we basically have 11 right now as res as we've added, so we need to substract
	the number which we have accidentally added */
    if (i > 0 && a[s[i]] > a[s[i - 1]]) {
	/* So for removing we should do res= res - a[s[i-1]] and for subtracting we
	again do res= res - a[s[i-1]] which is 2 times subtracting the value */
      res -= 2 * a[s[i - 1]]
    }
  }
  return res;
};
