// import React, { useState } from 'react';
// import { useRouter } from 'next/router';
// import styles from './FormComponent.module.css';
// import backgroundImage from '@/assets/images/cool-triangles-sharp-edges-abstract-wallpaper-preview.jpg';

// type User = {
//   email: string;
//   password: string;
//   role: string;
// };

// const mockUsers: User[] = [
//   { email: 'teacher@example.com', password: 'password123', role: 'teacher' },
//   { email: 'senate@example.com', password: 'password123', role: 'senate_member' },
//   { email: 'student@example.com', password: 'password123', role: 'student' },
// ];

// const FormComponent = () => {
//   const [isSignup, setIsSignup] = useState(false);
//   const [errorMessage, setErrorMessage] = useState('');
//   const [users, setUsers] = useState<User[]>(mockUsers);
//   const router = useRouter();

//   const handleLoginClick = () => {
//     setIsSignup(false);
//     setErrorMessage('');
//   };

//   const handleSignupClick = () => {
//     setIsSignup(true);
//     setErrorMessage('');
//   };

//   const handleFormSubmit = (e: React.FormEvent<HTMLFormElement>) => {
//     e.preventDefault();
//     const form = e.target as HTMLFormElement;
//     const email = (form.elements.namedItem('email') as HTMLInputElement).value;
//     const password = (form.elements.namedItem('password') as HTMLInputElement).value;
//     const confirmPassword = isSignup ? (form.elements.namedItem('confirmPassword') as HTMLInputElement).value : null;
//     const role = isSignup ? (form.elements.namedItem('role') as HTMLInputElement).value : null;

//     if (isSignup && password !== confirmPassword) {
//       setErrorMessage('Passwords do not match.');
//       return;
//     }

//     try {
//       if (isSignup) {
//         const userExists = users.some((user) => user.email === email);
//         if (userExists) {
//           setErrorMessage('User already exists.');
//           return;
//         }

//         const newUser: User = { email, password, role: role || 'student' };
//         setUsers([...users, newUser]);

//         setErrorMessage('Signup successful! Please log in.');
//         setIsSignup(false);
//       } else {
//         const foundUser = users.find((user) => user.email === email && user.password === password);

//         if (foundUser) {
//           if (foundUser.role === 'teacher') {
//             router.push('/teacher-dashboard');
//           } else if (foundUser.role === 'senate_member') {
//             router.push('/senate-dashboard');
//           } else if (foundUser.role === 'student') {
//             router.push('/student-dashboard');
//           } else {
//             setErrorMessage('User role not recognized.');
//           }
//         } else {
//           setErrorMessage('Invalid email or password.');
//         }
//       }
//     } catch (error) {
//       setErrorMessage('An error occurred. Please try again.');
//     }
//   };

//   return (
//     <div className={styles.pageWrapper} style={{ backgroundImage: `url(${backgroundImage.src})` }}>
//       {/* Form content */}
//       <div className={styles.formContainer}>
//         <div className={styles.toggleButtons}>
//           <button className={!isSignup ? styles.active : ''} onClick={handleLoginClick}>
//             Login
//           </button>
//           <button className={isSignup ? styles.active : ''} onClick={handleSignupClick}>
//             Signup
//           </button>
//         </div>
//         <form onSubmit={handleFormSubmit}>
//           <input type="email" name="email" placeholder="Email" required />
//           <input type="password" name="password" placeholder="Password" required />
//           {isSignup && (
//             <>
//               <input type="password" name="confirmPassword" placeholder="Confirm Password" required />
//               <select name="role" required>
//                 <option value="teacher">Teacher</option>
//                 <option value="senate_member">Senate Member</option>
//                 <option value="student">Student</option>
//               </select>
//             </>
//           )}
//           {errorMessage && <p className={styles.error}>{errorMessage}</p>}
//           <button type="submit">{isSignup ? 'Signup' : 'Login'}</button>
//         </form>
//       </div>
//     </div>
//   );
// };

// export default FormComponent;
