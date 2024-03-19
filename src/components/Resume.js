import ResumeImg from '../assets/resume.jpg';

export default function Resume(){
  return (
    <section className='flex flex-col md:flex-row bg-secondary px-5'>
        <div className='py-5 md:w-1/2 flex justify-end'>
            <img className = 'w-[300px]'src={ResumeImg}/>
        </div>
        <div className='md:w-1/2 flex justify-center'>
            <div className='flex flex-col justify-center text-white'>
                <h1 className='text-3xl  border-b-4 border-primary mb-5 w-[120px] font-bold'>Resume</h1>
                <p className='pb-5'>You can view my resume <a className='btn' href='#'>Download</a></p>
            </div>
        </div>
    </section>
  )
}