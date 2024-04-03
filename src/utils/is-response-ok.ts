const isResponseOK = (res: Response) => {
  if (res.status >= 200 && res.status < 300) {
    return true;
  }
  return false;
};

export { isResponseOK };
