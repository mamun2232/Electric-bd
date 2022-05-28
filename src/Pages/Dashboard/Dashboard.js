import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { NavLink, Outlet,  } from 'react-router-dom';
import auth from '../../firebase.init';
import useAdmins from '../Hook/useAdmins';


const Dashboard = () => {
      const [user] = useAuthState(auth)
      const [admin] = useAdmins(user)
      return (
            <div className='dashborad  max-w-7xl m-auto'>
            <div class="drawer drawer-mobile">
                  <input id="my-drawer-2" type="checkbox" class="drawer-toggle" />
                  <div class="drawer-content mx-3">

                        <h1 className='text-3xl ptext font-bold text-center my-4'>Walcome to Our DashBoard</h1>


                        <Outlet />


                  </div>
                  <div class="drawer-side">
                        <label for="my-drawer-2" class="drawer-overlay"></label>
                        <ul class="menu p-4 overflow-y-auto w-80 bg-white text-base-content">
                              {/* <!-- Sidebar content here --> */}

                              {/* {
                                    !admin && <>
                                     <li className='text-black'><NavLink to='MyOrder'>My Order</NavLink></li>
                              <li className='text-black'><NavLink to='addReview'>Add Review</NavLink></li>
                                    </>
                              } */}
                                <li className='ptext'><NavLink to='/dashboard'>My Order</NavLink></li>
                              <li className='ptext'><NavLink to='addReview'>Add Review</NavLink></li>
                             
                              <li className='ptext'><NavLink to='updateProfile'>My Profile</NavLink></li>
                             
                              
                              {
                                    admin && <>
                                  
                                    <li className='text-black'>
                                                <NavLink to='manageAllOrders'>Manage All Orders</NavLink></li>

                                                <li className='ptext'>
                                                <NavLink to='addProduct'>Add Product</NavLink></li>
                                                <li className='ptext'>
                                                <NavLink to='manageAllprodcts'>Manage All products</NavLink></li>

                                                <li className='ptext'>
                                                <NavLink to='user'>Make Admin</NavLink></li>
                                    
                                    
                                    
                                    </>
                              }


                                          
                                        


                                   
                              

                        </ul>

                  </div>
            </div>

      </div>
      );
};

export default Dashboard;