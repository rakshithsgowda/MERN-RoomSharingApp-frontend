export default function Room({ room }) {
  const { name, image_urls, max_count, phone_number, room_type } = room
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
            <button className='btn btn-dark'>india</button>
          </div>
        </div>
      </div>
    </div>
  )
}
