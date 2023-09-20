<template>
    <label tabindex="0" class="btn btn-ghost btn-circle avatar">
        <div class="w-10 rounded-full ring ring-secondary">
        <img src="/images/profile-exemple.jpg" />
        </div>
    </label>
    <ul tabindex="0" class="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-200 rounded-box w-52">
        <li>
            <a onclick="my_modal_3.showModal()">
                <font-awesome-icon icon="right-to-bracket" />
                Se connecter
            </a>
        </li>
        <dialog id="my_modal_3" class="modal">
            <div class="modal-box">
                <form method="dialog">
                <button class="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
                </form>
                <h3 class="font-bold text-lg">Hello!</h3>
                <p class="py-4">Press ESC key or click on ✕ button to close</p>
            </div>
        </dialog>
    </ul>
</template>