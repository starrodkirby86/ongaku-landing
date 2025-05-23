import { guideSections } from './content/config';

const ContentsMenu = () => {
  return (
    <div>
      <h3 className='text-2xl font-semibold italic text-theme-02 text-center'>What kind of player are you?</h3>
      <div className='flex justify-center w-full py-4'>
        <ul className='menu menu-horizontal bg-base-200 rounded-box font-bold menu-lg'>
          {guideSections.map((section) => (
            <li key={section.id}>
              <a
                href={`#${section.id}`}
                className={`${section.color.bg} ${section.color.text} hover:bg-theme-01 hover:text-theme-03`}
              >
                {section.title}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default ContentsMenu;
