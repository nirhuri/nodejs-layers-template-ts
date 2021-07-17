import PullRequestService from "../../services/pull-request";
import PullRequestRepository from "../../repositories/pull-request";
import PullRequestController from "../pull-request";

const prRepository = new PullRequestRepository();
const prService = new PullRequestService(prRepository);
const prController = new PullRequestController(prService);

export default prController;
