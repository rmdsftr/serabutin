
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model addresses
 * 
 */
export type addresses = $Result.DefaultSelection<Prisma.$addressesPayload>
/**
 * Model cities
 * 
 */
export type cities = $Result.DefaultSelection<Prisma.$citiesPayload>
/**
 * Model profession
 * 
 */
export type profession = $Result.DefaultSelection<Prisma.$professionPayload>
/**
 * Model profession_user
 * 
 */
export type profession_user = $Result.DefaultSelection<Prisma.$profession_userPayload>
/**
 * Model provinces
 * 
 */
export type provinces = $Result.DefaultSelection<Prisma.$provincesPayload>
/**
 * Model user_address
 * 
 */
export type user_address = $Result.DefaultSelection<Prisma.$user_addressPayload>
/**
 * Model users
 * 
 */
export type users = $Result.DefaultSelection<Prisma.$usersPayload>
/**
 * Model profession_category
 * 
 */
export type profession_category = $Result.DefaultSelection<Prisma.$profession_categoryPayload>

/**
 * Enums
 */
export namespace $Enums {
  export const gender_enum: {
  Laki_laki: 'Laki_laki',
  Perempuan: 'Perempuan',
  Lainnya: 'Lainnya'
};

export type gender_enum = (typeof gender_enum)[keyof typeof gender_enum]


export const status_user_enum: {
  Active: 'Active',
  Deactive: 'Deactive',
  Suspend: 'Suspend'
};

export type status_user_enum = (typeof status_user_enum)[keyof typeof status_user_enum]

}

export type gender_enum = $Enums.gender_enum

export const gender_enum: typeof $Enums.gender_enum

export type status_user_enum = $Enums.status_user_enum

export const status_user_enum: typeof $Enums.status_user_enum

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Addresses
 * const addresses = await prisma.addresses.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Addresses
   * const addresses = await prisma.addresses.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

  /**
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
   */
  $use(cb: Prisma.Middleware): void

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.addresses`: Exposes CRUD operations for the **addresses** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Addresses
    * const addresses = await prisma.addresses.findMany()
    * ```
    */
  get addresses(): Prisma.addressesDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.cities`: Exposes CRUD operations for the **cities** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Cities
    * const cities = await prisma.cities.findMany()
    * ```
    */
  get cities(): Prisma.citiesDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.profession`: Exposes CRUD operations for the **profession** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Professions
    * const professions = await prisma.profession.findMany()
    * ```
    */
  get profession(): Prisma.professionDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.profession_user`: Exposes CRUD operations for the **profession_user** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Profession_users
    * const profession_users = await prisma.profession_user.findMany()
    * ```
    */
  get profession_user(): Prisma.profession_userDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.provinces`: Exposes CRUD operations for the **provinces** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Provinces
    * const provinces = await prisma.provinces.findMany()
    * ```
    */
  get provinces(): Prisma.provincesDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.user_address`: Exposes CRUD operations for the **user_address** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more User_addresses
    * const user_addresses = await prisma.user_address.findMany()
    * ```
    */
  get user_address(): Prisma.user_addressDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.users`: Exposes CRUD operations for the **users** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.users.findMany()
    * ```
    */
  get users(): Prisma.usersDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.profession_category`: Exposes CRUD operations for the **profession_category** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Profession_categories
    * const profession_categories = await prisma.profession_category.findMany()
    * ```
    */
  get profession_category(): Prisma.profession_categoryDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 6.8.2
   * Query Engine version: 2060c79ba17c6bb9f5823312b6f6b7f4a845738e
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    addresses: 'addresses',
    cities: 'cities',
    profession: 'profession',
    profession_user: 'profession_user',
    provinces: 'provinces',
    user_address: 'user_address',
    users: 'users',
    profession_category: 'profession_category'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "addresses" | "cities" | "profession" | "profession_user" | "provinces" | "user_address" | "users" | "profession_category"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      addresses: {
        payload: Prisma.$addressesPayload<ExtArgs>
        fields: Prisma.addressesFieldRefs
        operations: {
          findUnique: {
            args: Prisma.addressesFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$addressesPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.addressesFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$addressesPayload>
          }
          findFirst: {
            args: Prisma.addressesFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$addressesPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.addressesFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$addressesPayload>
          }
          findMany: {
            args: Prisma.addressesFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$addressesPayload>[]
          }
          create: {
            args: Prisma.addressesCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$addressesPayload>
          }
          createMany: {
            args: Prisma.addressesCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.addressesCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$addressesPayload>[]
          }
          delete: {
            args: Prisma.addressesDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$addressesPayload>
          }
          update: {
            args: Prisma.addressesUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$addressesPayload>
          }
          deleteMany: {
            args: Prisma.addressesDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.addressesUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.addressesUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$addressesPayload>[]
          }
          upsert: {
            args: Prisma.addressesUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$addressesPayload>
          }
          aggregate: {
            args: Prisma.AddressesAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAddresses>
          }
          groupBy: {
            args: Prisma.addressesGroupByArgs<ExtArgs>
            result: $Utils.Optional<AddressesGroupByOutputType>[]
          }
          count: {
            args: Prisma.addressesCountArgs<ExtArgs>
            result: $Utils.Optional<AddressesCountAggregateOutputType> | number
          }
        }
      }
      cities: {
        payload: Prisma.$citiesPayload<ExtArgs>
        fields: Prisma.citiesFieldRefs
        operations: {
          findUnique: {
            args: Prisma.citiesFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$citiesPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.citiesFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$citiesPayload>
          }
          findFirst: {
            args: Prisma.citiesFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$citiesPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.citiesFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$citiesPayload>
          }
          findMany: {
            args: Prisma.citiesFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$citiesPayload>[]
          }
          create: {
            args: Prisma.citiesCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$citiesPayload>
          }
          createMany: {
            args: Prisma.citiesCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.citiesCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$citiesPayload>[]
          }
          delete: {
            args: Prisma.citiesDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$citiesPayload>
          }
          update: {
            args: Prisma.citiesUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$citiesPayload>
          }
          deleteMany: {
            args: Prisma.citiesDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.citiesUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.citiesUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$citiesPayload>[]
          }
          upsert: {
            args: Prisma.citiesUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$citiesPayload>
          }
          aggregate: {
            args: Prisma.CitiesAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCities>
          }
          groupBy: {
            args: Prisma.citiesGroupByArgs<ExtArgs>
            result: $Utils.Optional<CitiesGroupByOutputType>[]
          }
          count: {
            args: Prisma.citiesCountArgs<ExtArgs>
            result: $Utils.Optional<CitiesCountAggregateOutputType> | number
          }
        }
      }
      profession: {
        payload: Prisma.$professionPayload<ExtArgs>
        fields: Prisma.professionFieldRefs
        operations: {
          findUnique: {
            args: Prisma.professionFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$professionPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.professionFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$professionPayload>
          }
          findFirst: {
            args: Prisma.professionFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$professionPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.professionFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$professionPayload>
          }
          findMany: {
            args: Prisma.professionFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$professionPayload>[]
          }
          create: {
            args: Prisma.professionCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$professionPayload>
          }
          createMany: {
            args: Prisma.professionCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.professionCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$professionPayload>[]
          }
          delete: {
            args: Prisma.professionDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$professionPayload>
          }
          update: {
            args: Prisma.professionUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$professionPayload>
          }
          deleteMany: {
            args: Prisma.professionDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.professionUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.professionUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$professionPayload>[]
          }
          upsert: {
            args: Prisma.professionUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$professionPayload>
          }
          aggregate: {
            args: Prisma.ProfessionAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateProfession>
          }
          groupBy: {
            args: Prisma.professionGroupByArgs<ExtArgs>
            result: $Utils.Optional<ProfessionGroupByOutputType>[]
          }
          count: {
            args: Prisma.professionCountArgs<ExtArgs>
            result: $Utils.Optional<ProfessionCountAggregateOutputType> | number
          }
        }
      }
      profession_user: {
        payload: Prisma.$profession_userPayload<ExtArgs>
        fields: Prisma.profession_userFieldRefs
        operations: {
          findUnique: {
            args: Prisma.profession_userFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$profession_userPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.profession_userFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$profession_userPayload>
          }
          findFirst: {
            args: Prisma.profession_userFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$profession_userPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.profession_userFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$profession_userPayload>
          }
          findMany: {
            args: Prisma.profession_userFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$profession_userPayload>[]
          }
          create: {
            args: Prisma.profession_userCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$profession_userPayload>
          }
          createMany: {
            args: Prisma.profession_userCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.profession_userCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$profession_userPayload>[]
          }
          delete: {
            args: Prisma.profession_userDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$profession_userPayload>
          }
          update: {
            args: Prisma.profession_userUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$profession_userPayload>
          }
          deleteMany: {
            args: Prisma.profession_userDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.profession_userUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.profession_userUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$profession_userPayload>[]
          }
          upsert: {
            args: Prisma.profession_userUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$profession_userPayload>
          }
          aggregate: {
            args: Prisma.Profession_userAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateProfession_user>
          }
          groupBy: {
            args: Prisma.profession_userGroupByArgs<ExtArgs>
            result: $Utils.Optional<Profession_userGroupByOutputType>[]
          }
          count: {
            args: Prisma.profession_userCountArgs<ExtArgs>
            result: $Utils.Optional<Profession_userCountAggregateOutputType> | number
          }
        }
      }
      provinces: {
        payload: Prisma.$provincesPayload<ExtArgs>
        fields: Prisma.provincesFieldRefs
        operations: {
          findUnique: {
            args: Prisma.provincesFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$provincesPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.provincesFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$provincesPayload>
          }
          findFirst: {
            args: Prisma.provincesFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$provincesPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.provincesFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$provincesPayload>
          }
          findMany: {
            args: Prisma.provincesFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$provincesPayload>[]
          }
          create: {
            args: Prisma.provincesCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$provincesPayload>
          }
          createMany: {
            args: Prisma.provincesCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.provincesCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$provincesPayload>[]
          }
          delete: {
            args: Prisma.provincesDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$provincesPayload>
          }
          update: {
            args: Prisma.provincesUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$provincesPayload>
          }
          deleteMany: {
            args: Prisma.provincesDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.provincesUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.provincesUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$provincesPayload>[]
          }
          upsert: {
            args: Prisma.provincesUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$provincesPayload>
          }
          aggregate: {
            args: Prisma.ProvincesAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateProvinces>
          }
          groupBy: {
            args: Prisma.provincesGroupByArgs<ExtArgs>
            result: $Utils.Optional<ProvincesGroupByOutputType>[]
          }
          count: {
            args: Prisma.provincesCountArgs<ExtArgs>
            result: $Utils.Optional<ProvincesCountAggregateOutputType> | number
          }
        }
      }
      user_address: {
        payload: Prisma.$user_addressPayload<ExtArgs>
        fields: Prisma.user_addressFieldRefs
        operations: {
          findUnique: {
            args: Prisma.user_addressFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$user_addressPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.user_addressFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$user_addressPayload>
          }
          findFirst: {
            args: Prisma.user_addressFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$user_addressPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.user_addressFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$user_addressPayload>
          }
          findMany: {
            args: Prisma.user_addressFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$user_addressPayload>[]
          }
          create: {
            args: Prisma.user_addressCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$user_addressPayload>
          }
          createMany: {
            args: Prisma.user_addressCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.user_addressCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$user_addressPayload>[]
          }
          delete: {
            args: Prisma.user_addressDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$user_addressPayload>
          }
          update: {
            args: Prisma.user_addressUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$user_addressPayload>
          }
          deleteMany: {
            args: Prisma.user_addressDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.user_addressUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.user_addressUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$user_addressPayload>[]
          }
          upsert: {
            args: Prisma.user_addressUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$user_addressPayload>
          }
          aggregate: {
            args: Prisma.User_addressAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUser_address>
          }
          groupBy: {
            args: Prisma.user_addressGroupByArgs<ExtArgs>
            result: $Utils.Optional<User_addressGroupByOutputType>[]
          }
          count: {
            args: Prisma.user_addressCountArgs<ExtArgs>
            result: $Utils.Optional<User_addressCountAggregateOutputType> | number
          }
        }
      }
      users: {
        payload: Prisma.$usersPayload<ExtArgs>
        fields: Prisma.usersFieldRefs
        operations: {
          findUnique: {
            args: Prisma.usersFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.usersFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload>
          }
          findFirst: {
            args: Prisma.usersFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.usersFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload>
          }
          findMany: {
            args: Prisma.usersFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload>[]
          }
          create: {
            args: Prisma.usersCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload>
          }
          createMany: {
            args: Prisma.usersCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.usersCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload>[]
          }
          delete: {
            args: Prisma.usersDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload>
          }
          update: {
            args: Prisma.usersUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload>
          }
          deleteMany: {
            args: Prisma.usersDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.usersUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.usersUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload>[]
          }
          upsert: {
            args: Prisma.usersUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload>
          }
          aggregate: {
            args: Prisma.UsersAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUsers>
          }
          groupBy: {
            args: Prisma.usersGroupByArgs<ExtArgs>
            result: $Utils.Optional<UsersGroupByOutputType>[]
          }
          count: {
            args: Prisma.usersCountArgs<ExtArgs>
            result: $Utils.Optional<UsersCountAggregateOutputType> | number
          }
        }
      }
      profession_category: {
        payload: Prisma.$profession_categoryPayload<ExtArgs>
        fields: Prisma.profession_categoryFieldRefs
        operations: {
          findUnique: {
            args: Prisma.profession_categoryFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$profession_categoryPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.profession_categoryFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$profession_categoryPayload>
          }
          findFirst: {
            args: Prisma.profession_categoryFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$profession_categoryPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.profession_categoryFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$profession_categoryPayload>
          }
          findMany: {
            args: Prisma.profession_categoryFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$profession_categoryPayload>[]
          }
          create: {
            args: Prisma.profession_categoryCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$profession_categoryPayload>
          }
          createMany: {
            args: Prisma.profession_categoryCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.profession_categoryCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$profession_categoryPayload>[]
          }
          delete: {
            args: Prisma.profession_categoryDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$profession_categoryPayload>
          }
          update: {
            args: Prisma.profession_categoryUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$profession_categoryPayload>
          }
          deleteMany: {
            args: Prisma.profession_categoryDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.profession_categoryUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.profession_categoryUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$profession_categoryPayload>[]
          }
          upsert: {
            args: Prisma.profession_categoryUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$profession_categoryPayload>
          }
          aggregate: {
            args: Prisma.Profession_categoryAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateProfession_category>
          }
          groupBy: {
            args: Prisma.profession_categoryGroupByArgs<ExtArgs>
            result: $Utils.Optional<Profession_categoryGroupByOutputType>[]
          }
          count: {
            args: Prisma.profession_categoryCountArgs<ExtArgs>
            result: $Utils.Optional<Profession_categoryCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *   { emit: 'stdout', level: 'query' },
     *   { emit: 'stdout', level: 'info' },
     *   { emit: 'stdout', level: 'warn' }
     *   { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
  }
  export type GlobalOmitConfig = {
    addresses?: addressesOmit
    cities?: citiesOmit
    profession?: professionOmit
    profession_user?: profession_userOmit
    provinces?: provincesOmit
    user_address?: user_addressOmit
    users?: usersOmit
    profession_category?: profession_categoryOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type AddressesCountOutputType
   */

  export type AddressesCountOutputType = {
    user_address: number
  }

  export type AddressesCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user_address?: boolean | AddressesCountOutputTypeCountUser_addressArgs
  }

  // Custom InputTypes
  /**
   * AddressesCountOutputType without action
   */
  export type AddressesCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AddressesCountOutputType
     */
    select?: AddressesCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * AddressesCountOutputType without action
   */
  export type AddressesCountOutputTypeCountUser_addressArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: user_addressWhereInput
  }


  /**
   * Count Type CitiesCountOutputType
   */

  export type CitiesCountOutputType = {
    addresses: number
  }

  export type CitiesCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    addresses?: boolean | CitiesCountOutputTypeCountAddressesArgs
  }

  // Custom InputTypes
  /**
   * CitiesCountOutputType without action
   */
  export type CitiesCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CitiesCountOutputType
     */
    select?: CitiesCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * CitiesCountOutputType without action
   */
  export type CitiesCountOutputTypeCountAddressesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: addressesWhereInput
  }


  /**
   * Count Type ProfessionCountOutputType
   */

  export type ProfessionCountOutputType = {
    profession_user: number
  }

  export type ProfessionCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    profession_user?: boolean | ProfessionCountOutputTypeCountProfession_userArgs
  }

  // Custom InputTypes
  /**
   * ProfessionCountOutputType without action
   */
  export type ProfessionCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProfessionCountOutputType
     */
    select?: ProfessionCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ProfessionCountOutputType without action
   */
  export type ProfessionCountOutputTypeCountProfession_userArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: profession_userWhereInput
  }


  /**
   * Count Type ProvincesCountOutputType
   */

  export type ProvincesCountOutputType = {
    addresses: number
    cities: number
  }

  export type ProvincesCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    addresses?: boolean | ProvincesCountOutputTypeCountAddressesArgs
    cities?: boolean | ProvincesCountOutputTypeCountCitiesArgs
  }

  // Custom InputTypes
  /**
   * ProvincesCountOutputType without action
   */
  export type ProvincesCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProvincesCountOutputType
     */
    select?: ProvincesCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ProvincesCountOutputType without action
   */
  export type ProvincesCountOutputTypeCountAddressesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: addressesWhereInput
  }

  /**
   * ProvincesCountOutputType without action
   */
  export type ProvincesCountOutputTypeCountCitiesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: citiesWhereInput
  }


  /**
   * Count Type UsersCountOutputType
   */

  export type UsersCountOutputType = {
    profession_user: number
    user_address: number
  }

  export type UsersCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    profession_user?: boolean | UsersCountOutputTypeCountProfession_userArgs
    user_address?: boolean | UsersCountOutputTypeCountUser_addressArgs
  }

  // Custom InputTypes
  /**
   * UsersCountOutputType without action
   */
  export type UsersCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UsersCountOutputType
     */
    select?: UsersCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * UsersCountOutputType without action
   */
  export type UsersCountOutputTypeCountProfession_userArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: profession_userWhereInput
  }

  /**
   * UsersCountOutputType without action
   */
  export type UsersCountOutputTypeCountUser_addressArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: user_addressWhereInput
  }


  /**
   * Count Type Profession_categoryCountOutputType
   */

  export type Profession_categoryCountOutputType = {
    profession: number
  }

  export type Profession_categoryCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    profession?: boolean | Profession_categoryCountOutputTypeCountProfessionArgs
  }

  // Custom InputTypes
  /**
   * Profession_categoryCountOutputType without action
   */
  export type Profession_categoryCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Profession_categoryCountOutputType
     */
    select?: Profession_categoryCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * Profession_categoryCountOutputType without action
   */
  export type Profession_categoryCountOutputTypeCountProfessionArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: professionWhereInput
  }


  /**
   * Models
   */

  /**
   * Model addresses
   */

  export type AggregateAddresses = {
    _count: AddressesCountAggregateOutputType | null
    _avg: AddressesAvgAggregateOutputType | null
    _sum: AddressesSumAggregateOutputType | null
    _min: AddressesMinAggregateOutputType | null
    _max: AddressesMaxAggregateOutputType | null
  }

  export type AddressesAvgAggregateOutputType = {
    latitude: Decimal | null
    longitude: Decimal | null
    id_kota: number | null
    id_prov: number | null
  }

  export type AddressesSumAggregateOutputType = {
    latitude: Decimal | null
    longitude: Decimal | null
    id_kota: number | null
    id_prov: number | null
  }

  export type AddressesMinAggregateOutputType = {
    id_alamat: string | null
    alamat: string | null
    latitude: Decimal | null
    longitude: Decimal | null
    id_kota: number | null
    id_prov: number | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type AddressesMaxAggregateOutputType = {
    id_alamat: string | null
    alamat: string | null
    latitude: Decimal | null
    longitude: Decimal | null
    id_kota: number | null
    id_prov: number | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type AddressesCountAggregateOutputType = {
    id_alamat: number
    alamat: number
    latitude: number
    longitude: number
    id_kota: number
    id_prov: number
    created_at: number
    updated_at: number
    _all: number
  }


  export type AddressesAvgAggregateInputType = {
    latitude?: true
    longitude?: true
    id_kota?: true
    id_prov?: true
  }

  export type AddressesSumAggregateInputType = {
    latitude?: true
    longitude?: true
    id_kota?: true
    id_prov?: true
  }

  export type AddressesMinAggregateInputType = {
    id_alamat?: true
    alamat?: true
    latitude?: true
    longitude?: true
    id_kota?: true
    id_prov?: true
    created_at?: true
    updated_at?: true
  }

  export type AddressesMaxAggregateInputType = {
    id_alamat?: true
    alamat?: true
    latitude?: true
    longitude?: true
    id_kota?: true
    id_prov?: true
    created_at?: true
    updated_at?: true
  }

  export type AddressesCountAggregateInputType = {
    id_alamat?: true
    alamat?: true
    latitude?: true
    longitude?: true
    id_kota?: true
    id_prov?: true
    created_at?: true
    updated_at?: true
    _all?: true
  }

  export type AddressesAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which addresses to aggregate.
     */
    where?: addressesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of addresses to fetch.
     */
    orderBy?: addressesOrderByWithRelationInput | addressesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: addressesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` addresses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` addresses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned addresses
    **/
    _count?: true | AddressesCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: AddressesAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: AddressesSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AddressesMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AddressesMaxAggregateInputType
  }

  export type GetAddressesAggregateType<T extends AddressesAggregateArgs> = {
        [P in keyof T & keyof AggregateAddresses]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAddresses[P]>
      : GetScalarType<T[P], AggregateAddresses[P]>
  }




  export type addressesGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: addressesWhereInput
    orderBy?: addressesOrderByWithAggregationInput | addressesOrderByWithAggregationInput[]
    by: AddressesScalarFieldEnum[] | AddressesScalarFieldEnum
    having?: addressesScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AddressesCountAggregateInputType | true
    _avg?: AddressesAvgAggregateInputType
    _sum?: AddressesSumAggregateInputType
    _min?: AddressesMinAggregateInputType
    _max?: AddressesMaxAggregateInputType
  }

  export type AddressesGroupByOutputType = {
    id_alamat: string
    alamat: string
    latitude: Decimal
    longitude: Decimal
    id_kota: number | null
    id_prov: number | null
    created_at: Date | null
    updated_at: Date | null
    _count: AddressesCountAggregateOutputType | null
    _avg: AddressesAvgAggregateOutputType | null
    _sum: AddressesSumAggregateOutputType | null
    _min: AddressesMinAggregateOutputType | null
    _max: AddressesMaxAggregateOutputType | null
  }

  type GetAddressesGroupByPayload<T extends addressesGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AddressesGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AddressesGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AddressesGroupByOutputType[P]>
            : GetScalarType<T[P], AddressesGroupByOutputType[P]>
        }
      >
    >


  export type addressesSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id_alamat?: boolean
    alamat?: boolean
    latitude?: boolean
    longitude?: boolean
    id_kota?: boolean
    id_prov?: boolean
    created_at?: boolean
    updated_at?: boolean
    cities?: boolean | addresses$citiesArgs<ExtArgs>
    provinces?: boolean | addresses$provincesArgs<ExtArgs>
    user_address?: boolean | addresses$user_addressArgs<ExtArgs>
    _count?: boolean | AddressesCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["addresses"]>

  export type addressesSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id_alamat?: boolean
    alamat?: boolean
    latitude?: boolean
    longitude?: boolean
    id_kota?: boolean
    id_prov?: boolean
    created_at?: boolean
    updated_at?: boolean
    cities?: boolean | addresses$citiesArgs<ExtArgs>
    provinces?: boolean | addresses$provincesArgs<ExtArgs>
  }, ExtArgs["result"]["addresses"]>

  export type addressesSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id_alamat?: boolean
    alamat?: boolean
    latitude?: boolean
    longitude?: boolean
    id_kota?: boolean
    id_prov?: boolean
    created_at?: boolean
    updated_at?: boolean
    cities?: boolean | addresses$citiesArgs<ExtArgs>
    provinces?: boolean | addresses$provincesArgs<ExtArgs>
  }, ExtArgs["result"]["addresses"]>

  export type addressesSelectScalar = {
    id_alamat?: boolean
    alamat?: boolean
    latitude?: boolean
    longitude?: boolean
    id_kota?: boolean
    id_prov?: boolean
    created_at?: boolean
    updated_at?: boolean
  }

  export type addressesOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id_alamat" | "alamat" | "latitude" | "longitude" | "id_kota" | "id_prov" | "created_at" | "updated_at", ExtArgs["result"]["addresses"]>
  export type addressesInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    cities?: boolean | addresses$citiesArgs<ExtArgs>
    provinces?: boolean | addresses$provincesArgs<ExtArgs>
    user_address?: boolean | addresses$user_addressArgs<ExtArgs>
    _count?: boolean | AddressesCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type addressesIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    cities?: boolean | addresses$citiesArgs<ExtArgs>
    provinces?: boolean | addresses$provincesArgs<ExtArgs>
  }
  export type addressesIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    cities?: boolean | addresses$citiesArgs<ExtArgs>
    provinces?: boolean | addresses$provincesArgs<ExtArgs>
  }

  export type $addressesPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "addresses"
    objects: {
      cities: Prisma.$citiesPayload<ExtArgs> | null
      provinces: Prisma.$provincesPayload<ExtArgs> | null
      user_address: Prisma.$user_addressPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id_alamat: string
      alamat: string
      latitude: Prisma.Decimal
      longitude: Prisma.Decimal
      id_kota: number | null
      id_prov: number | null
      created_at: Date | null
      updated_at: Date | null
    }, ExtArgs["result"]["addresses"]>
    composites: {}
  }

  type addressesGetPayload<S extends boolean | null | undefined | addressesDefaultArgs> = $Result.GetResult<Prisma.$addressesPayload, S>

  type addressesCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<addressesFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: AddressesCountAggregateInputType | true
    }

  export interface addressesDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['addresses'], meta: { name: 'addresses' } }
    /**
     * Find zero or one Addresses that matches the filter.
     * @param {addressesFindUniqueArgs} args - Arguments to find a Addresses
     * @example
     * // Get one Addresses
     * const addresses = await prisma.addresses.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends addressesFindUniqueArgs>(args: SelectSubset<T, addressesFindUniqueArgs<ExtArgs>>): Prisma__addressesClient<$Result.GetResult<Prisma.$addressesPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Addresses that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {addressesFindUniqueOrThrowArgs} args - Arguments to find a Addresses
     * @example
     * // Get one Addresses
     * const addresses = await prisma.addresses.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends addressesFindUniqueOrThrowArgs>(args: SelectSubset<T, addressesFindUniqueOrThrowArgs<ExtArgs>>): Prisma__addressesClient<$Result.GetResult<Prisma.$addressesPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Addresses that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {addressesFindFirstArgs} args - Arguments to find a Addresses
     * @example
     * // Get one Addresses
     * const addresses = await prisma.addresses.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends addressesFindFirstArgs>(args?: SelectSubset<T, addressesFindFirstArgs<ExtArgs>>): Prisma__addressesClient<$Result.GetResult<Prisma.$addressesPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Addresses that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {addressesFindFirstOrThrowArgs} args - Arguments to find a Addresses
     * @example
     * // Get one Addresses
     * const addresses = await prisma.addresses.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends addressesFindFirstOrThrowArgs>(args?: SelectSubset<T, addressesFindFirstOrThrowArgs<ExtArgs>>): Prisma__addressesClient<$Result.GetResult<Prisma.$addressesPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Addresses that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {addressesFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Addresses
     * const addresses = await prisma.addresses.findMany()
     * 
     * // Get first 10 Addresses
     * const addresses = await prisma.addresses.findMany({ take: 10 })
     * 
     * // Only select the `id_alamat`
     * const addressesWithId_alamatOnly = await prisma.addresses.findMany({ select: { id_alamat: true } })
     * 
     */
    findMany<T extends addressesFindManyArgs>(args?: SelectSubset<T, addressesFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$addressesPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Addresses.
     * @param {addressesCreateArgs} args - Arguments to create a Addresses.
     * @example
     * // Create one Addresses
     * const Addresses = await prisma.addresses.create({
     *   data: {
     *     // ... data to create a Addresses
     *   }
     * })
     * 
     */
    create<T extends addressesCreateArgs>(args: SelectSubset<T, addressesCreateArgs<ExtArgs>>): Prisma__addressesClient<$Result.GetResult<Prisma.$addressesPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Addresses.
     * @param {addressesCreateManyArgs} args - Arguments to create many Addresses.
     * @example
     * // Create many Addresses
     * const addresses = await prisma.addresses.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends addressesCreateManyArgs>(args?: SelectSubset<T, addressesCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Addresses and returns the data saved in the database.
     * @param {addressesCreateManyAndReturnArgs} args - Arguments to create many Addresses.
     * @example
     * // Create many Addresses
     * const addresses = await prisma.addresses.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Addresses and only return the `id_alamat`
     * const addressesWithId_alamatOnly = await prisma.addresses.createManyAndReturn({
     *   select: { id_alamat: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends addressesCreateManyAndReturnArgs>(args?: SelectSubset<T, addressesCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$addressesPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Addresses.
     * @param {addressesDeleteArgs} args - Arguments to delete one Addresses.
     * @example
     * // Delete one Addresses
     * const Addresses = await prisma.addresses.delete({
     *   where: {
     *     // ... filter to delete one Addresses
     *   }
     * })
     * 
     */
    delete<T extends addressesDeleteArgs>(args: SelectSubset<T, addressesDeleteArgs<ExtArgs>>): Prisma__addressesClient<$Result.GetResult<Prisma.$addressesPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Addresses.
     * @param {addressesUpdateArgs} args - Arguments to update one Addresses.
     * @example
     * // Update one Addresses
     * const addresses = await prisma.addresses.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends addressesUpdateArgs>(args: SelectSubset<T, addressesUpdateArgs<ExtArgs>>): Prisma__addressesClient<$Result.GetResult<Prisma.$addressesPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Addresses.
     * @param {addressesDeleteManyArgs} args - Arguments to filter Addresses to delete.
     * @example
     * // Delete a few Addresses
     * const { count } = await prisma.addresses.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends addressesDeleteManyArgs>(args?: SelectSubset<T, addressesDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Addresses.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {addressesUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Addresses
     * const addresses = await prisma.addresses.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends addressesUpdateManyArgs>(args: SelectSubset<T, addressesUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Addresses and returns the data updated in the database.
     * @param {addressesUpdateManyAndReturnArgs} args - Arguments to update many Addresses.
     * @example
     * // Update many Addresses
     * const addresses = await prisma.addresses.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Addresses and only return the `id_alamat`
     * const addressesWithId_alamatOnly = await prisma.addresses.updateManyAndReturn({
     *   select: { id_alamat: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends addressesUpdateManyAndReturnArgs>(args: SelectSubset<T, addressesUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$addressesPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Addresses.
     * @param {addressesUpsertArgs} args - Arguments to update or create a Addresses.
     * @example
     * // Update or create a Addresses
     * const addresses = await prisma.addresses.upsert({
     *   create: {
     *     // ... data to create a Addresses
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Addresses we want to update
     *   }
     * })
     */
    upsert<T extends addressesUpsertArgs>(args: SelectSubset<T, addressesUpsertArgs<ExtArgs>>): Prisma__addressesClient<$Result.GetResult<Prisma.$addressesPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Addresses.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {addressesCountArgs} args - Arguments to filter Addresses to count.
     * @example
     * // Count the number of Addresses
     * const count = await prisma.addresses.count({
     *   where: {
     *     // ... the filter for the Addresses we want to count
     *   }
     * })
    **/
    count<T extends addressesCountArgs>(
      args?: Subset<T, addressesCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AddressesCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Addresses.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AddressesAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends AddressesAggregateArgs>(args: Subset<T, AddressesAggregateArgs>): Prisma.PrismaPromise<GetAddressesAggregateType<T>>

    /**
     * Group by Addresses.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {addressesGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends addressesGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: addressesGroupByArgs['orderBy'] }
        : { orderBy?: addressesGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, addressesGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAddressesGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the addresses model
   */
  readonly fields: addressesFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for addresses.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__addressesClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    cities<T extends addresses$citiesArgs<ExtArgs> = {}>(args?: Subset<T, addresses$citiesArgs<ExtArgs>>): Prisma__citiesClient<$Result.GetResult<Prisma.$citiesPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    provinces<T extends addresses$provincesArgs<ExtArgs> = {}>(args?: Subset<T, addresses$provincesArgs<ExtArgs>>): Prisma__provincesClient<$Result.GetResult<Prisma.$provincesPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    user_address<T extends addresses$user_addressArgs<ExtArgs> = {}>(args?: Subset<T, addresses$user_addressArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$user_addressPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the addresses model
   */
  interface addressesFieldRefs {
    readonly id_alamat: FieldRef<"addresses", 'String'>
    readonly alamat: FieldRef<"addresses", 'String'>
    readonly latitude: FieldRef<"addresses", 'Decimal'>
    readonly longitude: FieldRef<"addresses", 'Decimal'>
    readonly id_kota: FieldRef<"addresses", 'Int'>
    readonly id_prov: FieldRef<"addresses", 'Int'>
    readonly created_at: FieldRef<"addresses", 'DateTime'>
    readonly updated_at: FieldRef<"addresses", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * addresses findUnique
   */
  export type addressesFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the addresses
     */
    select?: addressesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the addresses
     */
    omit?: addressesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: addressesInclude<ExtArgs> | null
    /**
     * Filter, which addresses to fetch.
     */
    where: addressesWhereUniqueInput
  }

  /**
   * addresses findUniqueOrThrow
   */
  export type addressesFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the addresses
     */
    select?: addressesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the addresses
     */
    omit?: addressesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: addressesInclude<ExtArgs> | null
    /**
     * Filter, which addresses to fetch.
     */
    where: addressesWhereUniqueInput
  }

  /**
   * addresses findFirst
   */
  export type addressesFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the addresses
     */
    select?: addressesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the addresses
     */
    omit?: addressesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: addressesInclude<ExtArgs> | null
    /**
     * Filter, which addresses to fetch.
     */
    where?: addressesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of addresses to fetch.
     */
    orderBy?: addressesOrderByWithRelationInput | addressesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for addresses.
     */
    cursor?: addressesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` addresses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` addresses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of addresses.
     */
    distinct?: AddressesScalarFieldEnum | AddressesScalarFieldEnum[]
  }

  /**
   * addresses findFirstOrThrow
   */
  export type addressesFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the addresses
     */
    select?: addressesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the addresses
     */
    omit?: addressesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: addressesInclude<ExtArgs> | null
    /**
     * Filter, which addresses to fetch.
     */
    where?: addressesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of addresses to fetch.
     */
    orderBy?: addressesOrderByWithRelationInput | addressesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for addresses.
     */
    cursor?: addressesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` addresses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` addresses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of addresses.
     */
    distinct?: AddressesScalarFieldEnum | AddressesScalarFieldEnum[]
  }

  /**
   * addresses findMany
   */
  export type addressesFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the addresses
     */
    select?: addressesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the addresses
     */
    omit?: addressesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: addressesInclude<ExtArgs> | null
    /**
     * Filter, which addresses to fetch.
     */
    where?: addressesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of addresses to fetch.
     */
    orderBy?: addressesOrderByWithRelationInput | addressesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing addresses.
     */
    cursor?: addressesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` addresses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` addresses.
     */
    skip?: number
    distinct?: AddressesScalarFieldEnum | AddressesScalarFieldEnum[]
  }

  /**
   * addresses create
   */
  export type addressesCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the addresses
     */
    select?: addressesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the addresses
     */
    omit?: addressesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: addressesInclude<ExtArgs> | null
    /**
     * The data needed to create a addresses.
     */
    data: XOR<addressesCreateInput, addressesUncheckedCreateInput>
  }

  /**
   * addresses createMany
   */
  export type addressesCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many addresses.
     */
    data: addressesCreateManyInput | addressesCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * addresses createManyAndReturn
   */
  export type addressesCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the addresses
     */
    select?: addressesSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the addresses
     */
    omit?: addressesOmit<ExtArgs> | null
    /**
     * The data used to create many addresses.
     */
    data: addressesCreateManyInput | addressesCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: addressesIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * addresses update
   */
  export type addressesUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the addresses
     */
    select?: addressesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the addresses
     */
    omit?: addressesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: addressesInclude<ExtArgs> | null
    /**
     * The data needed to update a addresses.
     */
    data: XOR<addressesUpdateInput, addressesUncheckedUpdateInput>
    /**
     * Choose, which addresses to update.
     */
    where: addressesWhereUniqueInput
  }

  /**
   * addresses updateMany
   */
  export type addressesUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update addresses.
     */
    data: XOR<addressesUpdateManyMutationInput, addressesUncheckedUpdateManyInput>
    /**
     * Filter which addresses to update
     */
    where?: addressesWhereInput
    /**
     * Limit how many addresses to update.
     */
    limit?: number
  }

  /**
   * addresses updateManyAndReturn
   */
  export type addressesUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the addresses
     */
    select?: addressesSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the addresses
     */
    omit?: addressesOmit<ExtArgs> | null
    /**
     * The data used to update addresses.
     */
    data: XOR<addressesUpdateManyMutationInput, addressesUncheckedUpdateManyInput>
    /**
     * Filter which addresses to update
     */
    where?: addressesWhereInput
    /**
     * Limit how many addresses to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: addressesIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * addresses upsert
   */
  export type addressesUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the addresses
     */
    select?: addressesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the addresses
     */
    omit?: addressesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: addressesInclude<ExtArgs> | null
    /**
     * The filter to search for the addresses to update in case it exists.
     */
    where: addressesWhereUniqueInput
    /**
     * In case the addresses found by the `where` argument doesn't exist, create a new addresses with this data.
     */
    create: XOR<addressesCreateInput, addressesUncheckedCreateInput>
    /**
     * In case the addresses was found with the provided `where` argument, update it with this data.
     */
    update: XOR<addressesUpdateInput, addressesUncheckedUpdateInput>
  }

  /**
   * addresses delete
   */
  export type addressesDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the addresses
     */
    select?: addressesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the addresses
     */
    omit?: addressesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: addressesInclude<ExtArgs> | null
    /**
     * Filter which addresses to delete.
     */
    where: addressesWhereUniqueInput
  }

  /**
   * addresses deleteMany
   */
  export type addressesDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which addresses to delete
     */
    where?: addressesWhereInput
    /**
     * Limit how many addresses to delete.
     */
    limit?: number
  }

  /**
   * addresses.cities
   */
  export type addresses$citiesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the cities
     */
    select?: citiesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the cities
     */
    omit?: citiesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: citiesInclude<ExtArgs> | null
    where?: citiesWhereInput
  }

  /**
   * addresses.provinces
   */
  export type addresses$provincesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the provinces
     */
    select?: provincesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the provinces
     */
    omit?: provincesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: provincesInclude<ExtArgs> | null
    where?: provincesWhereInput
  }

  /**
   * addresses.user_address
   */
  export type addresses$user_addressArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user_address
     */
    select?: user_addressSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user_address
     */
    omit?: user_addressOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: user_addressInclude<ExtArgs> | null
    where?: user_addressWhereInput
    orderBy?: user_addressOrderByWithRelationInput | user_addressOrderByWithRelationInput[]
    cursor?: user_addressWhereUniqueInput
    take?: number
    skip?: number
    distinct?: User_addressScalarFieldEnum | User_addressScalarFieldEnum[]
  }

  /**
   * addresses without action
   */
  export type addressesDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the addresses
     */
    select?: addressesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the addresses
     */
    omit?: addressesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: addressesInclude<ExtArgs> | null
  }


  /**
   * Model cities
   */

  export type AggregateCities = {
    _count: CitiesCountAggregateOutputType | null
    _avg: CitiesAvgAggregateOutputType | null
    _sum: CitiesSumAggregateOutputType | null
    _min: CitiesMinAggregateOutputType | null
    _max: CitiesMaxAggregateOutputType | null
  }

  export type CitiesAvgAggregateOutputType = {
    id_kota: number | null
    id_prov: number | null
  }

  export type CitiesSumAggregateOutputType = {
    id_kota: number | null
    id_prov: number | null
  }

  export type CitiesMinAggregateOutputType = {
    id_kota: number | null
    nama_kota: string | null
    id_prov: number | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type CitiesMaxAggregateOutputType = {
    id_kota: number | null
    nama_kota: string | null
    id_prov: number | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type CitiesCountAggregateOutputType = {
    id_kota: number
    nama_kota: number
    id_prov: number
    created_at: number
    updated_at: number
    _all: number
  }


  export type CitiesAvgAggregateInputType = {
    id_kota?: true
    id_prov?: true
  }

  export type CitiesSumAggregateInputType = {
    id_kota?: true
    id_prov?: true
  }

  export type CitiesMinAggregateInputType = {
    id_kota?: true
    nama_kota?: true
    id_prov?: true
    created_at?: true
    updated_at?: true
  }

  export type CitiesMaxAggregateInputType = {
    id_kota?: true
    nama_kota?: true
    id_prov?: true
    created_at?: true
    updated_at?: true
  }

  export type CitiesCountAggregateInputType = {
    id_kota?: true
    nama_kota?: true
    id_prov?: true
    created_at?: true
    updated_at?: true
    _all?: true
  }

  export type CitiesAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which cities to aggregate.
     */
    where?: citiesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of cities to fetch.
     */
    orderBy?: citiesOrderByWithRelationInput | citiesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: citiesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` cities from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` cities.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned cities
    **/
    _count?: true | CitiesCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: CitiesAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: CitiesSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CitiesMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CitiesMaxAggregateInputType
  }

  export type GetCitiesAggregateType<T extends CitiesAggregateArgs> = {
        [P in keyof T & keyof AggregateCities]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCities[P]>
      : GetScalarType<T[P], AggregateCities[P]>
  }




  export type citiesGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: citiesWhereInput
    orderBy?: citiesOrderByWithAggregationInput | citiesOrderByWithAggregationInput[]
    by: CitiesScalarFieldEnum[] | CitiesScalarFieldEnum
    having?: citiesScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CitiesCountAggregateInputType | true
    _avg?: CitiesAvgAggregateInputType
    _sum?: CitiesSumAggregateInputType
    _min?: CitiesMinAggregateInputType
    _max?: CitiesMaxAggregateInputType
  }

  export type CitiesGroupByOutputType = {
    id_kota: number
    nama_kota: string
    id_prov: number
    created_at: Date | null
    updated_at: Date | null
    _count: CitiesCountAggregateOutputType | null
    _avg: CitiesAvgAggregateOutputType | null
    _sum: CitiesSumAggregateOutputType | null
    _min: CitiesMinAggregateOutputType | null
    _max: CitiesMaxAggregateOutputType | null
  }

  type GetCitiesGroupByPayload<T extends citiesGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CitiesGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CitiesGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CitiesGroupByOutputType[P]>
            : GetScalarType<T[P], CitiesGroupByOutputType[P]>
        }
      >
    >


  export type citiesSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id_kota?: boolean
    nama_kota?: boolean
    id_prov?: boolean
    created_at?: boolean
    updated_at?: boolean
    addresses?: boolean | cities$addressesArgs<ExtArgs>
    provinces?: boolean | provincesDefaultArgs<ExtArgs>
    _count?: boolean | CitiesCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["cities"]>

  export type citiesSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id_kota?: boolean
    nama_kota?: boolean
    id_prov?: boolean
    created_at?: boolean
    updated_at?: boolean
    provinces?: boolean | provincesDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["cities"]>

  export type citiesSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id_kota?: boolean
    nama_kota?: boolean
    id_prov?: boolean
    created_at?: boolean
    updated_at?: boolean
    provinces?: boolean | provincesDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["cities"]>

  export type citiesSelectScalar = {
    id_kota?: boolean
    nama_kota?: boolean
    id_prov?: boolean
    created_at?: boolean
    updated_at?: boolean
  }

  export type citiesOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id_kota" | "nama_kota" | "id_prov" | "created_at" | "updated_at", ExtArgs["result"]["cities"]>
  export type citiesInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    addresses?: boolean | cities$addressesArgs<ExtArgs>
    provinces?: boolean | provincesDefaultArgs<ExtArgs>
    _count?: boolean | CitiesCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type citiesIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    provinces?: boolean | provincesDefaultArgs<ExtArgs>
  }
  export type citiesIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    provinces?: boolean | provincesDefaultArgs<ExtArgs>
  }

  export type $citiesPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "cities"
    objects: {
      addresses: Prisma.$addressesPayload<ExtArgs>[]
      provinces: Prisma.$provincesPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id_kota: number
      nama_kota: string
      id_prov: number
      created_at: Date | null
      updated_at: Date | null
    }, ExtArgs["result"]["cities"]>
    composites: {}
  }

  type citiesGetPayload<S extends boolean | null | undefined | citiesDefaultArgs> = $Result.GetResult<Prisma.$citiesPayload, S>

  type citiesCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<citiesFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: CitiesCountAggregateInputType | true
    }

  export interface citiesDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['cities'], meta: { name: 'cities' } }
    /**
     * Find zero or one Cities that matches the filter.
     * @param {citiesFindUniqueArgs} args - Arguments to find a Cities
     * @example
     * // Get one Cities
     * const cities = await prisma.cities.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends citiesFindUniqueArgs>(args: SelectSubset<T, citiesFindUniqueArgs<ExtArgs>>): Prisma__citiesClient<$Result.GetResult<Prisma.$citiesPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Cities that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {citiesFindUniqueOrThrowArgs} args - Arguments to find a Cities
     * @example
     * // Get one Cities
     * const cities = await prisma.cities.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends citiesFindUniqueOrThrowArgs>(args: SelectSubset<T, citiesFindUniqueOrThrowArgs<ExtArgs>>): Prisma__citiesClient<$Result.GetResult<Prisma.$citiesPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Cities that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {citiesFindFirstArgs} args - Arguments to find a Cities
     * @example
     * // Get one Cities
     * const cities = await prisma.cities.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends citiesFindFirstArgs>(args?: SelectSubset<T, citiesFindFirstArgs<ExtArgs>>): Prisma__citiesClient<$Result.GetResult<Prisma.$citiesPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Cities that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {citiesFindFirstOrThrowArgs} args - Arguments to find a Cities
     * @example
     * // Get one Cities
     * const cities = await prisma.cities.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends citiesFindFirstOrThrowArgs>(args?: SelectSubset<T, citiesFindFirstOrThrowArgs<ExtArgs>>): Prisma__citiesClient<$Result.GetResult<Prisma.$citiesPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Cities that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {citiesFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Cities
     * const cities = await prisma.cities.findMany()
     * 
     * // Get first 10 Cities
     * const cities = await prisma.cities.findMany({ take: 10 })
     * 
     * // Only select the `id_kota`
     * const citiesWithId_kotaOnly = await prisma.cities.findMany({ select: { id_kota: true } })
     * 
     */
    findMany<T extends citiesFindManyArgs>(args?: SelectSubset<T, citiesFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$citiesPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Cities.
     * @param {citiesCreateArgs} args - Arguments to create a Cities.
     * @example
     * // Create one Cities
     * const Cities = await prisma.cities.create({
     *   data: {
     *     // ... data to create a Cities
     *   }
     * })
     * 
     */
    create<T extends citiesCreateArgs>(args: SelectSubset<T, citiesCreateArgs<ExtArgs>>): Prisma__citiesClient<$Result.GetResult<Prisma.$citiesPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Cities.
     * @param {citiesCreateManyArgs} args - Arguments to create many Cities.
     * @example
     * // Create many Cities
     * const cities = await prisma.cities.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends citiesCreateManyArgs>(args?: SelectSubset<T, citiesCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Cities and returns the data saved in the database.
     * @param {citiesCreateManyAndReturnArgs} args - Arguments to create many Cities.
     * @example
     * // Create many Cities
     * const cities = await prisma.cities.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Cities and only return the `id_kota`
     * const citiesWithId_kotaOnly = await prisma.cities.createManyAndReturn({
     *   select: { id_kota: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends citiesCreateManyAndReturnArgs>(args?: SelectSubset<T, citiesCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$citiesPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Cities.
     * @param {citiesDeleteArgs} args - Arguments to delete one Cities.
     * @example
     * // Delete one Cities
     * const Cities = await prisma.cities.delete({
     *   where: {
     *     // ... filter to delete one Cities
     *   }
     * })
     * 
     */
    delete<T extends citiesDeleteArgs>(args: SelectSubset<T, citiesDeleteArgs<ExtArgs>>): Prisma__citiesClient<$Result.GetResult<Prisma.$citiesPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Cities.
     * @param {citiesUpdateArgs} args - Arguments to update one Cities.
     * @example
     * // Update one Cities
     * const cities = await prisma.cities.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends citiesUpdateArgs>(args: SelectSubset<T, citiesUpdateArgs<ExtArgs>>): Prisma__citiesClient<$Result.GetResult<Prisma.$citiesPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Cities.
     * @param {citiesDeleteManyArgs} args - Arguments to filter Cities to delete.
     * @example
     * // Delete a few Cities
     * const { count } = await prisma.cities.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends citiesDeleteManyArgs>(args?: SelectSubset<T, citiesDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Cities.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {citiesUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Cities
     * const cities = await prisma.cities.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends citiesUpdateManyArgs>(args: SelectSubset<T, citiesUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Cities and returns the data updated in the database.
     * @param {citiesUpdateManyAndReturnArgs} args - Arguments to update many Cities.
     * @example
     * // Update many Cities
     * const cities = await prisma.cities.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Cities and only return the `id_kota`
     * const citiesWithId_kotaOnly = await prisma.cities.updateManyAndReturn({
     *   select: { id_kota: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends citiesUpdateManyAndReturnArgs>(args: SelectSubset<T, citiesUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$citiesPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Cities.
     * @param {citiesUpsertArgs} args - Arguments to update or create a Cities.
     * @example
     * // Update or create a Cities
     * const cities = await prisma.cities.upsert({
     *   create: {
     *     // ... data to create a Cities
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Cities we want to update
     *   }
     * })
     */
    upsert<T extends citiesUpsertArgs>(args: SelectSubset<T, citiesUpsertArgs<ExtArgs>>): Prisma__citiesClient<$Result.GetResult<Prisma.$citiesPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Cities.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {citiesCountArgs} args - Arguments to filter Cities to count.
     * @example
     * // Count the number of Cities
     * const count = await prisma.cities.count({
     *   where: {
     *     // ... the filter for the Cities we want to count
     *   }
     * })
    **/
    count<T extends citiesCountArgs>(
      args?: Subset<T, citiesCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CitiesCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Cities.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CitiesAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends CitiesAggregateArgs>(args: Subset<T, CitiesAggregateArgs>): Prisma.PrismaPromise<GetCitiesAggregateType<T>>

    /**
     * Group by Cities.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {citiesGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends citiesGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: citiesGroupByArgs['orderBy'] }
        : { orderBy?: citiesGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, citiesGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCitiesGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the cities model
   */
  readonly fields: citiesFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for cities.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__citiesClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    addresses<T extends cities$addressesArgs<ExtArgs> = {}>(args?: Subset<T, cities$addressesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$addressesPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    provinces<T extends provincesDefaultArgs<ExtArgs> = {}>(args?: Subset<T, provincesDefaultArgs<ExtArgs>>): Prisma__provincesClient<$Result.GetResult<Prisma.$provincesPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the cities model
   */
  interface citiesFieldRefs {
    readonly id_kota: FieldRef<"cities", 'Int'>
    readonly nama_kota: FieldRef<"cities", 'String'>
    readonly id_prov: FieldRef<"cities", 'Int'>
    readonly created_at: FieldRef<"cities", 'DateTime'>
    readonly updated_at: FieldRef<"cities", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * cities findUnique
   */
  export type citiesFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the cities
     */
    select?: citiesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the cities
     */
    omit?: citiesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: citiesInclude<ExtArgs> | null
    /**
     * Filter, which cities to fetch.
     */
    where: citiesWhereUniqueInput
  }

  /**
   * cities findUniqueOrThrow
   */
  export type citiesFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the cities
     */
    select?: citiesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the cities
     */
    omit?: citiesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: citiesInclude<ExtArgs> | null
    /**
     * Filter, which cities to fetch.
     */
    where: citiesWhereUniqueInput
  }

  /**
   * cities findFirst
   */
  export type citiesFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the cities
     */
    select?: citiesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the cities
     */
    omit?: citiesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: citiesInclude<ExtArgs> | null
    /**
     * Filter, which cities to fetch.
     */
    where?: citiesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of cities to fetch.
     */
    orderBy?: citiesOrderByWithRelationInput | citiesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for cities.
     */
    cursor?: citiesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` cities from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` cities.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of cities.
     */
    distinct?: CitiesScalarFieldEnum | CitiesScalarFieldEnum[]
  }

  /**
   * cities findFirstOrThrow
   */
  export type citiesFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the cities
     */
    select?: citiesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the cities
     */
    omit?: citiesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: citiesInclude<ExtArgs> | null
    /**
     * Filter, which cities to fetch.
     */
    where?: citiesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of cities to fetch.
     */
    orderBy?: citiesOrderByWithRelationInput | citiesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for cities.
     */
    cursor?: citiesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` cities from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` cities.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of cities.
     */
    distinct?: CitiesScalarFieldEnum | CitiesScalarFieldEnum[]
  }

  /**
   * cities findMany
   */
  export type citiesFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the cities
     */
    select?: citiesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the cities
     */
    omit?: citiesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: citiesInclude<ExtArgs> | null
    /**
     * Filter, which cities to fetch.
     */
    where?: citiesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of cities to fetch.
     */
    orderBy?: citiesOrderByWithRelationInput | citiesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing cities.
     */
    cursor?: citiesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` cities from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` cities.
     */
    skip?: number
    distinct?: CitiesScalarFieldEnum | CitiesScalarFieldEnum[]
  }

  /**
   * cities create
   */
  export type citiesCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the cities
     */
    select?: citiesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the cities
     */
    omit?: citiesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: citiesInclude<ExtArgs> | null
    /**
     * The data needed to create a cities.
     */
    data: XOR<citiesCreateInput, citiesUncheckedCreateInput>
  }

  /**
   * cities createMany
   */
  export type citiesCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many cities.
     */
    data: citiesCreateManyInput | citiesCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * cities createManyAndReturn
   */
  export type citiesCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the cities
     */
    select?: citiesSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the cities
     */
    omit?: citiesOmit<ExtArgs> | null
    /**
     * The data used to create many cities.
     */
    data: citiesCreateManyInput | citiesCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: citiesIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * cities update
   */
  export type citiesUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the cities
     */
    select?: citiesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the cities
     */
    omit?: citiesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: citiesInclude<ExtArgs> | null
    /**
     * The data needed to update a cities.
     */
    data: XOR<citiesUpdateInput, citiesUncheckedUpdateInput>
    /**
     * Choose, which cities to update.
     */
    where: citiesWhereUniqueInput
  }

  /**
   * cities updateMany
   */
  export type citiesUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update cities.
     */
    data: XOR<citiesUpdateManyMutationInput, citiesUncheckedUpdateManyInput>
    /**
     * Filter which cities to update
     */
    where?: citiesWhereInput
    /**
     * Limit how many cities to update.
     */
    limit?: number
  }

  /**
   * cities updateManyAndReturn
   */
  export type citiesUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the cities
     */
    select?: citiesSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the cities
     */
    omit?: citiesOmit<ExtArgs> | null
    /**
     * The data used to update cities.
     */
    data: XOR<citiesUpdateManyMutationInput, citiesUncheckedUpdateManyInput>
    /**
     * Filter which cities to update
     */
    where?: citiesWhereInput
    /**
     * Limit how many cities to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: citiesIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * cities upsert
   */
  export type citiesUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the cities
     */
    select?: citiesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the cities
     */
    omit?: citiesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: citiesInclude<ExtArgs> | null
    /**
     * The filter to search for the cities to update in case it exists.
     */
    where: citiesWhereUniqueInput
    /**
     * In case the cities found by the `where` argument doesn't exist, create a new cities with this data.
     */
    create: XOR<citiesCreateInput, citiesUncheckedCreateInput>
    /**
     * In case the cities was found with the provided `where` argument, update it with this data.
     */
    update: XOR<citiesUpdateInput, citiesUncheckedUpdateInput>
  }

  /**
   * cities delete
   */
  export type citiesDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the cities
     */
    select?: citiesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the cities
     */
    omit?: citiesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: citiesInclude<ExtArgs> | null
    /**
     * Filter which cities to delete.
     */
    where: citiesWhereUniqueInput
  }

  /**
   * cities deleteMany
   */
  export type citiesDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which cities to delete
     */
    where?: citiesWhereInput
    /**
     * Limit how many cities to delete.
     */
    limit?: number
  }

  /**
   * cities.addresses
   */
  export type cities$addressesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the addresses
     */
    select?: addressesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the addresses
     */
    omit?: addressesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: addressesInclude<ExtArgs> | null
    where?: addressesWhereInput
    orderBy?: addressesOrderByWithRelationInput | addressesOrderByWithRelationInput[]
    cursor?: addressesWhereUniqueInput
    take?: number
    skip?: number
    distinct?: AddressesScalarFieldEnum | AddressesScalarFieldEnum[]
  }

  /**
   * cities without action
   */
  export type citiesDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the cities
     */
    select?: citiesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the cities
     */
    omit?: citiesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: citiesInclude<ExtArgs> | null
  }


  /**
   * Model profession
   */

  export type AggregateProfession = {
    _count: ProfessionCountAggregateOutputType | null
    _avg: ProfessionAvgAggregateOutputType | null
    _sum: ProfessionSumAggregateOutputType | null
    _min: ProfessionMinAggregateOutputType | null
    _max: ProfessionMaxAggregateOutputType | null
  }

  export type ProfessionAvgAggregateOutputType = {
    id_profesi: number | null
    id_prof_cat: number | null
  }

  export type ProfessionSumAggregateOutputType = {
    id_profesi: bigint | null
    id_prof_cat: bigint | null
  }

  export type ProfessionMinAggregateOutputType = {
    id_profesi: bigint | null
    profession: string | null
    created_at: Date | null
    updated_at: Date | null
    id_prof_cat: bigint | null
  }

  export type ProfessionMaxAggregateOutputType = {
    id_profesi: bigint | null
    profession: string | null
    created_at: Date | null
    updated_at: Date | null
    id_prof_cat: bigint | null
  }

  export type ProfessionCountAggregateOutputType = {
    id_profesi: number
    profession: number
    created_at: number
    updated_at: number
    id_prof_cat: number
    _all: number
  }


  export type ProfessionAvgAggregateInputType = {
    id_profesi?: true
    id_prof_cat?: true
  }

  export type ProfessionSumAggregateInputType = {
    id_profesi?: true
    id_prof_cat?: true
  }

  export type ProfessionMinAggregateInputType = {
    id_profesi?: true
    profession?: true
    created_at?: true
    updated_at?: true
    id_prof_cat?: true
  }

  export type ProfessionMaxAggregateInputType = {
    id_profesi?: true
    profession?: true
    created_at?: true
    updated_at?: true
    id_prof_cat?: true
  }

  export type ProfessionCountAggregateInputType = {
    id_profesi?: true
    profession?: true
    created_at?: true
    updated_at?: true
    id_prof_cat?: true
    _all?: true
  }

  export type ProfessionAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which profession to aggregate.
     */
    where?: professionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of professions to fetch.
     */
    orderBy?: professionOrderByWithRelationInput | professionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: professionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` professions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` professions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned professions
    **/
    _count?: true | ProfessionCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ProfessionAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ProfessionSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ProfessionMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ProfessionMaxAggregateInputType
  }

  export type GetProfessionAggregateType<T extends ProfessionAggregateArgs> = {
        [P in keyof T & keyof AggregateProfession]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateProfession[P]>
      : GetScalarType<T[P], AggregateProfession[P]>
  }




  export type professionGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: professionWhereInput
    orderBy?: professionOrderByWithAggregationInput | professionOrderByWithAggregationInput[]
    by: ProfessionScalarFieldEnum[] | ProfessionScalarFieldEnum
    having?: professionScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ProfessionCountAggregateInputType | true
    _avg?: ProfessionAvgAggregateInputType
    _sum?: ProfessionSumAggregateInputType
    _min?: ProfessionMinAggregateInputType
    _max?: ProfessionMaxAggregateInputType
  }

  export type ProfessionGroupByOutputType = {
    id_profesi: bigint
    profession: string
    created_at: Date | null
    updated_at: Date | null
    id_prof_cat: bigint | null
    _count: ProfessionCountAggregateOutputType | null
    _avg: ProfessionAvgAggregateOutputType | null
    _sum: ProfessionSumAggregateOutputType | null
    _min: ProfessionMinAggregateOutputType | null
    _max: ProfessionMaxAggregateOutputType | null
  }

  type GetProfessionGroupByPayload<T extends professionGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ProfessionGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ProfessionGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ProfessionGroupByOutputType[P]>
            : GetScalarType<T[P], ProfessionGroupByOutputType[P]>
        }
      >
    >


  export type professionSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id_profesi?: boolean
    profession?: boolean
    created_at?: boolean
    updated_at?: boolean
    id_prof_cat?: boolean
    profession_category?: boolean | profession$profession_categoryArgs<ExtArgs>
    profession_user?: boolean | profession$profession_userArgs<ExtArgs>
    _count?: boolean | ProfessionCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["profession"]>

  export type professionSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id_profesi?: boolean
    profession?: boolean
    created_at?: boolean
    updated_at?: boolean
    id_prof_cat?: boolean
    profession_category?: boolean | profession$profession_categoryArgs<ExtArgs>
  }, ExtArgs["result"]["profession"]>

  export type professionSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id_profesi?: boolean
    profession?: boolean
    created_at?: boolean
    updated_at?: boolean
    id_prof_cat?: boolean
    profession_category?: boolean | profession$profession_categoryArgs<ExtArgs>
  }, ExtArgs["result"]["profession"]>

  export type professionSelectScalar = {
    id_profesi?: boolean
    profession?: boolean
    created_at?: boolean
    updated_at?: boolean
    id_prof_cat?: boolean
  }

  export type professionOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id_profesi" | "profession" | "created_at" | "updated_at" | "id_prof_cat", ExtArgs["result"]["profession"]>
  export type professionInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    profession_category?: boolean | profession$profession_categoryArgs<ExtArgs>
    profession_user?: boolean | profession$profession_userArgs<ExtArgs>
    _count?: boolean | ProfessionCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type professionIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    profession_category?: boolean | profession$profession_categoryArgs<ExtArgs>
  }
  export type professionIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    profession_category?: boolean | profession$profession_categoryArgs<ExtArgs>
  }

  export type $professionPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "profession"
    objects: {
      profession_category: Prisma.$profession_categoryPayload<ExtArgs> | null
      profession_user: Prisma.$profession_userPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id_profesi: bigint
      profession: string
      created_at: Date | null
      updated_at: Date | null
      id_prof_cat: bigint | null
    }, ExtArgs["result"]["profession"]>
    composites: {}
  }

  type professionGetPayload<S extends boolean | null | undefined | professionDefaultArgs> = $Result.GetResult<Prisma.$professionPayload, S>

  type professionCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<professionFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ProfessionCountAggregateInputType | true
    }

  export interface professionDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['profession'], meta: { name: 'profession' } }
    /**
     * Find zero or one Profession that matches the filter.
     * @param {professionFindUniqueArgs} args - Arguments to find a Profession
     * @example
     * // Get one Profession
     * const profession = await prisma.profession.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends professionFindUniqueArgs>(args: SelectSubset<T, professionFindUniqueArgs<ExtArgs>>): Prisma__professionClient<$Result.GetResult<Prisma.$professionPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Profession that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {professionFindUniqueOrThrowArgs} args - Arguments to find a Profession
     * @example
     * // Get one Profession
     * const profession = await prisma.profession.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends professionFindUniqueOrThrowArgs>(args: SelectSubset<T, professionFindUniqueOrThrowArgs<ExtArgs>>): Prisma__professionClient<$Result.GetResult<Prisma.$professionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Profession that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {professionFindFirstArgs} args - Arguments to find a Profession
     * @example
     * // Get one Profession
     * const profession = await prisma.profession.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends professionFindFirstArgs>(args?: SelectSubset<T, professionFindFirstArgs<ExtArgs>>): Prisma__professionClient<$Result.GetResult<Prisma.$professionPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Profession that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {professionFindFirstOrThrowArgs} args - Arguments to find a Profession
     * @example
     * // Get one Profession
     * const profession = await prisma.profession.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends professionFindFirstOrThrowArgs>(args?: SelectSubset<T, professionFindFirstOrThrowArgs<ExtArgs>>): Prisma__professionClient<$Result.GetResult<Prisma.$professionPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Professions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {professionFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Professions
     * const professions = await prisma.profession.findMany()
     * 
     * // Get first 10 Professions
     * const professions = await prisma.profession.findMany({ take: 10 })
     * 
     * // Only select the `id_profesi`
     * const professionWithId_profesiOnly = await prisma.profession.findMany({ select: { id_profesi: true } })
     * 
     */
    findMany<T extends professionFindManyArgs>(args?: SelectSubset<T, professionFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$professionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Profession.
     * @param {professionCreateArgs} args - Arguments to create a Profession.
     * @example
     * // Create one Profession
     * const Profession = await prisma.profession.create({
     *   data: {
     *     // ... data to create a Profession
     *   }
     * })
     * 
     */
    create<T extends professionCreateArgs>(args: SelectSubset<T, professionCreateArgs<ExtArgs>>): Prisma__professionClient<$Result.GetResult<Prisma.$professionPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Professions.
     * @param {professionCreateManyArgs} args - Arguments to create many Professions.
     * @example
     * // Create many Professions
     * const profession = await prisma.profession.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends professionCreateManyArgs>(args?: SelectSubset<T, professionCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Professions and returns the data saved in the database.
     * @param {professionCreateManyAndReturnArgs} args - Arguments to create many Professions.
     * @example
     * // Create many Professions
     * const profession = await prisma.profession.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Professions and only return the `id_profesi`
     * const professionWithId_profesiOnly = await prisma.profession.createManyAndReturn({
     *   select: { id_profesi: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends professionCreateManyAndReturnArgs>(args?: SelectSubset<T, professionCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$professionPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Profession.
     * @param {professionDeleteArgs} args - Arguments to delete one Profession.
     * @example
     * // Delete one Profession
     * const Profession = await prisma.profession.delete({
     *   where: {
     *     // ... filter to delete one Profession
     *   }
     * })
     * 
     */
    delete<T extends professionDeleteArgs>(args: SelectSubset<T, professionDeleteArgs<ExtArgs>>): Prisma__professionClient<$Result.GetResult<Prisma.$professionPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Profession.
     * @param {professionUpdateArgs} args - Arguments to update one Profession.
     * @example
     * // Update one Profession
     * const profession = await prisma.profession.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends professionUpdateArgs>(args: SelectSubset<T, professionUpdateArgs<ExtArgs>>): Prisma__professionClient<$Result.GetResult<Prisma.$professionPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Professions.
     * @param {professionDeleteManyArgs} args - Arguments to filter Professions to delete.
     * @example
     * // Delete a few Professions
     * const { count } = await prisma.profession.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends professionDeleteManyArgs>(args?: SelectSubset<T, professionDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Professions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {professionUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Professions
     * const profession = await prisma.profession.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends professionUpdateManyArgs>(args: SelectSubset<T, professionUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Professions and returns the data updated in the database.
     * @param {professionUpdateManyAndReturnArgs} args - Arguments to update many Professions.
     * @example
     * // Update many Professions
     * const profession = await prisma.profession.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Professions and only return the `id_profesi`
     * const professionWithId_profesiOnly = await prisma.profession.updateManyAndReturn({
     *   select: { id_profesi: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends professionUpdateManyAndReturnArgs>(args: SelectSubset<T, professionUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$professionPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Profession.
     * @param {professionUpsertArgs} args - Arguments to update or create a Profession.
     * @example
     * // Update or create a Profession
     * const profession = await prisma.profession.upsert({
     *   create: {
     *     // ... data to create a Profession
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Profession we want to update
     *   }
     * })
     */
    upsert<T extends professionUpsertArgs>(args: SelectSubset<T, professionUpsertArgs<ExtArgs>>): Prisma__professionClient<$Result.GetResult<Prisma.$professionPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Professions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {professionCountArgs} args - Arguments to filter Professions to count.
     * @example
     * // Count the number of Professions
     * const count = await prisma.profession.count({
     *   where: {
     *     // ... the filter for the Professions we want to count
     *   }
     * })
    **/
    count<T extends professionCountArgs>(
      args?: Subset<T, professionCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ProfessionCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Profession.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProfessionAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ProfessionAggregateArgs>(args: Subset<T, ProfessionAggregateArgs>): Prisma.PrismaPromise<GetProfessionAggregateType<T>>

    /**
     * Group by Profession.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {professionGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends professionGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: professionGroupByArgs['orderBy'] }
        : { orderBy?: professionGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, professionGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetProfessionGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the profession model
   */
  readonly fields: professionFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for profession.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__professionClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    profession_category<T extends profession$profession_categoryArgs<ExtArgs> = {}>(args?: Subset<T, profession$profession_categoryArgs<ExtArgs>>): Prisma__profession_categoryClient<$Result.GetResult<Prisma.$profession_categoryPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    profession_user<T extends profession$profession_userArgs<ExtArgs> = {}>(args?: Subset<T, profession$profession_userArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$profession_userPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the profession model
   */
  interface professionFieldRefs {
    readonly id_profesi: FieldRef<"profession", 'BigInt'>
    readonly profession: FieldRef<"profession", 'String'>
    readonly created_at: FieldRef<"profession", 'DateTime'>
    readonly updated_at: FieldRef<"profession", 'DateTime'>
    readonly id_prof_cat: FieldRef<"profession", 'BigInt'>
  }
    

  // Custom InputTypes
  /**
   * profession findUnique
   */
  export type professionFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the profession
     */
    select?: professionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the profession
     */
    omit?: professionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: professionInclude<ExtArgs> | null
    /**
     * Filter, which profession to fetch.
     */
    where: professionWhereUniqueInput
  }

  /**
   * profession findUniqueOrThrow
   */
  export type professionFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the profession
     */
    select?: professionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the profession
     */
    omit?: professionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: professionInclude<ExtArgs> | null
    /**
     * Filter, which profession to fetch.
     */
    where: professionWhereUniqueInput
  }

  /**
   * profession findFirst
   */
  export type professionFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the profession
     */
    select?: professionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the profession
     */
    omit?: professionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: professionInclude<ExtArgs> | null
    /**
     * Filter, which profession to fetch.
     */
    where?: professionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of professions to fetch.
     */
    orderBy?: professionOrderByWithRelationInput | professionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for professions.
     */
    cursor?: professionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` professions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` professions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of professions.
     */
    distinct?: ProfessionScalarFieldEnum | ProfessionScalarFieldEnum[]
  }

  /**
   * profession findFirstOrThrow
   */
  export type professionFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the profession
     */
    select?: professionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the profession
     */
    omit?: professionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: professionInclude<ExtArgs> | null
    /**
     * Filter, which profession to fetch.
     */
    where?: professionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of professions to fetch.
     */
    orderBy?: professionOrderByWithRelationInput | professionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for professions.
     */
    cursor?: professionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` professions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` professions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of professions.
     */
    distinct?: ProfessionScalarFieldEnum | ProfessionScalarFieldEnum[]
  }

  /**
   * profession findMany
   */
  export type professionFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the profession
     */
    select?: professionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the profession
     */
    omit?: professionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: professionInclude<ExtArgs> | null
    /**
     * Filter, which professions to fetch.
     */
    where?: professionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of professions to fetch.
     */
    orderBy?: professionOrderByWithRelationInput | professionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing professions.
     */
    cursor?: professionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` professions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` professions.
     */
    skip?: number
    distinct?: ProfessionScalarFieldEnum | ProfessionScalarFieldEnum[]
  }

  /**
   * profession create
   */
  export type professionCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the profession
     */
    select?: professionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the profession
     */
    omit?: professionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: professionInclude<ExtArgs> | null
    /**
     * The data needed to create a profession.
     */
    data: XOR<professionCreateInput, professionUncheckedCreateInput>
  }

  /**
   * profession createMany
   */
  export type professionCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many professions.
     */
    data: professionCreateManyInput | professionCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * profession createManyAndReturn
   */
  export type professionCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the profession
     */
    select?: professionSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the profession
     */
    omit?: professionOmit<ExtArgs> | null
    /**
     * The data used to create many professions.
     */
    data: professionCreateManyInput | professionCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: professionIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * profession update
   */
  export type professionUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the profession
     */
    select?: professionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the profession
     */
    omit?: professionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: professionInclude<ExtArgs> | null
    /**
     * The data needed to update a profession.
     */
    data: XOR<professionUpdateInput, professionUncheckedUpdateInput>
    /**
     * Choose, which profession to update.
     */
    where: professionWhereUniqueInput
  }

  /**
   * profession updateMany
   */
  export type professionUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update professions.
     */
    data: XOR<professionUpdateManyMutationInput, professionUncheckedUpdateManyInput>
    /**
     * Filter which professions to update
     */
    where?: professionWhereInput
    /**
     * Limit how many professions to update.
     */
    limit?: number
  }

  /**
   * profession updateManyAndReturn
   */
  export type professionUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the profession
     */
    select?: professionSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the profession
     */
    omit?: professionOmit<ExtArgs> | null
    /**
     * The data used to update professions.
     */
    data: XOR<professionUpdateManyMutationInput, professionUncheckedUpdateManyInput>
    /**
     * Filter which professions to update
     */
    where?: professionWhereInput
    /**
     * Limit how many professions to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: professionIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * profession upsert
   */
  export type professionUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the profession
     */
    select?: professionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the profession
     */
    omit?: professionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: professionInclude<ExtArgs> | null
    /**
     * The filter to search for the profession to update in case it exists.
     */
    where: professionWhereUniqueInput
    /**
     * In case the profession found by the `where` argument doesn't exist, create a new profession with this data.
     */
    create: XOR<professionCreateInput, professionUncheckedCreateInput>
    /**
     * In case the profession was found with the provided `where` argument, update it with this data.
     */
    update: XOR<professionUpdateInput, professionUncheckedUpdateInput>
  }

  /**
   * profession delete
   */
  export type professionDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the profession
     */
    select?: professionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the profession
     */
    omit?: professionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: professionInclude<ExtArgs> | null
    /**
     * Filter which profession to delete.
     */
    where: professionWhereUniqueInput
  }

  /**
   * profession deleteMany
   */
  export type professionDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which professions to delete
     */
    where?: professionWhereInput
    /**
     * Limit how many professions to delete.
     */
    limit?: number
  }

  /**
   * profession.profession_category
   */
  export type profession$profession_categoryArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the profession_category
     */
    select?: profession_categorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the profession_category
     */
    omit?: profession_categoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: profession_categoryInclude<ExtArgs> | null
    where?: profession_categoryWhereInput
  }

  /**
   * profession.profession_user
   */
  export type profession$profession_userArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the profession_user
     */
    select?: profession_userSelect<ExtArgs> | null
    /**
     * Omit specific fields from the profession_user
     */
    omit?: profession_userOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: profession_userInclude<ExtArgs> | null
    where?: profession_userWhereInput
    orderBy?: profession_userOrderByWithRelationInput | profession_userOrderByWithRelationInput[]
    cursor?: profession_userWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Profession_userScalarFieldEnum | Profession_userScalarFieldEnum[]
  }

  /**
   * profession without action
   */
  export type professionDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the profession
     */
    select?: professionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the profession
     */
    omit?: professionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: professionInclude<ExtArgs> | null
  }


  /**
   * Model profession_user
   */

  export type AggregateProfession_user = {
    _count: Profession_userCountAggregateOutputType | null
    _avg: Profession_userAvgAggregateOutputType | null
    _sum: Profession_userSumAggregateOutputType | null
    _min: Profession_userMinAggregateOutputType | null
    _max: Profession_userMaxAggregateOutputType | null
  }

  export type Profession_userAvgAggregateOutputType = {
    id_profesi: number | null
  }

  export type Profession_userSumAggregateOutputType = {
    id_profesi: bigint | null
  }

  export type Profession_userMinAggregateOutputType = {
    id_user: string | null
    id_profesi: bigint | null
  }

  export type Profession_userMaxAggregateOutputType = {
    id_user: string | null
    id_profesi: bigint | null
  }

  export type Profession_userCountAggregateOutputType = {
    id_user: number
    id_profesi: number
    _all: number
  }


  export type Profession_userAvgAggregateInputType = {
    id_profesi?: true
  }

  export type Profession_userSumAggregateInputType = {
    id_profesi?: true
  }

  export type Profession_userMinAggregateInputType = {
    id_user?: true
    id_profesi?: true
  }

  export type Profession_userMaxAggregateInputType = {
    id_user?: true
    id_profesi?: true
  }

  export type Profession_userCountAggregateInputType = {
    id_user?: true
    id_profesi?: true
    _all?: true
  }

  export type Profession_userAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which profession_user to aggregate.
     */
    where?: profession_userWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of profession_users to fetch.
     */
    orderBy?: profession_userOrderByWithRelationInput | profession_userOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: profession_userWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` profession_users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` profession_users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned profession_users
    **/
    _count?: true | Profession_userCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: Profession_userAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: Profession_userSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Profession_userMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Profession_userMaxAggregateInputType
  }

  export type GetProfession_userAggregateType<T extends Profession_userAggregateArgs> = {
        [P in keyof T & keyof AggregateProfession_user]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateProfession_user[P]>
      : GetScalarType<T[P], AggregateProfession_user[P]>
  }




  export type profession_userGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: profession_userWhereInput
    orderBy?: profession_userOrderByWithAggregationInput | profession_userOrderByWithAggregationInput[]
    by: Profession_userScalarFieldEnum[] | Profession_userScalarFieldEnum
    having?: profession_userScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Profession_userCountAggregateInputType | true
    _avg?: Profession_userAvgAggregateInputType
    _sum?: Profession_userSumAggregateInputType
    _min?: Profession_userMinAggregateInputType
    _max?: Profession_userMaxAggregateInputType
  }

  export type Profession_userGroupByOutputType = {
    id_user: string
    id_profesi: bigint
    _count: Profession_userCountAggregateOutputType | null
    _avg: Profession_userAvgAggregateOutputType | null
    _sum: Profession_userSumAggregateOutputType | null
    _min: Profession_userMinAggregateOutputType | null
    _max: Profession_userMaxAggregateOutputType | null
  }

  type GetProfession_userGroupByPayload<T extends profession_userGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Profession_userGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Profession_userGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Profession_userGroupByOutputType[P]>
            : GetScalarType<T[P], Profession_userGroupByOutputType[P]>
        }
      >
    >


  export type profession_userSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id_user?: boolean
    id_profesi?: boolean
    profession?: boolean | professionDefaultArgs<ExtArgs>
    users?: boolean | usersDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["profession_user"]>

  export type profession_userSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id_user?: boolean
    id_profesi?: boolean
    profession?: boolean | professionDefaultArgs<ExtArgs>
    users?: boolean | usersDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["profession_user"]>

  export type profession_userSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id_user?: boolean
    id_profesi?: boolean
    profession?: boolean | professionDefaultArgs<ExtArgs>
    users?: boolean | usersDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["profession_user"]>

  export type profession_userSelectScalar = {
    id_user?: boolean
    id_profesi?: boolean
  }

  export type profession_userOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id_user" | "id_profesi", ExtArgs["result"]["profession_user"]>
  export type profession_userInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    profession?: boolean | professionDefaultArgs<ExtArgs>
    users?: boolean | usersDefaultArgs<ExtArgs>
  }
  export type profession_userIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    profession?: boolean | professionDefaultArgs<ExtArgs>
    users?: boolean | usersDefaultArgs<ExtArgs>
  }
  export type profession_userIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    profession?: boolean | professionDefaultArgs<ExtArgs>
    users?: boolean | usersDefaultArgs<ExtArgs>
  }

  export type $profession_userPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "profession_user"
    objects: {
      profession: Prisma.$professionPayload<ExtArgs>
      users: Prisma.$usersPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id_user: string
      id_profesi: bigint
    }, ExtArgs["result"]["profession_user"]>
    composites: {}
  }

  type profession_userGetPayload<S extends boolean | null | undefined | profession_userDefaultArgs> = $Result.GetResult<Prisma.$profession_userPayload, S>

  type profession_userCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<profession_userFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: Profession_userCountAggregateInputType | true
    }

  export interface profession_userDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['profession_user'], meta: { name: 'profession_user' } }
    /**
     * Find zero or one Profession_user that matches the filter.
     * @param {profession_userFindUniqueArgs} args - Arguments to find a Profession_user
     * @example
     * // Get one Profession_user
     * const profession_user = await prisma.profession_user.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends profession_userFindUniqueArgs>(args: SelectSubset<T, profession_userFindUniqueArgs<ExtArgs>>): Prisma__profession_userClient<$Result.GetResult<Prisma.$profession_userPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Profession_user that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {profession_userFindUniqueOrThrowArgs} args - Arguments to find a Profession_user
     * @example
     * // Get one Profession_user
     * const profession_user = await prisma.profession_user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends profession_userFindUniqueOrThrowArgs>(args: SelectSubset<T, profession_userFindUniqueOrThrowArgs<ExtArgs>>): Prisma__profession_userClient<$Result.GetResult<Prisma.$profession_userPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Profession_user that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {profession_userFindFirstArgs} args - Arguments to find a Profession_user
     * @example
     * // Get one Profession_user
     * const profession_user = await prisma.profession_user.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends profession_userFindFirstArgs>(args?: SelectSubset<T, profession_userFindFirstArgs<ExtArgs>>): Prisma__profession_userClient<$Result.GetResult<Prisma.$profession_userPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Profession_user that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {profession_userFindFirstOrThrowArgs} args - Arguments to find a Profession_user
     * @example
     * // Get one Profession_user
     * const profession_user = await prisma.profession_user.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends profession_userFindFirstOrThrowArgs>(args?: SelectSubset<T, profession_userFindFirstOrThrowArgs<ExtArgs>>): Prisma__profession_userClient<$Result.GetResult<Prisma.$profession_userPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Profession_users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {profession_userFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Profession_users
     * const profession_users = await prisma.profession_user.findMany()
     * 
     * // Get first 10 Profession_users
     * const profession_users = await prisma.profession_user.findMany({ take: 10 })
     * 
     * // Only select the `id_user`
     * const profession_userWithId_userOnly = await prisma.profession_user.findMany({ select: { id_user: true } })
     * 
     */
    findMany<T extends profession_userFindManyArgs>(args?: SelectSubset<T, profession_userFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$profession_userPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Profession_user.
     * @param {profession_userCreateArgs} args - Arguments to create a Profession_user.
     * @example
     * // Create one Profession_user
     * const Profession_user = await prisma.profession_user.create({
     *   data: {
     *     // ... data to create a Profession_user
     *   }
     * })
     * 
     */
    create<T extends profession_userCreateArgs>(args: SelectSubset<T, profession_userCreateArgs<ExtArgs>>): Prisma__profession_userClient<$Result.GetResult<Prisma.$profession_userPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Profession_users.
     * @param {profession_userCreateManyArgs} args - Arguments to create many Profession_users.
     * @example
     * // Create many Profession_users
     * const profession_user = await prisma.profession_user.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends profession_userCreateManyArgs>(args?: SelectSubset<T, profession_userCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Profession_users and returns the data saved in the database.
     * @param {profession_userCreateManyAndReturnArgs} args - Arguments to create many Profession_users.
     * @example
     * // Create many Profession_users
     * const profession_user = await prisma.profession_user.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Profession_users and only return the `id_user`
     * const profession_userWithId_userOnly = await prisma.profession_user.createManyAndReturn({
     *   select: { id_user: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends profession_userCreateManyAndReturnArgs>(args?: SelectSubset<T, profession_userCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$profession_userPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Profession_user.
     * @param {profession_userDeleteArgs} args - Arguments to delete one Profession_user.
     * @example
     * // Delete one Profession_user
     * const Profession_user = await prisma.profession_user.delete({
     *   where: {
     *     // ... filter to delete one Profession_user
     *   }
     * })
     * 
     */
    delete<T extends profession_userDeleteArgs>(args: SelectSubset<T, profession_userDeleteArgs<ExtArgs>>): Prisma__profession_userClient<$Result.GetResult<Prisma.$profession_userPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Profession_user.
     * @param {profession_userUpdateArgs} args - Arguments to update one Profession_user.
     * @example
     * // Update one Profession_user
     * const profession_user = await prisma.profession_user.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends profession_userUpdateArgs>(args: SelectSubset<T, profession_userUpdateArgs<ExtArgs>>): Prisma__profession_userClient<$Result.GetResult<Prisma.$profession_userPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Profession_users.
     * @param {profession_userDeleteManyArgs} args - Arguments to filter Profession_users to delete.
     * @example
     * // Delete a few Profession_users
     * const { count } = await prisma.profession_user.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends profession_userDeleteManyArgs>(args?: SelectSubset<T, profession_userDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Profession_users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {profession_userUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Profession_users
     * const profession_user = await prisma.profession_user.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends profession_userUpdateManyArgs>(args: SelectSubset<T, profession_userUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Profession_users and returns the data updated in the database.
     * @param {profession_userUpdateManyAndReturnArgs} args - Arguments to update many Profession_users.
     * @example
     * // Update many Profession_users
     * const profession_user = await prisma.profession_user.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Profession_users and only return the `id_user`
     * const profession_userWithId_userOnly = await prisma.profession_user.updateManyAndReturn({
     *   select: { id_user: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends profession_userUpdateManyAndReturnArgs>(args: SelectSubset<T, profession_userUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$profession_userPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Profession_user.
     * @param {profession_userUpsertArgs} args - Arguments to update or create a Profession_user.
     * @example
     * // Update or create a Profession_user
     * const profession_user = await prisma.profession_user.upsert({
     *   create: {
     *     // ... data to create a Profession_user
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Profession_user we want to update
     *   }
     * })
     */
    upsert<T extends profession_userUpsertArgs>(args: SelectSubset<T, profession_userUpsertArgs<ExtArgs>>): Prisma__profession_userClient<$Result.GetResult<Prisma.$profession_userPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Profession_users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {profession_userCountArgs} args - Arguments to filter Profession_users to count.
     * @example
     * // Count the number of Profession_users
     * const count = await prisma.profession_user.count({
     *   where: {
     *     // ... the filter for the Profession_users we want to count
     *   }
     * })
    **/
    count<T extends profession_userCountArgs>(
      args?: Subset<T, profession_userCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Profession_userCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Profession_user.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Profession_userAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends Profession_userAggregateArgs>(args: Subset<T, Profession_userAggregateArgs>): Prisma.PrismaPromise<GetProfession_userAggregateType<T>>

    /**
     * Group by Profession_user.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {profession_userGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends profession_userGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: profession_userGroupByArgs['orderBy'] }
        : { orderBy?: profession_userGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, profession_userGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetProfession_userGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the profession_user model
   */
  readonly fields: profession_userFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for profession_user.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__profession_userClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    profession<T extends professionDefaultArgs<ExtArgs> = {}>(args?: Subset<T, professionDefaultArgs<ExtArgs>>): Prisma__professionClient<$Result.GetResult<Prisma.$professionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    users<T extends usersDefaultArgs<ExtArgs> = {}>(args?: Subset<T, usersDefaultArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the profession_user model
   */
  interface profession_userFieldRefs {
    readonly id_user: FieldRef<"profession_user", 'String'>
    readonly id_profesi: FieldRef<"profession_user", 'BigInt'>
  }
    

  // Custom InputTypes
  /**
   * profession_user findUnique
   */
  export type profession_userFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the profession_user
     */
    select?: profession_userSelect<ExtArgs> | null
    /**
     * Omit specific fields from the profession_user
     */
    omit?: profession_userOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: profession_userInclude<ExtArgs> | null
    /**
     * Filter, which profession_user to fetch.
     */
    where: profession_userWhereUniqueInput
  }

  /**
   * profession_user findUniqueOrThrow
   */
  export type profession_userFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the profession_user
     */
    select?: profession_userSelect<ExtArgs> | null
    /**
     * Omit specific fields from the profession_user
     */
    omit?: profession_userOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: profession_userInclude<ExtArgs> | null
    /**
     * Filter, which profession_user to fetch.
     */
    where: profession_userWhereUniqueInput
  }

  /**
   * profession_user findFirst
   */
  export type profession_userFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the profession_user
     */
    select?: profession_userSelect<ExtArgs> | null
    /**
     * Omit specific fields from the profession_user
     */
    omit?: profession_userOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: profession_userInclude<ExtArgs> | null
    /**
     * Filter, which profession_user to fetch.
     */
    where?: profession_userWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of profession_users to fetch.
     */
    orderBy?: profession_userOrderByWithRelationInput | profession_userOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for profession_users.
     */
    cursor?: profession_userWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` profession_users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` profession_users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of profession_users.
     */
    distinct?: Profession_userScalarFieldEnum | Profession_userScalarFieldEnum[]
  }

  /**
   * profession_user findFirstOrThrow
   */
  export type profession_userFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the profession_user
     */
    select?: profession_userSelect<ExtArgs> | null
    /**
     * Omit specific fields from the profession_user
     */
    omit?: profession_userOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: profession_userInclude<ExtArgs> | null
    /**
     * Filter, which profession_user to fetch.
     */
    where?: profession_userWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of profession_users to fetch.
     */
    orderBy?: profession_userOrderByWithRelationInput | profession_userOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for profession_users.
     */
    cursor?: profession_userWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` profession_users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` profession_users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of profession_users.
     */
    distinct?: Profession_userScalarFieldEnum | Profession_userScalarFieldEnum[]
  }

  /**
   * profession_user findMany
   */
  export type profession_userFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the profession_user
     */
    select?: profession_userSelect<ExtArgs> | null
    /**
     * Omit specific fields from the profession_user
     */
    omit?: profession_userOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: profession_userInclude<ExtArgs> | null
    /**
     * Filter, which profession_users to fetch.
     */
    where?: profession_userWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of profession_users to fetch.
     */
    orderBy?: profession_userOrderByWithRelationInput | profession_userOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing profession_users.
     */
    cursor?: profession_userWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` profession_users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` profession_users.
     */
    skip?: number
    distinct?: Profession_userScalarFieldEnum | Profession_userScalarFieldEnum[]
  }

  /**
   * profession_user create
   */
  export type profession_userCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the profession_user
     */
    select?: profession_userSelect<ExtArgs> | null
    /**
     * Omit specific fields from the profession_user
     */
    omit?: profession_userOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: profession_userInclude<ExtArgs> | null
    /**
     * The data needed to create a profession_user.
     */
    data: XOR<profession_userCreateInput, profession_userUncheckedCreateInput>
  }

  /**
   * profession_user createMany
   */
  export type profession_userCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many profession_users.
     */
    data: profession_userCreateManyInput | profession_userCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * profession_user createManyAndReturn
   */
  export type profession_userCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the profession_user
     */
    select?: profession_userSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the profession_user
     */
    omit?: profession_userOmit<ExtArgs> | null
    /**
     * The data used to create many profession_users.
     */
    data: profession_userCreateManyInput | profession_userCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: profession_userIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * profession_user update
   */
  export type profession_userUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the profession_user
     */
    select?: profession_userSelect<ExtArgs> | null
    /**
     * Omit specific fields from the profession_user
     */
    omit?: profession_userOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: profession_userInclude<ExtArgs> | null
    /**
     * The data needed to update a profession_user.
     */
    data: XOR<profession_userUpdateInput, profession_userUncheckedUpdateInput>
    /**
     * Choose, which profession_user to update.
     */
    where: profession_userWhereUniqueInput
  }

  /**
   * profession_user updateMany
   */
  export type profession_userUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update profession_users.
     */
    data: XOR<profession_userUpdateManyMutationInput, profession_userUncheckedUpdateManyInput>
    /**
     * Filter which profession_users to update
     */
    where?: profession_userWhereInput
    /**
     * Limit how many profession_users to update.
     */
    limit?: number
  }

  /**
   * profession_user updateManyAndReturn
   */
  export type profession_userUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the profession_user
     */
    select?: profession_userSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the profession_user
     */
    omit?: profession_userOmit<ExtArgs> | null
    /**
     * The data used to update profession_users.
     */
    data: XOR<profession_userUpdateManyMutationInput, profession_userUncheckedUpdateManyInput>
    /**
     * Filter which profession_users to update
     */
    where?: profession_userWhereInput
    /**
     * Limit how many profession_users to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: profession_userIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * profession_user upsert
   */
  export type profession_userUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the profession_user
     */
    select?: profession_userSelect<ExtArgs> | null
    /**
     * Omit specific fields from the profession_user
     */
    omit?: profession_userOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: profession_userInclude<ExtArgs> | null
    /**
     * The filter to search for the profession_user to update in case it exists.
     */
    where: profession_userWhereUniqueInput
    /**
     * In case the profession_user found by the `where` argument doesn't exist, create a new profession_user with this data.
     */
    create: XOR<profession_userCreateInput, profession_userUncheckedCreateInput>
    /**
     * In case the profession_user was found with the provided `where` argument, update it with this data.
     */
    update: XOR<profession_userUpdateInput, profession_userUncheckedUpdateInput>
  }

  /**
   * profession_user delete
   */
  export type profession_userDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the profession_user
     */
    select?: profession_userSelect<ExtArgs> | null
    /**
     * Omit specific fields from the profession_user
     */
    omit?: profession_userOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: profession_userInclude<ExtArgs> | null
    /**
     * Filter which profession_user to delete.
     */
    where: profession_userWhereUniqueInput
  }

  /**
   * profession_user deleteMany
   */
  export type profession_userDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which profession_users to delete
     */
    where?: profession_userWhereInput
    /**
     * Limit how many profession_users to delete.
     */
    limit?: number
  }

  /**
   * profession_user without action
   */
  export type profession_userDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the profession_user
     */
    select?: profession_userSelect<ExtArgs> | null
    /**
     * Omit specific fields from the profession_user
     */
    omit?: profession_userOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: profession_userInclude<ExtArgs> | null
  }


  /**
   * Model provinces
   */

  export type AggregateProvinces = {
    _count: ProvincesCountAggregateOutputType | null
    _avg: ProvincesAvgAggregateOutputType | null
    _sum: ProvincesSumAggregateOutputType | null
    _min: ProvincesMinAggregateOutputType | null
    _max: ProvincesMaxAggregateOutputType | null
  }

  export type ProvincesAvgAggregateOutputType = {
    id_prov: number | null
  }

  export type ProvincesSumAggregateOutputType = {
    id_prov: number | null
  }

  export type ProvincesMinAggregateOutputType = {
    id_prov: number | null
    nama_prov: string | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type ProvincesMaxAggregateOutputType = {
    id_prov: number | null
    nama_prov: string | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type ProvincesCountAggregateOutputType = {
    id_prov: number
    nama_prov: number
    created_at: number
    updated_at: number
    _all: number
  }


  export type ProvincesAvgAggregateInputType = {
    id_prov?: true
  }

  export type ProvincesSumAggregateInputType = {
    id_prov?: true
  }

  export type ProvincesMinAggregateInputType = {
    id_prov?: true
    nama_prov?: true
    created_at?: true
    updated_at?: true
  }

  export type ProvincesMaxAggregateInputType = {
    id_prov?: true
    nama_prov?: true
    created_at?: true
    updated_at?: true
  }

  export type ProvincesCountAggregateInputType = {
    id_prov?: true
    nama_prov?: true
    created_at?: true
    updated_at?: true
    _all?: true
  }

  export type ProvincesAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which provinces to aggregate.
     */
    where?: provincesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of provinces to fetch.
     */
    orderBy?: provincesOrderByWithRelationInput | provincesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: provincesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` provinces from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` provinces.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned provinces
    **/
    _count?: true | ProvincesCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ProvincesAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ProvincesSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ProvincesMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ProvincesMaxAggregateInputType
  }

  export type GetProvincesAggregateType<T extends ProvincesAggregateArgs> = {
        [P in keyof T & keyof AggregateProvinces]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateProvinces[P]>
      : GetScalarType<T[P], AggregateProvinces[P]>
  }




  export type provincesGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: provincesWhereInput
    orderBy?: provincesOrderByWithAggregationInput | provincesOrderByWithAggregationInput[]
    by: ProvincesScalarFieldEnum[] | ProvincesScalarFieldEnum
    having?: provincesScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ProvincesCountAggregateInputType | true
    _avg?: ProvincesAvgAggregateInputType
    _sum?: ProvincesSumAggregateInputType
    _min?: ProvincesMinAggregateInputType
    _max?: ProvincesMaxAggregateInputType
  }

  export type ProvincesGroupByOutputType = {
    id_prov: number
    nama_prov: string
    created_at: Date | null
    updated_at: Date | null
    _count: ProvincesCountAggregateOutputType | null
    _avg: ProvincesAvgAggregateOutputType | null
    _sum: ProvincesSumAggregateOutputType | null
    _min: ProvincesMinAggregateOutputType | null
    _max: ProvincesMaxAggregateOutputType | null
  }

  type GetProvincesGroupByPayload<T extends provincesGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ProvincesGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ProvincesGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ProvincesGroupByOutputType[P]>
            : GetScalarType<T[P], ProvincesGroupByOutputType[P]>
        }
      >
    >


  export type provincesSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id_prov?: boolean
    nama_prov?: boolean
    created_at?: boolean
    updated_at?: boolean
    addresses?: boolean | provinces$addressesArgs<ExtArgs>
    cities?: boolean | provinces$citiesArgs<ExtArgs>
    _count?: boolean | ProvincesCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["provinces"]>

  export type provincesSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id_prov?: boolean
    nama_prov?: boolean
    created_at?: boolean
    updated_at?: boolean
  }, ExtArgs["result"]["provinces"]>

  export type provincesSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id_prov?: boolean
    nama_prov?: boolean
    created_at?: boolean
    updated_at?: boolean
  }, ExtArgs["result"]["provinces"]>

  export type provincesSelectScalar = {
    id_prov?: boolean
    nama_prov?: boolean
    created_at?: boolean
    updated_at?: boolean
  }

  export type provincesOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id_prov" | "nama_prov" | "created_at" | "updated_at", ExtArgs["result"]["provinces"]>
  export type provincesInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    addresses?: boolean | provinces$addressesArgs<ExtArgs>
    cities?: boolean | provinces$citiesArgs<ExtArgs>
    _count?: boolean | ProvincesCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type provincesIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type provincesIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $provincesPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "provinces"
    objects: {
      addresses: Prisma.$addressesPayload<ExtArgs>[]
      cities: Prisma.$citiesPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id_prov: number
      nama_prov: string
      created_at: Date | null
      updated_at: Date | null
    }, ExtArgs["result"]["provinces"]>
    composites: {}
  }

  type provincesGetPayload<S extends boolean | null | undefined | provincesDefaultArgs> = $Result.GetResult<Prisma.$provincesPayload, S>

  type provincesCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<provincesFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ProvincesCountAggregateInputType | true
    }

  export interface provincesDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['provinces'], meta: { name: 'provinces' } }
    /**
     * Find zero or one Provinces that matches the filter.
     * @param {provincesFindUniqueArgs} args - Arguments to find a Provinces
     * @example
     * // Get one Provinces
     * const provinces = await prisma.provinces.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends provincesFindUniqueArgs>(args: SelectSubset<T, provincesFindUniqueArgs<ExtArgs>>): Prisma__provincesClient<$Result.GetResult<Prisma.$provincesPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Provinces that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {provincesFindUniqueOrThrowArgs} args - Arguments to find a Provinces
     * @example
     * // Get one Provinces
     * const provinces = await prisma.provinces.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends provincesFindUniqueOrThrowArgs>(args: SelectSubset<T, provincesFindUniqueOrThrowArgs<ExtArgs>>): Prisma__provincesClient<$Result.GetResult<Prisma.$provincesPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Provinces that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {provincesFindFirstArgs} args - Arguments to find a Provinces
     * @example
     * // Get one Provinces
     * const provinces = await prisma.provinces.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends provincesFindFirstArgs>(args?: SelectSubset<T, provincesFindFirstArgs<ExtArgs>>): Prisma__provincesClient<$Result.GetResult<Prisma.$provincesPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Provinces that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {provincesFindFirstOrThrowArgs} args - Arguments to find a Provinces
     * @example
     * // Get one Provinces
     * const provinces = await prisma.provinces.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends provincesFindFirstOrThrowArgs>(args?: SelectSubset<T, provincesFindFirstOrThrowArgs<ExtArgs>>): Prisma__provincesClient<$Result.GetResult<Prisma.$provincesPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Provinces that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {provincesFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Provinces
     * const provinces = await prisma.provinces.findMany()
     * 
     * // Get first 10 Provinces
     * const provinces = await prisma.provinces.findMany({ take: 10 })
     * 
     * // Only select the `id_prov`
     * const provincesWithId_provOnly = await prisma.provinces.findMany({ select: { id_prov: true } })
     * 
     */
    findMany<T extends provincesFindManyArgs>(args?: SelectSubset<T, provincesFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$provincesPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Provinces.
     * @param {provincesCreateArgs} args - Arguments to create a Provinces.
     * @example
     * // Create one Provinces
     * const Provinces = await prisma.provinces.create({
     *   data: {
     *     // ... data to create a Provinces
     *   }
     * })
     * 
     */
    create<T extends provincesCreateArgs>(args: SelectSubset<T, provincesCreateArgs<ExtArgs>>): Prisma__provincesClient<$Result.GetResult<Prisma.$provincesPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Provinces.
     * @param {provincesCreateManyArgs} args - Arguments to create many Provinces.
     * @example
     * // Create many Provinces
     * const provinces = await prisma.provinces.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends provincesCreateManyArgs>(args?: SelectSubset<T, provincesCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Provinces and returns the data saved in the database.
     * @param {provincesCreateManyAndReturnArgs} args - Arguments to create many Provinces.
     * @example
     * // Create many Provinces
     * const provinces = await prisma.provinces.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Provinces and only return the `id_prov`
     * const provincesWithId_provOnly = await prisma.provinces.createManyAndReturn({
     *   select: { id_prov: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends provincesCreateManyAndReturnArgs>(args?: SelectSubset<T, provincesCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$provincesPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Provinces.
     * @param {provincesDeleteArgs} args - Arguments to delete one Provinces.
     * @example
     * // Delete one Provinces
     * const Provinces = await prisma.provinces.delete({
     *   where: {
     *     // ... filter to delete one Provinces
     *   }
     * })
     * 
     */
    delete<T extends provincesDeleteArgs>(args: SelectSubset<T, provincesDeleteArgs<ExtArgs>>): Prisma__provincesClient<$Result.GetResult<Prisma.$provincesPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Provinces.
     * @param {provincesUpdateArgs} args - Arguments to update one Provinces.
     * @example
     * // Update one Provinces
     * const provinces = await prisma.provinces.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends provincesUpdateArgs>(args: SelectSubset<T, provincesUpdateArgs<ExtArgs>>): Prisma__provincesClient<$Result.GetResult<Prisma.$provincesPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Provinces.
     * @param {provincesDeleteManyArgs} args - Arguments to filter Provinces to delete.
     * @example
     * // Delete a few Provinces
     * const { count } = await prisma.provinces.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends provincesDeleteManyArgs>(args?: SelectSubset<T, provincesDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Provinces.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {provincesUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Provinces
     * const provinces = await prisma.provinces.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends provincesUpdateManyArgs>(args: SelectSubset<T, provincesUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Provinces and returns the data updated in the database.
     * @param {provincesUpdateManyAndReturnArgs} args - Arguments to update many Provinces.
     * @example
     * // Update many Provinces
     * const provinces = await prisma.provinces.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Provinces and only return the `id_prov`
     * const provincesWithId_provOnly = await prisma.provinces.updateManyAndReturn({
     *   select: { id_prov: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends provincesUpdateManyAndReturnArgs>(args: SelectSubset<T, provincesUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$provincesPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Provinces.
     * @param {provincesUpsertArgs} args - Arguments to update or create a Provinces.
     * @example
     * // Update or create a Provinces
     * const provinces = await prisma.provinces.upsert({
     *   create: {
     *     // ... data to create a Provinces
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Provinces we want to update
     *   }
     * })
     */
    upsert<T extends provincesUpsertArgs>(args: SelectSubset<T, provincesUpsertArgs<ExtArgs>>): Prisma__provincesClient<$Result.GetResult<Prisma.$provincesPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Provinces.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {provincesCountArgs} args - Arguments to filter Provinces to count.
     * @example
     * // Count the number of Provinces
     * const count = await prisma.provinces.count({
     *   where: {
     *     // ... the filter for the Provinces we want to count
     *   }
     * })
    **/
    count<T extends provincesCountArgs>(
      args?: Subset<T, provincesCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ProvincesCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Provinces.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProvincesAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ProvincesAggregateArgs>(args: Subset<T, ProvincesAggregateArgs>): Prisma.PrismaPromise<GetProvincesAggregateType<T>>

    /**
     * Group by Provinces.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {provincesGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends provincesGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: provincesGroupByArgs['orderBy'] }
        : { orderBy?: provincesGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, provincesGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetProvincesGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the provinces model
   */
  readonly fields: provincesFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for provinces.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__provincesClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    addresses<T extends provinces$addressesArgs<ExtArgs> = {}>(args?: Subset<T, provinces$addressesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$addressesPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    cities<T extends provinces$citiesArgs<ExtArgs> = {}>(args?: Subset<T, provinces$citiesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$citiesPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the provinces model
   */
  interface provincesFieldRefs {
    readonly id_prov: FieldRef<"provinces", 'Int'>
    readonly nama_prov: FieldRef<"provinces", 'String'>
    readonly created_at: FieldRef<"provinces", 'DateTime'>
    readonly updated_at: FieldRef<"provinces", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * provinces findUnique
   */
  export type provincesFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the provinces
     */
    select?: provincesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the provinces
     */
    omit?: provincesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: provincesInclude<ExtArgs> | null
    /**
     * Filter, which provinces to fetch.
     */
    where: provincesWhereUniqueInput
  }

  /**
   * provinces findUniqueOrThrow
   */
  export type provincesFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the provinces
     */
    select?: provincesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the provinces
     */
    omit?: provincesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: provincesInclude<ExtArgs> | null
    /**
     * Filter, which provinces to fetch.
     */
    where: provincesWhereUniqueInput
  }

  /**
   * provinces findFirst
   */
  export type provincesFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the provinces
     */
    select?: provincesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the provinces
     */
    omit?: provincesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: provincesInclude<ExtArgs> | null
    /**
     * Filter, which provinces to fetch.
     */
    where?: provincesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of provinces to fetch.
     */
    orderBy?: provincesOrderByWithRelationInput | provincesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for provinces.
     */
    cursor?: provincesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` provinces from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` provinces.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of provinces.
     */
    distinct?: ProvincesScalarFieldEnum | ProvincesScalarFieldEnum[]
  }

  /**
   * provinces findFirstOrThrow
   */
  export type provincesFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the provinces
     */
    select?: provincesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the provinces
     */
    omit?: provincesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: provincesInclude<ExtArgs> | null
    /**
     * Filter, which provinces to fetch.
     */
    where?: provincesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of provinces to fetch.
     */
    orderBy?: provincesOrderByWithRelationInput | provincesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for provinces.
     */
    cursor?: provincesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` provinces from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` provinces.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of provinces.
     */
    distinct?: ProvincesScalarFieldEnum | ProvincesScalarFieldEnum[]
  }

  /**
   * provinces findMany
   */
  export type provincesFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the provinces
     */
    select?: provincesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the provinces
     */
    omit?: provincesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: provincesInclude<ExtArgs> | null
    /**
     * Filter, which provinces to fetch.
     */
    where?: provincesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of provinces to fetch.
     */
    orderBy?: provincesOrderByWithRelationInput | provincesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing provinces.
     */
    cursor?: provincesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` provinces from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` provinces.
     */
    skip?: number
    distinct?: ProvincesScalarFieldEnum | ProvincesScalarFieldEnum[]
  }

  /**
   * provinces create
   */
  export type provincesCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the provinces
     */
    select?: provincesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the provinces
     */
    omit?: provincesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: provincesInclude<ExtArgs> | null
    /**
     * The data needed to create a provinces.
     */
    data: XOR<provincesCreateInput, provincesUncheckedCreateInput>
  }

  /**
   * provinces createMany
   */
  export type provincesCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many provinces.
     */
    data: provincesCreateManyInput | provincesCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * provinces createManyAndReturn
   */
  export type provincesCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the provinces
     */
    select?: provincesSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the provinces
     */
    omit?: provincesOmit<ExtArgs> | null
    /**
     * The data used to create many provinces.
     */
    data: provincesCreateManyInput | provincesCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * provinces update
   */
  export type provincesUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the provinces
     */
    select?: provincesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the provinces
     */
    omit?: provincesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: provincesInclude<ExtArgs> | null
    /**
     * The data needed to update a provinces.
     */
    data: XOR<provincesUpdateInput, provincesUncheckedUpdateInput>
    /**
     * Choose, which provinces to update.
     */
    where: provincesWhereUniqueInput
  }

  /**
   * provinces updateMany
   */
  export type provincesUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update provinces.
     */
    data: XOR<provincesUpdateManyMutationInput, provincesUncheckedUpdateManyInput>
    /**
     * Filter which provinces to update
     */
    where?: provincesWhereInput
    /**
     * Limit how many provinces to update.
     */
    limit?: number
  }

  /**
   * provinces updateManyAndReturn
   */
  export type provincesUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the provinces
     */
    select?: provincesSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the provinces
     */
    omit?: provincesOmit<ExtArgs> | null
    /**
     * The data used to update provinces.
     */
    data: XOR<provincesUpdateManyMutationInput, provincesUncheckedUpdateManyInput>
    /**
     * Filter which provinces to update
     */
    where?: provincesWhereInput
    /**
     * Limit how many provinces to update.
     */
    limit?: number
  }

  /**
   * provinces upsert
   */
  export type provincesUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the provinces
     */
    select?: provincesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the provinces
     */
    omit?: provincesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: provincesInclude<ExtArgs> | null
    /**
     * The filter to search for the provinces to update in case it exists.
     */
    where: provincesWhereUniqueInput
    /**
     * In case the provinces found by the `where` argument doesn't exist, create a new provinces with this data.
     */
    create: XOR<provincesCreateInput, provincesUncheckedCreateInput>
    /**
     * In case the provinces was found with the provided `where` argument, update it with this data.
     */
    update: XOR<provincesUpdateInput, provincesUncheckedUpdateInput>
  }

  /**
   * provinces delete
   */
  export type provincesDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the provinces
     */
    select?: provincesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the provinces
     */
    omit?: provincesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: provincesInclude<ExtArgs> | null
    /**
     * Filter which provinces to delete.
     */
    where: provincesWhereUniqueInput
  }

  /**
   * provinces deleteMany
   */
  export type provincesDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which provinces to delete
     */
    where?: provincesWhereInput
    /**
     * Limit how many provinces to delete.
     */
    limit?: number
  }

  /**
   * provinces.addresses
   */
  export type provinces$addressesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the addresses
     */
    select?: addressesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the addresses
     */
    omit?: addressesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: addressesInclude<ExtArgs> | null
    where?: addressesWhereInput
    orderBy?: addressesOrderByWithRelationInput | addressesOrderByWithRelationInput[]
    cursor?: addressesWhereUniqueInput
    take?: number
    skip?: number
    distinct?: AddressesScalarFieldEnum | AddressesScalarFieldEnum[]
  }

  /**
   * provinces.cities
   */
  export type provinces$citiesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the cities
     */
    select?: citiesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the cities
     */
    omit?: citiesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: citiesInclude<ExtArgs> | null
    where?: citiesWhereInput
    orderBy?: citiesOrderByWithRelationInput | citiesOrderByWithRelationInput[]
    cursor?: citiesWhereUniqueInput
    take?: number
    skip?: number
    distinct?: CitiesScalarFieldEnum | CitiesScalarFieldEnum[]
  }

  /**
   * provinces without action
   */
  export type provincesDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the provinces
     */
    select?: provincesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the provinces
     */
    omit?: provincesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: provincesInclude<ExtArgs> | null
  }


  /**
   * Model user_address
   */

  export type AggregateUser_address = {
    _count: User_addressCountAggregateOutputType | null
    _min: User_addressMinAggregateOutputType | null
    _max: User_addressMaxAggregateOutputType | null
  }

  export type User_addressMinAggregateOutputType = {
    id_user: string | null
    id_alamat: string | null
  }

  export type User_addressMaxAggregateOutputType = {
    id_user: string | null
    id_alamat: string | null
  }

  export type User_addressCountAggregateOutputType = {
    id_user: number
    id_alamat: number
    _all: number
  }


  export type User_addressMinAggregateInputType = {
    id_user?: true
    id_alamat?: true
  }

  export type User_addressMaxAggregateInputType = {
    id_user?: true
    id_alamat?: true
  }

  export type User_addressCountAggregateInputType = {
    id_user?: true
    id_alamat?: true
    _all?: true
  }

  export type User_addressAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which user_address to aggregate.
     */
    where?: user_addressWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of user_addresses to fetch.
     */
    orderBy?: user_addressOrderByWithRelationInput | user_addressOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: user_addressWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` user_addresses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` user_addresses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned user_addresses
    **/
    _count?: true | User_addressCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: User_addressMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: User_addressMaxAggregateInputType
  }

  export type GetUser_addressAggregateType<T extends User_addressAggregateArgs> = {
        [P in keyof T & keyof AggregateUser_address]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser_address[P]>
      : GetScalarType<T[P], AggregateUser_address[P]>
  }




  export type user_addressGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: user_addressWhereInput
    orderBy?: user_addressOrderByWithAggregationInput | user_addressOrderByWithAggregationInput[]
    by: User_addressScalarFieldEnum[] | User_addressScalarFieldEnum
    having?: user_addressScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: User_addressCountAggregateInputType | true
    _min?: User_addressMinAggregateInputType
    _max?: User_addressMaxAggregateInputType
  }

  export type User_addressGroupByOutputType = {
    id_user: string
    id_alamat: string
    _count: User_addressCountAggregateOutputType | null
    _min: User_addressMinAggregateOutputType | null
    _max: User_addressMaxAggregateOutputType | null
  }

  type GetUser_addressGroupByPayload<T extends user_addressGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<User_addressGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof User_addressGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], User_addressGroupByOutputType[P]>
            : GetScalarType<T[P], User_addressGroupByOutputType[P]>
        }
      >
    >


  export type user_addressSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id_user?: boolean
    id_alamat?: boolean
    addresses?: boolean | addressesDefaultArgs<ExtArgs>
    users?: boolean | usersDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user_address"]>

  export type user_addressSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id_user?: boolean
    id_alamat?: boolean
    addresses?: boolean | addressesDefaultArgs<ExtArgs>
    users?: boolean | usersDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user_address"]>

  export type user_addressSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id_user?: boolean
    id_alamat?: boolean
    addresses?: boolean | addressesDefaultArgs<ExtArgs>
    users?: boolean | usersDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user_address"]>

  export type user_addressSelectScalar = {
    id_user?: boolean
    id_alamat?: boolean
  }

  export type user_addressOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id_user" | "id_alamat", ExtArgs["result"]["user_address"]>
  export type user_addressInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    addresses?: boolean | addressesDefaultArgs<ExtArgs>
    users?: boolean | usersDefaultArgs<ExtArgs>
  }
  export type user_addressIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    addresses?: boolean | addressesDefaultArgs<ExtArgs>
    users?: boolean | usersDefaultArgs<ExtArgs>
  }
  export type user_addressIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    addresses?: boolean | addressesDefaultArgs<ExtArgs>
    users?: boolean | usersDefaultArgs<ExtArgs>
  }

  export type $user_addressPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "user_address"
    objects: {
      addresses: Prisma.$addressesPayload<ExtArgs>
      users: Prisma.$usersPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id_user: string
      id_alamat: string
    }, ExtArgs["result"]["user_address"]>
    composites: {}
  }

  type user_addressGetPayload<S extends boolean | null | undefined | user_addressDefaultArgs> = $Result.GetResult<Prisma.$user_addressPayload, S>

  type user_addressCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<user_addressFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: User_addressCountAggregateInputType | true
    }

  export interface user_addressDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['user_address'], meta: { name: 'user_address' } }
    /**
     * Find zero or one User_address that matches the filter.
     * @param {user_addressFindUniqueArgs} args - Arguments to find a User_address
     * @example
     * // Get one User_address
     * const user_address = await prisma.user_address.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends user_addressFindUniqueArgs>(args: SelectSubset<T, user_addressFindUniqueArgs<ExtArgs>>): Prisma__user_addressClient<$Result.GetResult<Prisma.$user_addressPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one User_address that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {user_addressFindUniqueOrThrowArgs} args - Arguments to find a User_address
     * @example
     * // Get one User_address
     * const user_address = await prisma.user_address.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends user_addressFindUniqueOrThrowArgs>(args: SelectSubset<T, user_addressFindUniqueOrThrowArgs<ExtArgs>>): Prisma__user_addressClient<$Result.GetResult<Prisma.$user_addressPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User_address that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {user_addressFindFirstArgs} args - Arguments to find a User_address
     * @example
     * // Get one User_address
     * const user_address = await prisma.user_address.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends user_addressFindFirstArgs>(args?: SelectSubset<T, user_addressFindFirstArgs<ExtArgs>>): Prisma__user_addressClient<$Result.GetResult<Prisma.$user_addressPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User_address that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {user_addressFindFirstOrThrowArgs} args - Arguments to find a User_address
     * @example
     * // Get one User_address
     * const user_address = await prisma.user_address.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends user_addressFindFirstOrThrowArgs>(args?: SelectSubset<T, user_addressFindFirstOrThrowArgs<ExtArgs>>): Prisma__user_addressClient<$Result.GetResult<Prisma.$user_addressPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more User_addresses that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {user_addressFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all User_addresses
     * const user_addresses = await prisma.user_address.findMany()
     * 
     * // Get first 10 User_addresses
     * const user_addresses = await prisma.user_address.findMany({ take: 10 })
     * 
     * // Only select the `id_user`
     * const user_addressWithId_userOnly = await prisma.user_address.findMany({ select: { id_user: true } })
     * 
     */
    findMany<T extends user_addressFindManyArgs>(args?: SelectSubset<T, user_addressFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$user_addressPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a User_address.
     * @param {user_addressCreateArgs} args - Arguments to create a User_address.
     * @example
     * // Create one User_address
     * const User_address = await prisma.user_address.create({
     *   data: {
     *     // ... data to create a User_address
     *   }
     * })
     * 
     */
    create<T extends user_addressCreateArgs>(args: SelectSubset<T, user_addressCreateArgs<ExtArgs>>): Prisma__user_addressClient<$Result.GetResult<Prisma.$user_addressPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many User_addresses.
     * @param {user_addressCreateManyArgs} args - Arguments to create many User_addresses.
     * @example
     * // Create many User_addresses
     * const user_address = await prisma.user_address.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends user_addressCreateManyArgs>(args?: SelectSubset<T, user_addressCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many User_addresses and returns the data saved in the database.
     * @param {user_addressCreateManyAndReturnArgs} args - Arguments to create many User_addresses.
     * @example
     * // Create many User_addresses
     * const user_address = await prisma.user_address.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many User_addresses and only return the `id_user`
     * const user_addressWithId_userOnly = await prisma.user_address.createManyAndReturn({
     *   select: { id_user: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends user_addressCreateManyAndReturnArgs>(args?: SelectSubset<T, user_addressCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$user_addressPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a User_address.
     * @param {user_addressDeleteArgs} args - Arguments to delete one User_address.
     * @example
     * // Delete one User_address
     * const User_address = await prisma.user_address.delete({
     *   where: {
     *     // ... filter to delete one User_address
     *   }
     * })
     * 
     */
    delete<T extends user_addressDeleteArgs>(args: SelectSubset<T, user_addressDeleteArgs<ExtArgs>>): Prisma__user_addressClient<$Result.GetResult<Prisma.$user_addressPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one User_address.
     * @param {user_addressUpdateArgs} args - Arguments to update one User_address.
     * @example
     * // Update one User_address
     * const user_address = await prisma.user_address.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends user_addressUpdateArgs>(args: SelectSubset<T, user_addressUpdateArgs<ExtArgs>>): Prisma__user_addressClient<$Result.GetResult<Prisma.$user_addressPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more User_addresses.
     * @param {user_addressDeleteManyArgs} args - Arguments to filter User_addresses to delete.
     * @example
     * // Delete a few User_addresses
     * const { count } = await prisma.user_address.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends user_addressDeleteManyArgs>(args?: SelectSubset<T, user_addressDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more User_addresses.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {user_addressUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many User_addresses
     * const user_address = await prisma.user_address.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends user_addressUpdateManyArgs>(args: SelectSubset<T, user_addressUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more User_addresses and returns the data updated in the database.
     * @param {user_addressUpdateManyAndReturnArgs} args - Arguments to update many User_addresses.
     * @example
     * // Update many User_addresses
     * const user_address = await prisma.user_address.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more User_addresses and only return the `id_user`
     * const user_addressWithId_userOnly = await prisma.user_address.updateManyAndReturn({
     *   select: { id_user: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends user_addressUpdateManyAndReturnArgs>(args: SelectSubset<T, user_addressUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$user_addressPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one User_address.
     * @param {user_addressUpsertArgs} args - Arguments to update or create a User_address.
     * @example
     * // Update or create a User_address
     * const user_address = await prisma.user_address.upsert({
     *   create: {
     *     // ... data to create a User_address
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the User_address we want to update
     *   }
     * })
     */
    upsert<T extends user_addressUpsertArgs>(args: SelectSubset<T, user_addressUpsertArgs<ExtArgs>>): Prisma__user_addressClient<$Result.GetResult<Prisma.$user_addressPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of User_addresses.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {user_addressCountArgs} args - Arguments to filter User_addresses to count.
     * @example
     * // Count the number of User_addresses
     * const count = await prisma.user_address.count({
     *   where: {
     *     // ... the filter for the User_addresses we want to count
     *   }
     * })
    **/
    count<T extends user_addressCountArgs>(
      args?: Subset<T, user_addressCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], User_addressCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a User_address.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {User_addressAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends User_addressAggregateArgs>(args: Subset<T, User_addressAggregateArgs>): Prisma.PrismaPromise<GetUser_addressAggregateType<T>>

    /**
     * Group by User_address.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {user_addressGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends user_addressGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: user_addressGroupByArgs['orderBy'] }
        : { orderBy?: user_addressGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, user_addressGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUser_addressGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the user_address model
   */
  readonly fields: user_addressFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for user_address.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__user_addressClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    addresses<T extends addressesDefaultArgs<ExtArgs> = {}>(args?: Subset<T, addressesDefaultArgs<ExtArgs>>): Prisma__addressesClient<$Result.GetResult<Prisma.$addressesPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    users<T extends usersDefaultArgs<ExtArgs> = {}>(args?: Subset<T, usersDefaultArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the user_address model
   */
  interface user_addressFieldRefs {
    readonly id_user: FieldRef<"user_address", 'String'>
    readonly id_alamat: FieldRef<"user_address", 'String'>
  }
    

  // Custom InputTypes
  /**
   * user_address findUnique
   */
  export type user_addressFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user_address
     */
    select?: user_addressSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user_address
     */
    omit?: user_addressOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: user_addressInclude<ExtArgs> | null
    /**
     * Filter, which user_address to fetch.
     */
    where: user_addressWhereUniqueInput
  }

  /**
   * user_address findUniqueOrThrow
   */
  export type user_addressFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user_address
     */
    select?: user_addressSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user_address
     */
    omit?: user_addressOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: user_addressInclude<ExtArgs> | null
    /**
     * Filter, which user_address to fetch.
     */
    where: user_addressWhereUniqueInput
  }

  /**
   * user_address findFirst
   */
  export type user_addressFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user_address
     */
    select?: user_addressSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user_address
     */
    omit?: user_addressOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: user_addressInclude<ExtArgs> | null
    /**
     * Filter, which user_address to fetch.
     */
    where?: user_addressWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of user_addresses to fetch.
     */
    orderBy?: user_addressOrderByWithRelationInput | user_addressOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for user_addresses.
     */
    cursor?: user_addressWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` user_addresses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` user_addresses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of user_addresses.
     */
    distinct?: User_addressScalarFieldEnum | User_addressScalarFieldEnum[]
  }

  /**
   * user_address findFirstOrThrow
   */
  export type user_addressFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user_address
     */
    select?: user_addressSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user_address
     */
    omit?: user_addressOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: user_addressInclude<ExtArgs> | null
    /**
     * Filter, which user_address to fetch.
     */
    where?: user_addressWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of user_addresses to fetch.
     */
    orderBy?: user_addressOrderByWithRelationInput | user_addressOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for user_addresses.
     */
    cursor?: user_addressWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` user_addresses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` user_addresses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of user_addresses.
     */
    distinct?: User_addressScalarFieldEnum | User_addressScalarFieldEnum[]
  }

  /**
   * user_address findMany
   */
  export type user_addressFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user_address
     */
    select?: user_addressSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user_address
     */
    omit?: user_addressOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: user_addressInclude<ExtArgs> | null
    /**
     * Filter, which user_addresses to fetch.
     */
    where?: user_addressWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of user_addresses to fetch.
     */
    orderBy?: user_addressOrderByWithRelationInput | user_addressOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing user_addresses.
     */
    cursor?: user_addressWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` user_addresses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` user_addresses.
     */
    skip?: number
    distinct?: User_addressScalarFieldEnum | User_addressScalarFieldEnum[]
  }

  /**
   * user_address create
   */
  export type user_addressCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user_address
     */
    select?: user_addressSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user_address
     */
    omit?: user_addressOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: user_addressInclude<ExtArgs> | null
    /**
     * The data needed to create a user_address.
     */
    data: XOR<user_addressCreateInput, user_addressUncheckedCreateInput>
  }

  /**
   * user_address createMany
   */
  export type user_addressCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many user_addresses.
     */
    data: user_addressCreateManyInput | user_addressCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * user_address createManyAndReturn
   */
  export type user_addressCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user_address
     */
    select?: user_addressSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the user_address
     */
    omit?: user_addressOmit<ExtArgs> | null
    /**
     * The data used to create many user_addresses.
     */
    data: user_addressCreateManyInput | user_addressCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: user_addressIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * user_address update
   */
  export type user_addressUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user_address
     */
    select?: user_addressSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user_address
     */
    omit?: user_addressOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: user_addressInclude<ExtArgs> | null
    /**
     * The data needed to update a user_address.
     */
    data: XOR<user_addressUpdateInput, user_addressUncheckedUpdateInput>
    /**
     * Choose, which user_address to update.
     */
    where: user_addressWhereUniqueInput
  }

  /**
   * user_address updateMany
   */
  export type user_addressUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update user_addresses.
     */
    data: XOR<user_addressUpdateManyMutationInput, user_addressUncheckedUpdateManyInput>
    /**
     * Filter which user_addresses to update
     */
    where?: user_addressWhereInput
    /**
     * Limit how many user_addresses to update.
     */
    limit?: number
  }

  /**
   * user_address updateManyAndReturn
   */
  export type user_addressUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user_address
     */
    select?: user_addressSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the user_address
     */
    omit?: user_addressOmit<ExtArgs> | null
    /**
     * The data used to update user_addresses.
     */
    data: XOR<user_addressUpdateManyMutationInput, user_addressUncheckedUpdateManyInput>
    /**
     * Filter which user_addresses to update
     */
    where?: user_addressWhereInput
    /**
     * Limit how many user_addresses to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: user_addressIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * user_address upsert
   */
  export type user_addressUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user_address
     */
    select?: user_addressSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user_address
     */
    omit?: user_addressOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: user_addressInclude<ExtArgs> | null
    /**
     * The filter to search for the user_address to update in case it exists.
     */
    where: user_addressWhereUniqueInput
    /**
     * In case the user_address found by the `where` argument doesn't exist, create a new user_address with this data.
     */
    create: XOR<user_addressCreateInput, user_addressUncheckedCreateInput>
    /**
     * In case the user_address was found with the provided `where` argument, update it with this data.
     */
    update: XOR<user_addressUpdateInput, user_addressUncheckedUpdateInput>
  }

  /**
   * user_address delete
   */
  export type user_addressDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user_address
     */
    select?: user_addressSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user_address
     */
    omit?: user_addressOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: user_addressInclude<ExtArgs> | null
    /**
     * Filter which user_address to delete.
     */
    where: user_addressWhereUniqueInput
  }

  /**
   * user_address deleteMany
   */
  export type user_addressDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which user_addresses to delete
     */
    where?: user_addressWhereInput
    /**
     * Limit how many user_addresses to delete.
     */
    limit?: number
  }

  /**
   * user_address without action
   */
  export type user_addressDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user_address
     */
    select?: user_addressSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user_address
     */
    omit?: user_addressOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: user_addressInclude<ExtArgs> | null
  }


  /**
   * Model users
   */

  export type AggregateUsers = {
    _count: UsersCountAggregateOutputType | null
    _min: UsersMinAggregateOutputType | null
    _max: UsersMaxAggregateOutputType | null
  }

  export type UsersMinAggregateOutputType = {
    id_user: string | null
    username: string | null
    nama: string | null
    email: string | null
    sandi: string | null
    gender: $Enums.gender_enum | null
    birth_date: Date | null
    foto: Uint8Array | null
    bio: string | null
    status_user: $Enums.status_user_enum | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type UsersMaxAggregateOutputType = {
    id_user: string | null
    username: string | null
    nama: string | null
    email: string | null
    sandi: string | null
    gender: $Enums.gender_enum | null
    birth_date: Date | null
    foto: Uint8Array | null
    bio: string | null
    status_user: $Enums.status_user_enum | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type UsersCountAggregateOutputType = {
    id_user: number
    username: number
    nama: number
    email: number
    sandi: number
    gender: number
    birth_date: number
    foto: number
    bio: number
    status_user: number
    created_at: number
    updated_at: number
    _all: number
  }


  export type UsersMinAggregateInputType = {
    id_user?: true
    username?: true
    nama?: true
    email?: true
    sandi?: true
    gender?: true
    birth_date?: true
    foto?: true
    bio?: true
    status_user?: true
    created_at?: true
    updated_at?: true
  }

  export type UsersMaxAggregateInputType = {
    id_user?: true
    username?: true
    nama?: true
    email?: true
    sandi?: true
    gender?: true
    birth_date?: true
    foto?: true
    bio?: true
    status_user?: true
    created_at?: true
    updated_at?: true
  }

  export type UsersCountAggregateInputType = {
    id_user?: true
    username?: true
    nama?: true
    email?: true
    sandi?: true
    gender?: true
    birth_date?: true
    foto?: true
    bio?: true
    status_user?: true
    created_at?: true
    updated_at?: true
    _all?: true
  }

  export type UsersAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which users to aggregate.
     */
    where?: usersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of users to fetch.
     */
    orderBy?: usersOrderByWithRelationInput | usersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: usersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned users
    **/
    _count?: true | UsersCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UsersMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UsersMaxAggregateInputType
  }

  export type GetUsersAggregateType<T extends UsersAggregateArgs> = {
        [P in keyof T & keyof AggregateUsers]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUsers[P]>
      : GetScalarType<T[P], AggregateUsers[P]>
  }




  export type usersGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: usersWhereInput
    orderBy?: usersOrderByWithAggregationInput | usersOrderByWithAggregationInput[]
    by: UsersScalarFieldEnum[] | UsersScalarFieldEnum
    having?: usersScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UsersCountAggregateInputType | true
    _min?: UsersMinAggregateInputType
    _max?: UsersMaxAggregateInputType
  }

  export type UsersGroupByOutputType = {
    id_user: string
    username: string | null
    nama: string | null
    email: string
    sandi: string
    gender: $Enums.gender_enum | null
    birth_date: Date | null
    foto: Uint8Array | null
    bio: string | null
    status_user: $Enums.status_user_enum | null
    created_at: Date | null
    updated_at: Date | null
    _count: UsersCountAggregateOutputType | null
    _min: UsersMinAggregateOutputType | null
    _max: UsersMaxAggregateOutputType | null
  }

  type GetUsersGroupByPayload<T extends usersGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UsersGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UsersGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UsersGroupByOutputType[P]>
            : GetScalarType<T[P], UsersGroupByOutputType[P]>
        }
      >
    >


  export type usersSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id_user?: boolean
    username?: boolean
    nama?: boolean
    email?: boolean
    sandi?: boolean
    gender?: boolean
    birth_date?: boolean
    foto?: boolean
    bio?: boolean
    status_user?: boolean
    created_at?: boolean
    updated_at?: boolean
    profession_user?: boolean | users$profession_userArgs<ExtArgs>
    user_address?: boolean | users$user_addressArgs<ExtArgs>
    _count?: boolean | UsersCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["users"]>

  export type usersSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id_user?: boolean
    username?: boolean
    nama?: boolean
    email?: boolean
    sandi?: boolean
    gender?: boolean
    birth_date?: boolean
    foto?: boolean
    bio?: boolean
    status_user?: boolean
    created_at?: boolean
    updated_at?: boolean
  }, ExtArgs["result"]["users"]>

  export type usersSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id_user?: boolean
    username?: boolean
    nama?: boolean
    email?: boolean
    sandi?: boolean
    gender?: boolean
    birth_date?: boolean
    foto?: boolean
    bio?: boolean
    status_user?: boolean
    created_at?: boolean
    updated_at?: boolean
  }, ExtArgs["result"]["users"]>

  export type usersSelectScalar = {
    id_user?: boolean
    username?: boolean
    nama?: boolean
    email?: boolean
    sandi?: boolean
    gender?: boolean
    birth_date?: boolean
    foto?: boolean
    bio?: boolean
    status_user?: boolean
    created_at?: boolean
    updated_at?: boolean
  }

  export type usersOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id_user" | "username" | "nama" | "email" | "sandi" | "gender" | "birth_date" | "foto" | "bio" | "status_user" | "created_at" | "updated_at", ExtArgs["result"]["users"]>
  export type usersInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    profession_user?: boolean | users$profession_userArgs<ExtArgs>
    user_address?: boolean | users$user_addressArgs<ExtArgs>
    _count?: boolean | UsersCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type usersIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type usersIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $usersPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "users"
    objects: {
      profession_user: Prisma.$profession_userPayload<ExtArgs>[]
      user_address: Prisma.$user_addressPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id_user: string
      username: string | null
      nama: string | null
      email: string
      sandi: string
      gender: $Enums.gender_enum | null
      birth_date: Date | null
      foto: Uint8Array | null
      bio: string | null
      status_user: $Enums.status_user_enum | null
      created_at: Date | null
      updated_at: Date | null
    }, ExtArgs["result"]["users"]>
    composites: {}
  }

  type usersGetPayload<S extends boolean | null | undefined | usersDefaultArgs> = $Result.GetResult<Prisma.$usersPayload, S>

  type usersCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<usersFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UsersCountAggregateInputType | true
    }

  export interface usersDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['users'], meta: { name: 'users' } }
    /**
     * Find zero or one Users that matches the filter.
     * @param {usersFindUniqueArgs} args - Arguments to find a Users
     * @example
     * // Get one Users
     * const users = await prisma.users.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends usersFindUniqueArgs>(args: SelectSubset<T, usersFindUniqueArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Users that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {usersFindUniqueOrThrowArgs} args - Arguments to find a Users
     * @example
     * // Get one Users
     * const users = await prisma.users.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends usersFindUniqueOrThrowArgs>(args: SelectSubset<T, usersFindUniqueOrThrowArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {usersFindFirstArgs} args - Arguments to find a Users
     * @example
     * // Get one Users
     * const users = await prisma.users.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends usersFindFirstArgs>(args?: SelectSubset<T, usersFindFirstArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Users that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {usersFindFirstOrThrowArgs} args - Arguments to find a Users
     * @example
     * // Get one Users
     * const users = await prisma.users.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends usersFindFirstOrThrowArgs>(args?: SelectSubset<T, usersFindFirstOrThrowArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {usersFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.users.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.users.findMany({ take: 10 })
     * 
     * // Only select the `id_user`
     * const usersWithId_userOnly = await prisma.users.findMany({ select: { id_user: true } })
     * 
     */
    findMany<T extends usersFindManyArgs>(args?: SelectSubset<T, usersFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Users.
     * @param {usersCreateArgs} args - Arguments to create a Users.
     * @example
     * // Create one Users
     * const Users = await prisma.users.create({
     *   data: {
     *     // ... data to create a Users
     *   }
     * })
     * 
     */
    create<T extends usersCreateArgs>(args: SelectSubset<T, usersCreateArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Users.
     * @param {usersCreateManyArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const users = await prisma.users.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends usersCreateManyArgs>(args?: SelectSubset<T, usersCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Users and returns the data saved in the database.
     * @param {usersCreateManyAndReturnArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const users = await prisma.users.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Users and only return the `id_user`
     * const usersWithId_userOnly = await prisma.users.createManyAndReturn({
     *   select: { id_user: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends usersCreateManyAndReturnArgs>(args?: SelectSubset<T, usersCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Users.
     * @param {usersDeleteArgs} args - Arguments to delete one Users.
     * @example
     * // Delete one Users
     * const Users = await prisma.users.delete({
     *   where: {
     *     // ... filter to delete one Users
     *   }
     * })
     * 
     */
    delete<T extends usersDeleteArgs>(args: SelectSubset<T, usersDeleteArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Users.
     * @param {usersUpdateArgs} args - Arguments to update one Users.
     * @example
     * // Update one Users
     * const users = await prisma.users.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends usersUpdateArgs>(args: SelectSubset<T, usersUpdateArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Users.
     * @param {usersDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.users.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends usersDeleteManyArgs>(args?: SelectSubset<T, usersDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {usersUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const users = await prisma.users.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends usersUpdateManyArgs>(args: SelectSubset<T, usersUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users and returns the data updated in the database.
     * @param {usersUpdateManyAndReturnArgs} args - Arguments to update many Users.
     * @example
     * // Update many Users
     * const users = await prisma.users.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Users and only return the `id_user`
     * const usersWithId_userOnly = await prisma.users.updateManyAndReturn({
     *   select: { id_user: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends usersUpdateManyAndReturnArgs>(args: SelectSubset<T, usersUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Users.
     * @param {usersUpsertArgs} args - Arguments to update or create a Users.
     * @example
     * // Update or create a Users
     * const users = await prisma.users.upsert({
     *   create: {
     *     // ... data to create a Users
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Users we want to update
     *   }
     * })
     */
    upsert<T extends usersUpsertArgs>(args: SelectSubset<T, usersUpsertArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {usersCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.users.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends usersCountArgs>(
      args?: Subset<T, usersCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UsersCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsersAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UsersAggregateArgs>(args: Subset<T, UsersAggregateArgs>): Prisma.PrismaPromise<GetUsersAggregateType<T>>

    /**
     * Group by Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {usersGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends usersGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: usersGroupByArgs['orderBy'] }
        : { orderBy?: usersGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, usersGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUsersGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the users model
   */
  readonly fields: usersFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for users.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__usersClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    profession_user<T extends users$profession_userArgs<ExtArgs> = {}>(args?: Subset<T, users$profession_userArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$profession_userPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    user_address<T extends users$user_addressArgs<ExtArgs> = {}>(args?: Subset<T, users$user_addressArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$user_addressPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the users model
   */
  interface usersFieldRefs {
    readonly id_user: FieldRef<"users", 'String'>
    readonly username: FieldRef<"users", 'String'>
    readonly nama: FieldRef<"users", 'String'>
    readonly email: FieldRef<"users", 'String'>
    readonly sandi: FieldRef<"users", 'String'>
    readonly gender: FieldRef<"users", 'gender_enum'>
    readonly birth_date: FieldRef<"users", 'DateTime'>
    readonly foto: FieldRef<"users", 'Bytes'>
    readonly bio: FieldRef<"users", 'String'>
    readonly status_user: FieldRef<"users", 'status_user_enum'>
    readonly created_at: FieldRef<"users", 'DateTime'>
    readonly updated_at: FieldRef<"users", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * users findUnique
   */
  export type usersFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usersInclude<ExtArgs> | null
    /**
     * Filter, which users to fetch.
     */
    where: usersWhereUniqueInput
  }

  /**
   * users findUniqueOrThrow
   */
  export type usersFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usersInclude<ExtArgs> | null
    /**
     * Filter, which users to fetch.
     */
    where: usersWhereUniqueInput
  }

  /**
   * users findFirst
   */
  export type usersFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usersInclude<ExtArgs> | null
    /**
     * Filter, which users to fetch.
     */
    where?: usersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of users to fetch.
     */
    orderBy?: usersOrderByWithRelationInput | usersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for users.
     */
    cursor?: usersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of users.
     */
    distinct?: UsersScalarFieldEnum | UsersScalarFieldEnum[]
  }

  /**
   * users findFirstOrThrow
   */
  export type usersFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usersInclude<ExtArgs> | null
    /**
     * Filter, which users to fetch.
     */
    where?: usersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of users to fetch.
     */
    orderBy?: usersOrderByWithRelationInput | usersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for users.
     */
    cursor?: usersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of users.
     */
    distinct?: UsersScalarFieldEnum | UsersScalarFieldEnum[]
  }

  /**
   * users findMany
   */
  export type usersFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usersInclude<ExtArgs> | null
    /**
     * Filter, which users to fetch.
     */
    where?: usersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of users to fetch.
     */
    orderBy?: usersOrderByWithRelationInput | usersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing users.
     */
    cursor?: usersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` users.
     */
    skip?: number
    distinct?: UsersScalarFieldEnum | UsersScalarFieldEnum[]
  }

  /**
   * users create
   */
  export type usersCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usersInclude<ExtArgs> | null
    /**
     * The data needed to create a users.
     */
    data: XOR<usersCreateInput, usersUncheckedCreateInput>
  }

  /**
   * users createMany
   */
  export type usersCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many users.
     */
    data: usersCreateManyInput | usersCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * users createManyAndReturn
   */
  export type usersCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * The data used to create many users.
     */
    data: usersCreateManyInput | usersCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * users update
   */
  export type usersUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usersInclude<ExtArgs> | null
    /**
     * The data needed to update a users.
     */
    data: XOR<usersUpdateInput, usersUncheckedUpdateInput>
    /**
     * Choose, which users to update.
     */
    where: usersWhereUniqueInput
  }

  /**
   * users updateMany
   */
  export type usersUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update users.
     */
    data: XOR<usersUpdateManyMutationInput, usersUncheckedUpdateManyInput>
    /**
     * Filter which users to update
     */
    where?: usersWhereInput
    /**
     * Limit how many users to update.
     */
    limit?: number
  }

  /**
   * users updateManyAndReturn
   */
  export type usersUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * The data used to update users.
     */
    data: XOR<usersUpdateManyMutationInput, usersUncheckedUpdateManyInput>
    /**
     * Filter which users to update
     */
    where?: usersWhereInput
    /**
     * Limit how many users to update.
     */
    limit?: number
  }

  /**
   * users upsert
   */
  export type usersUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usersInclude<ExtArgs> | null
    /**
     * The filter to search for the users to update in case it exists.
     */
    where: usersWhereUniqueInput
    /**
     * In case the users found by the `where` argument doesn't exist, create a new users with this data.
     */
    create: XOR<usersCreateInput, usersUncheckedCreateInput>
    /**
     * In case the users was found with the provided `where` argument, update it with this data.
     */
    update: XOR<usersUpdateInput, usersUncheckedUpdateInput>
  }

  /**
   * users delete
   */
  export type usersDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usersInclude<ExtArgs> | null
    /**
     * Filter which users to delete.
     */
    where: usersWhereUniqueInput
  }

  /**
   * users deleteMany
   */
  export type usersDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which users to delete
     */
    where?: usersWhereInput
    /**
     * Limit how many users to delete.
     */
    limit?: number
  }

  /**
   * users.profession_user
   */
  export type users$profession_userArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the profession_user
     */
    select?: profession_userSelect<ExtArgs> | null
    /**
     * Omit specific fields from the profession_user
     */
    omit?: profession_userOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: profession_userInclude<ExtArgs> | null
    where?: profession_userWhereInput
    orderBy?: profession_userOrderByWithRelationInput | profession_userOrderByWithRelationInput[]
    cursor?: profession_userWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Profession_userScalarFieldEnum | Profession_userScalarFieldEnum[]
  }

  /**
   * users.user_address
   */
  export type users$user_addressArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user_address
     */
    select?: user_addressSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user_address
     */
    omit?: user_addressOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: user_addressInclude<ExtArgs> | null
    where?: user_addressWhereInput
    orderBy?: user_addressOrderByWithRelationInput | user_addressOrderByWithRelationInput[]
    cursor?: user_addressWhereUniqueInput
    take?: number
    skip?: number
    distinct?: User_addressScalarFieldEnum | User_addressScalarFieldEnum[]
  }

  /**
   * users without action
   */
  export type usersDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usersInclude<ExtArgs> | null
  }


  /**
   * Model profession_category
   */

  export type AggregateProfession_category = {
    _count: Profession_categoryCountAggregateOutputType | null
    _avg: Profession_categoryAvgAggregateOutputType | null
    _sum: Profession_categorySumAggregateOutputType | null
    _min: Profession_categoryMinAggregateOutputType | null
    _max: Profession_categoryMaxAggregateOutputType | null
  }

  export type Profession_categoryAvgAggregateOutputType = {
    id_prof_cat: number | null
  }

  export type Profession_categorySumAggregateOutputType = {
    id_prof_cat: bigint | null
  }

  export type Profession_categoryMinAggregateOutputType = {
    id_prof_cat: bigint | null
    profession_category: string | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type Profession_categoryMaxAggregateOutputType = {
    id_prof_cat: bigint | null
    profession_category: string | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type Profession_categoryCountAggregateOutputType = {
    id_prof_cat: number
    profession_category: number
    created_at: number
    updated_at: number
    _all: number
  }


  export type Profession_categoryAvgAggregateInputType = {
    id_prof_cat?: true
  }

  export type Profession_categorySumAggregateInputType = {
    id_prof_cat?: true
  }

  export type Profession_categoryMinAggregateInputType = {
    id_prof_cat?: true
    profession_category?: true
    created_at?: true
    updated_at?: true
  }

  export type Profession_categoryMaxAggregateInputType = {
    id_prof_cat?: true
    profession_category?: true
    created_at?: true
    updated_at?: true
  }

  export type Profession_categoryCountAggregateInputType = {
    id_prof_cat?: true
    profession_category?: true
    created_at?: true
    updated_at?: true
    _all?: true
  }

  export type Profession_categoryAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which profession_category to aggregate.
     */
    where?: profession_categoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of profession_categories to fetch.
     */
    orderBy?: profession_categoryOrderByWithRelationInput | profession_categoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: profession_categoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` profession_categories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` profession_categories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned profession_categories
    **/
    _count?: true | Profession_categoryCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: Profession_categoryAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: Profession_categorySumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Profession_categoryMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Profession_categoryMaxAggregateInputType
  }

  export type GetProfession_categoryAggregateType<T extends Profession_categoryAggregateArgs> = {
        [P in keyof T & keyof AggregateProfession_category]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateProfession_category[P]>
      : GetScalarType<T[P], AggregateProfession_category[P]>
  }




  export type profession_categoryGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: profession_categoryWhereInput
    orderBy?: profession_categoryOrderByWithAggregationInput | profession_categoryOrderByWithAggregationInput[]
    by: Profession_categoryScalarFieldEnum[] | Profession_categoryScalarFieldEnum
    having?: profession_categoryScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Profession_categoryCountAggregateInputType | true
    _avg?: Profession_categoryAvgAggregateInputType
    _sum?: Profession_categorySumAggregateInputType
    _min?: Profession_categoryMinAggregateInputType
    _max?: Profession_categoryMaxAggregateInputType
  }

  export type Profession_categoryGroupByOutputType = {
    id_prof_cat: bigint
    profession_category: string | null
    created_at: Date | null
    updated_at: Date | null
    _count: Profession_categoryCountAggregateOutputType | null
    _avg: Profession_categoryAvgAggregateOutputType | null
    _sum: Profession_categorySumAggregateOutputType | null
    _min: Profession_categoryMinAggregateOutputType | null
    _max: Profession_categoryMaxAggregateOutputType | null
  }

  type GetProfession_categoryGroupByPayload<T extends profession_categoryGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Profession_categoryGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Profession_categoryGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Profession_categoryGroupByOutputType[P]>
            : GetScalarType<T[P], Profession_categoryGroupByOutputType[P]>
        }
      >
    >


  export type profession_categorySelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id_prof_cat?: boolean
    profession_category?: boolean
    created_at?: boolean
    updated_at?: boolean
    profession?: boolean | profession_category$professionArgs<ExtArgs>
    _count?: boolean | Profession_categoryCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["profession_category"]>

  export type profession_categorySelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id_prof_cat?: boolean
    profession_category?: boolean
    created_at?: boolean
    updated_at?: boolean
  }, ExtArgs["result"]["profession_category"]>

  export type profession_categorySelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id_prof_cat?: boolean
    profession_category?: boolean
    created_at?: boolean
    updated_at?: boolean
  }, ExtArgs["result"]["profession_category"]>

  export type profession_categorySelectScalar = {
    id_prof_cat?: boolean
    profession_category?: boolean
    created_at?: boolean
    updated_at?: boolean
  }

  export type profession_categoryOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id_prof_cat" | "profession_category" | "created_at" | "updated_at", ExtArgs["result"]["profession_category"]>
  export type profession_categoryInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    profession?: boolean | profession_category$professionArgs<ExtArgs>
    _count?: boolean | Profession_categoryCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type profession_categoryIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type profession_categoryIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $profession_categoryPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "profession_category"
    objects: {
      profession: Prisma.$professionPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id_prof_cat: bigint
      profession_category: string | null
      created_at: Date | null
      updated_at: Date | null
    }, ExtArgs["result"]["profession_category"]>
    composites: {}
  }

  type profession_categoryGetPayload<S extends boolean | null | undefined | profession_categoryDefaultArgs> = $Result.GetResult<Prisma.$profession_categoryPayload, S>

  type profession_categoryCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<profession_categoryFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: Profession_categoryCountAggregateInputType | true
    }

  export interface profession_categoryDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['profession_category'], meta: { name: 'profession_category' } }
    /**
     * Find zero or one Profession_category that matches the filter.
     * @param {profession_categoryFindUniqueArgs} args - Arguments to find a Profession_category
     * @example
     * // Get one Profession_category
     * const profession_category = await prisma.profession_category.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends profession_categoryFindUniqueArgs>(args: SelectSubset<T, profession_categoryFindUniqueArgs<ExtArgs>>): Prisma__profession_categoryClient<$Result.GetResult<Prisma.$profession_categoryPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Profession_category that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {profession_categoryFindUniqueOrThrowArgs} args - Arguments to find a Profession_category
     * @example
     * // Get one Profession_category
     * const profession_category = await prisma.profession_category.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends profession_categoryFindUniqueOrThrowArgs>(args: SelectSubset<T, profession_categoryFindUniqueOrThrowArgs<ExtArgs>>): Prisma__profession_categoryClient<$Result.GetResult<Prisma.$profession_categoryPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Profession_category that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {profession_categoryFindFirstArgs} args - Arguments to find a Profession_category
     * @example
     * // Get one Profession_category
     * const profession_category = await prisma.profession_category.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends profession_categoryFindFirstArgs>(args?: SelectSubset<T, profession_categoryFindFirstArgs<ExtArgs>>): Prisma__profession_categoryClient<$Result.GetResult<Prisma.$profession_categoryPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Profession_category that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {profession_categoryFindFirstOrThrowArgs} args - Arguments to find a Profession_category
     * @example
     * // Get one Profession_category
     * const profession_category = await prisma.profession_category.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends profession_categoryFindFirstOrThrowArgs>(args?: SelectSubset<T, profession_categoryFindFirstOrThrowArgs<ExtArgs>>): Prisma__profession_categoryClient<$Result.GetResult<Prisma.$profession_categoryPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Profession_categories that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {profession_categoryFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Profession_categories
     * const profession_categories = await prisma.profession_category.findMany()
     * 
     * // Get first 10 Profession_categories
     * const profession_categories = await prisma.profession_category.findMany({ take: 10 })
     * 
     * // Only select the `id_prof_cat`
     * const profession_categoryWithId_prof_catOnly = await prisma.profession_category.findMany({ select: { id_prof_cat: true } })
     * 
     */
    findMany<T extends profession_categoryFindManyArgs>(args?: SelectSubset<T, profession_categoryFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$profession_categoryPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Profession_category.
     * @param {profession_categoryCreateArgs} args - Arguments to create a Profession_category.
     * @example
     * // Create one Profession_category
     * const Profession_category = await prisma.profession_category.create({
     *   data: {
     *     // ... data to create a Profession_category
     *   }
     * })
     * 
     */
    create<T extends profession_categoryCreateArgs>(args: SelectSubset<T, profession_categoryCreateArgs<ExtArgs>>): Prisma__profession_categoryClient<$Result.GetResult<Prisma.$profession_categoryPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Profession_categories.
     * @param {profession_categoryCreateManyArgs} args - Arguments to create many Profession_categories.
     * @example
     * // Create many Profession_categories
     * const profession_category = await prisma.profession_category.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends profession_categoryCreateManyArgs>(args?: SelectSubset<T, profession_categoryCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Profession_categories and returns the data saved in the database.
     * @param {profession_categoryCreateManyAndReturnArgs} args - Arguments to create many Profession_categories.
     * @example
     * // Create many Profession_categories
     * const profession_category = await prisma.profession_category.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Profession_categories and only return the `id_prof_cat`
     * const profession_categoryWithId_prof_catOnly = await prisma.profession_category.createManyAndReturn({
     *   select: { id_prof_cat: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends profession_categoryCreateManyAndReturnArgs>(args?: SelectSubset<T, profession_categoryCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$profession_categoryPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Profession_category.
     * @param {profession_categoryDeleteArgs} args - Arguments to delete one Profession_category.
     * @example
     * // Delete one Profession_category
     * const Profession_category = await prisma.profession_category.delete({
     *   where: {
     *     // ... filter to delete one Profession_category
     *   }
     * })
     * 
     */
    delete<T extends profession_categoryDeleteArgs>(args: SelectSubset<T, profession_categoryDeleteArgs<ExtArgs>>): Prisma__profession_categoryClient<$Result.GetResult<Prisma.$profession_categoryPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Profession_category.
     * @param {profession_categoryUpdateArgs} args - Arguments to update one Profession_category.
     * @example
     * // Update one Profession_category
     * const profession_category = await prisma.profession_category.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends profession_categoryUpdateArgs>(args: SelectSubset<T, profession_categoryUpdateArgs<ExtArgs>>): Prisma__profession_categoryClient<$Result.GetResult<Prisma.$profession_categoryPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Profession_categories.
     * @param {profession_categoryDeleteManyArgs} args - Arguments to filter Profession_categories to delete.
     * @example
     * // Delete a few Profession_categories
     * const { count } = await prisma.profession_category.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends profession_categoryDeleteManyArgs>(args?: SelectSubset<T, profession_categoryDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Profession_categories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {profession_categoryUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Profession_categories
     * const profession_category = await prisma.profession_category.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends profession_categoryUpdateManyArgs>(args: SelectSubset<T, profession_categoryUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Profession_categories and returns the data updated in the database.
     * @param {profession_categoryUpdateManyAndReturnArgs} args - Arguments to update many Profession_categories.
     * @example
     * // Update many Profession_categories
     * const profession_category = await prisma.profession_category.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Profession_categories and only return the `id_prof_cat`
     * const profession_categoryWithId_prof_catOnly = await prisma.profession_category.updateManyAndReturn({
     *   select: { id_prof_cat: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends profession_categoryUpdateManyAndReturnArgs>(args: SelectSubset<T, profession_categoryUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$profession_categoryPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Profession_category.
     * @param {profession_categoryUpsertArgs} args - Arguments to update or create a Profession_category.
     * @example
     * // Update or create a Profession_category
     * const profession_category = await prisma.profession_category.upsert({
     *   create: {
     *     // ... data to create a Profession_category
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Profession_category we want to update
     *   }
     * })
     */
    upsert<T extends profession_categoryUpsertArgs>(args: SelectSubset<T, profession_categoryUpsertArgs<ExtArgs>>): Prisma__profession_categoryClient<$Result.GetResult<Prisma.$profession_categoryPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Profession_categories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {profession_categoryCountArgs} args - Arguments to filter Profession_categories to count.
     * @example
     * // Count the number of Profession_categories
     * const count = await prisma.profession_category.count({
     *   where: {
     *     // ... the filter for the Profession_categories we want to count
     *   }
     * })
    **/
    count<T extends profession_categoryCountArgs>(
      args?: Subset<T, profession_categoryCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Profession_categoryCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Profession_category.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Profession_categoryAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends Profession_categoryAggregateArgs>(args: Subset<T, Profession_categoryAggregateArgs>): Prisma.PrismaPromise<GetProfession_categoryAggregateType<T>>

    /**
     * Group by Profession_category.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {profession_categoryGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends profession_categoryGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: profession_categoryGroupByArgs['orderBy'] }
        : { orderBy?: profession_categoryGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, profession_categoryGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetProfession_categoryGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the profession_category model
   */
  readonly fields: profession_categoryFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for profession_category.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__profession_categoryClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    profession<T extends profession_category$professionArgs<ExtArgs> = {}>(args?: Subset<T, profession_category$professionArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$professionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the profession_category model
   */
  interface profession_categoryFieldRefs {
    readonly id_prof_cat: FieldRef<"profession_category", 'BigInt'>
    readonly profession_category: FieldRef<"profession_category", 'String'>
    readonly created_at: FieldRef<"profession_category", 'DateTime'>
    readonly updated_at: FieldRef<"profession_category", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * profession_category findUnique
   */
  export type profession_categoryFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the profession_category
     */
    select?: profession_categorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the profession_category
     */
    omit?: profession_categoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: profession_categoryInclude<ExtArgs> | null
    /**
     * Filter, which profession_category to fetch.
     */
    where: profession_categoryWhereUniqueInput
  }

  /**
   * profession_category findUniqueOrThrow
   */
  export type profession_categoryFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the profession_category
     */
    select?: profession_categorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the profession_category
     */
    omit?: profession_categoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: profession_categoryInclude<ExtArgs> | null
    /**
     * Filter, which profession_category to fetch.
     */
    where: profession_categoryWhereUniqueInput
  }

  /**
   * profession_category findFirst
   */
  export type profession_categoryFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the profession_category
     */
    select?: profession_categorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the profession_category
     */
    omit?: profession_categoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: profession_categoryInclude<ExtArgs> | null
    /**
     * Filter, which profession_category to fetch.
     */
    where?: profession_categoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of profession_categories to fetch.
     */
    orderBy?: profession_categoryOrderByWithRelationInput | profession_categoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for profession_categories.
     */
    cursor?: profession_categoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` profession_categories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` profession_categories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of profession_categories.
     */
    distinct?: Profession_categoryScalarFieldEnum | Profession_categoryScalarFieldEnum[]
  }

  /**
   * profession_category findFirstOrThrow
   */
  export type profession_categoryFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the profession_category
     */
    select?: profession_categorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the profession_category
     */
    omit?: profession_categoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: profession_categoryInclude<ExtArgs> | null
    /**
     * Filter, which profession_category to fetch.
     */
    where?: profession_categoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of profession_categories to fetch.
     */
    orderBy?: profession_categoryOrderByWithRelationInput | profession_categoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for profession_categories.
     */
    cursor?: profession_categoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` profession_categories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` profession_categories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of profession_categories.
     */
    distinct?: Profession_categoryScalarFieldEnum | Profession_categoryScalarFieldEnum[]
  }

  /**
   * profession_category findMany
   */
  export type profession_categoryFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the profession_category
     */
    select?: profession_categorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the profession_category
     */
    omit?: profession_categoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: profession_categoryInclude<ExtArgs> | null
    /**
     * Filter, which profession_categories to fetch.
     */
    where?: profession_categoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of profession_categories to fetch.
     */
    orderBy?: profession_categoryOrderByWithRelationInput | profession_categoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing profession_categories.
     */
    cursor?: profession_categoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` profession_categories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` profession_categories.
     */
    skip?: number
    distinct?: Profession_categoryScalarFieldEnum | Profession_categoryScalarFieldEnum[]
  }

  /**
   * profession_category create
   */
  export type profession_categoryCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the profession_category
     */
    select?: profession_categorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the profession_category
     */
    omit?: profession_categoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: profession_categoryInclude<ExtArgs> | null
    /**
     * The data needed to create a profession_category.
     */
    data?: XOR<profession_categoryCreateInput, profession_categoryUncheckedCreateInput>
  }

  /**
   * profession_category createMany
   */
  export type profession_categoryCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many profession_categories.
     */
    data: profession_categoryCreateManyInput | profession_categoryCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * profession_category createManyAndReturn
   */
  export type profession_categoryCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the profession_category
     */
    select?: profession_categorySelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the profession_category
     */
    omit?: profession_categoryOmit<ExtArgs> | null
    /**
     * The data used to create many profession_categories.
     */
    data: profession_categoryCreateManyInput | profession_categoryCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * profession_category update
   */
  export type profession_categoryUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the profession_category
     */
    select?: profession_categorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the profession_category
     */
    omit?: profession_categoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: profession_categoryInclude<ExtArgs> | null
    /**
     * The data needed to update a profession_category.
     */
    data: XOR<profession_categoryUpdateInput, profession_categoryUncheckedUpdateInput>
    /**
     * Choose, which profession_category to update.
     */
    where: profession_categoryWhereUniqueInput
  }

  /**
   * profession_category updateMany
   */
  export type profession_categoryUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update profession_categories.
     */
    data: XOR<profession_categoryUpdateManyMutationInput, profession_categoryUncheckedUpdateManyInput>
    /**
     * Filter which profession_categories to update
     */
    where?: profession_categoryWhereInput
    /**
     * Limit how many profession_categories to update.
     */
    limit?: number
  }

  /**
   * profession_category updateManyAndReturn
   */
  export type profession_categoryUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the profession_category
     */
    select?: profession_categorySelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the profession_category
     */
    omit?: profession_categoryOmit<ExtArgs> | null
    /**
     * The data used to update profession_categories.
     */
    data: XOR<profession_categoryUpdateManyMutationInput, profession_categoryUncheckedUpdateManyInput>
    /**
     * Filter which profession_categories to update
     */
    where?: profession_categoryWhereInput
    /**
     * Limit how many profession_categories to update.
     */
    limit?: number
  }

  /**
   * profession_category upsert
   */
  export type profession_categoryUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the profession_category
     */
    select?: profession_categorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the profession_category
     */
    omit?: profession_categoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: profession_categoryInclude<ExtArgs> | null
    /**
     * The filter to search for the profession_category to update in case it exists.
     */
    where: profession_categoryWhereUniqueInput
    /**
     * In case the profession_category found by the `where` argument doesn't exist, create a new profession_category with this data.
     */
    create: XOR<profession_categoryCreateInput, profession_categoryUncheckedCreateInput>
    /**
     * In case the profession_category was found with the provided `where` argument, update it with this data.
     */
    update: XOR<profession_categoryUpdateInput, profession_categoryUncheckedUpdateInput>
  }

  /**
   * profession_category delete
   */
  export type profession_categoryDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the profession_category
     */
    select?: profession_categorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the profession_category
     */
    omit?: profession_categoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: profession_categoryInclude<ExtArgs> | null
    /**
     * Filter which profession_category to delete.
     */
    where: profession_categoryWhereUniqueInput
  }

  /**
   * profession_category deleteMany
   */
  export type profession_categoryDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which profession_categories to delete
     */
    where?: profession_categoryWhereInput
    /**
     * Limit how many profession_categories to delete.
     */
    limit?: number
  }

  /**
   * profession_category.profession
   */
  export type profession_category$professionArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the profession
     */
    select?: professionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the profession
     */
    omit?: professionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: professionInclude<ExtArgs> | null
    where?: professionWhereInput
    orderBy?: professionOrderByWithRelationInput | professionOrderByWithRelationInput[]
    cursor?: professionWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ProfessionScalarFieldEnum | ProfessionScalarFieldEnum[]
  }

  /**
   * profession_category without action
   */
  export type profession_categoryDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the profession_category
     */
    select?: profession_categorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the profession_category
     */
    omit?: profession_categoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: profession_categoryInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const AddressesScalarFieldEnum: {
    id_alamat: 'id_alamat',
    alamat: 'alamat',
    latitude: 'latitude',
    longitude: 'longitude',
    id_kota: 'id_kota',
    id_prov: 'id_prov',
    created_at: 'created_at',
    updated_at: 'updated_at'
  };

  export type AddressesScalarFieldEnum = (typeof AddressesScalarFieldEnum)[keyof typeof AddressesScalarFieldEnum]


  export const CitiesScalarFieldEnum: {
    id_kota: 'id_kota',
    nama_kota: 'nama_kota',
    id_prov: 'id_prov',
    created_at: 'created_at',
    updated_at: 'updated_at'
  };

  export type CitiesScalarFieldEnum = (typeof CitiesScalarFieldEnum)[keyof typeof CitiesScalarFieldEnum]


  export const ProfessionScalarFieldEnum: {
    id_profesi: 'id_profesi',
    profession: 'profession',
    created_at: 'created_at',
    updated_at: 'updated_at',
    id_prof_cat: 'id_prof_cat'
  };

  export type ProfessionScalarFieldEnum = (typeof ProfessionScalarFieldEnum)[keyof typeof ProfessionScalarFieldEnum]


  export const Profession_userScalarFieldEnum: {
    id_user: 'id_user',
    id_profesi: 'id_profesi'
  };

  export type Profession_userScalarFieldEnum = (typeof Profession_userScalarFieldEnum)[keyof typeof Profession_userScalarFieldEnum]


  export const ProvincesScalarFieldEnum: {
    id_prov: 'id_prov',
    nama_prov: 'nama_prov',
    created_at: 'created_at',
    updated_at: 'updated_at'
  };

  export type ProvincesScalarFieldEnum = (typeof ProvincesScalarFieldEnum)[keyof typeof ProvincesScalarFieldEnum]


  export const User_addressScalarFieldEnum: {
    id_user: 'id_user',
    id_alamat: 'id_alamat'
  };

  export type User_addressScalarFieldEnum = (typeof User_addressScalarFieldEnum)[keyof typeof User_addressScalarFieldEnum]


  export const UsersScalarFieldEnum: {
    id_user: 'id_user',
    username: 'username',
    nama: 'nama',
    email: 'email',
    sandi: 'sandi',
    gender: 'gender',
    birth_date: 'birth_date',
    foto: 'foto',
    bio: 'bio',
    status_user: 'status_user',
    created_at: 'created_at',
    updated_at: 'updated_at'
  };

  export type UsersScalarFieldEnum = (typeof UsersScalarFieldEnum)[keyof typeof UsersScalarFieldEnum]


  export const Profession_categoryScalarFieldEnum: {
    id_prof_cat: 'id_prof_cat',
    profession_category: 'profession_category',
    created_at: 'created_at',
    updated_at: 'updated_at'
  };

  export type Profession_categoryScalarFieldEnum = (typeof Profession_categoryScalarFieldEnum)[keyof typeof Profession_categoryScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'Decimal'
   */
  export type DecimalFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Decimal'>
    


  /**
   * Reference to a field of type 'Decimal[]'
   */
  export type ListDecimalFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Decimal[]'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'BigInt'
   */
  export type BigIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'BigInt'>
    


  /**
   * Reference to a field of type 'BigInt[]'
   */
  export type ListBigIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'BigInt[]'>
    


  /**
   * Reference to a field of type 'gender_enum'
   */
  export type Enumgender_enumFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'gender_enum'>
    


  /**
   * Reference to a field of type 'gender_enum[]'
   */
  export type ListEnumgender_enumFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'gender_enum[]'>
    


  /**
   * Reference to a field of type 'Bytes'
   */
  export type BytesFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Bytes'>
    


  /**
   * Reference to a field of type 'Bytes[]'
   */
  export type ListBytesFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Bytes[]'>
    


  /**
   * Reference to a field of type 'status_user_enum'
   */
  export type Enumstatus_user_enumFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'status_user_enum'>
    


  /**
   * Reference to a field of type 'status_user_enum[]'
   */
  export type ListEnumstatus_user_enumFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'status_user_enum[]'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    
  /**
   * Deep Input Types
   */


  export type addressesWhereInput = {
    AND?: addressesWhereInput | addressesWhereInput[]
    OR?: addressesWhereInput[]
    NOT?: addressesWhereInput | addressesWhereInput[]
    id_alamat?: StringFilter<"addresses"> | string
    alamat?: StringFilter<"addresses"> | string
    latitude?: DecimalFilter<"addresses"> | Decimal | DecimalJsLike | number | string
    longitude?: DecimalFilter<"addresses"> | Decimal | DecimalJsLike | number | string
    id_kota?: IntNullableFilter<"addresses"> | number | null
    id_prov?: IntNullableFilter<"addresses"> | number | null
    created_at?: DateTimeNullableFilter<"addresses"> | Date | string | null
    updated_at?: DateTimeNullableFilter<"addresses"> | Date | string | null
    cities?: XOR<CitiesNullableScalarRelationFilter, citiesWhereInput> | null
    provinces?: XOR<ProvincesNullableScalarRelationFilter, provincesWhereInput> | null
    user_address?: User_addressListRelationFilter
  }

  export type addressesOrderByWithRelationInput = {
    id_alamat?: SortOrder
    alamat?: SortOrder
    latitude?: SortOrder
    longitude?: SortOrder
    id_kota?: SortOrderInput | SortOrder
    id_prov?: SortOrderInput | SortOrder
    created_at?: SortOrderInput | SortOrder
    updated_at?: SortOrderInput | SortOrder
    cities?: citiesOrderByWithRelationInput
    provinces?: provincesOrderByWithRelationInput
    user_address?: user_addressOrderByRelationAggregateInput
  }

  export type addressesWhereUniqueInput = Prisma.AtLeast<{
    id_alamat?: string
    AND?: addressesWhereInput | addressesWhereInput[]
    OR?: addressesWhereInput[]
    NOT?: addressesWhereInput | addressesWhereInput[]
    alamat?: StringFilter<"addresses"> | string
    latitude?: DecimalFilter<"addresses"> | Decimal | DecimalJsLike | number | string
    longitude?: DecimalFilter<"addresses"> | Decimal | DecimalJsLike | number | string
    id_kota?: IntNullableFilter<"addresses"> | number | null
    id_prov?: IntNullableFilter<"addresses"> | number | null
    created_at?: DateTimeNullableFilter<"addresses"> | Date | string | null
    updated_at?: DateTimeNullableFilter<"addresses"> | Date | string | null
    cities?: XOR<CitiesNullableScalarRelationFilter, citiesWhereInput> | null
    provinces?: XOR<ProvincesNullableScalarRelationFilter, provincesWhereInput> | null
    user_address?: User_addressListRelationFilter
  }, "id_alamat">

  export type addressesOrderByWithAggregationInput = {
    id_alamat?: SortOrder
    alamat?: SortOrder
    latitude?: SortOrder
    longitude?: SortOrder
    id_kota?: SortOrderInput | SortOrder
    id_prov?: SortOrderInput | SortOrder
    created_at?: SortOrderInput | SortOrder
    updated_at?: SortOrderInput | SortOrder
    _count?: addressesCountOrderByAggregateInput
    _avg?: addressesAvgOrderByAggregateInput
    _max?: addressesMaxOrderByAggregateInput
    _min?: addressesMinOrderByAggregateInput
    _sum?: addressesSumOrderByAggregateInput
  }

  export type addressesScalarWhereWithAggregatesInput = {
    AND?: addressesScalarWhereWithAggregatesInput | addressesScalarWhereWithAggregatesInput[]
    OR?: addressesScalarWhereWithAggregatesInput[]
    NOT?: addressesScalarWhereWithAggregatesInput | addressesScalarWhereWithAggregatesInput[]
    id_alamat?: StringWithAggregatesFilter<"addresses"> | string
    alamat?: StringWithAggregatesFilter<"addresses"> | string
    latitude?: DecimalWithAggregatesFilter<"addresses"> | Decimal | DecimalJsLike | number | string
    longitude?: DecimalWithAggregatesFilter<"addresses"> | Decimal | DecimalJsLike | number | string
    id_kota?: IntNullableWithAggregatesFilter<"addresses"> | number | null
    id_prov?: IntNullableWithAggregatesFilter<"addresses"> | number | null
    created_at?: DateTimeNullableWithAggregatesFilter<"addresses"> | Date | string | null
    updated_at?: DateTimeNullableWithAggregatesFilter<"addresses"> | Date | string | null
  }

  export type citiesWhereInput = {
    AND?: citiesWhereInput | citiesWhereInput[]
    OR?: citiesWhereInput[]
    NOT?: citiesWhereInput | citiesWhereInput[]
    id_kota?: IntFilter<"cities"> | number
    nama_kota?: StringFilter<"cities"> | string
    id_prov?: IntFilter<"cities"> | number
    created_at?: DateTimeNullableFilter<"cities"> | Date | string | null
    updated_at?: DateTimeNullableFilter<"cities"> | Date | string | null
    addresses?: AddressesListRelationFilter
    provinces?: XOR<ProvincesScalarRelationFilter, provincesWhereInput>
  }

  export type citiesOrderByWithRelationInput = {
    id_kota?: SortOrder
    nama_kota?: SortOrder
    id_prov?: SortOrder
    created_at?: SortOrderInput | SortOrder
    updated_at?: SortOrderInput | SortOrder
    addresses?: addressesOrderByRelationAggregateInput
    provinces?: provincesOrderByWithRelationInput
  }

  export type citiesWhereUniqueInput = Prisma.AtLeast<{
    id_kota?: number
    AND?: citiesWhereInput | citiesWhereInput[]
    OR?: citiesWhereInput[]
    NOT?: citiesWhereInput | citiesWhereInput[]
    nama_kota?: StringFilter<"cities"> | string
    id_prov?: IntFilter<"cities"> | number
    created_at?: DateTimeNullableFilter<"cities"> | Date | string | null
    updated_at?: DateTimeNullableFilter<"cities"> | Date | string | null
    addresses?: AddressesListRelationFilter
    provinces?: XOR<ProvincesScalarRelationFilter, provincesWhereInput>
  }, "id_kota">

  export type citiesOrderByWithAggregationInput = {
    id_kota?: SortOrder
    nama_kota?: SortOrder
    id_prov?: SortOrder
    created_at?: SortOrderInput | SortOrder
    updated_at?: SortOrderInput | SortOrder
    _count?: citiesCountOrderByAggregateInput
    _avg?: citiesAvgOrderByAggregateInput
    _max?: citiesMaxOrderByAggregateInput
    _min?: citiesMinOrderByAggregateInput
    _sum?: citiesSumOrderByAggregateInput
  }

  export type citiesScalarWhereWithAggregatesInput = {
    AND?: citiesScalarWhereWithAggregatesInput | citiesScalarWhereWithAggregatesInput[]
    OR?: citiesScalarWhereWithAggregatesInput[]
    NOT?: citiesScalarWhereWithAggregatesInput | citiesScalarWhereWithAggregatesInput[]
    id_kota?: IntWithAggregatesFilter<"cities"> | number
    nama_kota?: StringWithAggregatesFilter<"cities"> | string
    id_prov?: IntWithAggregatesFilter<"cities"> | number
    created_at?: DateTimeNullableWithAggregatesFilter<"cities"> | Date | string | null
    updated_at?: DateTimeNullableWithAggregatesFilter<"cities"> | Date | string | null
  }

  export type professionWhereInput = {
    AND?: professionWhereInput | professionWhereInput[]
    OR?: professionWhereInput[]
    NOT?: professionWhereInput | professionWhereInput[]
    id_profesi?: BigIntFilter<"profession"> | bigint | number
    profession?: StringFilter<"profession"> | string
    created_at?: DateTimeNullableFilter<"profession"> | Date | string | null
    updated_at?: DateTimeNullableFilter<"profession"> | Date | string | null
    id_prof_cat?: BigIntNullableFilter<"profession"> | bigint | number | null
    profession_category?: XOR<Profession_categoryNullableScalarRelationFilter, profession_categoryWhereInput> | null
    profession_user?: Profession_userListRelationFilter
  }

  export type professionOrderByWithRelationInput = {
    id_profesi?: SortOrder
    profession?: SortOrder
    created_at?: SortOrderInput | SortOrder
    updated_at?: SortOrderInput | SortOrder
    id_prof_cat?: SortOrderInput | SortOrder
    profession_category?: profession_categoryOrderByWithRelationInput
    profession_user?: profession_userOrderByRelationAggregateInput
  }

  export type professionWhereUniqueInput = Prisma.AtLeast<{
    id_profesi?: bigint | number
    AND?: professionWhereInput | professionWhereInput[]
    OR?: professionWhereInput[]
    NOT?: professionWhereInput | professionWhereInput[]
    profession?: StringFilter<"profession"> | string
    created_at?: DateTimeNullableFilter<"profession"> | Date | string | null
    updated_at?: DateTimeNullableFilter<"profession"> | Date | string | null
    id_prof_cat?: BigIntNullableFilter<"profession"> | bigint | number | null
    profession_category?: XOR<Profession_categoryNullableScalarRelationFilter, profession_categoryWhereInput> | null
    profession_user?: Profession_userListRelationFilter
  }, "id_profesi">

  export type professionOrderByWithAggregationInput = {
    id_profesi?: SortOrder
    profession?: SortOrder
    created_at?: SortOrderInput | SortOrder
    updated_at?: SortOrderInput | SortOrder
    id_prof_cat?: SortOrderInput | SortOrder
    _count?: professionCountOrderByAggregateInput
    _avg?: professionAvgOrderByAggregateInput
    _max?: professionMaxOrderByAggregateInput
    _min?: professionMinOrderByAggregateInput
    _sum?: professionSumOrderByAggregateInput
  }

  export type professionScalarWhereWithAggregatesInput = {
    AND?: professionScalarWhereWithAggregatesInput | professionScalarWhereWithAggregatesInput[]
    OR?: professionScalarWhereWithAggregatesInput[]
    NOT?: professionScalarWhereWithAggregatesInput | professionScalarWhereWithAggregatesInput[]
    id_profesi?: BigIntWithAggregatesFilter<"profession"> | bigint | number
    profession?: StringWithAggregatesFilter<"profession"> | string
    created_at?: DateTimeNullableWithAggregatesFilter<"profession"> | Date | string | null
    updated_at?: DateTimeNullableWithAggregatesFilter<"profession"> | Date | string | null
    id_prof_cat?: BigIntNullableWithAggregatesFilter<"profession"> | bigint | number | null
  }

  export type profession_userWhereInput = {
    AND?: profession_userWhereInput | profession_userWhereInput[]
    OR?: profession_userWhereInput[]
    NOT?: profession_userWhereInput | profession_userWhereInput[]
    id_user?: StringFilter<"profession_user"> | string
    id_profesi?: BigIntFilter<"profession_user"> | bigint | number
    profession?: XOR<ProfessionScalarRelationFilter, professionWhereInput>
    users?: XOR<UsersScalarRelationFilter, usersWhereInput>
  }

  export type profession_userOrderByWithRelationInput = {
    id_user?: SortOrder
    id_profesi?: SortOrder
    profession?: professionOrderByWithRelationInput
    users?: usersOrderByWithRelationInput
  }

  export type profession_userWhereUniqueInput = Prisma.AtLeast<{
    id_user_id_profesi?: profession_userId_userId_profesiCompoundUniqueInput
    AND?: profession_userWhereInput | profession_userWhereInput[]
    OR?: profession_userWhereInput[]
    NOT?: profession_userWhereInput | profession_userWhereInput[]
    id_user?: StringFilter<"profession_user"> | string
    id_profesi?: BigIntFilter<"profession_user"> | bigint | number
    profession?: XOR<ProfessionScalarRelationFilter, professionWhereInput>
    users?: XOR<UsersScalarRelationFilter, usersWhereInput>
  }, "id_user_id_profesi">

  export type profession_userOrderByWithAggregationInput = {
    id_user?: SortOrder
    id_profesi?: SortOrder
    _count?: profession_userCountOrderByAggregateInput
    _avg?: profession_userAvgOrderByAggregateInput
    _max?: profession_userMaxOrderByAggregateInput
    _min?: profession_userMinOrderByAggregateInput
    _sum?: profession_userSumOrderByAggregateInput
  }

  export type profession_userScalarWhereWithAggregatesInput = {
    AND?: profession_userScalarWhereWithAggregatesInput | profession_userScalarWhereWithAggregatesInput[]
    OR?: profession_userScalarWhereWithAggregatesInput[]
    NOT?: profession_userScalarWhereWithAggregatesInput | profession_userScalarWhereWithAggregatesInput[]
    id_user?: StringWithAggregatesFilter<"profession_user"> | string
    id_profesi?: BigIntWithAggregatesFilter<"profession_user"> | bigint | number
  }

  export type provincesWhereInput = {
    AND?: provincesWhereInput | provincesWhereInput[]
    OR?: provincesWhereInput[]
    NOT?: provincesWhereInput | provincesWhereInput[]
    id_prov?: IntFilter<"provinces"> | number
    nama_prov?: StringFilter<"provinces"> | string
    created_at?: DateTimeNullableFilter<"provinces"> | Date | string | null
    updated_at?: DateTimeNullableFilter<"provinces"> | Date | string | null
    addresses?: AddressesListRelationFilter
    cities?: CitiesListRelationFilter
  }

  export type provincesOrderByWithRelationInput = {
    id_prov?: SortOrder
    nama_prov?: SortOrder
    created_at?: SortOrderInput | SortOrder
    updated_at?: SortOrderInput | SortOrder
    addresses?: addressesOrderByRelationAggregateInput
    cities?: citiesOrderByRelationAggregateInput
  }

  export type provincesWhereUniqueInput = Prisma.AtLeast<{
    id_prov?: number
    AND?: provincesWhereInput | provincesWhereInput[]
    OR?: provincesWhereInput[]
    NOT?: provincesWhereInput | provincesWhereInput[]
    nama_prov?: StringFilter<"provinces"> | string
    created_at?: DateTimeNullableFilter<"provinces"> | Date | string | null
    updated_at?: DateTimeNullableFilter<"provinces"> | Date | string | null
    addresses?: AddressesListRelationFilter
    cities?: CitiesListRelationFilter
  }, "id_prov">

  export type provincesOrderByWithAggregationInput = {
    id_prov?: SortOrder
    nama_prov?: SortOrder
    created_at?: SortOrderInput | SortOrder
    updated_at?: SortOrderInput | SortOrder
    _count?: provincesCountOrderByAggregateInput
    _avg?: provincesAvgOrderByAggregateInput
    _max?: provincesMaxOrderByAggregateInput
    _min?: provincesMinOrderByAggregateInput
    _sum?: provincesSumOrderByAggregateInput
  }

  export type provincesScalarWhereWithAggregatesInput = {
    AND?: provincesScalarWhereWithAggregatesInput | provincesScalarWhereWithAggregatesInput[]
    OR?: provincesScalarWhereWithAggregatesInput[]
    NOT?: provincesScalarWhereWithAggregatesInput | provincesScalarWhereWithAggregatesInput[]
    id_prov?: IntWithAggregatesFilter<"provinces"> | number
    nama_prov?: StringWithAggregatesFilter<"provinces"> | string
    created_at?: DateTimeNullableWithAggregatesFilter<"provinces"> | Date | string | null
    updated_at?: DateTimeNullableWithAggregatesFilter<"provinces"> | Date | string | null
  }

  export type user_addressWhereInput = {
    AND?: user_addressWhereInput | user_addressWhereInput[]
    OR?: user_addressWhereInput[]
    NOT?: user_addressWhereInput | user_addressWhereInput[]
    id_user?: StringFilter<"user_address"> | string
    id_alamat?: StringFilter<"user_address"> | string
    addresses?: XOR<AddressesScalarRelationFilter, addressesWhereInput>
    users?: XOR<UsersScalarRelationFilter, usersWhereInput>
  }

  export type user_addressOrderByWithRelationInput = {
    id_user?: SortOrder
    id_alamat?: SortOrder
    addresses?: addressesOrderByWithRelationInput
    users?: usersOrderByWithRelationInput
  }

  export type user_addressWhereUniqueInput = Prisma.AtLeast<{
    id_user_id_alamat?: user_addressId_userId_alamatCompoundUniqueInput
    AND?: user_addressWhereInput | user_addressWhereInput[]
    OR?: user_addressWhereInput[]
    NOT?: user_addressWhereInput | user_addressWhereInput[]
    id_user?: StringFilter<"user_address"> | string
    id_alamat?: StringFilter<"user_address"> | string
    addresses?: XOR<AddressesScalarRelationFilter, addressesWhereInput>
    users?: XOR<UsersScalarRelationFilter, usersWhereInput>
  }, "id_user_id_alamat">

  export type user_addressOrderByWithAggregationInput = {
    id_user?: SortOrder
    id_alamat?: SortOrder
    _count?: user_addressCountOrderByAggregateInput
    _max?: user_addressMaxOrderByAggregateInput
    _min?: user_addressMinOrderByAggregateInput
  }

  export type user_addressScalarWhereWithAggregatesInput = {
    AND?: user_addressScalarWhereWithAggregatesInput | user_addressScalarWhereWithAggregatesInput[]
    OR?: user_addressScalarWhereWithAggregatesInput[]
    NOT?: user_addressScalarWhereWithAggregatesInput | user_addressScalarWhereWithAggregatesInput[]
    id_user?: StringWithAggregatesFilter<"user_address"> | string
    id_alamat?: StringWithAggregatesFilter<"user_address"> | string
  }

  export type usersWhereInput = {
    AND?: usersWhereInput | usersWhereInput[]
    OR?: usersWhereInput[]
    NOT?: usersWhereInput | usersWhereInput[]
    id_user?: StringFilter<"users"> | string
    username?: StringNullableFilter<"users"> | string | null
    nama?: StringNullableFilter<"users"> | string | null
    email?: StringFilter<"users"> | string
    sandi?: StringFilter<"users"> | string
    gender?: Enumgender_enumNullableFilter<"users"> | $Enums.gender_enum | null
    birth_date?: DateTimeNullableFilter<"users"> | Date | string | null
    foto?: BytesNullableFilter<"users"> | Uint8Array | null
    bio?: StringNullableFilter<"users"> | string | null
    status_user?: Enumstatus_user_enumNullableFilter<"users"> | $Enums.status_user_enum | null
    created_at?: DateTimeNullableFilter<"users"> | Date | string | null
    updated_at?: DateTimeNullableFilter<"users"> | Date | string | null
    profession_user?: Profession_userListRelationFilter
    user_address?: User_addressListRelationFilter
  }

  export type usersOrderByWithRelationInput = {
    id_user?: SortOrder
    username?: SortOrderInput | SortOrder
    nama?: SortOrderInput | SortOrder
    email?: SortOrder
    sandi?: SortOrder
    gender?: SortOrderInput | SortOrder
    birth_date?: SortOrderInput | SortOrder
    foto?: SortOrderInput | SortOrder
    bio?: SortOrderInput | SortOrder
    status_user?: SortOrderInput | SortOrder
    created_at?: SortOrderInput | SortOrder
    updated_at?: SortOrderInput | SortOrder
    profession_user?: profession_userOrderByRelationAggregateInput
    user_address?: user_addressOrderByRelationAggregateInput
  }

  export type usersWhereUniqueInput = Prisma.AtLeast<{
    id_user?: string
    username?: string
    email?: string
    AND?: usersWhereInput | usersWhereInput[]
    OR?: usersWhereInput[]
    NOT?: usersWhereInput | usersWhereInput[]
    nama?: StringNullableFilter<"users"> | string | null
    sandi?: StringFilter<"users"> | string
    gender?: Enumgender_enumNullableFilter<"users"> | $Enums.gender_enum | null
    birth_date?: DateTimeNullableFilter<"users"> | Date | string | null
    foto?: BytesNullableFilter<"users"> | Uint8Array | null
    bio?: StringNullableFilter<"users"> | string | null
    status_user?: Enumstatus_user_enumNullableFilter<"users"> | $Enums.status_user_enum | null
    created_at?: DateTimeNullableFilter<"users"> | Date | string | null
    updated_at?: DateTimeNullableFilter<"users"> | Date | string | null
    profession_user?: Profession_userListRelationFilter
    user_address?: User_addressListRelationFilter
  }, "id_user" | "username" | "email">

  export type usersOrderByWithAggregationInput = {
    id_user?: SortOrder
    username?: SortOrderInput | SortOrder
    nama?: SortOrderInput | SortOrder
    email?: SortOrder
    sandi?: SortOrder
    gender?: SortOrderInput | SortOrder
    birth_date?: SortOrderInput | SortOrder
    foto?: SortOrderInput | SortOrder
    bio?: SortOrderInput | SortOrder
    status_user?: SortOrderInput | SortOrder
    created_at?: SortOrderInput | SortOrder
    updated_at?: SortOrderInput | SortOrder
    _count?: usersCountOrderByAggregateInput
    _max?: usersMaxOrderByAggregateInput
    _min?: usersMinOrderByAggregateInput
  }

  export type usersScalarWhereWithAggregatesInput = {
    AND?: usersScalarWhereWithAggregatesInput | usersScalarWhereWithAggregatesInput[]
    OR?: usersScalarWhereWithAggregatesInput[]
    NOT?: usersScalarWhereWithAggregatesInput | usersScalarWhereWithAggregatesInput[]
    id_user?: StringWithAggregatesFilter<"users"> | string
    username?: StringNullableWithAggregatesFilter<"users"> | string | null
    nama?: StringNullableWithAggregatesFilter<"users"> | string | null
    email?: StringWithAggregatesFilter<"users"> | string
    sandi?: StringWithAggregatesFilter<"users"> | string
    gender?: Enumgender_enumNullableWithAggregatesFilter<"users"> | $Enums.gender_enum | null
    birth_date?: DateTimeNullableWithAggregatesFilter<"users"> | Date | string | null
    foto?: BytesNullableWithAggregatesFilter<"users"> | Uint8Array | null
    bio?: StringNullableWithAggregatesFilter<"users"> | string | null
    status_user?: Enumstatus_user_enumNullableWithAggregatesFilter<"users"> | $Enums.status_user_enum | null
    created_at?: DateTimeNullableWithAggregatesFilter<"users"> | Date | string | null
    updated_at?: DateTimeNullableWithAggregatesFilter<"users"> | Date | string | null
  }

  export type profession_categoryWhereInput = {
    AND?: profession_categoryWhereInput | profession_categoryWhereInput[]
    OR?: profession_categoryWhereInput[]
    NOT?: profession_categoryWhereInput | profession_categoryWhereInput[]
    id_prof_cat?: BigIntFilter<"profession_category"> | bigint | number
    profession_category?: StringNullableFilter<"profession_category"> | string | null
    created_at?: DateTimeNullableFilter<"profession_category"> | Date | string | null
    updated_at?: DateTimeNullableFilter<"profession_category"> | Date | string | null
    profession?: ProfessionListRelationFilter
  }

  export type profession_categoryOrderByWithRelationInput = {
    id_prof_cat?: SortOrder
    profession_category?: SortOrderInput | SortOrder
    created_at?: SortOrderInput | SortOrder
    updated_at?: SortOrderInput | SortOrder
    profession?: professionOrderByRelationAggregateInput
  }

  export type profession_categoryWhereUniqueInput = Prisma.AtLeast<{
    id_prof_cat?: bigint | number
    AND?: profession_categoryWhereInput | profession_categoryWhereInput[]
    OR?: profession_categoryWhereInput[]
    NOT?: profession_categoryWhereInput | profession_categoryWhereInput[]
    profession_category?: StringNullableFilter<"profession_category"> | string | null
    created_at?: DateTimeNullableFilter<"profession_category"> | Date | string | null
    updated_at?: DateTimeNullableFilter<"profession_category"> | Date | string | null
    profession?: ProfessionListRelationFilter
  }, "id_prof_cat">

  export type profession_categoryOrderByWithAggregationInput = {
    id_prof_cat?: SortOrder
    profession_category?: SortOrderInput | SortOrder
    created_at?: SortOrderInput | SortOrder
    updated_at?: SortOrderInput | SortOrder
    _count?: profession_categoryCountOrderByAggregateInput
    _avg?: profession_categoryAvgOrderByAggregateInput
    _max?: profession_categoryMaxOrderByAggregateInput
    _min?: profession_categoryMinOrderByAggregateInput
    _sum?: profession_categorySumOrderByAggregateInput
  }

  export type profession_categoryScalarWhereWithAggregatesInput = {
    AND?: profession_categoryScalarWhereWithAggregatesInput | profession_categoryScalarWhereWithAggregatesInput[]
    OR?: profession_categoryScalarWhereWithAggregatesInput[]
    NOT?: profession_categoryScalarWhereWithAggregatesInput | profession_categoryScalarWhereWithAggregatesInput[]
    id_prof_cat?: BigIntWithAggregatesFilter<"profession_category"> | bigint | number
    profession_category?: StringNullableWithAggregatesFilter<"profession_category"> | string | null
    created_at?: DateTimeNullableWithAggregatesFilter<"profession_category"> | Date | string | null
    updated_at?: DateTimeNullableWithAggregatesFilter<"profession_category"> | Date | string | null
  }

  export type addressesCreateInput = {
    id_alamat: string
    alamat: string
    latitude: Decimal | DecimalJsLike | number | string
    longitude: Decimal | DecimalJsLike | number | string
    created_at?: Date | string | null
    updated_at?: Date | string | null
    cities?: citiesCreateNestedOneWithoutAddressesInput
    provinces?: provincesCreateNestedOneWithoutAddressesInput
    user_address?: user_addressCreateNestedManyWithoutAddressesInput
  }

  export type addressesUncheckedCreateInput = {
    id_alamat: string
    alamat: string
    latitude: Decimal | DecimalJsLike | number | string
    longitude: Decimal | DecimalJsLike | number | string
    id_kota?: number | null
    id_prov?: number | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
    user_address?: user_addressUncheckedCreateNestedManyWithoutAddressesInput
  }

  export type addressesUpdateInput = {
    id_alamat?: StringFieldUpdateOperationsInput | string
    alamat?: StringFieldUpdateOperationsInput | string
    latitude?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    longitude?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    cities?: citiesUpdateOneWithoutAddressesNestedInput
    provinces?: provincesUpdateOneWithoutAddressesNestedInput
    user_address?: user_addressUpdateManyWithoutAddressesNestedInput
  }

  export type addressesUncheckedUpdateInput = {
    id_alamat?: StringFieldUpdateOperationsInput | string
    alamat?: StringFieldUpdateOperationsInput | string
    latitude?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    longitude?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    id_kota?: NullableIntFieldUpdateOperationsInput | number | null
    id_prov?: NullableIntFieldUpdateOperationsInput | number | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    user_address?: user_addressUncheckedUpdateManyWithoutAddressesNestedInput
  }

  export type addressesCreateManyInput = {
    id_alamat: string
    alamat: string
    latitude: Decimal | DecimalJsLike | number | string
    longitude: Decimal | DecimalJsLike | number | string
    id_kota?: number | null
    id_prov?: number | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
  }

  export type addressesUpdateManyMutationInput = {
    id_alamat?: StringFieldUpdateOperationsInput | string
    alamat?: StringFieldUpdateOperationsInput | string
    latitude?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    longitude?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type addressesUncheckedUpdateManyInput = {
    id_alamat?: StringFieldUpdateOperationsInput | string
    alamat?: StringFieldUpdateOperationsInput | string
    latitude?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    longitude?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    id_kota?: NullableIntFieldUpdateOperationsInput | number | null
    id_prov?: NullableIntFieldUpdateOperationsInput | number | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type citiesCreateInput = {
    nama_kota: string
    created_at?: Date | string | null
    updated_at?: Date | string | null
    addresses?: addressesCreateNestedManyWithoutCitiesInput
    provinces: provincesCreateNestedOneWithoutCitiesInput
  }

  export type citiesUncheckedCreateInput = {
    id_kota?: number
    nama_kota: string
    id_prov: number
    created_at?: Date | string | null
    updated_at?: Date | string | null
    addresses?: addressesUncheckedCreateNestedManyWithoutCitiesInput
  }

  export type citiesUpdateInput = {
    nama_kota?: StringFieldUpdateOperationsInput | string
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    addresses?: addressesUpdateManyWithoutCitiesNestedInput
    provinces?: provincesUpdateOneRequiredWithoutCitiesNestedInput
  }

  export type citiesUncheckedUpdateInput = {
    id_kota?: IntFieldUpdateOperationsInput | number
    nama_kota?: StringFieldUpdateOperationsInput | string
    id_prov?: IntFieldUpdateOperationsInput | number
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    addresses?: addressesUncheckedUpdateManyWithoutCitiesNestedInput
  }

  export type citiesCreateManyInput = {
    id_kota?: number
    nama_kota: string
    id_prov: number
    created_at?: Date | string | null
    updated_at?: Date | string | null
  }

  export type citiesUpdateManyMutationInput = {
    nama_kota?: StringFieldUpdateOperationsInput | string
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type citiesUncheckedUpdateManyInput = {
    id_kota?: IntFieldUpdateOperationsInput | number
    nama_kota?: StringFieldUpdateOperationsInput | string
    id_prov?: IntFieldUpdateOperationsInput | number
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type professionCreateInput = {
    id_profesi?: bigint | number
    profession: string
    created_at?: Date | string | null
    updated_at?: Date | string | null
    profession_category?: profession_categoryCreateNestedOneWithoutProfessionInput
    profession_user?: profession_userCreateNestedManyWithoutProfessionInput
  }

  export type professionUncheckedCreateInput = {
    id_profesi?: bigint | number
    profession: string
    created_at?: Date | string | null
    updated_at?: Date | string | null
    id_prof_cat?: bigint | number | null
    profession_user?: profession_userUncheckedCreateNestedManyWithoutProfessionInput
  }

  export type professionUpdateInput = {
    id_profesi?: BigIntFieldUpdateOperationsInput | bigint | number
    profession?: StringFieldUpdateOperationsInput | string
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    profession_category?: profession_categoryUpdateOneWithoutProfessionNestedInput
    profession_user?: profession_userUpdateManyWithoutProfessionNestedInput
  }

  export type professionUncheckedUpdateInput = {
    id_profesi?: BigIntFieldUpdateOperationsInput | bigint | number
    profession?: StringFieldUpdateOperationsInput | string
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    id_prof_cat?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    profession_user?: profession_userUncheckedUpdateManyWithoutProfessionNestedInput
  }

  export type professionCreateManyInput = {
    id_profesi?: bigint | number
    profession: string
    created_at?: Date | string | null
    updated_at?: Date | string | null
    id_prof_cat?: bigint | number | null
  }

  export type professionUpdateManyMutationInput = {
    id_profesi?: BigIntFieldUpdateOperationsInput | bigint | number
    profession?: StringFieldUpdateOperationsInput | string
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type professionUncheckedUpdateManyInput = {
    id_profesi?: BigIntFieldUpdateOperationsInput | bigint | number
    profession?: StringFieldUpdateOperationsInput | string
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    id_prof_cat?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
  }

  export type profession_userCreateInput = {
    profession: professionCreateNestedOneWithoutProfession_userInput
    users: usersCreateNestedOneWithoutProfession_userInput
  }

  export type profession_userUncheckedCreateInput = {
    id_user: string
    id_profesi: bigint | number
  }

  export type profession_userUpdateInput = {
    profession?: professionUpdateOneRequiredWithoutProfession_userNestedInput
    users?: usersUpdateOneRequiredWithoutProfession_userNestedInput
  }

  export type profession_userUncheckedUpdateInput = {
    id_user?: StringFieldUpdateOperationsInput | string
    id_profesi?: BigIntFieldUpdateOperationsInput | bigint | number
  }

  export type profession_userCreateManyInput = {
    id_user: string
    id_profesi: bigint | number
  }

  export type profession_userUpdateManyMutationInput = {

  }

  export type profession_userUncheckedUpdateManyInput = {
    id_user?: StringFieldUpdateOperationsInput | string
    id_profesi?: BigIntFieldUpdateOperationsInput | bigint | number
  }

  export type provincesCreateInput = {
    nama_prov: string
    created_at?: Date | string | null
    updated_at?: Date | string | null
    addresses?: addressesCreateNestedManyWithoutProvincesInput
    cities?: citiesCreateNestedManyWithoutProvincesInput
  }

  export type provincesUncheckedCreateInput = {
    id_prov?: number
    nama_prov: string
    created_at?: Date | string | null
    updated_at?: Date | string | null
    addresses?: addressesUncheckedCreateNestedManyWithoutProvincesInput
    cities?: citiesUncheckedCreateNestedManyWithoutProvincesInput
  }

  export type provincesUpdateInput = {
    nama_prov?: StringFieldUpdateOperationsInput | string
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    addresses?: addressesUpdateManyWithoutProvincesNestedInput
    cities?: citiesUpdateManyWithoutProvincesNestedInput
  }

  export type provincesUncheckedUpdateInput = {
    id_prov?: IntFieldUpdateOperationsInput | number
    nama_prov?: StringFieldUpdateOperationsInput | string
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    addresses?: addressesUncheckedUpdateManyWithoutProvincesNestedInput
    cities?: citiesUncheckedUpdateManyWithoutProvincesNestedInput
  }

  export type provincesCreateManyInput = {
    id_prov?: number
    nama_prov: string
    created_at?: Date | string | null
    updated_at?: Date | string | null
  }

  export type provincesUpdateManyMutationInput = {
    nama_prov?: StringFieldUpdateOperationsInput | string
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type provincesUncheckedUpdateManyInput = {
    id_prov?: IntFieldUpdateOperationsInput | number
    nama_prov?: StringFieldUpdateOperationsInput | string
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type user_addressCreateInput = {
    addresses: addressesCreateNestedOneWithoutUser_addressInput
    users: usersCreateNestedOneWithoutUser_addressInput
  }

  export type user_addressUncheckedCreateInput = {
    id_user: string
    id_alamat: string
  }

  export type user_addressUpdateInput = {
    addresses?: addressesUpdateOneRequiredWithoutUser_addressNestedInput
    users?: usersUpdateOneRequiredWithoutUser_addressNestedInput
  }

  export type user_addressUncheckedUpdateInput = {
    id_user?: StringFieldUpdateOperationsInput | string
    id_alamat?: StringFieldUpdateOperationsInput | string
  }

  export type user_addressCreateManyInput = {
    id_user: string
    id_alamat: string
  }

  export type user_addressUpdateManyMutationInput = {

  }

  export type user_addressUncheckedUpdateManyInput = {
    id_user?: StringFieldUpdateOperationsInput | string
    id_alamat?: StringFieldUpdateOperationsInput | string
  }

  export type usersCreateInput = {
    id_user: string
    username?: string | null
    nama?: string | null
    email: string
    sandi: string
    gender?: $Enums.gender_enum | null
    birth_date?: Date | string | null
    foto?: Uint8Array | null
    bio?: string | null
    status_user?: $Enums.status_user_enum | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
    profession_user?: profession_userCreateNestedManyWithoutUsersInput
    user_address?: user_addressCreateNestedManyWithoutUsersInput
  }

  export type usersUncheckedCreateInput = {
    id_user: string
    username?: string | null
    nama?: string | null
    email: string
    sandi: string
    gender?: $Enums.gender_enum | null
    birth_date?: Date | string | null
    foto?: Uint8Array | null
    bio?: string | null
    status_user?: $Enums.status_user_enum | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
    profession_user?: profession_userUncheckedCreateNestedManyWithoutUsersInput
    user_address?: user_addressUncheckedCreateNestedManyWithoutUsersInput
  }

  export type usersUpdateInput = {
    id_user?: StringFieldUpdateOperationsInput | string
    username?: NullableStringFieldUpdateOperationsInput | string | null
    nama?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    sandi?: StringFieldUpdateOperationsInput | string
    gender?: NullableEnumgender_enumFieldUpdateOperationsInput | $Enums.gender_enum | null
    birth_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    foto?: NullableBytesFieldUpdateOperationsInput | Uint8Array | null
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    status_user?: NullableEnumstatus_user_enumFieldUpdateOperationsInput | $Enums.status_user_enum | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    profession_user?: profession_userUpdateManyWithoutUsersNestedInput
    user_address?: user_addressUpdateManyWithoutUsersNestedInput
  }

  export type usersUncheckedUpdateInput = {
    id_user?: StringFieldUpdateOperationsInput | string
    username?: NullableStringFieldUpdateOperationsInput | string | null
    nama?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    sandi?: StringFieldUpdateOperationsInput | string
    gender?: NullableEnumgender_enumFieldUpdateOperationsInput | $Enums.gender_enum | null
    birth_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    foto?: NullableBytesFieldUpdateOperationsInput | Uint8Array | null
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    status_user?: NullableEnumstatus_user_enumFieldUpdateOperationsInput | $Enums.status_user_enum | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    profession_user?: profession_userUncheckedUpdateManyWithoutUsersNestedInput
    user_address?: user_addressUncheckedUpdateManyWithoutUsersNestedInput
  }

  export type usersCreateManyInput = {
    id_user: string
    username?: string | null
    nama?: string | null
    email: string
    sandi: string
    gender?: $Enums.gender_enum | null
    birth_date?: Date | string | null
    foto?: Uint8Array | null
    bio?: string | null
    status_user?: $Enums.status_user_enum | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
  }

  export type usersUpdateManyMutationInput = {
    id_user?: StringFieldUpdateOperationsInput | string
    username?: NullableStringFieldUpdateOperationsInput | string | null
    nama?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    sandi?: StringFieldUpdateOperationsInput | string
    gender?: NullableEnumgender_enumFieldUpdateOperationsInput | $Enums.gender_enum | null
    birth_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    foto?: NullableBytesFieldUpdateOperationsInput | Uint8Array | null
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    status_user?: NullableEnumstatus_user_enumFieldUpdateOperationsInput | $Enums.status_user_enum | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type usersUncheckedUpdateManyInput = {
    id_user?: StringFieldUpdateOperationsInput | string
    username?: NullableStringFieldUpdateOperationsInput | string | null
    nama?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    sandi?: StringFieldUpdateOperationsInput | string
    gender?: NullableEnumgender_enumFieldUpdateOperationsInput | $Enums.gender_enum | null
    birth_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    foto?: NullableBytesFieldUpdateOperationsInput | Uint8Array | null
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    status_user?: NullableEnumstatus_user_enumFieldUpdateOperationsInput | $Enums.status_user_enum | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type profession_categoryCreateInput = {
    id_prof_cat?: bigint | number
    profession_category?: string | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
    profession?: professionCreateNestedManyWithoutProfession_categoryInput
  }

  export type profession_categoryUncheckedCreateInput = {
    id_prof_cat?: bigint | number
    profession_category?: string | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
    profession?: professionUncheckedCreateNestedManyWithoutProfession_categoryInput
  }

  export type profession_categoryUpdateInput = {
    id_prof_cat?: BigIntFieldUpdateOperationsInput | bigint | number
    profession_category?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    profession?: professionUpdateManyWithoutProfession_categoryNestedInput
  }

  export type profession_categoryUncheckedUpdateInput = {
    id_prof_cat?: BigIntFieldUpdateOperationsInput | bigint | number
    profession_category?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    profession?: professionUncheckedUpdateManyWithoutProfession_categoryNestedInput
  }

  export type profession_categoryCreateManyInput = {
    id_prof_cat?: bigint | number
    profession_category?: string | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
  }

  export type profession_categoryUpdateManyMutationInput = {
    id_prof_cat?: BigIntFieldUpdateOperationsInput | bigint | number
    profession_category?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type profession_categoryUncheckedUpdateManyInput = {
    id_prof_cat?: BigIntFieldUpdateOperationsInput | bigint | number
    profession_category?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type DecimalFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
  }

  export type IntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type DateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type CitiesNullableScalarRelationFilter = {
    is?: citiesWhereInput | null
    isNot?: citiesWhereInput | null
  }

  export type ProvincesNullableScalarRelationFilter = {
    is?: provincesWhereInput | null
    isNot?: provincesWhereInput | null
  }

  export type User_addressListRelationFilter = {
    every?: user_addressWhereInput
    some?: user_addressWhereInput
    none?: user_addressWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type user_addressOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type addressesCountOrderByAggregateInput = {
    id_alamat?: SortOrder
    alamat?: SortOrder
    latitude?: SortOrder
    longitude?: SortOrder
    id_kota?: SortOrder
    id_prov?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type addressesAvgOrderByAggregateInput = {
    latitude?: SortOrder
    longitude?: SortOrder
    id_kota?: SortOrder
    id_prov?: SortOrder
  }

  export type addressesMaxOrderByAggregateInput = {
    id_alamat?: SortOrder
    alamat?: SortOrder
    latitude?: SortOrder
    longitude?: SortOrder
    id_kota?: SortOrder
    id_prov?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type addressesMinOrderByAggregateInput = {
    id_alamat?: SortOrder
    alamat?: SortOrder
    latitude?: SortOrder
    longitude?: SortOrder
    id_kota?: SortOrder
    id_prov?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type addressesSumOrderByAggregateInput = {
    latitude?: SortOrder
    longitude?: SortOrder
    id_kota?: SortOrder
    id_prov?: SortOrder
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type DecimalWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalWithAggregatesFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedDecimalFilter<$PrismaModel>
    _sum?: NestedDecimalFilter<$PrismaModel>
    _min?: NestedDecimalFilter<$PrismaModel>
    _max?: NestedDecimalFilter<$PrismaModel>
  }

  export type IntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type DateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type AddressesListRelationFilter = {
    every?: addressesWhereInput
    some?: addressesWhereInput
    none?: addressesWhereInput
  }

  export type ProvincesScalarRelationFilter = {
    is?: provincesWhereInput
    isNot?: provincesWhereInput
  }

  export type addressesOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type citiesCountOrderByAggregateInput = {
    id_kota?: SortOrder
    nama_kota?: SortOrder
    id_prov?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type citiesAvgOrderByAggregateInput = {
    id_kota?: SortOrder
    id_prov?: SortOrder
  }

  export type citiesMaxOrderByAggregateInput = {
    id_kota?: SortOrder
    nama_kota?: SortOrder
    id_prov?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type citiesMinOrderByAggregateInput = {
    id_kota?: SortOrder
    nama_kota?: SortOrder
    id_prov?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type citiesSumOrderByAggregateInput = {
    id_kota?: SortOrder
    id_prov?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type BigIntFilter<$PrismaModel = never> = {
    equals?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    in?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel>
    notIn?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel>
    lt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    lte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    not?: NestedBigIntFilter<$PrismaModel> | bigint | number
  }

  export type BigIntNullableFilter<$PrismaModel = never> = {
    equals?: bigint | number | BigIntFieldRefInput<$PrismaModel> | null
    in?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel> | null
    notIn?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel> | null
    lt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    lte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    not?: NestedBigIntNullableFilter<$PrismaModel> | bigint | number | null
  }

  export type Profession_categoryNullableScalarRelationFilter = {
    is?: profession_categoryWhereInput | null
    isNot?: profession_categoryWhereInput | null
  }

  export type Profession_userListRelationFilter = {
    every?: profession_userWhereInput
    some?: profession_userWhereInput
    none?: profession_userWhereInput
  }

  export type profession_userOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type professionCountOrderByAggregateInput = {
    id_profesi?: SortOrder
    profession?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    id_prof_cat?: SortOrder
  }

  export type professionAvgOrderByAggregateInput = {
    id_profesi?: SortOrder
    id_prof_cat?: SortOrder
  }

  export type professionMaxOrderByAggregateInput = {
    id_profesi?: SortOrder
    profession?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    id_prof_cat?: SortOrder
  }

  export type professionMinOrderByAggregateInput = {
    id_profesi?: SortOrder
    profession?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    id_prof_cat?: SortOrder
  }

  export type professionSumOrderByAggregateInput = {
    id_profesi?: SortOrder
    id_prof_cat?: SortOrder
  }

  export type BigIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    in?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel>
    notIn?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel>
    lt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    lte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    not?: NestedBigIntWithAggregatesFilter<$PrismaModel> | bigint | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedBigIntFilter<$PrismaModel>
    _min?: NestedBigIntFilter<$PrismaModel>
    _max?: NestedBigIntFilter<$PrismaModel>
  }

  export type BigIntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: bigint | number | BigIntFieldRefInput<$PrismaModel> | null
    in?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel> | null
    notIn?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel> | null
    lt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    lte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    not?: NestedBigIntNullableWithAggregatesFilter<$PrismaModel> | bigint | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedBigIntNullableFilter<$PrismaModel>
    _min?: NestedBigIntNullableFilter<$PrismaModel>
    _max?: NestedBigIntNullableFilter<$PrismaModel>
  }

  export type ProfessionScalarRelationFilter = {
    is?: professionWhereInput
    isNot?: professionWhereInput
  }

  export type UsersScalarRelationFilter = {
    is?: usersWhereInput
    isNot?: usersWhereInput
  }

  export type profession_userId_userId_profesiCompoundUniqueInput = {
    id_user: string
    id_profesi: bigint | number
  }

  export type profession_userCountOrderByAggregateInput = {
    id_user?: SortOrder
    id_profesi?: SortOrder
  }

  export type profession_userAvgOrderByAggregateInput = {
    id_profesi?: SortOrder
  }

  export type profession_userMaxOrderByAggregateInput = {
    id_user?: SortOrder
    id_profesi?: SortOrder
  }

  export type profession_userMinOrderByAggregateInput = {
    id_user?: SortOrder
    id_profesi?: SortOrder
  }

  export type profession_userSumOrderByAggregateInput = {
    id_profesi?: SortOrder
  }

  export type CitiesListRelationFilter = {
    every?: citiesWhereInput
    some?: citiesWhereInput
    none?: citiesWhereInput
  }

  export type citiesOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type provincesCountOrderByAggregateInput = {
    id_prov?: SortOrder
    nama_prov?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type provincesAvgOrderByAggregateInput = {
    id_prov?: SortOrder
  }

  export type provincesMaxOrderByAggregateInput = {
    id_prov?: SortOrder
    nama_prov?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type provincesMinOrderByAggregateInput = {
    id_prov?: SortOrder
    nama_prov?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type provincesSumOrderByAggregateInput = {
    id_prov?: SortOrder
  }

  export type AddressesScalarRelationFilter = {
    is?: addressesWhereInput
    isNot?: addressesWhereInput
  }

  export type user_addressId_userId_alamatCompoundUniqueInput = {
    id_user: string
    id_alamat: string
  }

  export type user_addressCountOrderByAggregateInput = {
    id_user?: SortOrder
    id_alamat?: SortOrder
  }

  export type user_addressMaxOrderByAggregateInput = {
    id_user?: SortOrder
    id_alamat?: SortOrder
  }

  export type user_addressMinOrderByAggregateInput = {
    id_user?: SortOrder
    id_alamat?: SortOrder
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type Enumgender_enumNullableFilter<$PrismaModel = never> = {
    equals?: $Enums.gender_enum | Enumgender_enumFieldRefInput<$PrismaModel> | null
    in?: $Enums.gender_enum[] | ListEnumgender_enumFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.gender_enum[] | ListEnumgender_enumFieldRefInput<$PrismaModel> | null
    not?: NestedEnumgender_enumNullableFilter<$PrismaModel> | $Enums.gender_enum | null
  }

  export type BytesNullableFilter<$PrismaModel = never> = {
    equals?: Uint8Array | BytesFieldRefInput<$PrismaModel> | null
    in?: Uint8Array[] | ListBytesFieldRefInput<$PrismaModel> | null
    notIn?: Uint8Array[] | ListBytesFieldRefInput<$PrismaModel> | null
    not?: NestedBytesNullableFilter<$PrismaModel> | Uint8Array | null
  }

  export type Enumstatus_user_enumNullableFilter<$PrismaModel = never> = {
    equals?: $Enums.status_user_enum | Enumstatus_user_enumFieldRefInput<$PrismaModel> | null
    in?: $Enums.status_user_enum[] | ListEnumstatus_user_enumFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.status_user_enum[] | ListEnumstatus_user_enumFieldRefInput<$PrismaModel> | null
    not?: NestedEnumstatus_user_enumNullableFilter<$PrismaModel> | $Enums.status_user_enum | null
  }

  export type usersCountOrderByAggregateInput = {
    id_user?: SortOrder
    username?: SortOrder
    nama?: SortOrder
    email?: SortOrder
    sandi?: SortOrder
    gender?: SortOrder
    birth_date?: SortOrder
    foto?: SortOrder
    bio?: SortOrder
    status_user?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type usersMaxOrderByAggregateInput = {
    id_user?: SortOrder
    username?: SortOrder
    nama?: SortOrder
    email?: SortOrder
    sandi?: SortOrder
    gender?: SortOrder
    birth_date?: SortOrder
    foto?: SortOrder
    bio?: SortOrder
    status_user?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type usersMinOrderByAggregateInput = {
    id_user?: SortOrder
    username?: SortOrder
    nama?: SortOrder
    email?: SortOrder
    sandi?: SortOrder
    gender?: SortOrder
    birth_date?: SortOrder
    foto?: SortOrder
    bio?: SortOrder
    status_user?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type Enumgender_enumNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.gender_enum | Enumgender_enumFieldRefInput<$PrismaModel> | null
    in?: $Enums.gender_enum[] | ListEnumgender_enumFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.gender_enum[] | ListEnumgender_enumFieldRefInput<$PrismaModel> | null
    not?: NestedEnumgender_enumNullableWithAggregatesFilter<$PrismaModel> | $Enums.gender_enum | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedEnumgender_enumNullableFilter<$PrismaModel>
    _max?: NestedEnumgender_enumNullableFilter<$PrismaModel>
  }

  export type BytesNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Uint8Array | BytesFieldRefInput<$PrismaModel> | null
    in?: Uint8Array[] | ListBytesFieldRefInput<$PrismaModel> | null
    notIn?: Uint8Array[] | ListBytesFieldRefInput<$PrismaModel> | null
    not?: NestedBytesNullableWithAggregatesFilter<$PrismaModel> | Uint8Array | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedBytesNullableFilter<$PrismaModel>
    _max?: NestedBytesNullableFilter<$PrismaModel>
  }

  export type Enumstatus_user_enumNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.status_user_enum | Enumstatus_user_enumFieldRefInput<$PrismaModel> | null
    in?: $Enums.status_user_enum[] | ListEnumstatus_user_enumFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.status_user_enum[] | ListEnumstatus_user_enumFieldRefInput<$PrismaModel> | null
    not?: NestedEnumstatus_user_enumNullableWithAggregatesFilter<$PrismaModel> | $Enums.status_user_enum | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedEnumstatus_user_enumNullableFilter<$PrismaModel>
    _max?: NestedEnumstatus_user_enumNullableFilter<$PrismaModel>
  }

  export type ProfessionListRelationFilter = {
    every?: professionWhereInput
    some?: professionWhereInput
    none?: professionWhereInput
  }

  export type professionOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type profession_categoryCountOrderByAggregateInput = {
    id_prof_cat?: SortOrder
    profession_category?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type profession_categoryAvgOrderByAggregateInput = {
    id_prof_cat?: SortOrder
  }

  export type profession_categoryMaxOrderByAggregateInput = {
    id_prof_cat?: SortOrder
    profession_category?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type profession_categoryMinOrderByAggregateInput = {
    id_prof_cat?: SortOrder
    profession_category?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type profession_categorySumOrderByAggregateInput = {
    id_prof_cat?: SortOrder
  }

  export type citiesCreateNestedOneWithoutAddressesInput = {
    create?: XOR<citiesCreateWithoutAddressesInput, citiesUncheckedCreateWithoutAddressesInput>
    connectOrCreate?: citiesCreateOrConnectWithoutAddressesInput
    connect?: citiesWhereUniqueInput
  }

  export type provincesCreateNestedOneWithoutAddressesInput = {
    create?: XOR<provincesCreateWithoutAddressesInput, provincesUncheckedCreateWithoutAddressesInput>
    connectOrCreate?: provincesCreateOrConnectWithoutAddressesInput
    connect?: provincesWhereUniqueInput
  }

  export type user_addressCreateNestedManyWithoutAddressesInput = {
    create?: XOR<user_addressCreateWithoutAddressesInput, user_addressUncheckedCreateWithoutAddressesInput> | user_addressCreateWithoutAddressesInput[] | user_addressUncheckedCreateWithoutAddressesInput[]
    connectOrCreate?: user_addressCreateOrConnectWithoutAddressesInput | user_addressCreateOrConnectWithoutAddressesInput[]
    createMany?: user_addressCreateManyAddressesInputEnvelope
    connect?: user_addressWhereUniqueInput | user_addressWhereUniqueInput[]
  }

  export type user_addressUncheckedCreateNestedManyWithoutAddressesInput = {
    create?: XOR<user_addressCreateWithoutAddressesInput, user_addressUncheckedCreateWithoutAddressesInput> | user_addressCreateWithoutAddressesInput[] | user_addressUncheckedCreateWithoutAddressesInput[]
    connectOrCreate?: user_addressCreateOrConnectWithoutAddressesInput | user_addressCreateOrConnectWithoutAddressesInput[]
    createMany?: user_addressCreateManyAddressesInputEnvelope
    connect?: user_addressWhereUniqueInput | user_addressWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type DecimalFieldUpdateOperationsInput = {
    set?: Decimal | DecimalJsLike | number | string
    increment?: Decimal | DecimalJsLike | number | string
    decrement?: Decimal | DecimalJsLike | number | string
    multiply?: Decimal | DecimalJsLike | number | string
    divide?: Decimal | DecimalJsLike | number | string
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type citiesUpdateOneWithoutAddressesNestedInput = {
    create?: XOR<citiesCreateWithoutAddressesInput, citiesUncheckedCreateWithoutAddressesInput>
    connectOrCreate?: citiesCreateOrConnectWithoutAddressesInput
    upsert?: citiesUpsertWithoutAddressesInput
    disconnect?: citiesWhereInput | boolean
    delete?: citiesWhereInput | boolean
    connect?: citiesWhereUniqueInput
    update?: XOR<XOR<citiesUpdateToOneWithWhereWithoutAddressesInput, citiesUpdateWithoutAddressesInput>, citiesUncheckedUpdateWithoutAddressesInput>
  }

  export type provincesUpdateOneWithoutAddressesNestedInput = {
    create?: XOR<provincesCreateWithoutAddressesInput, provincesUncheckedCreateWithoutAddressesInput>
    connectOrCreate?: provincesCreateOrConnectWithoutAddressesInput
    upsert?: provincesUpsertWithoutAddressesInput
    disconnect?: provincesWhereInput | boolean
    delete?: provincesWhereInput | boolean
    connect?: provincesWhereUniqueInput
    update?: XOR<XOR<provincesUpdateToOneWithWhereWithoutAddressesInput, provincesUpdateWithoutAddressesInput>, provincesUncheckedUpdateWithoutAddressesInput>
  }

  export type user_addressUpdateManyWithoutAddressesNestedInput = {
    create?: XOR<user_addressCreateWithoutAddressesInput, user_addressUncheckedCreateWithoutAddressesInput> | user_addressCreateWithoutAddressesInput[] | user_addressUncheckedCreateWithoutAddressesInput[]
    connectOrCreate?: user_addressCreateOrConnectWithoutAddressesInput | user_addressCreateOrConnectWithoutAddressesInput[]
    upsert?: user_addressUpsertWithWhereUniqueWithoutAddressesInput | user_addressUpsertWithWhereUniqueWithoutAddressesInput[]
    createMany?: user_addressCreateManyAddressesInputEnvelope
    set?: user_addressWhereUniqueInput | user_addressWhereUniqueInput[]
    disconnect?: user_addressWhereUniqueInput | user_addressWhereUniqueInput[]
    delete?: user_addressWhereUniqueInput | user_addressWhereUniqueInput[]
    connect?: user_addressWhereUniqueInput | user_addressWhereUniqueInput[]
    update?: user_addressUpdateWithWhereUniqueWithoutAddressesInput | user_addressUpdateWithWhereUniqueWithoutAddressesInput[]
    updateMany?: user_addressUpdateManyWithWhereWithoutAddressesInput | user_addressUpdateManyWithWhereWithoutAddressesInput[]
    deleteMany?: user_addressScalarWhereInput | user_addressScalarWhereInput[]
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type user_addressUncheckedUpdateManyWithoutAddressesNestedInput = {
    create?: XOR<user_addressCreateWithoutAddressesInput, user_addressUncheckedCreateWithoutAddressesInput> | user_addressCreateWithoutAddressesInput[] | user_addressUncheckedCreateWithoutAddressesInput[]
    connectOrCreate?: user_addressCreateOrConnectWithoutAddressesInput | user_addressCreateOrConnectWithoutAddressesInput[]
    upsert?: user_addressUpsertWithWhereUniqueWithoutAddressesInput | user_addressUpsertWithWhereUniqueWithoutAddressesInput[]
    createMany?: user_addressCreateManyAddressesInputEnvelope
    set?: user_addressWhereUniqueInput | user_addressWhereUniqueInput[]
    disconnect?: user_addressWhereUniqueInput | user_addressWhereUniqueInput[]
    delete?: user_addressWhereUniqueInput | user_addressWhereUniqueInput[]
    connect?: user_addressWhereUniqueInput | user_addressWhereUniqueInput[]
    update?: user_addressUpdateWithWhereUniqueWithoutAddressesInput | user_addressUpdateWithWhereUniqueWithoutAddressesInput[]
    updateMany?: user_addressUpdateManyWithWhereWithoutAddressesInput | user_addressUpdateManyWithWhereWithoutAddressesInput[]
    deleteMany?: user_addressScalarWhereInput | user_addressScalarWhereInput[]
  }

  export type addressesCreateNestedManyWithoutCitiesInput = {
    create?: XOR<addressesCreateWithoutCitiesInput, addressesUncheckedCreateWithoutCitiesInput> | addressesCreateWithoutCitiesInput[] | addressesUncheckedCreateWithoutCitiesInput[]
    connectOrCreate?: addressesCreateOrConnectWithoutCitiesInput | addressesCreateOrConnectWithoutCitiesInput[]
    createMany?: addressesCreateManyCitiesInputEnvelope
    connect?: addressesWhereUniqueInput | addressesWhereUniqueInput[]
  }

  export type provincesCreateNestedOneWithoutCitiesInput = {
    create?: XOR<provincesCreateWithoutCitiesInput, provincesUncheckedCreateWithoutCitiesInput>
    connectOrCreate?: provincesCreateOrConnectWithoutCitiesInput
    connect?: provincesWhereUniqueInput
  }

  export type addressesUncheckedCreateNestedManyWithoutCitiesInput = {
    create?: XOR<addressesCreateWithoutCitiesInput, addressesUncheckedCreateWithoutCitiesInput> | addressesCreateWithoutCitiesInput[] | addressesUncheckedCreateWithoutCitiesInput[]
    connectOrCreate?: addressesCreateOrConnectWithoutCitiesInput | addressesCreateOrConnectWithoutCitiesInput[]
    createMany?: addressesCreateManyCitiesInputEnvelope
    connect?: addressesWhereUniqueInput | addressesWhereUniqueInput[]
  }

  export type addressesUpdateManyWithoutCitiesNestedInput = {
    create?: XOR<addressesCreateWithoutCitiesInput, addressesUncheckedCreateWithoutCitiesInput> | addressesCreateWithoutCitiesInput[] | addressesUncheckedCreateWithoutCitiesInput[]
    connectOrCreate?: addressesCreateOrConnectWithoutCitiesInput | addressesCreateOrConnectWithoutCitiesInput[]
    upsert?: addressesUpsertWithWhereUniqueWithoutCitiesInput | addressesUpsertWithWhereUniqueWithoutCitiesInput[]
    createMany?: addressesCreateManyCitiesInputEnvelope
    set?: addressesWhereUniqueInput | addressesWhereUniqueInput[]
    disconnect?: addressesWhereUniqueInput | addressesWhereUniqueInput[]
    delete?: addressesWhereUniqueInput | addressesWhereUniqueInput[]
    connect?: addressesWhereUniqueInput | addressesWhereUniqueInput[]
    update?: addressesUpdateWithWhereUniqueWithoutCitiesInput | addressesUpdateWithWhereUniqueWithoutCitiesInput[]
    updateMany?: addressesUpdateManyWithWhereWithoutCitiesInput | addressesUpdateManyWithWhereWithoutCitiesInput[]
    deleteMany?: addressesScalarWhereInput | addressesScalarWhereInput[]
  }

  export type provincesUpdateOneRequiredWithoutCitiesNestedInput = {
    create?: XOR<provincesCreateWithoutCitiesInput, provincesUncheckedCreateWithoutCitiesInput>
    connectOrCreate?: provincesCreateOrConnectWithoutCitiesInput
    upsert?: provincesUpsertWithoutCitiesInput
    connect?: provincesWhereUniqueInput
    update?: XOR<XOR<provincesUpdateToOneWithWhereWithoutCitiesInput, provincesUpdateWithoutCitiesInput>, provincesUncheckedUpdateWithoutCitiesInput>
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type addressesUncheckedUpdateManyWithoutCitiesNestedInput = {
    create?: XOR<addressesCreateWithoutCitiesInput, addressesUncheckedCreateWithoutCitiesInput> | addressesCreateWithoutCitiesInput[] | addressesUncheckedCreateWithoutCitiesInput[]
    connectOrCreate?: addressesCreateOrConnectWithoutCitiesInput | addressesCreateOrConnectWithoutCitiesInput[]
    upsert?: addressesUpsertWithWhereUniqueWithoutCitiesInput | addressesUpsertWithWhereUniqueWithoutCitiesInput[]
    createMany?: addressesCreateManyCitiesInputEnvelope
    set?: addressesWhereUniqueInput | addressesWhereUniqueInput[]
    disconnect?: addressesWhereUniqueInput | addressesWhereUniqueInput[]
    delete?: addressesWhereUniqueInput | addressesWhereUniqueInput[]
    connect?: addressesWhereUniqueInput | addressesWhereUniqueInput[]
    update?: addressesUpdateWithWhereUniqueWithoutCitiesInput | addressesUpdateWithWhereUniqueWithoutCitiesInput[]
    updateMany?: addressesUpdateManyWithWhereWithoutCitiesInput | addressesUpdateManyWithWhereWithoutCitiesInput[]
    deleteMany?: addressesScalarWhereInput | addressesScalarWhereInput[]
  }

  export type profession_categoryCreateNestedOneWithoutProfessionInput = {
    create?: XOR<profession_categoryCreateWithoutProfessionInput, profession_categoryUncheckedCreateWithoutProfessionInput>
    connectOrCreate?: profession_categoryCreateOrConnectWithoutProfessionInput
    connect?: profession_categoryWhereUniqueInput
  }

  export type profession_userCreateNestedManyWithoutProfessionInput = {
    create?: XOR<profession_userCreateWithoutProfessionInput, profession_userUncheckedCreateWithoutProfessionInput> | profession_userCreateWithoutProfessionInput[] | profession_userUncheckedCreateWithoutProfessionInput[]
    connectOrCreate?: profession_userCreateOrConnectWithoutProfessionInput | profession_userCreateOrConnectWithoutProfessionInput[]
    createMany?: profession_userCreateManyProfessionInputEnvelope
    connect?: profession_userWhereUniqueInput | profession_userWhereUniqueInput[]
  }

  export type profession_userUncheckedCreateNestedManyWithoutProfessionInput = {
    create?: XOR<profession_userCreateWithoutProfessionInput, profession_userUncheckedCreateWithoutProfessionInput> | profession_userCreateWithoutProfessionInput[] | profession_userUncheckedCreateWithoutProfessionInput[]
    connectOrCreate?: profession_userCreateOrConnectWithoutProfessionInput | profession_userCreateOrConnectWithoutProfessionInput[]
    createMany?: profession_userCreateManyProfessionInputEnvelope
    connect?: profession_userWhereUniqueInput | profession_userWhereUniqueInput[]
  }

  export type BigIntFieldUpdateOperationsInput = {
    set?: bigint | number
    increment?: bigint | number
    decrement?: bigint | number
    multiply?: bigint | number
    divide?: bigint | number
  }

  export type profession_categoryUpdateOneWithoutProfessionNestedInput = {
    create?: XOR<profession_categoryCreateWithoutProfessionInput, profession_categoryUncheckedCreateWithoutProfessionInput>
    connectOrCreate?: profession_categoryCreateOrConnectWithoutProfessionInput
    upsert?: profession_categoryUpsertWithoutProfessionInput
    disconnect?: profession_categoryWhereInput | boolean
    delete?: profession_categoryWhereInput | boolean
    connect?: profession_categoryWhereUniqueInput
    update?: XOR<XOR<profession_categoryUpdateToOneWithWhereWithoutProfessionInput, profession_categoryUpdateWithoutProfessionInput>, profession_categoryUncheckedUpdateWithoutProfessionInput>
  }

  export type profession_userUpdateManyWithoutProfessionNestedInput = {
    create?: XOR<profession_userCreateWithoutProfessionInput, profession_userUncheckedCreateWithoutProfessionInput> | profession_userCreateWithoutProfessionInput[] | profession_userUncheckedCreateWithoutProfessionInput[]
    connectOrCreate?: profession_userCreateOrConnectWithoutProfessionInput | profession_userCreateOrConnectWithoutProfessionInput[]
    upsert?: profession_userUpsertWithWhereUniqueWithoutProfessionInput | profession_userUpsertWithWhereUniqueWithoutProfessionInput[]
    createMany?: profession_userCreateManyProfessionInputEnvelope
    set?: profession_userWhereUniqueInput | profession_userWhereUniqueInput[]
    disconnect?: profession_userWhereUniqueInput | profession_userWhereUniqueInput[]
    delete?: profession_userWhereUniqueInput | profession_userWhereUniqueInput[]
    connect?: profession_userWhereUniqueInput | profession_userWhereUniqueInput[]
    update?: profession_userUpdateWithWhereUniqueWithoutProfessionInput | profession_userUpdateWithWhereUniqueWithoutProfessionInput[]
    updateMany?: profession_userUpdateManyWithWhereWithoutProfessionInput | profession_userUpdateManyWithWhereWithoutProfessionInput[]
    deleteMany?: profession_userScalarWhereInput | profession_userScalarWhereInput[]
  }

  export type NullableBigIntFieldUpdateOperationsInput = {
    set?: bigint | number | null
    increment?: bigint | number
    decrement?: bigint | number
    multiply?: bigint | number
    divide?: bigint | number
  }

  export type profession_userUncheckedUpdateManyWithoutProfessionNestedInput = {
    create?: XOR<profession_userCreateWithoutProfessionInput, profession_userUncheckedCreateWithoutProfessionInput> | profession_userCreateWithoutProfessionInput[] | profession_userUncheckedCreateWithoutProfessionInput[]
    connectOrCreate?: profession_userCreateOrConnectWithoutProfessionInput | profession_userCreateOrConnectWithoutProfessionInput[]
    upsert?: profession_userUpsertWithWhereUniqueWithoutProfessionInput | profession_userUpsertWithWhereUniqueWithoutProfessionInput[]
    createMany?: profession_userCreateManyProfessionInputEnvelope
    set?: profession_userWhereUniqueInput | profession_userWhereUniqueInput[]
    disconnect?: profession_userWhereUniqueInput | profession_userWhereUniqueInput[]
    delete?: profession_userWhereUniqueInput | profession_userWhereUniqueInput[]
    connect?: profession_userWhereUniqueInput | profession_userWhereUniqueInput[]
    update?: profession_userUpdateWithWhereUniqueWithoutProfessionInput | profession_userUpdateWithWhereUniqueWithoutProfessionInput[]
    updateMany?: profession_userUpdateManyWithWhereWithoutProfessionInput | profession_userUpdateManyWithWhereWithoutProfessionInput[]
    deleteMany?: profession_userScalarWhereInput | profession_userScalarWhereInput[]
  }

  export type professionCreateNestedOneWithoutProfession_userInput = {
    create?: XOR<professionCreateWithoutProfession_userInput, professionUncheckedCreateWithoutProfession_userInput>
    connectOrCreate?: professionCreateOrConnectWithoutProfession_userInput
    connect?: professionWhereUniqueInput
  }

  export type usersCreateNestedOneWithoutProfession_userInput = {
    create?: XOR<usersCreateWithoutProfession_userInput, usersUncheckedCreateWithoutProfession_userInput>
    connectOrCreate?: usersCreateOrConnectWithoutProfession_userInput
    connect?: usersWhereUniqueInput
  }

  export type professionUpdateOneRequiredWithoutProfession_userNestedInput = {
    create?: XOR<professionCreateWithoutProfession_userInput, professionUncheckedCreateWithoutProfession_userInput>
    connectOrCreate?: professionCreateOrConnectWithoutProfession_userInput
    upsert?: professionUpsertWithoutProfession_userInput
    connect?: professionWhereUniqueInput
    update?: XOR<XOR<professionUpdateToOneWithWhereWithoutProfession_userInput, professionUpdateWithoutProfession_userInput>, professionUncheckedUpdateWithoutProfession_userInput>
  }

  export type usersUpdateOneRequiredWithoutProfession_userNestedInput = {
    create?: XOR<usersCreateWithoutProfession_userInput, usersUncheckedCreateWithoutProfession_userInput>
    connectOrCreate?: usersCreateOrConnectWithoutProfession_userInput
    upsert?: usersUpsertWithoutProfession_userInput
    connect?: usersWhereUniqueInput
    update?: XOR<XOR<usersUpdateToOneWithWhereWithoutProfession_userInput, usersUpdateWithoutProfession_userInput>, usersUncheckedUpdateWithoutProfession_userInput>
  }

  export type addressesCreateNestedManyWithoutProvincesInput = {
    create?: XOR<addressesCreateWithoutProvincesInput, addressesUncheckedCreateWithoutProvincesInput> | addressesCreateWithoutProvincesInput[] | addressesUncheckedCreateWithoutProvincesInput[]
    connectOrCreate?: addressesCreateOrConnectWithoutProvincesInput | addressesCreateOrConnectWithoutProvincesInput[]
    createMany?: addressesCreateManyProvincesInputEnvelope
    connect?: addressesWhereUniqueInput | addressesWhereUniqueInput[]
  }

  export type citiesCreateNestedManyWithoutProvincesInput = {
    create?: XOR<citiesCreateWithoutProvincesInput, citiesUncheckedCreateWithoutProvincesInput> | citiesCreateWithoutProvincesInput[] | citiesUncheckedCreateWithoutProvincesInput[]
    connectOrCreate?: citiesCreateOrConnectWithoutProvincesInput | citiesCreateOrConnectWithoutProvincesInput[]
    createMany?: citiesCreateManyProvincesInputEnvelope
    connect?: citiesWhereUniqueInput | citiesWhereUniqueInput[]
  }

  export type addressesUncheckedCreateNestedManyWithoutProvincesInput = {
    create?: XOR<addressesCreateWithoutProvincesInput, addressesUncheckedCreateWithoutProvincesInput> | addressesCreateWithoutProvincesInput[] | addressesUncheckedCreateWithoutProvincesInput[]
    connectOrCreate?: addressesCreateOrConnectWithoutProvincesInput | addressesCreateOrConnectWithoutProvincesInput[]
    createMany?: addressesCreateManyProvincesInputEnvelope
    connect?: addressesWhereUniqueInput | addressesWhereUniqueInput[]
  }

  export type citiesUncheckedCreateNestedManyWithoutProvincesInput = {
    create?: XOR<citiesCreateWithoutProvincesInput, citiesUncheckedCreateWithoutProvincesInput> | citiesCreateWithoutProvincesInput[] | citiesUncheckedCreateWithoutProvincesInput[]
    connectOrCreate?: citiesCreateOrConnectWithoutProvincesInput | citiesCreateOrConnectWithoutProvincesInput[]
    createMany?: citiesCreateManyProvincesInputEnvelope
    connect?: citiesWhereUniqueInput | citiesWhereUniqueInput[]
  }

  export type addressesUpdateManyWithoutProvincesNestedInput = {
    create?: XOR<addressesCreateWithoutProvincesInput, addressesUncheckedCreateWithoutProvincesInput> | addressesCreateWithoutProvincesInput[] | addressesUncheckedCreateWithoutProvincesInput[]
    connectOrCreate?: addressesCreateOrConnectWithoutProvincesInput | addressesCreateOrConnectWithoutProvincesInput[]
    upsert?: addressesUpsertWithWhereUniqueWithoutProvincesInput | addressesUpsertWithWhereUniqueWithoutProvincesInput[]
    createMany?: addressesCreateManyProvincesInputEnvelope
    set?: addressesWhereUniqueInput | addressesWhereUniqueInput[]
    disconnect?: addressesWhereUniqueInput | addressesWhereUniqueInput[]
    delete?: addressesWhereUniqueInput | addressesWhereUniqueInput[]
    connect?: addressesWhereUniqueInput | addressesWhereUniqueInput[]
    update?: addressesUpdateWithWhereUniqueWithoutProvincesInput | addressesUpdateWithWhereUniqueWithoutProvincesInput[]
    updateMany?: addressesUpdateManyWithWhereWithoutProvincesInput | addressesUpdateManyWithWhereWithoutProvincesInput[]
    deleteMany?: addressesScalarWhereInput | addressesScalarWhereInput[]
  }

  export type citiesUpdateManyWithoutProvincesNestedInput = {
    create?: XOR<citiesCreateWithoutProvincesInput, citiesUncheckedCreateWithoutProvincesInput> | citiesCreateWithoutProvincesInput[] | citiesUncheckedCreateWithoutProvincesInput[]
    connectOrCreate?: citiesCreateOrConnectWithoutProvincesInput | citiesCreateOrConnectWithoutProvincesInput[]
    upsert?: citiesUpsertWithWhereUniqueWithoutProvincesInput | citiesUpsertWithWhereUniqueWithoutProvincesInput[]
    createMany?: citiesCreateManyProvincesInputEnvelope
    set?: citiesWhereUniqueInput | citiesWhereUniqueInput[]
    disconnect?: citiesWhereUniqueInput | citiesWhereUniqueInput[]
    delete?: citiesWhereUniqueInput | citiesWhereUniqueInput[]
    connect?: citiesWhereUniqueInput | citiesWhereUniqueInput[]
    update?: citiesUpdateWithWhereUniqueWithoutProvincesInput | citiesUpdateWithWhereUniqueWithoutProvincesInput[]
    updateMany?: citiesUpdateManyWithWhereWithoutProvincesInput | citiesUpdateManyWithWhereWithoutProvincesInput[]
    deleteMany?: citiesScalarWhereInput | citiesScalarWhereInput[]
  }

  export type addressesUncheckedUpdateManyWithoutProvincesNestedInput = {
    create?: XOR<addressesCreateWithoutProvincesInput, addressesUncheckedCreateWithoutProvincesInput> | addressesCreateWithoutProvincesInput[] | addressesUncheckedCreateWithoutProvincesInput[]
    connectOrCreate?: addressesCreateOrConnectWithoutProvincesInput | addressesCreateOrConnectWithoutProvincesInput[]
    upsert?: addressesUpsertWithWhereUniqueWithoutProvincesInput | addressesUpsertWithWhereUniqueWithoutProvincesInput[]
    createMany?: addressesCreateManyProvincesInputEnvelope
    set?: addressesWhereUniqueInput | addressesWhereUniqueInput[]
    disconnect?: addressesWhereUniqueInput | addressesWhereUniqueInput[]
    delete?: addressesWhereUniqueInput | addressesWhereUniqueInput[]
    connect?: addressesWhereUniqueInput | addressesWhereUniqueInput[]
    update?: addressesUpdateWithWhereUniqueWithoutProvincesInput | addressesUpdateWithWhereUniqueWithoutProvincesInput[]
    updateMany?: addressesUpdateManyWithWhereWithoutProvincesInput | addressesUpdateManyWithWhereWithoutProvincesInput[]
    deleteMany?: addressesScalarWhereInput | addressesScalarWhereInput[]
  }

  export type citiesUncheckedUpdateManyWithoutProvincesNestedInput = {
    create?: XOR<citiesCreateWithoutProvincesInput, citiesUncheckedCreateWithoutProvincesInput> | citiesCreateWithoutProvincesInput[] | citiesUncheckedCreateWithoutProvincesInput[]
    connectOrCreate?: citiesCreateOrConnectWithoutProvincesInput | citiesCreateOrConnectWithoutProvincesInput[]
    upsert?: citiesUpsertWithWhereUniqueWithoutProvincesInput | citiesUpsertWithWhereUniqueWithoutProvincesInput[]
    createMany?: citiesCreateManyProvincesInputEnvelope
    set?: citiesWhereUniqueInput | citiesWhereUniqueInput[]
    disconnect?: citiesWhereUniqueInput | citiesWhereUniqueInput[]
    delete?: citiesWhereUniqueInput | citiesWhereUniqueInput[]
    connect?: citiesWhereUniqueInput | citiesWhereUniqueInput[]
    update?: citiesUpdateWithWhereUniqueWithoutProvincesInput | citiesUpdateWithWhereUniqueWithoutProvincesInput[]
    updateMany?: citiesUpdateManyWithWhereWithoutProvincesInput | citiesUpdateManyWithWhereWithoutProvincesInput[]
    deleteMany?: citiesScalarWhereInput | citiesScalarWhereInput[]
  }

  export type addressesCreateNestedOneWithoutUser_addressInput = {
    create?: XOR<addressesCreateWithoutUser_addressInput, addressesUncheckedCreateWithoutUser_addressInput>
    connectOrCreate?: addressesCreateOrConnectWithoutUser_addressInput
    connect?: addressesWhereUniqueInput
  }

  export type usersCreateNestedOneWithoutUser_addressInput = {
    create?: XOR<usersCreateWithoutUser_addressInput, usersUncheckedCreateWithoutUser_addressInput>
    connectOrCreate?: usersCreateOrConnectWithoutUser_addressInput
    connect?: usersWhereUniqueInput
  }

  export type addressesUpdateOneRequiredWithoutUser_addressNestedInput = {
    create?: XOR<addressesCreateWithoutUser_addressInput, addressesUncheckedCreateWithoutUser_addressInput>
    connectOrCreate?: addressesCreateOrConnectWithoutUser_addressInput
    upsert?: addressesUpsertWithoutUser_addressInput
    connect?: addressesWhereUniqueInput
    update?: XOR<XOR<addressesUpdateToOneWithWhereWithoutUser_addressInput, addressesUpdateWithoutUser_addressInput>, addressesUncheckedUpdateWithoutUser_addressInput>
  }

  export type usersUpdateOneRequiredWithoutUser_addressNestedInput = {
    create?: XOR<usersCreateWithoutUser_addressInput, usersUncheckedCreateWithoutUser_addressInput>
    connectOrCreate?: usersCreateOrConnectWithoutUser_addressInput
    upsert?: usersUpsertWithoutUser_addressInput
    connect?: usersWhereUniqueInput
    update?: XOR<XOR<usersUpdateToOneWithWhereWithoutUser_addressInput, usersUpdateWithoutUser_addressInput>, usersUncheckedUpdateWithoutUser_addressInput>
  }

  export type profession_userCreateNestedManyWithoutUsersInput = {
    create?: XOR<profession_userCreateWithoutUsersInput, profession_userUncheckedCreateWithoutUsersInput> | profession_userCreateWithoutUsersInput[] | profession_userUncheckedCreateWithoutUsersInput[]
    connectOrCreate?: profession_userCreateOrConnectWithoutUsersInput | profession_userCreateOrConnectWithoutUsersInput[]
    createMany?: profession_userCreateManyUsersInputEnvelope
    connect?: profession_userWhereUniqueInput | profession_userWhereUniqueInput[]
  }

  export type user_addressCreateNestedManyWithoutUsersInput = {
    create?: XOR<user_addressCreateWithoutUsersInput, user_addressUncheckedCreateWithoutUsersInput> | user_addressCreateWithoutUsersInput[] | user_addressUncheckedCreateWithoutUsersInput[]
    connectOrCreate?: user_addressCreateOrConnectWithoutUsersInput | user_addressCreateOrConnectWithoutUsersInput[]
    createMany?: user_addressCreateManyUsersInputEnvelope
    connect?: user_addressWhereUniqueInput | user_addressWhereUniqueInput[]
  }

  export type profession_userUncheckedCreateNestedManyWithoutUsersInput = {
    create?: XOR<profession_userCreateWithoutUsersInput, profession_userUncheckedCreateWithoutUsersInput> | profession_userCreateWithoutUsersInput[] | profession_userUncheckedCreateWithoutUsersInput[]
    connectOrCreate?: profession_userCreateOrConnectWithoutUsersInput | profession_userCreateOrConnectWithoutUsersInput[]
    createMany?: profession_userCreateManyUsersInputEnvelope
    connect?: profession_userWhereUniqueInput | profession_userWhereUniqueInput[]
  }

  export type user_addressUncheckedCreateNestedManyWithoutUsersInput = {
    create?: XOR<user_addressCreateWithoutUsersInput, user_addressUncheckedCreateWithoutUsersInput> | user_addressCreateWithoutUsersInput[] | user_addressUncheckedCreateWithoutUsersInput[]
    connectOrCreate?: user_addressCreateOrConnectWithoutUsersInput | user_addressCreateOrConnectWithoutUsersInput[]
    createMany?: user_addressCreateManyUsersInputEnvelope
    connect?: user_addressWhereUniqueInput | user_addressWhereUniqueInput[]
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type NullableEnumgender_enumFieldUpdateOperationsInput = {
    set?: $Enums.gender_enum | null
  }

  export type NullableBytesFieldUpdateOperationsInput = {
    set?: Uint8Array | null
  }

  export type NullableEnumstatus_user_enumFieldUpdateOperationsInput = {
    set?: $Enums.status_user_enum | null
  }

  export type profession_userUpdateManyWithoutUsersNestedInput = {
    create?: XOR<profession_userCreateWithoutUsersInput, profession_userUncheckedCreateWithoutUsersInput> | profession_userCreateWithoutUsersInput[] | profession_userUncheckedCreateWithoutUsersInput[]
    connectOrCreate?: profession_userCreateOrConnectWithoutUsersInput | profession_userCreateOrConnectWithoutUsersInput[]
    upsert?: profession_userUpsertWithWhereUniqueWithoutUsersInput | profession_userUpsertWithWhereUniqueWithoutUsersInput[]
    createMany?: profession_userCreateManyUsersInputEnvelope
    set?: profession_userWhereUniqueInput | profession_userWhereUniqueInput[]
    disconnect?: profession_userWhereUniqueInput | profession_userWhereUniqueInput[]
    delete?: profession_userWhereUniqueInput | profession_userWhereUniqueInput[]
    connect?: profession_userWhereUniqueInput | profession_userWhereUniqueInput[]
    update?: profession_userUpdateWithWhereUniqueWithoutUsersInput | profession_userUpdateWithWhereUniqueWithoutUsersInput[]
    updateMany?: profession_userUpdateManyWithWhereWithoutUsersInput | profession_userUpdateManyWithWhereWithoutUsersInput[]
    deleteMany?: profession_userScalarWhereInput | profession_userScalarWhereInput[]
  }

  export type user_addressUpdateManyWithoutUsersNestedInput = {
    create?: XOR<user_addressCreateWithoutUsersInput, user_addressUncheckedCreateWithoutUsersInput> | user_addressCreateWithoutUsersInput[] | user_addressUncheckedCreateWithoutUsersInput[]
    connectOrCreate?: user_addressCreateOrConnectWithoutUsersInput | user_addressCreateOrConnectWithoutUsersInput[]
    upsert?: user_addressUpsertWithWhereUniqueWithoutUsersInput | user_addressUpsertWithWhereUniqueWithoutUsersInput[]
    createMany?: user_addressCreateManyUsersInputEnvelope
    set?: user_addressWhereUniqueInput | user_addressWhereUniqueInput[]
    disconnect?: user_addressWhereUniqueInput | user_addressWhereUniqueInput[]
    delete?: user_addressWhereUniqueInput | user_addressWhereUniqueInput[]
    connect?: user_addressWhereUniqueInput | user_addressWhereUniqueInput[]
    update?: user_addressUpdateWithWhereUniqueWithoutUsersInput | user_addressUpdateWithWhereUniqueWithoutUsersInput[]
    updateMany?: user_addressUpdateManyWithWhereWithoutUsersInput | user_addressUpdateManyWithWhereWithoutUsersInput[]
    deleteMany?: user_addressScalarWhereInput | user_addressScalarWhereInput[]
  }

  export type profession_userUncheckedUpdateManyWithoutUsersNestedInput = {
    create?: XOR<profession_userCreateWithoutUsersInput, profession_userUncheckedCreateWithoutUsersInput> | profession_userCreateWithoutUsersInput[] | profession_userUncheckedCreateWithoutUsersInput[]
    connectOrCreate?: profession_userCreateOrConnectWithoutUsersInput | profession_userCreateOrConnectWithoutUsersInput[]
    upsert?: profession_userUpsertWithWhereUniqueWithoutUsersInput | profession_userUpsertWithWhereUniqueWithoutUsersInput[]
    createMany?: profession_userCreateManyUsersInputEnvelope
    set?: profession_userWhereUniqueInput | profession_userWhereUniqueInput[]
    disconnect?: profession_userWhereUniqueInput | profession_userWhereUniqueInput[]
    delete?: profession_userWhereUniqueInput | profession_userWhereUniqueInput[]
    connect?: profession_userWhereUniqueInput | profession_userWhereUniqueInput[]
    update?: profession_userUpdateWithWhereUniqueWithoutUsersInput | profession_userUpdateWithWhereUniqueWithoutUsersInput[]
    updateMany?: profession_userUpdateManyWithWhereWithoutUsersInput | profession_userUpdateManyWithWhereWithoutUsersInput[]
    deleteMany?: profession_userScalarWhereInput | profession_userScalarWhereInput[]
  }

  export type user_addressUncheckedUpdateManyWithoutUsersNestedInput = {
    create?: XOR<user_addressCreateWithoutUsersInput, user_addressUncheckedCreateWithoutUsersInput> | user_addressCreateWithoutUsersInput[] | user_addressUncheckedCreateWithoutUsersInput[]
    connectOrCreate?: user_addressCreateOrConnectWithoutUsersInput | user_addressCreateOrConnectWithoutUsersInput[]
    upsert?: user_addressUpsertWithWhereUniqueWithoutUsersInput | user_addressUpsertWithWhereUniqueWithoutUsersInput[]
    createMany?: user_addressCreateManyUsersInputEnvelope
    set?: user_addressWhereUniqueInput | user_addressWhereUniqueInput[]
    disconnect?: user_addressWhereUniqueInput | user_addressWhereUniqueInput[]
    delete?: user_addressWhereUniqueInput | user_addressWhereUniqueInput[]
    connect?: user_addressWhereUniqueInput | user_addressWhereUniqueInput[]
    update?: user_addressUpdateWithWhereUniqueWithoutUsersInput | user_addressUpdateWithWhereUniqueWithoutUsersInput[]
    updateMany?: user_addressUpdateManyWithWhereWithoutUsersInput | user_addressUpdateManyWithWhereWithoutUsersInput[]
    deleteMany?: user_addressScalarWhereInput | user_addressScalarWhereInput[]
  }

  export type professionCreateNestedManyWithoutProfession_categoryInput = {
    create?: XOR<professionCreateWithoutProfession_categoryInput, professionUncheckedCreateWithoutProfession_categoryInput> | professionCreateWithoutProfession_categoryInput[] | professionUncheckedCreateWithoutProfession_categoryInput[]
    connectOrCreate?: professionCreateOrConnectWithoutProfession_categoryInput | professionCreateOrConnectWithoutProfession_categoryInput[]
    createMany?: professionCreateManyProfession_categoryInputEnvelope
    connect?: professionWhereUniqueInput | professionWhereUniqueInput[]
  }

  export type professionUncheckedCreateNestedManyWithoutProfession_categoryInput = {
    create?: XOR<professionCreateWithoutProfession_categoryInput, professionUncheckedCreateWithoutProfession_categoryInput> | professionCreateWithoutProfession_categoryInput[] | professionUncheckedCreateWithoutProfession_categoryInput[]
    connectOrCreate?: professionCreateOrConnectWithoutProfession_categoryInput | professionCreateOrConnectWithoutProfession_categoryInput[]
    createMany?: professionCreateManyProfession_categoryInputEnvelope
    connect?: professionWhereUniqueInput | professionWhereUniqueInput[]
  }

  export type professionUpdateManyWithoutProfession_categoryNestedInput = {
    create?: XOR<professionCreateWithoutProfession_categoryInput, professionUncheckedCreateWithoutProfession_categoryInput> | professionCreateWithoutProfession_categoryInput[] | professionUncheckedCreateWithoutProfession_categoryInput[]
    connectOrCreate?: professionCreateOrConnectWithoutProfession_categoryInput | professionCreateOrConnectWithoutProfession_categoryInput[]
    upsert?: professionUpsertWithWhereUniqueWithoutProfession_categoryInput | professionUpsertWithWhereUniqueWithoutProfession_categoryInput[]
    createMany?: professionCreateManyProfession_categoryInputEnvelope
    set?: professionWhereUniqueInput | professionWhereUniqueInput[]
    disconnect?: professionWhereUniqueInput | professionWhereUniqueInput[]
    delete?: professionWhereUniqueInput | professionWhereUniqueInput[]
    connect?: professionWhereUniqueInput | professionWhereUniqueInput[]
    update?: professionUpdateWithWhereUniqueWithoutProfession_categoryInput | professionUpdateWithWhereUniqueWithoutProfession_categoryInput[]
    updateMany?: professionUpdateManyWithWhereWithoutProfession_categoryInput | professionUpdateManyWithWhereWithoutProfession_categoryInput[]
    deleteMany?: professionScalarWhereInput | professionScalarWhereInput[]
  }

  export type professionUncheckedUpdateManyWithoutProfession_categoryNestedInput = {
    create?: XOR<professionCreateWithoutProfession_categoryInput, professionUncheckedCreateWithoutProfession_categoryInput> | professionCreateWithoutProfession_categoryInput[] | professionUncheckedCreateWithoutProfession_categoryInput[]
    connectOrCreate?: professionCreateOrConnectWithoutProfession_categoryInput | professionCreateOrConnectWithoutProfession_categoryInput[]
    upsert?: professionUpsertWithWhereUniqueWithoutProfession_categoryInput | professionUpsertWithWhereUniqueWithoutProfession_categoryInput[]
    createMany?: professionCreateManyProfession_categoryInputEnvelope
    set?: professionWhereUniqueInput | professionWhereUniqueInput[]
    disconnect?: professionWhereUniqueInput | professionWhereUniqueInput[]
    delete?: professionWhereUniqueInput | professionWhereUniqueInput[]
    connect?: professionWhereUniqueInput | professionWhereUniqueInput[]
    update?: professionUpdateWithWhereUniqueWithoutProfession_categoryInput | professionUpdateWithWhereUniqueWithoutProfession_categoryInput[]
    updateMany?: professionUpdateManyWithWhereWithoutProfession_categoryInput | professionUpdateManyWithWhereWithoutProfession_categoryInput[]
    deleteMany?: professionScalarWhereInput | professionScalarWhereInput[]
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedDecimalFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedDateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedDecimalWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalWithAggregatesFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedDecimalFilter<$PrismaModel>
    _sum?: NestedDecimalFilter<$PrismaModel>
    _min?: NestedDecimalFilter<$PrismaModel>
    _max?: NestedDecimalFilter<$PrismaModel>
  }

  export type NestedIntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type NestedFloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type NestedDateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedBigIntFilter<$PrismaModel = never> = {
    equals?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    in?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel>
    notIn?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel>
    lt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    lte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    not?: NestedBigIntFilter<$PrismaModel> | bigint | number
  }

  export type NestedBigIntNullableFilter<$PrismaModel = never> = {
    equals?: bigint | number | BigIntFieldRefInput<$PrismaModel> | null
    in?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel> | null
    notIn?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel> | null
    lt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    lte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    not?: NestedBigIntNullableFilter<$PrismaModel> | bigint | number | null
  }

  export type NestedBigIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    in?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel>
    notIn?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel>
    lt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    lte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    not?: NestedBigIntWithAggregatesFilter<$PrismaModel> | bigint | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedBigIntFilter<$PrismaModel>
    _min?: NestedBigIntFilter<$PrismaModel>
    _max?: NestedBigIntFilter<$PrismaModel>
  }

  export type NestedBigIntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: bigint | number | BigIntFieldRefInput<$PrismaModel> | null
    in?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel> | null
    notIn?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel> | null
    lt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    lte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    not?: NestedBigIntNullableWithAggregatesFilter<$PrismaModel> | bigint | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedBigIntNullableFilter<$PrismaModel>
    _min?: NestedBigIntNullableFilter<$PrismaModel>
    _max?: NestedBigIntNullableFilter<$PrismaModel>
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedEnumgender_enumNullableFilter<$PrismaModel = never> = {
    equals?: $Enums.gender_enum | Enumgender_enumFieldRefInput<$PrismaModel> | null
    in?: $Enums.gender_enum[] | ListEnumgender_enumFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.gender_enum[] | ListEnumgender_enumFieldRefInput<$PrismaModel> | null
    not?: NestedEnumgender_enumNullableFilter<$PrismaModel> | $Enums.gender_enum | null
  }

  export type NestedBytesNullableFilter<$PrismaModel = never> = {
    equals?: Uint8Array | BytesFieldRefInput<$PrismaModel> | null
    in?: Uint8Array[] | ListBytesFieldRefInput<$PrismaModel> | null
    notIn?: Uint8Array[] | ListBytesFieldRefInput<$PrismaModel> | null
    not?: NestedBytesNullableFilter<$PrismaModel> | Uint8Array | null
  }

  export type NestedEnumstatus_user_enumNullableFilter<$PrismaModel = never> = {
    equals?: $Enums.status_user_enum | Enumstatus_user_enumFieldRefInput<$PrismaModel> | null
    in?: $Enums.status_user_enum[] | ListEnumstatus_user_enumFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.status_user_enum[] | ListEnumstatus_user_enumFieldRefInput<$PrismaModel> | null
    not?: NestedEnumstatus_user_enumNullableFilter<$PrismaModel> | $Enums.status_user_enum | null
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedEnumgender_enumNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.gender_enum | Enumgender_enumFieldRefInput<$PrismaModel> | null
    in?: $Enums.gender_enum[] | ListEnumgender_enumFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.gender_enum[] | ListEnumgender_enumFieldRefInput<$PrismaModel> | null
    not?: NestedEnumgender_enumNullableWithAggregatesFilter<$PrismaModel> | $Enums.gender_enum | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedEnumgender_enumNullableFilter<$PrismaModel>
    _max?: NestedEnumgender_enumNullableFilter<$PrismaModel>
  }

  export type NestedBytesNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Uint8Array | BytesFieldRefInput<$PrismaModel> | null
    in?: Uint8Array[] | ListBytesFieldRefInput<$PrismaModel> | null
    notIn?: Uint8Array[] | ListBytesFieldRefInput<$PrismaModel> | null
    not?: NestedBytesNullableWithAggregatesFilter<$PrismaModel> | Uint8Array | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedBytesNullableFilter<$PrismaModel>
    _max?: NestedBytesNullableFilter<$PrismaModel>
  }

  export type NestedEnumstatus_user_enumNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.status_user_enum | Enumstatus_user_enumFieldRefInput<$PrismaModel> | null
    in?: $Enums.status_user_enum[] | ListEnumstatus_user_enumFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.status_user_enum[] | ListEnumstatus_user_enumFieldRefInput<$PrismaModel> | null
    not?: NestedEnumstatus_user_enumNullableWithAggregatesFilter<$PrismaModel> | $Enums.status_user_enum | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedEnumstatus_user_enumNullableFilter<$PrismaModel>
    _max?: NestedEnumstatus_user_enumNullableFilter<$PrismaModel>
  }

  export type citiesCreateWithoutAddressesInput = {
    nama_kota: string
    created_at?: Date | string | null
    updated_at?: Date | string | null
    provinces: provincesCreateNestedOneWithoutCitiesInput
  }

  export type citiesUncheckedCreateWithoutAddressesInput = {
    id_kota?: number
    nama_kota: string
    id_prov: number
    created_at?: Date | string | null
    updated_at?: Date | string | null
  }

  export type citiesCreateOrConnectWithoutAddressesInput = {
    where: citiesWhereUniqueInput
    create: XOR<citiesCreateWithoutAddressesInput, citiesUncheckedCreateWithoutAddressesInput>
  }

  export type provincesCreateWithoutAddressesInput = {
    nama_prov: string
    created_at?: Date | string | null
    updated_at?: Date | string | null
    cities?: citiesCreateNestedManyWithoutProvincesInput
  }

  export type provincesUncheckedCreateWithoutAddressesInput = {
    id_prov?: number
    nama_prov: string
    created_at?: Date | string | null
    updated_at?: Date | string | null
    cities?: citiesUncheckedCreateNestedManyWithoutProvincesInput
  }

  export type provincesCreateOrConnectWithoutAddressesInput = {
    where: provincesWhereUniqueInput
    create: XOR<provincesCreateWithoutAddressesInput, provincesUncheckedCreateWithoutAddressesInput>
  }

  export type user_addressCreateWithoutAddressesInput = {
    users: usersCreateNestedOneWithoutUser_addressInput
  }

  export type user_addressUncheckedCreateWithoutAddressesInput = {
    id_user: string
  }

  export type user_addressCreateOrConnectWithoutAddressesInput = {
    where: user_addressWhereUniqueInput
    create: XOR<user_addressCreateWithoutAddressesInput, user_addressUncheckedCreateWithoutAddressesInput>
  }

  export type user_addressCreateManyAddressesInputEnvelope = {
    data: user_addressCreateManyAddressesInput | user_addressCreateManyAddressesInput[]
    skipDuplicates?: boolean
  }

  export type citiesUpsertWithoutAddressesInput = {
    update: XOR<citiesUpdateWithoutAddressesInput, citiesUncheckedUpdateWithoutAddressesInput>
    create: XOR<citiesCreateWithoutAddressesInput, citiesUncheckedCreateWithoutAddressesInput>
    where?: citiesWhereInput
  }

  export type citiesUpdateToOneWithWhereWithoutAddressesInput = {
    where?: citiesWhereInput
    data: XOR<citiesUpdateWithoutAddressesInput, citiesUncheckedUpdateWithoutAddressesInput>
  }

  export type citiesUpdateWithoutAddressesInput = {
    nama_kota?: StringFieldUpdateOperationsInput | string
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    provinces?: provincesUpdateOneRequiredWithoutCitiesNestedInput
  }

  export type citiesUncheckedUpdateWithoutAddressesInput = {
    id_kota?: IntFieldUpdateOperationsInput | number
    nama_kota?: StringFieldUpdateOperationsInput | string
    id_prov?: IntFieldUpdateOperationsInput | number
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type provincesUpsertWithoutAddressesInput = {
    update: XOR<provincesUpdateWithoutAddressesInput, provincesUncheckedUpdateWithoutAddressesInput>
    create: XOR<provincesCreateWithoutAddressesInput, provincesUncheckedCreateWithoutAddressesInput>
    where?: provincesWhereInput
  }

  export type provincesUpdateToOneWithWhereWithoutAddressesInput = {
    where?: provincesWhereInput
    data: XOR<provincesUpdateWithoutAddressesInput, provincesUncheckedUpdateWithoutAddressesInput>
  }

  export type provincesUpdateWithoutAddressesInput = {
    nama_prov?: StringFieldUpdateOperationsInput | string
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    cities?: citiesUpdateManyWithoutProvincesNestedInput
  }

  export type provincesUncheckedUpdateWithoutAddressesInput = {
    id_prov?: IntFieldUpdateOperationsInput | number
    nama_prov?: StringFieldUpdateOperationsInput | string
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    cities?: citiesUncheckedUpdateManyWithoutProvincesNestedInput
  }

  export type user_addressUpsertWithWhereUniqueWithoutAddressesInput = {
    where: user_addressWhereUniqueInput
    update: XOR<user_addressUpdateWithoutAddressesInput, user_addressUncheckedUpdateWithoutAddressesInput>
    create: XOR<user_addressCreateWithoutAddressesInput, user_addressUncheckedCreateWithoutAddressesInput>
  }

  export type user_addressUpdateWithWhereUniqueWithoutAddressesInput = {
    where: user_addressWhereUniqueInput
    data: XOR<user_addressUpdateWithoutAddressesInput, user_addressUncheckedUpdateWithoutAddressesInput>
  }

  export type user_addressUpdateManyWithWhereWithoutAddressesInput = {
    where: user_addressScalarWhereInput
    data: XOR<user_addressUpdateManyMutationInput, user_addressUncheckedUpdateManyWithoutAddressesInput>
  }

  export type user_addressScalarWhereInput = {
    AND?: user_addressScalarWhereInput | user_addressScalarWhereInput[]
    OR?: user_addressScalarWhereInput[]
    NOT?: user_addressScalarWhereInput | user_addressScalarWhereInput[]
    id_user?: StringFilter<"user_address"> | string
    id_alamat?: StringFilter<"user_address"> | string
  }

  export type addressesCreateWithoutCitiesInput = {
    id_alamat: string
    alamat: string
    latitude: Decimal | DecimalJsLike | number | string
    longitude: Decimal | DecimalJsLike | number | string
    created_at?: Date | string | null
    updated_at?: Date | string | null
    provinces?: provincesCreateNestedOneWithoutAddressesInput
    user_address?: user_addressCreateNestedManyWithoutAddressesInput
  }

  export type addressesUncheckedCreateWithoutCitiesInput = {
    id_alamat: string
    alamat: string
    latitude: Decimal | DecimalJsLike | number | string
    longitude: Decimal | DecimalJsLike | number | string
    id_prov?: number | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
    user_address?: user_addressUncheckedCreateNestedManyWithoutAddressesInput
  }

  export type addressesCreateOrConnectWithoutCitiesInput = {
    where: addressesWhereUniqueInput
    create: XOR<addressesCreateWithoutCitiesInput, addressesUncheckedCreateWithoutCitiesInput>
  }

  export type addressesCreateManyCitiesInputEnvelope = {
    data: addressesCreateManyCitiesInput | addressesCreateManyCitiesInput[]
    skipDuplicates?: boolean
  }

  export type provincesCreateWithoutCitiesInput = {
    nama_prov: string
    created_at?: Date | string | null
    updated_at?: Date | string | null
    addresses?: addressesCreateNestedManyWithoutProvincesInput
  }

  export type provincesUncheckedCreateWithoutCitiesInput = {
    id_prov?: number
    nama_prov: string
    created_at?: Date | string | null
    updated_at?: Date | string | null
    addresses?: addressesUncheckedCreateNestedManyWithoutProvincesInput
  }

  export type provincesCreateOrConnectWithoutCitiesInput = {
    where: provincesWhereUniqueInput
    create: XOR<provincesCreateWithoutCitiesInput, provincesUncheckedCreateWithoutCitiesInput>
  }

  export type addressesUpsertWithWhereUniqueWithoutCitiesInput = {
    where: addressesWhereUniqueInput
    update: XOR<addressesUpdateWithoutCitiesInput, addressesUncheckedUpdateWithoutCitiesInput>
    create: XOR<addressesCreateWithoutCitiesInput, addressesUncheckedCreateWithoutCitiesInput>
  }

  export type addressesUpdateWithWhereUniqueWithoutCitiesInput = {
    where: addressesWhereUniqueInput
    data: XOR<addressesUpdateWithoutCitiesInput, addressesUncheckedUpdateWithoutCitiesInput>
  }

  export type addressesUpdateManyWithWhereWithoutCitiesInput = {
    where: addressesScalarWhereInput
    data: XOR<addressesUpdateManyMutationInput, addressesUncheckedUpdateManyWithoutCitiesInput>
  }

  export type addressesScalarWhereInput = {
    AND?: addressesScalarWhereInput | addressesScalarWhereInput[]
    OR?: addressesScalarWhereInput[]
    NOT?: addressesScalarWhereInput | addressesScalarWhereInput[]
    id_alamat?: StringFilter<"addresses"> | string
    alamat?: StringFilter<"addresses"> | string
    latitude?: DecimalFilter<"addresses"> | Decimal | DecimalJsLike | number | string
    longitude?: DecimalFilter<"addresses"> | Decimal | DecimalJsLike | number | string
    id_kota?: IntNullableFilter<"addresses"> | number | null
    id_prov?: IntNullableFilter<"addresses"> | number | null
    created_at?: DateTimeNullableFilter<"addresses"> | Date | string | null
    updated_at?: DateTimeNullableFilter<"addresses"> | Date | string | null
  }

  export type provincesUpsertWithoutCitiesInput = {
    update: XOR<provincesUpdateWithoutCitiesInput, provincesUncheckedUpdateWithoutCitiesInput>
    create: XOR<provincesCreateWithoutCitiesInput, provincesUncheckedCreateWithoutCitiesInput>
    where?: provincesWhereInput
  }

  export type provincesUpdateToOneWithWhereWithoutCitiesInput = {
    where?: provincesWhereInput
    data: XOR<provincesUpdateWithoutCitiesInput, provincesUncheckedUpdateWithoutCitiesInput>
  }

  export type provincesUpdateWithoutCitiesInput = {
    nama_prov?: StringFieldUpdateOperationsInput | string
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    addresses?: addressesUpdateManyWithoutProvincesNestedInput
  }

  export type provincesUncheckedUpdateWithoutCitiesInput = {
    id_prov?: IntFieldUpdateOperationsInput | number
    nama_prov?: StringFieldUpdateOperationsInput | string
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    addresses?: addressesUncheckedUpdateManyWithoutProvincesNestedInput
  }

  export type profession_categoryCreateWithoutProfessionInput = {
    id_prof_cat?: bigint | number
    profession_category?: string | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
  }

  export type profession_categoryUncheckedCreateWithoutProfessionInput = {
    id_prof_cat?: bigint | number
    profession_category?: string | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
  }

  export type profession_categoryCreateOrConnectWithoutProfessionInput = {
    where: profession_categoryWhereUniqueInput
    create: XOR<profession_categoryCreateWithoutProfessionInput, profession_categoryUncheckedCreateWithoutProfessionInput>
  }

  export type profession_userCreateWithoutProfessionInput = {
    users: usersCreateNestedOneWithoutProfession_userInput
  }

  export type profession_userUncheckedCreateWithoutProfessionInput = {
    id_user: string
  }

  export type profession_userCreateOrConnectWithoutProfessionInput = {
    where: profession_userWhereUniqueInput
    create: XOR<profession_userCreateWithoutProfessionInput, profession_userUncheckedCreateWithoutProfessionInput>
  }

  export type profession_userCreateManyProfessionInputEnvelope = {
    data: profession_userCreateManyProfessionInput | profession_userCreateManyProfessionInput[]
    skipDuplicates?: boolean
  }

  export type profession_categoryUpsertWithoutProfessionInput = {
    update: XOR<profession_categoryUpdateWithoutProfessionInput, profession_categoryUncheckedUpdateWithoutProfessionInput>
    create: XOR<profession_categoryCreateWithoutProfessionInput, profession_categoryUncheckedCreateWithoutProfessionInput>
    where?: profession_categoryWhereInput
  }

  export type profession_categoryUpdateToOneWithWhereWithoutProfessionInput = {
    where?: profession_categoryWhereInput
    data: XOR<profession_categoryUpdateWithoutProfessionInput, profession_categoryUncheckedUpdateWithoutProfessionInput>
  }

  export type profession_categoryUpdateWithoutProfessionInput = {
    id_prof_cat?: BigIntFieldUpdateOperationsInput | bigint | number
    profession_category?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type profession_categoryUncheckedUpdateWithoutProfessionInput = {
    id_prof_cat?: BigIntFieldUpdateOperationsInput | bigint | number
    profession_category?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type profession_userUpsertWithWhereUniqueWithoutProfessionInput = {
    where: profession_userWhereUniqueInput
    update: XOR<profession_userUpdateWithoutProfessionInput, profession_userUncheckedUpdateWithoutProfessionInput>
    create: XOR<profession_userCreateWithoutProfessionInput, profession_userUncheckedCreateWithoutProfessionInput>
  }

  export type profession_userUpdateWithWhereUniqueWithoutProfessionInput = {
    where: profession_userWhereUniqueInput
    data: XOR<profession_userUpdateWithoutProfessionInput, profession_userUncheckedUpdateWithoutProfessionInput>
  }

  export type profession_userUpdateManyWithWhereWithoutProfessionInput = {
    where: profession_userScalarWhereInput
    data: XOR<profession_userUpdateManyMutationInput, profession_userUncheckedUpdateManyWithoutProfessionInput>
  }

  export type profession_userScalarWhereInput = {
    AND?: profession_userScalarWhereInput | profession_userScalarWhereInput[]
    OR?: profession_userScalarWhereInput[]
    NOT?: profession_userScalarWhereInput | profession_userScalarWhereInput[]
    id_user?: StringFilter<"profession_user"> | string
    id_profesi?: BigIntFilter<"profession_user"> | bigint | number
  }

  export type professionCreateWithoutProfession_userInput = {
    id_profesi?: bigint | number
    profession: string
    created_at?: Date | string | null
    updated_at?: Date | string | null
    profession_category?: profession_categoryCreateNestedOneWithoutProfessionInput
  }

  export type professionUncheckedCreateWithoutProfession_userInput = {
    id_profesi?: bigint | number
    profession: string
    created_at?: Date | string | null
    updated_at?: Date | string | null
    id_prof_cat?: bigint | number | null
  }

  export type professionCreateOrConnectWithoutProfession_userInput = {
    where: professionWhereUniqueInput
    create: XOR<professionCreateWithoutProfession_userInput, professionUncheckedCreateWithoutProfession_userInput>
  }

  export type usersCreateWithoutProfession_userInput = {
    id_user: string
    username?: string | null
    nama?: string | null
    email: string
    sandi: string
    gender?: $Enums.gender_enum | null
    birth_date?: Date | string | null
    foto?: Uint8Array | null
    bio?: string | null
    status_user?: $Enums.status_user_enum | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
    user_address?: user_addressCreateNestedManyWithoutUsersInput
  }

  export type usersUncheckedCreateWithoutProfession_userInput = {
    id_user: string
    username?: string | null
    nama?: string | null
    email: string
    sandi: string
    gender?: $Enums.gender_enum | null
    birth_date?: Date | string | null
    foto?: Uint8Array | null
    bio?: string | null
    status_user?: $Enums.status_user_enum | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
    user_address?: user_addressUncheckedCreateNestedManyWithoutUsersInput
  }

  export type usersCreateOrConnectWithoutProfession_userInput = {
    where: usersWhereUniqueInput
    create: XOR<usersCreateWithoutProfession_userInput, usersUncheckedCreateWithoutProfession_userInput>
  }

  export type professionUpsertWithoutProfession_userInput = {
    update: XOR<professionUpdateWithoutProfession_userInput, professionUncheckedUpdateWithoutProfession_userInput>
    create: XOR<professionCreateWithoutProfession_userInput, professionUncheckedCreateWithoutProfession_userInput>
    where?: professionWhereInput
  }

  export type professionUpdateToOneWithWhereWithoutProfession_userInput = {
    where?: professionWhereInput
    data: XOR<professionUpdateWithoutProfession_userInput, professionUncheckedUpdateWithoutProfession_userInput>
  }

  export type professionUpdateWithoutProfession_userInput = {
    id_profesi?: BigIntFieldUpdateOperationsInput | bigint | number
    profession?: StringFieldUpdateOperationsInput | string
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    profession_category?: profession_categoryUpdateOneWithoutProfessionNestedInput
  }

  export type professionUncheckedUpdateWithoutProfession_userInput = {
    id_profesi?: BigIntFieldUpdateOperationsInput | bigint | number
    profession?: StringFieldUpdateOperationsInput | string
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    id_prof_cat?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
  }

  export type usersUpsertWithoutProfession_userInput = {
    update: XOR<usersUpdateWithoutProfession_userInput, usersUncheckedUpdateWithoutProfession_userInput>
    create: XOR<usersCreateWithoutProfession_userInput, usersUncheckedCreateWithoutProfession_userInput>
    where?: usersWhereInput
  }

  export type usersUpdateToOneWithWhereWithoutProfession_userInput = {
    where?: usersWhereInput
    data: XOR<usersUpdateWithoutProfession_userInput, usersUncheckedUpdateWithoutProfession_userInput>
  }

  export type usersUpdateWithoutProfession_userInput = {
    id_user?: StringFieldUpdateOperationsInput | string
    username?: NullableStringFieldUpdateOperationsInput | string | null
    nama?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    sandi?: StringFieldUpdateOperationsInput | string
    gender?: NullableEnumgender_enumFieldUpdateOperationsInput | $Enums.gender_enum | null
    birth_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    foto?: NullableBytesFieldUpdateOperationsInput | Uint8Array | null
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    status_user?: NullableEnumstatus_user_enumFieldUpdateOperationsInput | $Enums.status_user_enum | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    user_address?: user_addressUpdateManyWithoutUsersNestedInput
  }

  export type usersUncheckedUpdateWithoutProfession_userInput = {
    id_user?: StringFieldUpdateOperationsInput | string
    username?: NullableStringFieldUpdateOperationsInput | string | null
    nama?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    sandi?: StringFieldUpdateOperationsInput | string
    gender?: NullableEnumgender_enumFieldUpdateOperationsInput | $Enums.gender_enum | null
    birth_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    foto?: NullableBytesFieldUpdateOperationsInput | Uint8Array | null
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    status_user?: NullableEnumstatus_user_enumFieldUpdateOperationsInput | $Enums.status_user_enum | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    user_address?: user_addressUncheckedUpdateManyWithoutUsersNestedInput
  }

  export type addressesCreateWithoutProvincesInput = {
    id_alamat: string
    alamat: string
    latitude: Decimal | DecimalJsLike | number | string
    longitude: Decimal | DecimalJsLike | number | string
    created_at?: Date | string | null
    updated_at?: Date | string | null
    cities?: citiesCreateNestedOneWithoutAddressesInput
    user_address?: user_addressCreateNestedManyWithoutAddressesInput
  }

  export type addressesUncheckedCreateWithoutProvincesInput = {
    id_alamat: string
    alamat: string
    latitude: Decimal | DecimalJsLike | number | string
    longitude: Decimal | DecimalJsLike | number | string
    id_kota?: number | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
    user_address?: user_addressUncheckedCreateNestedManyWithoutAddressesInput
  }

  export type addressesCreateOrConnectWithoutProvincesInput = {
    where: addressesWhereUniqueInput
    create: XOR<addressesCreateWithoutProvincesInput, addressesUncheckedCreateWithoutProvincesInput>
  }

  export type addressesCreateManyProvincesInputEnvelope = {
    data: addressesCreateManyProvincesInput | addressesCreateManyProvincesInput[]
    skipDuplicates?: boolean
  }

  export type citiesCreateWithoutProvincesInput = {
    nama_kota: string
    created_at?: Date | string | null
    updated_at?: Date | string | null
    addresses?: addressesCreateNestedManyWithoutCitiesInput
  }

  export type citiesUncheckedCreateWithoutProvincesInput = {
    id_kota?: number
    nama_kota: string
    created_at?: Date | string | null
    updated_at?: Date | string | null
    addresses?: addressesUncheckedCreateNestedManyWithoutCitiesInput
  }

  export type citiesCreateOrConnectWithoutProvincesInput = {
    where: citiesWhereUniqueInput
    create: XOR<citiesCreateWithoutProvincesInput, citiesUncheckedCreateWithoutProvincesInput>
  }

  export type citiesCreateManyProvincesInputEnvelope = {
    data: citiesCreateManyProvincesInput | citiesCreateManyProvincesInput[]
    skipDuplicates?: boolean
  }

  export type addressesUpsertWithWhereUniqueWithoutProvincesInput = {
    where: addressesWhereUniqueInput
    update: XOR<addressesUpdateWithoutProvincesInput, addressesUncheckedUpdateWithoutProvincesInput>
    create: XOR<addressesCreateWithoutProvincesInput, addressesUncheckedCreateWithoutProvincesInput>
  }

  export type addressesUpdateWithWhereUniqueWithoutProvincesInput = {
    where: addressesWhereUniqueInput
    data: XOR<addressesUpdateWithoutProvincesInput, addressesUncheckedUpdateWithoutProvincesInput>
  }

  export type addressesUpdateManyWithWhereWithoutProvincesInput = {
    where: addressesScalarWhereInput
    data: XOR<addressesUpdateManyMutationInput, addressesUncheckedUpdateManyWithoutProvincesInput>
  }

  export type citiesUpsertWithWhereUniqueWithoutProvincesInput = {
    where: citiesWhereUniqueInput
    update: XOR<citiesUpdateWithoutProvincesInput, citiesUncheckedUpdateWithoutProvincesInput>
    create: XOR<citiesCreateWithoutProvincesInput, citiesUncheckedCreateWithoutProvincesInput>
  }

  export type citiesUpdateWithWhereUniqueWithoutProvincesInput = {
    where: citiesWhereUniqueInput
    data: XOR<citiesUpdateWithoutProvincesInput, citiesUncheckedUpdateWithoutProvincesInput>
  }

  export type citiesUpdateManyWithWhereWithoutProvincesInput = {
    where: citiesScalarWhereInput
    data: XOR<citiesUpdateManyMutationInput, citiesUncheckedUpdateManyWithoutProvincesInput>
  }

  export type citiesScalarWhereInput = {
    AND?: citiesScalarWhereInput | citiesScalarWhereInput[]
    OR?: citiesScalarWhereInput[]
    NOT?: citiesScalarWhereInput | citiesScalarWhereInput[]
    id_kota?: IntFilter<"cities"> | number
    nama_kota?: StringFilter<"cities"> | string
    id_prov?: IntFilter<"cities"> | number
    created_at?: DateTimeNullableFilter<"cities"> | Date | string | null
    updated_at?: DateTimeNullableFilter<"cities"> | Date | string | null
  }

  export type addressesCreateWithoutUser_addressInput = {
    id_alamat: string
    alamat: string
    latitude: Decimal | DecimalJsLike | number | string
    longitude: Decimal | DecimalJsLike | number | string
    created_at?: Date | string | null
    updated_at?: Date | string | null
    cities?: citiesCreateNestedOneWithoutAddressesInput
    provinces?: provincesCreateNestedOneWithoutAddressesInput
  }

  export type addressesUncheckedCreateWithoutUser_addressInput = {
    id_alamat: string
    alamat: string
    latitude: Decimal | DecimalJsLike | number | string
    longitude: Decimal | DecimalJsLike | number | string
    id_kota?: number | null
    id_prov?: number | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
  }

  export type addressesCreateOrConnectWithoutUser_addressInput = {
    where: addressesWhereUniqueInput
    create: XOR<addressesCreateWithoutUser_addressInput, addressesUncheckedCreateWithoutUser_addressInput>
  }

  export type usersCreateWithoutUser_addressInput = {
    id_user: string
    username?: string | null
    nama?: string | null
    email: string
    sandi: string
    gender?: $Enums.gender_enum | null
    birth_date?: Date | string | null
    foto?: Uint8Array | null
    bio?: string | null
    status_user?: $Enums.status_user_enum | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
    profession_user?: profession_userCreateNestedManyWithoutUsersInput
  }

  export type usersUncheckedCreateWithoutUser_addressInput = {
    id_user: string
    username?: string | null
    nama?: string | null
    email: string
    sandi: string
    gender?: $Enums.gender_enum | null
    birth_date?: Date | string | null
    foto?: Uint8Array | null
    bio?: string | null
    status_user?: $Enums.status_user_enum | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
    profession_user?: profession_userUncheckedCreateNestedManyWithoutUsersInput
  }

  export type usersCreateOrConnectWithoutUser_addressInput = {
    where: usersWhereUniqueInput
    create: XOR<usersCreateWithoutUser_addressInput, usersUncheckedCreateWithoutUser_addressInput>
  }

  export type addressesUpsertWithoutUser_addressInput = {
    update: XOR<addressesUpdateWithoutUser_addressInput, addressesUncheckedUpdateWithoutUser_addressInput>
    create: XOR<addressesCreateWithoutUser_addressInput, addressesUncheckedCreateWithoutUser_addressInput>
    where?: addressesWhereInput
  }

  export type addressesUpdateToOneWithWhereWithoutUser_addressInput = {
    where?: addressesWhereInput
    data: XOR<addressesUpdateWithoutUser_addressInput, addressesUncheckedUpdateWithoutUser_addressInput>
  }

  export type addressesUpdateWithoutUser_addressInput = {
    id_alamat?: StringFieldUpdateOperationsInput | string
    alamat?: StringFieldUpdateOperationsInput | string
    latitude?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    longitude?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    cities?: citiesUpdateOneWithoutAddressesNestedInput
    provinces?: provincesUpdateOneWithoutAddressesNestedInput
  }

  export type addressesUncheckedUpdateWithoutUser_addressInput = {
    id_alamat?: StringFieldUpdateOperationsInput | string
    alamat?: StringFieldUpdateOperationsInput | string
    latitude?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    longitude?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    id_kota?: NullableIntFieldUpdateOperationsInput | number | null
    id_prov?: NullableIntFieldUpdateOperationsInput | number | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type usersUpsertWithoutUser_addressInput = {
    update: XOR<usersUpdateWithoutUser_addressInput, usersUncheckedUpdateWithoutUser_addressInput>
    create: XOR<usersCreateWithoutUser_addressInput, usersUncheckedCreateWithoutUser_addressInput>
    where?: usersWhereInput
  }

  export type usersUpdateToOneWithWhereWithoutUser_addressInput = {
    where?: usersWhereInput
    data: XOR<usersUpdateWithoutUser_addressInput, usersUncheckedUpdateWithoutUser_addressInput>
  }

  export type usersUpdateWithoutUser_addressInput = {
    id_user?: StringFieldUpdateOperationsInput | string
    username?: NullableStringFieldUpdateOperationsInput | string | null
    nama?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    sandi?: StringFieldUpdateOperationsInput | string
    gender?: NullableEnumgender_enumFieldUpdateOperationsInput | $Enums.gender_enum | null
    birth_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    foto?: NullableBytesFieldUpdateOperationsInput | Uint8Array | null
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    status_user?: NullableEnumstatus_user_enumFieldUpdateOperationsInput | $Enums.status_user_enum | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    profession_user?: profession_userUpdateManyWithoutUsersNestedInput
  }

  export type usersUncheckedUpdateWithoutUser_addressInput = {
    id_user?: StringFieldUpdateOperationsInput | string
    username?: NullableStringFieldUpdateOperationsInput | string | null
    nama?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    sandi?: StringFieldUpdateOperationsInput | string
    gender?: NullableEnumgender_enumFieldUpdateOperationsInput | $Enums.gender_enum | null
    birth_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    foto?: NullableBytesFieldUpdateOperationsInput | Uint8Array | null
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    status_user?: NullableEnumstatus_user_enumFieldUpdateOperationsInput | $Enums.status_user_enum | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    profession_user?: profession_userUncheckedUpdateManyWithoutUsersNestedInput
  }

  export type profession_userCreateWithoutUsersInput = {
    profession: professionCreateNestedOneWithoutProfession_userInput
  }

  export type profession_userUncheckedCreateWithoutUsersInput = {
    id_profesi: bigint | number
  }

  export type profession_userCreateOrConnectWithoutUsersInput = {
    where: profession_userWhereUniqueInput
    create: XOR<profession_userCreateWithoutUsersInput, profession_userUncheckedCreateWithoutUsersInput>
  }

  export type profession_userCreateManyUsersInputEnvelope = {
    data: profession_userCreateManyUsersInput | profession_userCreateManyUsersInput[]
    skipDuplicates?: boolean
  }

  export type user_addressCreateWithoutUsersInput = {
    addresses: addressesCreateNestedOneWithoutUser_addressInput
  }

  export type user_addressUncheckedCreateWithoutUsersInput = {
    id_alamat: string
  }

  export type user_addressCreateOrConnectWithoutUsersInput = {
    where: user_addressWhereUniqueInput
    create: XOR<user_addressCreateWithoutUsersInput, user_addressUncheckedCreateWithoutUsersInput>
  }

  export type user_addressCreateManyUsersInputEnvelope = {
    data: user_addressCreateManyUsersInput | user_addressCreateManyUsersInput[]
    skipDuplicates?: boolean
  }

  export type profession_userUpsertWithWhereUniqueWithoutUsersInput = {
    where: profession_userWhereUniqueInput
    update: XOR<profession_userUpdateWithoutUsersInput, profession_userUncheckedUpdateWithoutUsersInput>
    create: XOR<profession_userCreateWithoutUsersInput, profession_userUncheckedCreateWithoutUsersInput>
  }

  export type profession_userUpdateWithWhereUniqueWithoutUsersInput = {
    where: profession_userWhereUniqueInput
    data: XOR<profession_userUpdateWithoutUsersInput, profession_userUncheckedUpdateWithoutUsersInput>
  }

  export type profession_userUpdateManyWithWhereWithoutUsersInput = {
    where: profession_userScalarWhereInput
    data: XOR<profession_userUpdateManyMutationInput, profession_userUncheckedUpdateManyWithoutUsersInput>
  }

  export type user_addressUpsertWithWhereUniqueWithoutUsersInput = {
    where: user_addressWhereUniqueInput
    update: XOR<user_addressUpdateWithoutUsersInput, user_addressUncheckedUpdateWithoutUsersInput>
    create: XOR<user_addressCreateWithoutUsersInput, user_addressUncheckedCreateWithoutUsersInput>
  }

  export type user_addressUpdateWithWhereUniqueWithoutUsersInput = {
    where: user_addressWhereUniqueInput
    data: XOR<user_addressUpdateWithoutUsersInput, user_addressUncheckedUpdateWithoutUsersInput>
  }

  export type user_addressUpdateManyWithWhereWithoutUsersInput = {
    where: user_addressScalarWhereInput
    data: XOR<user_addressUpdateManyMutationInput, user_addressUncheckedUpdateManyWithoutUsersInput>
  }

  export type professionCreateWithoutProfession_categoryInput = {
    id_profesi?: bigint | number
    profession: string
    created_at?: Date | string | null
    updated_at?: Date | string | null
    profession_user?: profession_userCreateNestedManyWithoutProfessionInput
  }

  export type professionUncheckedCreateWithoutProfession_categoryInput = {
    id_profesi?: bigint | number
    profession: string
    created_at?: Date | string | null
    updated_at?: Date | string | null
    profession_user?: profession_userUncheckedCreateNestedManyWithoutProfessionInput
  }

  export type professionCreateOrConnectWithoutProfession_categoryInput = {
    where: professionWhereUniqueInput
    create: XOR<professionCreateWithoutProfession_categoryInput, professionUncheckedCreateWithoutProfession_categoryInput>
  }

  export type professionCreateManyProfession_categoryInputEnvelope = {
    data: professionCreateManyProfession_categoryInput | professionCreateManyProfession_categoryInput[]
    skipDuplicates?: boolean
  }

  export type professionUpsertWithWhereUniqueWithoutProfession_categoryInput = {
    where: professionWhereUniqueInput
    update: XOR<professionUpdateWithoutProfession_categoryInput, professionUncheckedUpdateWithoutProfession_categoryInput>
    create: XOR<professionCreateWithoutProfession_categoryInput, professionUncheckedCreateWithoutProfession_categoryInput>
  }

  export type professionUpdateWithWhereUniqueWithoutProfession_categoryInput = {
    where: professionWhereUniqueInput
    data: XOR<professionUpdateWithoutProfession_categoryInput, professionUncheckedUpdateWithoutProfession_categoryInput>
  }

  export type professionUpdateManyWithWhereWithoutProfession_categoryInput = {
    where: professionScalarWhereInput
    data: XOR<professionUpdateManyMutationInput, professionUncheckedUpdateManyWithoutProfession_categoryInput>
  }

  export type professionScalarWhereInput = {
    AND?: professionScalarWhereInput | professionScalarWhereInput[]
    OR?: professionScalarWhereInput[]
    NOT?: professionScalarWhereInput | professionScalarWhereInput[]
    id_profesi?: BigIntFilter<"profession"> | bigint | number
    profession?: StringFilter<"profession"> | string
    created_at?: DateTimeNullableFilter<"profession"> | Date | string | null
    updated_at?: DateTimeNullableFilter<"profession"> | Date | string | null
    id_prof_cat?: BigIntNullableFilter<"profession"> | bigint | number | null
  }

  export type user_addressCreateManyAddressesInput = {
    id_user: string
  }

  export type user_addressUpdateWithoutAddressesInput = {
    users?: usersUpdateOneRequiredWithoutUser_addressNestedInput
  }

  export type user_addressUncheckedUpdateWithoutAddressesInput = {
    id_user?: StringFieldUpdateOperationsInput | string
  }

  export type user_addressUncheckedUpdateManyWithoutAddressesInput = {
    id_user?: StringFieldUpdateOperationsInput | string
  }

  export type addressesCreateManyCitiesInput = {
    id_alamat: string
    alamat: string
    latitude: Decimal | DecimalJsLike | number | string
    longitude: Decimal | DecimalJsLike | number | string
    id_prov?: number | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
  }

  export type addressesUpdateWithoutCitiesInput = {
    id_alamat?: StringFieldUpdateOperationsInput | string
    alamat?: StringFieldUpdateOperationsInput | string
    latitude?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    longitude?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    provinces?: provincesUpdateOneWithoutAddressesNestedInput
    user_address?: user_addressUpdateManyWithoutAddressesNestedInput
  }

  export type addressesUncheckedUpdateWithoutCitiesInput = {
    id_alamat?: StringFieldUpdateOperationsInput | string
    alamat?: StringFieldUpdateOperationsInput | string
    latitude?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    longitude?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    id_prov?: NullableIntFieldUpdateOperationsInput | number | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    user_address?: user_addressUncheckedUpdateManyWithoutAddressesNestedInput
  }

  export type addressesUncheckedUpdateManyWithoutCitiesInput = {
    id_alamat?: StringFieldUpdateOperationsInput | string
    alamat?: StringFieldUpdateOperationsInput | string
    latitude?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    longitude?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    id_prov?: NullableIntFieldUpdateOperationsInput | number | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type profession_userCreateManyProfessionInput = {
    id_user: string
  }

  export type profession_userUpdateWithoutProfessionInput = {
    users?: usersUpdateOneRequiredWithoutProfession_userNestedInput
  }

  export type profession_userUncheckedUpdateWithoutProfessionInput = {
    id_user?: StringFieldUpdateOperationsInput | string
  }

  export type profession_userUncheckedUpdateManyWithoutProfessionInput = {
    id_user?: StringFieldUpdateOperationsInput | string
  }

  export type addressesCreateManyProvincesInput = {
    id_alamat: string
    alamat: string
    latitude: Decimal | DecimalJsLike | number | string
    longitude: Decimal | DecimalJsLike | number | string
    id_kota?: number | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
  }

  export type citiesCreateManyProvincesInput = {
    id_kota?: number
    nama_kota: string
    created_at?: Date | string | null
    updated_at?: Date | string | null
  }

  export type addressesUpdateWithoutProvincesInput = {
    id_alamat?: StringFieldUpdateOperationsInput | string
    alamat?: StringFieldUpdateOperationsInput | string
    latitude?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    longitude?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    cities?: citiesUpdateOneWithoutAddressesNestedInput
    user_address?: user_addressUpdateManyWithoutAddressesNestedInput
  }

  export type addressesUncheckedUpdateWithoutProvincesInput = {
    id_alamat?: StringFieldUpdateOperationsInput | string
    alamat?: StringFieldUpdateOperationsInput | string
    latitude?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    longitude?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    id_kota?: NullableIntFieldUpdateOperationsInput | number | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    user_address?: user_addressUncheckedUpdateManyWithoutAddressesNestedInput
  }

  export type addressesUncheckedUpdateManyWithoutProvincesInput = {
    id_alamat?: StringFieldUpdateOperationsInput | string
    alamat?: StringFieldUpdateOperationsInput | string
    latitude?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    longitude?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    id_kota?: NullableIntFieldUpdateOperationsInput | number | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type citiesUpdateWithoutProvincesInput = {
    nama_kota?: StringFieldUpdateOperationsInput | string
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    addresses?: addressesUpdateManyWithoutCitiesNestedInput
  }

  export type citiesUncheckedUpdateWithoutProvincesInput = {
    id_kota?: IntFieldUpdateOperationsInput | number
    nama_kota?: StringFieldUpdateOperationsInput | string
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    addresses?: addressesUncheckedUpdateManyWithoutCitiesNestedInput
  }

  export type citiesUncheckedUpdateManyWithoutProvincesInput = {
    id_kota?: IntFieldUpdateOperationsInput | number
    nama_kota?: StringFieldUpdateOperationsInput | string
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type profession_userCreateManyUsersInput = {
    id_profesi: bigint | number
  }

  export type user_addressCreateManyUsersInput = {
    id_alamat: string
  }

  export type profession_userUpdateWithoutUsersInput = {
    profession?: professionUpdateOneRequiredWithoutProfession_userNestedInput
  }

  export type profession_userUncheckedUpdateWithoutUsersInput = {
    id_profesi?: BigIntFieldUpdateOperationsInput | bigint | number
  }

  export type profession_userUncheckedUpdateManyWithoutUsersInput = {
    id_profesi?: BigIntFieldUpdateOperationsInput | bigint | number
  }

  export type user_addressUpdateWithoutUsersInput = {
    addresses?: addressesUpdateOneRequiredWithoutUser_addressNestedInput
  }

  export type user_addressUncheckedUpdateWithoutUsersInput = {
    id_alamat?: StringFieldUpdateOperationsInput | string
  }

  export type user_addressUncheckedUpdateManyWithoutUsersInput = {
    id_alamat?: StringFieldUpdateOperationsInput | string
  }

  export type professionCreateManyProfession_categoryInput = {
    id_profesi?: bigint | number
    profession: string
    created_at?: Date | string | null
    updated_at?: Date | string | null
  }

  export type professionUpdateWithoutProfession_categoryInput = {
    id_profesi?: BigIntFieldUpdateOperationsInput | bigint | number
    profession?: StringFieldUpdateOperationsInput | string
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    profession_user?: profession_userUpdateManyWithoutProfessionNestedInput
  }

  export type professionUncheckedUpdateWithoutProfession_categoryInput = {
    id_profesi?: BigIntFieldUpdateOperationsInput | bigint | number
    profession?: StringFieldUpdateOperationsInput | string
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    profession_user?: profession_userUncheckedUpdateManyWithoutProfessionNestedInput
  }

  export type professionUncheckedUpdateManyWithoutProfession_categoryInput = {
    id_profesi?: BigIntFieldUpdateOperationsInput | bigint | number
    profession?: StringFieldUpdateOperationsInput | string
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}