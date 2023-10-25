import { ContactFormProps } from "@/lib/types";

import { Html,Body,Head,Heading,Hr,Container,Preview,Section,Text } from "@react-email/components"
import { Tailwind } from "@react-email/components";
 

const ContactForm = ({ message,email }: ContactFormProps) => {
  return <Html>
    <Head />
    <Preview>New message from your portfolio site</Preview>
    <Tailwind>
      <Body className="bg-gray-100">
        <Container>
          <Section className="bg-white border border-black/10 my-10 px-10 py-4 rounded-md">
            <Heading className="leading-tight">You received the following message from the contact form</Heading>
            <Text>{message}</Text>
            <Hr />
            <Text>The sender´s email is: {email}</Text>
          </Section>
        </Container>
      </Body>
    </Tailwind>
  </Html>;
};

export default ContactForm;
