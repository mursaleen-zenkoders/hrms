import CardFrame from '@/components/card/card-frame';
import Navbar from '@/components/navbar/navbar';

const Page = () => {
  return (
    <div className='space-y-5'>
      <Navbar heading='Dashboard' />
      <div className='columns-md gap-0'>
        {/* className='gap-5 grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 text-text-gray h-auto' */}
        <CardFrame className='text-lg m-3'>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aliquam
          incidunt id ea aperiam officia inventore dicta iusto quibusdam modi
          vitae, omnis laudantium optio libero ut laboriosam obcaecati quae?
        </CardFrame>
        <CardFrame className='text-lg m-3'>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aliquam
          incidunt id ea aperiam officia inventore dicta iusto quibusdam modi
          vitae, omnis laudantium optio libero ut laboriosam obcaecati quae?
          Amet dolorem, autem at ipsa quae facilis! Voluptate temporibus
          excepturi praesentium, quae, exercitationem accusantium, odio nam
          delectus impedit alias officia consequuntur asperiores.
        </CardFrame>
        <CardFrame className='text-lg m-3'>
          Lorem ipsum dolor sit, amet consectetur adipisicing
        </CardFrame>
        <CardFrame className='text-lg m-3'>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aliquam
          incidunt id ea aperiam officia inventore dicta iusto quibusdam modi
          vitae, omnis laudantium optio libero ut laboriosam obcaecati quae?
          Amet dolorem, autem at ipsa quae facilis! Voluptate temporibus
          excepturi praesentium, quae, exercitationem accusantium, odio nam
          delectus impedit alias officia consequuntur asperiores.
        </CardFrame>
        <CardFrame className='text-lg m-3'>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aliquam
          incidunt id ea aperiam officia inventore dicta iusto quibusdam modi
          vitae, omnis laudantium optio libero ut laboriosam obcaecati quae?
          Amet dolorem, autem at ipsa quae facilis! Voluptate temporibus
          excepturi praesentium, quae, exercit
        </CardFrame>
        <CardFrame className='text-lg m-3'>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aliquam
          incidunt id ea aperiam officia inventore dicta iusto quibusdam modi
          vitae, omnis laudantium
        </CardFrame>
        <CardFrame className='text-lg m-3'>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aliquam
          incidunt id ea aperiam officia inventore dicta iusto quibusdam modi
          vitae, omnis laudantium optio libero ut laboriosam obcaecati quae?
          Amet dolorem, autem at ipsa quae facilis! Voluptate temporibus
          excepturi praesentium, quae, exercitat
        </CardFrame>
        <CardFrame className='text-lg m-3'>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aliquam
          incidunt id ea aperiam officia inventore dicta iusto quibusdam modi
          vitae, omnis laudantium
        </CardFrame>
      </div>
    </div>
  );
};

export default Page;
