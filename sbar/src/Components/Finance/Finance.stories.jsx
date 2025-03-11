import React from "react";
import Finance from "./Finance";

export default {
  title: "Components/Finance",
  component: Finance,
};

const Template = (args) => <Finance {...args} />;

export const Default = Template.bind({});
Default.args = {};