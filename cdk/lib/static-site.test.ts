import "@aws-cdk/assert/jest";
import { SynthUtils } from "@aws-cdk/assert";
import { App } from "@aws-cdk/core";
import { StaticSite } from "./static-site";

describe("The StaticSite stack", () => {
  it("matches the snapshot", () => {
    const app = new App();
    const stack = new StaticSite(app, "StaticSite", { stack: "playground" });
    expect(SynthUtils.toCloudFormation(stack)).toMatchSnapshot();
  });
});
