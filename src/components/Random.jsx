import { Advice } from "./randoms/Advice"
import { Activity } from "./randoms/Activity"
import { Joke } from "./randoms/Joke"
import { Fact } from "./randoms/Facts"
import { Number } from "./randoms/Number"
import { History } from "./randoms/History"
import { useState } from "react"

export const Random = () => {

    const [count, setCount] = useState(0);

    const [api, setApi] = useState('activity');

    const display = (setter) => {
        setCount(count+1);
        setApi(setter);
    }

  return (
    <section className="resip_section">
                    <div className="container">
                        {api==='advice' && <Advice count={count} />}
                        {api==='activity' && <Activity count={count} />}
                        {api==='joke' && <Joke count={count} />}
                        {api==='fact' && <Fact count={count} />}
                        {api==='number' && <Number count={count} />}
                        {api==='history' && <History count={count} />}
                        <div style={{display: 'flex', justifyContent:'space-between'}}>
                            <div style={{borderRadius:'20%', border: '1px solid lightblue', padding: '.5% 1%'}}
                             onClick={()=>display('advice')}>
                                <a href="http://localhost:3000/#/random" className='button_user'>Advice</a>
                            </div>
                            <div style={{borderRadius:'20%', border: '1px solid lightblue', padding: '.5% 1%'}}
                             onClick={()=>display('activity')}>
                                <a href="http://localhost:3000/#/random" className='button_user'>Activity</a>
                            </div>
                            <div style={{borderRadius:'20%', border: '1px solid lightblue', padding: '.5% 1%'}}
                            onClick={()=>display('joke')}>
                                <a href="http://localhost:3000/#/random" className='button_user'>Joke</a>
                            </div>
                            <div style={{borderRadius:'20%', border: '1px solid lightblue', padding: '.5% 1%'}}
                            onClick={()=>display('fact')}>
                                <a href="http://localhost:3000/#/random" className='button_user'>Fact</a>
                            </div>
                            <div style={{borderRadius:'20%', border: '1px solid lightblue', padding: '.5% 1%'}}
                            onClick={()=>display('number')}>
                                <a href="http://localhost:3000/#/random" className='button_user'>Number</a>
                            </div>
                            <div style={{borderRadius:'20%', border: '1px solid lightblue', padding: '.5% 1%'}}
                            onClick={()=>display('history')}>
                                <a href="http://localhost:3000/#/random" className='button_user'>History</a>
                            </div>
                        </div>
                       
                        
                    </div>

                </section>
  )
}
