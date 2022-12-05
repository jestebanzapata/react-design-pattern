export class ActionStore {

  type: string;

  payload: any;

  constructor(actionStore: Partial<ActionStore>) {
    Object.assign(this, actionStore);
  }

}