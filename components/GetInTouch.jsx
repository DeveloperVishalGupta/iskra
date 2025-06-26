import { title } from './primitives';
import { getInTouch } from '../constant';
import { CircleCheck } from '../assets/icons/icons';

function GetInTouch() {
  return (
    <div className="inline-flex flex-col">
      <h1 className={`${title({ size: 'sm' })} mb-9`}>Get In Touch</h1>
      <div>
        {getInTouch.map((item, index) => {
          return (
            <div key={index}>
              <div className="flex-start mb-4 flex gap-4 gap-y-4">
                <CircleCheck fill={'#fff'} size={'18'} />
                <p className="text-xl">{item.showText}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default GetInTouch;
