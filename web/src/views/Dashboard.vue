<template>
  <Navbar />

  <div>
    <tr>
      <input
        id="title"
        type="text"
        class="input w-full max-w-xs"
        placeholder="Title"
      />
    </tr>
    <tr>
      <input
        id="date"
        type="date"
        class="input w-full max-w-xs"
        placeholder="Date"
      />
    </tr>
    <tr>
      <textarea
        id="content"
        class="textarea textarea-bordered textarea-xs w-full max-w-xs"
        placeholder="Content"
      >
      </textarea>
    </tr>
  </div>
  <table class="table">
    <!-- head -->
    <thead>
      <tr>
        <th>
          <label>
            <input
              id="checkAll"
              type="checkbox"
              class="checkbox"
              @change="checkAll()"
            />
          </label>
        </th>
        <th>Description</th>
      </tr>
    </thead>
    <tbody>
      <!-- row 1 -->
      <tr>
        <th>
          <label>
            <input
              id="categorie"
              name="Feature"
              type="checkbox"
              class="checkbox"
            />
          </label>
        </th>
        <td>
          <p>✨Feature</p>
        </td>
      </tr>
    </tbody>
    <tbody>
      <!-- row 2 -->
      <tr>
        <th>
          <label>
            <input
              id="categorie"
              name="Release"
              type="checkbox"
              class="checkbox"
            />
          </label>
        </th>
        <td>
          <p>🎉Release</p>
        </td>
      </tr>
    </tbody>
    <tbody>
      <!-- row 3 -->
      <tr>
        <th>
          <label>
            <input
              id="categorie"
              name="Epic"
              type="checkbox"
              class="checkbox"
            />
          </label>
        </th>
        <td>
          <div class="flex">
            <p>🎈Epic</p>
          </div>
        </td>
      </tr>
    </tbody>
    <tbody>
      <!-- row 4 -->
      <tr>
        <th>
          <label>
            <input
              id="categorie"
              name="Information"
              type="checkbox"
              class="checkbox"
            />
          </label>
        </th>
        <td>
          <div class="flex">
            <p>🔍Information</p>
          </div>
        </td>
      </tr>
    </tbody>
  </table>
  <button class="btn" @click="AjoutNews">Add News</button>
</template>

<script setup>
import Navbar from "@components/dashboard/Navbar.vue";

import newsData from "@data/newsData.json";
import { useToast } from "vue-toastification";
import "vue-toastification/dist/index.css";

const toast = useToast({
  position: "top-right",
  timeout: 5000,
  closeOnClick: true,
  pauseOnFocusLoss: true,
  pauseOnHover: true,
  draggable: true,
  draggablePercent: 0.6,
  showCloseButtonOnHover: false,
  hideProgressBar: false,
  closeButton: "button",
  icon: true,
  rtl: false,
});

function checkAll(statut) {
  var inputs = document.getElementsByTagName("input");
  const checkAllStatus = document.getElementById("checkAll").checked;

  for (var i = 0; i < inputs.length; i++) {
    if (inputs[i].type == "checkbox" && inputs[i].id == "categorie") {
      if (checkAllStatus == false) {
        inputs[i].checked = false;
      } else {
        inputs[i].checked = true;
      }
    }
  }
}

function getCategorieSelect() {
  const selectCategorie = new Array();
  const lstcateg = document.getElementsByTagName("input");

  for (var i = 0; i < lstcateg.length; i++) {
    if (lstcateg[i].type == "checkbox" && lstcateg[i].id == "categorie") {
      if (lstcateg[i].name === "Feature" && lstcateg[i].checked == true) {
        selectCategorie.push(lstcateg[i].name);
      }
      if (lstcateg[i].name === "Release" && lstcateg[i].checked == true) {
        selectCategorie.push(lstcateg[i].name);
      }
      if (lstcateg[i].name === "Epic" && lstcateg[i].checked == true) {
        selectCategorie.push(lstcateg[i].name);
      }
      if (lstcateg[i].name === "Information" && lstcateg[i].checked == true) {
        selectCategorie.push(lstcateg[i].name);
      }
    }
  }

  return selectCategorie;
}

function AjoutNews() {
  const idsupp = Object.keys(newsData).length + 1;
  const title = document.getElementById("title").value;
  const datenew = document.getElementById("date").value;
  const newcontent = document.getElementById("content").value.trim();
  const lstcategorie = getCategorieSelect();

  if (
    lstcategorie.length > 0 &&
    title != "" &&
    datenew != "" &&
    contentnew != ""
  ) {
    newsData.push({
      id: idsupp,
      title: title.trim(),
      date: datenew,
      content: newcontent.trim(),
      viewName: "",
      caterogie: lstcategorie,
    });
  } else {
    return toast.error("Complete all field");
  }
}
</script>
