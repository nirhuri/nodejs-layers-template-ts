import EntityDTO from "../../common/entities/entity-dto";
import { PullRequest } from "../../common/entities/pull-request";

export default interface IPullRequestRepository {
  getPullRequest(prNumber: number): Promise<EntityDTO<PullRequest | null>>;
  setPullRequest(pr: PullRequest): Promise<EntityDTO<PullRequest>>;
}
