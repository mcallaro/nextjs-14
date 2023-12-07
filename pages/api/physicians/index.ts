import { NextApiResponse, NextApiRequest } from "next";
import { providerList } from "@/physicianData";
import { Provider } from "./__models";

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Provider[]>
) {
  return res.status(200).json(providerList);
}
