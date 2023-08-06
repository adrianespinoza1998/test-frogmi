import { Incident } from "../src";

export const testData = [
  {
    description: "first incident",
    status: "open",
    open_date: new Date("2023-01-01"),
  },
  {
    description: "second incident",
    status: "open",
    open_date: new Date("2023-01-02"),
  },
  {
    description: "third incident",
    status: "closed",
    open_date: new Date("2023-02-01"),
    closed_date: new Date("2023-02-11"),
  },
  {
    description: "fourth incident",
    status: "closed",
    open_date: new Date("2023-02-02"),
    closed_date: new Date("2023-02-13"),
  },
  {
    description: "fifth incident",
    status: "closed",
    open_date: new Date("2023-02-03"),
    closed_date: new Date("2023-02-15"),
  },
] as Incident[];
