import React, { FC } from 'react';
import './Attendance.css';
import { Employee } from './ModelTypes';



const Attendance: FC = () => {
    const employees: Employee[] = [
        {
            name: 'amin',
            department: 'swing',
            checkIn: '10:10am',
            checkOut: '05:10pm',
            remark: true,
            hours: '32:40h',
            overtime: '20:30h',
            action: '',
        },
        {
            name: 'amin',
            department: 'swing',
            checkIn: '10:10am',
            checkOut: '05:10pm',
            remark: false,
            hours: '32:40h',
            overtime: '20:30h',
            action: '',
        },
        {
            name: 'amin',
            department: 'swing',
            checkIn: '10:10am',
            checkOut: '05:10pm',
            remark: true,
            hours: '32:40h',
            overtime: '20:30h',
            action: '',
        },
        {
            name: 'amin',
            department: 'swing',
            checkIn: '10:10am',
            checkOut: '05:10pm',
            remark: false,
            hours: '32:40h',
            overtime: '20:30h',
            action: '',
        },
    ];

    return (
        <div className='attendance__container'>
            <div className='attendance__header'>
                <h1 className='dashboard__heading'>Attendance</h1>
                <button className=''>Download Report</button>
                <span>
                    <svg width="42" height="40" viewBox="0 0 42 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M40.6758 15.7414C40.6311 15.5405 40.5439 15.3514 40.4199 15.1871C40.2959 15.0228 40.138 14.8871 39.957 14.7891L35.6805 12.4172C35.4529 11.95 35.2013 11.5008 34.9258 11.0695L34.9977 6.18202C34.9993 5.97702 34.9587 5.77388 34.8783 5.58529C34.7979 5.3967 34.6795 5.22671 34.5305 5.08593C32.4011 3.1553 29.8829 1.7032 27.1453 0.827333C26.9487 0.766033 26.7413 0.747148 26.5369 0.771928C26.3325 0.796708 26.1356 0.864589 25.9594 0.971084L21.7727 3.48671C21.2516 3.46874 20.7484 3.46874 20.2273 3.48671L16.0406 0.971084C15.8644 0.864589 15.6675 0.796708 15.4631 0.771928C15.2586 0.747148 15.0513 0.766033 14.8547 0.827333C12.1135 1.70386 9.59421 3.16271 7.46953 5.1039C7.3192 5.23983 7.19973 5.40639 7.11915 5.59235C7.03856 5.77832 6.99873 5.97938 7.00234 6.18202L7.09218 11.0695C6.80468 11.5008 6.55312 11.95 6.30156 12.4172L2.04296 14.7891C1.8597 14.8841 1.70003 15.019 1.57566 15.1838C1.45129 15.3486 1.36538 15.5391 1.32421 15.7414C0.713218 18.5476 0.713218 21.4524 1.32421 24.2586C1.36885 24.4595 1.45612 24.6485 1.58012 24.8128C1.70412 24.9771 1.86196 25.1129 2.04296 25.2109L6.31953 27.5828C6.54878 28.0477 6.80683 28.4978 7.09218 28.9305L7.00234 33.818C7.00069 34.023 7.04133 34.2261 7.12172 34.4147C7.2021 34.6033 7.3205 34.7733 7.46953 34.9141C9.60183 36.8406 12.1191 38.2922 14.8547 39.1726C15.0513 39.2339 15.2586 39.2528 15.4631 39.2281C15.6675 39.2033 15.8644 39.1354 16.0406 39.0289L20.2273 36.5133H21.7727L25.9773 39.0289C26.1959 39.1726 26.4525 39.2477 26.7141 39.2445C26.8602 39.2382 27.005 39.2141 27.1453 39.1726C29.8865 38.2961 32.4058 36.8373 34.5305 34.8961C34.6808 34.7601 34.8003 34.5936 34.8808 34.4076C34.9614 34.2217 35.0013 34.0206 34.9977 33.818L34.9258 28.9305C35.1953 28.4992 35.4469 28.05 35.6984 27.5828L39.975 25.2109C40.1534 25.1119 40.3083 24.9755 40.4293 24.8112C40.5502 24.6468 40.6343 24.4584 40.6758 24.2586C41.2868 21.4524 41.2868 18.5476 40.6758 15.7414ZM28.9062 20C28.9062 21.5637 28.4426 23.0923 27.5738 24.3925C26.7051 25.6926 25.4703 26.706 24.0256 27.3044C22.5809 27.9028 20.9912 28.0594 19.4576 27.7543C17.9239 27.4493 16.5151 26.6963 15.4094 25.5906C14.3037 24.4848 13.5507 23.0761 13.2457 21.5424C12.9406 20.0088 13.0972 18.4191 13.6956 16.9744C14.294 15.5297 15.3073 14.2949 16.6075 13.4262C17.9077 12.5574 19.4363 12.0937 21 12.0937C23.0969 12.0937 25.1078 12.9267 26.5906 14.4094C28.0733 15.8921 28.9062 17.9031 28.9062 20Z" fill="#1E2772" />
                    </svg>
                </span>
            </div>
            <form>
                <div className='input__box1'>
                    <input className='data__select' type="date" placeholder='Date' />
                    <select className='data__select'>
                        <option value="" disabled selected>Department</option>
                        <option value="hurr">CSE</option>
                        <option value="hurr">EEE</option>
                    </select>
                    <select className='data__select'>
                        <option value="" disabled selected>Attendance</option>
                        <option value="hurr">1</option>
                        <option value="hurr">2</option>
                        <option value="hurr">3</option>
                    </select>
                    <select className='data__select'>
                        <option value="" disabled selected>Present</option>
                        <option value="hurr">hello</option>
                        <option value="hurr">hello</option>
                    </select>
                    <select className='data__select'>
                        <option value="" disabled selected>Check In</option>
                        <option value="hurr">Shukrabd</option>
                        <option value="hurr">Shukrabd</option>
                        <option value="hurr">Shukrabd</option>
                    </select>
                    <select className='data__select'>
                        <option value="" disabled selected>Location</option>
                        <option value="hurr">Dhaka</option>
                        <option value="hurr">Chottogram</option>
                    </select>
                    <select className='data__select'>
                        <option value="" disabled selected>Designation</option>
                        <option value="hurr">Mr.</option>
                        <option value="hurr">Mrs.</option>
                    </select>
                    <select className='data__select'>
                        <option value="" disabled selected>Department</option>
                        <option value="hurr">CSE</option>
                        <option value="hurr">EEE</option>
                    </select>
                </div>
            </form>
            <div className='empleyee__info__table'>
                <table>
                    <thead>
                        <tr>
                            <th><input type="checkbox" name="" id="" /></th>
                            <th>Employee Name</th>
                            <th>Department</th>
                            <th>Check In</th>
                            <th>Check Out</th>
                            <th>Remark</th>
                            <th>Hours</th>
                            <th>Overtime</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            employees.map(emp => <tr>
                                <th><input type="checkbox" name="" id="" /></th>
                                <td className='capitalize'>{emp.name}</td>
                                <td className='capitalize'>{emp.department}</td>
                                <td><div className='bg-green-400 max-w-fit px-2 py-1 text-white rounded-xl'>{emp.checkIn}</div></td>
                                <td><div className='bg-red-400 max-w-fit px-2 py-1 text-white rounded-xl'>{emp.checkOut}</div></td>
                                <td>{emp.remark}</td>
                                <td>{emp.hours}</td>
                                <td>{emp.overtime}</td>
                                <td>{emp.action}</td>
                            </tr>)
                        }

                    </tbody>
                    <div className='pagination'>
                        <span>
                            <svg width="5" height="8" viewBox="0 0 5 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M4.24175 7.45097C3.99767 7.69505 3.60194 7.69505 3.35786 7.45097L0.232863 4.32597C-0.0112149 4.0819 -0.0112149 3.68617 0.232863 3.44209L3.35786 0.317091C3.60194 0.0730132 3.99767 0.0730133 4.24175 0.317091C4.48582 0.561169 4.48582 0.956897 4.24175 1.20097L1.55869 3.88403L4.24175 6.56709C4.48582 6.81117 4.48582 7.2069 4.24175 7.45097Z" fill="#1C1C1C" />
                            </svg>
                        </span>
                        <span>1</span>
                        <span>2</span>
                        <span>3</span>
                        <span>4</span>
                        <span>5</span>
                        <span>
                            <svg width="5" height="8" viewBox="0 0 5 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M0.232863 0.317091C0.476941 0.0730138 0.872669 0.0730138 1.11675 0.317091L4.24175 3.44209C4.48582 3.68617 4.48582 4.0819 4.24175 4.32597L1.11675 7.45097C0.872669 7.69505 0.476941 7.69505 0.232863 7.45097C-0.0112147 7.2069 -0.0112147 6.81117 0.232863 6.56709L2.91592 3.88403L0.232863 1.20097C-0.0112147 0.956897 -0.0112147 0.561169 0.232863 0.317091Z" fill="#1C1C1C" />
                            </svg>
                        </span>
                    </div>
                </table>
            </div>
        </div>
    );
};

export default Attendance;