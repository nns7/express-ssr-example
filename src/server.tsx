import express from "express";
import Client from "./client";
import { renderToString } from "react-dom/server";

const app = express();
const port = 3000;

app.use(express.static("dist"));

app.listen(port, () => {
  console.log(`listening on port ${port}`);
});

const reactComponent = renderToString(<Client />);

const pageHtml = `
<!DOCTYPE html>
<html>
    <head>
        <meta charset="utf-8">
        <title>counter</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
    </head>
    <body>
        <div id="react-root">${reactComponent}</div>
        <script defer="defer" src="client.js"></script>
    </body>
</html>
`;

app.get("/", (_req, res) => {
  res.send(pageHtml);
});
