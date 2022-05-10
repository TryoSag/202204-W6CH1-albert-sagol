import fakeDataToTest from "../../utils/fakeDataToTest";
import listReducer from "./listSlice";

describe("Given a listSlice reducer", () => {
  describe("When it receives a list of items and an unknown action", () => {
    test("Then it should return the same initial value", () => {
      const action = {
        type: "list/doWhatYouWant",
      };
      const initialValue = fakeDataToTest;

      const receivedResult = listReducer(initialValue, action);

      expect(receivedResult).toEqual(initialValue);
    });
  });

  describe("When it receives a list of two items and an remove action", () => {
    test("Then it should return an array with one object", () => {
      const expectedLength = 1;
      const action = {
        type: "list/removeItem",
        payload: 1,
      };
      const initialValue = fakeDataToTest;
      const receivedResult = listReducer(initialValue, action);

      expect(receivedResult).toHaveLength(expectedLength);
    });
  });

  describe("When it's called with a loadList action and an array with two objects", () => {
    test("Then it should return an array of two objects", () => {
      const valueToLoad = fakeDataToTest;
      const initialValue = [];
      const action = {
        type: "list/loadList",
        payload: valueToLoad,
      };

      const receivedResult = listReducer(initialValue, action);

      expect(receivedResult).toEqual(valueToLoad);
    });
  });

  describe("When it receives a list of two items and a markAsDone action", () => {
    test("Then it should set the done property of the first object to true", () => {
      const initialValue = fakeDataToTest;
      const expectedResult = [
        { id: 1, name: "Cosa fake para hacer 1", done: true },
        { id: 2, name: "Cosa fake para hacer 2", done: false },
      ];
      const action = {
        type: "list/markAsDone",
        payload: 1,
      };

      const receivedResult = listReducer(initialValue, action);

      expect(receivedResult).toEqual(expectedResult);
    });
  });

  describe("When it receives a list of two items and a addItem action with one item", () => {
    test("Then it should return an array with a length of 3", () => {
      const initialValue = fakeDataToTest;
      const expectedLength = 3;
      const itemToAdd = [
        { id: 3, name: "Cosa fake para hacer 3", done: false },
      ];
      const action = {
        type: "list/addItem",
        payload: itemToAdd,
      };

      const receivedResult = listReducer(initialValue, action);

      expect(receivedResult).toHaveLength(expectedLength);
    });
  });
});
