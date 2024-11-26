import { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { Col, Row, Card, ListGroup, Button } from 'react-bootstrap'
import { FaRegCalendarAlt, FaTrashAlt } from 'react-icons/fa'
import { format } from 'date-fns'
import { readMessages, deleteMessage } from '../slices/messageSlice'
import Spinner from '../components/Spinner'
import DeleteMessageModal from '../components/DeleteMessageModel'

export default function ReadMessages() {
  const dispatch = useDispatch()
  const { messages } = useSelector(state => state.messages)
  const [showModal, setShowModal] = useState(false)
  const handleShowModal = () => setShowModal(true)
  const handleCloseModal = () => setShowModal(false)
  useEffect(() => {
    dispatch(readMessages())
  }, [])
  const handleDelete = async msgId => {
    await dispatch(deleteMessage(msgId))
    dispatch(readMessages())
  }
  console.log(messages.length)

  return (
    <>
      {!messages ? (
        <Spinner />
      ) : (
        <section className='layout_padding'>
          <div className='container'>
            <h2 className='text-center text-white my-large fw-logo'>
              Messages
            </h2>
            {!messages.length ? (
              <h2 className='text-white text-center'>No Message Found!</h2>
            ) : (
              <Row>
                {messages.map((msg, index) => (
                  <Col lg={4} md={6} key={index}>
                    <Card className='my-3'>
                      <Card.Body>
                        <Card.Title>
                          {msg.name} - {msg.email}
                        </Card.Title>
                        <Card.Subtitle>{msg.phone}</Card.Subtitle>
                        <Card.Text className='fst-italic'>
                          {msg.message}
                        </Card.Text>
                      </Card.Body>
                      <ListGroup>
                        <ListGroup.Item className='d-flex justify-content-between align-items-center'>
                          Sent On:{' '}
                          <small className='text-muted'>
                            <FaRegCalendarAlt className='mx-1 mb-1' />
                            {format(msg.createdAt, 'MMMM dd, yyyy hh:mm a')}
                          </small>
                          <Button
                            className='btn-sm'
                            variant='danger'
                            onClick={handleShowModal}
                          >
                            <FaTrashAlt />
                          </Button>
                        </ListGroup.Item>
                      </ListGroup>
                    </Card>
                    <DeleteMessageModal
                      show={showModal}
                      handleClose={handleCloseModal}
                      handleConfirm={() => handleDelete(msg._id)}
                    />
                  </Col>
                ))}
              </Row>
            )}
          </div>
        </section>
      )}
    </>
  )
}
