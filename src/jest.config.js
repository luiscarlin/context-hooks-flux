import { render, cleanup, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";

afterEach(cleanup);

window.render = render;
window.fireEvent = fireEvent;
