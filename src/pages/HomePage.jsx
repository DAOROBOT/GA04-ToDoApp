import React from 'react';
import { Link } from 'react-router-dom'; 


const members = [
  { name: 'Ngo Huynh Gia Thoai', hobbies: ['Coding', 'Playing Game', 'Listening to Music'] },
  { name: 'Nguyen Thien Phuc', hobbies: ['Coding', 'Playing Game', 'Playing Sports'] },
  { name: 'Dinh Viet Hai', hobbies: ['Coding', 'Learning English', 'Swimming'] },
  { name: 'Trần Quang Đạo', hobbies: ['Coding', 'Web Development', 'Listening to Music'] },
  { name: 'Nguyen Van B', hobbies: ['Coding', 'Playing Game', 'Listening to Music'] },
];

// Component MemberCard để tái sử dụng
function MemberCard({ name, hobbies }) {
  return (
    <div className="flex flex-none w-64 flex-col bg-sky-200 justify-center items-center p-4 border-1 border-r-4 border-b-4 rounded-xl border-gray-900 dark:border-gray-200">
      <div className="font-bold text-lg">{name}</div>
      <div className="font-semibold mt-2">Hobbies</div>
      <ul className="list-disc pl-5 mt-2 w-full text-left">
        {hobbies.map((hobby, index) => (
          <li key={index}>{hobby}</li>
        ))}
      </ul>
    </div>
  );
}

function HomePage() {
  return (
    <div className="min-h-screen bg-gray-100 p-10">
      
      <div className="flex flex-col justify-center items-center bg-white dark:bg-gray-800 shadow-xl rounded-lg p-10 w-full text-center mb-10">
        <h1 className="text-4xl md:text-5xl font-bold font-poppins text-gray-800 dark:text-white">
          KTPM01 - GA03
        </h1>
        <p className="text-xl md:text-2xl mt-2">
          Welcome to our To-Do App!
        </p>
        
        {/* Dùng Link của React Router */}
        <Link 
          to="/todo" 
          className="flex flex-row items-center justify-center bg-violet-500 text-white px-8 py-3 mt-10 rounded-full hover:bg-violet-700 transition-colors font-semibold"
        >
          <span>To-Do Page</span>
          <span className="ml-2">→</span>
        </Link>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-10 gap-10 w-max mx-auto">
        {}
        {members.map((member) => (
          <MemberCard key={member.name} name={member.name} hobbies={member.hobbies} />
        ))}
      </div>
    </div>
  );
}

export default HomePage;