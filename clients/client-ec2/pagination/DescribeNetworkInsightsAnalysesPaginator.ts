import { EC2 } from "../EC2";
import { EC2Client } from "../EC2Client";
import {
  DescribeNetworkInsightsAnalysesCommand,
  DescribeNetworkInsightsAnalysesCommandInput,
  DescribeNetworkInsightsAnalysesCommandOutput,
} from "../commands/DescribeNetworkInsightsAnalysesCommand";
import { EC2PaginationConfiguration } from "./Interfaces";
import { Paginator } from "@aws-sdk/types";

/**
 * @private
 */
const makePagedClientRequest = async (
  client: EC2Client,
  input: DescribeNetworkInsightsAnalysesCommandInput,
  ...args: any
): Promise<DescribeNetworkInsightsAnalysesCommandOutput> => {
  // @ts-ignore
  return await client.send(new DescribeNetworkInsightsAnalysesCommand(input), ...args);
};
/**
 * @private
 */
const makePagedRequest = async (
  client: EC2,
  input: DescribeNetworkInsightsAnalysesCommandInput,
  ...args: any
): Promise<DescribeNetworkInsightsAnalysesCommandOutput> => {
  // @ts-ignore
  return await client.describeNetworkInsightsAnalyses(input, ...args);
};
export async function* paginateDescribeNetworkInsightsAnalyses(
  config: EC2PaginationConfiguration,
  input: DescribeNetworkInsightsAnalysesCommandInput,
  ...additionalArguments: any
): Paginator<DescribeNetworkInsightsAnalysesCommandOutput> {
  let token: string | undefined = config.startingToken || undefined;
  let hasNext = true;
  let page: DescribeNetworkInsightsAnalysesCommandOutput;
  while (hasNext) {
    input.NextToken = token;
    input["MaxResults"] = config.pageSize;
    if (config.client instanceof EC2) {
      page = await makePagedRequest(config.client, input, ...additionalArguments);
    } else if (config.client instanceof EC2Client) {
      page = await makePagedClientRequest(config.client, input, ...additionalArguments);
    } else {
      throw new Error("Invalid client, expected EC2 | EC2Client");
    }
    yield page;
    token = page.NextToken;
    hasNext = !!token;
  }
  // @ts-ignore
  return undefined;
}
