import coverPic from './cover.jpg';

import { LuPartyPopper } from "react-icons/lu";

import BackgroundImageLayout from '@/components/BackgroundImageLayout';

import { mainMenuLinks } from '@/components/menu/menuData';

export default function ContactHeader() {
    return (
        <BackgroundImageLayout
            coverPic={coverPic}
            title={mainMenuLinks[3].title}
        >
            Pour tout projet, toute collaboration ou question : n'hésitez pas ! <LuPartyPopper className='inline' />
            <br />
            Retrouvez également l'ensemble de mes prestations ci-dessous.
        </BackgroundImageLayout>
    );
}