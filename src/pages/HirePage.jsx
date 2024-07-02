import React, { useContext } from 'react'
import LayoutContainer from '../layouts/LayoutContainer';
import { UserContext, useUserContext } from '../context/InitialContext';


const HirePage = () => {

//    const data =  useContext(UserContext)
const {name, email} = useUserContext() 
    return (
        <LayoutContainer>
            <div>
                <div>
                    <h1>hire us</h1>
                    <p>loremloremloremloremloremloremloremloremloremloremloremlorem*20</p>
                    <form  className='bg-slate-200 p-20 flex gap-10'>
                       <h2>{name}</h2>
                       <p>{email}</p>
                    </form>
                </div>
            </div>
        </LayoutContainer>
    )
}

export default HirePage