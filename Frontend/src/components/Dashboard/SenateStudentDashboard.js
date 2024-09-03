// 'use client';
// import './teacherDashboard.css'; /* Reuse the same CSS as Teacher Dashboard */
// import React, { useState } from 'react';
// // import './senateStudentDashboard.css';

// const SenateDashboard = () => {
//   const [activeFeature, setActiveFeature] = useState('Manage Events');

//   const features = [
//     { name: 'Manage Events', content: 'Coordinate and manage student events and activities.' },
//     { name: 'Communication', content: 'Communicate with other senate members and students.' },
//     { name: 'Reports', content: 'View and manage reports related to student activities.' },
//   ];

//   return (
//     <div className="dashboard-container">
//       <aside className="sidebar">
//         <div className="sidebar-header">
//           <h2>Senate Member Dashboard</h2>
//         </div>
//         <ul className="feature-list">
//           {features.map((feature, index) => (
//             <li
//               key={index}
//               className={activeFeature === feature.name ? 'active' : ''}
//               onClick={() => setActiveFeature(feature.name)}
//             >
//               {feature.name}
//             </li>
//           ))}
//         </ul>
//       </aside>
//       <div className="content-area">
//         <header className="content-header">
//           <h1>{activeFeature}</h1>
//           <div className="profile-section">
//             <img
//               src="https://via.placeholder.com/40"
//               alt="Senate Member Profile"
//               className="profile-pic"
//             />
//             <span className="profile-name">Alex Smith</span>
//           </div>
//         </header>
//         <main className="content-main">
//           <p>{features.find(feature => feature.name === activeFeature).content}</p>
//         </main>
//       </div>
//     </div>
//   );
// };

// export default SenateDashboard;