// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import { sleep } from "../../lib/timeout";

const data = `<persons>
  <person>
      <id>3</id>
      <firstName>Jen</firstName>
      <lastName>Doe</lastName>
  </person>
  <person>
      <id>6</id>
      <firstName>Stephanie</firstName>
      <lastName>Joe</lastName>
  </person>
  <person>
      <id>1</id>
      <firstName>Victoria</firstName>
      <lastName>Doe</lastName>
  </person>
</persons>`;

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<string>
) {
  await sleep(10);

  res.status(200).setHeader("Content-Type", "application/xml").send(data);
}
