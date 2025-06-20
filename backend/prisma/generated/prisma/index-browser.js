
/* !!! This is code generated by Prisma. Do not edit directly. !!!
/* eslint-disable */

Object.defineProperty(exports, "__esModule", { value: true });

const {
  Decimal,
  objectEnumValues,
  makeStrictEnum,
  Public,
  getRuntime,
  skip
} = require('./runtime/index-browser.js')


const Prisma = {}

exports.Prisma = Prisma
exports.$Enums = {}

/**
 * Prisma Client JS version: 6.9.0
 * Query Engine version: 81e4af48011447c3cc503a190e86995b66d2a28e
 */
Prisma.prismaVersion = {
  client: "6.9.0",
  engine: "81e4af48011447c3cc503a190e86995b66d2a28e"
}

Prisma.PrismaClientKnownRequestError = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`PrismaClientKnownRequestError is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)};
Prisma.PrismaClientUnknownRequestError = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`PrismaClientUnknownRequestError is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.PrismaClientRustPanicError = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`PrismaClientRustPanicError is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.PrismaClientInitializationError = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`PrismaClientInitializationError is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.PrismaClientValidationError = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`PrismaClientValidationError is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.Decimal = Decimal

/**
 * Re-export of sql-template-tag
 */
Prisma.sql = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`sqltag is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.empty = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`empty is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.join = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`join is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.raw = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`raw is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.validator = Public.validator

/**
* Extensions
*/
Prisma.getExtensionContext = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`Extensions.getExtensionContext is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.defineExtension = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`Extensions.defineExtension is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}

/**
 * Shorthand utilities for JSON filtering
 */
Prisma.DbNull = objectEnumValues.instances.DbNull
Prisma.JsonNull = objectEnumValues.instances.JsonNull
Prisma.AnyNull = objectEnumValues.instances.AnyNull

Prisma.NullTypes = {
  DbNull: objectEnumValues.classes.DbNull,
  JsonNull: objectEnumValues.classes.JsonNull,
  AnyNull: objectEnumValues.classes.AnyNull
}



/**
 * Enums
 */

exports.Prisma.TransactionIsolationLevel = makeStrictEnum({
  ReadUncommitted: 'ReadUncommitted',
  ReadCommitted: 'ReadCommitted',
  RepeatableRead: 'RepeatableRead',
  Serializable: 'Serializable'
});

exports.Prisma.CitiesScalarFieldEnum = {
  id_kota: 'id_kota',
  nama_kota: 'nama_kota',
  id_prov: 'id_prov',
  created_at: 'created_at',
  updated_at: 'updated_at'
};

exports.Prisma.ProfessionScalarFieldEnum = {
  id_profesi: 'id_profesi',
  profession: 'profession',
  created_at: 'created_at',
  updated_at: 'updated_at'
};

exports.Prisma.Profession_userScalarFieldEnum = {
  id_user: 'id_user',
  id_profesi: 'id_profesi'
};

exports.Prisma.ProvincesScalarFieldEnum = {
  id_prov: 'id_prov',
  nama_prov: 'nama_prov',
  created_at: 'created_at',
  updated_at: 'updated_at'
};

exports.Prisma.UsersScalarFieldEnum = {
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

exports.Prisma.Profession_categoryScalarFieldEnum = {
  id_prof_cat: 'id_prof_cat',
  profession_category: 'profession_category',
  created_at: 'created_at',
  updated_at: 'updated_at'
};

exports.Prisma.Profession_detailScalarFieldEnum = {
  id_profesi: 'id_profesi',
  id_prof_cat: 'id_prof_cat'
};

exports.Prisma.AlamatScalarFieldEnum = {
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

exports.Prisma.KecamatanScalarFieldEnum = {
  id_kec: 'id_kec',
  kecamatan: 'kecamatan',
  id_kota: 'id_kota',
  created_at: 'created_at',
  updated_at: 'updated_at'
};

exports.Prisma.KelurahanScalarFieldEnum = {
  id_kel: 'id_kel',
  kelurahan: 'kelurahan',
  id_kec: 'id_kec',
  created_at: 'created_at',
  updated_at: 'updated_at'
};

exports.Prisma.Tipe_alamatScalarFieldEnum = {
  id_tipe: 'id_tipe',
  tipe_alamat: 'tipe_alamat',
  created_at: 'created_at',
  updated_at: 'updated_at'
};

exports.Prisma.SortOrder = {
  asc: 'asc',
  desc: 'desc'
};

exports.Prisma.QueryMode = {
  default: 'default',
  insensitive: 'insensitive'
};

exports.Prisma.NullsOrder = {
  first: 'first',
  last: 'last'
};
exports.gender_enum = exports.$Enums.gender_enum = {
  Laki_laki: 'Laki_laki',
  Perempuan: 'Perempuan',
  Lainnya: 'Lainnya'
};

exports.status_user_enum = exports.$Enums.status_user_enum = {
  Active: 'Active',
  Deactive: 'Deactive',
  Suspend: 'Suspend'
};

exports.Prisma.ModelName = {
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

/**
 * This is a stub Prisma Client that will error at runtime if called.
 */
class PrismaClient {
  constructor() {
    return new Proxy(this, {
      get(target, prop) {
        let message
        const runtime = getRuntime()
        if (runtime.isEdge) {
          message = `PrismaClient is not configured to run in ${runtime.prettyName}. In order to run Prisma Client on edge runtime, either:
- Use Prisma Accelerate: https://pris.ly/d/accelerate
- Use Driver Adapters: https://pris.ly/d/driver-adapters
`;
        } else {
          message = 'PrismaClient is unable to run in this browser environment, or has been bundled for the browser (running in `' + runtime.prettyName + '`).'
        }

        message += `
If this is unexpected, please open an issue: https://pris.ly/prisma-prisma-bug-report`

        throw new Error(message)
      }
    })
  }
}

exports.PrismaClient = PrismaClient

Object.assign(exports, Prisma)
