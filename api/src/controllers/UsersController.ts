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

@Service()
@Controller()
export class UsersController {
  private usersService: CrudService;
  constructor() {
    this.usersService = new CrudService("User");
  }

  @Get("/users")
  list() {
    return this.usersService.list();
  }

  @Get("/users/:id")
  read(@Param("id") id: number) {
    return this.usersService.read(id);
  }

  @Post("/users")
  create(@Body({ validate: true }) title: Prisma.UserCreateInput) {
    return this.usersService.create(title);
  }

  @Put("/users/:id")
  update(@Param("id") id: number, @Body() title: Prisma.UserUpdateInput) {
    return this.usersService.update(id, title);
  }

  @Delete("/users/:id")
  delete(@Param("id") id: number) {
    return this.usersService.delete(id);
  }
}
