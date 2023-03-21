import { render, screen, waitFor } from "@testing-library/react";
import Main from "../components/main/Main";

describe("Main component", () => {
  test("renders posts", async () => {
    render(<Main />);
  });
});
