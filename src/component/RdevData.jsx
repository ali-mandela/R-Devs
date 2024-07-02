import {FaUserAlt} from "react-icons/fa";
import {GoProject} from "react-icons/go";

const data = [
    {
        id: 1,
        message: "Happy clients",
        Icon: FaUserAlt,
        number: 20
    }, {
        id: 2,
        message: "Successful projects",
        Icon: GoProject,
        number: 10
    }
];

const RdevData = () => {
    return (
        <div className="px-4 md:px-12 py-8 bg-gray-100">
            <div className="text-center  mb-8">
                <h1 className="text-3xl font-bold text-gray-800">Our Achievements</h1>
                <p className="text-gray-600">We are proud of our successful projects and happy clients.</p>
            </div>
            <div className="grid gap-8 grid-cols-1 md:grid-cols-2">
                {data.map(item => (<Compo
                    key={item.id}
                    title={item.message}
                    Icon={item.Icon}
                    number={item.number}/>))}
            </div>
        </div>
    );
};

const Compo = ({title, Icon, number}) => {
    return (
        <div
            className="flex items-center flex-col gap-4 justify-center border-2 border-gray-300 bg-white p-6 rounded-lg shadow-md">

            <Icon className="text-6xl text-teal-900"/>
            <div className="flex items-center flex-col justify-center">
                <h2 className="text-2xl font-semibold text-gray-800">{number}+</h2>
                <p className="text-gray-600">{title}</p>
            </div>
        </div>
    );
};

export default RdevData;
