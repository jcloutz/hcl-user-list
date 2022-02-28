// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import { sleep } from "../../lib/timeout";

const data = `{
  "person": [
      {
          "id": 10,
          "firstName": "John",
          "lastName": "Doe"
      },
      {
          "id": 5,
          "firstName": "Jack",
          "lastName": "Doe"
      },
      {
          "id": 7,
          "firstName": "James",
          "lastName": "Doe"
      }
  ]
}`;

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<string>
) {
  await sleep(5);

  res.status(200).json(data);
}
