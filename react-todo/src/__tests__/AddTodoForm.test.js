import { render, screen, fireEvent } from "@testing-library/react";
import AddTodoForm from "../components/AddTodoForm";

test("adds a todo when form is submitted", () => {
  const mockAddTodo = jest.fn();
  render(<AddTodoForm addTodo={mockAddTodo} />);

  const input = screen.getByPlaceholderText("Add a new todo");
  const addButton = screen.getByText("Add");

  fireEvent.change(input, { target: { value: "Test Todo" } });
  fireEvent.click(addButton);

  expect(mockAddTodo).toHaveBeenCalledWith("Test Todo");
});
