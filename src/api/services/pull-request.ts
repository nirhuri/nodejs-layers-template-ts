import IResponse from "../interfaces/response/response";
import ResponseCreator from "../common/response/response-creator";
import IPullRequestRepository from "../interfaces/repositories/pull-request";
import IPullRequestService from "../interfaces/services/pull-request";
import EntityDTO from "../common/entities/entity-dto";
import { PullRequest } from "../common/entities/pull-request";

export default class PullRequestService implements IPullRequestService {
  private pullRequestRepository: IPullRequestRepository;

  constructor(_prRepository: IPullRequestRepository) {
    this.pullRequestRepository = _prRepository;
  }

  public async getPullRequest(
    prNumber: number
  ): Promise<IResponse<PullRequest | null>> {
    if (!prNumber) {
      return ResponseCreator.CreateErrorResponse(
        "Please specify pull request number"
      );
    }

    try {
      let prDTO: EntityDTO<PullRequest | null> =
        await this.pullRequestRepository.getPullRequest(prNumber);

      if (prDTO.isSuccess) {
        return ResponseCreator.CreateSuccessResponse(prDTO.entity);
      } else {
        return ResponseCreator.CreateErrorResponse(
          "Unable to locate pull request"
        );
      }
    } catch (e) {
      throw new Error(e);
    }
  }

  public async setPullRequest(
    pr: PullRequest
  ): Promise<IResponse<PullRequest>> {
    if (!pr.author || pr.description || pr.labels || pr.prNumber || pr.status || pr.title) {
      return ResponseCreator.CreateErrorResponse("Missing data");
    }

    try {
      const prDTO = await this.pullRequestRepository.setPullRequest(pr);
      if (prDTO.isSuccess) {
        return ResponseCreator.CreateSuccessResponse(prDTO.entity)
      } else {
          return ResponseCreator.CreateErrorResponse("Unable to save pull request");
        }
    } catch (e) {
        throw new Error(e);
    }
  }
}
