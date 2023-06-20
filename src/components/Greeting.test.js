import { render, screen } from "@testing-library/react";
import Greeting from "./Greeting";
test("renders Hello as a text", () => {
  //Arrange
  render(<Greeting />);

  //Act ...nothing

  //Assert
  const helloElement = screen.getByText("Hello", {exact:false});
  expect(helloElement).toBeInTheDocument();
});
