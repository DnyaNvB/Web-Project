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
document.getElementById('mode-toggle').addEventListener('click', function() {
    const body = document.body;
    body.classList.toggle('dark-mode');
    if (body.classList.contains('dark-mode')) {
      this.textContent = 'Switch to Light Mode';
    } else {
      this.textContent = 'Switch to Dark Mode';
    }
  });

document.getElementById('logout-button').addEventListener('click', function () {
    window.location.href = 'mainmenu.html';
});