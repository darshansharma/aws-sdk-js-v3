// smithy-typescript generated code
import { EndpointParameterInstructions, getEndpointPlugin } from "@aws-sdk/middleware-endpoint";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
import {
  FinalizeHandlerArguments,
  Handler,
  HandlerExecutionContext,
  HttpHandlerOptions as __HttpHandlerOptions,
  MetadataBearer as __MetadataBearer,
  MiddlewareStack,
} from "@aws-sdk/types";
import { HttpRequest as __HttpRequest, HttpResponse as __HttpResponse } from "@smithy/protocol-http";
import { SerdeContext as __SerdeContext } from "@smithy/types";

import {
  CostAndUsageReportServiceClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../CostAndUsageReportServiceClient";
import { DescribeReportDefinitionsRequest, DescribeReportDefinitionsResponse } from "../models/models_0";
import { de_DescribeReportDefinitionsCommand, se_DescribeReportDefinitionsCommand } from "../protocols/Aws_json1_1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link DescribeReportDefinitionsCommand}.
 */
export interface DescribeReportDefinitionsCommandInput extends DescribeReportDefinitionsRequest {}
/**
 * @public
 *
 * The output of {@link DescribeReportDefinitionsCommand}.
 */
export interface DescribeReportDefinitionsCommandOutput extends DescribeReportDefinitionsResponse, __MetadataBearer {}

/**
 * @public
 * <p>Lists the AWS Cost and Usage reports available to this account.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CostAndUsageReportServiceClient, DescribeReportDefinitionsCommand } from "@aws-sdk/client-cost-and-usage-report-service"; // ES Modules import
 * // const { CostAndUsageReportServiceClient, DescribeReportDefinitionsCommand } = require("@aws-sdk/client-cost-and-usage-report-service"); // CommonJS import
 * const client = new CostAndUsageReportServiceClient(config);
 * const input = { // DescribeReportDefinitionsRequest
 *   MaxResults: Number("int"),
 *   NextToken: "STRING_VALUE",
 * };
 * const command = new DescribeReportDefinitionsCommand(input);
 * const response = await client.send(command);
 * // { // DescribeReportDefinitionsResponse
 * //   ReportDefinitions: [ // ReportDefinitionList
 * //     { // ReportDefinition
 * //       ReportName: "STRING_VALUE", // required
 * //       TimeUnit: "HOURLY" || "DAILY" || "MONTHLY", // required
 * //       Format: "textORcsv" || "Parquet", // required
 * //       Compression: "ZIP" || "GZIP" || "Parquet", // required
 * //       AdditionalSchemaElements: [ // SchemaElementList // required
 * //         "RESOURCES" || "SPLIT_COST_ALLOCATION_DATA",
 * //       ],
 * //       S3Bucket: "STRING_VALUE", // required
 * //       S3Prefix: "STRING_VALUE", // required
 * //       S3Region: "af-south-1" || "ap-east-1" || "ap-south-1" || "ap-south-2" || "ap-southeast-1" || "ap-southeast-2" || "ap-southeast-3" || "ap-northeast-1" || "ap-northeast-2" || "ap-northeast-3" || "ca-central-1" || "eu-central-1" || "eu-central-2" || "eu-west-1" || "eu-west-2" || "eu-west-3" || "eu-north-1" || "eu-south-1" || "eu-south-2" || "me-central-1" || "me-south-1" || "sa-east-1" || "us-east-1" || "us-east-2" || "us-west-1" || "us-west-2" || "cn-north-1" || "cn-northwest-1", // required
 * //       AdditionalArtifacts: [ // AdditionalArtifactList
 * //         "REDSHIFT" || "QUICKSIGHT" || "ATHENA",
 * //       ],
 * //       RefreshClosedReports: true || false,
 * //       ReportVersioning: "CREATE_NEW_REPORT" || "OVERWRITE_REPORT",
 * //       BillingViewArn: "STRING_VALUE",
 * //     },
 * //   ],
 * //   NextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param DescribeReportDefinitionsCommandInput - {@link DescribeReportDefinitionsCommandInput}
 * @returns {@link DescribeReportDefinitionsCommandOutput}
 * @see {@link DescribeReportDefinitionsCommandInput} for command's `input` shape.
 * @see {@link DescribeReportDefinitionsCommandOutput} for command's `response` shape.
 * @see {@link CostAndUsageReportServiceClientResolvedConfig | config} for CostAndUsageReportServiceClient's `config` shape.
 *
 * @throws {@link InternalErrorException} (server fault)
 *  <p>An error on the server occurred during the processing of your request. Try again later.</p>
 *
 * @throws {@link CostAndUsageReportServiceServiceException}
 * <p>Base exception class for all service exceptions from CostAndUsageReportService service.</p>
 *
 * @example To list the AWS Cost and Usage reports for the account.
 * ```javascript
 * // The following example lists the AWS Cost and Usage reports for the account.
 * const input = {
 *   "MaxResults": 5
 * };
 * const command = new DescribeReportDefinitionsCommand(input);
 * const response = await client.send(command);
 * /* response ==
 * {
 *   "ReportDefinitions": [
 *     {
 *       "AdditionalArtifacts": [
 *         "QUICKSIGHT"
 *       ],
 *       "AdditionalSchemaElements": [
 *         "RESOURCES"
 *       ],
 *       "Compression": "GZIP",
 *       "Format": "textORcsv",
 *       "ReportName": "ExampleReport",
 *       "S3Bucket": "example-s3-bucket",
 *       "S3Prefix": "exampleprefix",
 *       "S3Region": "us-east-1",
 *       "TimeUnit": "HOURLY"
 *     },
 *     {
 *       "AdditionalArtifacts": [
 *         "QUICKSIGHT"
 *       ],
 *       "AdditionalSchemaElements": [
 *         "RESOURCES"
 *       ],
 *       "Compression": "GZIP",
 *       "Format": "textORcsv",
 *       "ReportName": "ExampleReport2",
 *       "S3Bucket": "example-s3-bucket",
 *       "S3Prefix": "exampleprefix",
 *       "S3Region": "us-east-1",
 *       "TimeUnit": "HOURLY"
 *     }
 *   ]
 * }
 * *\/
 * // example id: to-retrieve-report-definitions
 * ```
 *
 */
export class DescribeReportDefinitionsCommand extends $Command<
  DescribeReportDefinitionsCommandInput,
  DescribeReportDefinitionsCommandOutput,
  CostAndUsageReportServiceClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  public static getEndpointParameterInstructions(): EndpointParameterInstructions {
    return {
      UseFIPS: { type: "builtInParams", name: "useFipsEndpoint" },
      Endpoint: { type: "builtInParams", name: "endpoint" },
      Region: { type: "builtInParams", name: "region" },
      UseDualStack: { type: "builtInParams", name: "useDualstackEndpoint" },
    };
  }

  /**
   * @public
   */
  constructor(readonly input: DescribeReportDefinitionsCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: CostAndUsageReportServiceClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<DescribeReportDefinitionsCommandInput, DescribeReportDefinitionsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, DescribeReportDefinitionsCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "CostAndUsageReportServiceClient";
    const commandName = "DescribeReportDefinitionsCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  /**
   * @internal
   */
  private serialize(input: DescribeReportDefinitionsCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_DescribeReportDefinitionsCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<DescribeReportDefinitionsCommandOutput> {
    return de_DescribeReportDefinitionsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
