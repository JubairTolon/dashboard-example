import React from 'react';
import { Link } from 'react-router-dom';
import { LinkType } from './ModelTypes';
import './Sidebar.css'
type Props = {
    links: LinkType[];
}
const Links = ({ links }: Props) => {
    return (
        <ul className='single__link__container'>
            {
                links.map((link) => {
                    return (
                        <li className={link.active ? 'active' : ''}>
                            <div className={link.active ? 'active__dot' : ''}></div>
                            <Link className='single__link' to={link.path}>
                                <svg width="26" height="22" viewBox="0 0 26 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M23.8893 0.794312H2.79431C2.2857 0.794312 1.79792 0.996357 1.43828 1.356C1.07863 1.71564 0.876587 2.20342 0.876587 2.71204V19.9716C0.876587 20.4802 1.07863 20.9679 1.43828 21.3276C1.79792 21.6872 2.2857 21.8893 2.79431 21.8893H23.8893C24.3979 21.8893 24.8857 21.6872 25.2453 21.3276C25.605 20.9679 25.807 20.4802 25.807 19.9716V2.71204C25.807 2.20342 25.605 1.71564 25.2453 1.356C24.8857 0.996357 24.3979 0.794312 23.8893 0.794312ZM2.79431 2.71204H23.8893V7.50635H2.79431V2.71204ZM23.8893 19.9716H11.4241V9.42407H23.8893V19.9716Z" fill="white" />
                                </svg>
                                {link.text}
                            </Link>
                        </li>
                    )
                })
            }
        </ul>
    );
};

export default Links;