const Intro = () => {
  return (
    <div>
      {/* <Typography variant='h4' gutterBottom>
        Dashboard
      </Typography>
      <Typography variant='h6' color='error'>
        Never Drink & Drive.
      </Typography>
      <Typography variant='h6' color='error'>
        Always Wear Seat Belt.
      </Typography>
      <Typography variant='h6' color='error'>
        Keep a Safe Distance from the vehicle ahead.
      </Typography>
      <Typography variant='h6' color='error'>
        Always Avoid Distractions.
      </Typography>
      <Typography variant='h6' color='error'>
        Never Break Red Signal.
      </Typography>
      <Typography variant='h6' color='error'>
        Always Drive Within Speed Limit.
      </Typography>
      <Typography variant='h6' color='error'>
        Avoid the Drowsiness While Driving.
      </Typography>
      <Typography variant='h6' color='error'>
        Watch Out For Drivers On the Road.
      </Typography> */}
      <h3>Wall of Videos</h3>
      <iframe
        width='560'
        height='315'
        src='https://www.youtube.com/embed/kUmkbzQ-BS0'
        title='YouTube video player'
        frameborder='0'
        allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
        allowfullscreen
      ></iframe>
    </div>
  );
};

export default Intro;
