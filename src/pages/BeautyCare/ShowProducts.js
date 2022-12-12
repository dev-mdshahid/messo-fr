import React from 'react';

//Importing icons
import { BiSearchAlt } from 'react-icons/bi';
import { MdOutlineRecommend, MdTipsAndUpdates } from 'react-icons/md';

const ShowProducts = ({ products, choiceList, suggestion, ingredients }) => {
  console.log(ingredients);
  return (
    <div className="flex justify-center max-w-[900px] mx-auto">
      <div>
        <h1 className="text-4xl mb-7 mt-10 text-center">
          Here is your suggestions
        </h1>

        {/* Ingredients */}
        {ingredients ? (
          <div className="mb-5">
            <div className="bg-white rounded-lg overflow-hidden border border-blue-100">
              <h2 className="flex items-center gap-2 text-blue-900 text-2xl font-semibold p-5 pb-3">
                <MdTipsAndUpdates className="text-3xl" /> Ingredients to look
                for
              </h2>
              <div className="h-px w-full bg-blue-900 opacity-20"></div>
              <p className="p-5">
                {ingredients?.ingredients.split('*').map((line) => (
                  <p>
                    {line}
                    <br />
                    <br />
                  </p>
                ))}
              </p>
            </div>
          </div>
        ) : (
          ''
        )}

        {/* Recommended products */}
        <div className="mb-5">
          <div className="bg-white rounded-lg overflow-hidden border border-blue-100">
            <h2 className="flex items-center gap-2 text-blue-900 text-2xl font-semibold p-5 pb-3">
              <MdOutlineRecommend className="text-3xl" /> Recommended products
            </h2>
            <div className="h-px w-full bg-blue-900 opacity-20"></div>
            <div className="grid p-2">
              {products.map((product, id) => {
                const { name, img } = product;
                return (
                  <ProductCard
                    name={name}
                    img={img}
                    id={id}
                    choiceList={choiceList}
                  />
                );
              })}
            </div>
          </div>
        </div>

        {/* Suggestions */}
        {suggestion ? (
          <div className="mb-5">
            <div className="bg-white rounded-lg overflow-hidden border border-blue-100">
              <h2 className="flex items-center gap-2 text-blue-900 text-2xl font-semibold p-5 pb-3">
                <MdTipsAndUpdates className="text-3xl" /> Suggestions from{' '}
                <span className="">MessO</span>
              </h2>
              <div className="h-px w-full bg-blue-900 opacity-20"></div>
              <p className="p-5">{suggestion?.description}</p>
            </div>
          </div>
        ) : (
          ''
        )}
      </div>
    </div>
  );
};

const ProductCard = ({ name, img, id, choiceList }) => {
  const {
    type,
    scalpType,
    hairConcern,
    skinPart,
    faceType,
    faceConcern,
    bodyType,
    bodyConcern,
  } = choiceList;
  return (
    <div className=" flex justify-between gap-4 p-2 m-3 rounded-lg hover:shadow-lg cursor-pointer border transition items-center bg-white">
      <div className="flex items-center gap-4">
        <h1 className="text-2xl text-blue-900 pl-1 opacity-70">{id + 1}</h1>
        <img
          src={img}
          alt={name}
          className="rounded-lg w-[80px] h-[80px] shadow"
        />
        <div className="col-span-3 text-gray-600">
          <h3 className="font-semibold text-lg text-blue-900">{name} </h3>
          <div className="flex gap-4 mt-1.5 mb-2 text-sm">
            <p className="">
              <span className="font-semibold">Type:</span> {type}
            </p>
            {scalpType ? (
              <p className="">
                <span className="font-semibold">Scalp type:</span> {scalpType}
              </p>
            ) : (
              ''
            )}
            {hairConcern ? (
              <p className="">
                <span className="font-semibold">Hair concern:</span>{' '}
                {hairConcern}
              </p>
            ) : (
              ''
            )}
            {/* {skinPart ? (
              <p className="">
                <span className="font-semibold">Skin part:</span> {skinPart}
              </p>
            ) : (
              ''
            )} */}
            {faceType ? (
              <p className="">
                <span className="font-semibold">Face type:</span> {faceType}
              </p>
            ) : (
              ''
            )}
            {faceConcern ? (
              <p className="">
                <span className="font-semibold">Face concern:</span>{' '}
                {faceConcern}
              </p>
            ) : (
              ''
            )}
            {bodyType ? (
              <p className="">
                <span className="font-semibold">Body type:</span> {bodyType}
              </p>
            ) : (
              ''
            )}
            {bodyConcern ? (
              <p className="">
                <span className="font-semibold">Body concern:</span>{' '}
                {bodyConcern}
              </p>
            ) : (
              ''
            )}
          </div>
          {/* <p className="font-bold text-blue-900">Details: </p> */}
        </div>
      </div>
      <div className="flex items-center gap-3 child:whitespace-nowrap">
        <a
          href={`https://www.google.com/search?q=${name.split(' ').join('+')}`}
          target="_blank"
          rel="noreferrer"
          className="bg-blue-100 px-2 py-1 rounded-lg flex items-center gap-2 text-blue-500 transition hover:scale-105"
        >
          <BiSearchAlt />
          <span className="text-sm font-semibold">Search this product</span>
        </a>
      </div>
    </div>
  );
};

export default ShowProducts;
