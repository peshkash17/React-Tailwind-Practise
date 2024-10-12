import bgContet from '../assets/Rectangle.png'
const Content = () => {
  return (
    <div className="h-[540px] bg-[#2F1893] bg-cover bg-center flex flex-col justify-center items-center gap-5" style={{ backgroundImage: `url(${bgContet})` }}>
     <p className='text-md tracking-wider font-normal text-white font-sans'>Free Sample</p>
     <div className='text-6xl font-medium text-white text-center'>
     <h2 className=''>
     Powerful Generator and Free 
     </h2>
     <span>
     Figma Sources 
     </span>
     </div>

     <p className='text-md tracking-wider font-normal text-white font-sans w-1/2 text-center py-6'>
     Startup Framework contains components and complex blocks which can easily be integrated into almost any design. All of the components are made in the same style, and can easily be integrated into projects, allowing you to create hundreds of solutions.
     </p>
  
    </div>
  )
}

export default Content
