const { ServerClient: PostmarkClient } = require('postmark')
const postmark = new PostmarkClient(process.env.POSTMARK_API_KEY)
import { NextApiResponse, NextApiRequest } from 'next'

export default async function sendEmail(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    let { email, name, company, message } = JSON.parse(req.body)
    await postmark.sendEmailBatchWithTemplates([
      {
        From: process.env.POSTMARK_FROM_ADDRESS,
        To: 'cezar.neaga@hey.com',
        TemplateId: process.env.POSTMARK_NEW_MESSAGE_ID,
        TemplateModel: {
          name,
          email,
          company,
          message,
        },
        MessageStream: 'contactform',
      },
      {
        From: process.env.POSTMARK_FROM_ADDRESS,
        To: email,
        TemplateId: process.env.POSTMARK_CONFIRMED_RECEIVED_ID,
        TemplateModel: {
          name,
        },
        MessageStream: 'outbound',
      },
    ])

    res.status(200).json({ status: 200, message: 'Message sent' })
  } catch ({ status = 500, message }) {
    res.status(status).json({ status, message })
  }
}
