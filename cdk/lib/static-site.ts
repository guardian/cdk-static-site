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
      bucketName: "gucdk-static-site-demo-origin",
      preExistingCertificateArn: {
        [StageForInfrastructure]: `arn:aws:acm:us-east-1:${this.account}:certificate/de291190-d1c4-4501-97d5-d2d04e96486a`,
      },
    });
  }
}
