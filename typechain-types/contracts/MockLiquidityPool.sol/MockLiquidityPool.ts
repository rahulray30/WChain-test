/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import type {
  BaseContract,
  BigNumberish,
  BytesLike,
  FunctionFragment,
  Result,
  Interface,
  AddressLike,
  ContractRunner,
  ContractMethod,
  Listener,
} from "ethers";
import type {
  TypedContractEvent,
  TypedDeferredTopicFilter,
  TypedEventLog,
  TypedListener,
  TypedContractMethod,
} from "../../common";

export interface MockLiquidityPoolInterface extends Interface {
  getFunction(
    nameOrSignature:
      | "addLiquidity"
      | "getExchangeRate"
      | "getLiquidity"
      | "liquidity"
      | "removeLiquidity"
      | "swap"
  ): FunctionFragment;

  encodeFunctionData(
    functionFragment: "addLiquidity",
    values: [AddressLike, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "getExchangeRate",
    values: [AddressLike, AddressLike]
  ): string;
  encodeFunctionData(
    functionFragment: "getLiquidity",
    values: [AddressLike]
  ): string;
  encodeFunctionData(
    functionFragment: "liquidity",
    values: [AddressLike]
  ): string;
  encodeFunctionData(
    functionFragment: "removeLiquidity",
    values: [AddressLike, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "swap",
    values: [AddressLike, AddressLike, BigNumberish]
  ): string;

  decodeFunctionResult(
    functionFragment: "addLiquidity",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getExchangeRate",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getLiquidity",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "liquidity", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "removeLiquidity",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "swap", data: BytesLike): Result;
}

export interface MockLiquidityPool extends BaseContract {
  connect(runner?: ContractRunner | null): MockLiquidityPool;
  waitForDeployment(): Promise<this>;

  interface: MockLiquidityPoolInterface;

  queryFilter<TCEvent extends TypedContractEvent>(
    event: TCEvent,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined
  ): Promise<Array<TypedEventLog<TCEvent>>>;
  queryFilter<TCEvent extends TypedContractEvent>(
    filter: TypedDeferredTopicFilter<TCEvent>,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined
  ): Promise<Array<TypedEventLog<TCEvent>>>;

  on<TCEvent extends TypedContractEvent>(
    event: TCEvent,
    listener: TypedListener<TCEvent>
  ): Promise<this>;
  on<TCEvent extends TypedContractEvent>(
    filter: TypedDeferredTopicFilter<TCEvent>,
    listener: TypedListener<TCEvent>
  ): Promise<this>;

  once<TCEvent extends TypedContractEvent>(
    event: TCEvent,
    listener: TypedListener<TCEvent>
  ): Promise<this>;
  once<TCEvent extends TypedContractEvent>(
    filter: TypedDeferredTopicFilter<TCEvent>,
    listener: TypedListener<TCEvent>
  ): Promise<this>;

  listeners<TCEvent extends TypedContractEvent>(
    event: TCEvent
  ): Promise<Array<TypedListener<TCEvent>>>;
  listeners(eventName?: string): Promise<Array<Listener>>;
  removeAllListeners<TCEvent extends TypedContractEvent>(
    event?: TCEvent
  ): Promise<this>;

  addLiquidity: TypedContractMethod<
    [token: AddressLike, amount: BigNumberish],
    [void],
    "nonpayable"
  >;

  getExchangeRate: TypedContractMethod<
    [fromToken: AddressLike, toToken: AddressLike],
    [bigint],
    "view"
  >;

  getLiquidity: TypedContractMethod<[token: AddressLike], [bigint], "view">;

  liquidity: TypedContractMethod<[arg0: AddressLike], [bigint], "view">;

  removeLiquidity: TypedContractMethod<
    [token: AddressLike, amount: BigNumberish],
    [void],
    "nonpayable"
  >;

  swap: TypedContractMethod<
    [fromToken: AddressLike, toToken: AddressLike, amount: BigNumberish],
    [void],
    "nonpayable"
  >;

  getFunction<T extends ContractMethod = ContractMethod>(
    key: string | FunctionFragment
  ): T;

  getFunction(
    nameOrSignature: "addLiquidity"
  ): TypedContractMethod<
    [token: AddressLike, amount: BigNumberish],
    [void],
    "nonpayable"
  >;
  getFunction(
    nameOrSignature: "getExchangeRate"
  ): TypedContractMethod<
    [fromToken: AddressLike, toToken: AddressLike],
    [bigint],
    "view"
  >;
  getFunction(
    nameOrSignature: "getLiquidity"
  ): TypedContractMethod<[token: AddressLike], [bigint], "view">;
  getFunction(
    nameOrSignature: "liquidity"
  ): TypedContractMethod<[arg0: AddressLike], [bigint], "view">;
  getFunction(
    nameOrSignature: "removeLiquidity"
  ): TypedContractMethod<
    [token: AddressLike, amount: BigNumberish],
    [void],
    "nonpayable"
  >;
  getFunction(
    nameOrSignature: "swap"
  ): TypedContractMethod<
    [fromToken: AddressLike, toToken: AddressLike, amount: BigNumberish],
    [void],
    "nonpayable"
  >;

  filters: {};
}
