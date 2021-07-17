export class PullRequest {
  constructor(
    private _prNumber: number,
    private _title: string,
    private _description: string,
    private _author: string,
    private _status: string,
    private _labels: string
  ) {
    this._prNumber = _prNumber;
    this._title = _title;
    this._description = _description;
    this._author = _author;
    this._status = _status;
    this._labels = _labels;
  }

  public get prNumber(): number {
    return this._prNumber;
  }

  public set prNumber(prNum: number) {
    this._prNumber = prNum;
  }

  public get title(): string {
    return this._title;
  }

  public set title(title: string) {
    this._title = title;
  }

  public get description(): string {
    return this._description;
  }

  public set description(description: string) {
    this._description = description;
  }

  public get author(): string {
    return this._author;
  }

  public set author(author: string) {
    this._author = author;
  }

  public get status(): string {
    return this._status;
  }

  public set status(status: string) {
    this._status = status;
  }

  public get labels(): string {
    return this._labels;
  }

  public set labels(labels: string) {
    this._labels = labels;
  }
}
