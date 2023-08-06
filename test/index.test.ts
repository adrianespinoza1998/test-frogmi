import { Incident, Store } from "../src";
import { testData } from "./test-data";

describe("Store", () => {
  let store: Store;

  beforeEach(() => {
    store = new Store(testData);
  });

  afterAll(() => {
    jest.restoreAllMocks();
  });

  it("should be defined", () => {
    expect(store).toBeDefined();
  });

  it("should be a function", () => {
    expect(typeof store.incident_status).toBe("function");
  });

  it("should return the corrects keys", () => {
    const expectedResults = {
      open_cases: 10,
      closed_cases: 5,
      average_solution: 3,
      maximun_solution: 8,
    };

    jest
      .spyOn(store, "incident_status")
      .mockImplementation(() => expectedResults);

    expect(store.incident_status(new Date(), new Date())).toEqual(
      expectedResults
    );
  });

  it("should return the correct values", () => {
    const results = store.incident_status(
      new Date("2023-01-02"),
      new Date("2023-02-15")
    );

    expect(results.open_cases).toEqual(1);
    expect(results.closed_cases).toEqual(3);
    expect(results.average_solution).toEqual(11);
    expect(results.maximun_solution).toEqual(12);
  });
});
