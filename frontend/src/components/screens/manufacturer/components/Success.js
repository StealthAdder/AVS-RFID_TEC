import checkmark from '../img/checkmark.gif';
const Success = () => {
  return (
    <div className='success-div-center'>
      <img className='img-checkmark' src={checkmark} alt='' />
      <h3>Success</h3>
    </div>
  );
};

export default Success;
