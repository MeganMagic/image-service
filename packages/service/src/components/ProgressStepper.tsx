import { Fragment } from "react";
import { Check } from "react-feather";
import cn from "classnames";

export interface Step {
  index: number;
  label: string;
  onClick: () => void;
  renderIcon: (options: { className: string }) => JSX.Element;
}

interface ProgressStepperProps {
  currentStepIndex: number;
  steps: Step[];
}

const ProgressStepper = ({ steps, currentStepIndex }: ProgressStepperProps) => {
  return (
    <ul
      id="progress-stepper"
      className="relative w-full flex gap-3 items-center"
    >
      {steps.map((step, index) => {
        const isStepDone = step.index < currentStepIndex;
        const isCurrentStep = step.index === currentStepIndex;

        return (
          <Fragment key={`progress-step-${step.index}`}>
            <li onClick={step.onClick} className={"relative"}>
              <div
                className={cn(
                  "w-8 h-8 rounded-full flex justify-center items-center",
                  isStepDone || isCurrentStep
                    ? "bg-emerald-500"
                    : "bg-slate-300"
                )}
              >
                {isStepDone ? (
                  <Check className="w-4 h-4 text-white" />
                ) : (
                  step.renderIcon({
                    className: "w-4 h-4 text-white",
                  })
                )}
              </div>
              <div>
                {isCurrentStep && (
                  <span
                    className={cn(
                      "absolute top-full mt-1 text-xs font-medium whitespace-nowrap",
                      isStepDone || isCurrentStep
                        ? "text-emerald-500"
                        : "text-slate-300"
                    )}
                  >
                    {step.label}
                  </span>
                )}
              </div>
            </li>
            {index !== steps.length - 1 && (
              <div
                className={cn(
                  "w-full h-1",
                  isStepDone ? "bg-emerald-500" : "bg-slate-300"
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
