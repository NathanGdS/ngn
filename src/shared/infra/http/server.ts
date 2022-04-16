import { app } from "./app";

const PORT = 8080;

// app.listen(PORT, () => {
//     console.log(`Server is running on port ${PORT}`);
// });
app.listen(process.env.PORT, () => {
    console.log(`Server is running on port ${process.env.PORT}`)
});