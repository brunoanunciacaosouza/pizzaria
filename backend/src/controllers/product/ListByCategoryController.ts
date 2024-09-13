import { Request, Response } from "express";
import { ListByCategoryService } from "../../services/product/ListByCategoryService";

class ListByCategoryController {
  async handle(req: Request, res: Response) {
    const category_id = req.params.category_id as string;

    const listByCategoryService = new ListByCategoryService();

    const listCategories = await listByCategoryService.execute({ category_id });

    return res.json(listCategories);
  }
}

export { ListByCategoryController };
