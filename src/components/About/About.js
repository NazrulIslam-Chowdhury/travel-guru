import React from 'react';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { FcAbout } from 'react-icons/fc';
import { FaHotel, FaBusAlt } from 'react-icons/fa';
import { CiPlane } from 'react-icons/ci';
import { MdTravelExplore } from 'react-icons/md';
import { RiGuideLine } from 'react-icons/ri';
import { GiReturnArrow } from 'react-icons/gi';

const About = () => {
    return (
        <div>
            <VerticalTimeline>
                <VerticalTimelineElement
                    className="vertical-timeline-element--work"
                    contentStyle={{ color: 'black' }}
                    contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
                    iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
                    icon={<FcAbout />}
                >
                    <h3 className="vertical-timeline-element-title text-3xl font-semibold font1">About Us</h3>
                    <p className='text-xl font1 font-semibold'>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo, itaque ipsum sint eligendi quibusdam ratione incidunt deleniti. Nam, quas mollitia?
                    </p>
                </VerticalTimelineElement>
                <VerticalTimelineElement
                    className="vertical-timeline-element--work"
                    date="1"
                    iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
                    icon={<CiPlane />}
                >
                    <h3 className="vertical-timeline-element-title text-3xl font-semibold font1">Our Service</h3>
                    <h4 className="vertical-timeline-element-subtitle
                    text-2xl font-semibold font1 text-sky-600">Air Ticket</h4>
                    <p className='text-xl font1 font-semibold'>
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Praesentium, incidunt?
                    </p>
                </VerticalTimelineElement>
                <VerticalTimelineElement
                    className="vertical-timeline-element--work"
                    date="2"
                    iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
                    icon={<FaBusAlt />}
                >
                    <h3 className="vertical-timeline-element-title text-3xl font-semibold font1">Our Service</h3>
                    <h4 className="vertical-timeline-element-subtitle text-sky-600 text-2xl font-semibold font1">Bus Ticket</h4>
                    <p className='text-xl font1 font-semibold'>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis, quia.
                    </p>
                </VerticalTimelineElement>
                <VerticalTimelineElement
                    className="vertical-timeline-element--work"
                    date="3"
                    iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
                    icon={<FaHotel />}
                >
                    <h3 className="vertical-timeline-element-title text-3xl font1 font-semibold">Our Service</h3>
                    <h4 className="vertical-timeline-element-subtitle text-sky-600 text-2xl font1 font-semibold">Easy hotel find</h4>
                    <p className='text-xl font1 font-semibold'>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat, dolor.
                    </p>
                </VerticalTimelineElement>
                <VerticalTimelineElement
                    className="vertical-timeline-element--education"
                    date="4"
                    iconStyle={{ background: 'rgb(233, 30, 99)', color: '#fff' }}
                    icon={<MdTravelExplore />}
                >
                    <h3 className="vertical-timeline-element-title text-3xl font1 font-semibold">Our Service</h3>
                    <h4 className="vertical-timeline-element-subtitle text-red-500 text-2xl font1 font-semibold">Smooth Traveling</h4>
                    <p className='text-xl font1 font-semibold'>
                        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fugit, facere!
                    </p>
                </VerticalTimelineElement>
                <VerticalTimelineElement
                    className="vertical-timeline-element--education"
                    date="5"
                    iconStyle={{ background: 'rgb(233, 30, 99)', color: '#fff' }}
                    icon={<RiGuideLine />}
                >
                    <h3 className="vertical-timeline-element-title text-3xl font1 font-semibold">Our Service</h3>
                    <h4 className="vertical-timeline-element-subtitle text-red-500 text-2xl font1 font-semibold">Tour Guide</h4>
                    <p className='text-xl font1 font-semibold'>
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Laudantium, quis!
                    </p>
                </VerticalTimelineElement>
                <VerticalTimelineElement
                    className="vertical-timeline-element--education"
                    date="6"
                    iconStyle={{ background: 'rgb(233, 30, 99)', color: '#fff' }}
                    icon={<GiReturnArrow />}
                >
                    <h3 className="vertical-timeline-element-title text-3xl font1 font-semibold">Our Service</h3>
                    <h4 className="vertical-timeline-element-subtitle text-red-500 text-xl font1 font-semibold">Return Ticket Service</h4>
                    <p className='text-xl font1 font-semibold' >
                        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Doloribus, animi?
                    </p>
                </VerticalTimelineElement>
            </VerticalTimeline>
        </div>
    );
};

export default About;