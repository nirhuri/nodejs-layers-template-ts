export default class EntityDTO<T> {
  constructor(private _entity: T | null, private _isSuccess: boolean) {
    this._entity = _entity;
    this._isSuccess = _isSuccess;
  }

  public get entity() {
    return this._entity;
  }

  public set entity(data: any) {
    this._entity = data;
  }

  public get isSuccess() {
    return this._isSuccess;
  }

  public set isSuccess(isSuccess: boolean) {
    this._isSuccess = isSuccess;
  }
}
