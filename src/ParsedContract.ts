import { StandardInterfaceId } from './interfaces';

export interface ParsedContract {
  probableInterfaces: StandardInterfaceId[];
  byMethod: Record<string, StandardInterfaceId[]>;
  methodNames: string[];
}
