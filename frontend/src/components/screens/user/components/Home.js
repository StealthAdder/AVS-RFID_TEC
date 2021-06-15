import Search from './Search';
const Home = () => {
  return (
    <div>
      <Search />
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

export default Home;
