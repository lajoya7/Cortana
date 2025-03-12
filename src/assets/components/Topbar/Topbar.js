import React, { useState } from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import { Toolbar } from 'primereact/toolbar';
import { Avatar } from 'primereact/avatar';
import Sidebar1 from '../Sidebar/Sidebar';

export default function Topbar() {
    const { user } = useAuth0(); 
    const [dropdownOpen, setDropdownOpen] = useState(false);

    const toggleDropdown = () => {
        setDropdownOpen(!dropdownOpen);
    };

    const startContent = (
        <React.Fragment>
        </React.Fragment>
    );

    const centerContent = (
        <div className="flex flex-wrap align-items-center gap-3">
            <button className="p-link inline-flex justify-content-center align-items-center text-white h-3rem w-3rem border-circle hover:bg-white-alpha-10 transition-all transition-duration-200">
                <i className="pi pi-home text-2xl"></i>
            </button>
            <button className="p-link inline-flex justify-content-center align-items-center text-white h-3rem w-3rem border-circle hover:bg-white-alpha-10 transition-all transition-duration-200">
                <i className="pi pi-user text-2xl"></i>
            </button>
            <button className="p-link inline-flex justify-content-center align-items-center text-white h-3rem w-3rem border-circle hover:bg-white-alpha-10 transition-all transition-duration-200">
                <i className="pi pi-search text-2xl"></i>
            </button>
            <button className="p-link inline-flex justify-content-center align-items-center text-white h-3rem w-3rem border-circle hover:bg-white-alpha-10 transition-all transition-duration-200">
                <Sidebar1/>
            </button>
        </div>
    );

    const endContent = (
        <React.Fragment>
            {user ? (
                <div className="flex align-items-center gap-2">
                    <img 
                        src={user.picture} 
                        alt={user.name} 
                        onClick={toggleDropdown} 
                        className="border-circle cursor-pointer" 
                        style={{ width: '40px', height: '40px' }}
                    />
                    {dropdownOpen && (
                        <div className="dropdown-menu">
                            <span className="font-bold text-bluegray-50">{user.name}</span>
                        </div>
                    )}
                </div>
            ) : (
                <Avatar 
                    image="https://primefaces.org/cdn/primereact/images/avatar/amyelsner.png" 
                    shape="circle" 
                />
            )}
        </React.Fragment>
    );

    return (
        <div className="card">
            <Toolbar 
                start={startContent} 
                center={centerContent} 
                end={endContent} 
                className="bg-gray-900 shadow-2" 
                style={{ 
                    borderRadius: '3rem', 
                    backgroundImage: 'linear-gradient(to right, var(--bluegray-500), var(--bluegray-800))' 
                }} 
            />
        </div>
    );
}
