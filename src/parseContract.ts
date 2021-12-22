import { getProbableInterfaces } from './getProbableInterfaces';
import { ParsedContract } from './ParsedContract';
import { getMethodNames } from './methods';

export function parseContract(code_base64: string): ParsedContract {
  const methodNames = getMethodNames(code_base64);
  const probableInterfaces = getProbableInterfaces(methodNames);
  return {
    methodNames,
    ...probableInterfaces,
  };
}
