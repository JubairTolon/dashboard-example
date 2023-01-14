import React from 'react';
import './Dashboard.css';

const Day = () => {
    return (
        <div className='flex relative flex-col'>
            <svg width="237" height="142" viewBox="0 0 237 142" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M26.4992 57C10.0772 57 19.0346 21.5 0 21.5V141.5H237V0C196.691 0 188.854 96.5 153.77 96.5C118.687 96.5 133.989 13.5 107.117 13.5C80.2441 13.5 42.9213 57 26.4992 57Z" fill="url(#paint0_linear_1079_21)" />
                <defs>
                    <linearGradient id="paint0_linear_1079_21" x1="118.5" y1="-47" x2="118.5" y2="141.5" gradientUnits="userSpaceOnUse">
                        <stop stop-color="#1E2772" />
                        <stop offset="1" stop-color="white" stop-opacity="0" />
                    </linearGradient>
                </defs>
            </svg>

            <svg className='chart__second absolute' width="237" height="142" viewBox="0 0 237 142" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M26.4992 57C10.0772 57 19.0346 21.5 0 21.5V141.5H237V0C196.691 0 188.854 96.5 153.77 96.5C118.687 96.5 133.989 13.5 107.117 13.5C80.2441 13.5 42.9213 57 26.4992 57Z" fill="url(#paint0_linear_623_1000)" />
                <defs>
                    <linearGradient id="paint0_linear_623_1000" x1="118.5" y1="-47" x2="118.5" y2="141.5" gradientUnits="userSpaceOnUse">
                        <stop stop-color="#1E2772" />
                        <stop offset="1" stop-color="white" stop-opacity="0" />
                    </linearGradient>
                </defs>
            </svg>
            <div className='point_names'>
                <span>Nov 1</span>
                <span>Nov 4</span>
                <span>Nov 8</span>
                <span>Nov 12</span>
                <span>Nov 16</span>
                <span>Nov 20</span>
                <span>Nov 24</span>
                <span>Nov 28</span>
                <span>Nov 30</span>
            </div>
        </div>
    );
};

export default Day;