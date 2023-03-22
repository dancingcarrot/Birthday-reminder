import React, {useState} from 'react' //import를 사용해서 react라이브러리에서 'useState'함수 가져옴
import data from './data'
import List from './List'



function App() {
    const [people, setPeople] = useState(data)
    return (
        <main>
            <section className='container'>
                <h3>{people.length} birthdays today</h3>
                <List people={people}/>
                <button onClick={() => setPeople([])}>clear all</button> 
               
                
                 
                
                
            </section>

        </main>
    )
}

export default App;