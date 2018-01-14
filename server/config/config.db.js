function mongoURI(env = process.env.NODE_ENV) {
  console.info("DBURI", process.env.MONGODB_URI);
  switch (env) {
    case "test":
      return `mongodb://localhost/trekccgo-test`;
      break;

    case "production":
      return process.env.MONGODB_URI;
      break;

    default:
      return `mongodb://localhost/trekccgo-dev`;
  }
}

module.exports = {
  mongoURI
};
