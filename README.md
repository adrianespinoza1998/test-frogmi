# Store Class

## Description

This is a class that represents a store. It has a private list of incidents, a method called incident_status and a crud's methods to manipulate the incidents.

## Usage

```typescript
//import the class and the Incident type, [path] is the path to the file
import { Incident, Store } from '[path]/store';

//create a new instance of the class
const store = new Store();

//add a new incident
const newIncident = {
    description: "first incident",
    status: "open",
    open_date: new Date("2023-01-01"),
} as Incident;

store.add_incident(newIncident);

//get the status of an incident, enter two dates to get the status of the incident between those dates
store.incident_status(new Date("2023-01-01"), new Date("2023-01-01"));
/*output: {
    open_cases: 1,
    closed_cases: 0,
    average_solution: 0,
    maximun_solution: 0,
}*/

//get the incident with the given index
store.get_incident(0);

//get the list of incidents
store.get_incidents();

//update the incident with the given index
store.update_incident(0, {
    description: "first incident",
    status: "closed",
    open_date: new Date("2023-01-01"),
    close_date: new Date("2023-01-07"),
} as Incident);

//delete the incident with the given index
store.delete_incident(0);
```