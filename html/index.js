const sideMenu = document.querySelector("aside");
const menuBtn = document.querySelector("#menu-btn");
const closeBtn = document.querySelector("#close-btn");
const themeToggler = document.querySelector(".theme-toggler");



//show sidebar
menuBtn.addEventListener('click',()=>{
sideMenu.style.display = 'block';
})

//hide sidebar
closeBtn.addEventListener('click',()=>{
    sideMenu.style.display = 'none';
})

//theme toggler
themeToggler.addEventListener('click', () =>{
  document.body.classList.toggle('dark-theme-variables');
  themeToggler.querySelector('span:nth-child(1)').classList.toggle('active');
  themeToggler.querySelector('span:nth-child(2)').classList.toggle('active');
})
Orders.forEach(order => {
    const tr = document.createElement('tr');
    const trContent = `

    <td>${order.productName}</td>
    <td>${order.productNumber}</td>
    <td>${order.payment}</td>
    <td class="${order.status=== 'Declined' ? 'danger':
               order.status=== 'Pending' ? 'warning'
                                          :'success'}">
                              ${order.status}</td> 
    <td class="primary">Details</td>                            
    `;
    tr.innerHTML = trContent;
    document.querySelector('table tbody').appendChild(tr);
})