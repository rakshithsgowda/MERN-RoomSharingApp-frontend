import { useState } from 'react'
import { Button, Carousel, Modal } from 'react-bootstrap'

export default function Room({ room }) {
  const { name, image_urls, max_count, phone_number, room_type, description } =
    room

  const [show, setShow] = useState(false)

  const handleClose = () => setShow(false)
  const handleShow = () => setShow(true)
  return (
    <div className='container modal-content shadow p-3 mb-5 bg-body rounded'>
      <div className='row modal-body '>
        <div className='col-md-6'>
          <img src={image_urls[0]} alt={name} className='img-fluid rounded-3' />
        </div>
        <div className='col-md-6  text-start'>
          <b>
            <h4>{name}</h4>
            <p>Max Count : {max_count}</p>
            <p>Phone Number : {phone_number}</p>
            <p>Type : {room_type}</p>
          </b>
          <div className='float-end'>
            <button className='btn btn-dark' onClick={handleShow}>
              DETAILS
            </button>
          </div>
        </div>
      </div>

      <Modal show={show} onHide={handleClose} size='lg'>
        <Modal.Header>
          <Modal.Title>{name}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Carousel prevLabel='' nextLabel=''>
            {image_urls.map((url) => {
              return (
                <Carousel.Item>
                  <img className='bigimg img-fluid' src={url} alt={name} />
                </Carousel.Item>
              )
            })}
          </Carousel>
          <hr />
          <p>
            <strong>{description}</strong>
          </p>
        </Modal.Body>
        <Modal.Footer>
          <Button variant='dark' size='lg' onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  )
}
