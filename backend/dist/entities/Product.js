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

// src/entities/Product.ts
var Product_exports = {};
__export(Product_exports, {
  Product: () => Product
});
module.exports = __toCommonJS(Product_exports);
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
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  Product
});
