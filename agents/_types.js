/**
 * @typedef AgentConfig
 * @property {string} name
 * @property {number} overlayCount
 * @property {[number, number]} framesize
 * @property {[number, number]} spritesize
 * @property {Record<string, Animation>} animations
 */

/**
 * @typedef Animation
 * @property {Frame[]} frames
 * @property {boolean} [useExitBranching]
 */

/**
 * @typedef Frame
 * @property {number} duration
 * @property {[number, number][]} [images]
 * @property {number} [exitBranch]
 * @property {{ branches: Branch[] }} [branching]
 */

/**
 * @typedef Branch
 * @property {number} frameIndex
 * @property {number} weight
 */

export {};
