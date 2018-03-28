import { UPDATE_NODE_STATUS, UPDATE_NODE_STATUS_ERROR } from './constants';
import { Block } from './model';

export interface UpdateNodeStatus {
    type: typeof UPDATE_NODE_STATUS;
    nodeId: string;
    blockNumber: number;
    pendingBlock: Block;
    clientVersion: string;
    networkId: string;
}

export interface UpdateNodeStatusError {
  type: typeof UPDATE_NODE_STATUS_ERROR;
  nodeId: string;
  error: string;
}

export function updateNodeStatus(
  nodeId: string, blockNumber: number, pendingBlock: Block, version: string, networkId: string): UpdateNodeStatus {
    return {
        type: UPDATE_NODE_STATUS,
        nodeId,
        blockNumber,
        pendingBlock,
        clientVersion: version,
        networkId,
    };
}

export function updateNodeStatusError(nodeId: string, error: string) {
  return {
    type: UPDATE_NODE_STATUS_ERROR,
    nodeId,
    error,
  };
}

export type NodesAction = UpdateNodeStatus | UpdateNodeStatusError;