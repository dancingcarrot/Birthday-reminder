import React from "react"; //react를 사용하기 위해 react모듈을 가져온다

const list =({people}) => { //list라는 변수에 'people'이름의 props(properties의 줄임말: 부모 컴포넌트에서 자식 컴포넌트에게 전달)를 받아옴
    return (
        <>
        {people.map((person)=>{ //people 배열의 각 요소를 person이라는 이름으로 사용함
            const {id,name,age,image}=person; //person객체의 id,name,age,image 속성
            // <article>요소 반환 'person'객체의 'id'값 반환함
            return <article key={id} className="person"> 
                <img src={image} alt={name}/>
                <div>
                    <h4>{name}</h4>
                    <p>{age} years</p>
                </div>
            </article>

        })}
        </>
    );
};

export default list;