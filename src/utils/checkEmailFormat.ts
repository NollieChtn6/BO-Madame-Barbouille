const checkEmailFormat = (string: string) => {
  const emailRegex = /^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/;
  if (string.match(emailRegex)) {
    return true;
  }
  return null;
};

export default checkEmailFormat;
