import { NextResponse } from "next/server";
import '../../../lib/mongodb'
import Car from "../../../models/Car";

export function GET() {
  return Car.find({}).then((cars) => NextResponse.json(cars));
}