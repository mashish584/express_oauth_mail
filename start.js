require("dotenv").config({ path: "./secret.env" });

const express = require("express");
const app = express();
const { send } = require("./handlers/mail");

app.get("/send", async (req, res, next) => {
	try {
		await send();
		return res.send("SEND");
	} catch (error) {
		console.log(error);
		return res.send("Can't send check console");
	}
});

app.listen(process.env.PORT, () =>
	console.log(`Server is running on port ${process.env.PORT}`)
);
