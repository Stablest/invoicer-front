import { validate } from "class-validator";

export type Newable<T> = { new (...args: any[]): T };

const validateJSONToObject = async <T extends object>(res: Response, ModelClass: Newable<T>) => {
  const obj = await res.json();
  const newModel = new ModelClass();
  Object.assign(newModel, obj);
  const errorList = await validate(newModel, { whitelist: true });
  if (errorList.length === 0) {
    return newModel;
  }
  throw new Error([errorList].toString());
};

export { validateJSONToObject };
