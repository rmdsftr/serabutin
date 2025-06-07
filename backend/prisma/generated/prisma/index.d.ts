
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
 * Model profession_detail
 * 
 */
export type profession_detail = $Result.DefaultSelection<Prisma.$profession_detailPayload>
/**
 * Model alamat
 * 
 */
export type alamat = $Result.DefaultSelection<Prisma.$alamatPayload>
/**
 * Model kecamatan
 * 
 */
export type kecamatan = $Result.DefaultSelection<Prisma.$kecamatanPayload>
/**
 * Model kelurahan
 * 
 */
export type kelurahan = $Result.DefaultSelection<Prisma.$kelurahanPayload>
/**
 * Model tipe_alamat
 * 
 */
export type tipe_alamat = $Result.DefaultSelection<Prisma.$tipe_alamatPayload>

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
 * // Fetch zero or more Cities
 * const cities = await prisma.cities.findMany()
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
   * // Fetch zero or more Cities
   * const cities = await prisma.cities.findMany()
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

  /**
   * `prisma.profession_detail`: Exposes CRUD operations for the **profession_detail** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Profession_details
    * const profession_details = await prisma.profession_detail.findMany()
    * ```
    */
  get profession_detail(): Prisma.profession_detailDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.alamat`: Exposes CRUD operations for the **alamat** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Alamats
    * const alamats = await prisma.alamat.findMany()
    * ```
    */
  get alamat(): Prisma.alamatDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.kecamatan`: Exposes CRUD operations for the **kecamatan** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Kecamatans
    * const kecamatans = await prisma.kecamatan.findMany()
    * ```
    */
  get kecamatan(): Prisma.kecamatanDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.kelurahan`: Exposes CRUD operations for the **kelurahan** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Kelurahans
    * const kelurahans = await prisma.kelurahan.findMany()
    * ```
    */
  get kelurahan(): Prisma.kelurahanDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.tipe_alamat`: Exposes CRUD operations for the **tipe_alamat** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Tipe_alamats
    * const tipe_alamats = await prisma.tipe_alamat.findMany()
    * ```
    */
  get tipe_alamat(): Prisma.tipe_alamatDelegate<ExtArgs, ClientOptions>;
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
   * Prisma Client JS version: 6.9.0
   * Query Engine version: 81e4af48011447c3cc503a190e86995b66d2a28e
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
    cities: 'cities',
    profession: 'profession',
    profession_user: 'profession_user',
    provinces: 'provinces',
    users: 'users',
    profession_category: 'profession_category',
    profession_detail: 'profession_detail',
    alamat: 'alamat',
    kecamatan: 'kecamatan',
    kelurahan: 'kelurahan',
    tipe_alamat: 'tipe_alamat'
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
      modelProps: "cities" | "profession" | "profession_user" | "provinces" | "users" | "profession_category" | "profession_detail" | "alamat" | "kecamatan" | "kelurahan" | "tipe_alamat"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
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
      profession_detail: {
        payload: Prisma.$profession_detailPayload<ExtArgs>
        fields: Prisma.profession_detailFieldRefs
        operations: {
          findUnique: {
            args: Prisma.profession_detailFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$profession_detailPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.profession_detailFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$profession_detailPayload>
          }
          findFirst: {
            args: Prisma.profession_detailFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$profession_detailPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.profession_detailFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$profession_detailPayload>
          }
          findMany: {
            args: Prisma.profession_detailFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$profession_detailPayload>[]
          }
          create: {
            args: Prisma.profession_detailCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$profession_detailPayload>
          }
          createMany: {
            args: Prisma.profession_detailCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.profession_detailCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$profession_detailPayload>[]
          }
          delete: {
            args: Prisma.profession_detailDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$profession_detailPayload>
          }
          update: {
            args: Prisma.profession_detailUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$profession_detailPayload>
          }
          deleteMany: {
            args: Prisma.profession_detailDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.profession_detailUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.profession_detailUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$profession_detailPayload>[]
          }
          upsert: {
            args: Prisma.profession_detailUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$profession_detailPayload>
          }
          aggregate: {
            args: Prisma.Profession_detailAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateProfession_detail>
          }
          groupBy: {
            args: Prisma.profession_detailGroupByArgs<ExtArgs>
            result: $Utils.Optional<Profession_detailGroupByOutputType>[]
          }
          count: {
            args: Prisma.profession_detailCountArgs<ExtArgs>
            result: $Utils.Optional<Profession_detailCountAggregateOutputType> | number
          }
        }
      }
      alamat: {
        payload: Prisma.$alamatPayload<ExtArgs>
        fields: Prisma.alamatFieldRefs
        operations: {
          findUnique: {
            args: Prisma.alamatFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$alamatPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.alamatFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$alamatPayload>
          }
          findFirst: {
            args: Prisma.alamatFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$alamatPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.alamatFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$alamatPayload>
          }
          findMany: {
            args: Prisma.alamatFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$alamatPayload>[]
          }
          create: {
            args: Prisma.alamatCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$alamatPayload>
          }
          createMany: {
            args: Prisma.alamatCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.alamatCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$alamatPayload>[]
          }
          delete: {
            args: Prisma.alamatDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$alamatPayload>
          }
          update: {
            args: Prisma.alamatUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$alamatPayload>
          }
          deleteMany: {
            args: Prisma.alamatDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.alamatUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.alamatUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$alamatPayload>[]
          }
          upsert: {
            args: Prisma.alamatUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$alamatPayload>
          }
          aggregate: {
            args: Prisma.AlamatAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAlamat>
          }
          groupBy: {
            args: Prisma.alamatGroupByArgs<ExtArgs>
            result: $Utils.Optional<AlamatGroupByOutputType>[]
          }
          count: {
            args: Prisma.alamatCountArgs<ExtArgs>
            result: $Utils.Optional<AlamatCountAggregateOutputType> | number
          }
        }
      }
      kecamatan: {
        payload: Prisma.$kecamatanPayload<ExtArgs>
        fields: Prisma.kecamatanFieldRefs
        operations: {
          findUnique: {
            args: Prisma.kecamatanFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$kecamatanPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.kecamatanFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$kecamatanPayload>
          }
          findFirst: {
            args: Prisma.kecamatanFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$kecamatanPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.kecamatanFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$kecamatanPayload>
          }
          findMany: {
            args: Prisma.kecamatanFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$kecamatanPayload>[]
          }
          create: {
            args: Prisma.kecamatanCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$kecamatanPayload>
          }
          createMany: {
            args: Prisma.kecamatanCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.kecamatanCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$kecamatanPayload>[]
          }
          delete: {
            args: Prisma.kecamatanDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$kecamatanPayload>
          }
          update: {
            args: Prisma.kecamatanUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$kecamatanPayload>
          }
          deleteMany: {
            args: Prisma.kecamatanDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.kecamatanUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.kecamatanUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$kecamatanPayload>[]
          }
          upsert: {
            args: Prisma.kecamatanUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$kecamatanPayload>
          }
          aggregate: {
            args: Prisma.KecamatanAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateKecamatan>
          }
          groupBy: {
            args: Prisma.kecamatanGroupByArgs<ExtArgs>
            result: $Utils.Optional<KecamatanGroupByOutputType>[]
          }
          count: {
            args: Prisma.kecamatanCountArgs<ExtArgs>
            result: $Utils.Optional<KecamatanCountAggregateOutputType> | number
          }
        }
      }
      kelurahan: {
        payload: Prisma.$kelurahanPayload<ExtArgs>
        fields: Prisma.kelurahanFieldRefs
        operations: {
          findUnique: {
            args: Prisma.kelurahanFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$kelurahanPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.kelurahanFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$kelurahanPayload>
          }
          findFirst: {
            args: Prisma.kelurahanFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$kelurahanPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.kelurahanFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$kelurahanPayload>
          }
          findMany: {
            args: Prisma.kelurahanFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$kelurahanPayload>[]
          }
          create: {
            args: Prisma.kelurahanCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$kelurahanPayload>
          }
          createMany: {
            args: Prisma.kelurahanCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.kelurahanCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$kelurahanPayload>[]
          }
          delete: {
            args: Prisma.kelurahanDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$kelurahanPayload>
          }
          update: {
            args: Prisma.kelurahanUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$kelurahanPayload>
          }
          deleteMany: {
            args: Prisma.kelurahanDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.kelurahanUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.kelurahanUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$kelurahanPayload>[]
          }
          upsert: {
            args: Prisma.kelurahanUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$kelurahanPayload>
          }
          aggregate: {
            args: Prisma.KelurahanAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateKelurahan>
          }
          groupBy: {
            args: Prisma.kelurahanGroupByArgs<ExtArgs>
            result: $Utils.Optional<KelurahanGroupByOutputType>[]
          }
          count: {
            args: Prisma.kelurahanCountArgs<ExtArgs>
            result: $Utils.Optional<KelurahanCountAggregateOutputType> | number
          }
        }
      }
      tipe_alamat: {
        payload: Prisma.$tipe_alamatPayload<ExtArgs>
        fields: Prisma.tipe_alamatFieldRefs
        operations: {
          findUnique: {
            args: Prisma.tipe_alamatFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tipe_alamatPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.tipe_alamatFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tipe_alamatPayload>
          }
          findFirst: {
            args: Prisma.tipe_alamatFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tipe_alamatPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.tipe_alamatFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tipe_alamatPayload>
          }
          findMany: {
            args: Prisma.tipe_alamatFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tipe_alamatPayload>[]
          }
          create: {
            args: Prisma.tipe_alamatCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tipe_alamatPayload>
          }
          createMany: {
            args: Prisma.tipe_alamatCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.tipe_alamatCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tipe_alamatPayload>[]
          }
          delete: {
            args: Prisma.tipe_alamatDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tipe_alamatPayload>
          }
          update: {
            args: Prisma.tipe_alamatUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tipe_alamatPayload>
          }
          deleteMany: {
            args: Prisma.tipe_alamatDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.tipe_alamatUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.tipe_alamatUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tipe_alamatPayload>[]
          }
          upsert: {
            args: Prisma.tipe_alamatUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tipe_alamatPayload>
          }
          aggregate: {
            args: Prisma.Tipe_alamatAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateTipe_alamat>
          }
          groupBy: {
            args: Prisma.tipe_alamatGroupByArgs<ExtArgs>
            result: $Utils.Optional<Tipe_alamatGroupByOutputType>[]
          }
          count: {
            args: Prisma.tipe_alamatCountArgs<ExtArgs>
            result: $Utils.Optional<Tipe_alamatCountAggregateOutputType> | number
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
    cities?: citiesOmit
    profession?: professionOmit
    profession_user?: profession_userOmit
    provinces?: provincesOmit
    users?: usersOmit
    profession_category?: profession_categoryOmit
    profession_detail?: profession_detailOmit
    alamat?: alamatOmit
    kecamatan?: kecamatanOmit
    kelurahan?: kelurahanOmit
    tipe_alamat?: tipe_alamatOmit
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
   * Count Type CitiesCountOutputType
   */

  export type CitiesCountOutputType = {
    alamat: number
    kecamatan: number
  }

  export type CitiesCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    alamat?: boolean | CitiesCountOutputTypeCountAlamatArgs
    kecamatan?: boolean | CitiesCountOutputTypeCountKecamatanArgs
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
  export type CitiesCountOutputTypeCountAlamatArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: alamatWhereInput
  }

  /**
   * CitiesCountOutputType without action
   */
  export type CitiesCountOutputTypeCountKecamatanArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: kecamatanWhereInput
  }


  /**
   * Count Type ProfessionCountOutputType
   */

  export type ProfessionCountOutputType = {
    profession_detail: number
    profession_user: number
  }

  export type ProfessionCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    profession_detail?: boolean | ProfessionCountOutputTypeCountProfession_detailArgs
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
  export type ProfessionCountOutputTypeCountProfession_detailArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: profession_detailWhereInput
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
    alamat: number
    cities: number
  }

  export type ProvincesCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    alamat?: boolean | ProvincesCountOutputTypeCountAlamatArgs
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
  export type ProvincesCountOutputTypeCountAlamatArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: alamatWhereInput
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
    alamat: number
    profession_user: number
  }

  export type UsersCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    alamat?: boolean | UsersCountOutputTypeCountAlamatArgs
    profession_user?: boolean | UsersCountOutputTypeCountProfession_userArgs
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
  export type UsersCountOutputTypeCountAlamatArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: alamatWhereInput
  }

  /**
   * UsersCountOutputType without action
   */
  export type UsersCountOutputTypeCountProfession_userArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: profession_userWhereInput
  }


  /**
   * Count Type Profession_categoryCountOutputType
   */

  export type Profession_categoryCountOutputType = {
    profession_detail: number
  }

  export type Profession_categoryCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    profession_detail?: boolean | Profession_categoryCountOutputTypeCountProfession_detailArgs
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
  export type Profession_categoryCountOutputTypeCountProfession_detailArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: profession_detailWhereInput
  }


  /**
   * Count Type KecamatanCountOutputType
   */

  export type KecamatanCountOutputType = {
    alamat: number
    kelurahan: number
  }

  export type KecamatanCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    alamat?: boolean | KecamatanCountOutputTypeCountAlamatArgs
    kelurahan?: boolean | KecamatanCountOutputTypeCountKelurahanArgs
  }

  // Custom InputTypes
  /**
   * KecamatanCountOutputType without action
   */
  export type KecamatanCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the KecamatanCountOutputType
     */
    select?: KecamatanCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * KecamatanCountOutputType without action
   */
  export type KecamatanCountOutputTypeCountAlamatArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: alamatWhereInput
  }

  /**
   * KecamatanCountOutputType without action
   */
  export type KecamatanCountOutputTypeCountKelurahanArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: kelurahanWhereInput
  }


  /**
   * Count Type KelurahanCountOutputType
   */

  export type KelurahanCountOutputType = {
    alamat: number
  }

  export type KelurahanCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    alamat?: boolean | KelurahanCountOutputTypeCountAlamatArgs
  }

  // Custom InputTypes
  /**
   * KelurahanCountOutputType without action
   */
  export type KelurahanCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the KelurahanCountOutputType
     */
    select?: KelurahanCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * KelurahanCountOutputType without action
   */
  export type KelurahanCountOutputTypeCountAlamatArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: alamatWhereInput
  }


  /**
   * Count Type Tipe_alamatCountOutputType
   */

  export type Tipe_alamatCountOutputType = {
    alamat: number
  }

  export type Tipe_alamatCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    alamat?: boolean | Tipe_alamatCountOutputTypeCountAlamatArgs
  }

  // Custom InputTypes
  /**
   * Tipe_alamatCountOutputType without action
   */
  export type Tipe_alamatCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tipe_alamatCountOutputType
     */
    select?: Tipe_alamatCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * Tipe_alamatCountOutputType without action
   */
  export type Tipe_alamatCountOutputTypeCountAlamatArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: alamatWhereInput
  }


  /**
   * Models
   */

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
    alamat?: boolean | cities$alamatArgs<ExtArgs>
    provinces?: boolean | provincesDefaultArgs<ExtArgs>
    kecamatan?: boolean | cities$kecamatanArgs<ExtArgs>
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
    alamat?: boolean | cities$alamatArgs<ExtArgs>
    provinces?: boolean | provincesDefaultArgs<ExtArgs>
    kecamatan?: boolean | cities$kecamatanArgs<ExtArgs>
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
      alamat: Prisma.$alamatPayload<ExtArgs>[]
      provinces: Prisma.$provincesPayload<ExtArgs>
      kecamatan: Prisma.$kecamatanPayload<ExtArgs>[]
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
    alamat<T extends cities$alamatArgs<ExtArgs> = {}>(args?: Subset<T, cities$alamatArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$alamatPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    provinces<T extends provincesDefaultArgs<ExtArgs> = {}>(args?: Subset<T, provincesDefaultArgs<ExtArgs>>): Prisma__provincesClient<$Result.GetResult<Prisma.$provincesPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    kecamatan<T extends cities$kecamatanArgs<ExtArgs> = {}>(args?: Subset<T, cities$kecamatanArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$kecamatanPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * cities.alamat
   */
  export type cities$alamatArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the alamat
     */
    select?: alamatSelect<ExtArgs> | null
    /**
     * Omit specific fields from the alamat
     */
    omit?: alamatOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: alamatInclude<ExtArgs> | null
    where?: alamatWhereInput
    orderBy?: alamatOrderByWithRelationInput | alamatOrderByWithRelationInput[]
    cursor?: alamatWhereUniqueInput
    take?: number
    skip?: number
    distinct?: AlamatScalarFieldEnum | AlamatScalarFieldEnum[]
  }

  /**
   * cities.kecamatan
   */
  export type cities$kecamatanArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the kecamatan
     */
    select?: kecamatanSelect<ExtArgs> | null
    /**
     * Omit specific fields from the kecamatan
     */
    omit?: kecamatanOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: kecamatanInclude<ExtArgs> | null
    where?: kecamatanWhereInput
    orderBy?: kecamatanOrderByWithRelationInput | kecamatanOrderByWithRelationInput[]
    cursor?: kecamatanWhereUniqueInput
    take?: number
    skip?: number
    distinct?: KecamatanScalarFieldEnum | KecamatanScalarFieldEnum[]
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
  }

  export type ProfessionSumAggregateOutputType = {
    id_profesi: bigint | null
  }

  export type ProfessionMinAggregateOutputType = {
    id_profesi: bigint | null
    profession: string | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type ProfessionMaxAggregateOutputType = {
    id_profesi: bigint | null
    profession: string | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type ProfessionCountAggregateOutputType = {
    id_profesi: number
    profession: number
    created_at: number
    updated_at: number
    _all: number
  }


  export type ProfessionAvgAggregateInputType = {
    id_profesi?: true
  }

  export type ProfessionSumAggregateInputType = {
    id_profesi?: true
  }

  export type ProfessionMinAggregateInputType = {
    id_profesi?: true
    profession?: true
    created_at?: true
    updated_at?: true
  }

  export type ProfessionMaxAggregateInputType = {
    id_profesi?: true
    profession?: true
    created_at?: true
    updated_at?: true
  }

  export type ProfessionCountAggregateInputType = {
    id_profesi?: true
    profession?: true
    created_at?: true
    updated_at?: true
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
    profession_detail?: boolean | profession$profession_detailArgs<ExtArgs>
    profession_user?: boolean | profession$profession_userArgs<ExtArgs>
    _count?: boolean | ProfessionCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["profession"]>

  export type professionSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id_profesi?: boolean
    profession?: boolean
    created_at?: boolean
    updated_at?: boolean
  }, ExtArgs["result"]["profession"]>

  export type professionSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id_profesi?: boolean
    profession?: boolean
    created_at?: boolean
    updated_at?: boolean
  }, ExtArgs["result"]["profession"]>

  export type professionSelectScalar = {
    id_profesi?: boolean
    profession?: boolean
    created_at?: boolean
    updated_at?: boolean
  }

  export type professionOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id_profesi" | "profession" | "created_at" | "updated_at", ExtArgs["result"]["profession"]>
  export type professionInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    profession_detail?: boolean | profession$profession_detailArgs<ExtArgs>
    profession_user?: boolean | profession$profession_userArgs<ExtArgs>
    _count?: boolean | ProfessionCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type professionIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type professionIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $professionPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "profession"
    objects: {
      profession_detail: Prisma.$profession_detailPayload<ExtArgs>[]
      profession_user: Prisma.$profession_userPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id_profesi: bigint
      profession: string
      created_at: Date | null
      updated_at: Date | null
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
    profession_detail<T extends profession$profession_detailArgs<ExtArgs> = {}>(args?: Subset<T, profession$profession_detailArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$profession_detailPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * profession.profession_detail
   */
  export type profession$profession_detailArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the profession_detail
     */
    select?: profession_detailSelect<ExtArgs> | null
    /**
     * Omit specific fields from the profession_detail
     */
    omit?: profession_detailOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: profession_detailInclude<ExtArgs> | null
    where?: profession_detailWhereInput
    orderBy?: profession_detailOrderByWithRelationInput | profession_detailOrderByWithRelationInput[]
    cursor?: profession_detailWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Profession_detailScalarFieldEnum | Profession_detailScalarFieldEnum[]
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
    alamat?: boolean | provinces$alamatArgs<ExtArgs>
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
    alamat?: boolean | provinces$alamatArgs<ExtArgs>
    cities?: boolean | provinces$citiesArgs<ExtArgs>
    _count?: boolean | ProvincesCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type provincesIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type provincesIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $provincesPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "provinces"
    objects: {
      alamat: Prisma.$alamatPayload<ExtArgs>[]
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
    alamat<T extends provinces$alamatArgs<ExtArgs> = {}>(args?: Subset<T, provinces$alamatArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$alamatPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * provinces.alamat
   */
  export type provinces$alamatArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the alamat
     */
    select?: alamatSelect<ExtArgs> | null
    /**
     * Omit specific fields from the alamat
     */
    omit?: alamatOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: alamatInclude<ExtArgs> | null
    where?: alamatWhereInput
    orderBy?: alamatOrderByWithRelationInput | alamatOrderByWithRelationInput[]
    cursor?: alamatWhereUniqueInput
    take?: number
    skip?: number
    distinct?: AlamatScalarFieldEnum | AlamatScalarFieldEnum[]
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
    username: string
    nama: string
    email: string
    sandi: string
    gender: $Enums.gender_enum
    birth_date: Date
    foto: Uint8Array | null
    bio: string | null
    status_user: $Enums.status_user_enum
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
    alamat?: boolean | users$alamatArgs<ExtArgs>
    profession_user?: boolean | users$profession_userArgs<ExtArgs>
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
    alamat?: boolean | users$alamatArgs<ExtArgs>
    profession_user?: boolean | users$profession_userArgs<ExtArgs>
    _count?: boolean | UsersCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type usersIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type usersIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $usersPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "users"
    objects: {
      alamat: Prisma.$alamatPayload<ExtArgs>[]
      profession_user: Prisma.$profession_userPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id_user: string
      username: string
      nama: string
      email: string
      sandi: string
      gender: $Enums.gender_enum
      birth_date: Date
      foto: Uint8Array | null
      bio: string | null
      status_user: $Enums.status_user_enum
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
    alamat<T extends users$alamatArgs<ExtArgs> = {}>(args?: Subset<T, users$alamatArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$alamatPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    profession_user<T extends users$profession_userArgs<ExtArgs> = {}>(args?: Subset<T, users$profession_userArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$profession_userPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * users.alamat
   */
  export type users$alamatArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the alamat
     */
    select?: alamatSelect<ExtArgs> | null
    /**
     * Omit specific fields from the alamat
     */
    omit?: alamatOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: alamatInclude<ExtArgs> | null
    where?: alamatWhereInput
    orderBy?: alamatOrderByWithRelationInput | alamatOrderByWithRelationInput[]
    cursor?: alamatWhereUniqueInput
    take?: number
    skip?: number
    distinct?: AlamatScalarFieldEnum | AlamatScalarFieldEnum[]
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
    profession_detail?: boolean | profession_category$profession_detailArgs<ExtArgs>
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
    profession_detail?: boolean | profession_category$profession_detailArgs<ExtArgs>
    _count?: boolean | Profession_categoryCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type profession_categoryIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type profession_categoryIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $profession_categoryPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "profession_category"
    objects: {
      profession_detail: Prisma.$profession_detailPayload<ExtArgs>[]
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
    profession_detail<T extends profession_category$profession_detailArgs<ExtArgs> = {}>(args?: Subset<T, profession_category$profession_detailArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$profession_detailPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * profession_category.profession_detail
   */
  export type profession_category$profession_detailArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the profession_detail
     */
    select?: profession_detailSelect<ExtArgs> | null
    /**
     * Omit specific fields from the profession_detail
     */
    omit?: profession_detailOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: profession_detailInclude<ExtArgs> | null
    where?: profession_detailWhereInput
    orderBy?: profession_detailOrderByWithRelationInput | profession_detailOrderByWithRelationInput[]
    cursor?: profession_detailWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Profession_detailScalarFieldEnum | Profession_detailScalarFieldEnum[]
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
   * Model profession_detail
   */

  export type AggregateProfession_detail = {
    _count: Profession_detailCountAggregateOutputType | null
    _avg: Profession_detailAvgAggregateOutputType | null
    _sum: Profession_detailSumAggregateOutputType | null
    _min: Profession_detailMinAggregateOutputType | null
    _max: Profession_detailMaxAggregateOutputType | null
  }

  export type Profession_detailAvgAggregateOutputType = {
    id_profesi: number | null
    id_prof_cat: number | null
  }

  export type Profession_detailSumAggregateOutputType = {
    id_profesi: bigint | null
    id_prof_cat: bigint | null
  }

  export type Profession_detailMinAggregateOutputType = {
    id_profesi: bigint | null
    id_prof_cat: bigint | null
  }

  export type Profession_detailMaxAggregateOutputType = {
    id_profesi: bigint | null
    id_prof_cat: bigint | null
  }

  export type Profession_detailCountAggregateOutputType = {
    id_profesi: number
    id_prof_cat: number
    _all: number
  }


  export type Profession_detailAvgAggregateInputType = {
    id_profesi?: true
    id_prof_cat?: true
  }

  export type Profession_detailSumAggregateInputType = {
    id_profesi?: true
    id_prof_cat?: true
  }

  export type Profession_detailMinAggregateInputType = {
    id_profesi?: true
    id_prof_cat?: true
  }

  export type Profession_detailMaxAggregateInputType = {
    id_profesi?: true
    id_prof_cat?: true
  }

  export type Profession_detailCountAggregateInputType = {
    id_profesi?: true
    id_prof_cat?: true
    _all?: true
  }

  export type Profession_detailAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which profession_detail to aggregate.
     */
    where?: profession_detailWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of profession_details to fetch.
     */
    orderBy?: profession_detailOrderByWithRelationInput | profession_detailOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: profession_detailWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` profession_details from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` profession_details.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned profession_details
    **/
    _count?: true | Profession_detailCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: Profession_detailAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: Profession_detailSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Profession_detailMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Profession_detailMaxAggregateInputType
  }

  export type GetProfession_detailAggregateType<T extends Profession_detailAggregateArgs> = {
        [P in keyof T & keyof AggregateProfession_detail]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateProfession_detail[P]>
      : GetScalarType<T[P], AggregateProfession_detail[P]>
  }




  export type profession_detailGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: profession_detailWhereInput
    orderBy?: profession_detailOrderByWithAggregationInput | profession_detailOrderByWithAggregationInput[]
    by: Profession_detailScalarFieldEnum[] | Profession_detailScalarFieldEnum
    having?: profession_detailScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Profession_detailCountAggregateInputType | true
    _avg?: Profession_detailAvgAggregateInputType
    _sum?: Profession_detailSumAggregateInputType
    _min?: Profession_detailMinAggregateInputType
    _max?: Profession_detailMaxAggregateInputType
  }

  export type Profession_detailGroupByOutputType = {
    id_profesi: bigint
    id_prof_cat: bigint
    _count: Profession_detailCountAggregateOutputType | null
    _avg: Profession_detailAvgAggregateOutputType | null
    _sum: Profession_detailSumAggregateOutputType | null
    _min: Profession_detailMinAggregateOutputType | null
    _max: Profession_detailMaxAggregateOutputType | null
  }

  type GetProfession_detailGroupByPayload<T extends profession_detailGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Profession_detailGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Profession_detailGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Profession_detailGroupByOutputType[P]>
            : GetScalarType<T[P], Profession_detailGroupByOutputType[P]>
        }
      >
    >


  export type profession_detailSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id_profesi?: boolean
    id_prof_cat?: boolean
    profession_category?: boolean | profession_categoryDefaultArgs<ExtArgs>
    profession?: boolean | professionDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["profession_detail"]>

  export type profession_detailSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id_profesi?: boolean
    id_prof_cat?: boolean
    profession_category?: boolean | profession_categoryDefaultArgs<ExtArgs>
    profession?: boolean | professionDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["profession_detail"]>

  export type profession_detailSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id_profesi?: boolean
    id_prof_cat?: boolean
    profession_category?: boolean | profession_categoryDefaultArgs<ExtArgs>
    profession?: boolean | professionDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["profession_detail"]>

  export type profession_detailSelectScalar = {
    id_profesi?: boolean
    id_prof_cat?: boolean
  }

  export type profession_detailOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id_profesi" | "id_prof_cat", ExtArgs["result"]["profession_detail"]>
  export type profession_detailInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    profession_category?: boolean | profession_categoryDefaultArgs<ExtArgs>
    profession?: boolean | professionDefaultArgs<ExtArgs>
  }
  export type profession_detailIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    profession_category?: boolean | profession_categoryDefaultArgs<ExtArgs>
    profession?: boolean | professionDefaultArgs<ExtArgs>
  }
  export type profession_detailIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    profession_category?: boolean | profession_categoryDefaultArgs<ExtArgs>
    profession?: boolean | professionDefaultArgs<ExtArgs>
  }

  export type $profession_detailPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "profession_detail"
    objects: {
      profession_category: Prisma.$profession_categoryPayload<ExtArgs>
      profession: Prisma.$professionPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id_profesi: bigint
      id_prof_cat: bigint
    }, ExtArgs["result"]["profession_detail"]>
    composites: {}
  }

  type profession_detailGetPayload<S extends boolean | null | undefined | profession_detailDefaultArgs> = $Result.GetResult<Prisma.$profession_detailPayload, S>

  type profession_detailCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<profession_detailFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: Profession_detailCountAggregateInputType | true
    }

  export interface profession_detailDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['profession_detail'], meta: { name: 'profession_detail' } }
    /**
     * Find zero or one Profession_detail that matches the filter.
     * @param {profession_detailFindUniqueArgs} args - Arguments to find a Profession_detail
     * @example
     * // Get one Profession_detail
     * const profession_detail = await prisma.profession_detail.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends profession_detailFindUniqueArgs>(args: SelectSubset<T, profession_detailFindUniqueArgs<ExtArgs>>): Prisma__profession_detailClient<$Result.GetResult<Prisma.$profession_detailPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Profession_detail that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {profession_detailFindUniqueOrThrowArgs} args - Arguments to find a Profession_detail
     * @example
     * // Get one Profession_detail
     * const profession_detail = await prisma.profession_detail.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends profession_detailFindUniqueOrThrowArgs>(args: SelectSubset<T, profession_detailFindUniqueOrThrowArgs<ExtArgs>>): Prisma__profession_detailClient<$Result.GetResult<Prisma.$profession_detailPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Profession_detail that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {profession_detailFindFirstArgs} args - Arguments to find a Profession_detail
     * @example
     * // Get one Profession_detail
     * const profession_detail = await prisma.profession_detail.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends profession_detailFindFirstArgs>(args?: SelectSubset<T, profession_detailFindFirstArgs<ExtArgs>>): Prisma__profession_detailClient<$Result.GetResult<Prisma.$profession_detailPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Profession_detail that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {profession_detailFindFirstOrThrowArgs} args - Arguments to find a Profession_detail
     * @example
     * // Get one Profession_detail
     * const profession_detail = await prisma.profession_detail.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends profession_detailFindFirstOrThrowArgs>(args?: SelectSubset<T, profession_detailFindFirstOrThrowArgs<ExtArgs>>): Prisma__profession_detailClient<$Result.GetResult<Prisma.$profession_detailPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Profession_details that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {profession_detailFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Profession_details
     * const profession_details = await prisma.profession_detail.findMany()
     * 
     * // Get first 10 Profession_details
     * const profession_details = await prisma.profession_detail.findMany({ take: 10 })
     * 
     * // Only select the `id_profesi`
     * const profession_detailWithId_profesiOnly = await prisma.profession_detail.findMany({ select: { id_profesi: true } })
     * 
     */
    findMany<T extends profession_detailFindManyArgs>(args?: SelectSubset<T, profession_detailFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$profession_detailPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Profession_detail.
     * @param {profession_detailCreateArgs} args - Arguments to create a Profession_detail.
     * @example
     * // Create one Profession_detail
     * const Profession_detail = await prisma.profession_detail.create({
     *   data: {
     *     // ... data to create a Profession_detail
     *   }
     * })
     * 
     */
    create<T extends profession_detailCreateArgs>(args: SelectSubset<T, profession_detailCreateArgs<ExtArgs>>): Prisma__profession_detailClient<$Result.GetResult<Prisma.$profession_detailPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Profession_details.
     * @param {profession_detailCreateManyArgs} args - Arguments to create many Profession_details.
     * @example
     * // Create many Profession_details
     * const profession_detail = await prisma.profession_detail.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends profession_detailCreateManyArgs>(args?: SelectSubset<T, profession_detailCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Profession_details and returns the data saved in the database.
     * @param {profession_detailCreateManyAndReturnArgs} args - Arguments to create many Profession_details.
     * @example
     * // Create many Profession_details
     * const profession_detail = await prisma.profession_detail.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Profession_details and only return the `id_profesi`
     * const profession_detailWithId_profesiOnly = await prisma.profession_detail.createManyAndReturn({
     *   select: { id_profesi: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends profession_detailCreateManyAndReturnArgs>(args?: SelectSubset<T, profession_detailCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$profession_detailPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Profession_detail.
     * @param {profession_detailDeleteArgs} args - Arguments to delete one Profession_detail.
     * @example
     * // Delete one Profession_detail
     * const Profession_detail = await prisma.profession_detail.delete({
     *   where: {
     *     // ... filter to delete one Profession_detail
     *   }
     * })
     * 
     */
    delete<T extends profession_detailDeleteArgs>(args: SelectSubset<T, profession_detailDeleteArgs<ExtArgs>>): Prisma__profession_detailClient<$Result.GetResult<Prisma.$profession_detailPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Profession_detail.
     * @param {profession_detailUpdateArgs} args - Arguments to update one Profession_detail.
     * @example
     * // Update one Profession_detail
     * const profession_detail = await prisma.profession_detail.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends profession_detailUpdateArgs>(args: SelectSubset<T, profession_detailUpdateArgs<ExtArgs>>): Prisma__profession_detailClient<$Result.GetResult<Prisma.$profession_detailPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Profession_details.
     * @param {profession_detailDeleteManyArgs} args - Arguments to filter Profession_details to delete.
     * @example
     * // Delete a few Profession_details
     * const { count } = await prisma.profession_detail.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends profession_detailDeleteManyArgs>(args?: SelectSubset<T, profession_detailDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Profession_details.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {profession_detailUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Profession_details
     * const profession_detail = await prisma.profession_detail.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends profession_detailUpdateManyArgs>(args: SelectSubset<T, profession_detailUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Profession_details and returns the data updated in the database.
     * @param {profession_detailUpdateManyAndReturnArgs} args - Arguments to update many Profession_details.
     * @example
     * // Update many Profession_details
     * const profession_detail = await prisma.profession_detail.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Profession_details and only return the `id_profesi`
     * const profession_detailWithId_profesiOnly = await prisma.profession_detail.updateManyAndReturn({
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
    updateManyAndReturn<T extends profession_detailUpdateManyAndReturnArgs>(args: SelectSubset<T, profession_detailUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$profession_detailPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Profession_detail.
     * @param {profession_detailUpsertArgs} args - Arguments to update or create a Profession_detail.
     * @example
     * // Update or create a Profession_detail
     * const profession_detail = await prisma.profession_detail.upsert({
     *   create: {
     *     // ... data to create a Profession_detail
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Profession_detail we want to update
     *   }
     * })
     */
    upsert<T extends profession_detailUpsertArgs>(args: SelectSubset<T, profession_detailUpsertArgs<ExtArgs>>): Prisma__profession_detailClient<$Result.GetResult<Prisma.$profession_detailPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Profession_details.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {profession_detailCountArgs} args - Arguments to filter Profession_details to count.
     * @example
     * // Count the number of Profession_details
     * const count = await prisma.profession_detail.count({
     *   where: {
     *     // ... the filter for the Profession_details we want to count
     *   }
     * })
    **/
    count<T extends profession_detailCountArgs>(
      args?: Subset<T, profession_detailCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Profession_detailCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Profession_detail.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Profession_detailAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends Profession_detailAggregateArgs>(args: Subset<T, Profession_detailAggregateArgs>): Prisma.PrismaPromise<GetProfession_detailAggregateType<T>>

    /**
     * Group by Profession_detail.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {profession_detailGroupByArgs} args - Group by arguments.
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
      T extends profession_detailGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: profession_detailGroupByArgs['orderBy'] }
        : { orderBy?: profession_detailGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, profession_detailGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetProfession_detailGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the profession_detail model
   */
  readonly fields: profession_detailFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for profession_detail.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__profession_detailClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    profession_category<T extends profession_categoryDefaultArgs<ExtArgs> = {}>(args?: Subset<T, profession_categoryDefaultArgs<ExtArgs>>): Prisma__profession_categoryClient<$Result.GetResult<Prisma.$profession_categoryPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    profession<T extends professionDefaultArgs<ExtArgs> = {}>(args?: Subset<T, professionDefaultArgs<ExtArgs>>): Prisma__professionClient<$Result.GetResult<Prisma.$professionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the profession_detail model
   */
  interface profession_detailFieldRefs {
    readonly id_profesi: FieldRef<"profession_detail", 'BigInt'>
    readonly id_prof_cat: FieldRef<"profession_detail", 'BigInt'>
  }
    

  // Custom InputTypes
  /**
   * profession_detail findUnique
   */
  export type profession_detailFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the profession_detail
     */
    select?: profession_detailSelect<ExtArgs> | null
    /**
     * Omit specific fields from the profession_detail
     */
    omit?: profession_detailOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: profession_detailInclude<ExtArgs> | null
    /**
     * Filter, which profession_detail to fetch.
     */
    where: profession_detailWhereUniqueInput
  }

  /**
   * profession_detail findUniqueOrThrow
   */
  export type profession_detailFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the profession_detail
     */
    select?: profession_detailSelect<ExtArgs> | null
    /**
     * Omit specific fields from the profession_detail
     */
    omit?: profession_detailOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: profession_detailInclude<ExtArgs> | null
    /**
     * Filter, which profession_detail to fetch.
     */
    where: profession_detailWhereUniqueInput
  }

  /**
   * profession_detail findFirst
   */
  export type profession_detailFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the profession_detail
     */
    select?: profession_detailSelect<ExtArgs> | null
    /**
     * Omit specific fields from the profession_detail
     */
    omit?: profession_detailOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: profession_detailInclude<ExtArgs> | null
    /**
     * Filter, which profession_detail to fetch.
     */
    where?: profession_detailWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of profession_details to fetch.
     */
    orderBy?: profession_detailOrderByWithRelationInput | profession_detailOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for profession_details.
     */
    cursor?: profession_detailWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` profession_details from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` profession_details.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of profession_details.
     */
    distinct?: Profession_detailScalarFieldEnum | Profession_detailScalarFieldEnum[]
  }

  /**
   * profession_detail findFirstOrThrow
   */
  export type profession_detailFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the profession_detail
     */
    select?: profession_detailSelect<ExtArgs> | null
    /**
     * Omit specific fields from the profession_detail
     */
    omit?: profession_detailOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: profession_detailInclude<ExtArgs> | null
    /**
     * Filter, which profession_detail to fetch.
     */
    where?: profession_detailWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of profession_details to fetch.
     */
    orderBy?: profession_detailOrderByWithRelationInput | profession_detailOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for profession_details.
     */
    cursor?: profession_detailWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` profession_details from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` profession_details.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of profession_details.
     */
    distinct?: Profession_detailScalarFieldEnum | Profession_detailScalarFieldEnum[]
  }

  /**
   * profession_detail findMany
   */
  export type profession_detailFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the profession_detail
     */
    select?: profession_detailSelect<ExtArgs> | null
    /**
     * Omit specific fields from the profession_detail
     */
    omit?: profession_detailOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: profession_detailInclude<ExtArgs> | null
    /**
     * Filter, which profession_details to fetch.
     */
    where?: profession_detailWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of profession_details to fetch.
     */
    orderBy?: profession_detailOrderByWithRelationInput | profession_detailOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing profession_details.
     */
    cursor?: profession_detailWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` profession_details from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` profession_details.
     */
    skip?: number
    distinct?: Profession_detailScalarFieldEnum | Profession_detailScalarFieldEnum[]
  }

  /**
   * profession_detail create
   */
  export type profession_detailCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the profession_detail
     */
    select?: profession_detailSelect<ExtArgs> | null
    /**
     * Omit specific fields from the profession_detail
     */
    omit?: profession_detailOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: profession_detailInclude<ExtArgs> | null
    /**
     * The data needed to create a profession_detail.
     */
    data: XOR<profession_detailCreateInput, profession_detailUncheckedCreateInput>
  }

  /**
   * profession_detail createMany
   */
  export type profession_detailCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many profession_details.
     */
    data: profession_detailCreateManyInput | profession_detailCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * profession_detail createManyAndReturn
   */
  export type profession_detailCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the profession_detail
     */
    select?: profession_detailSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the profession_detail
     */
    omit?: profession_detailOmit<ExtArgs> | null
    /**
     * The data used to create many profession_details.
     */
    data: profession_detailCreateManyInput | profession_detailCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: profession_detailIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * profession_detail update
   */
  export type profession_detailUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the profession_detail
     */
    select?: profession_detailSelect<ExtArgs> | null
    /**
     * Omit specific fields from the profession_detail
     */
    omit?: profession_detailOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: profession_detailInclude<ExtArgs> | null
    /**
     * The data needed to update a profession_detail.
     */
    data: XOR<profession_detailUpdateInput, profession_detailUncheckedUpdateInput>
    /**
     * Choose, which profession_detail to update.
     */
    where: profession_detailWhereUniqueInput
  }

  /**
   * profession_detail updateMany
   */
  export type profession_detailUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update profession_details.
     */
    data: XOR<profession_detailUpdateManyMutationInput, profession_detailUncheckedUpdateManyInput>
    /**
     * Filter which profession_details to update
     */
    where?: profession_detailWhereInput
    /**
     * Limit how many profession_details to update.
     */
    limit?: number
  }

  /**
   * profession_detail updateManyAndReturn
   */
  export type profession_detailUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the profession_detail
     */
    select?: profession_detailSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the profession_detail
     */
    omit?: profession_detailOmit<ExtArgs> | null
    /**
     * The data used to update profession_details.
     */
    data: XOR<profession_detailUpdateManyMutationInput, profession_detailUncheckedUpdateManyInput>
    /**
     * Filter which profession_details to update
     */
    where?: profession_detailWhereInput
    /**
     * Limit how many profession_details to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: profession_detailIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * profession_detail upsert
   */
  export type profession_detailUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the profession_detail
     */
    select?: profession_detailSelect<ExtArgs> | null
    /**
     * Omit specific fields from the profession_detail
     */
    omit?: profession_detailOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: profession_detailInclude<ExtArgs> | null
    /**
     * The filter to search for the profession_detail to update in case it exists.
     */
    where: profession_detailWhereUniqueInput
    /**
     * In case the profession_detail found by the `where` argument doesn't exist, create a new profession_detail with this data.
     */
    create: XOR<profession_detailCreateInput, profession_detailUncheckedCreateInput>
    /**
     * In case the profession_detail was found with the provided `where` argument, update it with this data.
     */
    update: XOR<profession_detailUpdateInput, profession_detailUncheckedUpdateInput>
  }

  /**
   * profession_detail delete
   */
  export type profession_detailDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the profession_detail
     */
    select?: profession_detailSelect<ExtArgs> | null
    /**
     * Omit specific fields from the profession_detail
     */
    omit?: profession_detailOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: profession_detailInclude<ExtArgs> | null
    /**
     * Filter which profession_detail to delete.
     */
    where: profession_detailWhereUniqueInput
  }

  /**
   * profession_detail deleteMany
   */
  export type profession_detailDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which profession_details to delete
     */
    where?: profession_detailWhereInput
    /**
     * Limit how many profession_details to delete.
     */
    limit?: number
  }

  /**
   * profession_detail without action
   */
  export type profession_detailDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the profession_detail
     */
    select?: profession_detailSelect<ExtArgs> | null
    /**
     * Omit specific fields from the profession_detail
     */
    omit?: profession_detailOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: profession_detailInclude<ExtArgs> | null
  }


  /**
   * Model alamat
   */

  export type AggregateAlamat = {
    _count: AlamatCountAggregateOutputType | null
    _avg: AlamatAvgAggregateOutputType | null
    _sum: AlamatSumAggregateOutputType | null
    _min: AlamatMinAggregateOutputType | null
    _max: AlamatMaxAggregateOutputType | null
  }

  export type AlamatAvgAggregateOutputType = {
    latitude: Decimal | null
    longitude: Decimal | null
    id_tipe: number | null
    id_kel: number | null
    id_kec: number | null
    id_kota: number | null
    id_prov: number | null
  }

  export type AlamatSumAggregateOutputType = {
    latitude: Decimal | null
    longitude: Decimal | null
    id_tipe: bigint | null
    id_kel: bigint | null
    id_kec: bigint | null
    id_kota: number | null
    id_prov: number | null
  }

  export type AlamatMinAggregateOutputType = {
    id_alamat: string | null
    id_user: string | null
    alamat: string | null
    catatan: string | null
    latitude: Decimal | null
    longitude: Decimal | null
    is_default: boolean | null
    id_tipe: bigint | null
    id_kel: bigint | null
    id_kec: bigint | null
    id_kota: number | null
    id_prov: number | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type AlamatMaxAggregateOutputType = {
    id_alamat: string | null
    id_user: string | null
    alamat: string | null
    catatan: string | null
    latitude: Decimal | null
    longitude: Decimal | null
    is_default: boolean | null
    id_tipe: bigint | null
    id_kel: bigint | null
    id_kec: bigint | null
    id_kota: number | null
    id_prov: number | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type AlamatCountAggregateOutputType = {
    id_alamat: number
    id_user: number
    alamat: number
    catatan: number
    latitude: number
    longitude: number
    is_default: number
    id_tipe: number
    id_kel: number
    id_kec: number
    id_kota: number
    id_prov: number
    created_at: number
    updated_at: number
    _all: number
  }


  export type AlamatAvgAggregateInputType = {
    latitude?: true
    longitude?: true
    id_tipe?: true
    id_kel?: true
    id_kec?: true
    id_kota?: true
    id_prov?: true
  }

  export type AlamatSumAggregateInputType = {
    latitude?: true
    longitude?: true
    id_tipe?: true
    id_kel?: true
    id_kec?: true
    id_kota?: true
    id_prov?: true
  }

  export type AlamatMinAggregateInputType = {
    id_alamat?: true
    id_user?: true
    alamat?: true
    catatan?: true
    latitude?: true
    longitude?: true
    is_default?: true
    id_tipe?: true
    id_kel?: true
    id_kec?: true
    id_kota?: true
    id_prov?: true
    created_at?: true
    updated_at?: true
  }

  export type AlamatMaxAggregateInputType = {
    id_alamat?: true
    id_user?: true
    alamat?: true
    catatan?: true
    latitude?: true
    longitude?: true
    is_default?: true
    id_tipe?: true
    id_kel?: true
    id_kec?: true
    id_kota?: true
    id_prov?: true
    created_at?: true
    updated_at?: true
  }

  export type AlamatCountAggregateInputType = {
    id_alamat?: true
    id_user?: true
    alamat?: true
    catatan?: true
    latitude?: true
    longitude?: true
    is_default?: true
    id_tipe?: true
    id_kel?: true
    id_kec?: true
    id_kota?: true
    id_prov?: true
    created_at?: true
    updated_at?: true
    _all?: true
  }

  export type AlamatAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which alamat to aggregate.
     */
    where?: alamatWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of alamats to fetch.
     */
    orderBy?: alamatOrderByWithRelationInput | alamatOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: alamatWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` alamats from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` alamats.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned alamats
    **/
    _count?: true | AlamatCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: AlamatAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: AlamatSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AlamatMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AlamatMaxAggregateInputType
  }

  export type GetAlamatAggregateType<T extends AlamatAggregateArgs> = {
        [P in keyof T & keyof AggregateAlamat]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAlamat[P]>
      : GetScalarType<T[P], AggregateAlamat[P]>
  }




  export type alamatGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: alamatWhereInput
    orderBy?: alamatOrderByWithAggregationInput | alamatOrderByWithAggregationInput[]
    by: AlamatScalarFieldEnum[] | AlamatScalarFieldEnum
    having?: alamatScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AlamatCountAggregateInputType | true
    _avg?: AlamatAvgAggregateInputType
    _sum?: AlamatSumAggregateInputType
    _min?: AlamatMinAggregateInputType
    _max?: AlamatMaxAggregateInputType
  }

  export type AlamatGroupByOutputType = {
    id_alamat: string
    id_user: string
    alamat: string
    catatan: string | null
    latitude: Decimal
    longitude: Decimal
    is_default: boolean
    id_tipe: bigint | null
    id_kel: bigint
    id_kec: bigint
    id_kota: number
    id_prov: number
    created_at: Date | null
    updated_at: Date | null
    _count: AlamatCountAggregateOutputType | null
    _avg: AlamatAvgAggregateOutputType | null
    _sum: AlamatSumAggregateOutputType | null
    _min: AlamatMinAggregateOutputType | null
    _max: AlamatMaxAggregateOutputType | null
  }

  type GetAlamatGroupByPayload<T extends alamatGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AlamatGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AlamatGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AlamatGroupByOutputType[P]>
            : GetScalarType<T[P], AlamatGroupByOutputType[P]>
        }
      >
    >


  export type alamatSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id_alamat?: boolean
    id_user?: boolean
    alamat?: boolean
    catatan?: boolean
    latitude?: boolean
    longitude?: boolean
    is_default?: boolean
    id_tipe?: boolean
    id_kel?: boolean
    id_kec?: boolean
    id_kota?: boolean
    id_prov?: boolean
    created_at?: boolean
    updated_at?: boolean
    kecamatan?: boolean | kecamatanDefaultArgs<ExtArgs>
    kelurahan?: boolean | kelurahanDefaultArgs<ExtArgs>
    cities?: boolean | citiesDefaultArgs<ExtArgs>
    provinces?: boolean | provincesDefaultArgs<ExtArgs>
    tipe_alamat?: boolean | alamat$tipe_alamatArgs<ExtArgs>
    users?: boolean | usersDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["alamat"]>

  export type alamatSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id_alamat?: boolean
    id_user?: boolean
    alamat?: boolean
    catatan?: boolean
    latitude?: boolean
    longitude?: boolean
    is_default?: boolean
    id_tipe?: boolean
    id_kel?: boolean
    id_kec?: boolean
    id_kota?: boolean
    id_prov?: boolean
    created_at?: boolean
    updated_at?: boolean
    kecamatan?: boolean | kecamatanDefaultArgs<ExtArgs>
    kelurahan?: boolean | kelurahanDefaultArgs<ExtArgs>
    cities?: boolean | citiesDefaultArgs<ExtArgs>
    provinces?: boolean | provincesDefaultArgs<ExtArgs>
    tipe_alamat?: boolean | alamat$tipe_alamatArgs<ExtArgs>
    users?: boolean | usersDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["alamat"]>

  export type alamatSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id_alamat?: boolean
    id_user?: boolean
    alamat?: boolean
    catatan?: boolean
    latitude?: boolean
    longitude?: boolean
    is_default?: boolean
    id_tipe?: boolean
    id_kel?: boolean
    id_kec?: boolean
    id_kota?: boolean
    id_prov?: boolean
    created_at?: boolean
    updated_at?: boolean
    kecamatan?: boolean | kecamatanDefaultArgs<ExtArgs>
    kelurahan?: boolean | kelurahanDefaultArgs<ExtArgs>
    cities?: boolean | citiesDefaultArgs<ExtArgs>
    provinces?: boolean | provincesDefaultArgs<ExtArgs>
    tipe_alamat?: boolean | alamat$tipe_alamatArgs<ExtArgs>
    users?: boolean | usersDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["alamat"]>

  export type alamatSelectScalar = {
    id_alamat?: boolean
    id_user?: boolean
    alamat?: boolean
    catatan?: boolean
    latitude?: boolean
    longitude?: boolean
    is_default?: boolean
    id_tipe?: boolean
    id_kel?: boolean
    id_kec?: boolean
    id_kota?: boolean
    id_prov?: boolean
    created_at?: boolean
    updated_at?: boolean
  }

  export type alamatOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id_alamat" | "id_user" | "alamat" | "catatan" | "latitude" | "longitude" | "is_default" | "id_tipe" | "id_kel" | "id_kec" | "id_kota" | "id_prov" | "created_at" | "updated_at", ExtArgs["result"]["alamat"]>
  export type alamatInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    kecamatan?: boolean | kecamatanDefaultArgs<ExtArgs>
    kelurahan?: boolean | kelurahanDefaultArgs<ExtArgs>
    cities?: boolean | citiesDefaultArgs<ExtArgs>
    provinces?: boolean | provincesDefaultArgs<ExtArgs>
    tipe_alamat?: boolean | alamat$tipe_alamatArgs<ExtArgs>
    users?: boolean | usersDefaultArgs<ExtArgs>
  }
  export type alamatIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    kecamatan?: boolean | kecamatanDefaultArgs<ExtArgs>
    kelurahan?: boolean | kelurahanDefaultArgs<ExtArgs>
    cities?: boolean | citiesDefaultArgs<ExtArgs>
    provinces?: boolean | provincesDefaultArgs<ExtArgs>
    tipe_alamat?: boolean | alamat$tipe_alamatArgs<ExtArgs>
    users?: boolean | usersDefaultArgs<ExtArgs>
  }
  export type alamatIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    kecamatan?: boolean | kecamatanDefaultArgs<ExtArgs>
    kelurahan?: boolean | kelurahanDefaultArgs<ExtArgs>
    cities?: boolean | citiesDefaultArgs<ExtArgs>
    provinces?: boolean | provincesDefaultArgs<ExtArgs>
    tipe_alamat?: boolean | alamat$tipe_alamatArgs<ExtArgs>
    users?: boolean | usersDefaultArgs<ExtArgs>
  }

  export type $alamatPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "alamat"
    objects: {
      kecamatan: Prisma.$kecamatanPayload<ExtArgs>
      kelurahan: Prisma.$kelurahanPayload<ExtArgs>
      cities: Prisma.$citiesPayload<ExtArgs>
      provinces: Prisma.$provincesPayload<ExtArgs>
      tipe_alamat: Prisma.$tipe_alamatPayload<ExtArgs> | null
      users: Prisma.$usersPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id_alamat: string
      id_user: string
      alamat: string
      catatan: string | null
      latitude: Prisma.Decimal
      longitude: Prisma.Decimal
      is_default: boolean
      id_tipe: bigint | null
      id_kel: bigint
      id_kec: bigint
      id_kota: number
      id_prov: number
      created_at: Date | null
      updated_at: Date | null
    }, ExtArgs["result"]["alamat"]>
    composites: {}
  }

  type alamatGetPayload<S extends boolean | null | undefined | alamatDefaultArgs> = $Result.GetResult<Prisma.$alamatPayload, S>

  type alamatCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<alamatFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: AlamatCountAggregateInputType | true
    }

  export interface alamatDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['alamat'], meta: { name: 'alamat' } }
    /**
     * Find zero or one Alamat that matches the filter.
     * @param {alamatFindUniqueArgs} args - Arguments to find a Alamat
     * @example
     * // Get one Alamat
     * const alamat = await prisma.alamat.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends alamatFindUniqueArgs>(args: SelectSubset<T, alamatFindUniqueArgs<ExtArgs>>): Prisma__alamatClient<$Result.GetResult<Prisma.$alamatPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Alamat that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {alamatFindUniqueOrThrowArgs} args - Arguments to find a Alamat
     * @example
     * // Get one Alamat
     * const alamat = await prisma.alamat.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends alamatFindUniqueOrThrowArgs>(args: SelectSubset<T, alamatFindUniqueOrThrowArgs<ExtArgs>>): Prisma__alamatClient<$Result.GetResult<Prisma.$alamatPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Alamat that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {alamatFindFirstArgs} args - Arguments to find a Alamat
     * @example
     * // Get one Alamat
     * const alamat = await prisma.alamat.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends alamatFindFirstArgs>(args?: SelectSubset<T, alamatFindFirstArgs<ExtArgs>>): Prisma__alamatClient<$Result.GetResult<Prisma.$alamatPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Alamat that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {alamatFindFirstOrThrowArgs} args - Arguments to find a Alamat
     * @example
     * // Get one Alamat
     * const alamat = await prisma.alamat.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends alamatFindFirstOrThrowArgs>(args?: SelectSubset<T, alamatFindFirstOrThrowArgs<ExtArgs>>): Prisma__alamatClient<$Result.GetResult<Prisma.$alamatPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Alamats that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {alamatFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Alamats
     * const alamats = await prisma.alamat.findMany()
     * 
     * // Get first 10 Alamats
     * const alamats = await prisma.alamat.findMany({ take: 10 })
     * 
     * // Only select the `id_alamat`
     * const alamatWithId_alamatOnly = await prisma.alamat.findMany({ select: { id_alamat: true } })
     * 
     */
    findMany<T extends alamatFindManyArgs>(args?: SelectSubset<T, alamatFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$alamatPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Alamat.
     * @param {alamatCreateArgs} args - Arguments to create a Alamat.
     * @example
     * // Create one Alamat
     * const Alamat = await prisma.alamat.create({
     *   data: {
     *     // ... data to create a Alamat
     *   }
     * })
     * 
     */
    create<T extends alamatCreateArgs>(args: SelectSubset<T, alamatCreateArgs<ExtArgs>>): Prisma__alamatClient<$Result.GetResult<Prisma.$alamatPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Alamats.
     * @param {alamatCreateManyArgs} args - Arguments to create many Alamats.
     * @example
     * // Create many Alamats
     * const alamat = await prisma.alamat.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends alamatCreateManyArgs>(args?: SelectSubset<T, alamatCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Alamats and returns the data saved in the database.
     * @param {alamatCreateManyAndReturnArgs} args - Arguments to create many Alamats.
     * @example
     * // Create many Alamats
     * const alamat = await prisma.alamat.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Alamats and only return the `id_alamat`
     * const alamatWithId_alamatOnly = await prisma.alamat.createManyAndReturn({
     *   select: { id_alamat: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends alamatCreateManyAndReturnArgs>(args?: SelectSubset<T, alamatCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$alamatPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Alamat.
     * @param {alamatDeleteArgs} args - Arguments to delete one Alamat.
     * @example
     * // Delete one Alamat
     * const Alamat = await prisma.alamat.delete({
     *   where: {
     *     // ... filter to delete one Alamat
     *   }
     * })
     * 
     */
    delete<T extends alamatDeleteArgs>(args: SelectSubset<T, alamatDeleteArgs<ExtArgs>>): Prisma__alamatClient<$Result.GetResult<Prisma.$alamatPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Alamat.
     * @param {alamatUpdateArgs} args - Arguments to update one Alamat.
     * @example
     * // Update one Alamat
     * const alamat = await prisma.alamat.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends alamatUpdateArgs>(args: SelectSubset<T, alamatUpdateArgs<ExtArgs>>): Prisma__alamatClient<$Result.GetResult<Prisma.$alamatPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Alamats.
     * @param {alamatDeleteManyArgs} args - Arguments to filter Alamats to delete.
     * @example
     * // Delete a few Alamats
     * const { count } = await prisma.alamat.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends alamatDeleteManyArgs>(args?: SelectSubset<T, alamatDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Alamats.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {alamatUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Alamats
     * const alamat = await prisma.alamat.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends alamatUpdateManyArgs>(args: SelectSubset<T, alamatUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Alamats and returns the data updated in the database.
     * @param {alamatUpdateManyAndReturnArgs} args - Arguments to update many Alamats.
     * @example
     * // Update many Alamats
     * const alamat = await prisma.alamat.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Alamats and only return the `id_alamat`
     * const alamatWithId_alamatOnly = await prisma.alamat.updateManyAndReturn({
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
    updateManyAndReturn<T extends alamatUpdateManyAndReturnArgs>(args: SelectSubset<T, alamatUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$alamatPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Alamat.
     * @param {alamatUpsertArgs} args - Arguments to update or create a Alamat.
     * @example
     * // Update or create a Alamat
     * const alamat = await prisma.alamat.upsert({
     *   create: {
     *     // ... data to create a Alamat
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Alamat we want to update
     *   }
     * })
     */
    upsert<T extends alamatUpsertArgs>(args: SelectSubset<T, alamatUpsertArgs<ExtArgs>>): Prisma__alamatClient<$Result.GetResult<Prisma.$alamatPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Alamats.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {alamatCountArgs} args - Arguments to filter Alamats to count.
     * @example
     * // Count the number of Alamats
     * const count = await prisma.alamat.count({
     *   where: {
     *     // ... the filter for the Alamats we want to count
     *   }
     * })
    **/
    count<T extends alamatCountArgs>(
      args?: Subset<T, alamatCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AlamatCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Alamat.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AlamatAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends AlamatAggregateArgs>(args: Subset<T, AlamatAggregateArgs>): Prisma.PrismaPromise<GetAlamatAggregateType<T>>

    /**
     * Group by Alamat.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {alamatGroupByArgs} args - Group by arguments.
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
      T extends alamatGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: alamatGroupByArgs['orderBy'] }
        : { orderBy?: alamatGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, alamatGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAlamatGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the alamat model
   */
  readonly fields: alamatFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for alamat.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__alamatClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    kecamatan<T extends kecamatanDefaultArgs<ExtArgs> = {}>(args?: Subset<T, kecamatanDefaultArgs<ExtArgs>>): Prisma__kecamatanClient<$Result.GetResult<Prisma.$kecamatanPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    kelurahan<T extends kelurahanDefaultArgs<ExtArgs> = {}>(args?: Subset<T, kelurahanDefaultArgs<ExtArgs>>): Prisma__kelurahanClient<$Result.GetResult<Prisma.$kelurahanPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    cities<T extends citiesDefaultArgs<ExtArgs> = {}>(args?: Subset<T, citiesDefaultArgs<ExtArgs>>): Prisma__citiesClient<$Result.GetResult<Prisma.$citiesPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    provinces<T extends provincesDefaultArgs<ExtArgs> = {}>(args?: Subset<T, provincesDefaultArgs<ExtArgs>>): Prisma__provincesClient<$Result.GetResult<Prisma.$provincesPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    tipe_alamat<T extends alamat$tipe_alamatArgs<ExtArgs> = {}>(args?: Subset<T, alamat$tipe_alamatArgs<ExtArgs>>): Prisma__tipe_alamatClient<$Result.GetResult<Prisma.$tipe_alamatPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the alamat model
   */
  interface alamatFieldRefs {
    readonly id_alamat: FieldRef<"alamat", 'String'>
    readonly id_user: FieldRef<"alamat", 'String'>
    readonly alamat: FieldRef<"alamat", 'String'>
    readonly catatan: FieldRef<"alamat", 'String'>
    readonly latitude: FieldRef<"alamat", 'Decimal'>
    readonly longitude: FieldRef<"alamat", 'Decimal'>
    readonly is_default: FieldRef<"alamat", 'Boolean'>
    readonly id_tipe: FieldRef<"alamat", 'BigInt'>
    readonly id_kel: FieldRef<"alamat", 'BigInt'>
    readonly id_kec: FieldRef<"alamat", 'BigInt'>
    readonly id_kota: FieldRef<"alamat", 'Int'>
    readonly id_prov: FieldRef<"alamat", 'Int'>
    readonly created_at: FieldRef<"alamat", 'DateTime'>
    readonly updated_at: FieldRef<"alamat", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * alamat findUnique
   */
  export type alamatFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the alamat
     */
    select?: alamatSelect<ExtArgs> | null
    /**
     * Omit specific fields from the alamat
     */
    omit?: alamatOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: alamatInclude<ExtArgs> | null
    /**
     * Filter, which alamat to fetch.
     */
    where: alamatWhereUniqueInput
  }

  /**
   * alamat findUniqueOrThrow
   */
  export type alamatFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the alamat
     */
    select?: alamatSelect<ExtArgs> | null
    /**
     * Omit specific fields from the alamat
     */
    omit?: alamatOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: alamatInclude<ExtArgs> | null
    /**
     * Filter, which alamat to fetch.
     */
    where: alamatWhereUniqueInput
  }

  /**
   * alamat findFirst
   */
  export type alamatFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the alamat
     */
    select?: alamatSelect<ExtArgs> | null
    /**
     * Omit specific fields from the alamat
     */
    omit?: alamatOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: alamatInclude<ExtArgs> | null
    /**
     * Filter, which alamat to fetch.
     */
    where?: alamatWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of alamats to fetch.
     */
    orderBy?: alamatOrderByWithRelationInput | alamatOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for alamats.
     */
    cursor?: alamatWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` alamats from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` alamats.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of alamats.
     */
    distinct?: AlamatScalarFieldEnum | AlamatScalarFieldEnum[]
  }

  /**
   * alamat findFirstOrThrow
   */
  export type alamatFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the alamat
     */
    select?: alamatSelect<ExtArgs> | null
    /**
     * Omit specific fields from the alamat
     */
    omit?: alamatOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: alamatInclude<ExtArgs> | null
    /**
     * Filter, which alamat to fetch.
     */
    where?: alamatWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of alamats to fetch.
     */
    orderBy?: alamatOrderByWithRelationInput | alamatOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for alamats.
     */
    cursor?: alamatWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` alamats from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` alamats.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of alamats.
     */
    distinct?: AlamatScalarFieldEnum | AlamatScalarFieldEnum[]
  }

  /**
   * alamat findMany
   */
  export type alamatFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the alamat
     */
    select?: alamatSelect<ExtArgs> | null
    /**
     * Omit specific fields from the alamat
     */
    omit?: alamatOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: alamatInclude<ExtArgs> | null
    /**
     * Filter, which alamats to fetch.
     */
    where?: alamatWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of alamats to fetch.
     */
    orderBy?: alamatOrderByWithRelationInput | alamatOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing alamats.
     */
    cursor?: alamatWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` alamats from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` alamats.
     */
    skip?: number
    distinct?: AlamatScalarFieldEnum | AlamatScalarFieldEnum[]
  }

  /**
   * alamat create
   */
  export type alamatCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the alamat
     */
    select?: alamatSelect<ExtArgs> | null
    /**
     * Omit specific fields from the alamat
     */
    omit?: alamatOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: alamatInclude<ExtArgs> | null
    /**
     * The data needed to create a alamat.
     */
    data: XOR<alamatCreateInput, alamatUncheckedCreateInput>
  }

  /**
   * alamat createMany
   */
  export type alamatCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many alamats.
     */
    data: alamatCreateManyInput | alamatCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * alamat createManyAndReturn
   */
  export type alamatCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the alamat
     */
    select?: alamatSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the alamat
     */
    omit?: alamatOmit<ExtArgs> | null
    /**
     * The data used to create many alamats.
     */
    data: alamatCreateManyInput | alamatCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: alamatIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * alamat update
   */
  export type alamatUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the alamat
     */
    select?: alamatSelect<ExtArgs> | null
    /**
     * Omit specific fields from the alamat
     */
    omit?: alamatOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: alamatInclude<ExtArgs> | null
    /**
     * The data needed to update a alamat.
     */
    data: XOR<alamatUpdateInput, alamatUncheckedUpdateInput>
    /**
     * Choose, which alamat to update.
     */
    where: alamatWhereUniqueInput
  }

  /**
   * alamat updateMany
   */
  export type alamatUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update alamats.
     */
    data: XOR<alamatUpdateManyMutationInput, alamatUncheckedUpdateManyInput>
    /**
     * Filter which alamats to update
     */
    where?: alamatWhereInput
    /**
     * Limit how many alamats to update.
     */
    limit?: number
  }

  /**
   * alamat updateManyAndReturn
   */
  export type alamatUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the alamat
     */
    select?: alamatSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the alamat
     */
    omit?: alamatOmit<ExtArgs> | null
    /**
     * The data used to update alamats.
     */
    data: XOR<alamatUpdateManyMutationInput, alamatUncheckedUpdateManyInput>
    /**
     * Filter which alamats to update
     */
    where?: alamatWhereInput
    /**
     * Limit how many alamats to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: alamatIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * alamat upsert
   */
  export type alamatUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the alamat
     */
    select?: alamatSelect<ExtArgs> | null
    /**
     * Omit specific fields from the alamat
     */
    omit?: alamatOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: alamatInclude<ExtArgs> | null
    /**
     * The filter to search for the alamat to update in case it exists.
     */
    where: alamatWhereUniqueInput
    /**
     * In case the alamat found by the `where` argument doesn't exist, create a new alamat with this data.
     */
    create: XOR<alamatCreateInput, alamatUncheckedCreateInput>
    /**
     * In case the alamat was found with the provided `where` argument, update it with this data.
     */
    update: XOR<alamatUpdateInput, alamatUncheckedUpdateInput>
  }

  /**
   * alamat delete
   */
  export type alamatDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the alamat
     */
    select?: alamatSelect<ExtArgs> | null
    /**
     * Omit specific fields from the alamat
     */
    omit?: alamatOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: alamatInclude<ExtArgs> | null
    /**
     * Filter which alamat to delete.
     */
    where: alamatWhereUniqueInput
  }

  /**
   * alamat deleteMany
   */
  export type alamatDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which alamats to delete
     */
    where?: alamatWhereInput
    /**
     * Limit how many alamats to delete.
     */
    limit?: number
  }

  /**
   * alamat.tipe_alamat
   */
  export type alamat$tipe_alamatArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tipe_alamat
     */
    select?: tipe_alamatSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tipe_alamat
     */
    omit?: tipe_alamatOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tipe_alamatInclude<ExtArgs> | null
    where?: tipe_alamatWhereInput
  }

  /**
   * alamat without action
   */
  export type alamatDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the alamat
     */
    select?: alamatSelect<ExtArgs> | null
    /**
     * Omit specific fields from the alamat
     */
    omit?: alamatOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: alamatInclude<ExtArgs> | null
  }


  /**
   * Model kecamatan
   */

  export type AggregateKecamatan = {
    _count: KecamatanCountAggregateOutputType | null
    _avg: KecamatanAvgAggregateOutputType | null
    _sum: KecamatanSumAggregateOutputType | null
    _min: KecamatanMinAggregateOutputType | null
    _max: KecamatanMaxAggregateOutputType | null
  }

  export type KecamatanAvgAggregateOutputType = {
    id_kec: number | null
    id_kota: number | null
  }

  export type KecamatanSumAggregateOutputType = {
    id_kec: bigint | null
    id_kota: number | null
  }

  export type KecamatanMinAggregateOutputType = {
    id_kec: bigint | null
    kecamatan: string | null
    id_kota: number | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type KecamatanMaxAggregateOutputType = {
    id_kec: bigint | null
    kecamatan: string | null
    id_kota: number | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type KecamatanCountAggregateOutputType = {
    id_kec: number
    kecamatan: number
    id_kota: number
    created_at: number
    updated_at: number
    _all: number
  }


  export type KecamatanAvgAggregateInputType = {
    id_kec?: true
    id_kota?: true
  }

  export type KecamatanSumAggregateInputType = {
    id_kec?: true
    id_kota?: true
  }

  export type KecamatanMinAggregateInputType = {
    id_kec?: true
    kecamatan?: true
    id_kota?: true
    created_at?: true
    updated_at?: true
  }

  export type KecamatanMaxAggregateInputType = {
    id_kec?: true
    kecamatan?: true
    id_kota?: true
    created_at?: true
    updated_at?: true
  }

  export type KecamatanCountAggregateInputType = {
    id_kec?: true
    kecamatan?: true
    id_kota?: true
    created_at?: true
    updated_at?: true
    _all?: true
  }

  export type KecamatanAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which kecamatan to aggregate.
     */
    where?: kecamatanWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of kecamatans to fetch.
     */
    orderBy?: kecamatanOrderByWithRelationInput | kecamatanOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: kecamatanWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` kecamatans from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` kecamatans.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned kecamatans
    **/
    _count?: true | KecamatanCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: KecamatanAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: KecamatanSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: KecamatanMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: KecamatanMaxAggregateInputType
  }

  export type GetKecamatanAggregateType<T extends KecamatanAggregateArgs> = {
        [P in keyof T & keyof AggregateKecamatan]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateKecamatan[P]>
      : GetScalarType<T[P], AggregateKecamatan[P]>
  }




  export type kecamatanGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: kecamatanWhereInput
    orderBy?: kecamatanOrderByWithAggregationInput | kecamatanOrderByWithAggregationInput[]
    by: KecamatanScalarFieldEnum[] | KecamatanScalarFieldEnum
    having?: kecamatanScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: KecamatanCountAggregateInputType | true
    _avg?: KecamatanAvgAggregateInputType
    _sum?: KecamatanSumAggregateInputType
    _min?: KecamatanMinAggregateInputType
    _max?: KecamatanMaxAggregateInputType
  }

  export type KecamatanGroupByOutputType = {
    id_kec: bigint
    kecamatan: string | null
    id_kota: number | null
    created_at: Date | null
    updated_at: Date | null
    _count: KecamatanCountAggregateOutputType | null
    _avg: KecamatanAvgAggregateOutputType | null
    _sum: KecamatanSumAggregateOutputType | null
    _min: KecamatanMinAggregateOutputType | null
    _max: KecamatanMaxAggregateOutputType | null
  }

  type GetKecamatanGroupByPayload<T extends kecamatanGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<KecamatanGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof KecamatanGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], KecamatanGroupByOutputType[P]>
            : GetScalarType<T[P], KecamatanGroupByOutputType[P]>
        }
      >
    >


  export type kecamatanSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id_kec?: boolean
    kecamatan?: boolean
    id_kota?: boolean
    created_at?: boolean
    updated_at?: boolean
    alamat?: boolean | kecamatan$alamatArgs<ExtArgs>
    cities?: boolean | kecamatan$citiesArgs<ExtArgs>
    kelurahan?: boolean | kecamatan$kelurahanArgs<ExtArgs>
    _count?: boolean | KecamatanCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["kecamatan"]>

  export type kecamatanSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id_kec?: boolean
    kecamatan?: boolean
    id_kota?: boolean
    created_at?: boolean
    updated_at?: boolean
    cities?: boolean | kecamatan$citiesArgs<ExtArgs>
  }, ExtArgs["result"]["kecamatan"]>

  export type kecamatanSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id_kec?: boolean
    kecamatan?: boolean
    id_kota?: boolean
    created_at?: boolean
    updated_at?: boolean
    cities?: boolean | kecamatan$citiesArgs<ExtArgs>
  }, ExtArgs["result"]["kecamatan"]>

  export type kecamatanSelectScalar = {
    id_kec?: boolean
    kecamatan?: boolean
    id_kota?: boolean
    created_at?: boolean
    updated_at?: boolean
  }

  export type kecamatanOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id_kec" | "kecamatan" | "id_kota" | "created_at" | "updated_at", ExtArgs["result"]["kecamatan"]>
  export type kecamatanInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    alamat?: boolean | kecamatan$alamatArgs<ExtArgs>
    cities?: boolean | kecamatan$citiesArgs<ExtArgs>
    kelurahan?: boolean | kecamatan$kelurahanArgs<ExtArgs>
    _count?: boolean | KecamatanCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type kecamatanIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    cities?: boolean | kecamatan$citiesArgs<ExtArgs>
  }
  export type kecamatanIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    cities?: boolean | kecamatan$citiesArgs<ExtArgs>
  }

  export type $kecamatanPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "kecamatan"
    objects: {
      alamat: Prisma.$alamatPayload<ExtArgs>[]
      cities: Prisma.$citiesPayload<ExtArgs> | null
      kelurahan: Prisma.$kelurahanPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id_kec: bigint
      kecamatan: string | null
      id_kota: number | null
      created_at: Date | null
      updated_at: Date | null
    }, ExtArgs["result"]["kecamatan"]>
    composites: {}
  }

  type kecamatanGetPayload<S extends boolean | null | undefined | kecamatanDefaultArgs> = $Result.GetResult<Prisma.$kecamatanPayload, S>

  type kecamatanCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<kecamatanFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: KecamatanCountAggregateInputType | true
    }

  export interface kecamatanDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['kecamatan'], meta: { name: 'kecamatan' } }
    /**
     * Find zero or one Kecamatan that matches the filter.
     * @param {kecamatanFindUniqueArgs} args - Arguments to find a Kecamatan
     * @example
     * // Get one Kecamatan
     * const kecamatan = await prisma.kecamatan.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends kecamatanFindUniqueArgs>(args: SelectSubset<T, kecamatanFindUniqueArgs<ExtArgs>>): Prisma__kecamatanClient<$Result.GetResult<Prisma.$kecamatanPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Kecamatan that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {kecamatanFindUniqueOrThrowArgs} args - Arguments to find a Kecamatan
     * @example
     * // Get one Kecamatan
     * const kecamatan = await prisma.kecamatan.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends kecamatanFindUniqueOrThrowArgs>(args: SelectSubset<T, kecamatanFindUniqueOrThrowArgs<ExtArgs>>): Prisma__kecamatanClient<$Result.GetResult<Prisma.$kecamatanPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Kecamatan that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {kecamatanFindFirstArgs} args - Arguments to find a Kecamatan
     * @example
     * // Get one Kecamatan
     * const kecamatan = await prisma.kecamatan.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends kecamatanFindFirstArgs>(args?: SelectSubset<T, kecamatanFindFirstArgs<ExtArgs>>): Prisma__kecamatanClient<$Result.GetResult<Prisma.$kecamatanPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Kecamatan that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {kecamatanFindFirstOrThrowArgs} args - Arguments to find a Kecamatan
     * @example
     * // Get one Kecamatan
     * const kecamatan = await prisma.kecamatan.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends kecamatanFindFirstOrThrowArgs>(args?: SelectSubset<T, kecamatanFindFirstOrThrowArgs<ExtArgs>>): Prisma__kecamatanClient<$Result.GetResult<Prisma.$kecamatanPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Kecamatans that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {kecamatanFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Kecamatans
     * const kecamatans = await prisma.kecamatan.findMany()
     * 
     * // Get first 10 Kecamatans
     * const kecamatans = await prisma.kecamatan.findMany({ take: 10 })
     * 
     * // Only select the `id_kec`
     * const kecamatanWithId_kecOnly = await prisma.kecamatan.findMany({ select: { id_kec: true } })
     * 
     */
    findMany<T extends kecamatanFindManyArgs>(args?: SelectSubset<T, kecamatanFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$kecamatanPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Kecamatan.
     * @param {kecamatanCreateArgs} args - Arguments to create a Kecamatan.
     * @example
     * // Create one Kecamatan
     * const Kecamatan = await prisma.kecamatan.create({
     *   data: {
     *     // ... data to create a Kecamatan
     *   }
     * })
     * 
     */
    create<T extends kecamatanCreateArgs>(args: SelectSubset<T, kecamatanCreateArgs<ExtArgs>>): Prisma__kecamatanClient<$Result.GetResult<Prisma.$kecamatanPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Kecamatans.
     * @param {kecamatanCreateManyArgs} args - Arguments to create many Kecamatans.
     * @example
     * // Create many Kecamatans
     * const kecamatan = await prisma.kecamatan.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends kecamatanCreateManyArgs>(args?: SelectSubset<T, kecamatanCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Kecamatans and returns the data saved in the database.
     * @param {kecamatanCreateManyAndReturnArgs} args - Arguments to create many Kecamatans.
     * @example
     * // Create many Kecamatans
     * const kecamatan = await prisma.kecamatan.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Kecamatans and only return the `id_kec`
     * const kecamatanWithId_kecOnly = await prisma.kecamatan.createManyAndReturn({
     *   select: { id_kec: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends kecamatanCreateManyAndReturnArgs>(args?: SelectSubset<T, kecamatanCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$kecamatanPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Kecamatan.
     * @param {kecamatanDeleteArgs} args - Arguments to delete one Kecamatan.
     * @example
     * // Delete one Kecamatan
     * const Kecamatan = await prisma.kecamatan.delete({
     *   where: {
     *     // ... filter to delete one Kecamatan
     *   }
     * })
     * 
     */
    delete<T extends kecamatanDeleteArgs>(args: SelectSubset<T, kecamatanDeleteArgs<ExtArgs>>): Prisma__kecamatanClient<$Result.GetResult<Prisma.$kecamatanPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Kecamatan.
     * @param {kecamatanUpdateArgs} args - Arguments to update one Kecamatan.
     * @example
     * // Update one Kecamatan
     * const kecamatan = await prisma.kecamatan.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends kecamatanUpdateArgs>(args: SelectSubset<T, kecamatanUpdateArgs<ExtArgs>>): Prisma__kecamatanClient<$Result.GetResult<Prisma.$kecamatanPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Kecamatans.
     * @param {kecamatanDeleteManyArgs} args - Arguments to filter Kecamatans to delete.
     * @example
     * // Delete a few Kecamatans
     * const { count } = await prisma.kecamatan.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends kecamatanDeleteManyArgs>(args?: SelectSubset<T, kecamatanDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Kecamatans.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {kecamatanUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Kecamatans
     * const kecamatan = await prisma.kecamatan.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends kecamatanUpdateManyArgs>(args: SelectSubset<T, kecamatanUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Kecamatans and returns the data updated in the database.
     * @param {kecamatanUpdateManyAndReturnArgs} args - Arguments to update many Kecamatans.
     * @example
     * // Update many Kecamatans
     * const kecamatan = await prisma.kecamatan.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Kecamatans and only return the `id_kec`
     * const kecamatanWithId_kecOnly = await prisma.kecamatan.updateManyAndReturn({
     *   select: { id_kec: true },
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
    updateManyAndReturn<T extends kecamatanUpdateManyAndReturnArgs>(args: SelectSubset<T, kecamatanUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$kecamatanPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Kecamatan.
     * @param {kecamatanUpsertArgs} args - Arguments to update or create a Kecamatan.
     * @example
     * // Update or create a Kecamatan
     * const kecamatan = await prisma.kecamatan.upsert({
     *   create: {
     *     // ... data to create a Kecamatan
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Kecamatan we want to update
     *   }
     * })
     */
    upsert<T extends kecamatanUpsertArgs>(args: SelectSubset<T, kecamatanUpsertArgs<ExtArgs>>): Prisma__kecamatanClient<$Result.GetResult<Prisma.$kecamatanPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Kecamatans.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {kecamatanCountArgs} args - Arguments to filter Kecamatans to count.
     * @example
     * // Count the number of Kecamatans
     * const count = await prisma.kecamatan.count({
     *   where: {
     *     // ... the filter for the Kecamatans we want to count
     *   }
     * })
    **/
    count<T extends kecamatanCountArgs>(
      args?: Subset<T, kecamatanCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], KecamatanCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Kecamatan.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {KecamatanAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends KecamatanAggregateArgs>(args: Subset<T, KecamatanAggregateArgs>): Prisma.PrismaPromise<GetKecamatanAggregateType<T>>

    /**
     * Group by Kecamatan.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {kecamatanGroupByArgs} args - Group by arguments.
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
      T extends kecamatanGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: kecamatanGroupByArgs['orderBy'] }
        : { orderBy?: kecamatanGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, kecamatanGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetKecamatanGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the kecamatan model
   */
  readonly fields: kecamatanFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for kecamatan.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__kecamatanClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    alamat<T extends kecamatan$alamatArgs<ExtArgs> = {}>(args?: Subset<T, kecamatan$alamatArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$alamatPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    cities<T extends kecamatan$citiesArgs<ExtArgs> = {}>(args?: Subset<T, kecamatan$citiesArgs<ExtArgs>>): Prisma__citiesClient<$Result.GetResult<Prisma.$citiesPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    kelurahan<T extends kecamatan$kelurahanArgs<ExtArgs> = {}>(args?: Subset<T, kecamatan$kelurahanArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$kelurahanPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the kecamatan model
   */
  interface kecamatanFieldRefs {
    readonly id_kec: FieldRef<"kecamatan", 'BigInt'>
    readonly kecamatan: FieldRef<"kecamatan", 'String'>
    readonly id_kota: FieldRef<"kecamatan", 'Int'>
    readonly created_at: FieldRef<"kecamatan", 'DateTime'>
    readonly updated_at: FieldRef<"kecamatan", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * kecamatan findUnique
   */
  export type kecamatanFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the kecamatan
     */
    select?: kecamatanSelect<ExtArgs> | null
    /**
     * Omit specific fields from the kecamatan
     */
    omit?: kecamatanOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: kecamatanInclude<ExtArgs> | null
    /**
     * Filter, which kecamatan to fetch.
     */
    where: kecamatanWhereUniqueInput
  }

  /**
   * kecamatan findUniqueOrThrow
   */
  export type kecamatanFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the kecamatan
     */
    select?: kecamatanSelect<ExtArgs> | null
    /**
     * Omit specific fields from the kecamatan
     */
    omit?: kecamatanOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: kecamatanInclude<ExtArgs> | null
    /**
     * Filter, which kecamatan to fetch.
     */
    where: kecamatanWhereUniqueInput
  }

  /**
   * kecamatan findFirst
   */
  export type kecamatanFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the kecamatan
     */
    select?: kecamatanSelect<ExtArgs> | null
    /**
     * Omit specific fields from the kecamatan
     */
    omit?: kecamatanOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: kecamatanInclude<ExtArgs> | null
    /**
     * Filter, which kecamatan to fetch.
     */
    where?: kecamatanWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of kecamatans to fetch.
     */
    orderBy?: kecamatanOrderByWithRelationInput | kecamatanOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for kecamatans.
     */
    cursor?: kecamatanWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` kecamatans from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` kecamatans.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of kecamatans.
     */
    distinct?: KecamatanScalarFieldEnum | KecamatanScalarFieldEnum[]
  }

  /**
   * kecamatan findFirstOrThrow
   */
  export type kecamatanFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the kecamatan
     */
    select?: kecamatanSelect<ExtArgs> | null
    /**
     * Omit specific fields from the kecamatan
     */
    omit?: kecamatanOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: kecamatanInclude<ExtArgs> | null
    /**
     * Filter, which kecamatan to fetch.
     */
    where?: kecamatanWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of kecamatans to fetch.
     */
    orderBy?: kecamatanOrderByWithRelationInput | kecamatanOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for kecamatans.
     */
    cursor?: kecamatanWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` kecamatans from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` kecamatans.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of kecamatans.
     */
    distinct?: KecamatanScalarFieldEnum | KecamatanScalarFieldEnum[]
  }

  /**
   * kecamatan findMany
   */
  export type kecamatanFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the kecamatan
     */
    select?: kecamatanSelect<ExtArgs> | null
    /**
     * Omit specific fields from the kecamatan
     */
    omit?: kecamatanOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: kecamatanInclude<ExtArgs> | null
    /**
     * Filter, which kecamatans to fetch.
     */
    where?: kecamatanWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of kecamatans to fetch.
     */
    orderBy?: kecamatanOrderByWithRelationInput | kecamatanOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing kecamatans.
     */
    cursor?: kecamatanWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` kecamatans from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` kecamatans.
     */
    skip?: number
    distinct?: KecamatanScalarFieldEnum | KecamatanScalarFieldEnum[]
  }

  /**
   * kecamatan create
   */
  export type kecamatanCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the kecamatan
     */
    select?: kecamatanSelect<ExtArgs> | null
    /**
     * Omit specific fields from the kecamatan
     */
    omit?: kecamatanOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: kecamatanInclude<ExtArgs> | null
    /**
     * The data needed to create a kecamatan.
     */
    data?: XOR<kecamatanCreateInput, kecamatanUncheckedCreateInput>
  }

  /**
   * kecamatan createMany
   */
  export type kecamatanCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many kecamatans.
     */
    data: kecamatanCreateManyInput | kecamatanCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * kecamatan createManyAndReturn
   */
  export type kecamatanCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the kecamatan
     */
    select?: kecamatanSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the kecamatan
     */
    omit?: kecamatanOmit<ExtArgs> | null
    /**
     * The data used to create many kecamatans.
     */
    data: kecamatanCreateManyInput | kecamatanCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: kecamatanIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * kecamatan update
   */
  export type kecamatanUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the kecamatan
     */
    select?: kecamatanSelect<ExtArgs> | null
    /**
     * Omit specific fields from the kecamatan
     */
    omit?: kecamatanOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: kecamatanInclude<ExtArgs> | null
    /**
     * The data needed to update a kecamatan.
     */
    data: XOR<kecamatanUpdateInput, kecamatanUncheckedUpdateInput>
    /**
     * Choose, which kecamatan to update.
     */
    where: kecamatanWhereUniqueInput
  }

  /**
   * kecamatan updateMany
   */
  export type kecamatanUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update kecamatans.
     */
    data: XOR<kecamatanUpdateManyMutationInput, kecamatanUncheckedUpdateManyInput>
    /**
     * Filter which kecamatans to update
     */
    where?: kecamatanWhereInput
    /**
     * Limit how many kecamatans to update.
     */
    limit?: number
  }

  /**
   * kecamatan updateManyAndReturn
   */
  export type kecamatanUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the kecamatan
     */
    select?: kecamatanSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the kecamatan
     */
    omit?: kecamatanOmit<ExtArgs> | null
    /**
     * The data used to update kecamatans.
     */
    data: XOR<kecamatanUpdateManyMutationInput, kecamatanUncheckedUpdateManyInput>
    /**
     * Filter which kecamatans to update
     */
    where?: kecamatanWhereInput
    /**
     * Limit how many kecamatans to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: kecamatanIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * kecamatan upsert
   */
  export type kecamatanUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the kecamatan
     */
    select?: kecamatanSelect<ExtArgs> | null
    /**
     * Omit specific fields from the kecamatan
     */
    omit?: kecamatanOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: kecamatanInclude<ExtArgs> | null
    /**
     * The filter to search for the kecamatan to update in case it exists.
     */
    where: kecamatanWhereUniqueInput
    /**
     * In case the kecamatan found by the `where` argument doesn't exist, create a new kecamatan with this data.
     */
    create: XOR<kecamatanCreateInput, kecamatanUncheckedCreateInput>
    /**
     * In case the kecamatan was found with the provided `where` argument, update it with this data.
     */
    update: XOR<kecamatanUpdateInput, kecamatanUncheckedUpdateInput>
  }

  /**
   * kecamatan delete
   */
  export type kecamatanDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the kecamatan
     */
    select?: kecamatanSelect<ExtArgs> | null
    /**
     * Omit specific fields from the kecamatan
     */
    omit?: kecamatanOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: kecamatanInclude<ExtArgs> | null
    /**
     * Filter which kecamatan to delete.
     */
    where: kecamatanWhereUniqueInput
  }

  /**
   * kecamatan deleteMany
   */
  export type kecamatanDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which kecamatans to delete
     */
    where?: kecamatanWhereInput
    /**
     * Limit how many kecamatans to delete.
     */
    limit?: number
  }

  /**
   * kecamatan.alamat
   */
  export type kecamatan$alamatArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the alamat
     */
    select?: alamatSelect<ExtArgs> | null
    /**
     * Omit specific fields from the alamat
     */
    omit?: alamatOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: alamatInclude<ExtArgs> | null
    where?: alamatWhereInput
    orderBy?: alamatOrderByWithRelationInput | alamatOrderByWithRelationInput[]
    cursor?: alamatWhereUniqueInput
    take?: number
    skip?: number
    distinct?: AlamatScalarFieldEnum | AlamatScalarFieldEnum[]
  }

  /**
   * kecamatan.cities
   */
  export type kecamatan$citiesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
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
   * kecamatan.kelurahan
   */
  export type kecamatan$kelurahanArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the kelurahan
     */
    select?: kelurahanSelect<ExtArgs> | null
    /**
     * Omit specific fields from the kelurahan
     */
    omit?: kelurahanOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: kelurahanInclude<ExtArgs> | null
    where?: kelurahanWhereInput
    orderBy?: kelurahanOrderByWithRelationInput | kelurahanOrderByWithRelationInput[]
    cursor?: kelurahanWhereUniqueInput
    take?: number
    skip?: number
    distinct?: KelurahanScalarFieldEnum | KelurahanScalarFieldEnum[]
  }

  /**
   * kecamatan without action
   */
  export type kecamatanDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the kecamatan
     */
    select?: kecamatanSelect<ExtArgs> | null
    /**
     * Omit specific fields from the kecamatan
     */
    omit?: kecamatanOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: kecamatanInclude<ExtArgs> | null
  }


  /**
   * Model kelurahan
   */

  export type AggregateKelurahan = {
    _count: KelurahanCountAggregateOutputType | null
    _avg: KelurahanAvgAggregateOutputType | null
    _sum: KelurahanSumAggregateOutputType | null
    _min: KelurahanMinAggregateOutputType | null
    _max: KelurahanMaxAggregateOutputType | null
  }

  export type KelurahanAvgAggregateOutputType = {
    id_kel: number | null
    id_kec: number | null
  }

  export type KelurahanSumAggregateOutputType = {
    id_kel: bigint | null
    id_kec: bigint | null
  }

  export type KelurahanMinAggregateOutputType = {
    id_kel: bigint | null
    kelurahan: string | null
    id_kec: bigint | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type KelurahanMaxAggregateOutputType = {
    id_kel: bigint | null
    kelurahan: string | null
    id_kec: bigint | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type KelurahanCountAggregateOutputType = {
    id_kel: number
    kelurahan: number
    id_kec: number
    created_at: number
    updated_at: number
    _all: number
  }


  export type KelurahanAvgAggregateInputType = {
    id_kel?: true
    id_kec?: true
  }

  export type KelurahanSumAggregateInputType = {
    id_kel?: true
    id_kec?: true
  }

  export type KelurahanMinAggregateInputType = {
    id_kel?: true
    kelurahan?: true
    id_kec?: true
    created_at?: true
    updated_at?: true
  }

  export type KelurahanMaxAggregateInputType = {
    id_kel?: true
    kelurahan?: true
    id_kec?: true
    created_at?: true
    updated_at?: true
  }

  export type KelurahanCountAggregateInputType = {
    id_kel?: true
    kelurahan?: true
    id_kec?: true
    created_at?: true
    updated_at?: true
    _all?: true
  }

  export type KelurahanAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which kelurahan to aggregate.
     */
    where?: kelurahanWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of kelurahans to fetch.
     */
    orderBy?: kelurahanOrderByWithRelationInput | kelurahanOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: kelurahanWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` kelurahans from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` kelurahans.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned kelurahans
    **/
    _count?: true | KelurahanCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: KelurahanAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: KelurahanSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: KelurahanMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: KelurahanMaxAggregateInputType
  }

  export type GetKelurahanAggregateType<T extends KelurahanAggregateArgs> = {
        [P in keyof T & keyof AggregateKelurahan]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateKelurahan[P]>
      : GetScalarType<T[P], AggregateKelurahan[P]>
  }




  export type kelurahanGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: kelurahanWhereInput
    orderBy?: kelurahanOrderByWithAggregationInput | kelurahanOrderByWithAggregationInput[]
    by: KelurahanScalarFieldEnum[] | KelurahanScalarFieldEnum
    having?: kelurahanScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: KelurahanCountAggregateInputType | true
    _avg?: KelurahanAvgAggregateInputType
    _sum?: KelurahanSumAggregateInputType
    _min?: KelurahanMinAggregateInputType
    _max?: KelurahanMaxAggregateInputType
  }

  export type KelurahanGroupByOutputType = {
    id_kel: bigint
    kelurahan: string | null
    id_kec: bigint | null
    created_at: Date | null
    updated_at: Date | null
    _count: KelurahanCountAggregateOutputType | null
    _avg: KelurahanAvgAggregateOutputType | null
    _sum: KelurahanSumAggregateOutputType | null
    _min: KelurahanMinAggregateOutputType | null
    _max: KelurahanMaxAggregateOutputType | null
  }

  type GetKelurahanGroupByPayload<T extends kelurahanGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<KelurahanGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof KelurahanGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], KelurahanGroupByOutputType[P]>
            : GetScalarType<T[P], KelurahanGroupByOutputType[P]>
        }
      >
    >


  export type kelurahanSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id_kel?: boolean
    kelurahan?: boolean
    id_kec?: boolean
    created_at?: boolean
    updated_at?: boolean
    alamat?: boolean | kelurahan$alamatArgs<ExtArgs>
    kecamatan?: boolean | kelurahan$kecamatanArgs<ExtArgs>
    _count?: boolean | KelurahanCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["kelurahan"]>

  export type kelurahanSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id_kel?: boolean
    kelurahan?: boolean
    id_kec?: boolean
    created_at?: boolean
    updated_at?: boolean
    kecamatan?: boolean | kelurahan$kecamatanArgs<ExtArgs>
  }, ExtArgs["result"]["kelurahan"]>

  export type kelurahanSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id_kel?: boolean
    kelurahan?: boolean
    id_kec?: boolean
    created_at?: boolean
    updated_at?: boolean
    kecamatan?: boolean | kelurahan$kecamatanArgs<ExtArgs>
  }, ExtArgs["result"]["kelurahan"]>

  export type kelurahanSelectScalar = {
    id_kel?: boolean
    kelurahan?: boolean
    id_kec?: boolean
    created_at?: boolean
    updated_at?: boolean
  }

  export type kelurahanOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id_kel" | "kelurahan" | "id_kec" | "created_at" | "updated_at", ExtArgs["result"]["kelurahan"]>
  export type kelurahanInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    alamat?: boolean | kelurahan$alamatArgs<ExtArgs>
    kecamatan?: boolean | kelurahan$kecamatanArgs<ExtArgs>
    _count?: boolean | KelurahanCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type kelurahanIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    kecamatan?: boolean | kelurahan$kecamatanArgs<ExtArgs>
  }
  export type kelurahanIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    kecamatan?: boolean | kelurahan$kecamatanArgs<ExtArgs>
  }

  export type $kelurahanPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "kelurahan"
    objects: {
      alamat: Prisma.$alamatPayload<ExtArgs>[]
      kecamatan: Prisma.$kecamatanPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id_kel: bigint
      kelurahan: string | null
      id_kec: bigint | null
      created_at: Date | null
      updated_at: Date | null
    }, ExtArgs["result"]["kelurahan"]>
    composites: {}
  }

  type kelurahanGetPayload<S extends boolean | null | undefined | kelurahanDefaultArgs> = $Result.GetResult<Prisma.$kelurahanPayload, S>

  type kelurahanCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<kelurahanFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: KelurahanCountAggregateInputType | true
    }

  export interface kelurahanDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['kelurahan'], meta: { name: 'kelurahan' } }
    /**
     * Find zero or one Kelurahan that matches the filter.
     * @param {kelurahanFindUniqueArgs} args - Arguments to find a Kelurahan
     * @example
     * // Get one Kelurahan
     * const kelurahan = await prisma.kelurahan.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends kelurahanFindUniqueArgs>(args: SelectSubset<T, kelurahanFindUniqueArgs<ExtArgs>>): Prisma__kelurahanClient<$Result.GetResult<Prisma.$kelurahanPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Kelurahan that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {kelurahanFindUniqueOrThrowArgs} args - Arguments to find a Kelurahan
     * @example
     * // Get one Kelurahan
     * const kelurahan = await prisma.kelurahan.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends kelurahanFindUniqueOrThrowArgs>(args: SelectSubset<T, kelurahanFindUniqueOrThrowArgs<ExtArgs>>): Prisma__kelurahanClient<$Result.GetResult<Prisma.$kelurahanPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Kelurahan that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {kelurahanFindFirstArgs} args - Arguments to find a Kelurahan
     * @example
     * // Get one Kelurahan
     * const kelurahan = await prisma.kelurahan.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends kelurahanFindFirstArgs>(args?: SelectSubset<T, kelurahanFindFirstArgs<ExtArgs>>): Prisma__kelurahanClient<$Result.GetResult<Prisma.$kelurahanPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Kelurahan that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {kelurahanFindFirstOrThrowArgs} args - Arguments to find a Kelurahan
     * @example
     * // Get one Kelurahan
     * const kelurahan = await prisma.kelurahan.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends kelurahanFindFirstOrThrowArgs>(args?: SelectSubset<T, kelurahanFindFirstOrThrowArgs<ExtArgs>>): Prisma__kelurahanClient<$Result.GetResult<Prisma.$kelurahanPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Kelurahans that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {kelurahanFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Kelurahans
     * const kelurahans = await prisma.kelurahan.findMany()
     * 
     * // Get first 10 Kelurahans
     * const kelurahans = await prisma.kelurahan.findMany({ take: 10 })
     * 
     * // Only select the `id_kel`
     * const kelurahanWithId_kelOnly = await prisma.kelurahan.findMany({ select: { id_kel: true } })
     * 
     */
    findMany<T extends kelurahanFindManyArgs>(args?: SelectSubset<T, kelurahanFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$kelurahanPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Kelurahan.
     * @param {kelurahanCreateArgs} args - Arguments to create a Kelurahan.
     * @example
     * // Create one Kelurahan
     * const Kelurahan = await prisma.kelurahan.create({
     *   data: {
     *     // ... data to create a Kelurahan
     *   }
     * })
     * 
     */
    create<T extends kelurahanCreateArgs>(args: SelectSubset<T, kelurahanCreateArgs<ExtArgs>>): Prisma__kelurahanClient<$Result.GetResult<Prisma.$kelurahanPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Kelurahans.
     * @param {kelurahanCreateManyArgs} args - Arguments to create many Kelurahans.
     * @example
     * // Create many Kelurahans
     * const kelurahan = await prisma.kelurahan.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends kelurahanCreateManyArgs>(args?: SelectSubset<T, kelurahanCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Kelurahans and returns the data saved in the database.
     * @param {kelurahanCreateManyAndReturnArgs} args - Arguments to create many Kelurahans.
     * @example
     * // Create many Kelurahans
     * const kelurahan = await prisma.kelurahan.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Kelurahans and only return the `id_kel`
     * const kelurahanWithId_kelOnly = await prisma.kelurahan.createManyAndReturn({
     *   select: { id_kel: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends kelurahanCreateManyAndReturnArgs>(args?: SelectSubset<T, kelurahanCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$kelurahanPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Kelurahan.
     * @param {kelurahanDeleteArgs} args - Arguments to delete one Kelurahan.
     * @example
     * // Delete one Kelurahan
     * const Kelurahan = await prisma.kelurahan.delete({
     *   where: {
     *     // ... filter to delete one Kelurahan
     *   }
     * })
     * 
     */
    delete<T extends kelurahanDeleteArgs>(args: SelectSubset<T, kelurahanDeleteArgs<ExtArgs>>): Prisma__kelurahanClient<$Result.GetResult<Prisma.$kelurahanPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Kelurahan.
     * @param {kelurahanUpdateArgs} args - Arguments to update one Kelurahan.
     * @example
     * // Update one Kelurahan
     * const kelurahan = await prisma.kelurahan.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends kelurahanUpdateArgs>(args: SelectSubset<T, kelurahanUpdateArgs<ExtArgs>>): Prisma__kelurahanClient<$Result.GetResult<Prisma.$kelurahanPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Kelurahans.
     * @param {kelurahanDeleteManyArgs} args - Arguments to filter Kelurahans to delete.
     * @example
     * // Delete a few Kelurahans
     * const { count } = await prisma.kelurahan.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends kelurahanDeleteManyArgs>(args?: SelectSubset<T, kelurahanDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Kelurahans.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {kelurahanUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Kelurahans
     * const kelurahan = await prisma.kelurahan.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends kelurahanUpdateManyArgs>(args: SelectSubset<T, kelurahanUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Kelurahans and returns the data updated in the database.
     * @param {kelurahanUpdateManyAndReturnArgs} args - Arguments to update many Kelurahans.
     * @example
     * // Update many Kelurahans
     * const kelurahan = await prisma.kelurahan.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Kelurahans and only return the `id_kel`
     * const kelurahanWithId_kelOnly = await prisma.kelurahan.updateManyAndReturn({
     *   select: { id_kel: true },
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
    updateManyAndReturn<T extends kelurahanUpdateManyAndReturnArgs>(args: SelectSubset<T, kelurahanUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$kelurahanPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Kelurahan.
     * @param {kelurahanUpsertArgs} args - Arguments to update or create a Kelurahan.
     * @example
     * // Update or create a Kelurahan
     * const kelurahan = await prisma.kelurahan.upsert({
     *   create: {
     *     // ... data to create a Kelurahan
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Kelurahan we want to update
     *   }
     * })
     */
    upsert<T extends kelurahanUpsertArgs>(args: SelectSubset<T, kelurahanUpsertArgs<ExtArgs>>): Prisma__kelurahanClient<$Result.GetResult<Prisma.$kelurahanPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Kelurahans.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {kelurahanCountArgs} args - Arguments to filter Kelurahans to count.
     * @example
     * // Count the number of Kelurahans
     * const count = await prisma.kelurahan.count({
     *   where: {
     *     // ... the filter for the Kelurahans we want to count
     *   }
     * })
    **/
    count<T extends kelurahanCountArgs>(
      args?: Subset<T, kelurahanCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], KelurahanCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Kelurahan.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {KelurahanAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends KelurahanAggregateArgs>(args: Subset<T, KelurahanAggregateArgs>): Prisma.PrismaPromise<GetKelurahanAggregateType<T>>

    /**
     * Group by Kelurahan.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {kelurahanGroupByArgs} args - Group by arguments.
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
      T extends kelurahanGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: kelurahanGroupByArgs['orderBy'] }
        : { orderBy?: kelurahanGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, kelurahanGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetKelurahanGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the kelurahan model
   */
  readonly fields: kelurahanFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for kelurahan.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__kelurahanClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    alamat<T extends kelurahan$alamatArgs<ExtArgs> = {}>(args?: Subset<T, kelurahan$alamatArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$alamatPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    kecamatan<T extends kelurahan$kecamatanArgs<ExtArgs> = {}>(args?: Subset<T, kelurahan$kecamatanArgs<ExtArgs>>): Prisma__kecamatanClient<$Result.GetResult<Prisma.$kecamatanPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the kelurahan model
   */
  interface kelurahanFieldRefs {
    readonly id_kel: FieldRef<"kelurahan", 'BigInt'>
    readonly kelurahan: FieldRef<"kelurahan", 'String'>
    readonly id_kec: FieldRef<"kelurahan", 'BigInt'>
    readonly created_at: FieldRef<"kelurahan", 'DateTime'>
    readonly updated_at: FieldRef<"kelurahan", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * kelurahan findUnique
   */
  export type kelurahanFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the kelurahan
     */
    select?: kelurahanSelect<ExtArgs> | null
    /**
     * Omit specific fields from the kelurahan
     */
    omit?: kelurahanOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: kelurahanInclude<ExtArgs> | null
    /**
     * Filter, which kelurahan to fetch.
     */
    where: kelurahanWhereUniqueInput
  }

  /**
   * kelurahan findUniqueOrThrow
   */
  export type kelurahanFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the kelurahan
     */
    select?: kelurahanSelect<ExtArgs> | null
    /**
     * Omit specific fields from the kelurahan
     */
    omit?: kelurahanOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: kelurahanInclude<ExtArgs> | null
    /**
     * Filter, which kelurahan to fetch.
     */
    where: kelurahanWhereUniqueInput
  }

  /**
   * kelurahan findFirst
   */
  export type kelurahanFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the kelurahan
     */
    select?: kelurahanSelect<ExtArgs> | null
    /**
     * Omit specific fields from the kelurahan
     */
    omit?: kelurahanOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: kelurahanInclude<ExtArgs> | null
    /**
     * Filter, which kelurahan to fetch.
     */
    where?: kelurahanWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of kelurahans to fetch.
     */
    orderBy?: kelurahanOrderByWithRelationInput | kelurahanOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for kelurahans.
     */
    cursor?: kelurahanWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` kelurahans from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` kelurahans.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of kelurahans.
     */
    distinct?: KelurahanScalarFieldEnum | KelurahanScalarFieldEnum[]
  }

  /**
   * kelurahan findFirstOrThrow
   */
  export type kelurahanFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the kelurahan
     */
    select?: kelurahanSelect<ExtArgs> | null
    /**
     * Omit specific fields from the kelurahan
     */
    omit?: kelurahanOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: kelurahanInclude<ExtArgs> | null
    /**
     * Filter, which kelurahan to fetch.
     */
    where?: kelurahanWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of kelurahans to fetch.
     */
    orderBy?: kelurahanOrderByWithRelationInput | kelurahanOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for kelurahans.
     */
    cursor?: kelurahanWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` kelurahans from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` kelurahans.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of kelurahans.
     */
    distinct?: KelurahanScalarFieldEnum | KelurahanScalarFieldEnum[]
  }

  /**
   * kelurahan findMany
   */
  export type kelurahanFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the kelurahan
     */
    select?: kelurahanSelect<ExtArgs> | null
    /**
     * Omit specific fields from the kelurahan
     */
    omit?: kelurahanOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: kelurahanInclude<ExtArgs> | null
    /**
     * Filter, which kelurahans to fetch.
     */
    where?: kelurahanWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of kelurahans to fetch.
     */
    orderBy?: kelurahanOrderByWithRelationInput | kelurahanOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing kelurahans.
     */
    cursor?: kelurahanWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` kelurahans from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` kelurahans.
     */
    skip?: number
    distinct?: KelurahanScalarFieldEnum | KelurahanScalarFieldEnum[]
  }

  /**
   * kelurahan create
   */
  export type kelurahanCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the kelurahan
     */
    select?: kelurahanSelect<ExtArgs> | null
    /**
     * Omit specific fields from the kelurahan
     */
    omit?: kelurahanOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: kelurahanInclude<ExtArgs> | null
    /**
     * The data needed to create a kelurahan.
     */
    data?: XOR<kelurahanCreateInput, kelurahanUncheckedCreateInput>
  }

  /**
   * kelurahan createMany
   */
  export type kelurahanCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many kelurahans.
     */
    data: kelurahanCreateManyInput | kelurahanCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * kelurahan createManyAndReturn
   */
  export type kelurahanCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the kelurahan
     */
    select?: kelurahanSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the kelurahan
     */
    omit?: kelurahanOmit<ExtArgs> | null
    /**
     * The data used to create many kelurahans.
     */
    data: kelurahanCreateManyInput | kelurahanCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: kelurahanIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * kelurahan update
   */
  export type kelurahanUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the kelurahan
     */
    select?: kelurahanSelect<ExtArgs> | null
    /**
     * Omit specific fields from the kelurahan
     */
    omit?: kelurahanOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: kelurahanInclude<ExtArgs> | null
    /**
     * The data needed to update a kelurahan.
     */
    data: XOR<kelurahanUpdateInput, kelurahanUncheckedUpdateInput>
    /**
     * Choose, which kelurahan to update.
     */
    where: kelurahanWhereUniqueInput
  }

  /**
   * kelurahan updateMany
   */
  export type kelurahanUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update kelurahans.
     */
    data: XOR<kelurahanUpdateManyMutationInput, kelurahanUncheckedUpdateManyInput>
    /**
     * Filter which kelurahans to update
     */
    where?: kelurahanWhereInput
    /**
     * Limit how many kelurahans to update.
     */
    limit?: number
  }

  /**
   * kelurahan updateManyAndReturn
   */
  export type kelurahanUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the kelurahan
     */
    select?: kelurahanSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the kelurahan
     */
    omit?: kelurahanOmit<ExtArgs> | null
    /**
     * The data used to update kelurahans.
     */
    data: XOR<kelurahanUpdateManyMutationInput, kelurahanUncheckedUpdateManyInput>
    /**
     * Filter which kelurahans to update
     */
    where?: kelurahanWhereInput
    /**
     * Limit how many kelurahans to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: kelurahanIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * kelurahan upsert
   */
  export type kelurahanUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the kelurahan
     */
    select?: kelurahanSelect<ExtArgs> | null
    /**
     * Omit specific fields from the kelurahan
     */
    omit?: kelurahanOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: kelurahanInclude<ExtArgs> | null
    /**
     * The filter to search for the kelurahan to update in case it exists.
     */
    where: kelurahanWhereUniqueInput
    /**
     * In case the kelurahan found by the `where` argument doesn't exist, create a new kelurahan with this data.
     */
    create: XOR<kelurahanCreateInput, kelurahanUncheckedCreateInput>
    /**
     * In case the kelurahan was found with the provided `where` argument, update it with this data.
     */
    update: XOR<kelurahanUpdateInput, kelurahanUncheckedUpdateInput>
  }

  /**
   * kelurahan delete
   */
  export type kelurahanDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the kelurahan
     */
    select?: kelurahanSelect<ExtArgs> | null
    /**
     * Omit specific fields from the kelurahan
     */
    omit?: kelurahanOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: kelurahanInclude<ExtArgs> | null
    /**
     * Filter which kelurahan to delete.
     */
    where: kelurahanWhereUniqueInput
  }

  /**
   * kelurahan deleteMany
   */
  export type kelurahanDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which kelurahans to delete
     */
    where?: kelurahanWhereInput
    /**
     * Limit how many kelurahans to delete.
     */
    limit?: number
  }

  /**
   * kelurahan.alamat
   */
  export type kelurahan$alamatArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the alamat
     */
    select?: alamatSelect<ExtArgs> | null
    /**
     * Omit specific fields from the alamat
     */
    omit?: alamatOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: alamatInclude<ExtArgs> | null
    where?: alamatWhereInput
    orderBy?: alamatOrderByWithRelationInput | alamatOrderByWithRelationInput[]
    cursor?: alamatWhereUniqueInput
    take?: number
    skip?: number
    distinct?: AlamatScalarFieldEnum | AlamatScalarFieldEnum[]
  }

  /**
   * kelurahan.kecamatan
   */
  export type kelurahan$kecamatanArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the kecamatan
     */
    select?: kecamatanSelect<ExtArgs> | null
    /**
     * Omit specific fields from the kecamatan
     */
    omit?: kecamatanOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: kecamatanInclude<ExtArgs> | null
    where?: kecamatanWhereInput
  }

  /**
   * kelurahan without action
   */
  export type kelurahanDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the kelurahan
     */
    select?: kelurahanSelect<ExtArgs> | null
    /**
     * Omit specific fields from the kelurahan
     */
    omit?: kelurahanOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: kelurahanInclude<ExtArgs> | null
  }


  /**
   * Model tipe_alamat
   */

  export type AggregateTipe_alamat = {
    _count: Tipe_alamatCountAggregateOutputType | null
    _avg: Tipe_alamatAvgAggregateOutputType | null
    _sum: Tipe_alamatSumAggregateOutputType | null
    _min: Tipe_alamatMinAggregateOutputType | null
    _max: Tipe_alamatMaxAggregateOutputType | null
  }

  export type Tipe_alamatAvgAggregateOutputType = {
    id_tipe: number | null
  }

  export type Tipe_alamatSumAggregateOutputType = {
    id_tipe: bigint | null
  }

  export type Tipe_alamatMinAggregateOutputType = {
    id_tipe: bigint | null
    tipe_alamat: string | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type Tipe_alamatMaxAggregateOutputType = {
    id_tipe: bigint | null
    tipe_alamat: string | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type Tipe_alamatCountAggregateOutputType = {
    id_tipe: number
    tipe_alamat: number
    created_at: number
    updated_at: number
    _all: number
  }


  export type Tipe_alamatAvgAggregateInputType = {
    id_tipe?: true
  }

  export type Tipe_alamatSumAggregateInputType = {
    id_tipe?: true
  }

  export type Tipe_alamatMinAggregateInputType = {
    id_tipe?: true
    tipe_alamat?: true
    created_at?: true
    updated_at?: true
  }

  export type Tipe_alamatMaxAggregateInputType = {
    id_tipe?: true
    tipe_alamat?: true
    created_at?: true
    updated_at?: true
  }

  export type Tipe_alamatCountAggregateInputType = {
    id_tipe?: true
    tipe_alamat?: true
    created_at?: true
    updated_at?: true
    _all?: true
  }

  export type Tipe_alamatAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which tipe_alamat to aggregate.
     */
    where?: tipe_alamatWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of tipe_alamats to fetch.
     */
    orderBy?: tipe_alamatOrderByWithRelationInput | tipe_alamatOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: tipe_alamatWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` tipe_alamats from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` tipe_alamats.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned tipe_alamats
    **/
    _count?: true | Tipe_alamatCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: Tipe_alamatAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: Tipe_alamatSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Tipe_alamatMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Tipe_alamatMaxAggregateInputType
  }

  export type GetTipe_alamatAggregateType<T extends Tipe_alamatAggregateArgs> = {
        [P in keyof T & keyof AggregateTipe_alamat]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTipe_alamat[P]>
      : GetScalarType<T[P], AggregateTipe_alamat[P]>
  }




  export type tipe_alamatGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: tipe_alamatWhereInput
    orderBy?: tipe_alamatOrderByWithAggregationInput | tipe_alamatOrderByWithAggregationInput[]
    by: Tipe_alamatScalarFieldEnum[] | Tipe_alamatScalarFieldEnum
    having?: tipe_alamatScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Tipe_alamatCountAggregateInputType | true
    _avg?: Tipe_alamatAvgAggregateInputType
    _sum?: Tipe_alamatSumAggregateInputType
    _min?: Tipe_alamatMinAggregateInputType
    _max?: Tipe_alamatMaxAggregateInputType
  }

  export type Tipe_alamatGroupByOutputType = {
    id_tipe: bigint
    tipe_alamat: string | null
    created_at: Date | null
    updated_at: Date | null
    _count: Tipe_alamatCountAggregateOutputType | null
    _avg: Tipe_alamatAvgAggregateOutputType | null
    _sum: Tipe_alamatSumAggregateOutputType | null
    _min: Tipe_alamatMinAggregateOutputType | null
    _max: Tipe_alamatMaxAggregateOutputType | null
  }

  type GetTipe_alamatGroupByPayload<T extends tipe_alamatGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Tipe_alamatGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Tipe_alamatGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Tipe_alamatGroupByOutputType[P]>
            : GetScalarType<T[P], Tipe_alamatGroupByOutputType[P]>
        }
      >
    >


  export type tipe_alamatSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id_tipe?: boolean
    tipe_alamat?: boolean
    created_at?: boolean
    updated_at?: boolean
    alamat?: boolean | tipe_alamat$alamatArgs<ExtArgs>
    _count?: boolean | Tipe_alamatCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["tipe_alamat"]>

  export type tipe_alamatSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id_tipe?: boolean
    tipe_alamat?: boolean
    created_at?: boolean
    updated_at?: boolean
  }, ExtArgs["result"]["tipe_alamat"]>

  export type tipe_alamatSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id_tipe?: boolean
    tipe_alamat?: boolean
    created_at?: boolean
    updated_at?: boolean
  }, ExtArgs["result"]["tipe_alamat"]>

  export type tipe_alamatSelectScalar = {
    id_tipe?: boolean
    tipe_alamat?: boolean
    created_at?: boolean
    updated_at?: boolean
  }

  export type tipe_alamatOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id_tipe" | "tipe_alamat" | "created_at" | "updated_at", ExtArgs["result"]["tipe_alamat"]>
  export type tipe_alamatInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    alamat?: boolean | tipe_alamat$alamatArgs<ExtArgs>
    _count?: boolean | Tipe_alamatCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type tipe_alamatIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type tipe_alamatIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $tipe_alamatPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "tipe_alamat"
    objects: {
      alamat: Prisma.$alamatPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id_tipe: bigint
      tipe_alamat: string | null
      created_at: Date | null
      updated_at: Date | null
    }, ExtArgs["result"]["tipe_alamat"]>
    composites: {}
  }

  type tipe_alamatGetPayload<S extends boolean | null | undefined | tipe_alamatDefaultArgs> = $Result.GetResult<Prisma.$tipe_alamatPayload, S>

  type tipe_alamatCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<tipe_alamatFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: Tipe_alamatCountAggregateInputType | true
    }

  export interface tipe_alamatDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['tipe_alamat'], meta: { name: 'tipe_alamat' } }
    /**
     * Find zero or one Tipe_alamat that matches the filter.
     * @param {tipe_alamatFindUniqueArgs} args - Arguments to find a Tipe_alamat
     * @example
     * // Get one Tipe_alamat
     * const tipe_alamat = await prisma.tipe_alamat.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends tipe_alamatFindUniqueArgs>(args: SelectSubset<T, tipe_alamatFindUniqueArgs<ExtArgs>>): Prisma__tipe_alamatClient<$Result.GetResult<Prisma.$tipe_alamatPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Tipe_alamat that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {tipe_alamatFindUniqueOrThrowArgs} args - Arguments to find a Tipe_alamat
     * @example
     * // Get one Tipe_alamat
     * const tipe_alamat = await prisma.tipe_alamat.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends tipe_alamatFindUniqueOrThrowArgs>(args: SelectSubset<T, tipe_alamatFindUniqueOrThrowArgs<ExtArgs>>): Prisma__tipe_alamatClient<$Result.GetResult<Prisma.$tipe_alamatPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Tipe_alamat that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {tipe_alamatFindFirstArgs} args - Arguments to find a Tipe_alamat
     * @example
     * // Get one Tipe_alamat
     * const tipe_alamat = await prisma.tipe_alamat.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends tipe_alamatFindFirstArgs>(args?: SelectSubset<T, tipe_alamatFindFirstArgs<ExtArgs>>): Prisma__tipe_alamatClient<$Result.GetResult<Prisma.$tipe_alamatPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Tipe_alamat that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {tipe_alamatFindFirstOrThrowArgs} args - Arguments to find a Tipe_alamat
     * @example
     * // Get one Tipe_alamat
     * const tipe_alamat = await prisma.tipe_alamat.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends tipe_alamatFindFirstOrThrowArgs>(args?: SelectSubset<T, tipe_alamatFindFirstOrThrowArgs<ExtArgs>>): Prisma__tipe_alamatClient<$Result.GetResult<Prisma.$tipe_alamatPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Tipe_alamats that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {tipe_alamatFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Tipe_alamats
     * const tipe_alamats = await prisma.tipe_alamat.findMany()
     * 
     * // Get first 10 Tipe_alamats
     * const tipe_alamats = await prisma.tipe_alamat.findMany({ take: 10 })
     * 
     * // Only select the `id_tipe`
     * const tipe_alamatWithId_tipeOnly = await prisma.tipe_alamat.findMany({ select: { id_tipe: true } })
     * 
     */
    findMany<T extends tipe_alamatFindManyArgs>(args?: SelectSubset<T, tipe_alamatFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$tipe_alamatPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Tipe_alamat.
     * @param {tipe_alamatCreateArgs} args - Arguments to create a Tipe_alamat.
     * @example
     * // Create one Tipe_alamat
     * const Tipe_alamat = await prisma.tipe_alamat.create({
     *   data: {
     *     // ... data to create a Tipe_alamat
     *   }
     * })
     * 
     */
    create<T extends tipe_alamatCreateArgs>(args: SelectSubset<T, tipe_alamatCreateArgs<ExtArgs>>): Prisma__tipe_alamatClient<$Result.GetResult<Prisma.$tipe_alamatPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Tipe_alamats.
     * @param {tipe_alamatCreateManyArgs} args - Arguments to create many Tipe_alamats.
     * @example
     * // Create many Tipe_alamats
     * const tipe_alamat = await prisma.tipe_alamat.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends tipe_alamatCreateManyArgs>(args?: SelectSubset<T, tipe_alamatCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Tipe_alamats and returns the data saved in the database.
     * @param {tipe_alamatCreateManyAndReturnArgs} args - Arguments to create many Tipe_alamats.
     * @example
     * // Create many Tipe_alamats
     * const tipe_alamat = await prisma.tipe_alamat.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Tipe_alamats and only return the `id_tipe`
     * const tipe_alamatWithId_tipeOnly = await prisma.tipe_alamat.createManyAndReturn({
     *   select: { id_tipe: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends tipe_alamatCreateManyAndReturnArgs>(args?: SelectSubset<T, tipe_alamatCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$tipe_alamatPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Tipe_alamat.
     * @param {tipe_alamatDeleteArgs} args - Arguments to delete one Tipe_alamat.
     * @example
     * // Delete one Tipe_alamat
     * const Tipe_alamat = await prisma.tipe_alamat.delete({
     *   where: {
     *     // ... filter to delete one Tipe_alamat
     *   }
     * })
     * 
     */
    delete<T extends tipe_alamatDeleteArgs>(args: SelectSubset<T, tipe_alamatDeleteArgs<ExtArgs>>): Prisma__tipe_alamatClient<$Result.GetResult<Prisma.$tipe_alamatPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Tipe_alamat.
     * @param {tipe_alamatUpdateArgs} args - Arguments to update one Tipe_alamat.
     * @example
     * // Update one Tipe_alamat
     * const tipe_alamat = await prisma.tipe_alamat.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends tipe_alamatUpdateArgs>(args: SelectSubset<T, tipe_alamatUpdateArgs<ExtArgs>>): Prisma__tipe_alamatClient<$Result.GetResult<Prisma.$tipe_alamatPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Tipe_alamats.
     * @param {tipe_alamatDeleteManyArgs} args - Arguments to filter Tipe_alamats to delete.
     * @example
     * // Delete a few Tipe_alamats
     * const { count } = await prisma.tipe_alamat.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends tipe_alamatDeleteManyArgs>(args?: SelectSubset<T, tipe_alamatDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Tipe_alamats.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {tipe_alamatUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Tipe_alamats
     * const tipe_alamat = await prisma.tipe_alamat.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends tipe_alamatUpdateManyArgs>(args: SelectSubset<T, tipe_alamatUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Tipe_alamats and returns the data updated in the database.
     * @param {tipe_alamatUpdateManyAndReturnArgs} args - Arguments to update many Tipe_alamats.
     * @example
     * // Update many Tipe_alamats
     * const tipe_alamat = await prisma.tipe_alamat.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Tipe_alamats and only return the `id_tipe`
     * const tipe_alamatWithId_tipeOnly = await prisma.tipe_alamat.updateManyAndReturn({
     *   select: { id_tipe: true },
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
    updateManyAndReturn<T extends tipe_alamatUpdateManyAndReturnArgs>(args: SelectSubset<T, tipe_alamatUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$tipe_alamatPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Tipe_alamat.
     * @param {tipe_alamatUpsertArgs} args - Arguments to update or create a Tipe_alamat.
     * @example
     * // Update or create a Tipe_alamat
     * const tipe_alamat = await prisma.tipe_alamat.upsert({
     *   create: {
     *     // ... data to create a Tipe_alamat
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Tipe_alamat we want to update
     *   }
     * })
     */
    upsert<T extends tipe_alamatUpsertArgs>(args: SelectSubset<T, tipe_alamatUpsertArgs<ExtArgs>>): Prisma__tipe_alamatClient<$Result.GetResult<Prisma.$tipe_alamatPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Tipe_alamats.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {tipe_alamatCountArgs} args - Arguments to filter Tipe_alamats to count.
     * @example
     * // Count the number of Tipe_alamats
     * const count = await prisma.tipe_alamat.count({
     *   where: {
     *     // ... the filter for the Tipe_alamats we want to count
     *   }
     * })
    **/
    count<T extends tipe_alamatCountArgs>(
      args?: Subset<T, tipe_alamatCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Tipe_alamatCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Tipe_alamat.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Tipe_alamatAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends Tipe_alamatAggregateArgs>(args: Subset<T, Tipe_alamatAggregateArgs>): Prisma.PrismaPromise<GetTipe_alamatAggregateType<T>>

    /**
     * Group by Tipe_alamat.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {tipe_alamatGroupByArgs} args - Group by arguments.
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
      T extends tipe_alamatGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: tipe_alamatGroupByArgs['orderBy'] }
        : { orderBy?: tipe_alamatGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, tipe_alamatGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTipe_alamatGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the tipe_alamat model
   */
  readonly fields: tipe_alamatFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for tipe_alamat.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__tipe_alamatClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    alamat<T extends tipe_alamat$alamatArgs<ExtArgs> = {}>(args?: Subset<T, tipe_alamat$alamatArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$alamatPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the tipe_alamat model
   */
  interface tipe_alamatFieldRefs {
    readonly id_tipe: FieldRef<"tipe_alamat", 'BigInt'>
    readonly tipe_alamat: FieldRef<"tipe_alamat", 'String'>
    readonly created_at: FieldRef<"tipe_alamat", 'DateTime'>
    readonly updated_at: FieldRef<"tipe_alamat", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * tipe_alamat findUnique
   */
  export type tipe_alamatFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tipe_alamat
     */
    select?: tipe_alamatSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tipe_alamat
     */
    omit?: tipe_alamatOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tipe_alamatInclude<ExtArgs> | null
    /**
     * Filter, which tipe_alamat to fetch.
     */
    where: tipe_alamatWhereUniqueInput
  }

  /**
   * tipe_alamat findUniqueOrThrow
   */
  export type tipe_alamatFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tipe_alamat
     */
    select?: tipe_alamatSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tipe_alamat
     */
    omit?: tipe_alamatOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tipe_alamatInclude<ExtArgs> | null
    /**
     * Filter, which tipe_alamat to fetch.
     */
    where: tipe_alamatWhereUniqueInput
  }

  /**
   * tipe_alamat findFirst
   */
  export type tipe_alamatFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tipe_alamat
     */
    select?: tipe_alamatSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tipe_alamat
     */
    omit?: tipe_alamatOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tipe_alamatInclude<ExtArgs> | null
    /**
     * Filter, which tipe_alamat to fetch.
     */
    where?: tipe_alamatWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of tipe_alamats to fetch.
     */
    orderBy?: tipe_alamatOrderByWithRelationInput | tipe_alamatOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for tipe_alamats.
     */
    cursor?: tipe_alamatWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` tipe_alamats from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` tipe_alamats.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of tipe_alamats.
     */
    distinct?: Tipe_alamatScalarFieldEnum | Tipe_alamatScalarFieldEnum[]
  }

  /**
   * tipe_alamat findFirstOrThrow
   */
  export type tipe_alamatFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tipe_alamat
     */
    select?: tipe_alamatSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tipe_alamat
     */
    omit?: tipe_alamatOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tipe_alamatInclude<ExtArgs> | null
    /**
     * Filter, which tipe_alamat to fetch.
     */
    where?: tipe_alamatWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of tipe_alamats to fetch.
     */
    orderBy?: tipe_alamatOrderByWithRelationInput | tipe_alamatOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for tipe_alamats.
     */
    cursor?: tipe_alamatWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` tipe_alamats from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` tipe_alamats.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of tipe_alamats.
     */
    distinct?: Tipe_alamatScalarFieldEnum | Tipe_alamatScalarFieldEnum[]
  }

  /**
   * tipe_alamat findMany
   */
  export type tipe_alamatFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tipe_alamat
     */
    select?: tipe_alamatSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tipe_alamat
     */
    omit?: tipe_alamatOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tipe_alamatInclude<ExtArgs> | null
    /**
     * Filter, which tipe_alamats to fetch.
     */
    where?: tipe_alamatWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of tipe_alamats to fetch.
     */
    orderBy?: tipe_alamatOrderByWithRelationInput | tipe_alamatOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing tipe_alamats.
     */
    cursor?: tipe_alamatWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` tipe_alamats from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` tipe_alamats.
     */
    skip?: number
    distinct?: Tipe_alamatScalarFieldEnum | Tipe_alamatScalarFieldEnum[]
  }

  /**
   * tipe_alamat create
   */
  export type tipe_alamatCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tipe_alamat
     */
    select?: tipe_alamatSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tipe_alamat
     */
    omit?: tipe_alamatOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tipe_alamatInclude<ExtArgs> | null
    /**
     * The data needed to create a tipe_alamat.
     */
    data?: XOR<tipe_alamatCreateInput, tipe_alamatUncheckedCreateInput>
  }

  /**
   * tipe_alamat createMany
   */
  export type tipe_alamatCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many tipe_alamats.
     */
    data: tipe_alamatCreateManyInput | tipe_alamatCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * tipe_alamat createManyAndReturn
   */
  export type tipe_alamatCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tipe_alamat
     */
    select?: tipe_alamatSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the tipe_alamat
     */
    omit?: tipe_alamatOmit<ExtArgs> | null
    /**
     * The data used to create many tipe_alamats.
     */
    data: tipe_alamatCreateManyInput | tipe_alamatCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * tipe_alamat update
   */
  export type tipe_alamatUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tipe_alamat
     */
    select?: tipe_alamatSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tipe_alamat
     */
    omit?: tipe_alamatOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tipe_alamatInclude<ExtArgs> | null
    /**
     * The data needed to update a tipe_alamat.
     */
    data: XOR<tipe_alamatUpdateInput, tipe_alamatUncheckedUpdateInput>
    /**
     * Choose, which tipe_alamat to update.
     */
    where: tipe_alamatWhereUniqueInput
  }

  /**
   * tipe_alamat updateMany
   */
  export type tipe_alamatUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update tipe_alamats.
     */
    data: XOR<tipe_alamatUpdateManyMutationInput, tipe_alamatUncheckedUpdateManyInput>
    /**
     * Filter which tipe_alamats to update
     */
    where?: tipe_alamatWhereInput
    /**
     * Limit how many tipe_alamats to update.
     */
    limit?: number
  }

  /**
   * tipe_alamat updateManyAndReturn
   */
  export type tipe_alamatUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tipe_alamat
     */
    select?: tipe_alamatSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the tipe_alamat
     */
    omit?: tipe_alamatOmit<ExtArgs> | null
    /**
     * The data used to update tipe_alamats.
     */
    data: XOR<tipe_alamatUpdateManyMutationInput, tipe_alamatUncheckedUpdateManyInput>
    /**
     * Filter which tipe_alamats to update
     */
    where?: tipe_alamatWhereInput
    /**
     * Limit how many tipe_alamats to update.
     */
    limit?: number
  }

  /**
   * tipe_alamat upsert
   */
  export type tipe_alamatUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tipe_alamat
     */
    select?: tipe_alamatSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tipe_alamat
     */
    omit?: tipe_alamatOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tipe_alamatInclude<ExtArgs> | null
    /**
     * The filter to search for the tipe_alamat to update in case it exists.
     */
    where: tipe_alamatWhereUniqueInput
    /**
     * In case the tipe_alamat found by the `where` argument doesn't exist, create a new tipe_alamat with this data.
     */
    create: XOR<tipe_alamatCreateInput, tipe_alamatUncheckedCreateInput>
    /**
     * In case the tipe_alamat was found with the provided `where` argument, update it with this data.
     */
    update: XOR<tipe_alamatUpdateInput, tipe_alamatUncheckedUpdateInput>
  }

  /**
   * tipe_alamat delete
   */
  export type tipe_alamatDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tipe_alamat
     */
    select?: tipe_alamatSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tipe_alamat
     */
    omit?: tipe_alamatOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tipe_alamatInclude<ExtArgs> | null
    /**
     * Filter which tipe_alamat to delete.
     */
    where: tipe_alamatWhereUniqueInput
  }

  /**
   * tipe_alamat deleteMany
   */
  export type tipe_alamatDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which tipe_alamats to delete
     */
    where?: tipe_alamatWhereInput
    /**
     * Limit how many tipe_alamats to delete.
     */
    limit?: number
  }

  /**
   * tipe_alamat.alamat
   */
  export type tipe_alamat$alamatArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the alamat
     */
    select?: alamatSelect<ExtArgs> | null
    /**
     * Omit specific fields from the alamat
     */
    omit?: alamatOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: alamatInclude<ExtArgs> | null
    where?: alamatWhereInput
    orderBy?: alamatOrderByWithRelationInput | alamatOrderByWithRelationInput[]
    cursor?: alamatWhereUniqueInput
    take?: number
    skip?: number
    distinct?: AlamatScalarFieldEnum | AlamatScalarFieldEnum[]
  }

  /**
   * tipe_alamat without action
   */
  export type tipe_alamatDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tipe_alamat
     */
    select?: tipe_alamatSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tipe_alamat
     */
    omit?: tipe_alamatOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tipe_alamatInclude<ExtArgs> | null
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
    updated_at: 'updated_at'
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


  export const Profession_detailScalarFieldEnum: {
    id_profesi: 'id_profesi',
    id_prof_cat: 'id_prof_cat'
  };

  export type Profession_detailScalarFieldEnum = (typeof Profession_detailScalarFieldEnum)[keyof typeof Profession_detailScalarFieldEnum]


  export const AlamatScalarFieldEnum: {
    id_alamat: 'id_alamat',
    id_user: 'id_user',
    alamat: 'alamat',
    catatan: 'catatan',
    latitude: 'latitude',
    longitude: 'longitude',
    is_default: 'is_default',
    id_tipe: 'id_tipe',
    id_kel: 'id_kel',
    id_kec: 'id_kec',
    id_kota: 'id_kota',
    id_prov: 'id_prov',
    created_at: 'created_at',
    updated_at: 'updated_at'
  };

  export type AlamatScalarFieldEnum = (typeof AlamatScalarFieldEnum)[keyof typeof AlamatScalarFieldEnum]


  export const KecamatanScalarFieldEnum: {
    id_kec: 'id_kec',
    kecamatan: 'kecamatan',
    id_kota: 'id_kota',
    created_at: 'created_at',
    updated_at: 'updated_at'
  };

  export type KecamatanScalarFieldEnum = (typeof KecamatanScalarFieldEnum)[keyof typeof KecamatanScalarFieldEnum]


  export const KelurahanScalarFieldEnum: {
    id_kel: 'id_kel',
    kelurahan: 'kelurahan',
    id_kec: 'id_kec',
    created_at: 'created_at',
    updated_at: 'updated_at'
  };

  export type KelurahanScalarFieldEnum = (typeof KelurahanScalarFieldEnum)[keyof typeof KelurahanScalarFieldEnum]


  export const Tipe_alamatScalarFieldEnum: {
    id_tipe: 'id_tipe',
    tipe_alamat: 'tipe_alamat',
    created_at: 'created_at',
    updated_at: 'updated_at'
  };

  export type Tipe_alamatScalarFieldEnum = (typeof Tipe_alamatScalarFieldEnum)[keyof typeof Tipe_alamatScalarFieldEnum]


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
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


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
   * Reference to a field of type 'Decimal'
   */
  export type DecimalFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Decimal'>
    


  /**
   * Reference to a field of type 'Decimal[]'
   */
  export type ListDecimalFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Decimal[]'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


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


  export type citiesWhereInput = {
    AND?: citiesWhereInput | citiesWhereInput[]
    OR?: citiesWhereInput[]
    NOT?: citiesWhereInput | citiesWhereInput[]
    id_kota?: IntFilter<"cities"> | number
    nama_kota?: StringFilter<"cities"> | string
    id_prov?: IntFilter<"cities"> | number
    created_at?: DateTimeNullableFilter<"cities"> | Date | string | null
    updated_at?: DateTimeNullableFilter<"cities"> | Date | string | null
    alamat?: AlamatListRelationFilter
    provinces?: XOR<ProvincesScalarRelationFilter, provincesWhereInput>
    kecamatan?: KecamatanListRelationFilter
  }

  export type citiesOrderByWithRelationInput = {
    id_kota?: SortOrder
    nama_kota?: SortOrder
    id_prov?: SortOrder
    created_at?: SortOrderInput | SortOrder
    updated_at?: SortOrderInput | SortOrder
    alamat?: alamatOrderByRelationAggregateInput
    provinces?: provincesOrderByWithRelationInput
    kecamatan?: kecamatanOrderByRelationAggregateInput
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
    alamat?: AlamatListRelationFilter
    provinces?: XOR<ProvincesScalarRelationFilter, provincesWhereInput>
    kecamatan?: KecamatanListRelationFilter
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
    profession_detail?: Profession_detailListRelationFilter
    profession_user?: Profession_userListRelationFilter
  }

  export type professionOrderByWithRelationInput = {
    id_profesi?: SortOrder
    profession?: SortOrder
    created_at?: SortOrderInput | SortOrder
    updated_at?: SortOrderInput | SortOrder
    profession_detail?: profession_detailOrderByRelationAggregateInput
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
    profession_detail?: Profession_detailListRelationFilter
    profession_user?: Profession_userListRelationFilter
  }, "id_profesi">

  export type professionOrderByWithAggregationInput = {
    id_profesi?: SortOrder
    profession?: SortOrder
    created_at?: SortOrderInput | SortOrder
    updated_at?: SortOrderInput | SortOrder
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
    alamat?: AlamatListRelationFilter
    cities?: CitiesListRelationFilter
  }

  export type provincesOrderByWithRelationInput = {
    id_prov?: SortOrder
    nama_prov?: SortOrder
    created_at?: SortOrderInput | SortOrder
    updated_at?: SortOrderInput | SortOrder
    alamat?: alamatOrderByRelationAggregateInput
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
    alamat?: AlamatListRelationFilter
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

  export type usersWhereInput = {
    AND?: usersWhereInput | usersWhereInput[]
    OR?: usersWhereInput[]
    NOT?: usersWhereInput | usersWhereInput[]
    id_user?: StringFilter<"users"> | string
    username?: StringFilter<"users"> | string
    nama?: StringFilter<"users"> | string
    email?: StringFilter<"users"> | string
    sandi?: StringFilter<"users"> | string
    gender?: Enumgender_enumFilter<"users"> | $Enums.gender_enum
    birth_date?: DateTimeFilter<"users"> | Date | string
    foto?: BytesNullableFilter<"users"> | Uint8Array | null
    bio?: StringNullableFilter<"users"> | string | null
    status_user?: Enumstatus_user_enumFilter<"users"> | $Enums.status_user_enum
    created_at?: DateTimeNullableFilter<"users"> | Date | string | null
    updated_at?: DateTimeNullableFilter<"users"> | Date | string | null
    alamat?: AlamatListRelationFilter
    profession_user?: Profession_userListRelationFilter
  }

  export type usersOrderByWithRelationInput = {
    id_user?: SortOrder
    username?: SortOrder
    nama?: SortOrder
    email?: SortOrder
    sandi?: SortOrder
    gender?: SortOrder
    birth_date?: SortOrder
    foto?: SortOrderInput | SortOrder
    bio?: SortOrderInput | SortOrder
    status_user?: SortOrder
    created_at?: SortOrderInput | SortOrder
    updated_at?: SortOrderInput | SortOrder
    alamat?: alamatOrderByRelationAggregateInput
    profession_user?: profession_userOrderByRelationAggregateInput
  }

  export type usersWhereUniqueInput = Prisma.AtLeast<{
    id_user?: string
    username?: string
    email?: string
    AND?: usersWhereInput | usersWhereInput[]
    OR?: usersWhereInput[]
    NOT?: usersWhereInput | usersWhereInput[]
    nama?: StringFilter<"users"> | string
    sandi?: StringFilter<"users"> | string
    gender?: Enumgender_enumFilter<"users"> | $Enums.gender_enum
    birth_date?: DateTimeFilter<"users"> | Date | string
    foto?: BytesNullableFilter<"users"> | Uint8Array | null
    bio?: StringNullableFilter<"users"> | string | null
    status_user?: Enumstatus_user_enumFilter<"users"> | $Enums.status_user_enum
    created_at?: DateTimeNullableFilter<"users"> | Date | string | null
    updated_at?: DateTimeNullableFilter<"users"> | Date | string | null
    alamat?: AlamatListRelationFilter
    profession_user?: Profession_userListRelationFilter
  }, "id_user" | "username" | "email">

  export type usersOrderByWithAggregationInput = {
    id_user?: SortOrder
    username?: SortOrder
    nama?: SortOrder
    email?: SortOrder
    sandi?: SortOrder
    gender?: SortOrder
    birth_date?: SortOrder
    foto?: SortOrderInput | SortOrder
    bio?: SortOrderInput | SortOrder
    status_user?: SortOrder
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
    username?: StringWithAggregatesFilter<"users"> | string
    nama?: StringWithAggregatesFilter<"users"> | string
    email?: StringWithAggregatesFilter<"users"> | string
    sandi?: StringWithAggregatesFilter<"users"> | string
    gender?: Enumgender_enumWithAggregatesFilter<"users"> | $Enums.gender_enum
    birth_date?: DateTimeWithAggregatesFilter<"users"> | Date | string
    foto?: BytesNullableWithAggregatesFilter<"users"> | Uint8Array | null
    bio?: StringNullableWithAggregatesFilter<"users"> | string | null
    status_user?: Enumstatus_user_enumWithAggregatesFilter<"users"> | $Enums.status_user_enum
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
    profession_detail?: Profession_detailListRelationFilter
  }

  export type profession_categoryOrderByWithRelationInput = {
    id_prof_cat?: SortOrder
    profession_category?: SortOrderInput | SortOrder
    created_at?: SortOrderInput | SortOrder
    updated_at?: SortOrderInput | SortOrder
    profession_detail?: profession_detailOrderByRelationAggregateInput
  }

  export type profession_categoryWhereUniqueInput = Prisma.AtLeast<{
    id_prof_cat?: bigint | number
    AND?: profession_categoryWhereInput | profession_categoryWhereInput[]
    OR?: profession_categoryWhereInput[]
    NOT?: profession_categoryWhereInput | profession_categoryWhereInput[]
    profession_category?: StringNullableFilter<"profession_category"> | string | null
    created_at?: DateTimeNullableFilter<"profession_category"> | Date | string | null
    updated_at?: DateTimeNullableFilter<"profession_category"> | Date | string | null
    profession_detail?: Profession_detailListRelationFilter
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

  export type profession_detailWhereInput = {
    AND?: profession_detailWhereInput | profession_detailWhereInput[]
    OR?: profession_detailWhereInput[]
    NOT?: profession_detailWhereInput | profession_detailWhereInput[]
    id_profesi?: BigIntFilter<"profession_detail"> | bigint | number
    id_prof_cat?: BigIntFilter<"profession_detail"> | bigint | number
    profession_category?: XOR<Profession_categoryScalarRelationFilter, profession_categoryWhereInput>
    profession?: XOR<ProfessionScalarRelationFilter, professionWhereInput>
  }

  export type profession_detailOrderByWithRelationInput = {
    id_profesi?: SortOrder
    id_prof_cat?: SortOrder
    profession_category?: profession_categoryOrderByWithRelationInput
    profession?: professionOrderByWithRelationInput
  }

  export type profession_detailWhereUniqueInput = Prisma.AtLeast<{
    id_profesi_id_prof_cat?: profession_detailId_profesiId_prof_catCompoundUniqueInput
    AND?: profession_detailWhereInput | profession_detailWhereInput[]
    OR?: profession_detailWhereInput[]
    NOT?: profession_detailWhereInput | profession_detailWhereInput[]
    id_profesi?: BigIntFilter<"profession_detail"> | bigint | number
    id_prof_cat?: BigIntFilter<"profession_detail"> | bigint | number
    profession_category?: XOR<Profession_categoryScalarRelationFilter, profession_categoryWhereInput>
    profession?: XOR<ProfessionScalarRelationFilter, professionWhereInput>
  }, "id_profesi_id_prof_cat">

  export type profession_detailOrderByWithAggregationInput = {
    id_profesi?: SortOrder
    id_prof_cat?: SortOrder
    _count?: profession_detailCountOrderByAggregateInput
    _avg?: profession_detailAvgOrderByAggregateInput
    _max?: profession_detailMaxOrderByAggregateInput
    _min?: profession_detailMinOrderByAggregateInput
    _sum?: profession_detailSumOrderByAggregateInput
  }

  export type profession_detailScalarWhereWithAggregatesInput = {
    AND?: profession_detailScalarWhereWithAggregatesInput | profession_detailScalarWhereWithAggregatesInput[]
    OR?: profession_detailScalarWhereWithAggregatesInput[]
    NOT?: profession_detailScalarWhereWithAggregatesInput | profession_detailScalarWhereWithAggregatesInput[]
    id_profesi?: BigIntWithAggregatesFilter<"profession_detail"> | bigint | number
    id_prof_cat?: BigIntWithAggregatesFilter<"profession_detail"> | bigint | number
  }

  export type alamatWhereInput = {
    AND?: alamatWhereInput | alamatWhereInput[]
    OR?: alamatWhereInput[]
    NOT?: alamatWhereInput | alamatWhereInput[]
    id_alamat?: UuidFilter<"alamat"> | string
    id_user?: StringFilter<"alamat"> | string
    alamat?: StringFilter<"alamat"> | string
    catatan?: StringNullableFilter<"alamat"> | string | null
    latitude?: DecimalFilter<"alamat"> | Decimal | DecimalJsLike | number | string
    longitude?: DecimalFilter<"alamat"> | Decimal | DecimalJsLike | number | string
    is_default?: BoolFilter<"alamat"> | boolean
    id_tipe?: BigIntNullableFilter<"alamat"> | bigint | number | null
    id_kel?: BigIntFilter<"alamat"> | bigint | number
    id_kec?: BigIntFilter<"alamat"> | bigint | number
    id_kota?: IntFilter<"alamat"> | number
    id_prov?: IntFilter<"alamat"> | number
    created_at?: DateTimeNullableFilter<"alamat"> | Date | string | null
    updated_at?: DateTimeNullableFilter<"alamat"> | Date | string | null
    kecamatan?: XOR<KecamatanScalarRelationFilter, kecamatanWhereInput>
    kelurahan?: XOR<KelurahanScalarRelationFilter, kelurahanWhereInput>
    cities?: XOR<CitiesScalarRelationFilter, citiesWhereInput>
    provinces?: XOR<ProvincesScalarRelationFilter, provincesWhereInput>
    tipe_alamat?: XOR<Tipe_alamatNullableScalarRelationFilter, tipe_alamatWhereInput> | null
    users?: XOR<UsersScalarRelationFilter, usersWhereInput>
  }

  export type alamatOrderByWithRelationInput = {
    id_alamat?: SortOrder
    id_user?: SortOrder
    alamat?: SortOrder
    catatan?: SortOrderInput | SortOrder
    latitude?: SortOrder
    longitude?: SortOrder
    is_default?: SortOrder
    id_tipe?: SortOrderInput | SortOrder
    id_kel?: SortOrder
    id_kec?: SortOrder
    id_kota?: SortOrder
    id_prov?: SortOrder
    created_at?: SortOrderInput | SortOrder
    updated_at?: SortOrderInput | SortOrder
    kecamatan?: kecamatanOrderByWithRelationInput
    kelurahan?: kelurahanOrderByWithRelationInput
    cities?: citiesOrderByWithRelationInput
    provinces?: provincesOrderByWithRelationInput
    tipe_alamat?: tipe_alamatOrderByWithRelationInput
    users?: usersOrderByWithRelationInput
  }

  export type alamatWhereUniqueInput = Prisma.AtLeast<{
    id_alamat?: string
    AND?: alamatWhereInput | alamatWhereInput[]
    OR?: alamatWhereInput[]
    NOT?: alamatWhereInput | alamatWhereInput[]
    id_user?: StringFilter<"alamat"> | string
    alamat?: StringFilter<"alamat"> | string
    catatan?: StringNullableFilter<"alamat"> | string | null
    latitude?: DecimalFilter<"alamat"> | Decimal | DecimalJsLike | number | string
    longitude?: DecimalFilter<"alamat"> | Decimal | DecimalJsLike | number | string
    is_default?: BoolFilter<"alamat"> | boolean
    id_tipe?: BigIntNullableFilter<"alamat"> | bigint | number | null
    id_kel?: BigIntFilter<"alamat"> | bigint | number
    id_kec?: BigIntFilter<"alamat"> | bigint | number
    id_kota?: IntFilter<"alamat"> | number
    id_prov?: IntFilter<"alamat"> | number
    created_at?: DateTimeNullableFilter<"alamat"> | Date | string | null
    updated_at?: DateTimeNullableFilter<"alamat"> | Date | string | null
    kecamatan?: XOR<KecamatanScalarRelationFilter, kecamatanWhereInput>
    kelurahan?: XOR<KelurahanScalarRelationFilter, kelurahanWhereInput>
    cities?: XOR<CitiesScalarRelationFilter, citiesWhereInput>
    provinces?: XOR<ProvincesScalarRelationFilter, provincesWhereInput>
    tipe_alamat?: XOR<Tipe_alamatNullableScalarRelationFilter, tipe_alamatWhereInput> | null
    users?: XOR<UsersScalarRelationFilter, usersWhereInput>
  }, "id_alamat">

  export type alamatOrderByWithAggregationInput = {
    id_alamat?: SortOrder
    id_user?: SortOrder
    alamat?: SortOrder
    catatan?: SortOrderInput | SortOrder
    latitude?: SortOrder
    longitude?: SortOrder
    is_default?: SortOrder
    id_tipe?: SortOrderInput | SortOrder
    id_kel?: SortOrder
    id_kec?: SortOrder
    id_kota?: SortOrder
    id_prov?: SortOrder
    created_at?: SortOrderInput | SortOrder
    updated_at?: SortOrderInput | SortOrder
    _count?: alamatCountOrderByAggregateInput
    _avg?: alamatAvgOrderByAggregateInput
    _max?: alamatMaxOrderByAggregateInput
    _min?: alamatMinOrderByAggregateInput
    _sum?: alamatSumOrderByAggregateInput
  }

  export type alamatScalarWhereWithAggregatesInput = {
    AND?: alamatScalarWhereWithAggregatesInput | alamatScalarWhereWithAggregatesInput[]
    OR?: alamatScalarWhereWithAggregatesInput[]
    NOT?: alamatScalarWhereWithAggregatesInput | alamatScalarWhereWithAggregatesInput[]
    id_alamat?: UuidWithAggregatesFilter<"alamat"> | string
    id_user?: StringWithAggregatesFilter<"alamat"> | string
    alamat?: StringWithAggregatesFilter<"alamat"> | string
    catatan?: StringNullableWithAggregatesFilter<"alamat"> | string | null
    latitude?: DecimalWithAggregatesFilter<"alamat"> | Decimal | DecimalJsLike | number | string
    longitude?: DecimalWithAggregatesFilter<"alamat"> | Decimal | DecimalJsLike | number | string
    is_default?: BoolWithAggregatesFilter<"alamat"> | boolean
    id_tipe?: BigIntNullableWithAggregatesFilter<"alamat"> | bigint | number | null
    id_kel?: BigIntWithAggregatesFilter<"alamat"> | bigint | number
    id_kec?: BigIntWithAggregatesFilter<"alamat"> | bigint | number
    id_kota?: IntWithAggregatesFilter<"alamat"> | number
    id_prov?: IntWithAggregatesFilter<"alamat"> | number
    created_at?: DateTimeNullableWithAggregatesFilter<"alamat"> | Date | string | null
    updated_at?: DateTimeNullableWithAggregatesFilter<"alamat"> | Date | string | null
  }

  export type kecamatanWhereInput = {
    AND?: kecamatanWhereInput | kecamatanWhereInput[]
    OR?: kecamatanWhereInput[]
    NOT?: kecamatanWhereInput | kecamatanWhereInput[]
    id_kec?: BigIntFilter<"kecamatan"> | bigint | number
    kecamatan?: StringNullableFilter<"kecamatan"> | string | null
    id_kota?: IntNullableFilter<"kecamatan"> | number | null
    created_at?: DateTimeNullableFilter<"kecamatan"> | Date | string | null
    updated_at?: DateTimeNullableFilter<"kecamatan"> | Date | string | null
    alamat?: AlamatListRelationFilter
    cities?: XOR<CitiesNullableScalarRelationFilter, citiesWhereInput> | null
    kelurahan?: KelurahanListRelationFilter
  }

  export type kecamatanOrderByWithRelationInput = {
    id_kec?: SortOrder
    kecamatan?: SortOrderInput | SortOrder
    id_kota?: SortOrderInput | SortOrder
    created_at?: SortOrderInput | SortOrder
    updated_at?: SortOrderInput | SortOrder
    alamat?: alamatOrderByRelationAggregateInput
    cities?: citiesOrderByWithRelationInput
    kelurahan?: kelurahanOrderByRelationAggregateInput
  }

  export type kecamatanWhereUniqueInput = Prisma.AtLeast<{
    id_kec?: bigint | number
    AND?: kecamatanWhereInput | kecamatanWhereInput[]
    OR?: kecamatanWhereInput[]
    NOT?: kecamatanWhereInput | kecamatanWhereInput[]
    kecamatan?: StringNullableFilter<"kecamatan"> | string | null
    id_kota?: IntNullableFilter<"kecamatan"> | number | null
    created_at?: DateTimeNullableFilter<"kecamatan"> | Date | string | null
    updated_at?: DateTimeNullableFilter<"kecamatan"> | Date | string | null
    alamat?: AlamatListRelationFilter
    cities?: XOR<CitiesNullableScalarRelationFilter, citiesWhereInput> | null
    kelurahan?: KelurahanListRelationFilter
  }, "id_kec">

  export type kecamatanOrderByWithAggregationInput = {
    id_kec?: SortOrder
    kecamatan?: SortOrderInput | SortOrder
    id_kota?: SortOrderInput | SortOrder
    created_at?: SortOrderInput | SortOrder
    updated_at?: SortOrderInput | SortOrder
    _count?: kecamatanCountOrderByAggregateInput
    _avg?: kecamatanAvgOrderByAggregateInput
    _max?: kecamatanMaxOrderByAggregateInput
    _min?: kecamatanMinOrderByAggregateInput
    _sum?: kecamatanSumOrderByAggregateInput
  }

  export type kecamatanScalarWhereWithAggregatesInput = {
    AND?: kecamatanScalarWhereWithAggregatesInput | kecamatanScalarWhereWithAggregatesInput[]
    OR?: kecamatanScalarWhereWithAggregatesInput[]
    NOT?: kecamatanScalarWhereWithAggregatesInput | kecamatanScalarWhereWithAggregatesInput[]
    id_kec?: BigIntWithAggregatesFilter<"kecamatan"> | bigint | number
    kecamatan?: StringNullableWithAggregatesFilter<"kecamatan"> | string | null
    id_kota?: IntNullableWithAggregatesFilter<"kecamatan"> | number | null
    created_at?: DateTimeNullableWithAggregatesFilter<"kecamatan"> | Date | string | null
    updated_at?: DateTimeNullableWithAggregatesFilter<"kecamatan"> | Date | string | null
  }

  export type kelurahanWhereInput = {
    AND?: kelurahanWhereInput | kelurahanWhereInput[]
    OR?: kelurahanWhereInput[]
    NOT?: kelurahanWhereInput | kelurahanWhereInput[]
    id_kel?: BigIntFilter<"kelurahan"> | bigint | number
    kelurahan?: StringNullableFilter<"kelurahan"> | string | null
    id_kec?: BigIntNullableFilter<"kelurahan"> | bigint | number | null
    created_at?: DateTimeNullableFilter<"kelurahan"> | Date | string | null
    updated_at?: DateTimeNullableFilter<"kelurahan"> | Date | string | null
    alamat?: AlamatListRelationFilter
    kecamatan?: XOR<KecamatanNullableScalarRelationFilter, kecamatanWhereInput> | null
  }

  export type kelurahanOrderByWithRelationInput = {
    id_kel?: SortOrder
    kelurahan?: SortOrderInput | SortOrder
    id_kec?: SortOrderInput | SortOrder
    created_at?: SortOrderInput | SortOrder
    updated_at?: SortOrderInput | SortOrder
    alamat?: alamatOrderByRelationAggregateInput
    kecamatan?: kecamatanOrderByWithRelationInput
  }

  export type kelurahanWhereUniqueInput = Prisma.AtLeast<{
    id_kel?: bigint | number
    AND?: kelurahanWhereInput | kelurahanWhereInput[]
    OR?: kelurahanWhereInput[]
    NOT?: kelurahanWhereInput | kelurahanWhereInput[]
    kelurahan?: StringNullableFilter<"kelurahan"> | string | null
    id_kec?: BigIntNullableFilter<"kelurahan"> | bigint | number | null
    created_at?: DateTimeNullableFilter<"kelurahan"> | Date | string | null
    updated_at?: DateTimeNullableFilter<"kelurahan"> | Date | string | null
    alamat?: AlamatListRelationFilter
    kecamatan?: XOR<KecamatanNullableScalarRelationFilter, kecamatanWhereInput> | null
  }, "id_kel">

  export type kelurahanOrderByWithAggregationInput = {
    id_kel?: SortOrder
    kelurahan?: SortOrderInput | SortOrder
    id_kec?: SortOrderInput | SortOrder
    created_at?: SortOrderInput | SortOrder
    updated_at?: SortOrderInput | SortOrder
    _count?: kelurahanCountOrderByAggregateInput
    _avg?: kelurahanAvgOrderByAggregateInput
    _max?: kelurahanMaxOrderByAggregateInput
    _min?: kelurahanMinOrderByAggregateInput
    _sum?: kelurahanSumOrderByAggregateInput
  }

  export type kelurahanScalarWhereWithAggregatesInput = {
    AND?: kelurahanScalarWhereWithAggregatesInput | kelurahanScalarWhereWithAggregatesInput[]
    OR?: kelurahanScalarWhereWithAggregatesInput[]
    NOT?: kelurahanScalarWhereWithAggregatesInput | kelurahanScalarWhereWithAggregatesInput[]
    id_kel?: BigIntWithAggregatesFilter<"kelurahan"> | bigint | number
    kelurahan?: StringNullableWithAggregatesFilter<"kelurahan"> | string | null
    id_kec?: BigIntNullableWithAggregatesFilter<"kelurahan"> | bigint | number | null
    created_at?: DateTimeNullableWithAggregatesFilter<"kelurahan"> | Date | string | null
    updated_at?: DateTimeNullableWithAggregatesFilter<"kelurahan"> | Date | string | null
  }

  export type tipe_alamatWhereInput = {
    AND?: tipe_alamatWhereInput | tipe_alamatWhereInput[]
    OR?: tipe_alamatWhereInput[]
    NOT?: tipe_alamatWhereInput | tipe_alamatWhereInput[]
    id_tipe?: BigIntFilter<"tipe_alamat"> | bigint | number
    tipe_alamat?: StringNullableFilter<"tipe_alamat"> | string | null
    created_at?: DateTimeNullableFilter<"tipe_alamat"> | Date | string | null
    updated_at?: DateTimeNullableFilter<"tipe_alamat"> | Date | string | null
    alamat?: AlamatListRelationFilter
  }

  export type tipe_alamatOrderByWithRelationInput = {
    id_tipe?: SortOrder
    tipe_alamat?: SortOrderInput | SortOrder
    created_at?: SortOrderInput | SortOrder
    updated_at?: SortOrderInput | SortOrder
    alamat?: alamatOrderByRelationAggregateInput
  }

  export type tipe_alamatWhereUniqueInput = Prisma.AtLeast<{
    id_tipe?: bigint | number
    AND?: tipe_alamatWhereInput | tipe_alamatWhereInput[]
    OR?: tipe_alamatWhereInput[]
    NOT?: tipe_alamatWhereInput | tipe_alamatWhereInput[]
    tipe_alamat?: StringNullableFilter<"tipe_alamat"> | string | null
    created_at?: DateTimeNullableFilter<"tipe_alamat"> | Date | string | null
    updated_at?: DateTimeNullableFilter<"tipe_alamat"> | Date | string | null
    alamat?: AlamatListRelationFilter
  }, "id_tipe">

  export type tipe_alamatOrderByWithAggregationInput = {
    id_tipe?: SortOrder
    tipe_alamat?: SortOrderInput | SortOrder
    created_at?: SortOrderInput | SortOrder
    updated_at?: SortOrderInput | SortOrder
    _count?: tipe_alamatCountOrderByAggregateInput
    _avg?: tipe_alamatAvgOrderByAggregateInput
    _max?: tipe_alamatMaxOrderByAggregateInput
    _min?: tipe_alamatMinOrderByAggregateInput
    _sum?: tipe_alamatSumOrderByAggregateInput
  }

  export type tipe_alamatScalarWhereWithAggregatesInput = {
    AND?: tipe_alamatScalarWhereWithAggregatesInput | tipe_alamatScalarWhereWithAggregatesInput[]
    OR?: tipe_alamatScalarWhereWithAggregatesInput[]
    NOT?: tipe_alamatScalarWhereWithAggregatesInput | tipe_alamatScalarWhereWithAggregatesInput[]
    id_tipe?: BigIntWithAggregatesFilter<"tipe_alamat"> | bigint | number
    tipe_alamat?: StringNullableWithAggregatesFilter<"tipe_alamat"> | string | null
    created_at?: DateTimeNullableWithAggregatesFilter<"tipe_alamat"> | Date | string | null
    updated_at?: DateTimeNullableWithAggregatesFilter<"tipe_alamat"> | Date | string | null
  }

  export type citiesCreateInput = {
    nama_kota: string
    created_at?: Date | string | null
    updated_at?: Date | string | null
    alamat?: alamatCreateNestedManyWithoutCitiesInput
    provinces: provincesCreateNestedOneWithoutCitiesInput
    kecamatan?: kecamatanCreateNestedManyWithoutCitiesInput
  }

  export type citiesUncheckedCreateInput = {
    id_kota?: number
    nama_kota: string
    id_prov: number
    created_at?: Date | string | null
    updated_at?: Date | string | null
    alamat?: alamatUncheckedCreateNestedManyWithoutCitiesInput
    kecamatan?: kecamatanUncheckedCreateNestedManyWithoutCitiesInput
  }

  export type citiesUpdateInput = {
    nama_kota?: StringFieldUpdateOperationsInput | string
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    alamat?: alamatUpdateManyWithoutCitiesNestedInput
    provinces?: provincesUpdateOneRequiredWithoutCitiesNestedInput
    kecamatan?: kecamatanUpdateManyWithoutCitiesNestedInput
  }

  export type citiesUncheckedUpdateInput = {
    id_kota?: IntFieldUpdateOperationsInput | number
    nama_kota?: StringFieldUpdateOperationsInput | string
    id_prov?: IntFieldUpdateOperationsInput | number
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    alamat?: alamatUncheckedUpdateManyWithoutCitiesNestedInput
    kecamatan?: kecamatanUncheckedUpdateManyWithoutCitiesNestedInput
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
    profession_detail?: profession_detailCreateNestedManyWithoutProfessionInput
    profession_user?: profession_userCreateNestedManyWithoutProfessionInput
  }

  export type professionUncheckedCreateInput = {
    id_profesi?: bigint | number
    profession: string
    created_at?: Date | string | null
    updated_at?: Date | string | null
    profession_detail?: profession_detailUncheckedCreateNestedManyWithoutProfessionInput
    profession_user?: profession_userUncheckedCreateNestedManyWithoutProfessionInput
  }

  export type professionUpdateInput = {
    id_profesi?: BigIntFieldUpdateOperationsInput | bigint | number
    profession?: StringFieldUpdateOperationsInput | string
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    profession_detail?: profession_detailUpdateManyWithoutProfessionNestedInput
    profession_user?: profession_userUpdateManyWithoutProfessionNestedInput
  }

  export type professionUncheckedUpdateInput = {
    id_profesi?: BigIntFieldUpdateOperationsInput | bigint | number
    profession?: StringFieldUpdateOperationsInput | string
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    profession_detail?: profession_detailUncheckedUpdateManyWithoutProfessionNestedInput
    profession_user?: profession_userUncheckedUpdateManyWithoutProfessionNestedInput
  }

  export type professionCreateManyInput = {
    id_profesi?: bigint | number
    profession: string
    created_at?: Date | string | null
    updated_at?: Date | string | null
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
    alamat?: alamatCreateNestedManyWithoutProvincesInput
    cities?: citiesCreateNestedManyWithoutProvincesInput
  }

  export type provincesUncheckedCreateInput = {
    id_prov?: number
    nama_prov: string
    created_at?: Date | string | null
    updated_at?: Date | string | null
    alamat?: alamatUncheckedCreateNestedManyWithoutProvincesInput
    cities?: citiesUncheckedCreateNestedManyWithoutProvincesInput
  }

  export type provincesUpdateInput = {
    nama_prov?: StringFieldUpdateOperationsInput | string
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    alamat?: alamatUpdateManyWithoutProvincesNestedInput
    cities?: citiesUpdateManyWithoutProvincesNestedInput
  }

  export type provincesUncheckedUpdateInput = {
    id_prov?: IntFieldUpdateOperationsInput | number
    nama_prov?: StringFieldUpdateOperationsInput | string
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    alamat?: alamatUncheckedUpdateManyWithoutProvincesNestedInput
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

  export type usersCreateInput = {
    id_user: string
    username: string
    nama: string
    email: string
    sandi: string
    gender: $Enums.gender_enum
    birth_date: Date | string
    foto?: Uint8Array | null
    bio?: string | null
    status_user: $Enums.status_user_enum
    created_at?: Date | string | null
    updated_at?: Date | string | null
    alamat?: alamatCreateNestedManyWithoutUsersInput
    profession_user?: profession_userCreateNestedManyWithoutUsersInput
  }

  export type usersUncheckedCreateInput = {
    id_user: string
    username: string
    nama: string
    email: string
    sandi: string
    gender: $Enums.gender_enum
    birth_date: Date | string
    foto?: Uint8Array | null
    bio?: string | null
    status_user: $Enums.status_user_enum
    created_at?: Date | string | null
    updated_at?: Date | string | null
    alamat?: alamatUncheckedCreateNestedManyWithoutUsersInput
    profession_user?: profession_userUncheckedCreateNestedManyWithoutUsersInput
  }

  export type usersUpdateInput = {
    id_user?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    nama?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    sandi?: StringFieldUpdateOperationsInput | string
    gender?: Enumgender_enumFieldUpdateOperationsInput | $Enums.gender_enum
    birth_date?: DateTimeFieldUpdateOperationsInput | Date | string
    foto?: NullableBytesFieldUpdateOperationsInput | Uint8Array | null
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    status_user?: Enumstatus_user_enumFieldUpdateOperationsInput | $Enums.status_user_enum
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    alamat?: alamatUpdateManyWithoutUsersNestedInput
    profession_user?: profession_userUpdateManyWithoutUsersNestedInput
  }

  export type usersUncheckedUpdateInput = {
    id_user?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    nama?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    sandi?: StringFieldUpdateOperationsInput | string
    gender?: Enumgender_enumFieldUpdateOperationsInput | $Enums.gender_enum
    birth_date?: DateTimeFieldUpdateOperationsInput | Date | string
    foto?: NullableBytesFieldUpdateOperationsInput | Uint8Array | null
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    status_user?: Enumstatus_user_enumFieldUpdateOperationsInput | $Enums.status_user_enum
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    alamat?: alamatUncheckedUpdateManyWithoutUsersNestedInput
    profession_user?: profession_userUncheckedUpdateManyWithoutUsersNestedInput
  }

  export type usersCreateManyInput = {
    id_user: string
    username: string
    nama: string
    email: string
    sandi: string
    gender: $Enums.gender_enum
    birth_date: Date | string
    foto?: Uint8Array | null
    bio?: string | null
    status_user: $Enums.status_user_enum
    created_at?: Date | string | null
    updated_at?: Date | string | null
  }

  export type usersUpdateManyMutationInput = {
    id_user?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    nama?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    sandi?: StringFieldUpdateOperationsInput | string
    gender?: Enumgender_enumFieldUpdateOperationsInput | $Enums.gender_enum
    birth_date?: DateTimeFieldUpdateOperationsInput | Date | string
    foto?: NullableBytesFieldUpdateOperationsInput | Uint8Array | null
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    status_user?: Enumstatus_user_enumFieldUpdateOperationsInput | $Enums.status_user_enum
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type usersUncheckedUpdateManyInput = {
    id_user?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    nama?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    sandi?: StringFieldUpdateOperationsInput | string
    gender?: Enumgender_enumFieldUpdateOperationsInput | $Enums.gender_enum
    birth_date?: DateTimeFieldUpdateOperationsInput | Date | string
    foto?: NullableBytesFieldUpdateOperationsInput | Uint8Array | null
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    status_user?: Enumstatus_user_enumFieldUpdateOperationsInput | $Enums.status_user_enum
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type profession_categoryCreateInput = {
    id_prof_cat?: bigint | number
    profession_category?: string | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
    profession_detail?: profession_detailCreateNestedManyWithoutProfession_categoryInput
  }

  export type profession_categoryUncheckedCreateInput = {
    id_prof_cat?: bigint | number
    profession_category?: string | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
    profession_detail?: profession_detailUncheckedCreateNestedManyWithoutProfession_categoryInput
  }

  export type profession_categoryUpdateInput = {
    id_prof_cat?: BigIntFieldUpdateOperationsInput | bigint | number
    profession_category?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    profession_detail?: profession_detailUpdateManyWithoutProfession_categoryNestedInput
  }

  export type profession_categoryUncheckedUpdateInput = {
    id_prof_cat?: BigIntFieldUpdateOperationsInput | bigint | number
    profession_category?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    profession_detail?: profession_detailUncheckedUpdateManyWithoutProfession_categoryNestedInput
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

  export type profession_detailCreateInput = {
    profession_category: profession_categoryCreateNestedOneWithoutProfession_detailInput
    profession: professionCreateNestedOneWithoutProfession_detailInput
  }

  export type profession_detailUncheckedCreateInput = {
    id_profesi: bigint | number
    id_prof_cat: bigint | number
  }

  export type profession_detailUpdateInput = {
    profession_category?: profession_categoryUpdateOneRequiredWithoutProfession_detailNestedInput
    profession?: professionUpdateOneRequiredWithoutProfession_detailNestedInput
  }

  export type profession_detailUncheckedUpdateInput = {
    id_profesi?: BigIntFieldUpdateOperationsInput | bigint | number
    id_prof_cat?: BigIntFieldUpdateOperationsInput | bigint | number
  }

  export type profession_detailCreateManyInput = {
    id_profesi: bigint | number
    id_prof_cat: bigint | number
  }

  export type profession_detailUpdateManyMutationInput = {

  }

  export type profession_detailUncheckedUpdateManyInput = {
    id_profesi?: BigIntFieldUpdateOperationsInput | bigint | number
    id_prof_cat?: BigIntFieldUpdateOperationsInput | bigint | number
  }

  export type alamatCreateInput = {
    id_alamat: string
    alamat: string
    catatan?: string | null
    latitude: Decimal | DecimalJsLike | number | string
    longitude: Decimal | DecimalJsLike | number | string
    is_default: boolean
    created_at?: Date | string | null
    updated_at?: Date | string | null
    kecamatan: kecamatanCreateNestedOneWithoutAlamatInput
    kelurahan: kelurahanCreateNestedOneWithoutAlamatInput
    cities: citiesCreateNestedOneWithoutAlamatInput
    provinces: provincesCreateNestedOneWithoutAlamatInput
    tipe_alamat?: tipe_alamatCreateNestedOneWithoutAlamatInput
    users: usersCreateNestedOneWithoutAlamatInput
  }

  export type alamatUncheckedCreateInput = {
    id_alamat: string
    id_user: string
    alamat: string
    catatan?: string | null
    latitude: Decimal | DecimalJsLike | number | string
    longitude: Decimal | DecimalJsLike | number | string
    is_default: boolean
    id_tipe?: bigint | number | null
    id_kel: bigint | number
    id_kec: bigint | number
    id_kota: number
    id_prov: number
    created_at?: Date | string | null
    updated_at?: Date | string | null
  }

  export type alamatUpdateInput = {
    id_alamat?: StringFieldUpdateOperationsInput | string
    alamat?: StringFieldUpdateOperationsInput | string
    catatan?: NullableStringFieldUpdateOperationsInput | string | null
    latitude?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    longitude?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    is_default?: BoolFieldUpdateOperationsInput | boolean
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    kecamatan?: kecamatanUpdateOneRequiredWithoutAlamatNestedInput
    kelurahan?: kelurahanUpdateOneRequiredWithoutAlamatNestedInput
    cities?: citiesUpdateOneRequiredWithoutAlamatNestedInput
    provinces?: provincesUpdateOneRequiredWithoutAlamatNestedInput
    tipe_alamat?: tipe_alamatUpdateOneWithoutAlamatNestedInput
    users?: usersUpdateOneRequiredWithoutAlamatNestedInput
  }

  export type alamatUncheckedUpdateInput = {
    id_alamat?: StringFieldUpdateOperationsInput | string
    id_user?: StringFieldUpdateOperationsInput | string
    alamat?: StringFieldUpdateOperationsInput | string
    catatan?: NullableStringFieldUpdateOperationsInput | string | null
    latitude?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    longitude?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    is_default?: BoolFieldUpdateOperationsInput | boolean
    id_tipe?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    id_kel?: BigIntFieldUpdateOperationsInput | bigint | number
    id_kec?: BigIntFieldUpdateOperationsInput | bigint | number
    id_kota?: IntFieldUpdateOperationsInput | number
    id_prov?: IntFieldUpdateOperationsInput | number
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type alamatCreateManyInput = {
    id_alamat: string
    id_user: string
    alamat: string
    catatan?: string | null
    latitude: Decimal | DecimalJsLike | number | string
    longitude: Decimal | DecimalJsLike | number | string
    is_default: boolean
    id_tipe?: bigint | number | null
    id_kel: bigint | number
    id_kec: bigint | number
    id_kota: number
    id_prov: number
    created_at?: Date | string | null
    updated_at?: Date | string | null
  }

  export type alamatUpdateManyMutationInput = {
    id_alamat?: StringFieldUpdateOperationsInput | string
    alamat?: StringFieldUpdateOperationsInput | string
    catatan?: NullableStringFieldUpdateOperationsInput | string | null
    latitude?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    longitude?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    is_default?: BoolFieldUpdateOperationsInput | boolean
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type alamatUncheckedUpdateManyInput = {
    id_alamat?: StringFieldUpdateOperationsInput | string
    id_user?: StringFieldUpdateOperationsInput | string
    alamat?: StringFieldUpdateOperationsInput | string
    catatan?: NullableStringFieldUpdateOperationsInput | string | null
    latitude?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    longitude?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    is_default?: BoolFieldUpdateOperationsInput | boolean
    id_tipe?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    id_kel?: BigIntFieldUpdateOperationsInput | bigint | number
    id_kec?: BigIntFieldUpdateOperationsInput | bigint | number
    id_kota?: IntFieldUpdateOperationsInput | number
    id_prov?: IntFieldUpdateOperationsInput | number
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type kecamatanCreateInput = {
    id_kec?: bigint | number
    kecamatan?: string | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
    alamat?: alamatCreateNestedManyWithoutKecamatanInput
    cities?: citiesCreateNestedOneWithoutKecamatanInput
    kelurahan?: kelurahanCreateNestedManyWithoutKecamatanInput
  }

  export type kecamatanUncheckedCreateInput = {
    id_kec?: bigint | number
    kecamatan?: string | null
    id_kota?: number | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
    alamat?: alamatUncheckedCreateNestedManyWithoutKecamatanInput
    kelurahan?: kelurahanUncheckedCreateNestedManyWithoutKecamatanInput
  }

  export type kecamatanUpdateInput = {
    id_kec?: BigIntFieldUpdateOperationsInput | bigint | number
    kecamatan?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    alamat?: alamatUpdateManyWithoutKecamatanNestedInput
    cities?: citiesUpdateOneWithoutKecamatanNestedInput
    kelurahan?: kelurahanUpdateManyWithoutKecamatanNestedInput
  }

  export type kecamatanUncheckedUpdateInput = {
    id_kec?: BigIntFieldUpdateOperationsInput | bigint | number
    kecamatan?: NullableStringFieldUpdateOperationsInput | string | null
    id_kota?: NullableIntFieldUpdateOperationsInput | number | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    alamat?: alamatUncheckedUpdateManyWithoutKecamatanNestedInput
    kelurahan?: kelurahanUncheckedUpdateManyWithoutKecamatanNestedInput
  }

  export type kecamatanCreateManyInput = {
    id_kec?: bigint | number
    kecamatan?: string | null
    id_kota?: number | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
  }

  export type kecamatanUpdateManyMutationInput = {
    id_kec?: BigIntFieldUpdateOperationsInput | bigint | number
    kecamatan?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type kecamatanUncheckedUpdateManyInput = {
    id_kec?: BigIntFieldUpdateOperationsInput | bigint | number
    kecamatan?: NullableStringFieldUpdateOperationsInput | string | null
    id_kota?: NullableIntFieldUpdateOperationsInput | number | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type kelurahanCreateInput = {
    id_kel?: bigint | number
    kelurahan?: string | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
    alamat?: alamatCreateNestedManyWithoutKelurahanInput
    kecamatan?: kecamatanCreateNestedOneWithoutKelurahanInput
  }

  export type kelurahanUncheckedCreateInput = {
    id_kel?: bigint | number
    kelurahan?: string | null
    id_kec?: bigint | number | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
    alamat?: alamatUncheckedCreateNestedManyWithoutKelurahanInput
  }

  export type kelurahanUpdateInput = {
    id_kel?: BigIntFieldUpdateOperationsInput | bigint | number
    kelurahan?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    alamat?: alamatUpdateManyWithoutKelurahanNestedInput
    kecamatan?: kecamatanUpdateOneWithoutKelurahanNestedInput
  }

  export type kelurahanUncheckedUpdateInput = {
    id_kel?: BigIntFieldUpdateOperationsInput | bigint | number
    kelurahan?: NullableStringFieldUpdateOperationsInput | string | null
    id_kec?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    alamat?: alamatUncheckedUpdateManyWithoutKelurahanNestedInput
  }

  export type kelurahanCreateManyInput = {
    id_kel?: bigint | number
    kelurahan?: string | null
    id_kec?: bigint | number | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
  }

  export type kelurahanUpdateManyMutationInput = {
    id_kel?: BigIntFieldUpdateOperationsInput | bigint | number
    kelurahan?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type kelurahanUncheckedUpdateManyInput = {
    id_kel?: BigIntFieldUpdateOperationsInput | bigint | number
    kelurahan?: NullableStringFieldUpdateOperationsInput | string | null
    id_kec?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type tipe_alamatCreateInput = {
    id_tipe?: bigint | number
    tipe_alamat?: string | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
    alamat?: alamatCreateNestedManyWithoutTipe_alamatInput
  }

  export type tipe_alamatUncheckedCreateInput = {
    id_tipe?: bigint | number
    tipe_alamat?: string | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
    alamat?: alamatUncheckedCreateNestedManyWithoutTipe_alamatInput
  }

  export type tipe_alamatUpdateInput = {
    id_tipe?: BigIntFieldUpdateOperationsInput | bigint | number
    tipe_alamat?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    alamat?: alamatUpdateManyWithoutTipe_alamatNestedInput
  }

  export type tipe_alamatUncheckedUpdateInput = {
    id_tipe?: BigIntFieldUpdateOperationsInput | bigint | number
    tipe_alamat?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    alamat?: alamatUncheckedUpdateManyWithoutTipe_alamatNestedInput
  }

  export type tipe_alamatCreateManyInput = {
    id_tipe?: bigint | number
    tipe_alamat?: string | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
  }

  export type tipe_alamatUpdateManyMutationInput = {
    id_tipe?: BigIntFieldUpdateOperationsInput | bigint | number
    tipe_alamat?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type tipe_alamatUncheckedUpdateManyInput = {
    id_tipe?: BigIntFieldUpdateOperationsInput | bigint | number
    tipe_alamat?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
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

  export type AlamatListRelationFilter = {
    every?: alamatWhereInput
    some?: alamatWhereInput
    none?: alamatWhereInput
  }

  export type ProvincesScalarRelationFilter = {
    is?: provincesWhereInput
    isNot?: provincesWhereInput
  }

  export type KecamatanListRelationFilter = {
    every?: kecamatanWhereInput
    some?: kecamatanWhereInput
    none?: kecamatanWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type alamatOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type kecamatanOrderByRelationAggregateInput = {
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

  export type Profession_detailListRelationFilter = {
    every?: profession_detailWhereInput
    some?: profession_detailWhereInput
    none?: profession_detailWhereInput
  }

  export type Profession_userListRelationFilter = {
    every?: profession_userWhereInput
    some?: profession_userWhereInput
    none?: profession_userWhereInput
  }

  export type profession_detailOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type profession_userOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type professionCountOrderByAggregateInput = {
    id_profesi?: SortOrder
    profession?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type professionAvgOrderByAggregateInput = {
    id_profesi?: SortOrder
  }

  export type professionMaxOrderByAggregateInput = {
    id_profesi?: SortOrder
    profession?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type professionMinOrderByAggregateInput = {
    id_profesi?: SortOrder
    profession?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type professionSumOrderByAggregateInput = {
    id_profesi?: SortOrder
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

  export type Enumgender_enumFilter<$PrismaModel = never> = {
    equals?: $Enums.gender_enum | Enumgender_enumFieldRefInput<$PrismaModel>
    in?: $Enums.gender_enum[] | ListEnumgender_enumFieldRefInput<$PrismaModel>
    notIn?: $Enums.gender_enum[] | ListEnumgender_enumFieldRefInput<$PrismaModel>
    not?: NestedEnumgender_enumFilter<$PrismaModel> | $Enums.gender_enum
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type BytesNullableFilter<$PrismaModel = never> = {
    equals?: Uint8Array | BytesFieldRefInput<$PrismaModel> | null
    in?: Uint8Array[] | ListBytesFieldRefInput<$PrismaModel> | null
    notIn?: Uint8Array[] | ListBytesFieldRefInput<$PrismaModel> | null
    not?: NestedBytesNullableFilter<$PrismaModel> | Uint8Array | null
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

  export type Enumstatus_user_enumFilter<$PrismaModel = never> = {
    equals?: $Enums.status_user_enum | Enumstatus_user_enumFieldRefInput<$PrismaModel>
    in?: $Enums.status_user_enum[] | ListEnumstatus_user_enumFieldRefInput<$PrismaModel>
    notIn?: $Enums.status_user_enum[] | ListEnumstatus_user_enumFieldRefInput<$PrismaModel>
    not?: NestedEnumstatus_user_enumFilter<$PrismaModel> | $Enums.status_user_enum
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

  export type Enumgender_enumWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.gender_enum | Enumgender_enumFieldRefInput<$PrismaModel>
    in?: $Enums.gender_enum[] | ListEnumgender_enumFieldRefInput<$PrismaModel>
    notIn?: $Enums.gender_enum[] | ListEnumgender_enumFieldRefInput<$PrismaModel>
    not?: NestedEnumgender_enumWithAggregatesFilter<$PrismaModel> | $Enums.gender_enum
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumgender_enumFilter<$PrismaModel>
    _max?: NestedEnumgender_enumFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
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

  export type Enumstatus_user_enumWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.status_user_enum | Enumstatus_user_enumFieldRefInput<$PrismaModel>
    in?: $Enums.status_user_enum[] | ListEnumstatus_user_enumFieldRefInput<$PrismaModel>
    notIn?: $Enums.status_user_enum[] | ListEnumstatus_user_enumFieldRefInput<$PrismaModel>
    not?: NestedEnumstatus_user_enumWithAggregatesFilter<$PrismaModel> | $Enums.status_user_enum
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumstatus_user_enumFilter<$PrismaModel>
    _max?: NestedEnumstatus_user_enumFilter<$PrismaModel>
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

  export type Profession_categoryScalarRelationFilter = {
    is?: profession_categoryWhereInput
    isNot?: profession_categoryWhereInput
  }

  export type profession_detailId_profesiId_prof_catCompoundUniqueInput = {
    id_profesi: bigint | number
    id_prof_cat: bigint | number
  }

  export type profession_detailCountOrderByAggregateInput = {
    id_profesi?: SortOrder
    id_prof_cat?: SortOrder
  }

  export type profession_detailAvgOrderByAggregateInput = {
    id_profesi?: SortOrder
    id_prof_cat?: SortOrder
  }

  export type profession_detailMaxOrderByAggregateInput = {
    id_profesi?: SortOrder
    id_prof_cat?: SortOrder
  }

  export type profession_detailMinOrderByAggregateInput = {
    id_profesi?: SortOrder
    id_prof_cat?: SortOrder
  }

  export type profession_detailSumOrderByAggregateInput = {
    id_profesi?: SortOrder
    id_prof_cat?: SortOrder
  }

  export type UuidFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedUuidFilter<$PrismaModel> | string
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

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
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

  export type KecamatanScalarRelationFilter = {
    is?: kecamatanWhereInput
    isNot?: kecamatanWhereInput
  }

  export type KelurahanScalarRelationFilter = {
    is?: kelurahanWhereInput
    isNot?: kelurahanWhereInput
  }

  export type CitiesScalarRelationFilter = {
    is?: citiesWhereInput
    isNot?: citiesWhereInput
  }

  export type Tipe_alamatNullableScalarRelationFilter = {
    is?: tipe_alamatWhereInput | null
    isNot?: tipe_alamatWhereInput | null
  }

  export type alamatCountOrderByAggregateInput = {
    id_alamat?: SortOrder
    id_user?: SortOrder
    alamat?: SortOrder
    catatan?: SortOrder
    latitude?: SortOrder
    longitude?: SortOrder
    is_default?: SortOrder
    id_tipe?: SortOrder
    id_kel?: SortOrder
    id_kec?: SortOrder
    id_kota?: SortOrder
    id_prov?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type alamatAvgOrderByAggregateInput = {
    latitude?: SortOrder
    longitude?: SortOrder
    id_tipe?: SortOrder
    id_kel?: SortOrder
    id_kec?: SortOrder
    id_kota?: SortOrder
    id_prov?: SortOrder
  }

  export type alamatMaxOrderByAggregateInput = {
    id_alamat?: SortOrder
    id_user?: SortOrder
    alamat?: SortOrder
    catatan?: SortOrder
    latitude?: SortOrder
    longitude?: SortOrder
    is_default?: SortOrder
    id_tipe?: SortOrder
    id_kel?: SortOrder
    id_kec?: SortOrder
    id_kota?: SortOrder
    id_prov?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type alamatMinOrderByAggregateInput = {
    id_alamat?: SortOrder
    id_user?: SortOrder
    alamat?: SortOrder
    catatan?: SortOrder
    latitude?: SortOrder
    longitude?: SortOrder
    is_default?: SortOrder
    id_tipe?: SortOrder
    id_kel?: SortOrder
    id_kec?: SortOrder
    id_kota?: SortOrder
    id_prov?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type alamatSumOrderByAggregateInput = {
    latitude?: SortOrder
    longitude?: SortOrder
    id_tipe?: SortOrder
    id_kel?: SortOrder
    id_kec?: SortOrder
    id_kota?: SortOrder
    id_prov?: SortOrder
  }

  export type UuidWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedUuidWithAggregatesFilter<$PrismaModel> | string
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

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
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

  export type CitiesNullableScalarRelationFilter = {
    is?: citiesWhereInput | null
    isNot?: citiesWhereInput | null
  }

  export type KelurahanListRelationFilter = {
    every?: kelurahanWhereInput
    some?: kelurahanWhereInput
    none?: kelurahanWhereInput
  }

  export type kelurahanOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type kecamatanCountOrderByAggregateInput = {
    id_kec?: SortOrder
    kecamatan?: SortOrder
    id_kota?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type kecamatanAvgOrderByAggregateInput = {
    id_kec?: SortOrder
    id_kota?: SortOrder
  }

  export type kecamatanMaxOrderByAggregateInput = {
    id_kec?: SortOrder
    kecamatan?: SortOrder
    id_kota?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type kecamatanMinOrderByAggregateInput = {
    id_kec?: SortOrder
    kecamatan?: SortOrder
    id_kota?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type kecamatanSumOrderByAggregateInput = {
    id_kec?: SortOrder
    id_kota?: SortOrder
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

  export type KecamatanNullableScalarRelationFilter = {
    is?: kecamatanWhereInput | null
    isNot?: kecamatanWhereInput | null
  }

  export type kelurahanCountOrderByAggregateInput = {
    id_kel?: SortOrder
    kelurahan?: SortOrder
    id_kec?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type kelurahanAvgOrderByAggregateInput = {
    id_kel?: SortOrder
    id_kec?: SortOrder
  }

  export type kelurahanMaxOrderByAggregateInput = {
    id_kel?: SortOrder
    kelurahan?: SortOrder
    id_kec?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type kelurahanMinOrderByAggregateInput = {
    id_kel?: SortOrder
    kelurahan?: SortOrder
    id_kec?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type kelurahanSumOrderByAggregateInput = {
    id_kel?: SortOrder
    id_kec?: SortOrder
  }

  export type tipe_alamatCountOrderByAggregateInput = {
    id_tipe?: SortOrder
    tipe_alamat?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type tipe_alamatAvgOrderByAggregateInput = {
    id_tipe?: SortOrder
  }

  export type tipe_alamatMaxOrderByAggregateInput = {
    id_tipe?: SortOrder
    tipe_alamat?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type tipe_alamatMinOrderByAggregateInput = {
    id_tipe?: SortOrder
    tipe_alamat?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type tipe_alamatSumOrderByAggregateInput = {
    id_tipe?: SortOrder
  }

  export type alamatCreateNestedManyWithoutCitiesInput = {
    create?: XOR<alamatCreateWithoutCitiesInput, alamatUncheckedCreateWithoutCitiesInput> | alamatCreateWithoutCitiesInput[] | alamatUncheckedCreateWithoutCitiesInput[]
    connectOrCreate?: alamatCreateOrConnectWithoutCitiesInput | alamatCreateOrConnectWithoutCitiesInput[]
    createMany?: alamatCreateManyCitiesInputEnvelope
    connect?: alamatWhereUniqueInput | alamatWhereUniqueInput[]
  }

  export type provincesCreateNestedOneWithoutCitiesInput = {
    create?: XOR<provincesCreateWithoutCitiesInput, provincesUncheckedCreateWithoutCitiesInput>
    connectOrCreate?: provincesCreateOrConnectWithoutCitiesInput
    connect?: provincesWhereUniqueInput
  }

  export type kecamatanCreateNestedManyWithoutCitiesInput = {
    create?: XOR<kecamatanCreateWithoutCitiesInput, kecamatanUncheckedCreateWithoutCitiesInput> | kecamatanCreateWithoutCitiesInput[] | kecamatanUncheckedCreateWithoutCitiesInput[]
    connectOrCreate?: kecamatanCreateOrConnectWithoutCitiesInput | kecamatanCreateOrConnectWithoutCitiesInput[]
    createMany?: kecamatanCreateManyCitiesInputEnvelope
    connect?: kecamatanWhereUniqueInput | kecamatanWhereUniqueInput[]
  }

  export type alamatUncheckedCreateNestedManyWithoutCitiesInput = {
    create?: XOR<alamatCreateWithoutCitiesInput, alamatUncheckedCreateWithoutCitiesInput> | alamatCreateWithoutCitiesInput[] | alamatUncheckedCreateWithoutCitiesInput[]
    connectOrCreate?: alamatCreateOrConnectWithoutCitiesInput | alamatCreateOrConnectWithoutCitiesInput[]
    createMany?: alamatCreateManyCitiesInputEnvelope
    connect?: alamatWhereUniqueInput | alamatWhereUniqueInput[]
  }

  export type kecamatanUncheckedCreateNestedManyWithoutCitiesInput = {
    create?: XOR<kecamatanCreateWithoutCitiesInput, kecamatanUncheckedCreateWithoutCitiesInput> | kecamatanCreateWithoutCitiesInput[] | kecamatanUncheckedCreateWithoutCitiesInput[]
    connectOrCreate?: kecamatanCreateOrConnectWithoutCitiesInput | kecamatanCreateOrConnectWithoutCitiesInput[]
    createMany?: kecamatanCreateManyCitiesInputEnvelope
    connect?: kecamatanWhereUniqueInput | kecamatanWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type alamatUpdateManyWithoutCitiesNestedInput = {
    create?: XOR<alamatCreateWithoutCitiesInput, alamatUncheckedCreateWithoutCitiesInput> | alamatCreateWithoutCitiesInput[] | alamatUncheckedCreateWithoutCitiesInput[]
    connectOrCreate?: alamatCreateOrConnectWithoutCitiesInput | alamatCreateOrConnectWithoutCitiesInput[]
    upsert?: alamatUpsertWithWhereUniqueWithoutCitiesInput | alamatUpsertWithWhereUniqueWithoutCitiesInput[]
    createMany?: alamatCreateManyCitiesInputEnvelope
    set?: alamatWhereUniqueInput | alamatWhereUniqueInput[]
    disconnect?: alamatWhereUniqueInput | alamatWhereUniqueInput[]
    delete?: alamatWhereUniqueInput | alamatWhereUniqueInput[]
    connect?: alamatWhereUniqueInput | alamatWhereUniqueInput[]
    update?: alamatUpdateWithWhereUniqueWithoutCitiesInput | alamatUpdateWithWhereUniqueWithoutCitiesInput[]
    updateMany?: alamatUpdateManyWithWhereWithoutCitiesInput | alamatUpdateManyWithWhereWithoutCitiesInput[]
    deleteMany?: alamatScalarWhereInput | alamatScalarWhereInput[]
  }

  export type provincesUpdateOneRequiredWithoutCitiesNestedInput = {
    create?: XOR<provincesCreateWithoutCitiesInput, provincesUncheckedCreateWithoutCitiesInput>
    connectOrCreate?: provincesCreateOrConnectWithoutCitiesInput
    upsert?: provincesUpsertWithoutCitiesInput
    connect?: provincesWhereUniqueInput
    update?: XOR<XOR<provincesUpdateToOneWithWhereWithoutCitiesInput, provincesUpdateWithoutCitiesInput>, provincesUncheckedUpdateWithoutCitiesInput>
  }

  export type kecamatanUpdateManyWithoutCitiesNestedInput = {
    create?: XOR<kecamatanCreateWithoutCitiesInput, kecamatanUncheckedCreateWithoutCitiesInput> | kecamatanCreateWithoutCitiesInput[] | kecamatanUncheckedCreateWithoutCitiesInput[]
    connectOrCreate?: kecamatanCreateOrConnectWithoutCitiesInput | kecamatanCreateOrConnectWithoutCitiesInput[]
    upsert?: kecamatanUpsertWithWhereUniqueWithoutCitiesInput | kecamatanUpsertWithWhereUniqueWithoutCitiesInput[]
    createMany?: kecamatanCreateManyCitiesInputEnvelope
    set?: kecamatanWhereUniqueInput | kecamatanWhereUniqueInput[]
    disconnect?: kecamatanWhereUniqueInput | kecamatanWhereUniqueInput[]
    delete?: kecamatanWhereUniqueInput | kecamatanWhereUniqueInput[]
    connect?: kecamatanWhereUniqueInput | kecamatanWhereUniqueInput[]
    update?: kecamatanUpdateWithWhereUniqueWithoutCitiesInput | kecamatanUpdateWithWhereUniqueWithoutCitiesInput[]
    updateMany?: kecamatanUpdateManyWithWhereWithoutCitiesInput | kecamatanUpdateManyWithWhereWithoutCitiesInput[]
    deleteMany?: kecamatanScalarWhereInput | kecamatanScalarWhereInput[]
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type alamatUncheckedUpdateManyWithoutCitiesNestedInput = {
    create?: XOR<alamatCreateWithoutCitiesInput, alamatUncheckedCreateWithoutCitiesInput> | alamatCreateWithoutCitiesInput[] | alamatUncheckedCreateWithoutCitiesInput[]
    connectOrCreate?: alamatCreateOrConnectWithoutCitiesInput | alamatCreateOrConnectWithoutCitiesInput[]
    upsert?: alamatUpsertWithWhereUniqueWithoutCitiesInput | alamatUpsertWithWhereUniqueWithoutCitiesInput[]
    createMany?: alamatCreateManyCitiesInputEnvelope
    set?: alamatWhereUniqueInput | alamatWhereUniqueInput[]
    disconnect?: alamatWhereUniqueInput | alamatWhereUniqueInput[]
    delete?: alamatWhereUniqueInput | alamatWhereUniqueInput[]
    connect?: alamatWhereUniqueInput | alamatWhereUniqueInput[]
    update?: alamatUpdateWithWhereUniqueWithoutCitiesInput | alamatUpdateWithWhereUniqueWithoutCitiesInput[]
    updateMany?: alamatUpdateManyWithWhereWithoutCitiesInput | alamatUpdateManyWithWhereWithoutCitiesInput[]
    deleteMany?: alamatScalarWhereInput | alamatScalarWhereInput[]
  }

  export type kecamatanUncheckedUpdateManyWithoutCitiesNestedInput = {
    create?: XOR<kecamatanCreateWithoutCitiesInput, kecamatanUncheckedCreateWithoutCitiesInput> | kecamatanCreateWithoutCitiesInput[] | kecamatanUncheckedCreateWithoutCitiesInput[]
    connectOrCreate?: kecamatanCreateOrConnectWithoutCitiesInput | kecamatanCreateOrConnectWithoutCitiesInput[]
    upsert?: kecamatanUpsertWithWhereUniqueWithoutCitiesInput | kecamatanUpsertWithWhereUniqueWithoutCitiesInput[]
    createMany?: kecamatanCreateManyCitiesInputEnvelope
    set?: kecamatanWhereUniqueInput | kecamatanWhereUniqueInput[]
    disconnect?: kecamatanWhereUniqueInput | kecamatanWhereUniqueInput[]
    delete?: kecamatanWhereUniqueInput | kecamatanWhereUniqueInput[]
    connect?: kecamatanWhereUniqueInput | kecamatanWhereUniqueInput[]
    update?: kecamatanUpdateWithWhereUniqueWithoutCitiesInput | kecamatanUpdateWithWhereUniqueWithoutCitiesInput[]
    updateMany?: kecamatanUpdateManyWithWhereWithoutCitiesInput | kecamatanUpdateManyWithWhereWithoutCitiesInput[]
    deleteMany?: kecamatanScalarWhereInput | kecamatanScalarWhereInput[]
  }

  export type profession_detailCreateNestedManyWithoutProfessionInput = {
    create?: XOR<profession_detailCreateWithoutProfessionInput, profession_detailUncheckedCreateWithoutProfessionInput> | profession_detailCreateWithoutProfessionInput[] | profession_detailUncheckedCreateWithoutProfessionInput[]
    connectOrCreate?: profession_detailCreateOrConnectWithoutProfessionInput | profession_detailCreateOrConnectWithoutProfessionInput[]
    createMany?: profession_detailCreateManyProfessionInputEnvelope
    connect?: profession_detailWhereUniqueInput | profession_detailWhereUniqueInput[]
  }

  export type profession_userCreateNestedManyWithoutProfessionInput = {
    create?: XOR<profession_userCreateWithoutProfessionInput, profession_userUncheckedCreateWithoutProfessionInput> | profession_userCreateWithoutProfessionInput[] | profession_userUncheckedCreateWithoutProfessionInput[]
    connectOrCreate?: profession_userCreateOrConnectWithoutProfessionInput | profession_userCreateOrConnectWithoutProfessionInput[]
    createMany?: profession_userCreateManyProfessionInputEnvelope
    connect?: profession_userWhereUniqueInput | profession_userWhereUniqueInput[]
  }

  export type profession_detailUncheckedCreateNestedManyWithoutProfessionInput = {
    create?: XOR<profession_detailCreateWithoutProfessionInput, profession_detailUncheckedCreateWithoutProfessionInput> | profession_detailCreateWithoutProfessionInput[] | profession_detailUncheckedCreateWithoutProfessionInput[]
    connectOrCreate?: profession_detailCreateOrConnectWithoutProfessionInput | profession_detailCreateOrConnectWithoutProfessionInput[]
    createMany?: profession_detailCreateManyProfessionInputEnvelope
    connect?: profession_detailWhereUniqueInput | profession_detailWhereUniqueInput[]
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

  export type profession_detailUpdateManyWithoutProfessionNestedInput = {
    create?: XOR<profession_detailCreateWithoutProfessionInput, profession_detailUncheckedCreateWithoutProfessionInput> | profession_detailCreateWithoutProfessionInput[] | profession_detailUncheckedCreateWithoutProfessionInput[]
    connectOrCreate?: profession_detailCreateOrConnectWithoutProfessionInput | profession_detailCreateOrConnectWithoutProfessionInput[]
    upsert?: profession_detailUpsertWithWhereUniqueWithoutProfessionInput | profession_detailUpsertWithWhereUniqueWithoutProfessionInput[]
    createMany?: profession_detailCreateManyProfessionInputEnvelope
    set?: profession_detailWhereUniqueInput | profession_detailWhereUniqueInput[]
    disconnect?: profession_detailWhereUniqueInput | profession_detailWhereUniqueInput[]
    delete?: profession_detailWhereUniqueInput | profession_detailWhereUniqueInput[]
    connect?: profession_detailWhereUniqueInput | profession_detailWhereUniqueInput[]
    update?: profession_detailUpdateWithWhereUniqueWithoutProfessionInput | profession_detailUpdateWithWhereUniqueWithoutProfessionInput[]
    updateMany?: profession_detailUpdateManyWithWhereWithoutProfessionInput | profession_detailUpdateManyWithWhereWithoutProfessionInput[]
    deleteMany?: profession_detailScalarWhereInput | profession_detailScalarWhereInput[]
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

  export type profession_detailUncheckedUpdateManyWithoutProfessionNestedInput = {
    create?: XOR<profession_detailCreateWithoutProfessionInput, profession_detailUncheckedCreateWithoutProfessionInput> | profession_detailCreateWithoutProfessionInput[] | profession_detailUncheckedCreateWithoutProfessionInput[]
    connectOrCreate?: profession_detailCreateOrConnectWithoutProfessionInput | profession_detailCreateOrConnectWithoutProfessionInput[]
    upsert?: profession_detailUpsertWithWhereUniqueWithoutProfessionInput | profession_detailUpsertWithWhereUniqueWithoutProfessionInput[]
    createMany?: profession_detailCreateManyProfessionInputEnvelope
    set?: profession_detailWhereUniqueInput | profession_detailWhereUniqueInput[]
    disconnect?: profession_detailWhereUniqueInput | profession_detailWhereUniqueInput[]
    delete?: profession_detailWhereUniqueInput | profession_detailWhereUniqueInput[]
    connect?: profession_detailWhereUniqueInput | profession_detailWhereUniqueInput[]
    update?: profession_detailUpdateWithWhereUniqueWithoutProfessionInput | profession_detailUpdateWithWhereUniqueWithoutProfessionInput[]
    updateMany?: profession_detailUpdateManyWithWhereWithoutProfessionInput | profession_detailUpdateManyWithWhereWithoutProfessionInput[]
    deleteMany?: profession_detailScalarWhereInput | profession_detailScalarWhereInput[]
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

  export type alamatCreateNestedManyWithoutProvincesInput = {
    create?: XOR<alamatCreateWithoutProvincesInput, alamatUncheckedCreateWithoutProvincesInput> | alamatCreateWithoutProvincesInput[] | alamatUncheckedCreateWithoutProvincesInput[]
    connectOrCreate?: alamatCreateOrConnectWithoutProvincesInput | alamatCreateOrConnectWithoutProvincesInput[]
    createMany?: alamatCreateManyProvincesInputEnvelope
    connect?: alamatWhereUniqueInput | alamatWhereUniqueInput[]
  }

  export type citiesCreateNestedManyWithoutProvincesInput = {
    create?: XOR<citiesCreateWithoutProvincesInput, citiesUncheckedCreateWithoutProvincesInput> | citiesCreateWithoutProvincesInput[] | citiesUncheckedCreateWithoutProvincesInput[]
    connectOrCreate?: citiesCreateOrConnectWithoutProvincesInput | citiesCreateOrConnectWithoutProvincesInput[]
    createMany?: citiesCreateManyProvincesInputEnvelope
    connect?: citiesWhereUniqueInput | citiesWhereUniqueInput[]
  }

  export type alamatUncheckedCreateNestedManyWithoutProvincesInput = {
    create?: XOR<alamatCreateWithoutProvincesInput, alamatUncheckedCreateWithoutProvincesInput> | alamatCreateWithoutProvincesInput[] | alamatUncheckedCreateWithoutProvincesInput[]
    connectOrCreate?: alamatCreateOrConnectWithoutProvincesInput | alamatCreateOrConnectWithoutProvincesInput[]
    createMany?: alamatCreateManyProvincesInputEnvelope
    connect?: alamatWhereUniqueInput | alamatWhereUniqueInput[]
  }

  export type citiesUncheckedCreateNestedManyWithoutProvincesInput = {
    create?: XOR<citiesCreateWithoutProvincesInput, citiesUncheckedCreateWithoutProvincesInput> | citiesCreateWithoutProvincesInput[] | citiesUncheckedCreateWithoutProvincesInput[]
    connectOrCreate?: citiesCreateOrConnectWithoutProvincesInput | citiesCreateOrConnectWithoutProvincesInput[]
    createMany?: citiesCreateManyProvincesInputEnvelope
    connect?: citiesWhereUniqueInput | citiesWhereUniqueInput[]
  }

  export type alamatUpdateManyWithoutProvincesNestedInput = {
    create?: XOR<alamatCreateWithoutProvincesInput, alamatUncheckedCreateWithoutProvincesInput> | alamatCreateWithoutProvincesInput[] | alamatUncheckedCreateWithoutProvincesInput[]
    connectOrCreate?: alamatCreateOrConnectWithoutProvincesInput | alamatCreateOrConnectWithoutProvincesInput[]
    upsert?: alamatUpsertWithWhereUniqueWithoutProvincesInput | alamatUpsertWithWhereUniqueWithoutProvincesInput[]
    createMany?: alamatCreateManyProvincesInputEnvelope
    set?: alamatWhereUniqueInput | alamatWhereUniqueInput[]
    disconnect?: alamatWhereUniqueInput | alamatWhereUniqueInput[]
    delete?: alamatWhereUniqueInput | alamatWhereUniqueInput[]
    connect?: alamatWhereUniqueInput | alamatWhereUniqueInput[]
    update?: alamatUpdateWithWhereUniqueWithoutProvincesInput | alamatUpdateWithWhereUniqueWithoutProvincesInput[]
    updateMany?: alamatUpdateManyWithWhereWithoutProvincesInput | alamatUpdateManyWithWhereWithoutProvincesInput[]
    deleteMany?: alamatScalarWhereInput | alamatScalarWhereInput[]
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

  export type alamatUncheckedUpdateManyWithoutProvincesNestedInput = {
    create?: XOR<alamatCreateWithoutProvincesInput, alamatUncheckedCreateWithoutProvincesInput> | alamatCreateWithoutProvincesInput[] | alamatUncheckedCreateWithoutProvincesInput[]
    connectOrCreate?: alamatCreateOrConnectWithoutProvincesInput | alamatCreateOrConnectWithoutProvincesInput[]
    upsert?: alamatUpsertWithWhereUniqueWithoutProvincesInput | alamatUpsertWithWhereUniqueWithoutProvincesInput[]
    createMany?: alamatCreateManyProvincesInputEnvelope
    set?: alamatWhereUniqueInput | alamatWhereUniqueInput[]
    disconnect?: alamatWhereUniqueInput | alamatWhereUniqueInput[]
    delete?: alamatWhereUniqueInput | alamatWhereUniqueInput[]
    connect?: alamatWhereUniqueInput | alamatWhereUniqueInput[]
    update?: alamatUpdateWithWhereUniqueWithoutProvincesInput | alamatUpdateWithWhereUniqueWithoutProvincesInput[]
    updateMany?: alamatUpdateManyWithWhereWithoutProvincesInput | alamatUpdateManyWithWhereWithoutProvincesInput[]
    deleteMany?: alamatScalarWhereInput | alamatScalarWhereInput[]
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

  export type alamatCreateNestedManyWithoutUsersInput = {
    create?: XOR<alamatCreateWithoutUsersInput, alamatUncheckedCreateWithoutUsersInput> | alamatCreateWithoutUsersInput[] | alamatUncheckedCreateWithoutUsersInput[]
    connectOrCreate?: alamatCreateOrConnectWithoutUsersInput | alamatCreateOrConnectWithoutUsersInput[]
    createMany?: alamatCreateManyUsersInputEnvelope
    connect?: alamatWhereUniqueInput | alamatWhereUniqueInput[]
  }

  export type profession_userCreateNestedManyWithoutUsersInput = {
    create?: XOR<profession_userCreateWithoutUsersInput, profession_userUncheckedCreateWithoutUsersInput> | profession_userCreateWithoutUsersInput[] | profession_userUncheckedCreateWithoutUsersInput[]
    connectOrCreate?: profession_userCreateOrConnectWithoutUsersInput | profession_userCreateOrConnectWithoutUsersInput[]
    createMany?: profession_userCreateManyUsersInputEnvelope
    connect?: profession_userWhereUniqueInput | profession_userWhereUniqueInput[]
  }

  export type alamatUncheckedCreateNestedManyWithoutUsersInput = {
    create?: XOR<alamatCreateWithoutUsersInput, alamatUncheckedCreateWithoutUsersInput> | alamatCreateWithoutUsersInput[] | alamatUncheckedCreateWithoutUsersInput[]
    connectOrCreate?: alamatCreateOrConnectWithoutUsersInput | alamatCreateOrConnectWithoutUsersInput[]
    createMany?: alamatCreateManyUsersInputEnvelope
    connect?: alamatWhereUniqueInput | alamatWhereUniqueInput[]
  }

  export type profession_userUncheckedCreateNestedManyWithoutUsersInput = {
    create?: XOR<profession_userCreateWithoutUsersInput, profession_userUncheckedCreateWithoutUsersInput> | profession_userCreateWithoutUsersInput[] | profession_userUncheckedCreateWithoutUsersInput[]
    connectOrCreate?: profession_userCreateOrConnectWithoutUsersInput | profession_userCreateOrConnectWithoutUsersInput[]
    createMany?: profession_userCreateManyUsersInputEnvelope
    connect?: profession_userWhereUniqueInput | profession_userWhereUniqueInput[]
  }

  export type Enumgender_enumFieldUpdateOperationsInput = {
    set?: $Enums.gender_enum
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type NullableBytesFieldUpdateOperationsInput = {
    set?: Uint8Array | null
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type Enumstatus_user_enumFieldUpdateOperationsInput = {
    set?: $Enums.status_user_enum
  }

  export type alamatUpdateManyWithoutUsersNestedInput = {
    create?: XOR<alamatCreateWithoutUsersInput, alamatUncheckedCreateWithoutUsersInput> | alamatCreateWithoutUsersInput[] | alamatUncheckedCreateWithoutUsersInput[]
    connectOrCreate?: alamatCreateOrConnectWithoutUsersInput | alamatCreateOrConnectWithoutUsersInput[]
    upsert?: alamatUpsertWithWhereUniqueWithoutUsersInput | alamatUpsertWithWhereUniqueWithoutUsersInput[]
    createMany?: alamatCreateManyUsersInputEnvelope
    set?: alamatWhereUniqueInput | alamatWhereUniqueInput[]
    disconnect?: alamatWhereUniqueInput | alamatWhereUniqueInput[]
    delete?: alamatWhereUniqueInput | alamatWhereUniqueInput[]
    connect?: alamatWhereUniqueInput | alamatWhereUniqueInput[]
    update?: alamatUpdateWithWhereUniqueWithoutUsersInput | alamatUpdateWithWhereUniqueWithoutUsersInput[]
    updateMany?: alamatUpdateManyWithWhereWithoutUsersInput | alamatUpdateManyWithWhereWithoutUsersInput[]
    deleteMany?: alamatScalarWhereInput | alamatScalarWhereInput[]
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

  export type alamatUncheckedUpdateManyWithoutUsersNestedInput = {
    create?: XOR<alamatCreateWithoutUsersInput, alamatUncheckedCreateWithoutUsersInput> | alamatCreateWithoutUsersInput[] | alamatUncheckedCreateWithoutUsersInput[]
    connectOrCreate?: alamatCreateOrConnectWithoutUsersInput | alamatCreateOrConnectWithoutUsersInput[]
    upsert?: alamatUpsertWithWhereUniqueWithoutUsersInput | alamatUpsertWithWhereUniqueWithoutUsersInput[]
    createMany?: alamatCreateManyUsersInputEnvelope
    set?: alamatWhereUniqueInput | alamatWhereUniqueInput[]
    disconnect?: alamatWhereUniqueInput | alamatWhereUniqueInput[]
    delete?: alamatWhereUniqueInput | alamatWhereUniqueInput[]
    connect?: alamatWhereUniqueInput | alamatWhereUniqueInput[]
    update?: alamatUpdateWithWhereUniqueWithoutUsersInput | alamatUpdateWithWhereUniqueWithoutUsersInput[]
    updateMany?: alamatUpdateManyWithWhereWithoutUsersInput | alamatUpdateManyWithWhereWithoutUsersInput[]
    deleteMany?: alamatScalarWhereInput | alamatScalarWhereInput[]
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

  export type profession_detailCreateNestedManyWithoutProfession_categoryInput = {
    create?: XOR<profession_detailCreateWithoutProfession_categoryInput, profession_detailUncheckedCreateWithoutProfession_categoryInput> | profession_detailCreateWithoutProfession_categoryInput[] | profession_detailUncheckedCreateWithoutProfession_categoryInput[]
    connectOrCreate?: profession_detailCreateOrConnectWithoutProfession_categoryInput | profession_detailCreateOrConnectWithoutProfession_categoryInput[]
    createMany?: profession_detailCreateManyProfession_categoryInputEnvelope
    connect?: profession_detailWhereUniqueInput | profession_detailWhereUniqueInput[]
  }

  export type profession_detailUncheckedCreateNestedManyWithoutProfession_categoryInput = {
    create?: XOR<profession_detailCreateWithoutProfession_categoryInput, profession_detailUncheckedCreateWithoutProfession_categoryInput> | profession_detailCreateWithoutProfession_categoryInput[] | profession_detailUncheckedCreateWithoutProfession_categoryInput[]
    connectOrCreate?: profession_detailCreateOrConnectWithoutProfession_categoryInput | profession_detailCreateOrConnectWithoutProfession_categoryInput[]
    createMany?: profession_detailCreateManyProfession_categoryInputEnvelope
    connect?: profession_detailWhereUniqueInput | profession_detailWhereUniqueInput[]
  }

  export type profession_detailUpdateManyWithoutProfession_categoryNestedInput = {
    create?: XOR<profession_detailCreateWithoutProfession_categoryInput, profession_detailUncheckedCreateWithoutProfession_categoryInput> | profession_detailCreateWithoutProfession_categoryInput[] | profession_detailUncheckedCreateWithoutProfession_categoryInput[]
    connectOrCreate?: profession_detailCreateOrConnectWithoutProfession_categoryInput | profession_detailCreateOrConnectWithoutProfession_categoryInput[]
    upsert?: profession_detailUpsertWithWhereUniqueWithoutProfession_categoryInput | profession_detailUpsertWithWhereUniqueWithoutProfession_categoryInput[]
    createMany?: profession_detailCreateManyProfession_categoryInputEnvelope
    set?: profession_detailWhereUniqueInput | profession_detailWhereUniqueInput[]
    disconnect?: profession_detailWhereUniqueInput | profession_detailWhereUniqueInput[]
    delete?: profession_detailWhereUniqueInput | profession_detailWhereUniqueInput[]
    connect?: profession_detailWhereUniqueInput | profession_detailWhereUniqueInput[]
    update?: profession_detailUpdateWithWhereUniqueWithoutProfession_categoryInput | profession_detailUpdateWithWhereUniqueWithoutProfession_categoryInput[]
    updateMany?: profession_detailUpdateManyWithWhereWithoutProfession_categoryInput | profession_detailUpdateManyWithWhereWithoutProfession_categoryInput[]
    deleteMany?: profession_detailScalarWhereInput | profession_detailScalarWhereInput[]
  }

  export type profession_detailUncheckedUpdateManyWithoutProfession_categoryNestedInput = {
    create?: XOR<profession_detailCreateWithoutProfession_categoryInput, profession_detailUncheckedCreateWithoutProfession_categoryInput> | profession_detailCreateWithoutProfession_categoryInput[] | profession_detailUncheckedCreateWithoutProfession_categoryInput[]
    connectOrCreate?: profession_detailCreateOrConnectWithoutProfession_categoryInput | profession_detailCreateOrConnectWithoutProfession_categoryInput[]
    upsert?: profession_detailUpsertWithWhereUniqueWithoutProfession_categoryInput | profession_detailUpsertWithWhereUniqueWithoutProfession_categoryInput[]
    createMany?: profession_detailCreateManyProfession_categoryInputEnvelope
    set?: profession_detailWhereUniqueInput | profession_detailWhereUniqueInput[]
    disconnect?: profession_detailWhereUniqueInput | profession_detailWhereUniqueInput[]
    delete?: profession_detailWhereUniqueInput | profession_detailWhereUniqueInput[]
    connect?: profession_detailWhereUniqueInput | profession_detailWhereUniqueInput[]
    update?: profession_detailUpdateWithWhereUniqueWithoutProfession_categoryInput | profession_detailUpdateWithWhereUniqueWithoutProfession_categoryInput[]
    updateMany?: profession_detailUpdateManyWithWhereWithoutProfession_categoryInput | profession_detailUpdateManyWithWhereWithoutProfession_categoryInput[]
    deleteMany?: profession_detailScalarWhereInput | profession_detailScalarWhereInput[]
  }

  export type profession_categoryCreateNestedOneWithoutProfession_detailInput = {
    create?: XOR<profession_categoryCreateWithoutProfession_detailInput, profession_categoryUncheckedCreateWithoutProfession_detailInput>
    connectOrCreate?: profession_categoryCreateOrConnectWithoutProfession_detailInput
    connect?: profession_categoryWhereUniqueInput
  }

  export type professionCreateNestedOneWithoutProfession_detailInput = {
    create?: XOR<professionCreateWithoutProfession_detailInput, professionUncheckedCreateWithoutProfession_detailInput>
    connectOrCreate?: professionCreateOrConnectWithoutProfession_detailInput
    connect?: professionWhereUniqueInput
  }

  export type profession_categoryUpdateOneRequiredWithoutProfession_detailNestedInput = {
    create?: XOR<profession_categoryCreateWithoutProfession_detailInput, profession_categoryUncheckedCreateWithoutProfession_detailInput>
    connectOrCreate?: profession_categoryCreateOrConnectWithoutProfession_detailInput
    upsert?: profession_categoryUpsertWithoutProfession_detailInput
    connect?: profession_categoryWhereUniqueInput
    update?: XOR<XOR<profession_categoryUpdateToOneWithWhereWithoutProfession_detailInput, profession_categoryUpdateWithoutProfession_detailInput>, profession_categoryUncheckedUpdateWithoutProfession_detailInput>
  }

  export type professionUpdateOneRequiredWithoutProfession_detailNestedInput = {
    create?: XOR<professionCreateWithoutProfession_detailInput, professionUncheckedCreateWithoutProfession_detailInput>
    connectOrCreate?: professionCreateOrConnectWithoutProfession_detailInput
    upsert?: professionUpsertWithoutProfession_detailInput
    connect?: professionWhereUniqueInput
    update?: XOR<XOR<professionUpdateToOneWithWhereWithoutProfession_detailInput, professionUpdateWithoutProfession_detailInput>, professionUncheckedUpdateWithoutProfession_detailInput>
  }

  export type kecamatanCreateNestedOneWithoutAlamatInput = {
    create?: XOR<kecamatanCreateWithoutAlamatInput, kecamatanUncheckedCreateWithoutAlamatInput>
    connectOrCreate?: kecamatanCreateOrConnectWithoutAlamatInput
    connect?: kecamatanWhereUniqueInput
  }

  export type kelurahanCreateNestedOneWithoutAlamatInput = {
    create?: XOR<kelurahanCreateWithoutAlamatInput, kelurahanUncheckedCreateWithoutAlamatInput>
    connectOrCreate?: kelurahanCreateOrConnectWithoutAlamatInput
    connect?: kelurahanWhereUniqueInput
  }

  export type citiesCreateNestedOneWithoutAlamatInput = {
    create?: XOR<citiesCreateWithoutAlamatInput, citiesUncheckedCreateWithoutAlamatInput>
    connectOrCreate?: citiesCreateOrConnectWithoutAlamatInput
    connect?: citiesWhereUniqueInput
  }

  export type provincesCreateNestedOneWithoutAlamatInput = {
    create?: XOR<provincesCreateWithoutAlamatInput, provincesUncheckedCreateWithoutAlamatInput>
    connectOrCreate?: provincesCreateOrConnectWithoutAlamatInput
    connect?: provincesWhereUniqueInput
  }

  export type tipe_alamatCreateNestedOneWithoutAlamatInput = {
    create?: XOR<tipe_alamatCreateWithoutAlamatInput, tipe_alamatUncheckedCreateWithoutAlamatInput>
    connectOrCreate?: tipe_alamatCreateOrConnectWithoutAlamatInput
    connect?: tipe_alamatWhereUniqueInput
  }

  export type usersCreateNestedOneWithoutAlamatInput = {
    create?: XOR<usersCreateWithoutAlamatInput, usersUncheckedCreateWithoutAlamatInput>
    connectOrCreate?: usersCreateOrConnectWithoutAlamatInput
    connect?: usersWhereUniqueInput
  }

  export type DecimalFieldUpdateOperationsInput = {
    set?: Decimal | DecimalJsLike | number | string
    increment?: Decimal | DecimalJsLike | number | string
    decrement?: Decimal | DecimalJsLike | number | string
    multiply?: Decimal | DecimalJsLike | number | string
    divide?: Decimal | DecimalJsLike | number | string
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type kecamatanUpdateOneRequiredWithoutAlamatNestedInput = {
    create?: XOR<kecamatanCreateWithoutAlamatInput, kecamatanUncheckedCreateWithoutAlamatInput>
    connectOrCreate?: kecamatanCreateOrConnectWithoutAlamatInput
    upsert?: kecamatanUpsertWithoutAlamatInput
    connect?: kecamatanWhereUniqueInput
    update?: XOR<XOR<kecamatanUpdateToOneWithWhereWithoutAlamatInput, kecamatanUpdateWithoutAlamatInput>, kecamatanUncheckedUpdateWithoutAlamatInput>
  }

  export type kelurahanUpdateOneRequiredWithoutAlamatNestedInput = {
    create?: XOR<kelurahanCreateWithoutAlamatInput, kelurahanUncheckedCreateWithoutAlamatInput>
    connectOrCreate?: kelurahanCreateOrConnectWithoutAlamatInput
    upsert?: kelurahanUpsertWithoutAlamatInput
    connect?: kelurahanWhereUniqueInput
    update?: XOR<XOR<kelurahanUpdateToOneWithWhereWithoutAlamatInput, kelurahanUpdateWithoutAlamatInput>, kelurahanUncheckedUpdateWithoutAlamatInput>
  }

  export type citiesUpdateOneRequiredWithoutAlamatNestedInput = {
    create?: XOR<citiesCreateWithoutAlamatInput, citiesUncheckedCreateWithoutAlamatInput>
    connectOrCreate?: citiesCreateOrConnectWithoutAlamatInput
    upsert?: citiesUpsertWithoutAlamatInput
    connect?: citiesWhereUniqueInput
    update?: XOR<XOR<citiesUpdateToOneWithWhereWithoutAlamatInput, citiesUpdateWithoutAlamatInput>, citiesUncheckedUpdateWithoutAlamatInput>
  }

  export type provincesUpdateOneRequiredWithoutAlamatNestedInput = {
    create?: XOR<provincesCreateWithoutAlamatInput, provincesUncheckedCreateWithoutAlamatInput>
    connectOrCreate?: provincesCreateOrConnectWithoutAlamatInput
    upsert?: provincesUpsertWithoutAlamatInput
    connect?: provincesWhereUniqueInput
    update?: XOR<XOR<provincesUpdateToOneWithWhereWithoutAlamatInput, provincesUpdateWithoutAlamatInput>, provincesUncheckedUpdateWithoutAlamatInput>
  }

  export type tipe_alamatUpdateOneWithoutAlamatNestedInput = {
    create?: XOR<tipe_alamatCreateWithoutAlamatInput, tipe_alamatUncheckedCreateWithoutAlamatInput>
    connectOrCreate?: tipe_alamatCreateOrConnectWithoutAlamatInput
    upsert?: tipe_alamatUpsertWithoutAlamatInput
    disconnect?: tipe_alamatWhereInput | boolean
    delete?: tipe_alamatWhereInput | boolean
    connect?: tipe_alamatWhereUniqueInput
    update?: XOR<XOR<tipe_alamatUpdateToOneWithWhereWithoutAlamatInput, tipe_alamatUpdateWithoutAlamatInput>, tipe_alamatUncheckedUpdateWithoutAlamatInput>
  }

  export type usersUpdateOneRequiredWithoutAlamatNestedInput = {
    create?: XOR<usersCreateWithoutAlamatInput, usersUncheckedCreateWithoutAlamatInput>
    connectOrCreate?: usersCreateOrConnectWithoutAlamatInput
    upsert?: usersUpsertWithoutAlamatInput
    connect?: usersWhereUniqueInput
    update?: XOR<XOR<usersUpdateToOneWithWhereWithoutAlamatInput, usersUpdateWithoutAlamatInput>, usersUncheckedUpdateWithoutAlamatInput>
  }

  export type NullableBigIntFieldUpdateOperationsInput = {
    set?: bigint | number | null
    increment?: bigint | number
    decrement?: bigint | number
    multiply?: bigint | number
    divide?: bigint | number
  }

  export type alamatCreateNestedManyWithoutKecamatanInput = {
    create?: XOR<alamatCreateWithoutKecamatanInput, alamatUncheckedCreateWithoutKecamatanInput> | alamatCreateWithoutKecamatanInput[] | alamatUncheckedCreateWithoutKecamatanInput[]
    connectOrCreate?: alamatCreateOrConnectWithoutKecamatanInput | alamatCreateOrConnectWithoutKecamatanInput[]
    createMany?: alamatCreateManyKecamatanInputEnvelope
    connect?: alamatWhereUniqueInput | alamatWhereUniqueInput[]
  }

  export type citiesCreateNestedOneWithoutKecamatanInput = {
    create?: XOR<citiesCreateWithoutKecamatanInput, citiesUncheckedCreateWithoutKecamatanInput>
    connectOrCreate?: citiesCreateOrConnectWithoutKecamatanInput
    connect?: citiesWhereUniqueInput
  }

  export type kelurahanCreateNestedManyWithoutKecamatanInput = {
    create?: XOR<kelurahanCreateWithoutKecamatanInput, kelurahanUncheckedCreateWithoutKecamatanInput> | kelurahanCreateWithoutKecamatanInput[] | kelurahanUncheckedCreateWithoutKecamatanInput[]
    connectOrCreate?: kelurahanCreateOrConnectWithoutKecamatanInput | kelurahanCreateOrConnectWithoutKecamatanInput[]
    createMany?: kelurahanCreateManyKecamatanInputEnvelope
    connect?: kelurahanWhereUniqueInput | kelurahanWhereUniqueInput[]
  }

  export type alamatUncheckedCreateNestedManyWithoutKecamatanInput = {
    create?: XOR<alamatCreateWithoutKecamatanInput, alamatUncheckedCreateWithoutKecamatanInput> | alamatCreateWithoutKecamatanInput[] | alamatUncheckedCreateWithoutKecamatanInput[]
    connectOrCreate?: alamatCreateOrConnectWithoutKecamatanInput | alamatCreateOrConnectWithoutKecamatanInput[]
    createMany?: alamatCreateManyKecamatanInputEnvelope
    connect?: alamatWhereUniqueInput | alamatWhereUniqueInput[]
  }

  export type kelurahanUncheckedCreateNestedManyWithoutKecamatanInput = {
    create?: XOR<kelurahanCreateWithoutKecamatanInput, kelurahanUncheckedCreateWithoutKecamatanInput> | kelurahanCreateWithoutKecamatanInput[] | kelurahanUncheckedCreateWithoutKecamatanInput[]
    connectOrCreate?: kelurahanCreateOrConnectWithoutKecamatanInput | kelurahanCreateOrConnectWithoutKecamatanInput[]
    createMany?: kelurahanCreateManyKecamatanInputEnvelope
    connect?: kelurahanWhereUniqueInput | kelurahanWhereUniqueInput[]
  }

  export type alamatUpdateManyWithoutKecamatanNestedInput = {
    create?: XOR<alamatCreateWithoutKecamatanInput, alamatUncheckedCreateWithoutKecamatanInput> | alamatCreateWithoutKecamatanInput[] | alamatUncheckedCreateWithoutKecamatanInput[]
    connectOrCreate?: alamatCreateOrConnectWithoutKecamatanInput | alamatCreateOrConnectWithoutKecamatanInput[]
    upsert?: alamatUpsertWithWhereUniqueWithoutKecamatanInput | alamatUpsertWithWhereUniqueWithoutKecamatanInput[]
    createMany?: alamatCreateManyKecamatanInputEnvelope
    set?: alamatWhereUniqueInput | alamatWhereUniqueInput[]
    disconnect?: alamatWhereUniqueInput | alamatWhereUniqueInput[]
    delete?: alamatWhereUniqueInput | alamatWhereUniqueInput[]
    connect?: alamatWhereUniqueInput | alamatWhereUniqueInput[]
    update?: alamatUpdateWithWhereUniqueWithoutKecamatanInput | alamatUpdateWithWhereUniqueWithoutKecamatanInput[]
    updateMany?: alamatUpdateManyWithWhereWithoutKecamatanInput | alamatUpdateManyWithWhereWithoutKecamatanInput[]
    deleteMany?: alamatScalarWhereInput | alamatScalarWhereInput[]
  }

  export type citiesUpdateOneWithoutKecamatanNestedInput = {
    create?: XOR<citiesCreateWithoutKecamatanInput, citiesUncheckedCreateWithoutKecamatanInput>
    connectOrCreate?: citiesCreateOrConnectWithoutKecamatanInput
    upsert?: citiesUpsertWithoutKecamatanInput
    disconnect?: citiesWhereInput | boolean
    delete?: citiesWhereInput | boolean
    connect?: citiesWhereUniqueInput
    update?: XOR<XOR<citiesUpdateToOneWithWhereWithoutKecamatanInput, citiesUpdateWithoutKecamatanInput>, citiesUncheckedUpdateWithoutKecamatanInput>
  }

  export type kelurahanUpdateManyWithoutKecamatanNestedInput = {
    create?: XOR<kelurahanCreateWithoutKecamatanInput, kelurahanUncheckedCreateWithoutKecamatanInput> | kelurahanCreateWithoutKecamatanInput[] | kelurahanUncheckedCreateWithoutKecamatanInput[]
    connectOrCreate?: kelurahanCreateOrConnectWithoutKecamatanInput | kelurahanCreateOrConnectWithoutKecamatanInput[]
    upsert?: kelurahanUpsertWithWhereUniqueWithoutKecamatanInput | kelurahanUpsertWithWhereUniqueWithoutKecamatanInput[]
    createMany?: kelurahanCreateManyKecamatanInputEnvelope
    set?: kelurahanWhereUniqueInput | kelurahanWhereUniqueInput[]
    disconnect?: kelurahanWhereUniqueInput | kelurahanWhereUniqueInput[]
    delete?: kelurahanWhereUniqueInput | kelurahanWhereUniqueInput[]
    connect?: kelurahanWhereUniqueInput | kelurahanWhereUniqueInput[]
    update?: kelurahanUpdateWithWhereUniqueWithoutKecamatanInput | kelurahanUpdateWithWhereUniqueWithoutKecamatanInput[]
    updateMany?: kelurahanUpdateManyWithWhereWithoutKecamatanInput | kelurahanUpdateManyWithWhereWithoutKecamatanInput[]
    deleteMany?: kelurahanScalarWhereInput | kelurahanScalarWhereInput[]
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type alamatUncheckedUpdateManyWithoutKecamatanNestedInput = {
    create?: XOR<alamatCreateWithoutKecamatanInput, alamatUncheckedCreateWithoutKecamatanInput> | alamatCreateWithoutKecamatanInput[] | alamatUncheckedCreateWithoutKecamatanInput[]
    connectOrCreate?: alamatCreateOrConnectWithoutKecamatanInput | alamatCreateOrConnectWithoutKecamatanInput[]
    upsert?: alamatUpsertWithWhereUniqueWithoutKecamatanInput | alamatUpsertWithWhereUniqueWithoutKecamatanInput[]
    createMany?: alamatCreateManyKecamatanInputEnvelope
    set?: alamatWhereUniqueInput | alamatWhereUniqueInput[]
    disconnect?: alamatWhereUniqueInput | alamatWhereUniqueInput[]
    delete?: alamatWhereUniqueInput | alamatWhereUniqueInput[]
    connect?: alamatWhereUniqueInput | alamatWhereUniqueInput[]
    update?: alamatUpdateWithWhereUniqueWithoutKecamatanInput | alamatUpdateWithWhereUniqueWithoutKecamatanInput[]
    updateMany?: alamatUpdateManyWithWhereWithoutKecamatanInput | alamatUpdateManyWithWhereWithoutKecamatanInput[]
    deleteMany?: alamatScalarWhereInput | alamatScalarWhereInput[]
  }

  export type kelurahanUncheckedUpdateManyWithoutKecamatanNestedInput = {
    create?: XOR<kelurahanCreateWithoutKecamatanInput, kelurahanUncheckedCreateWithoutKecamatanInput> | kelurahanCreateWithoutKecamatanInput[] | kelurahanUncheckedCreateWithoutKecamatanInput[]
    connectOrCreate?: kelurahanCreateOrConnectWithoutKecamatanInput | kelurahanCreateOrConnectWithoutKecamatanInput[]
    upsert?: kelurahanUpsertWithWhereUniqueWithoutKecamatanInput | kelurahanUpsertWithWhereUniqueWithoutKecamatanInput[]
    createMany?: kelurahanCreateManyKecamatanInputEnvelope
    set?: kelurahanWhereUniqueInput | kelurahanWhereUniqueInput[]
    disconnect?: kelurahanWhereUniqueInput | kelurahanWhereUniqueInput[]
    delete?: kelurahanWhereUniqueInput | kelurahanWhereUniqueInput[]
    connect?: kelurahanWhereUniqueInput | kelurahanWhereUniqueInput[]
    update?: kelurahanUpdateWithWhereUniqueWithoutKecamatanInput | kelurahanUpdateWithWhereUniqueWithoutKecamatanInput[]
    updateMany?: kelurahanUpdateManyWithWhereWithoutKecamatanInput | kelurahanUpdateManyWithWhereWithoutKecamatanInput[]
    deleteMany?: kelurahanScalarWhereInput | kelurahanScalarWhereInput[]
  }

  export type alamatCreateNestedManyWithoutKelurahanInput = {
    create?: XOR<alamatCreateWithoutKelurahanInput, alamatUncheckedCreateWithoutKelurahanInput> | alamatCreateWithoutKelurahanInput[] | alamatUncheckedCreateWithoutKelurahanInput[]
    connectOrCreate?: alamatCreateOrConnectWithoutKelurahanInput | alamatCreateOrConnectWithoutKelurahanInput[]
    createMany?: alamatCreateManyKelurahanInputEnvelope
    connect?: alamatWhereUniqueInput | alamatWhereUniqueInput[]
  }

  export type kecamatanCreateNestedOneWithoutKelurahanInput = {
    create?: XOR<kecamatanCreateWithoutKelurahanInput, kecamatanUncheckedCreateWithoutKelurahanInput>
    connectOrCreate?: kecamatanCreateOrConnectWithoutKelurahanInput
    connect?: kecamatanWhereUniqueInput
  }

  export type alamatUncheckedCreateNestedManyWithoutKelurahanInput = {
    create?: XOR<alamatCreateWithoutKelurahanInput, alamatUncheckedCreateWithoutKelurahanInput> | alamatCreateWithoutKelurahanInput[] | alamatUncheckedCreateWithoutKelurahanInput[]
    connectOrCreate?: alamatCreateOrConnectWithoutKelurahanInput | alamatCreateOrConnectWithoutKelurahanInput[]
    createMany?: alamatCreateManyKelurahanInputEnvelope
    connect?: alamatWhereUniqueInput | alamatWhereUniqueInput[]
  }

  export type alamatUpdateManyWithoutKelurahanNestedInput = {
    create?: XOR<alamatCreateWithoutKelurahanInput, alamatUncheckedCreateWithoutKelurahanInput> | alamatCreateWithoutKelurahanInput[] | alamatUncheckedCreateWithoutKelurahanInput[]
    connectOrCreate?: alamatCreateOrConnectWithoutKelurahanInput | alamatCreateOrConnectWithoutKelurahanInput[]
    upsert?: alamatUpsertWithWhereUniqueWithoutKelurahanInput | alamatUpsertWithWhereUniqueWithoutKelurahanInput[]
    createMany?: alamatCreateManyKelurahanInputEnvelope
    set?: alamatWhereUniqueInput | alamatWhereUniqueInput[]
    disconnect?: alamatWhereUniqueInput | alamatWhereUniqueInput[]
    delete?: alamatWhereUniqueInput | alamatWhereUniqueInput[]
    connect?: alamatWhereUniqueInput | alamatWhereUniqueInput[]
    update?: alamatUpdateWithWhereUniqueWithoutKelurahanInput | alamatUpdateWithWhereUniqueWithoutKelurahanInput[]
    updateMany?: alamatUpdateManyWithWhereWithoutKelurahanInput | alamatUpdateManyWithWhereWithoutKelurahanInput[]
    deleteMany?: alamatScalarWhereInput | alamatScalarWhereInput[]
  }

  export type kecamatanUpdateOneWithoutKelurahanNestedInput = {
    create?: XOR<kecamatanCreateWithoutKelurahanInput, kecamatanUncheckedCreateWithoutKelurahanInput>
    connectOrCreate?: kecamatanCreateOrConnectWithoutKelurahanInput
    upsert?: kecamatanUpsertWithoutKelurahanInput
    disconnect?: kecamatanWhereInput | boolean
    delete?: kecamatanWhereInput | boolean
    connect?: kecamatanWhereUniqueInput
    update?: XOR<XOR<kecamatanUpdateToOneWithWhereWithoutKelurahanInput, kecamatanUpdateWithoutKelurahanInput>, kecamatanUncheckedUpdateWithoutKelurahanInput>
  }

  export type alamatUncheckedUpdateManyWithoutKelurahanNestedInput = {
    create?: XOR<alamatCreateWithoutKelurahanInput, alamatUncheckedCreateWithoutKelurahanInput> | alamatCreateWithoutKelurahanInput[] | alamatUncheckedCreateWithoutKelurahanInput[]
    connectOrCreate?: alamatCreateOrConnectWithoutKelurahanInput | alamatCreateOrConnectWithoutKelurahanInput[]
    upsert?: alamatUpsertWithWhereUniqueWithoutKelurahanInput | alamatUpsertWithWhereUniqueWithoutKelurahanInput[]
    createMany?: alamatCreateManyKelurahanInputEnvelope
    set?: alamatWhereUniqueInput | alamatWhereUniqueInput[]
    disconnect?: alamatWhereUniqueInput | alamatWhereUniqueInput[]
    delete?: alamatWhereUniqueInput | alamatWhereUniqueInput[]
    connect?: alamatWhereUniqueInput | alamatWhereUniqueInput[]
    update?: alamatUpdateWithWhereUniqueWithoutKelurahanInput | alamatUpdateWithWhereUniqueWithoutKelurahanInput[]
    updateMany?: alamatUpdateManyWithWhereWithoutKelurahanInput | alamatUpdateManyWithWhereWithoutKelurahanInput[]
    deleteMany?: alamatScalarWhereInput | alamatScalarWhereInput[]
  }

  export type alamatCreateNestedManyWithoutTipe_alamatInput = {
    create?: XOR<alamatCreateWithoutTipe_alamatInput, alamatUncheckedCreateWithoutTipe_alamatInput> | alamatCreateWithoutTipe_alamatInput[] | alamatUncheckedCreateWithoutTipe_alamatInput[]
    connectOrCreate?: alamatCreateOrConnectWithoutTipe_alamatInput | alamatCreateOrConnectWithoutTipe_alamatInput[]
    createMany?: alamatCreateManyTipe_alamatInputEnvelope
    connect?: alamatWhereUniqueInput | alamatWhereUniqueInput[]
  }

  export type alamatUncheckedCreateNestedManyWithoutTipe_alamatInput = {
    create?: XOR<alamatCreateWithoutTipe_alamatInput, alamatUncheckedCreateWithoutTipe_alamatInput> | alamatCreateWithoutTipe_alamatInput[] | alamatUncheckedCreateWithoutTipe_alamatInput[]
    connectOrCreate?: alamatCreateOrConnectWithoutTipe_alamatInput | alamatCreateOrConnectWithoutTipe_alamatInput[]
    createMany?: alamatCreateManyTipe_alamatInputEnvelope
    connect?: alamatWhereUniqueInput | alamatWhereUniqueInput[]
  }

  export type alamatUpdateManyWithoutTipe_alamatNestedInput = {
    create?: XOR<alamatCreateWithoutTipe_alamatInput, alamatUncheckedCreateWithoutTipe_alamatInput> | alamatCreateWithoutTipe_alamatInput[] | alamatUncheckedCreateWithoutTipe_alamatInput[]
    connectOrCreate?: alamatCreateOrConnectWithoutTipe_alamatInput | alamatCreateOrConnectWithoutTipe_alamatInput[]
    upsert?: alamatUpsertWithWhereUniqueWithoutTipe_alamatInput | alamatUpsertWithWhereUniqueWithoutTipe_alamatInput[]
    createMany?: alamatCreateManyTipe_alamatInputEnvelope
    set?: alamatWhereUniqueInput | alamatWhereUniqueInput[]
    disconnect?: alamatWhereUniqueInput | alamatWhereUniqueInput[]
    delete?: alamatWhereUniqueInput | alamatWhereUniqueInput[]
    connect?: alamatWhereUniqueInput | alamatWhereUniqueInput[]
    update?: alamatUpdateWithWhereUniqueWithoutTipe_alamatInput | alamatUpdateWithWhereUniqueWithoutTipe_alamatInput[]
    updateMany?: alamatUpdateManyWithWhereWithoutTipe_alamatInput | alamatUpdateManyWithWhereWithoutTipe_alamatInput[]
    deleteMany?: alamatScalarWhereInput | alamatScalarWhereInput[]
  }

  export type alamatUncheckedUpdateManyWithoutTipe_alamatNestedInput = {
    create?: XOR<alamatCreateWithoutTipe_alamatInput, alamatUncheckedCreateWithoutTipe_alamatInput> | alamatCreateWithoutTipe_alamatInput[] | alamatUncheckedCreateWithoutTipe_alamatInput[]
    connectOrCreate?: alamatCreateOrConnectWithoutTipe_alamatInput | alamatCreateOrConnectWithoutTipe_alamatInput[]
    upsert?: alamatUpsertWithWhereUniqueWithoutTipe_alamatInput | alamatUpsertWithWhereUniqueWithoutTipe_alamatInput[]
    createMany?: alamatCreateManyTipe_alamatInputEnvelope
    set?: alamatWhereUniqueInput | alamatWhereUniqueInput[]
    disconnect?: alamatWhereUniqueInput | alamatWhereUniqueInput[]
    delete?: alamatWhereUniqueInput | alamatWhereUniqueInput[]
    connect?: alamatWhereUniqueInput | alamatWhereUniqueInput[]
    update?: alamatUpdateWithWhereUniqueWithoutTipe_alamatInput | alamatUpdateWithWhereUniqueWithoutTipe_alamatInput[]
    updateMany?: alamatUpdateManyWithWhereWithoutTipe_alamatInput | alamatUpdateManyWithWhereWithoutTipe_alamatInput[]
    deleteMany?: alamatScalarWhereInput | alamatScalarWhereInput[]
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

  export type NestedEnumgender_enumFilter<$PrismaModel = never> = {
    equals?: $Enums.gender_enum | Enumgender_enumFieldRefInput<$PrismaModel>
    in?: $Enums.gender_enum[] | ListEnumgender_enumFieldRefInput<$PrismaModel>
    notIn?: $Enums.gender_enum[] | ListEnumgender_enumFieldRefInput<$PrismaModel>
    not?: NestedEnumgender_enumFilter<$PrismaModel> | $Enums.gender_enum
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedBytesNullableFilter<$PrismaModel = never> = {
    equals?: Uint8Array | BytesFieldRefInput<$PrismaModel> | null
    in?: Uint8Array[] | ListBytesFieldRefInput<$PrismaModel> | null
    notIn?: Uint8Array[] | ListBytesFieldRefInput<$PrismaModel> | null
    not?: NestedBytesNullableFilter<$PrismaModel> | Uint8Array | null
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

  export type NestedEnumstatus_user_enumFilter<$PrismaModel = never> = {
    equals?: $Enums.status_user_enum | Enumstatus_user_enumFieldRefInput<$PrismaModel>
    in?: $Enums.status_user_enum[] | ListEnumstatus_user_enumFieldRefInput<$PrismaModel>
    notIn?: $Enums.status_user_enum[] | ListEnumstatus_user_enumFieldRefInput<$PrismaModel>
    not?: NestedEnumstatus_user_enumFilter<$PrismaModel> | $Enums.status_user_enum
  }

  export type NestedEnumgender_enumWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.gender_enum | Enumgender_enumFieldRefInput<$PrismaModel>
    in?: $Enums.gender_enum[] | ListEnumgender_enumFieldRefInput<$PrismaModel>
    notIn?: $Enums.gender_enum[] | ListEnumgender_enumFieldRefInput<$PrismaModel>
    not?: NestedEnumgender_enumWithAggregatesFilter<$PrismaModel> | $Enums.gender_enum
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumgender_enumFilter<$PrismaModel>
    _max?: NestedEnumgender_enumFilter<$PrismaModel>
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
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

  export type NestedEnumstatus_user_enumWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.status_user_enum | Enumstatus_user_enumFieldRefInput<$PrismaModel>
    in?: $Enums.status_user_enum[] | ListEnumstatus_user_enumFieldRefInput<$PrismaModel>
    notIn?: $Enums.status_user_enum[] | ListEnumstatus_user_enumFieldRefInput<$PrismaModel>
    not?: NestedEnumstatus_user_enumWithAggregatesFilter<$PrismaModel> | $Enums.status_user_enum
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumstatus_user_enumFilter<$PrismaModel>
    _max?: NestedEnumstatus_user_enumFilter<$PrismaModel>
  }

  export type NestedUuidFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedUuidFilter<$PrismaModel> | string
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

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
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

  export type NestedUuidWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedUuidWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
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

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
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

  export type alamatCreateWithoutCitiesInput = {
    id_alamat: string
    alamat: string
    catatan?: string | null
    latitude: Decimal | DecimalJsLike | number | string
    longitude: Decimal | DecimalJsLike | number | string
    is_default: boolean
    created_at?: Date | string | null
    updated_at?: Date | string | null
    kecamatan: kecamatanCreateNestedOneWithoutAlamatInput
    kelurahan: kelurahanCreateNestedOneWithoutAlamatInput
    provinces: provincesCreateNestedOneWithoutAlamatInput
    tipe_alamat?: tipe_alamatCreateNestedOneWithoutAlamatInput
    users: usersCreateNestedOneWithoutAlamatInput
  }

  export type alamatUncheckedCreateWithoutCitiesInput = {
    id_alamat: string
    id_user: string
    alamat: string
    catatan?: string | null
    latitude: Decimal | DecimalJsLike | number | string
    longitude: Decimal | DecimalJsLike | number | string
    is_default: boolean
    id_tipe?: bigint | number | null
    id_kel: bigint | number
    id_kec: bigint | number
    id_prov: number
    created_at?: Date | string | null
    updated_at?: Date | string | null
  }

  export type alamatCreateOrConnectWithoutCitiesInput = {
    where: alamatWhereUniqueInput
    create: XOR<alamatCreateWithoutCitiesInput, alamatUncheckedCreateWithoutCitiesInput>
  }

  export type alamatCreateManyCitiesInputEnvelope = {
    data: alamatCreateManyCitiesInput | alamatCreateManyCitiesInput[]
    skipDuplicates?: boolean
  }

  export type provincesCreateWithoutCitiesInput = {
    nama_prov: string
    created_at?: Date | string | null
    updated_at?: Date | string | null
    alamat?: alamatCreateNestedManyWithoutProvincesInput
  }

  export type provincesUncheckedCreateWithoutCitiesInput = {
    id_prov?: number
    nama_prov: string
    created_at?: Date | string | null
    updated_at?: Date | string | null
    alamat?: alamatUncheckedCreateNestedManyWithoutProvincesInput
  }

  export type provincesCreateOrConnectWithoutCitiesInput = {
    where: provincesWhereUniqueInput
    create: XOR<provincesCreateWithoutCitiesInput, provincesUncheckedCreateWithoutCitiesInput>
  }

  export type kecamatanCreateWithoutCitiesInput = {
    id_kec?: bigint | number
    kecamatan?: string | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
    alamat?: alamatCreateNestedManyWithoutKecamatanInput
    kelurahan?: kelurahanCreateNestedManyWithoutKecamatanInput
  }

  export type kecamatanUncheckedCreateWithoutCitiesInput = {
    id_kec?: bigint | number
    kecamatan?: string | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
    alamat?: alamatUncheckedCreateNestedManyWithoutKecamatanInput
    kelurahan?: kelurahanUncheckedCreateNestedManyWithoutKecamatanInput
  }

  export type kecamatanCreateOrConnectWithoutCitiesInput = {
    where: kecamatanWhereUniqueInput
    create: XOR<kecamatanCreateWithoutCitiesInput, kecamatanUncheckedCreateWithoutCitiesInput>
  }

  export type kecamatanCreateManyCitiesInputEnvelope = {
    data: kecamatanCreateManyCitiesInput | kecamatanCreateManyCitiesInput[]
    skipDuplicates?: boolean
  }

  export type alamatUpsertWithWhereUniqueWithoutCitiesInput = {
    where: alamatWhereUniqueInput
    update: XOR<alamatUpdateWithoutCitiesInput, alamatUncheckedUpdateWithoutCitiesInput>
    create: XOR<alamatCreateWithoutCitiesInput, alamatUncheckedCreateWithoutCitiesInput>
  }

  export type alamatUpdateWithWhereUniqueWithoutCitiesInput = {
    where: alamatWhereUniqueInput
    data: XOR<alamatUpdateWithoutCitiesInput, alamatUncheckedUpdateWithoutCitiesInput>
  }

  export type alamatUpdateManyWithWhereWithoutCitiesInput = {
    where: alamatScalarWhereInput
    data: XOR<alamatUpdateManyMutationInput, alamatUncheckedUpdateManyWithoutCitiesInput>
  }

  export type alamatScalarWhereInput = {
    AND?: alamatScalarWhereInput | alamatScalarWhereInput[]
    OR?: alamatScalarWhereInput[]
    NOT?: alamatScalarWhereInput | alamatScalarWhereInput[]
    id_alamat?: UuidFilter<"alamat"> | string
    id_user?: StringFilter<"alamat"> | string
    alamat?: StringFilter<"alamat"> | string
    catatan?: StringNullableFilter<"alamat"> | string | null
    latitude?: DecimalFilter<"alamat"> | Decimal | DecimalJsLike | number | string
    longitude?: DecimalFilter<"alamat"> | Decimal | DecimalJsLike | number | string
    is_default?: BoolFilter<"alamat"> | boolean
    id_tipe?: BigIntNullableFilter<"alamat"> | bigint | number | null
    id_kel?: BigIntFilter<"alamat"> | bigint | number
    id_kec?: BigIntFilter<"alamat"> | bigint | number
    id_kota?: IntFilter<"alamat"> | number
    id_prov?: IntFilter<"alamat"> | number
    created_at?: DateTimeNullableFilter<"alamat"> | Date | string | null
    updated_at?: DateTimeNullableFilter<"alamat"> | Date | string | null
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
    alamat?: alamatUpdateManyWithoutProvincesNestedInput
  }

  export type provincesUncheckedUpdateWithoutCitiesInput = {
    id_prov?: IntFieldUpdateOperationsInput | number
    nama_prov?: StringFieldUpdateOperationsInput | string
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    alamat?: alamatUncheckedUpdateManyWithoutProvincesNestedInput
  }

  export type kecamatanUpsertWithWhereUniqueWithoutCitiesInput = {
    where: kecamatanWhereUniqueInput
    update: XOR<kecamatanUpdateWithoutCitiesInput, kecamatanUncheckedUpdateWithoutCitiesInput>
    create: XOR<kecamatanCreateWithoutCitiesInput, kecamatanUncheckedCreateWithoutCitiesInput>
  }

  export type kecamatanUpdateWithWhereUniqueWithoutCitiesInput = {
    where: kecamatanWhereUniqueInput
    data: XOR<kecamatanUpdateWithoutCitiesInput, kecamatanUncheckedUpdateWithoutCitiesInput>
  }

  export type kecamatanUpdateManyWithWhereWithoutCitiesInput = {
    where: kecamatanScalarWhereInput
    data: XOR<kecamatanUpdateManyMutationInput, kecamatanUncheckedUpdateManyWithoutCitiesInput>
  }

  export type kecamatanScalarWhereInput = {
    AND?: kecamatanScalarWhereInput | kecamatanScalarWhereInput[]
    OR?: kecamatanScalarWhereInput[]
    NOT?: kecamatanScalarWhereInput | kecamatanScalarWhereInput[]
    id_kec?: BigIntFilter<"kecamatan"> | bigint | number
    kecamatan?: StringNullableFilter<"kecamatan"> | string | null
    id_kota?: IntNullableFilter<"kecamatan"> | number | null
    created_at?: DateTimeNullableFilter<"kecamatan"> | Date | string | null
    updated_at?: DateTimeNullableFilter<"kecamatan"> | Date | string | null
  }

  export type profession_detailCreateWithoutProfessionInput = {
    profession_category: profession_categoryCreateNestedOneWithoutProfession_detailInput
  }

  export type profession_detailUncheckedCreateWithoutProfessionInput = {
    id_prof_cat: bigint | number
  }

  export type profession_detailCreateOrConnectWithoutProfessionInput = {
    where: profession_detailWhereUniqueInput
    create: XOR<profession_detailCreateWithoutProfessionInput, profession_detailUncheckedCreateWithoutProfessionInput>
  }

  export type profession_detailCreateManyProfessionInputEnvelope = {
    data: profession_detailCreateManyProfessionInput | profession_detailCreateManyProfessionInput[]
    skipDuplicates?: boolean
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

  export type profession_detailUpsertWithWhereUniqueWithoutProfessionInput = {
    where: profession_detailWhereUniqueInput
    update: XOR<profession_detailUpdateWithoutProfessionInput, profession_detailUncheckedUpdateWithoutProfessionInput>
    create: XOR<profession_detailCreateWithoutProfessionInput, profession_detailUncheckedCreateWithoutProfessionInput>
  }

  export type profession_detailUpdateWithWhereUniqueWithoutProfessionInput = {
    where: profession_detailWhereUniqueInput
    data: XOR<profession_detailUpdateWithoutProfessionInput, profession_detailUncheckedUpdateWithoutProfessionInput>
  }

  export type profession_detailUpdateManyWithWhereWithoutProfessionInput = {
    where: profession_detailScalarWhereInput
    data: XOR<profession_detailUpdateManyMutationInput, profession_detailUncheckedUpdateManyWithoutProfessionInput>
  }

  export type profession_detailScalarWhereInput = {
    AND?: profession_detailScalarWhereInput | profession_detailScalarWhereInput[]
    OR?: profession_detailScalarWhereInput[]
    NOT?: profession_detailScalarWhereInput | profession_detailScalarWhereInput[]
    id_profesi?: BigIntFilter<"profession_detail"> | bigint | number
    id_prof_cat?: BigIntFilter<"profession_detail"> | bigint | number
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
    profession_detail?: profession_detailCreateNestedManyWithoutProfessionInput
  }

  export type professionUncheckedCreateWithoutProfession_userInput = {
    id_profesi?: bigint | number
    profession: string
    created_at?: Date | string | null
    updated_at?: Date | string | null
    profession_detail?: profession_detailUncheckedCreateNestedManyWithoutProfessionInput
  }

  export type professionCreateOrConnectWithoutProfession_userInput = {
    where: professionWhereUniqueInput
    create: XOR<professionCreateWithoutProfession_userInput, professionUncheckedCreateWithoutProfession_userInput>
  }

  export type usersCreateWithoutProfession_userInput = {
    id_user: string
    username: string
    nama: string
    email: string
    sandi: string
    gender: $Enums.gender_enum
    birth_date: Date | string
    foto?: Uint8Array | null
    bio?: string | null
    status_user: $Enums.status_user_enum
    created_at?: Date | string | null
    updated_at?: Date | string | null
    alamat?: alamatCreateNestedManyWithoutUsersInput
  }

  export type usersUncheckedCreateWithoutProfession_userInput = {
    id_user: string
    username: string
    nama: string
    email: string
    sandi: string
    gender: $Enums.gender_enum
    birth_date: Date | string
    foto?: Uint8Array | null
    bio?: string | null
    status_user: $Enums.status_user_enum
    created_at?: Date | string | null
    updated_at?: Date | string | null
    alamat?: alamatUncheckedCreateNestedManyWithoutUsersInput
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
    profession_detail?: profession_detailUpdateManyWithoutProfessionNestedInput
  }

  export type professionUncheckedUpdateWithoutProfession_userInput = {
    id_profesi?: BigIntFieldUpdateOperationsInput | bigint | number
    profession?: StringFieldUpdateOperationsInput | string
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    profession_detail?: profession_detailUncheckedUpdateManyWithoutProfessionNestedInput
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
    username?: StringFieldUpdateOperationsInput | string
    nama?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    sandi?: StringFieldUpdateOperationsInput | string
    gender?: Enumgender_enumFieldUpdateOperationsInput | $Enums.gender_enum
    birth_date?: DateTimeFieldUpdateOperationsInput | Date | string
    foto?: NullableBytesFieldUpdateOperationsInput | Uint8Array | null
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    status_user?: Enumstatus_user_enumFieldUpdateOperationsInput | $Enums.status_user_enum
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    alamat?: alamatUpdateManyWithoutUsersNestedInput
  }

  export type usersUncheckedUpdateWithoutProfession_userInput = {
    id_user?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    nama?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    sandi?: StringFieldUpdateOperationsInput | string
    gender?: Enumgender_enumFieldUpdateOperationsInput | $Enums.gender_enum
    birth_date?: DateTimeFieldUpdateOperationsInput | Date | string
    foto?: NullableBytesFieldUpdateOperationsInput | Uint8Array | null
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    status_user?: Enumstatus_user_enumFieldUpdateOperationsInput | $Enums.status_user_enum
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    alamat?: alamatUncheckedUpdateManyWithoutUsersNestedInput
  }

  export type alamatCreateWithoutProvincesInput = {
    id_alamat: string
    alamat: string
    catatan?: string | null
    latitude: Decimal | DecimalJsLike | number | string
    longitude: Decimal | DecimalJsLike | number | string
    is_default: boolean
    created_at?: Date | string | null
    updated_at?: Date | string | null
    kecamatan: kecamatanCreateNestedOneWithoutAlamatInput
    kelurahan: kelurahanCreateNestedOneWithoutAlamatInput
    cities: citiesCreateNestedOneWithoutAlamatInput
    tipe_alamat?: tipe_alamatCreateNestedOneWithoutAlamatInput
    users: usersCreateNestedOneWithoutAlamatInput
  }

  export type alamatUncheckedCreateWithoutProvincesInput = {
    id_alamat: string
    id_user: string
    alamat: string
    catatan?: string | null
    latitude: Decimal | DecimalJsLike | number | string
    longitude: Decimal | DecimalJsLike | number | string
    is_default: boolean
    id_tipe?: bigint | number | null
    id_kel: bigint | number
    id_kec: bigint | number
    id_kota: number
    created_at?: Date | string | null
    updated_at?: Date | string | null
  }

  export type alamatCreateOrConnectWithoutProvincesInput = {
    where: alamatWhereUniqueInput
    create: XOR<alamatCreateWithoutProvincesInput, alamatUncheckedCreateWithoutProvincesInput>
  }

  export type alamatCreateManyProvincesInputEnvelope = {
    data: alamatCreateManyProvincesInput | alamatCreateManyProvincesInput[]
    skipDuplicates?: boolean
  }

  export type citiesCreateWithoutProvincesInput = {
    nama_kota: string
    created_at?: Date | string | null
    updated_at?: Date | string | null
    alamat?: alamatCreateNestedManyWithoutCitiesInput
    kecamatan?: kecamatanCreateNestedManyWithoutCitiesInput
  }

  export type citiesUncheckedCreateWithoutProvincesInput = {
    id_kota?: number
    nama_kota: string
    created_at?: Date | string | null
    updated_at?: Date | string | null
    alamat?: alamatUncheckedCreateNestedManyWithoutCitiesInput
    kecamatan?: kecamatanUncheckedCreateNestedManyWithoutCitiesInput
  }

  export type citiesCreateOrConnectWithoutProvincesInput = {
    where: citiesWhereUniqueInput
    create: XOR<citiesCreateWithoutProvincesInput, citiesUncheckedCreateWithoutProvincesInput>
  }

  export type citiesCreateManyProvincesInputEnvelope = {
    data: citiesCreateManyProvincesInput | citiesCreateManyProvincesInput[]
    skipDuplicates?: boolean
  }

  export type alamatUpsertWithWhereUniqueWithoutProvincesInput = {
    where: alamatWhereUniqueInput
    update: XOR<alamatUpdateWithoutProvincesInput, alamatUncheckedUpdateWithoutProvincesInput>
    create: XOR<alamatCreateWithoutProvincesInput, alamatUncheckedCreateWithoutProvincesInput>
  }

  export type alamatUpdateWithWhereUniqueWithoutProvincesInput = {
    where: alamatWhereUniqueInput
    data: XOR<alamatUpdateWithoutProvincesInput, alamatUncheckedUpdateWithoutProvincesInput>
  }

  export type alamatUpdateManyWithWhereWithoutProvincesInput = {
    where: alamatScalarWhereInput
    data: XOR<alamatUpdateManyMutationInput, alamatUncheckedUpdateManyWithoutProvincesInput>
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

  export type alamatCreateWithoutUsersInput = {
    id_alamat: string
    alamat: string
    catatan?: string | null
    latitude: Decimal | DecimalJsLike | number | string
    longitude: Decimal | DecimalJsLike | number | string
    is_default: boolean
    created_at?: Date | string | null
    updated_at?: Date | string | null
    kecamatan: kecamatanCreateNestedOneWithoutAlamatInput
    kelurahan: kelurahanCreateNestedOneWithoutAlamatInput
    cities: citiesCreateNestedOneWithoutAlamatInput
    provinces: provincesCreateNestedOneWithoutAlamatInput
    tipe_alamat?: tipe_alamatCreateNestedOneWithoutAlamatInput
  }

  export type alamatUncheckedCreateWithoutUsersInput = {
    id_alamat: string
    alamat: string
    catatan?: string | null
    latitude: Decimal | DecimalJsLike | number | string
    longitude: Decimal | DecimalJsLike | number | string
    is_default: boolean
    id_tipe?: bigint | number | null
    id_kel: bigint | number
    id_kec: bigint | number
    id_kota: number
    id_prov: number
    created_at?: Date | string | null
    updated_at?: Date | string | null
  }

  export type alamatCreateOrConnectWithoutUsersInput = {
    where: alamatWhereUniqueInput
    create: XOR<alamatCreateWithoutUsersInput, alamatUncheckedCreateWithoutUsersInput>
  }

  export type alamatCreateManyUsersInputEnvelope = {
    data: alamatCreateManyUsersInput | alamatCreateManyUsersInput[]
    skipDuplicates?: boolean
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

  export type alamatUpsertWithWhereUniqueWithoutUsersInput = {
    where: alamatWhereUniqueInput
    update: XOR<alamatUpdateWithoutUsersInput, alamatUncheckedUpdateWithoutUsersInput>
    create: XOR<alamatCreateWithoutUsersInput, alamatUncheckedCreateWithoutUsersInput>
  }

  export type alamatUpdateWithWhereUniqueWithoutUsersInput = {
    where: alamatWhereUniqueInput
    data: XOR<alamatUpdateWithoutUsersInput, alamatUncheckedUpdateWithoutUsersInput>
  }

  export type alamatUpdateManyWithWhereWithoutUsersInput = {
    where: alamatScalarWhereInput
    data: XOR<alamatUpdateManyMutationInput, alamatUncheckedUpdateManyWithoutUsersInput>
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

  export type profession_detailCreateWithoutProfession_categoryInput = {
    profession: professionCreateNestedOneWithoutProfession_detailInput
  }

  export type profession_detailUncheckedCreateWithoutProfession_categoryInput = {
    id_profesi: bigint | number
  }

  export type profession_detailCreateOrConnectWithoutProfession_categoryInput = {
    where: profession_detailWhereUniqueInput
    create: XOR<profession_detailCreateWithoutProfession_categoryInput, profession_detailUncheckedCreateWithoutProfession_categoryInput>
  }

  export type profession_detailCreateManyProfession_categoryInputEnvelope = {
    data: profession_detailCreateManyProfession_categoryInput | profession_detailCreateManyProfession_categoryInput[]
    skipDuplicates?: boolean
  }

  export type profession_detailUpsertWithWhereUniqueWithoutProfession_categoryInput = {
    where: profession_detailWhereUniqueInput
    update: XOR<profession_detailUpdateWithoutProfession_categoryInput, profession_detailUncheckedUpdateWithoutProfession_categoryInput>
    create: XOR<profession_detailCreateWithoutProfession_categoryInput, profession_detailUncheckedCreateWithoutProfession_categoryInput>
  }

  export type profession_detailUpdateWithWhereUniqueWithoutProfession_categoryInput = {
    where: profession_detailWhereUniqueInput
    data: XOR<profession_detailUpdateWithoutProfession_categoryInput, profession_detailUncheckedUpdateWithoutProfession_categoryInput>
  }

  export type profession_detailUpdateManyWithWhereWithoutProfession_categoryInput = {
    where: profession_detailScalarWhereInput
    data: XOR<profession_detailUpdateManyMutationInput, profession_detailUncheckedUpdateManyWithoutProfession_categoryInput>
  }

  export type profession_categoryCreateWithoutProfession_detailInput = {
    id_prof_cat?: bigint | number
    profession_category?: string | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
  }

  export type profession_categoryUncheckedCreateWithoutProfession_detailInput = {
    id_prof_cat?: bigint | number
    profession_category?: string | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
  }

  export type profession_categoryCreateOrConnectWithoutProfession_detailInput = {
    where: profession_categoryWhereUniqueInput
    create: XOR<profession_categoryCreateWithoutProfession_detailInput, profession_categoryUncheckedCreateWithoutProfession_detailInput>
  }

  export type professionCreateWithoutProfession_detailInput = {
    id_profesi?: bigint | number
    profession: string
    created_at?: Date | string | null
    updated_at?: Date | string | null
    profession_user?: profession_userCreateNestedManyWithoutProfessionInput
  }

  export type professionUncheckedCreateWithoutProfession_detailInput = {
    id_profesi?: bigint | number
    profession: string
    created_at?: Date | string | null
    updated_at?: Date | string | null
    profession_user?: profession_userUncheckedCreateNestedManyWithoutProfessionInput
  }

  export type professionCreateOrConnectWithoutProfession_detailInput = {
    where: professionWhereUniqueInput
    create: XOR<professionCreateWithoutProfession_detailInput, professionUncheckedCreateWithoutProfession_detailInput>
  }

  export type profession_categoryUpsertWithoutProfession_detailInput = {
    update: XOR<profession_categoryUpdateWithoutProfession_detailInput, profession_categoryUncheckedUpdateWithoutProfession_detailInput>
    create: XOR<profession_categoryCreateWithoutProfession_detailInput, profession_categoryUncheckedCreateWithoutProfession_detailInput>
    where?: profession_categoryWhereInput
  }

  export type profession_categoryUpdateToOneWithWhereWithoutProfession_detailInput = {
    where?: profession_categoryWhereInput
    data: XOR<profession_categoryUpdateWithoutProfession_detailInput, profession_categoryUncheckedUpdateWithoutProfession_detailInput>
  }

  export type profession_categoryUpdateWithoutProfession_detailInput = {
    id_prof_cat?: BigIntFieldUpdateOperationsInput | bigint | number
    profession_category?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type profession_categoryUncheckedUpdateWithoutProfession_detailInput = {
    id_prof_cat?: BigIntFieldUpdateOperationsInput | bigint | number
    profession_category?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type professionUpsertWithoutProfession_detailInput = {
    update: XOR<professionUpdateWithoutProfession_detailInput, professionUncheckedUpdateWithoutProfession_detailInput>
    create: XOR<professionCreateWithoutProfession_detailInput, professionUncheckedCreateWithoutProfession_detailInput>
    where?: professionWhereInput
  }

  export type professionUpdateToOneWithWhereWithoutProfession_detailInput = {
    where?: professionWhereInput
    data: XOR<professionUpdateWithoutProfession_detailInput, professionUncheckedUpdateWithoutProfession_detailInput>
  }

  export type professionUpdateWithoutProfession_detailInput = {
    id_profesi?: BigIntFieldUpdateOperationsInput | bigint | number
    profession?: StringFieldUpdateOperationsInput | string
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    profession_user?: profession_userUpdateManyWithoutProfessionNestedInput
  }

  export type professionUncheckedUpdateWithoutProfession_detailInput = {
    id_profesi?: BigIntFieldUpdateOperationsInput | bigint | number
    profession?: StringFieldUpdateOperationsInput | string
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    profession_user?: profession_userUncheckedUpdateManyWithoutProfessionNestedInput
  }

  export type kecamatanCreateWithoutAlamatInput = {
    id_kec?: bigint | number
    kecamatan?: string | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
    cities?: citiesCreateNestedOneWithoutKecamatanInput
    kelurahan?: kelurahanCreateNestedManyWithoutKecamatanInput
  }

  export type kecamatanUncheckedCreateWithoutAlamatInput = {
    id_kec?: bigint | number
    kecamatan?: string | null
    id_kota?: number | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
    kelurahan?: kelurahanUncheckedCreateNestedManyWithoutKecamatanInput
  }

  export type kecamatanCreateOrConnectWithoutAlamatInput = {
    where: kecamatanWhereUniqueInput
    create: XOR<kecamatanCreateWithoutAlamatInput, kecamatanUncheckedCreateWithoutAlamatInput>
  }

  export type kelurahanCreateWithoutAlamatInput = {
    id_kel?: bigint | number
    kelurahan?: string | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
    kecamatan?: kecamatanCreateNestedOneWithoutKelurahanInput
  }

  export type kelurahanUncheckedCreateWithoutAlamatInput = {
    id_kel?: bigint | number
    kelurahan?: string | null
    id_kec?: bigint | number | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
  }

  export type kelurahanCreateOrConnectWithoutAlamatInput = {
    where: kelurahanWhereUniqueInput
    create: XOR<kelurahanCreateWithoutAlamatInput, kelurahanUncheckedCreateWithoutAlamatInput>
  }

  export type citiesCreateWithoutAlamatInput = {
    nama_kota: string
    created_at?: Date | string | null
    updated_at?: Date | string | null
    provinces: provincesCreateNestedOneWithoutCitiesInput
    kecamatan?: kecamatanCreateNestedManyWithoutCitiesInput
  }

  export type citiesUncheckedCreateWithoutAlamatInput = {
    id_kota?: number
    nama_kota: string
    id_prov: number
    created_at?: Date | string | null
    updated_at?: Date | string | null
    kecamatan?: kecamatanUncheckedCreateNestedManyWithoutCitiesInput
  }

  export type citiesCreateOrConnectWithoutAlamatInput = {
    where: citiesWhereUniqueInput
    create: XOR<citiesCreateWithoutAlamatInput, citiesUncheckedCreateWithoutAlamatInput>
  }

  export type provincesCreateWithoutAlamatInput = {
    nama_prov: string
    created_at?: Date | string | null
    updated_at?: Date | string | null
    cities?: citiesCreateNestedManyWithoutProvincesInput
  }

  export type provincesUncheckedCreateWithoutAlamatInput = {
    id_prov?: number
    nama_prov: string
    created_at?: Date | string | null
    updated_at?: Date | string | null
    cities?: citiesUncheckedCreateNestedManyWithoutProvincesInput
  }

  export type provincesCreateOrConnectWithoutAlamatInput = {
    where: provincesWhereUniqueInput
    create: XOR<provincesCreateWithoutAlamatInput, provincesUncheckedCreateWithoutAlamatInput>
  }

  export type tipe_alamatCreateWithoutAlamatInput = {
    id_tipe?: bigint | number
    tipe_alamat?: string | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
  }

  export type tipe_alamatUncheckedCreateWithoutAlamatInput = {
    id_tipe?: bigint | number
    tipe_alamat?: string | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
  }

  export type tipe_alamatCreateOrConnectWithoutAlamatInput = {
    where: tipe_alamatWhereUniqueInput
    create: XOR<tipe_alamatCreateWithoutAlamatInput, tipe_alamatUncheckedCreateWithoutAlamatInput>
  }

  export type usersCreateWithoutAlamatInput = {
    id_user: string
    username: string
    nama: string
    email: string
    sandi: string
    gender: $Enums.gender_enum
    birth_date: Date | string
    foto?: Uint8Array | null
    bio?: string | null
    status_user: $Enums.status_user_enum
    created_at?: Date | string | null
    updated_at?: Date | string | null
    profession_user?: profession_userCreateNestedManyWithoutUsersInput
  }

  export type usersUncheckedCreateWithoutAlamatInput = {
    id_user: string
    username: string
    nama: string
    email: string
    sandi: string
    gender: $Enums.gender_enum
    birth_date: Date | string
    foto?: Uint8Array | null
    bio?: string | null
    status_user: $Enums.status_user_enum
    created_at?: Date | string | null
    updated_at?: Date | string | null
    profession_user?: profession_userUncheckedCreateNestedManyWithoutUsersInput
  }

  export type usersCreateOrConnectWithoutAlamatInput = {
    where: usersWhereUniqueInput
    create: XOR<usersCreateWithoutAlamatInput, usersUncheckedCreateWithoutAlamatInput>
  }

  export type kecamatanUpsertWithoutAlamatInput = {
    update: XOR<kecamatanUpdateWithoutAlamatInput, kecamatanUncheckedUpdateWithoutAlamatInput>
    create: XOR<kecamatanCreateWithoutAlamatInput, kecamatanUncheckedCreateWithoutAlamatInput>
    where?: kecamatanWhereInput
  }

  export type kecamatanUpdateToOneWithWhereWithoutAlamatInput = {
    where?: kecamatanWhereInput
    data: XOR<kecamatanUpdateWithoutAlamatInput, kecamatanUncheckedUpdateWithoutAlamatInput>
  }

  export type kecamatanUpdateWithoutAlamatInput = {
    id_kec?: BigIntFieldUpdateOperationsInput | bigint | number
    kecamatan?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    cities?: citiesUpdateOneWithoutKecamatanNestedInput
    kelurahan?: kelurahanUpdateManyWithoutKecamatanNestedInput
  }

  export type kecamatanUncheckedUpdateWithoutAlamatInput = {
    id_kec?: BigIntFieldUpdateOperationsInput | bigint | number
    kecamatan?: NullableStringFieldUpdateOperationsInput | string | null
    id_kota?: NullableIntFieldUpdateOperationsInput | number | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    kelurahan?: kelurahanUncheckedUpdateManyWithoutKecamatanNestedInput
  }

  export type kelurahanUpsertWithoutAlamatInput = {
    update: XOR<kelurahanUpdateWithoutAlamatInput, kelurahanUncheckedUpdateWithoutAlamatInput>
    create: XOR<kelurahanCreateWithoutAlamatInput, kelurahanUncheckedCreateWithoutAlamatInput>
    where?: kelurahanWhereInput
  }

  export type kelurahanUpdateToOneWithWhereWithoutAlamatInput = {
    where?: kelurahanWhereInput
    data: XOR<kelurahanUpdateWithoutAlamatInput, kelurahanUncheckedUpdateWithoutAlamatInput>
  }

  export type kelurahanUpdateWithoutAlamatInput = {
    id_kel?: BigIntFieldUpdateOperationsInput | bigint | number
    kelurahan?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    kecamatan?: kecamatanUpdateOneWithoutKelurahanNestedInput
  }

  export type kelurahanUncheckedUpdateWithoutAlamatInput = {
    id_kel?: BigIntFieldUpdateOperationsInput | bigint | number
    kelurahan?: NullableStringFieldUpdateOperationsInput | string | null
    id_kec?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type citiesUpsertWithoutAlamatInput = {
    update: XOR<citiesUpdateWithoutAlamatInput, citiesUncheckedUpdateWithoutAlamatInput>
    create: XOR<citiesCreateWithoutAlamatInput, citiesUncheckedCreateWithoutAlamatInput>
    where?: citiesWhereInput
  }

  export type citiesUpdateToOneWithWhereWithoutAlamatInput = {
    where?: citiesWhereInput
    data: XOR<citiesUpdateWithoutAlamatInput, citiesUncheckedUpdateWithoutAlamatInput>
  }

  export type citiesUpdateWithoutAlamatInput = {
    nama_kota?: StringFieldUpdateOperationsInput | string
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    provinces?: provincesUpdateOneRequiredWithoutCitiesNestedInput
    kecamatan?: kecamatanUpdateManyWithoutCitiesNestedInput
  }

  export type citiesUncheckedUpdateWithoutAlamatInput = {
    id_kota?: IntFieldUpdateOperationsInput | number
    nama_kota?: StringFieldUpdateOperationsInput | string
    id_prov?: IntFieldUpdateOperationsInput | number
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    kecamatan?: kecamatanUncheckedUpdateManyWithoutCitiesNestedInput
  }

  export type provincesUpsertWithoutAlamatInput = {
    update: XOR<provincesUpdateWithoutAlamatInput, provincesUncheckedUpdateWithoutAlamatInput>
    create: XOR<provincesCreateWithoutAlamatInput, provincesUncheckedCreateWithoutAlamatInput>
    where?: provincesWhereInput
  }

  export type provincesUpdateToOneWithWhereWithoutAlamatInput = {
    where?: provincesWhereInput
    data: XOR<provincesUpdateWithoutAlamatInput, provincesUncheckedUpdateWithoutAlamatInput>
  }

  export type provincesUpdateWithoutAlamatInput = {
    nama_prov?: StringFieldUpdateOperationsInput | string
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    cities?: citiesUpdateManyWithoutProvincesNestedInput
  }

  export type provincesUncheckedUpdateWithoutAlamatInput = {
    id_prov?: IntFieldUpdateOperationsInput | number
    nama_prov?: StringFieldUpdateOperationsInput | string
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    cities?: citiesUncheckedUpdateManyWithoutProvincesNestedInput
  }

  export type tipe_alamatUpsertWithoutAlamatInput = {
    update: XOR<tipe_alamatUpdateWithoutAlamatInput, tipe_alamatUncheckedUpdateWithoutAlamatInput>
    create: XOR<tipe_alamatCreateWithoutAlamatInput, tipe_alamatUncheckedCreateWithoutAlamatInput>
    where?: tipe_alamatWhereInput
  }

  export type tipe_alamatUpdateToOneWithWhereWithoutAlamatInput = {
    where?: tipe_alamatWhereInput
    data: XOR<tipe_alamatUpdateWithoutAlamatInput, tipe_alamatUncheckedUpdateWithoutAlamatInput>
  }

  export type tipe_alamatUpdateWithoutAlamatInput = {
    id_tipe?: BigIntFieldUpdateOperationsInput | bigint | number
    tipe_alamat?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type tipe_alamatUncheckedUpdateWithoutAlamatInput = {
    id_tipe?: BigIntFieldUpdateOperationsInput | bigint | number
    tipe_alamat?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type usersUpsertWithoutAlamatInput = {
    update: XOR<usersUpdateWithoutAlamatInput, usersUncheckedUpdateWithoutAlamatInput>
    create: XOR<usersCreateWithoutAlamatInput, usersUncheckedCreateWithoutAlamatInput>
    where?: usersWhereInput
  }

  export type usersUpdateToOneWithWhereWithoutAlamatInput = {
    where?: usersWhereInput
    data: XOR<usersUpdateWithoutAlamatInput, usersUncheckedUpdateWithoutAlamatInput>
  }

  export type usersUpdateWithoutAlamatInput = {
    id_user?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    nama?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    sandi?: StringFieldUpdateOperationsInput | string
    gender?: Enumgender_enumFieldUpdateOperationsInput | $Enums.gender_enum
    birth_date?: DateTimeFieldUpdateOperationsInput | Date | string
    foto?: NullableBytesFieldUpdateOperationsInput | Uint8Array | null
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    status_user?: Enumstatus_user_enumFieldUpdateOperationsInput | $Enums.status_user_enum
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    profession_user?: profession_userUpdateManyWithoutUsersNestedInput
  }

  export type usersUncheckedUpdateWithoutAlamatInput = {
    id_user?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    nama?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    sandi?: StringFieldUpdateOperationsInput | string
    gender?: Enumgender_enumFieldUpdateOperationsInput | $Enums.gender_enum
    birth_date?: DateTimeFieldUpdateOperationsInput | Date | string
    foto?: NullableBytesFieldUpdateOperationsInput | Uint8Array | null
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    status_user?: Enumstatus_user_enumFieldUpdateOperationsInput | $Enums.status_user_enum
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    profession_user?: profession_userUncheckedUpdateManyWithoutUsersNestedInput
  }

  export type alamatCreateWithoutKecamatanInput = {
    id_alamat: string
    alamat: string
    catatan?: string | null
    latitude: Decimal | DecimalJsLike | number | string
    longitude: Decimal | DecimalJsLike | number | string
    is_default: boolean
    created_at?: Date | string | null
    updated_at?: Date | string | null
    kelurahan: kelurahanCreateNestedOneWithoutAlamatInput
    cities: citiesCreateNestedOneWithoutAlamatInput
    provinces: provincesCreateNestedOneWithoutAlamatInput
    tipe_alamat?: tipe_alamatCreateNestedOneWithoutAlamatInput
    users: usersCreateNestedOneWithoutAlamatInput
  }

  export type alamatUncheckedCreateWithoutKecamatanInput = {
    id_alamat: string
    id_user: string
    alamat: string
    catatan?: string | null
    latitude: Decimal | DecimalJsLike | number | string
    longitude: Decimal | DecimalJsLike | number | string
    is_default: boolean
    id_tipe?: bigint | number | null
    id_kel: bigint | number
    id_kota: number
    id_prov: number
    created_at?: Date | string | null
    updated_at?: Date | string | null
  }

  export type alamatCreateOrConnectWithoutKecamatanInput = {
    where: alamatWhereUniqueInput
    create: XOR<alamatCreateWithoutKecamatanInput, alamatUncheckedCreateWithoutKecamatanInput>
  }

  export type alamatCreateManyKecamatanInputEnvelope = {
    data: alamatCreateManyKecamatanInput | alamatCreateManyKecamatanInput[]
    skipDuplicates?: boolean
  }

  export type citiesCreateWithoutKecamatanInput = {
    nama_kota: string
    created_at?: Date | string | null
    updated_at?: Date | string | null
    alamat?: alamatCreateNestedManyWithoutCitiesInput
    provinces: provincesCreateNestedOneWithoutCitiesInput
  }

  export type citiesUncheckedCreateWithoutKecamatanInput = {
    id_kota?: number
    nama_kota: string
    id_prov: number
    created_at?: Date | string | null
    updated_at?: Date | string | null
    alamat?: alamatUncheckedCreateNestedManyWithoutCitiesInput
  }

  export type citiesCreateOrConnectWithoutKecamatanInput = {
    where: citiesWhereUniqueInput
    create: XOR<citiesCreateWithoutKecamatanInput, citiesUncheckedCreateWithoutKecamatanInput>
  }

  export type kelurahanCreateWithoutKecamatanInput = {
    id_kel?: bigint | number
    kelurahan?: string | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
    alamat?: alamatCreateNestedManyWithoutKelurahanInput
  }

  export type kelurahanUncheckedCreateWithoutKecamatanInput = {
    id_kel?: bigint | number
    kelurahan?: string | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
    alamat?: alamatUncheckedCreateNestedManyWithoutKelurahanInput
  }

  export type kelurahanCreateOrConnectWithoutKecamatanInput = {
    where: kelurahanWhereUniqueInput
    create: XOR<kelurahanCreateWithoutKecamatanInput, kelurahanUncheckedCreateWithoutKecamatanInput>
  }

  export type kelurahanCreateManyKecamatanInputEnvelope = {
    data: kelurahanCreateManyKecamatanInput | kelurahanCreateManyKecamatanInput[]
    skipDuplicates?: boolean
  }

  export type alamatUpsertWithWhereUniqueWithoutKecamatanInput = {
    where: alamatWhereUniqueInput
    update: XOR<alamatUpdateWithoutKecamatanInput, alamatUncheckedUpdateWithoutKecamatanInput>
    create: XOR<alamatCreateWithoutKecamatanInput, alamatUncheckedCreateWithoutKecamatanInput>
  }

  export type alamatUpdateWithWhereUniqueWithoutKecamatanInput = {
    where: alamatWhereUniqueInput
    data: XOR<alamatUpdateWithoutKecamatanInput, alamatUncheckedUpdateWithoutKecamatanInput>
  }

  export type alamatUpdateManyWithWhereWithoutKecamatanInput = {
    where: alamatScalarWhereInput
    data: XOR<alamatUpdateManyMutationInput, alamatUncheckedUpdateManyWithoutKecamatanInput>
  }

  export type citiesUpsertWithoutKecamatanInput = {
    update: XOR<citiesUpdateWithoutKecamatanInput, citiesUncheckedUpdateWithoutKecamatanInput>
    create: XOR<citiesCreateWithoutKecamatanInput, citiesUncheckedCreateWithoutKecamatanInput>
    where?: citiesWhereInput
  }

  export type citiesUpdateToOneWithWhereWithoutKecamatanInput = {
    where?: citiesWhereInput
    data: XOR<citiesUpdateWithoutKecamatanInput, citiesUncheckedUpdateWithoutKecamatanInput>
  }

  export type citiesUpdateWithoutKecamatanInput = {
    nama_kota?: StringFieldUpdateOperationsInput | string
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    alamat?: alamatUpdateManyWithoutCitiesNestedInput
    provinces?: provincesUpdateOneRequiredWithoutCitiesNestedInput
  }

  export type citiesUncheckedUpdateWithoutKecamatanInput = {
    id_kota?: IntFieldUpdateOperationsInput | number
    nama_kota?: StringFieldUpdateOperationsInput | string
    id_prov?: IntFieldUpdateOperationsInput | number
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    alamat?: alamatUncheckedUpdateManyWithoutCitiesNestedInput
  }

  export type kelurahanUpsertWithWhereUniqueWithoutKecamatanInput = {
    where: kelurahanWhereUniqueInput
    update: XOR<kelurahanUpdateWithoutKecamatanInput, kelurahanUncheckedUpdateWithoutKecamatanInput>
    create: XOR<kelurahanCreateWithoutKecamatanInput, kelurahanUncheckedCreateWithoutKecamatanInput>
  }

  export type kelurahanUpdateWithWhereUniqueWithoutKecamatanInput = {
    where: kelurahanWhereUniqueInput
    data: XOR<kelurahanUpdateWithoutKecamatanInput, kelurahanUncheckedUpdateWithoutKecamatanInput>
  }

  export type kelurahanUpdateManyWithWhereWithoutKecamatanInput = {
    where: kelurahanScalarWhereInput
    data: XOR<kelurahanUpdateManyMutationInput, kelurahanUncheckedUpdateManyWithoutKecamatanInput>
  }

  export type kelurahanScalarWhereInput = {
    AND?: kelurahanScalarWhereInput | kelurahanScalarWhereInput[]
    OR?: kelurahanScalarWhereInput[]
    NOT?: kelurahanScalarWhereInput | kelurahanScalarWhereInput[]
    id_kel?: BigIntFilter<"kelurahan"> | bigint | number
    kelurahan?: StringNullableFilter<"kelurahan"> | string | null
    id_kec?: BigIntNullableFilter<"kelurahan"> | bigint | number | null
    created_at?: DateTimeNullableFilter<"kelurahan"> | Date | string | null
    updated_at?: DateTimeNullableFilter<"kelurahan"> | Date | string | null
  }

  export type alamatCreateWithoutKelurahanInput = {
    id_alamat: string
    alamat: string
    catatan?: string | null
    latitude: Decimal | DecimalJsLike | number | string
    longitude: Decimal | DecimalJsLike | number | string
    is_default: boolean
    created_at?: Date | string | null
    updated_at?: Date | string | null
    kecamatan: kecamatanCreateNestedOneWithoutAlamatInput
    cities: citiesCreateNestedOneWithoutAlamatInput
    provinces: provincesCreateNestedOneWithoutAlamatInput
    tipe_alamat?: tipe_alamatCreateNestedOneWithoutAlamatInput
    users: usersCreateNestedOneWithoutAlamatInput
  }

  export type alamatUncheckedCreateWithoutKelurahanInput = {
    id_alamat: string
    id_user: string
    alamat: string
    catatan?: string | null
    latitude: Decimal | DecimalJsLike | number | string
    longitude: Decimal | DecimalJsLike | number | string
    is_default: boolean
    id_tipe?: bigint | number | null
    id_kec: bigint | number
    id_kota: number
    id_prov: number
    created_at?: Date | string | null
    updated_at?: Date | string | null
  }

  export type alamatCreateOrConnectWithoutKelurahanInput = {
    where: alamatWhereUniqueInput
    create: XOR<alamatCreateWithoutKelurahanInput, alamatUncheckedCreateWithoutKelurahanInput>
  }

  export type alamatCreateManyKelurahanInputEnvelope = {
    data: alamatCreateManyKelurahanInput | alamatCreateManyKelurahanInput[]
    skipDuplicates?: boolean
  }

  export type kecamatanCreateWithoutKelurahanInput = {
    id_kec?: bigint | number
    kecamatan?: string | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
    alamat?: alamatCreateNestedManyWithoutKecamatanInput
    cities?: citiesCreateNestedOneWithoutKecamatanInput
  }

  export type kecamatanUncheckedCreateWithoutKelurahanInput = {
    id_kec?: bigint | number
    kecamatan?: string | null
    id_kota?: number | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
    alamat?: alamatUncheckedCreateNestedManyWithoutKecamatanInput
  }

  export type kecamatanCreateOrConnectWithoutKelurahanInput = {
    where: kecamatanWhereUniqueInput
    create: XOR<kecamatanCreateWithoutKelurahanInput, kecamatanUncheckedCreateWithoutKelurahanInput>
  }

  export type alamatUpsertWithWhereUniqueWithoutKelurahanInput = {
    where: alamatWhereUniqueInput
    update: XOR<alamatUpdateWithoutKelurahanInput, alamatUncheckedUpdateWithoutKelurahanInput>
    create: XOR<alamatCreateWithoutKelurahanInput, alamatUncheckedCreateWithoutKelurahanInput>
  }

  export type alamatUpdateWithWhereUniqueWithoutKelurahanInput = {
    where: alamatWhereUniqueInput
    data: XOR<alamatUpdateWithoutKelurahanInput, alamatUncheckedUpdateWithoutKelurahanInput>
  }

  export type alamatUpdateManyWithWhereWithoutKelurahanInput = {
    where: alamatScalarWhereInput
    data: XOR<alamatUpdateManyMutationInput, alamatUncheckedUpdateManyWithoutKelurahanInput>
  }

  export type kecamatanUpsertWithoutKelurahanInput = {
    update: XOR<kecamatanUpdateWithoutKelurahanInput, kecamatanUncheckedUpdateWithoutKelurahanInput>
    create: XOR<kecamatanCreateWithoutKelurahanInput, kecamatanUncheckedCreateWithoutKelurahanInput>
    where?: kecamatanWhereInput
  }

  export type kecamatanUpdateToOneWithWhereWithoutKelurahanInput = {
    where?: kecamatanWhereInput
    data: XOR<kecamatanUpdateWithoutKelurahanInput, kecamatanUncheckedUpdateWithoutKelurahanInput>
  }

  export type kecamatanUpdateWithoutKelurahanInput = {
    id_kec?: BigIntFieldUpdateOperationsInput | bigint | number
    kecamatan?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    alamat?: alamatUpdateManyWithoutKecamatanNestedInput
    cities?: citiesUpdateOneWithoutKecamatanNestedInput
  }

  export type kecamatanUncheckedUpdateWithoutKelurahanInput = {
    id_kec?: BigIntFieldUpdateOperationsInput | bigint | number
    kecamatan?: NullableStringFieldUpdateOperationsInput | string | null
    id_kota?: NullableIntFieldUpdateOperationsInput | number | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    alamat?: alamatUncheckedUpdateManyWithoutKecamatanNestedInput
  }

  export type alamatCreateWithoutTipe_alamatInput = {
    id_alamat: string
    alamat: string
    catatan?: string | null
    latitude: Decimal | DecimalJsLike | number | string
    longitude: Decimal | DecimalJsLike | number | string
    is_default: boolean
    created_at?: Date | string | null
    updated_at?: Date | string | null
    kecamatan: kecamatanCreateNestedOneWithoutAlamatInput
    kelurahan: kelurahanCreateNestedOneWithoutAlamatInput
    cities: citiesCreateNestedOneWithoutAlamatInput
    provinces: provincesCreateNestedOneWithoutAlamatInput
    users: usersCreateNestedOneWithoutAlamatInput
  }

  export type alamatUncheckedCreateWithoutTipe_alamatInput = {
    id_alamat: string
    id_user: string
    alamat: string
    catatan?: string | null
    latitude: Decimal | DecimalJsLike | number | string
    longitude: Decimal | DecimalJsLike | number | string
    is_default: boolean
    id_kel: bigint | number
    id_kec: bigint | number
    id_kota: number
    id_prov: number
    created_at?: Date | string | null
    updated_at?: Date | string | null
  }

  export type alamatCreateOrConnectWithoutTipe_alamatInput = {
    where: alamatWhereUniqueInput
    create: XOR<alamatCreateWithoutTipe_alamatInput, alamatUncheckedCreateWithoutTipe_alamatInput>
  }

  export type alamatCreateManyTipe_alamatInputEnvelope = {
    data: alamatCreateManyTipe_alamatInput | alamatCreateManyTipe_alamatInput[]
    skipDuplicates?: boolean
  }

  export type alamatUpsertWithWhereUniqueWithoutTipe_alamatInput = {
    where: alamatWhereUniqueInput
    update: XOR<alamatUpdateWithoutTipe_alamatInput, alamatUncheckedUpdateWithoutTipe_alamatInput>
    create: XOR<alamatCreateWithoutTipe_alamatInput, alamatUncheckedCreateWithoutTipe_alamatInput>
  }

  export type alamatUpdateWithWhereUniqueWithoutTipe_alamatInput = {
    where: alamatWhereUniqueInput
    data: XOR<alamatUpdateWithoutTipe_alamatInput, alamatUncheckedUpdateWithoutTipe_alamatInput>
  }

  export type alamatUpdateManyWithWhereWithoutTipe_alamatInput = {
    where: alamatScalarWhereInput
    data: XOR<alamatUpdateManyMutationInput, alamatUncheckedUpdateManyWithoutTipe_alamatInput>
  }

  export type alamatCreateManyCitiesInput = {
    id_alamat: string
    id_user: string
    alamat: string
    catatan?: string | null
    latitude: Decimal | DecimalJsLike | number | string
    longitude: Decimal | DecimalJsLike | number | string
    is_default: boolean
    id_tipe?: bigint | number | null
    id_kel: bigint | number
    id_kec: bigint | number
    id_prov: number
    created_at?: Date | string | null
    updated_at?: Date | string | null
  }

  export type kecamatanCreateManyCitiesInput = {
    id_kec?: bigint | number
    kecamatan?: string | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
  }

  export type alamatUpdateWithoutCitiesInput = {
    id_alamat?: StringFieldUpdateOperationsInput | string
    alamat?: StringFieldUpdateOperationsInput | string
    catatan?: NullableStringFieldUpdateOperationsInput | string | null
    latitude?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    longitude?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    is_default?: BoolFieldUpdateOperationsInput | boolean
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    kecamatan?: kecamatanUpdateOneRequiredWithoutAlamatNestedInput
    kelurahan?: kelurahanUpdateOneRequiredWithoutAlamatNestedInput
    provinces?: provincesUpdateOneRequiredWithoutAlamatNestedInput
    tipe_alamat?: tipe_alamatUpdateOneWithoutAlamatNestedInput
    users?: usersUpdateOneRequiredWithoutAlamatNestedInput
  }

  export type alamatUncheckedUpdateWithoutCitiesInput = {
    id_alamat?: StringFieldUpdateOperationsInput | string
    id_user?: StringFieldUpdateOperationsInput | string
    alamat?: StringFieldUpdateOperationsInput | string
    catatan?: NullableStringFieldUpdateOperationsInput | string | null
    latitude?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    longitude?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    is_default?: BoolFieldUpdateOperationsInput | boolean
    id_tipe?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    id_kel?: BigIntFieldUpdateOperationsInput | bigint | number
    id_kec?: BigIntFieldUpdateOperationsInput | bigint | number
    id_prov?: IntFieldUpdateOperationsInput | number
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type alamatUncheckedUpdateManyWithoutCitiesInput = {
    id_alamat?: StringFieldUpdateOperationsInput | string
    id_user?: StringFieldUpdateOperationsInput | string
    alamat?: StringFieldUpdateOperationsInput | string
    catatan?: NullableStringFieldUpdateOperationsInput | string | null
    latitude?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    longitude?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    is_default?: BoolFieldUpdateOperationsInput | boolean
    id_tipe?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    id_kel?: BigIntFieldUpdateOperationsInput | bigint | number
    id_kec?: BigIntFieldUpdateOperationsInput | bigint | number
    id_prov?: IntFieldUpdateOperationsInput | number
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type kecamatanUpdateWithoutCitiesInput = {
    id_kec?: BigIntFieldUpdateOperationsInput | bigint | number
    kecamatan?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    alamat?: alamatUpdateManyWithoutKecamatanNestedInput
    kelurahan?: kelurahanUpdateManyWithoutKecamatanNestedInput
  }

  export type kecamatanUncheckedUpdateWithoutCitiesInput = {
    id_kec?: BigIntFieldUpdateOperationsInput | bigint | number
    kecamatan?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    alamat?: alamatUncheckedUpdateManyWithoutKecamatanNestedInput
    kelurahan?: kelurahanUncheckedUpdateManyWithoutKecamatanNestedInput
  }

  export type kecamatanUncheckedUpdateManyWithoutCitiesInput = {
    id_kec?: BigIntFieldUpdateOperationsInput | bigint | number
    kecamatan?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type profession_detailCreateManyProfessionInput = {
    id_prof_cat: bigint | number
  }

  export type profession_userCreateManyProfessionInput = {
    id_user: string
  }

  export type profession_detailUpdateWithoutProfessionInput = {
    profession_category?: profession_categoryUpdateOneRequiredWithoutProfession_detailNestedInput
  }

  export type profession_detailUncheckedUpdateWithoutProfessionInput = {
    id_prof_cat?: BigIntFieldUpdateOperationsInput | bigint | number
  }

  export type profession_detailUncheckedUpdateManyWithoutProfessionInput = {
    id_prof_cat?: BigIntFieldUpdateOperationsInput | bigint | number
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

  export type alamatCreateManyProvincesInput = {
    id_alamat: string
    id_user: string
    alamat: string
    catatan?: string | null
    latitude: Decimal | DecimalJsLike | number | string
    longitude: Decimal | DecimalJsLike | number | string
    is_default: boolean
    id_tipe?: bigint | number | null
    id_kel: bigint | number
    id_kec: bigint | number
    id_kota: number
    created_at?: Date | string | null
    updated_at?: Date | string | null
  }

  export type citiesCreateManyProvincesInput = {
    id_kota?: number
    nama_kota: string
    created_at?: Date | string | null
    updated_at?: Date | string | null
  }

  export type alamatUpdateWithoutProvincesInput = {
    id_alamat?: StringFieldUpdateOperationsInput | string
    alamat?: StringFieldUpdateOperationsInput | string
    catatan?: NullableStringFieldUpdateOperationsInput | string | null
    latitude?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    longitude?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    is_default?: BoolFieldUpdateOperationsInput | boolean
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    kecamatan?: kecamatanUpdateOneRequiredWithoutAlamatNestedInput
    kelurahan?: kelurahanUpdateOneRequiredWithoutAlamatNestedInput
    cities?: citiesUpdateOneRequiredWithoutAlamatNestedInput
    tipe_alamat?: tipe_alamatUpdateOneWithoutAlamatNestedInput
    users?: usersUpdateOneRequiredWithoutAlamatNestedInput
  }

  export type alamatUncheckedUpdateWithoutProvincesInput = {
    id_alamat?: StringFieldUpdateOperationsInput | string
    id_user?: StringFieldUpdateOperationsInput | string
    alamat?: StringFieldUpdateOperationsInput | string
    catatan?: NullableStringFieldUpdateOperationsInput | string | null
    latitude?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    longitude?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    is_default?: BoolFieldUpdateOperationsInput | boolean
    id_tipe?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    id_kel?: BigIntFieldUpdateOperationsInput | bigint | number
    id_kec?: BigIntFieldUpdateOperationsInput | bigint | number
    id_kota?: IntFieldUpdateOperationsInput | number
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type alamatUncheckedUpdateManyWithoutProvincesInput = {
    id_alamat?: StringFieldUpdateOperationsInput | string
    id_user?: StringFieldUpdateOperationsInput | string
    alamat?: StringFieldUpdateOperationsInput | string
    catatan?: NullableStringFieldUpdateOperationsInput | string | null
    latitude?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    longitude?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    is_default?: BoolFieldUpdateOperationsInput | boolean
    id_tipe?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    id_kel?: BigIntFieldUpdateOperationsInput | bigint | number
    id_kec?: BigIntFieldUpdateOperationsInput | bigint | number
    id_kota?: IntFieldUpdateOperationsInput | number
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type citiesUpdateWithoutProvincesInput = {
    nama_kota?: StringFieldUpdateOperationsInput | string
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    alamat?: alamatUpdateManyWithoutCitiesNestedInput
    kecamatan?: kecamatanUpdateManyWithoutCitiesNestedInput
  }

  export type citiesUncheckedUpdateWithoutProvincesInput = {
    id_kota?: IntFieldUpdateOperationsInput | number
    nama_kota?: StringFieldUpdateOperationsInput | string
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    alamat?: alamatUncheckedUpdateManyWithoutCitiesNestedInput
    kecamatan?: kecamatanUncheckedUpdateManyWithoutCitiesNestedInput
  }

  export type citiesUncheckedUpdateManyWithoutProvincesInput = {
    id_kota?: IntFieldUpdateOperationsInput | number
    nama_kota?: StringFieldUpdateOperationsInput | string
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type alamatCreateManyUsersInput = {
    id_alamat: string
    alamat: string
    catatan?: string | null
    latitude: Decimal | DecimalJsLike | number | string
    longitude: Decimal | DecimalJsLike | number | string
    is_default: boolean
    id_tipe?: bigint | number | null
    id_kel: bigint | number
    id_kec: bigint | number
    id_kota: number
    id_prov: number
    created_at?: Date | string | null
    updated_at?: Date | string | null
  }

  export type profession_userCreateManyUsersInput = {
    id_profesi: bigint | number
  }

  export type alamatUpdateWithoutUsersInput = {
    id_alamat?: StringFieldUpdateOperationsInput | string
    alamat?: StringFieldUpdateOperationsInput | string
    catatan?: NullableStringFieldUpdateOperationsInput | string | null
    latitude?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    longitude?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    is_default?: BoolFieldUpdateOperationsInput | boolean
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    kecamatan?: kecamatanUpdateOneRequiredWithoutAlamatNestedInput
    kelurahan?: kelurahanUpdateOneRequiredWithoutAlamatNestedInput
    cities?: citiesUpdateOneRequiredWithoutAlamatNestedInput
    provinces?: provincesUpdateOneRequiredWithoutAlamatNestedInput
    tipe_alamat?: tipe_alamatUpdateOneWithoutAlamatNestedInput
  }

  export type alamatUncheckedUpdateWithoutUsersInput = {
    id_alamat?: StringFieldUpdateOperationsInput | string
    alamat?: StringFieldUpdateOperationsInput | string
    catatan?: NullableStringFieldUpdateOperationsInput | string | null
    latitude?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    longitude?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    is_default?: BoolFieldUpdateOperationsInput | boolean
    id_tipe?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    id_kel?: BigIntFieldUpdateOperationsInput | bigint | number
    id_kec?: BigIntFieldUpdateOperationsInput | bigint | number
    id_kota?: IntFieldUpdateOperationsInput | number
    id_prov?: IntFieldUpdateOperationsInput | number
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type alamatUncheckedUpdateManyWithoutUsersInput = {
    id_alamat?: StringFieldUpdateOperationsInput | string
    alamat?: StringFieldUpdateOperationsInput | string
    catatan?: NullableStringFieldUpdateOperationsInput | string | null
    latitude?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    longitude?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    is_default?: BoolFieldUpdateOperationsInput | boolean
    id_tipe?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    id_kel?: BigIntFieldUpdateOperationsInput | bigint | number
    id_kec?: BigIntFieldUpdateOperationsInput | bigint | number
    id_kota?: IntFieldUpdateOperationsInput | number
    id_prov?: IntFieldUpdateOperationsInput | number
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
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

  export type profession_detailCreateManyProfession_categoryInput = {
    id_profesi: bigint | number
  }

  export type profession_detailUpdateWithoutProfession_categoryInput = {
    profession?: professionUpdateOneRequiredWithoutProfession_detailNestedInput
  }

  export type profession_detailUncheckedUpdateWithoutProfession_categoryInput = {
    id_profesi?: BigIntFieldUpdateOperationsInput | bigint | number
  }

  export type profession_detailUncheckedUpdateManyWithoutProfession_categoryInput = {
    id_profesi?: BigIntFieldUpdateOperationsInput | bigint | number
  }

  export type alamatCreateManyKecamatanInput = {
    id_alamat: string
    id_user: string
    alamat: string
    catatan?: string | null
    latitude: Decimal | DecimalJsLike | number | string
    longitude: Decimal | DecimalJsLike | number | string
    is_default: boolean
    id_tipe?: bigint | number | null
    id_kel: bigint | number
    id_kota: number
    id_prov: number
    created_at?: Date | string | null
    updated_at?: Date | string | null
  }

  export type kelurahanCreateManyKecamatanInput = {
    id_kel?: bigint | number
    kelurahan?: string | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
  }

  export type alamatUpdateWithoutKecamatanInput = {
    id_alamat?: StringFieldUpdateOperationsInput | string
    alamat?: StringFieldUpdateOperationsInput | string
    catatan?: NullableStringFieldUpdateOperationsInput | string | null
    latitude?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    longitude?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    is_default?: BoolFieldUpdateOperationsInput | boolean
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    kelurahan?: kelurahanUpdateOneRequiredWithoutAlamatNestedInput
    cities?: citiesUpdateOneRequiredWithoutAlamatNestedInput
    provinces?: provincesUpdateOneRequiredWithoutAlamatNestedInput
    tipe_alamat?: tipe_alamatUpdateOneWithoutAlamatNestedInput
    users?: usersUpdateOneRequiredWithoutAlamatNestedInput
  }

  export type alamatUncheckedUpdateWithoutKecamatanInput = {
    id_alamat?: StringFieldUpdateOperationsInput | string
    id_user?: StringFieldUpdateOperationsInput | string
    alamat?: StringFieldUpdateOperationsInput | string
    catatan?: NullableStringFieldUpdateOperationsInput | string | null
    latitude?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    longitude?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    is_default?: BoolFieldUpdateOperationsInput | boolean
    id_tipe?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    id_kel?: BigIntFieldUpdateOperationsInput | bigint | number
    id_kota?: IntFieldUpdateOperationsInput | number
    id_prov?: IntFieldUpdateOperationsInput | number
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type alamatUncheckedUpdateManyWithoutKecamatanInput = {
    id_alamat?: StringFieldUpdateOperationsInput | string
    id_user?: StringFieldUpdateOperationsInput | string
    alamat?: StringFieldUpdateOperationsInput | string
    catatan?: NullableStringFieldUpdateOperationsInput | string | null
    latitude?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    longitude?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    is_default?: BoolFieldUpdateOperationsInput | boolean
    id_tipe?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    id_kel?: BigIntFieldUpdateOperationsInput | bigint | number
    id_kota?: IntFieldUpdateOperationsInput | number
    id_prov?: IntFieldUpdateOperationsInput | number
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type kelurahanUpdateWithoutKecamatanInput = {
    id_kel?: BigIntFieldUpdateOperationsInput | bigint | number
    kelurahan?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    alamat?: alamatUpdateManyWithoutKelurahanNestedInput
  }

  export type kelurahanUncheckedUpdateWithoutKecamatanInput = {
    id_kel?: BigIntFieldUpdateOperationsInput | bigint | number
    kelurahan?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    alamat?: alamatUncheckedUpdateManyWithoutKelurahanNestedInput
  }

  export type kelurahanUncheckedUpdateManyWithoutKecamatanInput = {
    id_kel?: BigIntFieldUpdateOperationsInput | bigint | number
    kelurahan?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type alamatCreateManyKelurahanInput = {
    id_alamat: string
    id_user: string
    alamat: string
    catatan?: string | null
    latitude: Decimal | DecimalJsLike | number | string
    longitude: Decimal | DecimalJsLike | number | string
    is_default: boolean
    id_tipe?: bigint | number | null
    id_kec: bigint | number
    id_kota: number
    id_prov: number
    created_at?: Date | string | null
    updated_at?: Date | string | null
  }

  export type alamatUpdateWithoutKelurahanInput = {
    id_alamat?: StringFieldUpdateOperationsInput | string
    alamat?: StringFieldUpdateOperationsInput | string
    catatan?: NullableStringFieldUpdateOperationsInput | string | null
    latitude?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    longitude?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    is_default?: BoolFieldUpdateOperationsInput | boolean
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    kecamatan?: kecamatanUpdateOneRequiredWithoutAlamatNestedInput
    cities?: citiesUpdateOneRequiredWithoutAlamatNestedInput
    provinces?: provincesUpdateOneRequiredWithoutAlamatNestedInput
    tipe_alamat?: tipe_alamatUpdateOneWithoutAlamatNestedInput
    users?: usersUpdateOneRequiredWithoutAlamatNestedInput
  }

  export type alamatUncheckedUpdateWithoutKelurahanInput = {
    id_alamat?: StringFieldUpdateOperationsInput | string
    id_user?: StringFieldUpdateOperationsInput | string
    alamat?: StringFieldUpdateOperationsInput | string
    catatan?: NullableStringFieldUpdateOperationsInput | string | null
    latitude?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    longitude?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    is_default?: BoolFieldUpdateOperationsInput | boolean
    id_tipe?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    id_kec?: BigIntFieldUpdateOperationsInput | bigint | number
    id_kota?: IntFieldUpdateOperationsInput | number
    id_prov?: IntFieldUpdateOperationsInput | number
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type alamatUncheckedUpdateManyWithoutKelurahanInput = {
    id_alamat?: StringFieldUpdateOperationsInput | string
    id_user?: StringFieldUpdateOperationsInput | string
    alamat?: StringFieldUpdateOperationsInput | string
    catatan?: NullableStringFieldUpdateOperationsInput | string | null
    latitude?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    longitude?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    is_default?: BoolFieldUpdateOperationsInput | boolean
    id_tipe?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    id_kec?: BigIntFieldUpdateOperationsInput | bigint | number
    id_kota?: IntFieldUpdateOperationsInput | number
    id_prov?: IntFieldUpdateOperationsInput | number
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type alamatCreateManyTipe_alamatInput = {
    id_alamat: string
    id_user: string
    alamat: string
    catatan?: string | null
    latitude: Decimal | DecimalJsLike | number | string
    longitude: Decimal | DecimalJsLike | number | string
    is_default: boolean
    id_kel: bigint | number
    id_kec: bigint | number
    id_kota: number
    id_prov: number
    created_at?: Date | string | null
    updated_at?: Date | string | null
  }

  export type alamatUpdateWithoutTipe_alamatInput = {
    id_alamat?: StringFieldUpdateOperationsInput | string
    alamat?: StringFieldUpdateOperationsInput | string
    catatan?: NullableStringFieldUpdateOperationsInput | string | null
    latitude?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    longitude?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    is_default?: BoolFieldUpdateOperationsInput | boolean
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    kecamatan?: kecamatanUpdateOneRequiredWithoutAlamatNestedInput
    kelurahan?: kelurahanUpdateOneRequiredWithoutAlamatNestedInput
    cities?: citiesUpdateOneRequiredWithoutAlamatNestedInput
    provinces?: provincesUpdateOneRequiredWithoutAlamatNestedInput
    users?: usersUpdateOneRequiredWithoutAlamatNestedInput
  }

  export type alamatUncheckedUpdateWithoutTipe_alamatInput = {
    id_alamat?: StringFieldUpdateOperationsInput | string
    id_user?: StringFieldUpdateOperationsInput | string
    alamat?: StringFieldUpdateOperationsInput | string
    catatan?: NullableStringFieldUpdateOperationsInput | string | null
    latitude?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    longitude?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    is_default?: BoolFieldUpdateOperationsInput | boolean
    id_kel?: BigIntFieldUpdateOperationsInput | bigint | number
    id_kec?: BigIntFieldUpdateOperationsInput | bigint | number
    id_kota?: IntFieldUpdateOperationsInput | number
    id_prov?: IntFieldUpdateOperationsInput | number
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type alamatUncheckedUpdateManyWithoutTipe_alamatInput = {
    id_alamat?: StringFieldUpdateOperationsInput | string
    id_user?: StringFieldUpdateOperationsInput | string
    alamat?: StringFieldUpdateOperationsInput | string
    catatan?: NullableStringFieldUpdateOperationsInput | string | null
    latitude?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    longitude?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    is_default?: BoolFieldUpdateOperationsInput | boolean
    id_kel?: BigIntFieldUpdateOperationsInput | bigint | number
    id_kec?: BigIntFieldUpdateOperationsInput | bigint | number
    id_kota?: IntFieldUpdateOperationsInput | number
    id_prov?: IntFieldUpdateOperationsInput | number
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