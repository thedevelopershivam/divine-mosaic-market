import React from 'react'
import { cn } from '@/lib/utils'
import { Check } from 'lucide-react'

interface StepperStep {
  id: string
  title: string
  description?: string
  isCompleted?: boolean
  isActive?: boolean
}

interface StepperProps {
  steps: StepperStep[]
  currentStep: number
  orientation?: 'horizontal' | 'vertical'
  className?: string
}

export const Stepper: React.FC<StepperProps> = ({
  steps,
  currentStep,
  orientation = 'horizontal',
  className
}) => {
  return (
    <div
      className={cn(
        'flex',
        orientation === 'horizontal' ? 'flex-row items-center' : 'flex-col',
        className
      )}
    >
      {steps.map((step, index) => {
        const isCompleted = index < currentStep
        const isActive = index === currentStep
        const isLast = index === steps.length - 1

        return (
          <div
            key={step.id}
            className={cn(
              'flex items-center',
              orientation === 'vertical' && 'w-full'
            )}
          >
            <div className="flex items-center">
              {/* Step Circle */}
              <div
                className={cn(
                  'flex h-10 w-10 items-center justify-center rounded-full border-2 transition-colors',
                  isCompleted
                    ? 'border-primary bg-primary text-primary-foreground'
                    : isActive
                    ? 'border-primary bg-background text-primary'
                    : 'border-muted bg-background text-muted-foreground'
                )}
              >
                {isCompleted ? (
                  <Check className="h-5 w-5" />
                ) : (
                  <span className="text-sm font-medium">{index + 1}</span>
                )}
              </div>

              {/* Step Content */}
              {orientation === 'vertical' && (
                <div className="ml-4 flex-1">
                  <h3
                    className={cn(
                      'text-sm font-medium',
                      isActive
                        ? 'text-primary'
                        : isCompleted
                        ? 'text-foreground'
                        : 'text-muted-foreground'
                    )}
                  >
                    {step.title}
                  </h3>
                  {step.description && (
                    <p className="text-xs text-muted-foreground">
                      {step.description}
                    </p>
                  )}
                </div>
              )}
            </div>

            {/* Connector Line */}
            {!isLast && (
              <div
                className={cn(
                  orientation === 'horizontal'
                    ? 'h-[2px] w-full mx-4'
                    : 'w-[2px] h-8 ml-5 my-2',
                  isCompleted || (isActive && index < currentStep)
                    ? 'bg-primary'
                    : 'bg-muted'
                )}
              />
            )}

            {/* Horizontal Step Content */}
            {orientation === 'horizontal' && (
              <div className="text-center -mt-2">
                <h3
                  className={cn(
                    'text-xs font-medium',
                    isActive
                      ? 'text-primary'
                      : isCompleted
                      ? 'text-foreground'
                      : 'text-muted-foreground'
                  )}
                >
                  {step.title}
                </h3>
                {step.description && (
                  <p className="text-xs text-muted-foreground">
                    {step.description}
                  </p>
                )}
              </div>
            )}
          </div>
        )
      })}
    </div>
  )
}

export default Stepper