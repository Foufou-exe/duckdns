<template>

  <div class="navbar">
    <div class="navbar-start">
      <div class="dropdown ">
        
        <label class="btn btn-square btn-ghost swap swap-rotate">
          <input type="checkbox" />
  
          <!-- hamburger icon -->
          <svg class="swap-off fill-current" xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 512 512"><path d="M64,384H448V341.33H64Zm0-106.67H448V234.67H64ZM64,128v42.67H448V128Z"/></svg>
          
          <!-- close icon -->
          <svg class="swap-on fill-current" xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 512 512"><polygon points="400 145.49 366.51 112 256 222.51 145.49 112 112 145.49 222.51 256 112 366.51 145.49 400 256 289.49 366.51 400 400 366.51 289.49 256 400 145.49"/></svg>
          
        </label>
        <ul tabindex="0" class="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-200 rounded-box w-52">
          <li>
            <a href="/">
              <font-awesome-icon icon="house" />
              Home
            </a>
          </li>
          <li>
            <a>
              <font-awesome-icon icon="circle-info" />
              About
            </a>
          </li>
          <li>
            <a>
              <font-awesome-icon icon="wrench" />
              Spécifications
            </a>
          </li>
          <li>
            <a>
              <font-awesome-icon :icon="['fas', 'file']" />
              Documentation
            </a>
          </li>
          <li>
            <a>
              <font-awesome-icon icon="question" />
              FAQ
            </a>
          </li>
        </ul>
      </div>
      <div class="btn btn-ghost">
        <img src="/duck.png" class="w-10 h-10" />
        <a class="text-3xl font-extrabold text-white">Duck DNS</a>
      </div>
  </div>


    <div class="navbar-center hidden lg:flex" id="app">
      <ul class="menu menu-horizontal px-1">
        <li>
          <a href="/">
            <font-awesome-icon icon="house" />
            Home
          </a>
        </li>
        <li>
          <a>
            <font-awesome-icon icon="circle-info" />
            About
          </a>
        </li>
        <li>
          <a>
            <font-awesome-icon icon="wrench" />
            Spécifications
          </a>
        </li>
        <li>
          <a>
            <font-awesome-icon :icon="['fas', 'file']" />
            Documentation
          </a>
        </li>
        <li>
          <a>
            <font-awesome-icon icon="question" />
            FAQ
          </a>
        </li>
      </ul>
    </div>


    <div class="navbar-end" id="app">
      <label class="swap swap-rotate mr-5">
    
        <!-- this hidden checkbox controls the state -->
        <input type="checkbox" />
        
        <!-- sun icon -->
        <svg class="swap-off fill-current w-7 h-10" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M5.64,17l-.71.71a1,1,0,0,0,0,1.41,1,1,0,0,0,1.41,0l.71-.71A1,1,0,0,0,5.64,17ZM5,12a1,1,0,0,0-1-1H3a1,1,0,0,0,0,2H4A1,1,0,0,0,5,12Zm7-7a1,1,0,0,0,1-1V3a1,1,0,0,0-2,0V4A1,1,0,0,0,12,5ZM5.64,7.05a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.41l-.71-.71A1,1,0,0,0,4.93,6.34Zm12,.29a1,1,0,0,0,.7-.29l.71-.71a1,1,0,1,0-1.41-1.41L17,5.64a1,1,0,0,0,0,1.41A1,1,0,0,0,17.66,7.34ZM21,11H20a1,1,0,0,0,0,2h1a1,1,0,0,0,0-2Zm-9,8a1,1,0,0,0-1,1v1a1,1,0,0,0,2,0V20A1,1,0,0,0,12,19ZM18.36,17A1,1,0,0,0,17,18.36l.71.71a1,1,0,0,0,1.41,0,1,1,0,0,0,0-1.41ZM12,6.5A5.5,5.5,0,1,0,17.5,12,5.51,5.51,0,0,0,12,6.5Zm0,9A3.5,3.5,0,1,1,15.5,12,3.5,3.5,0,0,1,12,15.5Z"/></svg>
        
        <!-- moon icon -->
        <svg class="swap-on fill-current w-7 h-10" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M21.64,13a1,1,0,0,0-1.05-.14,8.05,8.05,0,0,1-3.37.73A8.15,8.15,0,0,1,9.08,5.49a8.59,8.59,0,0,1,.25-2A1,1,0,0,0,8,2.36,10.14,10.14,0,1,0,22,14.05,1,1,0,0,0,21.64,13Zm-9.5,6.69A8.14,8.14,0,0,1,7.08,5.22v.27A10.15,10.15,0,0,0,17.22,15.63a9.79,9.79,0,0,0,2.1-.22A8.11,8.11,0,0,1,12.14,19.73Z"/></svg>
        
      </label>
      <div class="dropdown dropdown-end">
        <label tabindex="0" class="btn btn-ghost btn-circle avatar">
          <div class="w-10 rounded-full">
            <img src="/images/profile-exemple.jpg" />
          </div>
        </label>
        <ul tabindex="0" class="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-200 rounded-box w-52">
          <li>
            <a>
              <font-awesome-icon icon="user" />
              Profile
            </a>
          </li>
          <li>
            <a>
              <font-awesome-icon icon="right-to-bracket" />
              Logout
            </a>
          </li>
        </ul>
      </div>
    </div>
  </div>

  <footer class="footer p-10 text-base-content">
    <aside>
      <img src="/duck.png" class="w-20 h-20 mr-2" />
      <p>Duck DNS<br/>Providing reliable tech since 2010</p>
    </aside> 
    <nav>
      <header class="footer-title">Legal</header> 
      <a class="link link-hover">Terms of use</a> 
      <a class="link link-hover">Privacy statement</a> 
    </nav>
    <nav>
      <header class="footer-title">Donation</header> 
      <a href="https://www.paypal.com/donate?token=DK6TnV1LP12XjURmkHGhX_3bLEVt-AtVxbCn5bAf_j-SdZPoEfmT-s5RZX3g7x1wQcxsaqoSq0UmCnz2&locale.x=GB" class="link link-hover">
        <img src="/images/paypal.png" class="mr-2 w-48" />
      </a>
      <a href="bitcoin:16gHnv3NTjpF5ZavMi9QYBFxUkNchdicUS" class="link link-hover">
        <img src="/images/bitcoins.png" class="mr-2 w-56" />
      </a>
      <a href="https://www.patreon.com/user?u=3209735&ty=h&u=3209735" class="link link-hover">
        <img src="/images/patreon.png" class="mr-2 w-56" />
      </a>
    </nav>
    <nav>
      <header class="footer-title">Forum</header> 
      <a class="link link-hover" href="https://groups.google.com/g/duckdns">
        <img src="/images/groupe-google.png" class="mr-2 w-16" />
      </a>
    </nav>
  </footer>

</template>



<script>
  export default {
    name: 'App'
  }
</script>