import React from 'react'
import articles from './LatestArticlesData'

const LatestArticles = () => {
  return (
    <section className=' pt-[6rem] bg-gray-light'>
    <div className='max-w-[80%] mx-auto'>
    <h1 className='text-4xl'>Latest Articles</h1>
<div className='grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 gap-6 py-[4rem]'>
{articles.map((item) => <div  className='rounded-lg bg-[#ffffff]'>
    <img src={item.image} alt={item.alt} className="h-[50%] w-[100%] rounded-t-lg"  />
    <div className='p-5'>
    <p className='text-base text-gray font-medium'>By {item.author}</p>
    <h1 className='text-xl font-medium py-3'>{item.title}</h1> 
    <p className='text-base font-medium text-gray pb-[3rem]'>{item.description}</p>
    </div>
</div>
)}

</div>
    </div>

    </section>
  )
}

export default LatestArticles