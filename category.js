let t = 0;
let contador = 0;

function add_new() {
    const newContainer = document.querySelector('.cont_crear_new');
    const titleContainer = document.querySelector('.cont_add_titulo_cont');

    if (t % 2 === 0) {
        newContainer.classList.add("cont_crear_new_active");
        titleContainer.classList.add("cont_add_titulo_cont_active");
    } else {
        newContainer.classList.remove("cont_crear_new_active");
        titleContainer.classList.remove("cont_add_titulo_cont_active");
    }
    t++;
}

function add_to_list() {
    const title = document.querySelector('.input_title_desc').value;
    const description = document.querySelector('.input_description').value;

// var class_li  =['list_shopping list_dsp_true','list_work  list_dsp_true','list_sport list_dsp_true','list_music list_dsp_true'];
// console.log('.li_num_'+num2);
//  document.querySelector('.li_num_'+num2).className = class_li[num]+" list_finish_state";
// setTimeout(function(){
//            del_finish();
//            },500);
// }

// function del_finish(){
// var li = document.querySelectorAll('.list_finish_state');
//     for(var e = 0; e < li.length; e++){
// li[e].style.opacity = "0";
// li[e].style.height = "0px";
// li[e].style.margin = "0px";
    if (!title || !description) {
        alert('Please fill in both the title and description');
        return;
    }

    const li = document.createElement('li');
    li.className = `list_shopping list_dsp_none li_num_${contador}`;
    li.innerHTML = `
        <div class="col_md_1_list">
            <p>${title}</p>
        </div>
        <div class="col_md_2_list">
            <h4>${description}</h4>
        </div>
    `;

    document.getElementById('category-list').appendChild(li);

    setTimeout(() => {
        li.style.display = "block";
        li.classList.add('list_dsp_true');
        contador++;
    }, 200);
}
// function toggleMode() {
//   const body = document.body;
//   const button = document.getElementById("mode-toggle");

//   // Toggle dark and light mode
//   body.classList.toggle("dark-mode");
//   body.classList.toggle("light-mode");

//   // Update button text based on the current mode
//   if (body.classList.contains("dark-mode")) {
//       button.textContent = "Switch to Light Mode";
//   } else {
//       button.textContent = "Switch to Dark Mode";
//   }
// }
document.getElementById('mode-toggle').addEventListener('click', function() {
    const body = document.body;
    body.classList.toggle('dark-mode');
    if (body.classList.contains('dark-mode')) {
      this.textContent = 'Switch to Light Mode';
    } else {
      this.textContent = 'Switch to Dark Mode';
    }
  });

// Add click event listener to toggle button
document.getElementById("mode-toggle").addEventListener("click", toggleMode);

document.getElementById('logout-button').addEventListener('click', function () {
    window.location.href = 'mainmenu.html';
});