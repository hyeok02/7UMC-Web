const emailPattern = /^[A-Za-z0-9_.\-]+@[A-Za-z0-9\-]+\.[A-Za-z0-9]+$/;

function validateUser(values) {
  const errors = {
    email: "",
    password: "",
  };

  // email 패턴 검사
  if (!emailPattern.test(values.email)) {
    errors.email = "올바른 형식이 아닙니다. 다시 입력해주세요";
  }

  // password 길이 검사
  if (values.password.length < 8 || values.password.length > 16) {
    errors.password = "비밀번호는 8~16자 사이로 입력해주세요";
  }

  return errors;
}

function validateLogin(values) {
  return validateUser(values);
}

export { validateLogin };
