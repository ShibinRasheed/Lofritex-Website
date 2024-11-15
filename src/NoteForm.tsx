import { Col, Form, FormLabel, Row, Stack } from "react-bootstrap";



export default function NoteForm() {
  return (
    <Form>
        <Stack gap={4}>
            <Row>
                <Col>
                    <Form.Group controlId="title">
                        <FormLabel>Title</FormLabel>
                        <Form.Control required/>
                    </Form.Group>
                </Col>
            </Row>
        </Stack>
    </Form>    
)
}
