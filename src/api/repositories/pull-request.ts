import IPullRequestRepository from "../interfaces/repositories/pull-request";
import EntityDTO from "../common/entities/entity-dto";
import { PullRequest } from "../common/entities/pull-request";
import PullRequestModel from "./schemas/pull-request";

export default class PullRequestRepository implements IPullRequestRepository {
  public async getPullRequest(
    prNumber: number
  ): Promise<EntityDTO<PullRequest | null>> {
    try {
      const user = await PullRequestModel.findOne({ prNumber }).exec();

      if (user) {
        return new EntityDTO(
          new PullRequest(
            user.prNumber,
            user.title,
            user.description,
            user.author,
            user.status,
            user.labels
          ),
          true
        );
      } else {
        return new EntityDTO(null, false);
      }
    } catch (e) {
      throw new Error(e);
    }
  }

  public async setPullRequest(
    pr: PullRequest
  ): Promise<EntityDTO<PullRequest>> {
      try {
          const pull_request = new PullRequestModel({
              prNumber: pr.prNumber,
              title: pr.title,
              description: pr.description,
              author: pr.author,
              status: pr.status,
              labels: pr.labels
          });

          await pull_request.save();
          return new EntityDTO(pr, true);

      } catch (e) {
          throw new Error(e);
    }
  }
}
