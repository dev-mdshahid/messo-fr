import React from 'react';
import { useState } from 'react';
import ChoiceBox from '../../components/Shared/ChoiceBox';

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
import dullSkin from '../../media/img/icons/dull_skin.png';
import brightSkin from '../../media/img/icons/bright_skin.png';
import antiAgingSkin from '../../media/img/icons/anti_aging_skin.png';
import blemishSkin from '../../media/img/icons/blemish_skin.png';

const BeautyCare = () => {
  const [step, setStep] = useState(1);
  const [type, setType] = useState();
  const choiceIconDesign = 'text-6xl m-auto mb-3';
  return step === 1 ? (
    <div>
      <div className="h flex justify-center">
        {/* Vegetarian or non vegetarian check */}
        <div className="mt-20">
          {/* Question */}
          <h1 className="text-4xl text-center">What is it about?</h1>
          {/* Choice boxes */}
          <div className="flex gap-6 mt-12">
            <div onClick={() => setStep(step + 1)}>
              <ChoiceBox
                img={hair}
                text={'Hair Care'}
                description={'(Concerned about your hair)'}
                setTarget={setType}
              />
            </div>
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
          <div onClick={() => setStep(step + 1)}>
            <ChoiceBox
              img={bodySkin}
              text={'Body'}
              description={'(Treat your body skin)'}
              setTarget={setType}
            />
          </div>
          <div onClick={() => setStep(step + 1)}>
            <ChoiceBox
              img={faceSkin}
              text={'Face'}
              description={'(Treat your facial skin)'}
              setTarget={setType}
            />
          </div>
        </div>
      </div>
    </div>
  ) : step === 3 ? (
    <div className="h flex justify-center">
      {/* Vegetarian or non vegetarian check */}
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
              setTarget={setType}
            />
          </div>
          <div onClick={() => setStep(step + 1)}>
            <ChoiceBox
              img={oilySkin}
              text={'Oily'}
              description={'(Produced excess oil)'}
              setTarget={setType}
            />
          </div>
          <div onClick={() => setStep(step + 1)}>
            <ChoiceBox
              img={drySkin}
              text={'Dry'}
              description={'(Lacking too much water & oil)'}
              setTarget={setType}
            />
          </div>
          <div onClick={() => setStep(step + 1)}>
            <ChoiceBox
              img={combinationalSkin}
              text={'Combinational'}
              description={'(Oily only on nose and forehead)'}
              setTarget={setType}
            />
          </div>
          <div onClick={() => setStep(step + 1)}>
            <ChoiceBox
              img={sensitiveSkin}
              text={'Sensitive'}
              description={'(Stinging, burning, pain sensations)'}
              setTarget={setType}
            />
          </div>
        </div>
      </div>
    </div>
  ) : (
    <div className="h flex justify-center">
      {/* Vegetarian or non vegetarian check */}
      <div className="mt-20 flex flex-col items-center">
        {/* Question */}
        <h1 className="text-4xl text-center">What are you worried about?</h1>
        {/* Choice boxes */}
        <div className="flex gap-6 mt-12 flex-wrap justify-center max-w-[900px]">
          <div onClick={() => setStep(step + 1)}>
            <ChoiceBox
              img={rashSkin}
              text={'Rashness'}
              description={'(Fix embarassing skin rash)'}
              setTarget={setType}
            />
          </div>

          <div onClick={() => setStep(step + 1)}>
            <ChoiceBox
              img={dullSkin}
              text={'Dullness'}
              description={'(Fix your boring dull skin)'}
              setTarget={setType}
            />
          </div>

          <div onClick={() => setStep(step + 1)}>
            <ChoiceBox
              img={acneSkin}
              text={'Acne issue'}
              description={'(Decrease the annoying acne)'}
              setTarget={setType}
            />
          </div>

          <div onClick={() => setStep(step + 1)}>
            <ChoiceBox
              img={brightSkin}
              text={'Brghtening'}
              description={'(Make your skin glow)'}
              setTarget={setType}
            />
          </div>
          <div onClick={() => setStep(step + 1)}>
            <ChoiceBox
              img={antiAgingSkin}
              text={'Anti aging'}
              description={'(Prevent aging to stay evergreen)'}
              setTarget={setType}
            />
          </div>
          <div onClick={() => setStep(step + 1)}>
            <ChoiceBox
              img={blemishSkin}
              text={'Blemishes'}
              description={'(Fix blemishes on your skin)'}
              setTarget={setType}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default BeautyCare;
