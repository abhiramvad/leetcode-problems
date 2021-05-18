var productExceptSelf = function(nums) {
  const prefix = new Array(nums.length);
  const suffix = new Array(nums.length);
  const lastIndex = nums.length - 1;
  
  prefix[0] = 1;
  suffix[lastIndex] = 1;
  
  for (let i = 0; i < lastIndex; i++) {
    const j = lastIndex - i;
    prefix[i + 1] = nums[i] * prefix[i];
    suffix[j - 1] = nums[j] * suffix[j];
  }

  return prefix.map((n, i) => n * suffix[i]);
};
