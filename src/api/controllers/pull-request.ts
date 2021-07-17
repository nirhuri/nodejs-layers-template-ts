import express from "express";
import { Request, Response } from "express";
import { PullRequest } from "../common/entities/pull-request";
import { HTTP_CODES } from "../common/response/http-codes";
import ResponseCreator from "../common/response/response-creator";
import IControllerBase from "../interfaces/controllers/controller-base";
import IPullRequestService from "../interfaces/services/pull-request";

class AdminController implements IControllerBase {
  public path = "/";
  public router = express.Router();
  private pullRequestService: IPullRequestService;

  constructor(_prService: IPullRequestService) {
    this.pullRequestService = _prService;
    this.initRoutes();
  }

  initRoutes() {
    this.router.post("/pr/savePullRequest", this.saveNewPullRequest);

    this.router.get(
      "/pr/fetchPullRequest/:prNumber",
      this.getPullRequestByPrNumber
    );
  }

  saveNewPullRequest = async (req: Request, res: Response) => {
    try {
      const result = await this.pullRequestService.setPullRequest(
        new PullRequest(
          req.body.prNumber,
          req.body.title,
          req.body.description,
          req.body.author,
          req.body.status,
          req.body.labels
        )
      );
      res.status(HTTP_CODES.CREATED).send(result);
    } catch {
      res
        .status(HTTP_CODES.INTERNAL_SERVER_ERROR)
        .send(ResponseCreator.CreateErrorResponse("Internal Server Error"));
    }
  };

  getPullRequestByPrNumber = async (req: Request, res: Response) => {
    try {
      const prNumber: number = Number(req.params.prNumber);
      const pull_request = await this.pullRequestService.getPullRequest(prNumber);

      res.status(HTTP_CODES.OK).send(pull_request);
    } catch {
      res
        .status(HTTP_CODES.INTERNAL_SERVER_ERROR)
        .send(ResponseCreator.CreateErrorResponse("Internal Server Error"));
    }
  };
}

export default AdminController;
