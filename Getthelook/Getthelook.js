import "./Getthelook.css";
import data from "../data/data";
const { thelook } = data;

 export const Getthelook = () => 
`<h3>Inspirate ➜</h3>
 <section id="outfits"><ul>
<li><img src="${thelook.img}"></li>
<li><img src="${thelook.img1}"></li>
<li><img src="${thelook.img2}"></li>
<li><img src="${thelook.img3}"></li>
<li><img src="${thelook.img4}"></li>
<li><img src="${thelook.img5}"></li>
<li><img src="${thelook.img6}"></li>
</ul>
</section>
 `;