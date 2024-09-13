import { Request, Response } from "express";
import { CreateOrderService } from "../../services/order/CreateOrderService";

class CreateOrderController {
  async handle(req: Request, res: Response) {
    const { table, name } = req.body;

    const createOderService = new CreateOrderService();

    const order = await createOderService.execute({ table, name });

    return res.json(order);
  }
}

export { CreateOrderController };
