/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { ERC20Contract } from "./ERC20";
import { ERC20BurnableContract } from "./ERC20Burnable";
import { FarmContract } from "./Farm";
import { IERC20Contract } from "./IERC20";
import { MigrationsContract } from "./Migrations";
import { TokenContract } from "./Token";

declare global {
  namespace Truffle {
    interface Artifacts {
      require(name: "ERC20"): ERC20Contract;
      require(name: "ERC20Burnable"): ERC20BurnableContract;
      require(name: "Farm"): FarmContract;
      require(name: "IERC20"): IERC20Contract;
      require(name: "Migrations"): MigrationsContract;
      require(name: "Token"): TokenContract;
    }
  }
}

export { ERC20Contract, ERC20Instance } from "./ERC20";
export {
  ERC20BurnableContract,
  ERC20BurnableInstance,
} from "./ERC20Burnable";
export { FarmContract, FarmInstance } from "./Farm";
export { IERC20Contract, IERC20Instance } from "./IERC20";
export { MigrationsContract, MigrationsInstance } from "./Migrations";
export { TokenContract, TokenInstance } from "./Token";
