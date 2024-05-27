
import React from 'react'
import nfts from '../../../public/data/nfts'
import Card  from './Card'

const Products=() => {
  return (
    <section className='p-4 pb-24 text-white'>
        <div className='container max-w-6xl mx-auto overflow-hidden'>
                <div className='flex flex-col items-center  space-x-5 text-center'>
                   <h1 className='text-2xl md:text-3xl font-medium'>Explore Hot Products</h1> 
                   <p className='text-slate-400 md:w-2/4 mx-auto'>We are a huge marketplace dedicated to connecting great artists
                   of all Techwind with their fans and unique token collectors!</p>
                   
                </div>
             {/* cards grid*/}   
             <div className='grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4  gap-8 mt-12 place-content-center justify-between'>
                {
                    nfts.map((item,i) =>(
                        <Card key={i} item={item}/>
                    ))
                }
             </div>
        </div>
    </section>
  )
}

export default Products