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
  useColorModeValue,
} from '@chakra-ui/react'
import { NewlineText } from './new-line'
const initialValues = {
  name: '',
  company: '',
  email: '',
  message: '',
}
export function Contact() {
  const toast = useToast()
  const bgColor = useColorModeValue('brand.500', 'gray.900')
  const firstLineColor = useColorModeValue('gray.700', 'white')
  return (
    <Flex
      flexDirection="column"
      backgroundColor={bgColor}
      width="100%"
      height="auto"
      m="0"
      px="4"
      alignItems="stretch"
      overflow="hidden">
      <Box width="100%" maxW="780px" mx="auto" py="8">
        <NewlineText
          text={`Let's start something together \nSay hello!`}
          firstLineColor={firstLineColor}
          textTransform="uppercase"
          lineHeight="1.5em"
          textAlign="center"
        />
        <Formik
          initialValues={initialValues}
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
          onSubmit={async (values, { resetForm }) => {
            try {
              const response = await fetch('api/send-contact-email', {
                method: 'post',
                body: JSON.stringify(values),
              })
              const data = await response.json()
              if (data.status === 200) {
                resetForm()
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
          }}>
          {({ isSubmitting }) => (
            <Form>
              <Field name="name">
                {({ field, form }: FieldProps) => (
                  <FormControl
                    isRequired
                    isInvalid={Boolean(form.errors.name && form.touched.name)}>
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
                      <Input {...field} id="name" placeholder="Your name" />
                      <InputRightElement
                        color="white"
                        children={
                          !form.errors.name && form.touched.name && <Check />
                        }
                      />
                    </InputGroup>
                    <FormErrorMessage color="red.600" marginRight="2">
                      <AlertTriangle size={14} style={{ marginRight: 10 }} />{' '}
                      {form.errors.name}
                    </FormErrorMessage>
                  </FormControl>
                )}
              </Field>
              <Field name="company">
                {({ field, form }: FieldProps) => (
                  <FormControl
                    isRequired
                    isInvalid={Boolean(
                      form.errors.company && form.touched.company
                    )}>
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
                      <Input
                        {...field}
                        id="company"
                        placeholder="Your company"
                      />
                      <InputRightElement
                        color="white"
                        children={
                          !form.errors.company &&
                          form.touched.company && <Check />
                        }
                      />
                    </InputGroup>
                    <FormErrorMessage color="red.600" marginRight="2">
                      <AlertTriangle size={14} style={{ marginRight: 10 }} />{' '}
                      {form.errors.company}
                    </FormErrorMessage>
                  </FormControl>
                )}
              </Field>
              <Field name="email">
                {({ field, form }: FieldProps) => (
                  <FormControl
                    isRequired
                    isInvalid={Boolean(
                      form.errors.email && form.touched.email
                    )}>
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
                      <Input {...field} id="email" placeholder="Your email" />
                      <InputRightElement
                        color="white"
                        children={
                          !form.errors.email && form.touched.email && <Check />
                        }
                      />
                    </InputGroup>
                    <FormErrorMessage color="red.600" marginRight="2">
                      <AlertTriangle size={14} style={{ marginRight: 10 }} />{' '}
                      {form.errors.email}
                    </FormErrorMessage>
                  </FormControl>
                )}
              </Field>
              <Field name="message">
                {({ field, form }: FieldProps) => (
                  <FormControl
                    isRequired
                    isInvalid={Boolean(
                      form.errors.message && form.touched.message
                    )}>
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
                        id="message"
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
                isLoading={isSubmitting}
                colorScheme="gray"
                // color="gray.700"
                // fontWeight={600}
                // _hover={{ color: 'gray.700', backgroundColor: 'white' }}
                size="lg"
                mt="8"
                ml="calc(100% - 120px)">
                Submit
              </Button>
            </Form>
          )}
        </Formik>
      </Box>
    </Flex>
  )
}
