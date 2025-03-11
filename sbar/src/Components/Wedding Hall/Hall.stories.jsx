import React from "react";
import Hall from "./Hall";

export default {
  title: "Components/Hall",
  component: Hall,
};

const Template = (args) => <Hall {...args} />;

export const Default = Template.bind({});
Default.args = {};