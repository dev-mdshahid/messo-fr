import React from 'react';

const ExerciseCard = () => {
    const description = `Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem, laborum
    quibusdam. Et dolores, ea quam nesciunt reprehenderit amet culpa
    nostrum, perferendis quia blanditiis nemo repellendus. Iste accusamus
    fugit sint officiis nostrum architecto quam autem totam culpa
    consequuntur reiciendis cum amet debitis quae odit aperiam, dolorum
    unde, quisquam tenetur? Ad, suscipit.`;
  return (
    <div className='max-w-[1000px] grid grid-cols-4 gap-6 p-6 hover:bg-blue-50 cursor-pointer border transition items-center bg-white'>
      <img
        src="https://www.bodybuilding.com/images/2020/xdb/cropped/xdb-42a-alternating-lunge-jump-m4-square-600x600.jpg"
        alt="Forward lunge"
        className='border'
      />
      <div className='col-span-3 text-gray-600'>
        <h3 className='font-semibold text-2xl text-blue-900'>Forward Lunge</h3>
        <div className='flex gap-8 mt-1.5 mb-5'>
          <p className='text-blue-600'>Sets: 4</p>
          <p>Equipment: Free Weights</p>
        </div>
        <p className='font-bold text-blue-900'>Details: </p>
        <p>
          {description.slice(0, 150) + '...'}
        </p>
      </div>
    </div>
  );
};

export default ExerciseCard;
