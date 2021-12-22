import { StandardInterfaceId } from './interfaces';

export interface ParsedContract {
  /**
   * Standard interfaces the original contract is likely to support
   */
  probableInterfaces: StandardInterfaceId[];
  /**
   * Maps method names to the ID of the interface they are likey to constitute
   */
  byMethod: Record<string, StandardInterfaceId[]>;
  /**
   * Names of functions exported from the original contract
   */
  methodNames: string[];
}
