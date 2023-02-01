function hyphenateWords (str) {
  let ans = str.toLower().replace("/\s/g", "-")
  return ans;
}

export default hyphenateWords