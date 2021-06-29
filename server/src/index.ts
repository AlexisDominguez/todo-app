import app from "./server";
import { APP_DEFAULT_PORT, MONGO_URL } from "./config";
import { connectMongo } from "./services/mongodb";

connectMongo(MONGO_URL);

app.listen(APP_DEFAULT_PORT, () => {
  console.log(
    `⚡️[server]: Server is running at https://localhost:${APP_DEFAULT_PORT}`
  );
});
