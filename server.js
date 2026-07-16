const express = require("express");
const app = express();

app.get("/", (req, res) => {
    res.send("Backend is Working!");
});

app.get("/api/test", (req, res) => {
    res.json({
        status: "success",
        message: "Backend API is working"
    });
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
