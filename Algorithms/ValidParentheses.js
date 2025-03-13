let str = "{{[({[)})]}}";

function isValidParentheses(str) {
  let stack = [];

  for (let i = 0; i < str.length; i++) {
    if (str[i] === "{") {
      stack.push("}");
    } else if (str[i] === "[") {
      stack.push("]");
    } else if (str[i] === "(") {
      stack.push(")");
    } else if (stack.length === 0 || stack.pop() !== str[i]) {
      return false;
    }
  }

  return true;
}

console.log(isValidParentheses(str));
