import React, { useState } from 'react'

const Filter = () => {
    const [menuData, setMenuData] = useState();

    const filterItem = (category) => {
        const upDatedList = Filter((curElen) => {
            return curElen.category === category

        })
        setMenuData(upDatedList)

    };

    return (
        <>
            <nav className='navbar'>
                <div className='btn-group'>
                    <button className='btn-group__item' onClick={() => setMenuData()}> Directories</button>
                    <button className='btn-group__item' onClick={() => filterItem("Dinner")}>school</button>
                    <button className='btn-group__item' onClick={() => filterItem("Breakfast")}>grocerry</button>
                    <button className='btn-group__item' onClick={() => filterItem("lunch")}>lunch</button>
                    <button className='btn-group__item' onClick={() => filterItem("non-veg")}>market</button>

                </div>

            </nav>




            {/* < MenuCard menuData={menuData} /> */}

        </>
    )
}

export default Filter