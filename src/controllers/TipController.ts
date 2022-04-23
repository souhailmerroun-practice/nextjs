// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import fs from "fs";
import path from "path";
import { Tip } from "../types";

const TipControllerIndex: () => Tip[] = () => {
    const fileData = fs.readFileSync(path.resolve('data/tips.json'), "utf8");
    const jsonData = JSON.parse(fileData);
    return jsonData;
}

export { TipControllerIndex }