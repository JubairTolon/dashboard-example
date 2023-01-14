import React, { FC } from 'react';
import './Dashboard.css';
import { FaUsers, FaUserCircle } from 'react-icons/fa';
import { AiFillPlusCircle } from 'react-icons/ai';
import { NavLink } from 'react-router-dom';
import Day from './Day';

const Dashboard: FC = () => {
    let totalTask: number = 100;
    let completedTask: number = 90;
    let inProgressTask: number = 60;
    let pendingTask: number = 30;
    const completed: number = completedTask * 100 / totalTask;
    const process: number = inProgressTask * 100 / totalTask;
    const pending: number = pendingTask * 100 / totalTask;

    return (
        <div className='dashboard__container'>
            <h1 className='dashboard__heading'>Dashboard</h1>
            <h1 className='company__status__heading'>Company status</h1>
            <div className='company__status__card'>
                <div className='single__card'>
                    <div className='card__heading'>
                        <span className='text-md mr-1.5 text-gray-700'><FaUsers /></span>
                        <span className=''>Total Employee</span>
                    </div>
                    <div className='employee__box'>
                        <span className='text-4xl font-bold'>415</span>
                        <button className='viewAll__button'>view all</button>
                    </div>
                    <div className='card__devider'></div>
                    <div className='employees__avatar'>
                        <span className='text-2xl absolute ml-0 z-0 text-orange-500'><FaUserCircle /></span>
                        <span className='text-2xl absolute ml-4 z-10 text-green-500'><FaUserCircle /></span>
                        <span className='text-2xl absolute ml-8 z-20 text-blue-500'><FaUserCircle /></span>
                        <span className='text-2xl absolute ml-12 z-30 text-orange-500'><FaUserCircle /></span>
                        <span className='text-2xl absolute ml-16 z-40 text-green-500'><FaUserCircle /></span>
                        <span className='text-2xl absolute ml-20 z-50'><AiFillPlusCircle /></span>
                    </div>
                </div>
                <div className='single__card'>
                    <div className='card__heading'>
                        <span className='text-md mr-1.5 text-gray-700'><FaUsers /></span>
                        <span className=''>Attend Today</span>
                    </div>
                    <div className='employee__box'>
                        <span className='text-4xl font-bold'>420</span>
                        <button className='viewAll__button'>view all</button>
                    </div>
                    <div className='card__devider'></div>
                    <div className='employees__avatar'>
                        <span className='text-2xl absolute ml-0 z-0 text-orange-500'><FaUserCircle /></span>
                        <span className='text-2xl absolute ml-4 z-10 text-green-500'><FaUserCircle /></span>
                        <span className='text-2xl absolute ml-8 z-20 text-blue-500'><FaUserCircle /></span>
                        <span className='text-2xl absolute ml-12 z-30 text-orange-500'><FaUserCircle /></span>
                        <span className='text-2xl absolute ml-16 z-40 text-green-500'><FaUserCircle /></span>
                        <span className='text-2xl absolute ml-20 z-50'><AiFillPlusCircle /></span>
                    </div>
                </div>
                <div className='single__card'>
                    <div className='card__heading'>
                        <span className='text-md mr-1.5 text-gray-700'><FaUsers /></span>
                        <span className=''>Employees on Leave</span>
                    </div>
                    <div className='employee__box'>
                        <span className='text-4xl font-bold'>15</span>
                        <button className='viewAll__button'>view all</button>
                    </div>
                    <div className='card__devider'></div>
                    <div className='employees__avatar'>
                        <span className='text-2xl absolute ml-0 z-0 text-orange-500'><FaUserCircle /></span>
                        <span className='text-2xl absolute ml-4 z-10 text-green-500'><FaUserCircle /></span>
                        <span className='text-2xl absolute ml-8 z-20 text-blue-500'><FaUserCircle /></span>
                        <span className='text-2xl absolute ml-12 z-30 text-orange-500'><FaUserCircle /></span>
                        <span className='text-2xl absolute ml-16 z-40 text-green-500'><FaUserCircle /></span>
                        <span className='text-2xl absolute ml-20 z-50'><AiFillPlusCircle /></span>
                    </div>
                </div>
                <div className='single__card'>
                    <div className='card__heading'>
                        <span className='text-md mr-1.5 text-gray-700'><FaUsers /></span>
                        <span className=''>New Expense Request</span>
                    </div>
                    <div className='employee__box'>
                        <span className='text-4xl font-bold'>5</span>
                        <button className='viewAll__button'>view all</button>
                    </div>
                    <div className='card__devider'></div>
                    <div className='employees__avatar'>
                        <span className='text-2xl absolute ml-0 z-0 text-orange-500'><FaUserCircle /></span>
                        <span className='text-2xl absolute ml-4 z-10 text-green-500'><FaUserCircle /></span>
                        <span className='text-2xl absolute ml-8 z-20 text-blue-500'><FaUserCircle /></span>
                        <span className='text-2xl absolute ml-12 z-30 text-orange-500'><FaUserCircle /></span>
                        <span className='text-2xl absolute ml-16 z-40 text-green-500'><FaUserCircle /></span>
                        <span className='text-2xl absolute ml-20 z-50'><AiFillPlusCircle /></span>
                    </div>
                </div>
            </div>
            <div className='expense__task_card'>
                <div className='expense__card'>
                    <h1 className='expense__task__heading'>Expense Report</h1>
                    <div className='expense__body'>
                        <div className='chart__heading'>
                            <div className='nav__links'>
                                <NavLink
                                    to="/"
                                    className={({ isActive }) => (isActive ? "link__active" : "")}
                                >Day
                                </NavLink>
                                <NavLink
                                    to='/'
                                    className={({ isActive }) => (isActive ? "link-active" : "")}
                                >Week
                                </NavLink>
                                <NavLink
                                    to="/"
                                    className={({ isActive }) => (isActive ? "link-active" : "")}
                                >Month
                                </NavLink>
                                <NavLink
                                    to="/"
                                    className={({ isActive }) => (isActive ? "link-active" : "")}
                                >Year
                                </NavLink>
                            </div>
                            <div className='export__details'>
                                <button>Export Details</button>
                            </div>
                        </div>
                        <div className='expense__amount'>
                            <span>৳45,000</span>
                        </div>
                        <Day />
                    </div>
                </div>
                <div className='task__card'>
                    <h1 className='expense__task__heading'>Task Summary</h1>
                    <div className='task__body'>
                        <h1 className='task__body__heading'>Total task</h1>
                        <h1 className='task__number'>112</h1>
                        <div className='prog__container'>
                            <h1 className='prog__heading'>Completed</h1>
                            <div className='progress__box'>
                                <div style={{ width: `${completed}%` }} className='progress'></div>
                                <div className='progress_count'>
                                    <span>{completedTask}/</span>
                                    <span className=' text-black'>{totalTask}</span>
                                </div>
                            </div>
                        </div>
                        <div className='prog__container'>
                            <h1 className='prog__heading'>In Progress</h1>
                            <div className='progress__box'>
                                <div style={{ width: `${process}%` }} className='progress'></div>
                                <div className='progress_count'>
                                    <span>{inProgressTask}/</span>
                                    <span className=' text-black'>{totalTask}</span>
                                </div>
                            </div>
                        </div>
                        <div className='prog__container'>
                            <h1 className='prog__heading'>Pending</h1>
                            <div className='progress__box'>
                                <div style={{ width: `${pending}%` }} className='progress'></div>
                                <div className='progress_count'>
                                    <span>{completedTask}/</span>
                                    <span className=' text-black'>{totalTask}</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Dashboard;