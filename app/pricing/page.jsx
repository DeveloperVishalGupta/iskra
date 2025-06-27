import Discribe from '../../components/discribe';
import { title } from '../../components/primitives';
import { HoverEffect } from '../../components/ui/card-hover-effect';
import { plansPricing } from '../../constant';

export default function PricingPage() {
  return (
    <div className="flex flex-col gap-y-20">
      <div className="">
        <div className="flex flex-col gap-5 px-12 py-8">
          <h1 className={`${title()} font-semibold`}>
            CHOOSE THE PERFECT PLAN TO MATCH YOUR GOALS
          </h1>
          <p className="text-lg font-semibold tracking-wide text-gray-400">
            {`  Wherever you are on your music journey, we've got a plan for you`}
          </p>
        </div>
        <div>
          <HoverEffect items={plansPricing} />
        </div>
      </div>

      <div>
        <Discribe />
      </div>
    </div>
  );
}
