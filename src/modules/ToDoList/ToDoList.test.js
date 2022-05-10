import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { Provider } from "react-redux";
import store from "../../redux/store/store";
import ToDoList from "./ToDoList";

const mockUseDispatch = jest.fn();

jest.mock("react-redux", () => ({
  ...jest.requireActual("react-redux"),
  useSelector: () => {
    return [
      { id: 1, name: "Cosa fake para hacer 1", done: false },
      { id: 2, name: "Cosa fake para hacer 2", done: false },
    ];
  },
  useDispatch: () => {
    return mockUseDispatch;
  },
}));

describe("Given a ToDoList component", () => {
  describe("When it receives an array with two list items from the state", () => {
    test("Then it should render two list elements", () => {
      const expectedLength = 2;

      render(
        <Provider store={store}>
          <ToDoList />
        </Provider>
      );

      const receivedResult = screen.getAllByRole("listitem");

      expect(receivedResult).toHaveLength(expectedLength);
    });
  });

  describe("When it receives an array with two list items from the state and the first delete button is clicked", () => {
    test("Then it should call a function with an action object with the type remove item", () => {
      const action = { payload: 2, type: "list/removeItem" };

      render(
        <Provider store={store}>
          <ToDoList />
        </Provider>
      );

      userEvent.click(screen.getAllByRole("button", { name: /delete/i })[1]);

      expect(mockUseDispatch).toHaveBeenCalledWith(action);
    });
  });

  describe("When it receives an array with two list items from the state and the first Done? button is clicked", () => {
    test("Then it should call a function with an action object with the type markAsDone", () => {
      const action = { payload: 1, type: "list/markAsDone" };
      render(
        <Provider store={store}>
          <ToDoList />
        </Provider>
      );

      userEvent.click(screen.getAllByRole("button", { name: /done/i })[0]);

      expect(mockUseDispatch).toHaveBeenCalledWith(action);
    });
  });
});
