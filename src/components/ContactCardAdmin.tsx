'use client';

import { Contact } from '@/lib/validationSchemas';
import { Card, Image } from 'react-bootstrap';

/* Renders a single row in the List Stuff table. See list/page.tsx. */
const ContactCardAdmin = ({ contact }: { contact: Contact }) => (
  <Card className="h-100">
    <Card.Header>
      <Image src={contact.image} width={75} />
      <Card.Title>
        {contact.firstName}
        &nbsp;
        {contact.lastName}
      </Card.Title>
      <Card.Subtitle>
        {contact.address}
      </Card.Subtitle>
    </Card.Header>
    <Card.Body>
      {contact.description}
    </Card.Body>
    <Card.Footer className="blockquote-footer">
      {contact.owner}
    </Card.Footer>
  </Card>
);
export default ContactCardAdmin;
