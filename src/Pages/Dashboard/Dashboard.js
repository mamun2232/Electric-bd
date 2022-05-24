import React from 'react';
import { NavLink, Outlet,  } from 'react-router-dom';

const Dashboard = () => {
      return (
            <div className='dashborad  max-w-7xl m-auto'>
            <div class="drawer drawer-mobile">
                  <input id="my-drawer-2" type="checkbox" class="drawer-toggle" />
                  <div class="drawer-content mx-3">

                        <h1 className='text-4xl text-accent font-bold'>Walcome to Our DashBoard</h1>


                        <Outlet />


                  </div>
                  <div class="drawer-side">
                        <label for="my-drawer-2" class="drawer-overlay"></label>
                        <ul class="menu p-4 overflow-y-auto w-80 bg-white text-base-content">
                              {/* <!-- Sidebar content here --> */}
                              <li className='text-black'><NavLink to='MyOrder'>MyOrder</NavLink></li>
                              <li className='text-black'><NavLink to='addReview'>Add Review</NavLink></li>
                             
                                  
                                          <li className='text-black'>
                                                <NavLink to='user'>All User</NavLink></li>
                                        


                                   
                              

                        </ul>

                  </div>
            </div>

      </div>
      );
};

export default Dashboard;