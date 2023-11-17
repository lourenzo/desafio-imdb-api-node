import app from "./app";

const defaultPort = 3000;
const port = process.env.PORT || defaultPort;

if (require.main === module) {
  app.listen(port, () => {
    console.info(`Listening on port ${port}`);
  });
}
