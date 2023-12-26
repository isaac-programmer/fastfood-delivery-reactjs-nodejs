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

// src/entities/User.ts
var User_exports = {};
__export(User_exports, {
  User: () => User
});
module.exports = __toCommonJS(User_exports);
var import_typeorm = require("typeorm");
var User = class {
};
__decorateClass([
  (0, import_typeorm.Column)({ primary: true, generated: true })
], User.prototype, "id", 2);
__decorateClass([
  (0, import_typeorm.Column)("varchar", { nullable: false, length: 6 })
], User.prototype, "role", 2);
__decorateClass([
  (0, import_typeorm.Column)("char", { nullable: false, length: 14, unique: true })
], User.prototype, "cpf", 2);
__decorateClass([
  (0, import_typeorm.Column)("varchar", { nullable: false, length: 200 })
], User.prototype, "name", 2);
__decorateClass([
  (0, import_typeorm.Column)("varchar", { nullable: false, length: 200 })
], User.prototype, "email", 2);
__decorateClass([
  (0, import_typeorm.Column)("char", { nullable: false, length: 15 })
], User.prototype, "phone", 2);
__decorateClass([
  (0, import_typeorm.Column)("char", { nullable: false, length: 9 })
], User.prototype, "cep", 2);
__decorateClass([
  (0, import_typeorm.Column)("char", { nullable: false, length: 2 })
], User.prototype, "state", 2);
__decorateClass([
  (0, import_typeorm.Column)("varchar", { nullable: false, length: 120 })
], User.prototype, "city", 2);
__decorateClass([
  (0, import_typeorm.Column)("varchar", { nullable: false, length: 120 })
], User.prototype, "bairro", 2);
__decorateClass([
  (0, import_typeorm.Column)("varchar", { nullable: false, length: 200 })
], User.prototype, "address", 2);
__decorateClass([
  (0, import_typeorm.Column)({ nullable: false })
], User.prototype, "number", 2);
__decorateClass([
  (0, import_typeorm.Column)("varchar", { nullable: false, length: 200 })
], User.prototype, "complement", 2);
User = __decorateClass([
  (0, import_typeorm.Entity)("user")
], User);
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  User
});
