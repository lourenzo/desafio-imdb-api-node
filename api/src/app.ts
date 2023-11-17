import "reflect-metadata";
import path from "path";
import { Container } from "typedi";
import { createKoaServer, useContainer } from "routing-controllers";
import { PrismaClient } from "@prisma/client";

const databaseConnection = new PrismaClient();

// Declare database connection for injection
Container.set("dbConn", databaseConnection);

useContainer(Container);

// Create and run server
createKoaServer({
}).listen(3000);

  controllers: [path.join(__dirname, "/controllers/*")],

