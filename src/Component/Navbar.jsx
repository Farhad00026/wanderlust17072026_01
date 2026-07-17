'use client'
import { authClient } from '@/lib/auth-client';
import { Avatar, Button } from '@heroui/react';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const Navbar = () => {
    const {
        data: session,

    } = authClient.useSession()
    const user = session?.user;

    const handleSignout= async ()=>{
        await authClient.signOut();
    }

    return (
        <div>
            <nav className='flex justify-between p-2'>
                <ul className='flex gap-3'>
                    <li><Link href={'/'}>Home</Link></li>
                    <li><Link href={'/destination'}>Destination</Link></li>
                    <li><Link href={'/mybooking'}>My Booking</Link></li>
                    <li><Link href={'/adddestination'}> Add Destination</Link></li>
                </ul>
                <div>
                    <Image
                        src="/assets/Wanderlast.png"
                        alt="Wanderlast Logo"
                        width={150}
                        height={150}
                    />
                </div>
                <ul className='flex gap-3'>
                    <li><Link href={'/profile'}>Profile</Link></li>
                    {
                        user ? <>
                            <li>
                                <Avatar>
                                    <Avatar.Image alt="John Doe" src={user?.image}  name={user?.name}/>
                                    <Avatar.Fallback>{user?.name[0]}</Avatar.Fallback>
                                </Avatar>

                            </li>
                            <li>{user?.name}</li>
                            <li>
                                <Button onClick={handleSignout} className="text-red-400" variant='outline'>Logout</Button>
                            </li>
                        </> :
                            <>
                                <li><Link href={'/login'}>Login</Link></li>
                                <li><Link href={'/signup'}>SignUp</Link></li>
                            </>
                    }

                </ul>
            </nav>
        </div>
    );
};

export default Navbar;