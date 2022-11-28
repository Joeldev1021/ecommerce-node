import { NextFunction, Request, Response } from "express";
import productCreateUsecase from "../../../application/usecases/product/product-create-usecase";
import { DescriptionVO } from "../../../domain/value-objects/description.vo";
import { NameVO } from "../../../domain/value-objects/name.vo";
import { PriceVO } from "../../../domain/value-objects/price.vo";
import { QuantityVO } from "../../../domain/value-objects/quantity.vo";
import { StateVO } from "../../../domain/value-objects/state.vo";
import { UuidVO } from "../../../domain/value-objects/uuid.vo";

class ProductCreateController {
  async execute(req: Request, res: Response, next: NextFunction) {
    const { id, name, description, price, quantity, state } = req.body;
    try {
      const product = productCreateUsecase.execute(
        new UuidVO(id),
        new NameVO(name),
        new DescriptionVO(description),
        new PriceVO(price),
        new QuantityVO(quantity),
        new StateVO(state)
      );
      res.status(200).send(product);
    } catch (error) {
      next(error);
    }
  }
}

export default new ProductCreateController();
