<template>
    <div class="dropdown dropdown-end">
      <label tabindex="0" class="btn btn-ghost btn-circle avatar">
        <div class="w-10 rounded-full ring ring-secondary">
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
            <font-awesome-icon icon="arrow-right-from-bracket" />
            Logout
          </a>
        </li>
      </ul>
    </div>
</template>

<script setup>
//
</script>