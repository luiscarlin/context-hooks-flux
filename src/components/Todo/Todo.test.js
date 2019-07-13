import React from "react";
import Todo from "./Todo";

describe("Todo", () => {
  let wrapper, onDeleteMock, onTextUpdateMock, onToggleMock;

  beforeEach(() => {
    onTextUpdateMock = jest.fn();
    onDeleteMock = jest.fn();
    onToggleMock = jest.fn();

    wrapper = render(
      <Todo
        text={"something here"}
        isCompleted={true}
        onTextUpdate={onTextUpdateMock}
        onDelete={onDeleteMock}
        onToggle={onToggleMock}
      />
    );
  });

  it("renders text", () => {
    expect(wrapper.getByTestId("input-text").value).toBe("something here");
  });

  it("calls callback when input text is updated", () => {
    const input = wrapper.getByTestId("input-text");
    fireEvent.change(input, { target: { value: "update" } });

    expect(onTextUpdateMock).toHaveBeenCalledWith("update");
  });

  it("calls delete callback when x is pressed", () => {
    const deleteButton = wrapper.getByTestId("delete-button");
    fireEvent.click(deleteButton);

    expect(onDeleteMock).toHaveBeenCalled();
  });

  it("has a checkbox", () => {
    const checkbox = wrapper.getByTestId("checkbox");
    expect(checkbox.checked).toBe(true);
  });

  it("calls callback when checkbox is toggled", () => {
    const checkbox = wrapper.getByTestId("checkbox");
    fireEvent.click(checkbox);
    expect(onToggleMock).toHaveBeenCalled();
  });
});
