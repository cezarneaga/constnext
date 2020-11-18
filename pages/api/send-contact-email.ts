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
        from: process.env.POSTMARK_FROM_ADDRESS,
        to: 'cezar.neaga@hey.com',
        TemplateId: process.env.POSTMARK_NEW_MESSAGE_ID,
        templateModel: {
          name,
          email,
          company,
          message,
        },
      },
      {
        from: process.env.POSTMARK_FROM_ADDRESS,
        to: email,
        TemplateId: process.env.POSTMARK_CONFIRMED_RECEIVED_ID,
        templateModel: {
          name,
        },
      },
    ])

    res.status(200).json({ status: 200, message: 'Message sent' })
  } catch ({ status = 500, message }) {
    res.status(status).json({ status, message })
  }
}
