/* eslint-disable no-undef */
import React from "react";
import { shallowWithTheme } from ",,/../../../setupTests";

import WavesComponent from "./WavesComponent";

it("should render correctly with no props", () => {
  const component = shallowWithTheme(<WavesComponent />);

  expect(component).toMatchSnapshot();
});
