export type Incident = {
  description: string;
  status: "open" | "closed";
  open_date: Date;
  closed_date?: Date;
};

export class Store {
  private incidents: Incident[];

  constructor(incidents?: Incident[]) {
    this.incidents = incidents || [];
  }

  incident_status(start_date: Date, end_date: Date) {
    const open_cases = this.incidents.filter(
      (x) =>
        x.status === "open" &&
        x.open_date >= start_date &&
        x.open_date <= end_date
    ).length;

    const closed_cases = this.incidents.filter(
      (x) =>
        x.status === "closed" &&
        x.closed_date &&
        x.closed_date >= start_date &&
        x.closed_date <= end_date
    );

    const average_solution =
      closed_cases.reduce((acc, x) => {
        if (x.closed_date) {
          return (
            acc +
            Math.floor(
              (x.closed_date.getTime() - x.open_date.getTime()) /
                (1000 * 60 * 60 * 24)
            )
          );
        }
        return acc;
      }, 0) / closed_cases.length;

    const solution_days = closed_cases.map((x) => {
      if (x.closed_date) {
        return Math.floor(
          (x.closed_date.getTime() - x.open_date.getTime()) /
            (1000 * 60 * 60 * 24)
        );
      }
      return 0;
    });

    const maximun_solution = Math.max(...solution_days);

    return {
      open_cases,
      closed_cases: closed_cases.length,
      average_solution,
      maximun_solution,
    };
  }

  get_incidents() {
    return this.incidents;
  }

  add_incident(incident: Incident) {
    this.incidents.push(incident);
  }

  remove_incident(index: number) {
    this.incidents = this.incidents.filter((_, i) => i !== index);
  }

  update_incident(index: number, incident: Incident) {
    this.incidents[index] = incident;
  }

  get_incident(index: number) {
    return this.incidents[index];
  }
}
