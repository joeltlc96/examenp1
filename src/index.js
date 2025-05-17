import express from "express";
import routerTODOS from "./routers/todo.routers.js";

const express = require('express');
const app = express();
const PORT = process.env.PORT || 5000;

app.use(routerTODOS);


app.listen(PORT, () => console.log("Server is running on port " , 5000));

