import React from "react";
import Todo from "./Todo";

describe("Todo", () => {
  let onDeleteMock, onTextUpdateMock, onToggleMock;

  beforeEach(() => {
    onTextUpdateMock = jest.fn();
    onDeleteMock = jest.fn();
    onToggleMock = jest.fn();
  });

  it("renders the todo", () => {
    const wrapper = render(<Todo text={"something todo here"} />);
    expect(wrapper.getByTestId("input-text").value).toBe("something todo here");
  });

  it("calls callback when input text is updated", () => {
    const wrapper = render(
      <Todo text={"old"} onTextUpdate={onTextUpdateMock} />
    );
    const input = wrapper.getByTestId("input-text");
    fireEvent.change(input, { target: { value: "new" } });

    expect(onTextUpdateMock).toHaveBeenCalledWith("new");
  });

  it("calls delete callback when x is pressed", () => {
    const wrapper = render(<Todo onDelete={onDeleteMock} />);
    const deleteButton = wrapper.getByTestId("delete-button");
    fireEvent.click(deleteButton);

    expect(onDeleteMock).toHaveBeenCalled();
  });

  it("displays an empty checkbox when todo is not completed", () => {
    const wrapper = render(<Todo isCompleted={false} />);
    const checkbox = wrapper.getByTestId("checkbox");

    expect(checkbox).toBeVisible();
    expect(checkbox.children.length).toBe(0);
  });

  it("displays a chekmark when todo is complete", () => {
    const wrapper = render(<Todo isCompleted={true} />);
    const checkbox = wrapper.getByTestId("checkbox");

    expect(checkbox).toBeVisible();
    expect(checkbox.children.length).toBe(1);
  });

  it("calls callback when checkbox is toggled", () => {
    const wrapper = render(<Todo onToggle={onToggleMock} />);
    const checkbox = wrapper.getByTestId("checkbox");
    fireEvent.click(checkbox);
    expect(onToggleMock).toHaveBeenCalled();
  });
});
