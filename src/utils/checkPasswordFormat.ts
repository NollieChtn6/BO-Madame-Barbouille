const checkPasswordFormat = (string: string) => {
  const passwordRegex =
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*]).{12,}$/;
  if (string.match(passwordRegex)) {
    return true;
  }
  return null;
};

export default checkPasswordFormat;
