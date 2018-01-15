function mongoURI(env = process.env.NODE_ENV) {
  switch (env) {
    case "test":
      return `mongodb://localhost/trekccgo-test`;
      break;

    case "development":
      return `mongodb://localhost/trekccgo-dev`;
      break;

    default:
      return process.env.MONGODB_URI;
  }
}

module.exports = {
  mongoURI
};
