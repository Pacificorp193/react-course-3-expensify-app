import React from "react";
import { shallow } from "enzyme";
import { createSerializer } from "enzyme-to-json";
// import toJSON from "enzyme-to-json";
import { Header } from "../../components/Header";

expect.addSnapshotSerializer(createSerializer({ mode: "deep" }));

test("should render Header correctly", () => {
  const wrapper = shallow(<Header startLogout={() => {}} />);
  expect(wrapper).toMatchSnapshot();
});

test("should call startLogout on button click", () => {
  const startLogout = jest.fn();
  const wrapper = shallow(<Header startLogout={startLogout} />);
  wrapper.find("button").simulate("click");
  expect(startLogout).toHaveBeenCalled();
});
