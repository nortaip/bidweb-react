import express from "express";
import fileUpload from "express-fileupload";

const app = express();
app.use(fileUpload());

app.post("/uploads", (req, res) => {
    if (!req.files || Object.keys(req.files).length === 0) {
        return res.status(400).send("No files were uploaded.");
    }

    const file = req.files.file;
    file.mv(`${__dirname}/uploads/${file.name}`, (error) => {
        if (error) {
            return res.status(500).send(error);
        }

        res.send("File uploaded!");
    });
});

app.listen(3000, () => {
    console.log("Server running on port 3000");
});
