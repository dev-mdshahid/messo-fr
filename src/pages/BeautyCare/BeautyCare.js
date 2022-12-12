import React from 'react';
import { useState } from 'react';
import ChoiceBox from '../../components/Shared/ChoiceBox';

// For modal
import { Dialog, Transition } from '@headlessui/react';
import { Fragment } from 'react';

// Importing icons
// png icons
// Concern type
import skin from '../../media/img/icons/skin.png';
import hair from '../../media/img/icons/hair.png';

// type of skin
import faceSkin from '../../media/img/icons/face_skin.png';
import bodySkin from '../../media/img/icons/body_skin.png';

//Skin type
import normalSkin from '../../media/img/icons/normal_skin.png';
import oilySkin from '../../media/img/icons/oily_skin.png';
import drySkin from '../../media/img/icons/dry_skin.png';
import combinationalSkin from '../../media/img/icons/combinational_skin.png';
import sensitiveSkin from '../../media/img/icons/sensitive_skin.png';

// Skin concern
import rashSkin from '../../media/img/icons/rash_skin.png';
import acneSkin from '../../media/img/icons/acne_skin.png';
import brightSkin from '../../media/img/icons/bright_skin.png';
import antiAgingSkin from '../../media/img/icons/anti_aging_skin.png';
import blemishSkin from '../../media/img/icons/blemish_skin.png';

//Scalp type
import dryHair from '../../media/img/icons/dry_hair.png';
import sensitiveHair from '../../media/img/icons/sensitive_hair.png';

//Hair concern \
import hairFall from '../../media/img/icons/hairFall_hair.png';
import hairGrowth from '../../media/img/icons/hairGrowth_hair.png';
import rebonded from '../../media/img/icons/rebonded_hair.png';
import colored from '../../media/img/icons/colored_hair.png';
import dandruff from '../../media/img/icons/dandruff_hair.png';

//body type
import normalBody from '../../media/img/icons/normal_body.png';
import dryBody from '../../media/img/icons/dry_body.png';
import sensitiveBody from '../../media/img/icons/sensitive_body.png';

// Skin concern
import rashBody from '../../media/img/icons/rash_body.png';
import acneBody from '../../media/img/icons/acne_body.png';
import brightBody from '../../media/img/icons/bright_body.png';
import { Beauty } from '../../Classes/Beauty';

// Import components
import ShowProducts from './ShowProducts';

const BeautyCare = () => {
  // Declaring state
  const [step, setStep] = useState(1);
  const [type, setType] = useState();
  const [scalpType, setScalpType] = useState();
  const [hairConcern, setHairConcern] = useState();
  const [skinPart, setSkinPart] = useState();
  const [faceType, setFaceType] = useState();
  const [faceConcern, setFaceConcern] = useState();
  const [bodyType, setBodyType] = useState();
  const [bodyConcern, setBodyConcern] = useState();

  // Modal
  let [isOpen, setIsOpen] = useState(false);

  function closeModal() {
    setIsOpen(false);
  }

  function openModal() {
    setIsOpen(true);
  }

  // How to
  const oily = `
  If your skin appears shiny throughout, you likely have oily skin.`;
  const dry = `
  If it feels tight and is flaky or scaly, you likely have dry skin.`;
  const combinational = `
  If the shine is only in your T-zone, you probably have combination skin.`;
  const normal = `
  If your skin feels hydrated and comfortable, but not oily, you likely have normal skin.`;
  const sensitive = `If your skin feels itchy and dry and most often your skin becomes reddish and notice rashes then you are likely to have sensitive skin.`;

  const choiceList = {
    type,
    scalpType,
    hairConcern,
    skinPart,
    faceType,
    faceConcern,
    bodyType,
    bodyConcern,
  };

  const infoObj = {
    type,
    scalpType,
    hairConcern,
    skinPart,
    faceType,
    faceConcern,
    bodyType,
    bodyConcern,
  };

  const beautyObj = new Beauty();
  const products = beautyObj.getSkincareProducts(infoObj);
  const suggestion = beautyObj.getSkinCareSuggestions(infoObj);
  const ingredients = beautyObj.getSkinCareIngredients(infoObj);

  console.log(ingredients);

  return step === 1 ? (
    <div>
      <div className="h flex justify-center">
        {/* Vegetarian or non vegetarian check */}
        <div className="mt-20">
          {/* Question */}
          <h1 className="text-4xl text-center">What is it about?</h1>
          {/* Choice boxes */}
          <div className="flex gap-6 mt-12">
            {/* Box-1 */}
            <div onClick={() => setStep(5)}>
              <ChoiceBox
                img={hair}
                text={'Hair Care'}
                description={'(Concerned about your hair)'}
                setTarget={setType}
              />
            </div>

            {/* Box-2 */}
            <div onClick={() => setStep(step + 1)}>
              <ChoiceBox
                img={skin}
                text={'Skin Care'}
                description={'(Concerned about your skin)'}
                setTarget={setType}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  ) : step === 2 ? (
    <div className="h flex justify-center">
      {/* Vegetarian or non vegetarian check */}
      <div className="mt-20 flex flex-col items-center">
        {/* Question */}
        <h1 className="text-4xl text-center">Which portion of skin?</h1>
        {/* Choice boxes */}
        <div className="flex gap-6 mt-12">
          <div onClick={() => setStep(7)}>
            <ChoiceBox
              img={bodySkin}
              text={'Body'}
              description={'(Treat your body skin)'}
              setTarget={setSkinPart}
            />
          </div>
          <div onClick={() => setStep(step + 1)}>
            <ChoiceBox
              img={faceSkin}
              text={'Face'}
              description={'(Treat your facial skin)'}
              setTarget={setSkinPart}
            />
          </div>
        </div>
      </div>
    </div>
  ) : step === 3 ? (
    <div className="h flex justify-center">
      <div className="mt-20 flex flex-col items-center">
        {/* Question */}
        <h1 className="text-4xl text-center">What is your skin type?</h1>
        {/* Choice boxes */}
        <div className="flex gap-6 mt-12 flex-wrap justify-center max-w-[1000px]">
          <div onClick={() => setStep(step + 1)}>
            <ChoiceBox
              img={normalSkin}
              text={'Normal'}
              description={'(Nothing to be worried about)'}
              setTarget={setFaceType}
            />
          </div>
          <div onClick={() => setStep(step + 1)}>
            <ChoiceBox
              img={oilySkin}
              text={'Oily'}
              description={'(Produced excess oil)'}
              setTarget={setFaceType}
            />
          </div>
          <div onClick={() => setStep(step + 1)}>
            <ChoiceBox
              img={drySkin}
              text={'Dry'}
              description={'(Lacking too much water & oil)'}
              setTarget={setFaceType}
            />
          </div>
          <div onClick={() => setStep(step + 1)}>
            <ChoiceBox
              img={combinationalSkin}
              text={'Combinational'}
              description={'(Oily only on nose and forehead)'}
              setTarget={setFaceType}
            />
          </div>
          <div onClick={() => setStep(step + 1)}>
            <ChoiceBox
              img={sensitiveSkin}
              text={'Sensitive'}
              description={'(Stinging, burning, pain sensations)'}
              setTarget={setFaceType}
            />
          </div>
        </div>

        <button
          className="mt-10 underline text-blue-900 font-semibold"
          onClick={() => openModal()}
        >
          Don't know your skin type?
        </button>

        {/* Modal */}
        <Transition appear show={isOpen} as={Fragment}>
          <Dialog as="div" className="relative z-10" onClose={closeModal}>
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <div className="fixed inset-0 bg-black bg-opacity-25" />
            </Transition.Child>

            <div className="fixed inset-0 overflow-y-auto">
              <div className="flex min-h-full items-center justify-center p-4 text-center">
                <Transition.Child
                  as={Fragment}
                  enter="ease-out duration-300"
                  enterFrom="opacity-0 scale-95"
                  enterTo="opacity-100 scale-100"
                  leave="ease-in duration-200"
                  leaveFrom="opacity-100 scale-100"
                  leaveTo="opacity-0 scale-95"
                >
                  <Dialog.Panel className="w-full max-w-[500px] max-h-[700px] transform rounded-2xl bg-white p-8 px-8 text-left align-middle shadow-xl transition-all">
                    <Dialog.Title
                      as="h3"
                      className="text-2xl text-center font-semibold leading-6 text-blue-900 mb-7"
                    >
                      Test your skin type
                    </Dialog.Title>
                    <div className="mt-2">
                      <p className="text-sm text-gray-500 mt-5">
                        To start, wash your face with a gentle cleanser, then
                        gently pat it dry. Wait 30 minutes. 
                      </p>
                    </div>
                    <div className="mt-2">
                      <p className="text-sm text-gray-500 mt-5">
                        <span className="font-semibold text-blue-900 ">
                          Dry skin:{' '}
                        </span>
                        {dry}
                      </p>
                    </div>
                    <div className="mt-2">
                      <p className="text-sm text-gray-500 mt-5">
                        <span className="font-semibold text-blue-900 ">
                          Oily skin:{' '}
                        </span>
                        {oily}
                      </p>
                    </div>
                    <div className="mt-2">
                      <p className="text-sm text-gray-500 mt-5">
                        <span className="font-semibold text-blue-900 ">
                          Combinational skin:{' '}
                        </span>
                        {combinational}
                      </p>
                    </div>
                    <div className="mt-2">
                      <p className="text-sm text-gray-500 mt-5">
                        <span className="font-semibold text-blue-900 ">
                          Normal skin:{' '}
                        </span>
                        {normal}
                      </p>
                    </div>
                    <div className="mt-2">
                      <p className="text-sm text-gray-500 mt-5">
                        <span className="font-semibold text-blue-900 ">
                          Sensitive skin:{' '}
                        </span>
                        {sensitive}
                      </p>
                    </div>

                    <div className="mt-4">
                      <button
                        type="button"
                        className="inline-flex justify-center rounded-md border border-transparent bg-blue-100 px-4 py-2 mt-2 text-sm font-medium text-blue-900 hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                        onClick={closeModal}
                      >
                        Got it, thanks!
                      </button>
                    </div>
                  </Dialog.Panel>
                </Transition.Child>
              </div>
            </div>
          </Dialog>
        </Transition>
      </div>
    </div>
  ) : step === 4 ? (
    <div className="h flex justify-center">
      <div className="mt-20 flex flex-col items-center">
        {/* Question */}
        <h1 className="text-4xl text-center">What are you worried about?</h1>
        {/* Choice boxes */}
        <div className="flex gap-6 mt-12 flex-wrap justify-center max-w-[900px]">
          <div onClick={() => setStep(9)}>
            <ChoiceBox
              img={rashSkin}
              text={'Rashness'}
              description={'(Fix embarassing skin rash)'}
              setTarget={setFaceConcern}
            />
          </div>

          <div onClick={() => setStep(9)}>
            <ChoiceBox
              img={acneSkin}
              text={'Acne issue'}
              description={'(Decrease the annoying acne)'}
              setTarget={setFaceConcern}
            />
          </div>

          <div onClick={() => setStep(9)}>
            <ChoiceBox
              img={brightSkin}
              text={'Brightening'}
              description={'(Make your skin glow)'}
              setTarget={setFaceConcern}
            />
          </div>
          <div onClick={() => setStep(9)}>
            <ChoiceBox
              img={antiAgingSkin}
              text={'Anti aging'}
              description={'(Prevent aging to stay evergreen)'}
              setTarget={setFaceConcern}
            />
          </div>
          <div onClick={() => setStep(9)}>
            <ChoiceBox
              img={blemishSkin}
              text={'Dehydration'}
              description={'(Fix dehydration of your skin)'}
              setTarget={setFaceConcern}
            />
          </div>
        </div>
      </div>
    </div>
  ) : step === 5 ? (
    <div className="h flex justify-center">
      <div className="mt-20 flex flex-col items-center">
        {/* Question */}
        <h1 className="text-4xl text-center">What is your scalp type?</h1>
        {/* Choice boxes */}
        <div className="flex gap-6 mt-12 flex-wrap justify-center max-w-[1000px]">
          <div onClick={() => setStep(step + 1)}>
            <ChoiceBox
              img={sensitiveHair}
              text={'Sensitive'}
              description={'(Stinging, burning, pain sensations)'}
              setTarget={setScalpType}
            />
          </div>
          <div onClick={() => setStep(step + 1)}>
            <ChoiceBox
              img={oilySkin}
              text={'Oily'}
              description={'(Produced excess oil)'}
              setTarget={setScalpType}
            />
          </div>
          <div onClick={() => setStep(step + 1)}>
            <ChoiceBox
              img={dryHair}
              text={'Dry'}
              description={'(Lacking too much water & oil)'}
              setTarget={setScalpType}
            />
          </div>
        </div>
      </div>
    </div>
  ) : step === 6 ? (
    <div className="h flex justify-center">
      <div className="mt-20 flex flex-col items-center">
        {/* Question */}
        <h1 className="text-4xl text-center">What is your hair concern?</h1>
        {/* Choice boxes */}
        <div className="flex gap-6 mt-12 flex-wrap justify-center max-w-[900px]">
          <div onClick={() => setStep(9)}>
            <ChoiceBox
              img={hairFall}
              text={'Hair fall'}
              description={'(Stop unstoppable hair fall)'}
              setTarget={setHairConcern}
            />
          </div>

          <div onClick={() => setStep(9)}>
            <ChoiceBox
              img={hairGrowth}
              text={'Hair growth'}
              description={'(Grow your hair)'}
              setTarget={setHairConcern}
            />
          </div>

          <div onClick={() => setStep(9)}>
            <ChoiceBox
              img={rebonded}
              text={'Rebonded Hair'}
              description={'(Straghten your curly hair)'}
              setTarget={setHairConcern}
            />
          </div>

          <div onClick={() => setStep(9)}>
            <ChoiceBox
              img={colored}
              text={'Colored hair'}
              description={'(Make your hair colorful)'}
              setTarget={setHairConcern}
            />
          </div>
          <div onClick={() => setStep(9)}>
            <ChoiceBox
              img={dandruff}
              text={'Dandruff'}
              description={'(Prevent hair from dandruff)'}
              setTarget={setHairConcern}
            />
          </div>
        </div>
      </div>
    </div>
  ) : step === 7 ? (
    <div className="h flex justify-center">
      <div className="mt-20 flex flex-col items-center">
        {/* Question */}
        <h1 className="text-4xl text-center">What is your body skin type?</h1>
        {/* Choice boxes */}
        <div className="flex gap-6 mt-12 flex-wrap justify-center max-w-[1000px]">
          <div onClick={() => setStep(step + 1)}>
            <ChoiceBox
              img={normalBody}
              text={'Normal'}
              description={'(Nothing to be worried about)'}
              setTarget={setBodyType}
            />
          </div>
          <div onClick={() => setStep(step + 1)}>
            <ChoiceBox
              img={oilySkin}
              text={'Oily'}
              description={'(Produced excess oil)'}
              setTarget={setBodyType}
            />
          </div>
          <div onClick={() => setStep(step + 1)}>
            <ChoiceBox
              img={dryBody}
              text={'Dry'}
              description={'(Lacking too much water & oil)'}
              setTarget={setBodyType}
            />
          </div>
          <div onClick={() => setStep(step + 1)}>
            <ChoiceBox
              img={sensitiveBody}
              text={'Sensitive'}
              description={'(Stinging, burning, pain sensations)'}
              setTarget={setBodyType}
            />
          </div>
        </div>
      </div>
    </div>
  ) : step === 8 ? (
    <div className="h flex justify-center">
      <div className="mt-20 flex flex-col items-center">
        {/* Question */}
        <h1 className="text-4xl text-center">What are you worried about?</h1>
        {/* Choice boxes */}
        <div className="flex gap-6 mt-12 flex-wrap justify-center max-w-[900px]">
          <div onClick={() => setStep(step + 1)}>
            <ChoiceBox
              img={rashBody}
              text={'Rashness'}
              description={'(Fix embarassing skin rash)'}
              setTarget={setBodyConcern}
            />
          </div>

          <div onClick={() => setStep(step + 1)}>
            <ChoiceBox
              img={acneBody}
              text={'Acne issue'}
              description={'(Decrease the annoying acne)'}
              setTarget={setBodyConcern}
            />
          </div>

          <div onClick={() => setStep(step + 1)}>
            <ChoiceBox
              img={brightBody}
              text={'Brightening'}
              description={'(Make your skin glow)'}
              setTarget={setBodyConcern}
            />
          </div>
          <div onClick={() => setStep(step + 1)}>
            <ChoiceBox
              img={antiAgingSkin}
              text={'Anti aging'}
              description={'(Prevent aging to stay evergreen)'}
              setTarget={setBodyConcern}
            />
          </div>
        </div>
      </div>
    </div>
  ) : (
    <ShowProducts
      products={products}
      choiceList={choiceList}
      suggestion={suggestion}
      ingredients={ingredients}
    />
  );
};

export default BeautyCare;
