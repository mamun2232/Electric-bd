import React from 'react';
import myImage from '../../image/myimg-2.jpeg'

const Protbannner = () => {
      return (
            <div className='banner lg:flex justify-between items-center my-10'>

                  <div className=''>
                        <p className='text-2xl ptext'>Hi There</p>
                        <h1 className='text-5xl my-3 ptext'>I'm Juboraj Islam Mamun</h1>
                        <p className='text-2xl ptext'>i am a Web Developer From Bangladesh</p>

                        <div className='mt-5'>
                              <button className='btn mr-4 bg-blue-800 text-white border-0'>Resume</button>
                              <button className='btn mr-4 bg-blue-800 text-white border-0'>Contact</button>
                        </div>
                  </div>
                  <div className=''>
                        <img src={myImage} alt="" />
                  </div>

            </div>
      );
};

export default Protbannner;