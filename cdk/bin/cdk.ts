import "source-map-support/register";
import { App } from "@aws-cdk/core";
import { StaticSite } from "../lib/static-site";

const app = new App();
const cloudFormationStackName = process.env.GU_CFN_STACK_NAME;
new StaticSite(app, "StaticSite", {
  stack: "playground",
  cloudFormationStackName,
});
