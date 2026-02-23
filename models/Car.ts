import { Schema, model, models } from "mongoose";

const carSchema = new Schema({
  Name: String,
  Price: Number,
});

const Car = models.Car || model("Car", carSchema, "Cars");

export default Car;