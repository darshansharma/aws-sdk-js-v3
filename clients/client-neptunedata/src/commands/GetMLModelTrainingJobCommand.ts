// smithy-typescript generated code
import { EndpointParameterInstructions, getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { HttpRequest as __HttpRequest, HttpResponse as __HttpResponse } from "@smithy/protocol-http";
import { Command as $Command } from "@smithy/smithy-client";
import {
  FinalizeHandlerArguments,
  Handler,
  HandlerExecutionContext,
  HttpHandlerOptions as __HttpHandlerOptions,
  MetadataBearer as __MetadataBearer,
  MiddlewareStack,
  SerdeContext as __SerdeContext,
} from "@smithy/types";

import { GetMLModelTrainingJobInput, GetMLModelTrainingJobOutput } from "../models/models_0";
import { NeptunedataClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../NeptunedataClient";
import { de_GetMLModelTrainingJobCommand, se_GetMLModelTrainingJobCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link GetMLModelTrainingJobCommand}.
 */
export interface GetMLModelTrainingJobCommandInput extends GetMLModelTrainingJobInput {}
/**
 * @public
 *
 * The output of {@link GetMLModelTrainingJobCommand}.
 */
export interface GetMLModelTrainingJobCommandOutput extends GetMLModelTrainingJobOutput, __MetadataBearer {}

/**
 * @public
 * <p>Retrieves information about a Neptune ML model training job. See <a href="https://docs.aws.amazon.com/neptune/latest/userguide/machine-learning-api-modeltraining.html">Model
 *       training using the <code>modeltraining</code> command</a>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { NeptunedataClient, GetMLModelTrainingJobCommand } from "@aws-sdk/client-neptunedata"; // ES Modules import
 * // const { NeptunedataClient, GetMLModelTrainingJobCommand } = require("@aws-sdk/client-neptunedata"); // CommonJS import
 * const client = new NeptunedataClient(config);
 * const input = { // GetMLModelTrainingJobInput
 *   id: "STRING_VALUE", // required
 *   neptuneIamRoleArn: "STRING_VALUE",
 * };
 * const command = new GetMLModelTrainingJobCommand(input);
 * const response = await client.send(command);
 * // { // GetMLModelTrainingJobOutput
 * //   status: "STRING_VALUE",
 * //   id: "STRING_VALUE",
 * //   processingJob: { // MlResourceDefinition
 * //     name: "STRING_VALUE",
 * //     arn: "STRING_VALUE",
 * //     status: "STRING_VALUE",
 * //     outputLocation: "STRING_VALUE",
 * //     failureReason: "STRING_VALUE",
 * //     cloudwatchLogUrl: "STRING_VALUE",
 * //   },
 * //   hpoJob: {
 * //     name: "STRING_VALUE",
 * //     arn: "STRING_VALUE",
 * //     status: "STRING_VALUE",
 * //     outputLocation: "STRING_VALUE",
 * //     failureReason: "STRING_VALUE",
 * //     cloudwatchLogUrl: "STRING_VALUE",
 * //   },
 * //   modelTransformJob: {
 * //     name: "STRING_VALUE",
 * //     arn: "STRING_VALUE",
 * //     status: "STRING_VALUE",
 * //     outputLocation: "STRING_VALUE",
 * //     failureReason: "STRING_VALUE",
 * //     cloudwatchLogUrl: "STRING_VALUE",
 * //   },
 * //   mlModels: [ // MlModels
 * //     { // MlConfigDefinition
 * //       name: "STRING_VALUE",
 * //       arn: "STRING_VALUE",
 * //     },
 * //   ],
 * // };
 *
 * ```
 *
 * @param GetMLModelTrainingJobCommandInput - {@link GetMLModelTrainingJobCommandInput}
 * @returns {@link GetMLModelTrainingJobCommandOutput}
 * @see {@link GetMLModelTrainingJobCommandInput} for command's `input` shape.
 * @see {@link GetMLModelTrainingJobCommandOutput} for command's `response` shape.
 * @see {@link NeptunedataClientResolvedConfig | config} for NeptunedataClient's `config` shape.
 *
 * @throws {@link BadRequestException} (client fault)
 *  <p>Raised when a request is submitted that cannot be processed.</p>
 *
 * @throws {@link ClientTimeoutException} (client fault)
 *  <p>Raised when a request timed out in the client.</p>
 *
 * @throws {@link ConstraintViolationException} (client fault)
 *  <p>Raised when a value in a request field did not satisfy required constraints.</p>
 *
 * @throws {@link IllegalArgumentException} (client fault)
 *  <p>Raised when an argument in a request is not supported.</p>
 *
 * @throws {@link InvalidArgumentException} (client fault)
 *  <p>Raised when an argument in a request has an invalid value.</p>
 *
 * @throws {@link InvalidParameterException} (client fault)
 *  <p>Raised when a parameter value is not valid.</p>
 *
 * @throws {@link MissingParameterException} (client fault)
 *  <p>Raised when a required parameter is missing.</p>
 *
 * @throws {@link MLResourceNotFoundException} (client fault)
 *  <p>Raised when a specified machine-learning resource could not be found.</p>
 *
 * @throws {@link PreconditionsFailedException} (client fault)
 *  <p>Raised when a precondition for processing a request is not satisfied.</p>
 *
 * @throws {@link TooManyRequestsException} (client fault)
 *  <p>Raised when the number of requests being processed exceeds the limit.</p>
 *
 * @throws {@link UnsupportedOperationException} (client fault)
 *  <p>Raised when a request attempts to initiate an operation that is not supported.</p>
 *
 * @throws {@link NeptunedataServiceException}
 * <p>Base exception class for all service exceptions from Neptunedata service.</p>
 *
 */
export class GetMLModelTrainingJobCommand extends $Command<
  GetMLModelTrainingJobCommandInput,
  GetMLModelTrainingJobCommandOutput,
  NeptunedataClientResolvedConfig
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
  constructor(readonly input: GetMLModelTrainingJobCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: NeptunedataClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<GetMLModelTrainingJobCommandInput, GetMLModelTrainingJobCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, GetMLModelTrainingJobCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "NeptunedataClient";
    const commandName = "GetMLModelTrainingJobCommand";
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
  private serialize(input: GetMLModelTrainingJobCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_GetMLModelTrainingJobCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<GetMLModelTrainingJobCommandOutput> {
    return de_GetMLModelTrainingJobCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
