import IResponse from "../../interfaces/response/response";
import { PullRequest } from "../../common/entities/pull-request";

export default interface IPullRequestService {
  getPullRequest(prNumber: number): Promise<IResponse<PullRequest | null>>;
  setPullRequest(pr: PullRequest): Promise<IResponse<PullRequest | null>>;
}
