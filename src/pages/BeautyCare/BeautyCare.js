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

//Scalp type
import dryHair from '../../media/img/icons/dry_hair.png';
import sensitiveHair from '../../media/img/icons/sensitive_hair.png';

//Hair concern \
import hairFall from '../../media/img/icons/hairFall_hair.png';
import hairGrowth from '../../media/img/icons/hairGrowth_hair.png';
import rebonded from '../../media/img/icons/rebonded_hair.png';
import colored from '../../media/img/icons/colored_hair.png';
import dandruff from '../../media/img/icons/dandruff_hair.png';

const BeautyCare = () => {
  const [step, setStep] = useState(1);
  const [type, setType] = useState();
  const [scalpType, setScalpType] = useState();
  const [hairConcern, setHairConcern] = useState();
  const [skinPart, setSkinPart] = useState();
  const [faceType, setFaceType] = useState();
  const [faceConcern, setFaceConcern] = useState();
  const [bodyType, setBodyType] = useState();
  const [bodyConcern, setBodyConcern] = useState();

  return step === 1 ? (
    <div>
      <div className="h flex justify-center">
        {/* Vegetarian or non vegetarian check */}
        <div className="mt-20">
          {/* Question */}
          <h1 className="text-4xl text-center">What is it about?</h1>
          {/* Choice boxes */}
          <div className="flex gap-6 mt-12">
            <div onClick={() => setStep(5)}>
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
      </div>
    </div>
  ) : step === 4 ? (
    <div className="h flex justify-center">
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
              setTarget={setFaceConcern}
            />
          </div>

          <div onClick={() => setStep(step + 1)}>
            <ChoiceBox
              img={dullSkin}
              text={'Dullness'}
              description={'(Fix your boring dull skin)'}
              setTarget={setFaceConcern}
            />
          </div>

          <div onClick={() => setStep(step + 1)}>
            <ChoiceBox
              img={acneSkin}
              text={'Acne issue'}
              description={'(Decrease the annoying acne)'}
              setTarget={setFaceConcern}
            />
          </div>

          <div onClick={() => setStep(step + 1)}>
            <ChoiceBox
              img={brightSkin}
              text={'Brghtening'}
              description={'(Make your skin glow)'}
              setTarget={setFaceConcern}
            />
          </div>
          <div onClick={() => setStep(step + 1)}>
            <ChoiceBox
              img={antiAgingSkin}
              text={'Anti aging'}
              description={'(Prevent aging to stay evergreen)'}
              setTarget={setFaceConcern}
            />
          </div>
          <div onClick={() => setStep(step + 1)}>
            <ChoiceBox
              img={blemishSkin}
              text={'Blemishes'}
              description={'(Fix blemishes on your skin)'}
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
              setTarget={setFaceType}
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
          <div onClick={() => setStep(step + 1)}>
            <ChoiceBox
              img={hairFall}
              text={'Hair fall'}
              description={'(Stop unstoppable hair fall)'}
              setTarget={setHairConcern}
            />
          </div>

          <div onClick={() => setStep(step + 1)}>
            <ChoiceBox
              img={hairGrowth}
              text={'Hair growth'}
              description={'(Grow your hair)'}
              setTarget={setHairConcern}
            />
          </div>

          <div onClick={() => setStep(step + 1)}>
            <ChoiceBox
              img={rebonded}
              text={'Rebonded hair'}
              description={'(Straghten your curly hair)'}
              setTarget={setHairConcern}
            />
          </div>

          <div onClick={() => setStep(step + 1)}>
            <ChoiceBox
              img={colored}
              text={'Colored hair'}
              description={'(Make your hair colorful)'}
              setTarget={setHairConcern}
            />
          </div>
          <div onClick={() => setStep(step + 1)}>
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
  ) : (
    <div>Here is your suggestion</div>
  );
};

export default BeautyCare;
