export default (path, req) => {
  const serverUrl = process.env.SERVER_URL;
  if (serverUrl) {
    return `${serverUrl}${path}`;
  }
  const protocol = req
    ? `${req.headers["x-forwarded-proto"]}`
    : location.protocol;
  const host = req ? req.headers["x-forwarded-host"] : location.host;
  const port = req ? req.headers["x-forwarded-port"] : location.port;

  return `${protocol}://${host}:${port}${path}`;
};
