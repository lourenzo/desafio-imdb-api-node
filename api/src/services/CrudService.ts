import { PrismaClient, Prisma } from "@prisma/client";
import { HttpError } from "koa";
import { BadRequestError, NotFoundError } from "routing-controllers";
import Container from "typedi";
import { z } from "zod";

export default class CrudService {
  protected repository: any;
  constructor(private modelName: Prisma.ModelName) {
    // Inject Database connection
    const prismaClient: any = Container.get("dbConn");
    this.repository = prismaClient[this.modelName.toLocaleLowerCase()];
  }

  list() {
    return this.repository.findMany();
  }

  read(id: number) {
    return this.repository.findFirst({ where: { id } });
  }

  create<Type>(data: Type) {
    try {
        return this.repository.create({ data });
    } catch (err: any) {
        return new BadRequestError(err.message);
    }
  }

  update(id: number, data: any) {
    return this.repository.findFirst({ data, where: { id } });
  }

  delete(id: number) {
    return this.repository.delete({ where: { id } });
  }
}
