import expect from "expect";
import expectJsx from "expect-jsx";
import RadioGroup from "@material-ui/core/RadioGroup";
import React from "react";
import noop from "lodash.noop";
import TestUtils from "react-dom/test-utils";
import ReduxFormMaterialUIRadioGroup from "../RadioGroup";

expect.extend(expectJsx);

describe("RadioGroup", () => {
  it("has a display name", () => {
    expect(ReduxFormMaterialUIRadioGroup.displayName).toBe(
      "ReduxFormMaterialUIRadioGroup"
    );
  });

  it("renders a RadioGroup", () => {
    expect(
      new ReduxFormMaterialUIRadioGroup({
        input: {
          name: "myRadio",
          value: "Foo",
          onChange: { noop }
        }
      }).render()
    ).toEqualJSX(
      <RadioGroup name="myRadio" value="Foo" onChange={noop} ref={() => {}} />
    );
  });

  it("provides getRenderedComponent", () => {
    const dom = TestUtils.renderIntoDocument(
      <ReduxFormMaterialUIRadioGroup
        input={{ name: "myRadio", value: "Foo" }}
      />
    );

    const element = TestUtils.findRenderedComponentWithType(
      dom,
      ReduxFormMaterialUIRadioGroup
    );
    expect(element.getRenderedComponent).toBeA("function");
    expect(element.getRenderedComponent()).toExist();
  });
});
