const PRODUCT_API = "https://fakestoreapi.com/products";

const page = document.querySelector(".page");
const detail_ = document.querySelector(".detail");


const getData = async () => {
    const data = await (await fetch(PRODUCT_API)).json();
    return data;
}
const getProduct = async () => {
  let list = ``;
  const data = await  getData();
  console.log(data);
  data.forEach((i) => {
    list += `<tr onclick="detail(${i.id})"> 
            <td>${i.id}</td>
            <td>${i.title}</td>
            <td>${i.price}</td>
            <td>${i.rating.rate}</td>
            <td>${i.category}</td>
            <td>
              <img src="${i.image}" alt="" class="pageImg"/>
            </td>
             </tr>`;
  });
  page.innerHTML = list;
};

const detail = async (id) => {
    detail_.style.opacity = "0";
  const data  = (await getData())[id-1];
  let detailData = `
      <div class="imgDiv"> 
        <img src="${data.image}" alt="" />
      </div>
      <div class="detail_data">
        <h1>${data.title}</h1>
        <span>$${data.price}</span>
        <p>${data.description}</p>
      </div>
  `
  detail_.innerHTML = detailData;
  detail_.style.opacity = "1";
}
getProduct();


setInterval(() => {
 let random = Math.random() * 20;
 detail(parseInt(random));
}, 5000 )
