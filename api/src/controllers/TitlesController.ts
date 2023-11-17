import "reflect-metadata";
import {
  Body,
  Controller,
  Get,
  Param,
  Post,
  Put,
  Delete,
} from "routing-controllers";
import { Service } from "typedi";
import { Prisma } from "@prisma/client";
import CrudService from "../services/CrudService";
import { TitleModel } from "../../prisma/zod";
import UnprocessableEntityError from "../lib/UnprocessableEntity";

@Service()
@Controller()
export class TitlesController {
  private titlesService: CrudService;
  constructor() {
    this.titlesService = new CrudService("Title");
  }

  @Get("/titles")
  list() {
    return this.titlesService.list();
  }

  @Get("/titles/:id")
  read(@Param("id") id: number) {
    return this.titlesService.read(id);
  }

  @Post("/titles")
  create(@Body({ validate: true }) title: Prisma.TitleCreateInput) {
    const validation = TitleModel.safeParse(title);
    if (!validation.success) {
      console.error(validation.error);
      return new UnprocessableEntityError(validation.error);
    }
    console.log({ validation });

    return this.titlesService.create<Prisma.TitleCreateInput>(title);
  }

  @Put("/titles/:id")
  update(@Param("id") id: number, @Body() title: Prisma.TitleUpdateInput) {
    return this.titlesService.update(id, title);
  }

  @Delete("/titles/:id")
  delete(@Param("id") id: number) {
    return this.titlesService.delete(id);
  }
}
