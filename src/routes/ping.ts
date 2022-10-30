import { Request, Response } from "express";
import dbCreateEntry from "../database/samples/create";
import dbGetSingle from "../database/samples/getSingle";

const getId = require("get-short-id");

export default async function ({
  req,
  res,
}: {
  req: Request;
  res: Response;
}): Promise<any> {
  let newId = getId({ prefix: `smpl-${Date.now()}`, count: 6 });
  let sk = Date.now().toString();

  await dbCreateEntry({
    pk: newId,
    sk,
  });

  let gotItem = await dbGetSingle({
    pk: newId,
    sk,
  });

  res.send({ data: { success: true, item: gotItem }, error: null });
}
