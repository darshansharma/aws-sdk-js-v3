// smithy-typescript generated code
import { Logger as __Logger } from "@aws-sdk/types";
import { parseUrl } from "@aws-sdk/url-parser";
import { fromBase64, toBase64 } from "@aws-sdk/util-base64";

import { defaultEndpointResolver } from "./endpoint/endpointResolver";
import { Route53RecoveryReadinessClientConfig } from "./Route53RecoveryReadinessClient";

/**
 * @internal
 */
export const getRuntimeConfig = (config: Route53RecoveryReadinessClientConfig) => ({
  apiVersion: "2019-12-02",
  base64Decoder: config?.base64Decoder ?? fromBase64,
  base64Encoder: config?.base64Encoder ?? toBase64,
  disableHostPrefix: config?.disableHostPrefix ?? false,
  endpointProvider: config?.endpointProvider ?? defaultEndpointResolver,
  logger: config?.logger ?? ({} as __Logger),
  serviceId: config?.serviceId ?? "Route53 Recovery Readiness",
  urlParser: config?.urlParser ?? parseUrl,
});
