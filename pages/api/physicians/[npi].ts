import { NextApiRequest, NextApiResponse } from "next";
import { providerList } from "@/physicianData";
import type { Provider, ResponseError } from "./__models";

export default function physicianHandler(
  req: NextApiRequest,
  res: NextApiResponse<Provider | ResponseError>
) {
  const { query } = req;
  const { npi } = query;
  const provider = providerList.find((p) => p.npi === npi);

  // Provider with npi exists
  return provider
    ? res.status(200).json(provider)
    : res.status(404).json({ message: `Provider with NPI: ${npi} not found.` });
}
