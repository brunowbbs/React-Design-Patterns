import { useState } from "react";
import { ControlledForm } from "./ControlledForm";
import { ControlledModal } from "./ControlledModal";
import { ControlledOnboardingFlow } from "./ControlledOnboardingFlow";
import { UncontrolledForm } from "./UncontrolledForm";
import { UncontrolledModal } from "./UncontrolledModal";

import { UncontrolledOnboardingFlow } from "./UncontrolledOnboardingFlow";

const StepOne = ({ goToNext }) => (
  <>
    <h1>Step 1</h1>
    <button onClick={() => goToNext({ name: "Wesley Bruno" })}>Next</button>
  </>
);
const StepTwo = ({ goToNext }) => (
  <>
    <h1>Step 2</h1>
    <button onClick={() => goToNext({ age: 100 })}>Next</button>
  </>
);
const StepThree = ({ goToNext }) => (
  <>
    <h1>Step 3</h1>
    <button onClick={() => goToNext({ hairColor: "brown" })}>Next</button>
  </>
);

//ControlledOnboardingFlow
function App() {
  //const [shouldShowModal, setShouldShowModal] = useState(false);

  const [onboardingData, setOnboardingData] = useState({});
  const [currentIndex, setCurrentIndex] = useState(0);

  const onNext = (stepData) => {
    setOnboardingData({ ...onboardingData, ...stepData });
    setCurrentIndex(currentIndex + 1);
  };

  return (
    <>
      <ControlledOnboardingFlow currentIndex={currentIndex} onNext={onNext}>
        <StepOne />
        <StepTwo />
        <StepThree />
      </ControlledOnboardingFlow>
      {/* <UncontrolledForm />
      <ControlledForm />
      <UncontrolledModal />
      <ControlledModal
        onRequestClose={() => setShouldShowModal(false)}
        shouldShow={shouldShowModal}
      />
      <button onClick={() => setShouldShowModal(!shouldShowModal)}>
        {shouldShowModal ? "Hide Modal" : "Show Modal"}
      </button> */}
    </>
  );
}

export default App;

//UncontrolledOnboardingFlow
function App2() {
  //const [shouldShowModal, setShouldShowModal] = useState(false);

  return (
    <>
      <UncontrolledOnboardingFlow
        onFinish={(data) => {
          console.log(data);
          alert("Onboarding flow finished");
        }}
      >
        <StepOne />
        <StepTwo />
        <StepThree />
      </UncontrolledOnboardingFlow>
      {/* <UncontrolledForm />
      <ControlledForm />
      <UncontrolledModal />
      <ControlledModal
        onRequestClose={() => setShouldShowModal(false)}
        shouldShow={shouldShowModal}
      />
      <button onClick={() => setShouldShowModal(!shouldShowModal)}>
        {shouldShowModal ? "Hide Modal" : "Show Modal"}
      </button> */}
    </>
  );
}
