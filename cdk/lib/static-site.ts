import type { App } from "@aws-cdk/core";
import { StageForInfrastructure } from "@guardian/cdk/lib/constants";
import type { GuStackProps } from "@guardian/cdk/lib/constructs/core";
import { GuStackForInfrastructure } from "@guardian/cdk/lib/constructs/core";
import { GuStaticSite } from "@guardian/cdk/lib/constructs/static-site";

export class StaticSite extends GuStackForInfrastructure {
  constructor(scope: App, id: string, props: GuStackProps) {
    super(scope, id, props);

    new GuStaticSite(this, "StaticSite", {
      app: "static-site-demo",
      domainNameProps: {
        [StageForInfrastructure]: {
          domainName: "banana.dev-gutools.co.uk",
        },
      },
    });
  }
}
