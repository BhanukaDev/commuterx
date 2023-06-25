import { IconBar } from '../components/Iconbar';
import { SideNavBar } from '../components/SideNavBar';
import { Tooltip } from '../components/Tooltip';

export const Home = () => {
  return (
    <>
      <SideNavBar />
      <IconBar />
      {/* This one here is for to test tooltip you continue this, I donno much */}
      <div className='h-screen w-screen flex items-center justify-center'>
        <Tooltip text={'Hello Guys'}>Hello</Tooltip>
      </div>
    </>
  );
};
