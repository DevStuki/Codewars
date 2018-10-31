//오브젝트의 값을 확인할 때는 this를 쓰는구나!

String.prototype.digit = function() {
  return /^\d$/.test(this);
};
