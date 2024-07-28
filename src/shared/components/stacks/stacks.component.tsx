
import Icon from '../icon';

export const Stacks = () => {
    return (
        <div className='w-2/3'>
            <ul className='flex gap-2 justify-end'>
                <li title='Angular'>
                    <Icon name="bxl-angular" size='30px' color='#fff'/>
                </li>
                <li title='Typescript'>
                    <Icon name="bxl-typescript" size='30px' color='#fff'/>
                </li>
                
                <li title='Git'>
                    <Icon name="bxl-git" size='30px' color='#fff'/>
                </li>

                <li title='TailwindCSS'>
                    <Icon name="bxl-tailwind-css" size='30px' color='#fff'/>
                </li>
            </ul>
        </div>
    );
}