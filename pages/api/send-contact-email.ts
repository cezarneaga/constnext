const { ServerClient: PostmarkClient } = require("postmark");
const postmark = new PostmarkClient(process.env.POSTMARK_API_KEY);

import type { NextApiRequest, NextApiResponse } from "next";

export default async function sendEmail(req: NextApiRequest, res: NextApiResponse) {
  try {
    const { email, name, company, message } = JSON.parse(req.body);
    await postmark.sendEmailBatchWithTemplates([
      {
        From: process.env.POSTMARK_FROM_ADDRESS,
        To: "cezar.neaga@hey.com",
        TemplateId: process.env.POSTMARK_NEW_MESSAGE_ID,
        TemplateModel: {
          name,
          email,
          company,
          message,
        },
        MessageStream: "contactform",
      },
      {
        From: process.env.POSTMARK_FROM_ADDRESS,
        To: email,
        TemplateId: process.env.POSTMARK_CONFIRMED_RECEIVED_ID,
        TemplateModel: {
          name,
        },
        MessageStream: "outbound",
      },
    ]);

    res.status(200).json({ status: 200, message: "Message sent" });
  } catch (err) {
    const status =
      err instanceof Error && "status" in err ? (err as { status: number }).status : 500;
    const message = err instanceof Error ? err.message : "Unknown error";
    res.status(status).json({ status, message });
  }
}
