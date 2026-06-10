import React, { use } from 'react';
import Cousin from '../Uncle/Cousin/Cousin';
import { MoneyContext } from '../FamilyTree';

const Aunt = ({Asset}) => {

    const [money,setMoney]=use(MoneyContext);

    return (
        <div className='family-tree'>
            <h3>Aunt</h3>

            <section className='flex'>
                <Cousin Asset={Asset} name='momo'></Cousin>
                <Cousin name='mona'></Cousin>
                <button onClick={()=>setMoney(money+5000)}>Add 5000</button>
            </section>
        </div>
    );
};

export default Aunt;