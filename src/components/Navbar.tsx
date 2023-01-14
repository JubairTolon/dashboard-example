import React from 'react';
import './Navbar.css'
const Navbar = () => {
    return (
        <nav className='nav__container'>
            <div className='seardh__box'>
                <input className='search__input' type="text" placeholder='Search' />
                <svg className='search__icon' width="19" height="19" viewBox="0 0 19 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M8 16C9.77498 15.9996 11.4988 15.4054 12.897 14.312L17.293 18.708L18.707 17.294L14.311 12.898C15.405 11.4997 15.9996 9.77544 16 8C16 3.589 12.411 0 8 0C3.589 0 0 3.589 0 8C0 12.411 3.589 16 8 16ZM8 2C11.309 2 14 4.691 14 8C14 11.309 11.309 14 8 14C4.691 14 2 11.309 2 8C2 4.691 4.691 2 8 2Z" fill="#A49999" />
                </svg>
            </div>
            <div className='profile__box'>
                <span className='calender'>
                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M10 12C10.1978 12 10.3911 11.9414 10.5556 11.8315C10.72 11.7216 10.8482 11.5654 10.9239 11.3827C10.9996 11.2 11.0194 10.9989 10.9808 10.8049C10.9422 10.6109 10.847 10.4327 10.7071 10.2929C10.5673 10.153 10.3891 10.0578 10.1951 10.0192C10.0011 9.98063 9.80004 10.0004 9.61732 10.0761C9.43459 10.1518 9.27841 10.28 9.16853 10.4444C9.05865 10.6089 9 10.8022 9 11C9 11.2652 9.10536 11.5196 9.29289 11.7071C9.48043 11.8946 9.73478 12 10 12ZM15 12C15.1978 12 15.3911 11.9414 15.5556 11.8315C15.72 11.7216 15.8482 11.5654 15.9239 11.3827C15.9996 11.2 16.0194 10.9989 15.9808 10.8049C15.9422 10.6109 15.847 10.4327 15.7071 10.2929C15.5673 10.153 15.3891 10.0578 15.1951 10.0192C15.0011 9.98063 14.8 10.0004 14.6173 10.0761C14.4346 10.1518 14.2784 10.28 14.1685 10.4444C14.0586 10.6089 14 10.8022 14 11C14 11.2652 14.1054 11.5196 14.2929 11.7071C14.4804 11.8946 14.7348 12 15 12ZM10 16C10.1978 16 10.3911 15.9414 10.5556 15.8315C10.72 15.7216 10.8482 15.5654 10.9239 15.3827C10.9996 15.2 11.0194 14.9989 10.9808 14.8049C10.9422 14.6109 10.847 14.4327 10.7071 14.2929C10.5673 14.153 10.3891 14.0578 10.1951 14.0192C10.0011 13.9806 9.80004 14.0004 9.61732 14.0761C9.43459 14.1518 9.27841 14.28 9.16853 14.4444C9.05865 14.6089 9 14.8022 9 15C9 15.2652 9.10536 15.5196 9.29289 15.7071C9.48043 15.8946 9.73478 16 10 16ZM15 16C15.1978 16 15.3911 15.9414 15.5556 15.8315C15.72 15.7216 15.8482 15.5654 15.9239 15.3827C15.9996 15.2 16.0194 14.9989 15.9808 14.8049C15.9422 14.6109 15.847 14.4327 15.7071 14.2929C15.5673 14.153 15.3891 14.0578 15.1951 14.0192C15.0011 13.9806 14.8 14.0004 14.6173 14.0761C14.4346 14.1518 14.2784 14.28 14.1685 14.4444C14.0586 14.6089 14 14.8022 14 15C14 15.2652 14.1054 15.5196 14.2929 15.7071C14.4804 15.8946 14.7348 16 15 16ZM5 12C5.19778 12 5.39112 11.9414 5.55557 11.8315C5.72002 11.7216 5.84819 11.5654 5.92388 11.3827C5.99957 11.2 6.01937 10.9989 5.98079 10.8049C5.9422 10.6109 5.84696 10.4327 5.70711 10.2929C5.56725 10.153 5.38907 10.0578 5.19509 10.0192C5.00111 9.98063 4.80004 10.0004 4.61732 10.0761C4.43459 10.1518 4.27841 10.28 4.16853 10.4444C4.05865 10.6089 4 10.8022 4 11C4 11.2652 4.10536 11.5196 4.29289 11.7071C4.48043 11.8946 4.73478 12 5 12ZM17 2H16V1C16 0.734784 15.8946 0.48043 15.7071 0.292893C15.5196 0.105357 15.2652 0 15 0C14.7348 0 14.4804 0.105357 14.2929 0.292893C14.1054 0.48043 14 0.734784 14 1V2H6V1C6 0.734784 5.89464 0.48043 5.70711 0.292893C5.51957 0.105357 5.26522 0 5 0C4.73478 0 4.48043 0.105357 4.29289 0.292893C4.10536 0.48043 4 0.734784 4 1V2H3C2.20435 2 1.44129 2.31607 0.87868 2.87868C0.316071 3.44129 0 4.20435 0 5V17C0 17.7956 0.316071 18.5587 0.87868 19.1213C1.44129 19.6839 2.20435 20 3 20H17C17.7956 20 18.5587 19.6839 19.1213 19.1213C19.6839 18.5587 20 17.7956 20 17V5C20 4.20435 19.6839 3.44129 19.1213 2.87868C18.5587 2.31607 17.7956 2 17 2ZM18 17C18 17.2652 17.8946 17.5196 17.7071 17.7071C17.5196 17.8946 17.2652 18 17 18H3C2.73478 18 2.48043 17.8946 2.29289 17.7071C2.10536 17.5196 2 17.2652 2 17V8H18V17ZM18 6H2V5C2 4.73478 2.10536 4.48043 2.29289 4.29289C2.48043 4.10536 2.73478 4 3 4H17C17.2652 4 17.5196 4.10536 17.7071 4.29289C17.8946 4.48043 18 4.73478 18 5V6ZM5 16C5.19778 16 5.39112 15.9414 5.55557 15.8315C5.72002 15.7216 5.84819 15.5654 5.92388 15.3827C5.99957 15.2 6.01937 14.9989 5.98079 14.8049C5.9422 14.6109 5.84696 14.4327 5.70711 14.2929C5.56725 14.153 5.38907 14.0578 5.19509 14.0192C5.00111 13.9806 4.80004 14.0004 4.61732 14.0761C4.43459 14.1518 4.27841 14.28 4.16853 14.4444C4.05865 14.6089 4 14.8022 4 15C4 15.2652 4.10536 15.5196 4.29289 15.7071C4.48043 15.8946 4.73478 16 5 16Z" fill="#4F4747" />
                    </svg>

                </span>
                <span className='notification'>
                    <svg width="21" height="23" viewBox="0 0 21 23" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M9.72135 4.00302L8.25535 4.00002C4.91135 3.99202 2.00835 6.70902 1.98535 10V13.79C1.98535 14.58 1.88535 15.351 1.45435 16.008L1.16735 16.446C0.730354 17.11 1.20035 18 1.98535 18H16.0154C16.8004 18 17.2694 17.11 16.8334 16.446L16.5464 16.008C16.1164 15.351 16.0154 14.579 16.0154 13.789V10.001C15.9754 6.70902 13.0654 4.01102 9.72135 4.00302V4.00302Z" stroke="#4F4747" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                        <path d="M12.0004 18C12.0004 18.7956 11.6843 19.5587 11.1217 20.1213C10.5591 20.6839 9.79602 21 9.00037 21C8.20472 21 7.44165 20.6839 6.87905 20.1213C6.31644 19.5587 6.00037 18.7956 6.00037 18" stroke="#4F4747" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                        <path d="M9.00037 1C9.5308 1 10.0395 1.21071 10.4146 1.58579C10.7897 1.96086 11.0004 2.46957 11.0004 3V4H7.00037V3C7.00037 2.46957 7.21108 1.96086 7.58615 1.58579C7.96123 1.21071 8.46993 1 9.00037 1Z" stroke="#4F4747" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                        <ellipse cx="16.5" cy="19" rx="4.5" ry="4" fill="#FC0202" />
                    </svg>
                </span>
                <span>
                    <img className='profile__image' style={{ height: '65px', width: '65px' }} src="https://i.ibb.co/NpyJyYz/photo-1570295999919-56ceb5ecca61.jpg" alt="" />
                </span>
            </div>
        </nav>
    );
};

export default Navbar;