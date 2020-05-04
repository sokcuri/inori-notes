export enum InoriErrorCode {
  UnitNotExist
}

export class InoriError extends Error {
  extensions: Record<string, unknown>;

  constructor(message: string, code: string) {
    super(message);
    this.extensions = { code };
  }
}

export class UnitNotExistError extends InoriError {
  constructor(unitId: number) {
    const message = `Unit ID ${unitId} does not exist.`;
    const code = InoriErrorCode[InoriErrorCode.UnitNotExist];
    super(message, code);
  }
}
