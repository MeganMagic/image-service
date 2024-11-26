import { Fragment } from "react";
import { Check } from "react-feather";
import cn from "classnames";

export interface Step {
  index: number;
  label: string;
  onClick: () => void;
}

interface ProgressStepperProps {
  currentStepIndex: number;
  steps: Step[];
}

const ProgressStepper = ({ steps, currentStepIndex }: ProgressStepperProps) => {
  return (
    <ul id="progress-stepper" className="relative w-full flex items-center">
      {steps.map((step, index) => {
        const isStepDone = step.index < currentStepIndex;
        const isCurrentStep = step.index === currentStepIndex;

        return (
          <Fragment key={`progress-step-${step.index}`}>
            <li onClick={step.onClick} className={"relative group"}>
              <div
                className={cn(
                  "w-6 h-6 rounded-full flex justify-center items-center",
                  isStepDone || isCurrentStep ? "bg-slate-900" : "bg-slate-300"
                )}
              >
                {isStepDone ? (
                  <Check className="w-4 h-4 text-white" />
                ) : (
                  <span className="text-base text-white">{step.index}</span>
                )}
              </div>
            </li>
            {index !== steps.length - 1 && (
              <div
                className={cn(
                  "w-full h-1",
                  isStepDone ? "bg-slate-900" : "bg-slate-300"
                )}
              />
            )}
          </Fragment>
        );
      })}
    </ul>
  );
};

export default ProgressStepper;
