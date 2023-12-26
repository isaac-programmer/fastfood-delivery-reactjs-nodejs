"use strict";
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);
var __decorateClass = (decorators, target, key, kind) => {
  var result = kind > 1 ? void 0 : kind ? __getOwnPropDesc(target, key) : target;
  for (var i = decorators.length - 1, decorator; i >= 0; i--)
    if (decorator = decorators[i])
      result = (kind ? decorator(target, key, result) : decorator(result)) || result;
  if (kind && result)
    __defProp(target, key, result);
  return result;
};
var __async = (__this, __arguments, generator) => {
  return new Promise((resolve, reject) => {
    var fulfilled = (value) => {
      try {
        step(generator.next(value));
      } catch (e) {
        reject(e);
      }
    };
    var rejected = (value) => {
      try {
        step(generator.throw(value));
      } catch (e) {
        reject(e);
      }
    };
    var step = (x) => x.done ? resolve(x.value) : Promise.resolve(x.value).then(fulfilled, rejected);
    step((generator = generator.apply(__this, __arguments)).next());
  });
};

// src/controllers/ProductController.ts
var ProductController_exports = {};
__export(ProductController_exports, {
  ProductController: () => ProductController
});
module.exports = __toCommonJS(ProductController_exports);

// src/entities/Product.ts
var import_typeorm = require("typeorm");
var Product = class {
};
__decorateClass([
  (0, import_typeorm.Column)({ primary: true, generated: true })
], Product.prototype, "id", 2);
__decorateClass([
  (0, import_typeorm.Column)("varchar", { nullable: false, length: 200 })
], Product.prototype, "name", 2);
__decorateClass([
  (0, import_typeorm.Column)("varchar", { nullable: false, length: 12 })
], Product.prototype, "price", 2);
__decorateClass([
  (0, import_typeorm.Column)("varchar", { nullable: false, length: 200 })
], Product.prototype, "img", 2);
Product = __decorateClass([
  (0, import_typeorm.Entity)("product")
], Product);

// src/database/data-source.ts
var import_reflect_metadata = require("reflect-metadata");
var import_typeorm3 = require("typeorm");

// src/entities/User.ts
var import_typeorm2 = require("typeorm");
var User = class {
};
__decorateClass([
  (0, import_typeorm2.Column)({ primary: true, generated: true })
], User.prototype, "id", 2);
__decorateClass([
  (0, import_typeorm2.Column)("varchar", { nullable: false, length: 6 })
], User.prototype, "role", 2);
__decorateClass([
  (0, import_typeorm2.Column)("char", { nullable: false, length: 14, unique: true })
], User.prototype, "cpf", 2);
__decorateClass([
  (0, import_typeorm2.Column)("varchar", { nullable: false, length: 200 })
], User.prototype, "name", 2);
__decorateClass([
  (0, import_typeorm2.Column)("varchar", { nullable: false, length: 200 })
], User.prototype, "email", 2);
__decorateClass([
  (0, import_typeorm2.Column)("char", { nullable: false, length: 15 })
], User.prototype, "phone", 2);
__decorateClass([
  (0, import_typeorm2.Column)("char", { nullable: false, length: 9 })
], User.prototype, "cep", 2);
__decorateClass([
  (0, import_typeorm2.Column)("char", { nullable: false, length: 2 })
], User.prototype, "state", 2);
__decorateClass([
  (0, import_typeorm2.Column)("varchar", { nullable: false, length: 120 })
], User.prototype, "city", 2);
__decorateClass([
  (0, import_typeorm2.Column)("varchar", { nullable: false, length: 120 })
], User.prototype, "bairro", 2);
__decorateClass([
  (0, import_typeorm2.Column)("varchar", { nullable: false, length: 200 })
], User.prototype, "address", 2);
__decorateClass([
  (0, import_typeorm2.Column)({ nullable: false })
], User.prototype, "number", 2);
__decorateClass([
  (0, import_typeorm2.Column)("varchar", { nullable: false, length: 200 })
], User.prototype, "complement", 2);
User = __decorateClass([
  (0, import_typeorm2.Entity)("user")
], User);

// src/database/data-source.ts
var AppDataSource = new import_typeorm3.DataSource({
  type: "mysql",
  host: "db4free.net",
  port: 3306,
  username: "isaac_2023",
  password: "12345678",
  database: "fastfood_deliver",
  synchronize: true,
  logging: false,
  entities: [User, Product],
  migrations: [],
  subscribers: []
});

// src/controllers/ProductController.ts
var ProductController = class {
  // Rota para obter todos os produtos
  getProducts(req, res) {
    return __async(this, null, function* () {
      const productRepository = AppDataSource.getRepository(Product);
      const products = yield productRepository.find();
      res.status(200).json(products);
    });
  }
};
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  ProductController
});
