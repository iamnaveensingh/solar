import img1 from '../asset/1.png'


const Home = () => {


  let style = {
    backgroundImage: `url(${img1})`,
    backgroundPosition: 'center',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat'
  }
  return (
    <>
      <div className='h-[91vh]' style={style}>
        <div className='text-left h-[91vh]  md:text-6xl text-2xl lg:text-7xl sm:text-4xl text-white ' style={{background: "linear-gradient(90deg, rgba(0,0,0,0.8548669467787114) 0%, rgba(0,0,0,0.4599089635854342) 32%, rgba(255,252,252,0) 100%"}}>
         <p className='py-36 px-6'> We Provide Solar Solutions <br />  At Your Doorstep</p>
        </div>
      </div>


    </>
  );
};

export default Home;
