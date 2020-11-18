import * as yup from 'yup'
import { Formik, Form, Field, FieldProps } from 'formik'
import { Check, AlertTriangle } from 'react-feather'
import {
  Button,
  Box,
  Flex,
  FormControl,
  Textarea,
  InputGroup,
  Input,
  InputRightElement,
  FormErrorMessage,
  useToast,
  FormLabel,
} from '@chakra-ui/react'
import { NewlineText } from './new-line'
const inittialValues = {
  name: '',
  company: '',
  email: '',
  message: '',
}
export function Contact() {
  const toast = useToast()
  return (
    <Flex
      flexDirection="column"
      backgroundColor="brand.400"
      width="100%"
      height="auto"
      m="0"
      px="4"
      alignItems="stretch"
      overflow="hidden">
      <Box width="100%" maxW="780px" mx="auto" py="8">
        <NewlineText
          text={`Let's start something together \nSay hello!`}
          firstLineColor="gray.900"
          textTransform="uppercase"
          lineHeight="1.5em"
          textAlign="center"
        />
        <Formik
          initialValues={inittialValues}
          validationSchema={yup.object().shape({
            name: yup
              .string()
              .min(3, 'Your name is probably longer than ${min}')
              .required('Required!'),
            email: yup
              .string()
              .email("That's not an email")
              .required('Required!'),
            message: yup
              .string()
              .min(
                140,
                'Please add a few more words than a ${min} character tweet'
              )
              .required('Required!'),
          })}
          onSubmit={async (values, { setSubmitting, resetForm }) => {
            try {
              const response = await fetch('api/send-contact-email', {
                method: 'post',
                body: JSON.stringify(values),
              })
              const data = await response.json()
              console.log('Contact -> data', data)

              if (data.status === 200) {
                return toast({
                  title: 'Your email was sent!',
                  description: `Hello ${values.name}, Thanks for your message.
       I will reply to you tomorrow!`,
                  status: 'success',
                  duration: 7000,
                  isClosable: true,
                })
              } else {
                return toast({
                  title: 'Your email was not sent!',
                  description: `An error was encountered sending your message.
          Please send an old fashion email at cezar.neaga@hey.com instead`,
                  status: 'error',
                  duration: 7000,
                  isClosable: true,
                })
              }
            } catch (err) {
              toast({
                title: 'Your email was not sent!',
                description: `This is the error: (${err.message}).
          Please send an old fashion email at cezar.neaga@hey.com instead`,
                status: 'error',
                duration: 3000,
                isClosable: true,
              })
            }

            resetForm()
          }}>
          <Form>
            <Field name="name">
              {({ field, form }: FieldProps) => (
                <FormControl
                  isRequired
                  isInvalid={!!form.errors.name && form.touched.name}>
                  <InputGroup variant="flushed" colorScheme="brand" mt="8">
                    <FormLabel
                      htmlFor="name"
                      position="absolute"
                      left="-10000px"
                      top="auto"
                      width="1"
                      height="1"
                      overflow="hidden">
                      Your name
                    </FormLabel>
                    <Input {...field} placeholder="Your name" />
                    <InputRightElement
                      color="white"
                      children={
                        !form.errors.name && form.touched.name && <Check />
                      }
                    />
                  </InputGroup>
                  <FormErrorMessage color="red.300" marginRight="2">
                    <AlertTriangle />
                    {form.errors.name}
                  </FormErrorMessage>
                </FormControl>
              )}
            </Field>
            <Field name="company">
              {({ field, form }: FieldProps) => (
                <FormControl
                  isRequired
                  isInvalid={!!form.errors.company && form.touched.company}>
                  <InputGroup variant="flushed" colorScheme="brand" mt="8">
                    <FormLabel
                      htmlFor="company"
                      position="absolute"
                      left="-10000px"
                      top="auto"
                      width="1"
                      height="1"
                      overflow="hidden">
                      Your company
                    </FormLabel>
                    <Input {...field} placeholder="Your company" />
                    <InputRightElement
                      color="white"
                      children={
                        !form.errors.company &&
                        form.touched.company && <Check />
                      }
                    />
                  </InputGroup>
                  <FormErrorMessage color="red.300" marginRight="2">
                    <AlertTriangle />
                    {form.errors.company}
                  </FormErrorMessage>
                </FormControl>
              )}
            </Field>
            <Field name="email">
              {({ field, form }: FieldProps) => (
                <FormControl
                  isRequired
                  isInvalid={!!form.errors.email && form.touched.email}>
                  <InputGroup variant="flushed" colorScheme="brand" mt="8">
                    <FormLabel
                      htmlFor="email"
                      position="absolute"
                      left="-10000px"
                      top="auto"
                      width="1"
                      height="1"
                      overflow="hidden">
                      Your email
                    </FormLabel>
                    <Input {...field} placeholder="Your email" />
                    <InputRightElement
                      color="white"
                      children={
                        !form.errors.email && form.touched.email && <Check />
                      }
                    />
                  </InputGroup>
                  <FormErrorMessage color="red.300" marginRight="2">
                    <AlertTriangle />
                    {form.errors.email}
                  </FormErrorMessage>
                </FormControl>
              )}
            </Field>
            <Field name="message">
              {({ field, form }: FieldProps) => (
                <FormControl
                  isRequired
                  isInvalid={!!form.errors.message && form.touched.message}>
                  <InputGroup variant="flushed" colorScheme="brand" mt="8">
                    <FormLabel
                      htmlFor="message"
                      position="absolute"
                      left="-10000px"
                      top="auto"
                      width="1"
                      height="1"
                      overflow="hidden">
                      Your message
                    </FormLabel>
                    <Textarea
                      {...field}
                      placeholder="Your message"
                      rows={5}
                      pr="8"
                    />
                    <InputRightElement
                      color="white"
                      children={
                        !form.errors.name && form.touched.name && <Check />
                      }
                    />
                  </InputGroup>
                  <FormErrorMessage color="red.600" marginRight="2">
                    <AlertTriangle size={14} style={{ marginRight: 10 }} />{' '}
                    {form.errors.message}
                  </FormErrorMessage>
                </FormControl>
              )}
            </Field>
            <Button
              type="submit"
              variant="outline"
              color="white"
              _hover={{ color: 'gray.900', backgroundColor: 'white' }}
              size="lg"
              borderWidth="4px"
              mt="8"
              ml="calc(100% - 120px)">
              Submit
            </Button>
          </Form>
        </Formik>
      </Box>
    </Flex>
  )
}

// <ContactArea>
//   <Heading size={30} margin={30} center>
//     <Break>
//       Let's start something together <br />
//       Say hello!
//     </Break>
//   </Heading>
//   <Row middle="xs">
//     <Col xs={12} sm={12} md={8} lg={8} lgOffset={2} mdOffset={2}>
//       <Heading center lower margin={60} size={21}>
//         What issue are you trying to solve? Tell me what the problem looks
//         like!
//       </Heading>
//     </Col>
//   </Row>
//   <Row middle="xs">
//     <Col xs={12} sm={12} md={8} lg={8} lgOffset={2} mdOffset={2}>
//       <form onSubmit={handleSubmit}>
//         <Label htmlFor="name">Name</Label>
//         <Input
//           id="name"
//           placeholder="Name"
//           type="text"
//           value={values.name}
//           onChange={handleChange}
//           onBlur={handleBlur}
//         />
//         {errors.name &&
//           touched.name && (
//             <div style={{ color: 'red', marginTop: '.5rem' }}>
//               {errors.name}
//             </div>
//           )}
//         <Label htmlFor="email">Email</Label>
//         <Input
//           id="email"
//           placeholder="Enter your email"
//           type="email"
//           value={values.email}
//           onChange={handleChange}
//           onBlur={handleBlur}
//         />
//         {errors.email &&
//           touched.email && (
//             <div style={{ color: 'red', marginTop: '.5rem' }}>
//               {errors.email}
//             </div>
//           )}
//         <Label htmlFor="company">Company</Label>
//         <Input
//           id="company"
//           placeholder="Your company"
//           type="text"
//           value={values.company}
//           onChange={handleChange}
//           onBlur={handleBlur}
//         />
//         <Label htmlFor="message">Message</Label>
//         <Textarea
//           id="message"
//           placeholder="Your message"
//           type="text"
//           rows="6"
//           value={values.message}
//           onChange={handleChange}
//           onBlur={handleBlur}
//         />
//         {errors.message &&
//           touched.message && (
//             <div style={{ color: 'red', marginTop: '.5rem' }}>
//               {errors.message}
//             </div>
//           )}
//         <Button type="submit" disabled={isSubmitting} alignment="flex-end">
//           Send
//         </Button>
//       </form>
//     </Col>
//   </Row>
// </ContactArea>
