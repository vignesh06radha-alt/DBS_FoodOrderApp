
/* ═══════════════════════════════════════════
   DATA
═══════════════════════════════════════════ */
const DB = {
  restaurants:[
    {id:1,name:'Spice Garden',  cuisine:'North Indian',emoji:'🍛',bg:'#FFF5EE',rating:4.5,time:'30 min',active:true, rev:84200,orders:312,owner:'Ravi Kumar'},
    {id:2,name:'Pizza Republic',cuisine:'Italian',     emoji:'🍕',bg:'#FFF0F5',rating:4.7,time:'35 min',active:true, rev:97800,orders:418,owner:'Ravi Kumar'},
    {id:3,name:'Wok & Roll',    cuisine:'Chinese',     emoji:'🥢',bg:'#F0FFF4',rating:4.2,time:'25 min',active:true, rev:62100,orders:241,owner:'Priya Patel'},
    {id:4,name:'Burger Barn',   cuisine:'American',    emoji:'🍔',bg:'#FFFDE7',rating:4.0,time:'20 min',active:true, rev:45600,orders:198,owner:'Priya Patel'},
    {id:5,name:'Sushi Zen',     cuisine:'Japanese',    emoji:'🍱',bg:'#E8F5FE',rating:4.8,time:'40 min',active:false,rev:73400,orders:287,owner:'Ravi Kumar'},
    {id:6,name:'Taco Fiesta',   cuisine:'Mexican',     emoji:'🌮',bg:'#F5F0FF',rating:4.3,time:'28 min',active:true, rev:38900,orders:156,owner:'Priya Patel'},
  ],
  menus:{
    1:[
      {id:101,name:'Butter Chicken',  cat:'Main Course',emoji:'🍗',price:280,stock:20,desc:'Creamy tomato-based curry with tender chicken'},
      {id:102,name:'Dal Makhani',     cat:'Main Course',emoji:'🫕',price:220,stock:25,desc:'Slow-cooked black lentils with butter and cream'},
      {id:103,name:'Garlic Naan',     cat:'Breads',     emoji:'🫓',price:60, stock:60,desc:'Soft leavened bread with garlic butter'},
      {id:104,name:'Paneer Tikka',    cat:'Starters',   emoji:'🧀',price:240,stock:15,desc:'Grilled cottage cheese with spiced marinade'},
      {id:105,name:'Mango Lassi',     cat:'Drinks',     emoji:'🥭',price:80, stock:40,desc:'Refreshing yogurt drink blended with mango'},
      {id:106,name:'Chicken Biryani', cat:'Rice',       emoji:'🍚',price:320,stock:18,desc:'Fragrant basmati rice with spiced chicken'},
    ],
    2:[
      {id:201,name:'Margherita Pizza', cat:'Pizza',   emoji:'🍕',price:320,stock:12,desc:'Classic tomato, mozzarella and fresh basil'},
      {id:202,name:'Pepperoni Pizza',  cat:'Pizza',   emoji:'🍕',price:380,stock:10,desc:'Loaded with pepperoni slices and mozzarella'},
      {id:203,name:'Pasta Arrabbiata', cat:'Pasta',   emoji:'🍝',price:280,stock:20,desc:'Penne pasta in spicy tomato sauce'},
      {id:204,name:'Tiramisu',         cat:'Desserts',emoji:'🍰',price:150,stock:8, desc:'Classic Italian dessert with espresso'},
      {id:205,name:'Garlic Bread',     cat:'Starters',emoji:'🥖',price:120,stock:30,desc:'Toasted baguette with herb butter'},
    ],
    3:[
      {id:301,name:'Veg Fried Rice',  cat:'Rice',    emoji:'🍚',price:180,stock:25,desc:'Wok-tossed rice with seasonal vegetables'},
      {id:302,name:'Kung Pao Chicken',cat:'Main',    emoji:'🍜',price:260,stock:18,desc:'Spicy stir-fry with peanuts and dried chilies'},
      {id:303,name:'Spring Rolls',    cat:'Starters',emoji:'🥢',price:120,stock:40,desc:'Crispy rolls stuffed with vegetables'},
      {id:304,name:'Hot & Sour Soup', cat:'Soups',   emoji:'🍲',price:140,stock:30,desc:'Tangy and spicy soup with mushrooms'},
      {id:305,name:'Hakka Noodles',   cat:'Noodles', emoji:'🍜',price:190,stock:22,desc:'Stir-fried noodles with vegetables'},
    ],
    4:[
      {id:401,name:'Classic Burger',  cat:'Burgers',emoji:'🍔',price:220,stock:30,desc:'Beef patty, lettuce, tomato and cheese'},
      {id:402,name:'Chicken Burger',  cat:'Burgers',emoji:'🍔',price:200,stock:25,desc:'Crispy fried chicken with coleslaw'},
      {id:403,name:'Cheese Fries',    cat:'Sides',  emoji:'🍟',price:120,stock:45,desc:'Crispy fries topped with cheddar cheese'},
      {id:404,name:'Chocolate Shake', cat:'Drinks', emoji:'🥤',price:150,stock:20,desc:'Thick creamy chocolate milkshake'},
    ],
    5:[
      {id:501,name:'Salmon Nigiri',cat:'Nigiri',emoji:'🍣',price:180,stock:10,desc:'Fresh Atlantic salmon over rice'},
      {id:502,name:'Dragon Roll',  cat:'Rolls', emoji:'🍱',price:320,stock:8, desc:'Shrimp tempura, avocado and eel'},
    ],
    6:[
      {id:601,name:'Beef Tacos',     cat:'Tacos',   emoji:'🌮',price:180,stock:30,desc:'Corn tortillas with seasoned beef'},
      {id:602,name:'Chicken Burrito',cat:'Burritos',emoji:'🌯',price:220,stock:25,desc:'Flour tortilla with chicken and rice'},
      {id:603,name:'Nachos',         cat:'Starters',emoji:'🧀',price:140,stock:35,desc:'Tortilla chips with cheese and jalapeños'},
    ],
  },
  orders:[
    {id:'ORD-1001',customer:'Rahul Mehta', restId:1,rest:'Spice Garden',  items:'Butter Chicken ×2, Naan ×2',     amt:680, status:'DELIVERED',       time:'2 hrs ago', date:'Dec 18',agentId:1},
    {id:'ORD-1002',customer:'Priya Sharma',restId:2,rest:'Pizza Republic',items:'Pepperoni Pizza ×1, Tiramisu ×2',amt:680, status:'OUT_FOR_DELIVERY',time:'45 min ago',date:'Dec 18',agentId:2},
    {id:'ORD-1003',customer:'Amit Kumar',  restId:3,rest:'Wok & Roll',    items:'Fried Rice ×2, Spring Rolls ×1', amt:480, status:'PREPARING',       time:'20 min ago',date:'Dec 18',agentId:null},
    {id:'ORD-1004',customer:'Sneha Raj',   restId:4,rest:'Burger Barn',   items:'Classic Burger ×1, Fries ×2',   amt:460, status:'PLACED',           time:'5 min ago', date:'Dec 18',agentId:null},
    {id:'ORD-1005',customer:'Karan Doshi', restId:1,rest:'Spice Garden',  items:'Dal Makhani ×2, Naan ×3',       amt:620, status:'CONFIRMED',        time:'15 min ago',date:'Dec 18',agentId:null},
    {id:'ORD-1006',customer:'Rahul Mehta', restId:2,rest:'Pizza Republic',items:'Margherita ×2',                 amt:640, status:'DELIVERED',        time:'6 hrs ago', date:'Dec 17',agentId:1},
  ],
  users:[
    {id:1,name:'Rahul Mehta',  email:'rahul@email.com',  role:'customer',orders:12,spent:8420,joined:'Jan 2024',av:'R'},
    {id:2,name:'Priya Sharma', email:'priya@email.com',  role:'customer',orders:8, spent:5120,joined:'Feb 2024',av:'P'},
    {id:3,name:'Ravi Kumar',   email:'ravi@seller.com',  role:'seller',  orders:0, spent:0,   joined:'Dec 2023',av:'R'},
    {id:4,name:'Amit Kumar',   email:'amit@email.com',   role:'customer',orders:19,spent:12800,joined:'Nov 2023',av:'A'},
    {id:5,name:'Admin User',   email:'admin@food.com',   role:'admin',   orders:0, spent:0,   joined:'Oct 2023',av:'A'},
    {id:6,name:'Priya Patel',  email:'priya2@seller.com',role:'seller',  orders:0, spent:0,   joined:'Jan 2024',av:'P'},
    {id:7,name:'Meena Iyer',   email:'meena@email.com',  role:'customer',orders:5, spent:3200,joined:'Mar 2024',av:'M'},
    {id:8,name:'Karan Doshi',  email:'karan@email.com',  role:'customer',orders:3, spent:1840,joined:'Apr 2024',av:'K'},
  ],
  statusLog:[
    {status:'PLACED',           time:'6:00 PM',note:'Order received by system'},
    {status:'CONFIRMED',        time:'6:04 PM',note:'Restaurant confirmed the order'},
    {status:'PREPARING',        time:'6:10 PM',note:'Kitchen started preparing'},
    {status:'OUT_FOR_DELIVERY', time:'6:38 PM',note:'Agent #1 picked up the order'},
    {status:'DELIVERED',        time:'7:02 PM',note:'Delivered to customer'},
  ],
  promos:{
    'WELCOME20':{disc:20,label:'20% off for new users'},
    'FLAT50':{disc:50,label:'Flat ₹50 off'},
    'SAVE10':{disc:10,label:'10% off on orders above ₹400'},
  },
  agents:[
    {id:1,name:'Raj Driver',  phone:'8000000001',available:true},
    {id:2,name:'Suresh Kumar',phone:'8000000002',available:true},
    {id:3,name:'Arun Vel',    phone:'8000000003',available:false},
  ],
  notifications:{
    customer:[
      {id:1,text:'Your order <strong>ORD-1002</strong> is out for delivery! ETA ~15 min.',time:'12 min ago',read:false,color:'var(--orange)'},
      {id:2,text:'<strong>Pizza Republic</strong> confirmed your last order.',time:'46 min ago',read:false,color:'var(--green)'},
      {id:3,text:'Your rating for <strong>Spice Garden</strong> was published.',time:'2 hrs ago',read:true,color:'var(--amber)'},
      {id:4,text:'New restaurant <strong>Taco Fiesta</strong> opened near you!',time:'1 day ago',read:true,color:'var(--blue)'},
    ],
    seller:[
      {id:1,text:'<strong>New order ORD-1004</strong> received — ₹460',time:'5 min ago',read:false,color:'var(--orange)'},
      {id:2,text:'<strong>Garlic Naan</strong> is running low on stock (8 left).',time:'1 hr ago',read:false,color:'var(--amber)'},
      {id:3,text:'You received a <strong>5-star review</strong> from Rahul M.',time:'3 hrs ago',read:true,color:'var(--green)'},
    ],
    admin:[
      {id:1,text:'<strong>Sushi Zen</strong> has been inactive for 3+ days.',time:'2 hrs ago',read:false,color:'var(--amber)'},
      {id:2,text:'Platform revenue crossed <strong>₹4 Lakhs</strong> this month!',time:'4 hrs ago',read:false,color:'var(--green)'},
      {id:3,text:'<strong>12 new users</strong> registered today.',time:'6 hrs ago',read:true,color:'var(--blue)'},
    ],
  }
};

/* ═══════════════════════════════════════════
   APP STATE
═══════════════════════════════════════════ */
const S = {
  role:'customer',
  user:{name:'Rahul Mehta',email:'rahul@email.com',av:'R'},
  loginRole:'customer',
  page:'home',
  selectedRest:null,
  trackOrder:'ORD-1002',
  cart:{},           // itemId -> {item, qty}
  promoApplied:null,
  deliveryAddr:'42, 3rd Cross St, Anna Nagar, Chennai – 600040',
  ratingVal:0,
  ratingRest:1,
  sellerItems:[...DB.menus[1]],
  editItemId:null,
  notifOpen:false,
  searchQ:'',
  restaurantActiveStates: Object.fromEntries(DB.restaurants.map(r=>[r.id,r.active])),
  confirmedOrder:null,
  userProfile:{name:'Rahul Mehta',email:'rahul@email.com',phone:'9876543210',address:'42, 3rd Cross Street, Anna Nagar, Chennai – 600040'},
};

/* ═══════════════════════════════════════════
   NAV CONFIG
═══════════════════════════════════════════ */
const NAV = {
  customer:[
    {label:'Home',        p:'home',       icon:'🏠'},
    {label:'Restaurants', p:'restaurants',icon:'🍽️'},
    {label:'Cart',        p:'cart',       icon:'🛒',cart:true},
    {label:'My Orders',   p:'orders',     icon:'📦'},
    {label:'Track Order', p:'track',      icon:'📍'},
    {label:'Ratings',     p:'ratings',    icon:'⭐'},
    {label:'Profile',     p:'profile',    icon:'👤'},
  ],
  seller:[
    {label:'Dashboard',   p:'s-dash',    icon:'📊'},
    {label:'Orders',      p:'s-orders',  icon:'📋'},
    {label:'Menu CRUD',   p:'s-menu',    icon:'🍴'},
    {label:'Revenue',     p:'s-revenue', icon:'💰'},
    {label:'Top Items',   p:'s-topitems',icon:'🔥'},
    {label:'Profile',     p:'profile',   icon:'👤'},
  ],
  admin:[
    {label:'Dashboard',   p:'a-dash',        icon:'📊'},
    {label:'Users',       p:'a-users',       icon:'👥'},
    {label:'Restaurants', p:'a-restaurants', icon:'🏪'},
    {label:'Orders',      p:'a-orders',      icon:'📦'},
    {label:'Analytics',   p:'a-analytics',   icon:'📈'},
    {label:'Profile',     p:'profile',       icon:'👤'},
  ],
};
const PAGE_NAMES={
  home:'Home',restaurants:'Restaurants',menu:'Menu',cart:'My Cart',
  orders:'My Orders',track:'Order Tracking',ratings:'Ratings',
  profile:'My Profile','order-confirm':'Order Confirmed',
  's-dash':'Dashboard','s-orders':'Order Management','s-menu':'Menu Management',
  's-revenue':'Revenue Analytics','s-topitems':'Top Selling Items',
  'a-dash':'Platform Dashboard','a-users':'User Management',
  'a-restaurants':'Restaurant Management','a-orders':'All Orders','a-analytics':'Analytics',
};

/* ═══════════════════════════════════════════
   ROUTING & SIDEBAR
═══════════════════════════════════════════ */
function goto(p){
  S.page=p;
  document.getElementById('topTitle').textContent=PAGE_NAMES[p]||'FoodHub';
  document.querySelectorAll('.sb-item').forEach(el=>el.classList.toggle('active',el.dataset.p===p));
  updateCartBadge();
  const wrap=document.getElementById('pageWrap');
  wrap.innerHTML='';
  wrap.innerHTML=PAGES[p]?PAGES[p]():`<div class="empty"><div class="empty-ico">🔍</div><div class="empty-title">Page not found</div></div>`;
  window.scrollTo(0,0);
}

function buildSidebar(){
  const items=NAV[S.role]||[];
  let html=`<div class="sb-section">${{customer:'Customer',seller:'Seller Panel',admin:'Admin Panel'}[S.role]}</div>`;
  items.forEach(it=>{
    const badge=it.cart&&cartCount()>0?`<span class="sb-badge">${cartCount()}</span>`:'';
    const notifDot=it.p==='orders'&&S.role==='customer'?`<div class="sb-notif-dot"></div>`:'';
    html+=`<div class="sb-item${S.page===it.p?' active':''}" data-p="${it.p}" onclick="goto('${it.p}')">
      <span class="sb-icon">${it.icon}</span>${it.label}${badge}${notifDot}
    </div>`;
  });
  document.getElementById('sbNav').innerHTML=html;
  document.getElementById('sbName').textContent=S.user.name;
  document.getElementById('sbRole').textContent=S.role.charAt(0).toUpperCase()+S.role.slice(1);
  document.getElementById('sbAvatar').textContent=S.user.av;
  document.getElementById('topAvatar').textContent=S.user.av;
  buildNotifPanel();
}

function updateCartBadge(){
  document.querySelectorAll('.sb-badge').forEach(el=>el.remove());
  document.querySelectorAll('.sb-item[data-p="cart"]').forEach(el=>{
    if(cartCount()>0) el.innerHTML+=`<span class="sb-badge">${cartCount()}</span>`;
  });
  const fc=document.getElementById('floatCart');
  if(fc){
    fc.classList.toggle('visible',cartCount()>0);
    const cn=document.getElementById('fcN');
    const ct=document.getElementById('fcT');
    if(cn) cn.textContent=cartCount();
    if(ct) ct.textContent=`₹${cartTotal()}`;
  }
}

/* ═══════════════════════════════════════════
   NOTIFICATIONS
═══════════════════════════════════════════ */
function buildNotifPanel(){
  const notifs=DB.notifications[S.role]||[];
  const unread=notifs.filter(n=>!n.read).length;
  const nc=document.getElementById('notifCount');
  if(unread>0){nc.textContent=unread;nc.style.display='flex'}else{nc.style.display='none'}
  document.getElementById('notifList').innerHTML=notifs.map(n=>`
    <div class="notif-item${n.read?'':' unread'}" onclick="readNotif(${n.id})">
      <div class="notif-dot" style="background:${n.color};margin-top:5px;flex-shrink:0"></div>
      <div style="flex:1"><div class="notif-text">${n.text}</div><div class="notif-time">${n.time}</div></div>
    </div>`).join('');
}
function toggleNotif(){
  S.notifOpen=!S.notifOpen;
  document.getElementById('notifPanel').classList.toggle('open',S.notifOpen);
}
function readNotif(id){
  const notifs=DB.notifications[S.role]||[];
  const n=notifs.find(x=>x.id===id);
  if(n){n.read=true}
  buildNotifPanel();
}
function markAllRead(){
  (DB.notifications[S.role]||[]).forEach(n=>n.read=true);
  buildNotifPanel();
  closeNotif();
  toast('All notifications marked as read');
}
function closeNotif(){S.notifOpen=false;document.getElementById('notifPanel').classList.remove('open')}
document.addEventListener('click',e=>{
  if(!document.getElementById('notifBtn').contains(e.target)&&!document.getElementById('notifPanel').contains(e.target)) closeNotif();
});

/* ═══════════════════════════════════════════
   AUTH
═══════════════════════════════════════════ */
function pickRole(r,el){
  S.loginRole=r;
  document.querySelectorAll('.role-opt').forEach(x=>x.classList.remove('active'));
  el.classList.add('active');
  const em={customer:'rahul@email.com',seller:'ravi@seller.com',admin:'admin@food.com'};
  document.getElementById('authEmail').value=em[r];
}
function doLogin(){
  S.role=S.loginRole;
  const users={customer:{name:'Rahul Mehta',email:'rahul@email.com',av:'R'},seller:{name:'Ravi Kumar',email:'ravi@seller.com',av:'R'},admin:{name:'Admin User',email:'admin@food.com',av:'A'}};
  S.user=users[S.role];
  S.userProfile={name:S.user.name,email:S.user.email,phone:'9876543210',address:'42, 3rd Cross Street, Anna Nagar, Chennai – 600040'};
  document.getElementById('authScreen').classList.add('off');
  document.getElementById('appShell').classList.add('show');
  document.getElementById('topDate').textContent=new Date().toLocaleDateString('en-IN',{weekday:'short',day:'numeric',month:'short'});
  buildSidebar();
  const start={customer:'home',seller:'s-dash',admin:'a-dash'};
  goto(start[S.role]);
  toast(`Welcome, ${S.user.name}! 👋`);
}
function doLogout(){
  S.cart={};S.page='home';S.promoApplied=null;
  document.getElementById('appShell').classList.remove('show');
  document.getElementById('authScreen').classList.remove('off');
  toast('Logged out successfully');
}

/* ═══════════════════════════════════════════
   CART
═══════════════════════════════════════════ */
function cartCount(){return Object.values(S.cart).reduce((a,b)=>a+b.qty,0)}
function cartTotal(){return Object.values(S.cart).reduce((a,b)=>a+b.qty*b.item.price,0)}
function cartSubtotal(){return cartTotal()}
function addToCart(itemId,restId){
  const items=DB.menus[restId]||[];
  const item=items.find(i=>i.id===itemId);
  if(!item) return;
  if(!S.cart[itemId]) S.cart[itemId]={item,qty:0};
  S.cart[itemId].qty++;
  updateCartBadge();
  toast(`${item.name} added to cart 🛒`);
  // update qty display
  const el=document.querySelector(`[data-qid="${itemId}"]`);
  if(el) el.textContent=S.cart[itemId].qty;
  updateFloatCart();
}
function removeFromCart(itemId){
  if(!S.cart[itemId]) return;
  S.cart[itemId].qty--;
  if(S.cart[itemId].qty<=0) delete S.cart[itemId];
  updateCartBadge();
  updateFloatCart();
  // refresh qty in menu
  const el=document.querySelector(`[data-qid="${itemId}"]`);
  if(el) el.textContent=(S.cart[itemId]?.qty||0);
  // refresh cart page if open
  if(S.page==='cart') goto('cart');
}
function changeQty(itemId,d){
  if(!S.cart[itemId]) return;
  S.cart[itemId].qty+=d;
  if(S.cart[itemId].qty<=0) delete S.cart[itemId];
  updateCartBadge();
  goto('cart');
}
function updateFloatCart(){
  const fc=document.getElementById('floatCart');
  if(!fc) return;
  fc.classList.toggle('visible',cartCount()>0);
  const cn=document.getElementById('fcN');const ct=document.getElementById('fcT');
  if(cn) cn.textContent=cartCount();
  if(ct) ct.textContent=`₹${cartTotal()}`;
}
function applyPromo(){
  const code=document.getElementById('promoInput')?.value?.trim()?.toUpperCase();
  if(!code){toast('Enter a promo code');return}
  if(DB.promos[code]){
    S.promoApplied={code,...DB.promos[code]};
    toast(`Promo applied: ${DB.promos[code].label} ✓`);
    goto('cart');
  } else {toast('Invalid promo code ✕')}
}
function removePromo(){S.promoApplied=null;goto('cart');toast('Promo removed')}
function placeOrder(){
  const items=Object.values(S.cart);
  if(!items.length){toast('Cart is empty');return}
  const restId=items[0].item.id>500?6:items[0].item.id>400?4:items[0].item.id>300?3:items[0].item.id>200?2:1;
  const rest=DB.restaurants.find(r=>r.id===restId)||DB.restaurants[0];
  S.confirmedOrder={
    id:'ORD-'+Math.floor(Math.random()*9000+1000),
    rest:rest.name,
    items:items.map(ci=>`${ci.item.name} ×${ci.qty}`).join(', '),
    amt:calcOrderTotal(),
    time:new Date().toLocaleTimeString('en-IN',{hour:'2-digit',minute:'2-digit'}),
    status:'PLACED',
  };
  S.cart={};S.promoApplied=null;
  updateCartBadge();
  goto('order-confirm');
}
function calcOrderTotal(){
  const sub=cartSubtotal();
  const del=40;
  const tax=Math.round(sub*.05);
  const disc=S.promoApplied?Math.round(S.promoApplied.disc==='%'?sub*S.promoApplied.disc/100:S.promoApplied.disc):0;
  return sub+del+tax-disc;
}

/* ═══════════════════════════════════════════
   MODALS
═══════════════════════════════════════════ */
function openOverlay(id){document.getElementById(id).classList.add('open')}
function closeOverlay(id){document.getElementById(id).classList.remove('open')}
function saveAddress(){
  S.deliveryAddr=`${document.getElementById('addr-street').value}, ${document.getElementById('addr-city').value} – ${document.getElementById('addr-pin').value}`;
  closeOverlay('addrOverlay');
  toast('Address saved ✓');
  if(S.page==='cart') goto('cart');
}
function saveMenuItem(){
  const name=document.getElementById('mi-name').value.trim();
  if(!name){toast('Item name is required');return}
  const price=parseFloat(document.getElementById('mi-price').value)||0;
  const stock=parseInt(document.getElementById('mi-stock').value)||0;
  const cat=document.getElementById('mi-cat').value||'General';
  const desc=document.getElementById('mi-desc').value||'';
  if(S.editItemId){
    const idx=S.sellerItems.findIndex(i=>i.id===S.editItemId);
    if(idx>-1) S.sellerItems[idx]={...S.sellerItems[idx],name,cat,price,stock,desc};
    S.editItemId=null;
    document.getElementById('addItemTitle').textContent='Add Menu Item';
    toast(`"${name}" updated ✓`);
  } else {
    S.sellerItems.push({id:Date.now(),name,cat,price,stock,desc,emoji:'🍽️'});
    toast(`"${name}" added to menu ✓`);
  }
  closeOverlay('addItemOverlay');
  goto('s-menu');
}
function editItem(id){
  const item=S.sellerItems.find(i=>i.id===id);
  if(!item) return;
  S.editItemId=id;
  document.getElementById('addItemTitle').textContent='Edit Menu Item';
  document.getElementById('mi-name').value=item.name;
  document.getElementById('mi-cat').value=item.cat;
  document.getElementById('mi-price').value=item.price;
  document.getElementById('mi-stock').value=item.stock;
  document.getElementById('mi-desc').value=item.desc||'';
  openOverlay('addItemOverlay');
}
function deleteItem(id){
  S.sellerItems=S.sellerItems.filter(i=>i.id!==id);
  toast('Item removed from menu');
  goto('s-menu');
}
function toggleItemAvail(id){
  const item=S.sellerItems.find(i=>i.id===id);
  if(item){item.available=!(item.available!==false);toast(`${item.name} marked ${item.available!==false?'available':'unavailable'}`)}
  goto('s-menu');
}

/* ═══════════════════════════════════════════
   RATINGS
═══════════════════════════════════════════ */
function setRating(v){
  S.ratingVal=v;
  for(let i=1;i<=5;i++){const el=document.getElementById(`st${i}`);if(el)el.className='star'+(i<=v?' on':'')}
  const lbl=document.getElementById('ratingLbl');
  if(lbl) lbl.textContent=['','Poor','Fair','Good','Very Good','Excellent'][v]||'';
}
function submitRating(){
  if(!S.ratingVal){toast('Please select a rating');return}
  toast('Review submitted! Thank you 🙏');
  S.ratingVal=0;
}

/* ═══════════════════════════════════════════
   ADMIN ACTIONS
═══════════════════════════════════════════ */
function toggleRestaurant(id){
  S.restaurantActiveStates[id]=!S.restaurantActiveStates[id];
  const r=DB.restaurants.find(x=>x.id===id);
  toast(`${r?.name} ${S.restaurantActiveStates[id]?'activated':'deactivated'}`);
  goto('a-restaurants');
}
function updateOrderStatus(orderId,status){
  if(!status) return;
  const o=DB.orders.find(x=>x.id===orderId);
  if(o) o.status=status;
  toast(`Order ${orderId} → ${status.replace(/_/g,' ')} ✓`);
}

/* ═══════════════════════════════════════════
   PROFILE SAVE
═══════════════════════════════════════════ */
function saveProfile(){
  S.userProfile.name=document.getElementById('pf-name')?.value||S.userProfile.name;
  S.userProfile.email=document.getElementById('pf-email')?.value||S.userProfile.email;
  S.userProfile.phone=document.getElementById('pf-phone')?.value||S.userProfile.phone;
  S.userProfile.address=document.getElementById('pf-addr')?.value||S.userProfile.address;
  S.user.name=S.userProfile.name;
  document.getElementById('sbName').textContent=S.user.name;
  toast('Profile updated ✓');
}

/* ═══════════════════════════════════════════
   HELPERS
═══════════════════════════════════════════ */
function sp(status){
  const map={PLACED:'sp-placed',CONFIRMED:'sp-confirmed',PREPARING:'sp-preparing',OUT_FOR_DELIVERY:'sp-out',DELIVERED:'sp-delivered',CANCELLED:'sp-cancelled'};
  return `<span class="sp ${map[status]||''}">${status.replace(/_/g,' ')}</span>`;
}
function avColor(i){return['av-1','av-2','av-3','av-4','av-5'][i%5]}
let _toast;
function toast(msg){
  const el=document.getElementById('toast');
  el.textContent=msg;el.classList.add('on');
  clearTimeout(_toast);_toast=setTimeout(()=>el.classList.remove('on'),2500);
}

/* ═══════════════════════════════════════════
   FILTER HELPERS
═══════════════════════════════════════════ */
function filterRests(q){
  document.querySelectorAll('.rest-card').forEach(c=>{
    const n=(c.dataset.n||'').toLowerCase();
    const cu=(c.dataset.cu||'').toLowerCase();
    c.style.display=(n.includes(q.toLowerCase())||cu.includes(q.toLowerCase()))?'':'none';
  });
}
function filterCuisine(c,el){
  document.querySelectorAll('.chip').forEach(t=>t.classList.remove('active'));
  el.classList.add('active');
  document.querySelectorAll('.rest-card').forEach(card=>{
    card.style.display=(c==='All'||card.dataset.cu===c)?'':'none';
  });
}
function filterMenu(cat,el){
  document.querySelectorAll('.chip').forEach(t=>t.classList.remove('active'));
  el.classList.add('active');
  document.querySelectorAll('.menu-card').forEach(card=>{
    card.style.display=(cat==='All'||card.dataset.cat===cat)?'':'none';
  });
}
function filterUsers(role,el){
  document.querySelectorAll('.chip').forEach(t=>t.classList.remove('active'));
  el.classList.add('active');
  document.querySelectorAll('tr[data-role]').forEach(row=>{
    row.style.display=(role==='all'||row.dataset.role===role)?'':'none';
  });
}

/* ═══════════════════════════════════════════
   PAGE RENDERERS
═══════════════════════════════════════════ */
const PAGES={};

/* ─────── CUSTOMER: HOME ─────── */
PAGES['home']=()=>{
  const h=new Date().getHours();
  const g=h<12?'Good morning':'h<17'?'Good afternoon':'Good evening';
  const greet=h<12?'Good morning':h<17?'Good afternoon':'Good evening';
  return `
<div class="hero">
  <div>
    <div class="hero-greeting">${greet} ☀️</div>
    <div class="hero-title">Hungry, ${S.user.name.split(' ')[0]}?<br>Let's find something great.</div>
    <div class="hero-sub">${DB.restaurants.filter(r=>r.active).length} restaurants open near you right now</div>
    <div class="hero-cta">
      <button class="btn btn-primary" onclick="goto('restaurants')">Browse Restaurants →</button>
    </div>
  </div>
  <div class="hero-img">🍽️</div>
</div>

<div class="kpi-row">
  <div class="kpi" style="--kpi-color:var(--orange)"><span class="kpi-icon">🏪</span><div class="kpi-label">Open Restaurants</div><div class="kpi-value">${DB.restaurants.filter(r=>r.active).length}</div><div class="kpi-sub">Available now</div></div>
  <div class="kpi" style="--kpi-color:var(--green)"><span class="kpi-icon">🛒</span><div class="kpi-label">Cart Items</div><div class="kpi-value">${cartCount()}</div><div class="kpi-sub">${cartCount()>0?'<button class="btn btn-xs btn-outline" onclick="goto(\'cart\')">View cart</button>':'Start browsing'}</div></div>
  <div class="kpi" style="--kpi-color:var(--amber)"><span class="kpi-icon">📦</span><div class="kpi-label">My Orders</div><div class="kpi-value">2</div><div class="kpi-sub">This week</div></div>
</div>

<div class="sec-head">
  <div><div class="sec-title">Top Picks For You</div><div class="sec-sub">Based on ratings and delivery speed</div></div>
  <button class="btn btn-outline btn-sm" onclick="goto('restaurants')">View all</button>
</div>
<div class="rest-grid">
${DB.restaurants.filter(r=>r.active).slice(0,4).map(r=>`
  <div class="rest-card" data-n="${r.name.toLowerCase()}" data-cu="${r.cuisine}" onclick="S.selectedRest=${r.id};goto('menu')">
    <div class="rest-cover" style="background:${r.bg}">
      <span>${r.emoji}</span>
      <span class="rest-open-tag" style="background:rgba(234,244,238,.9);color:#2D6047;font-size:10px;font-weight:700;">● Open</span>
    </div>
    <div class="rest-body">
      <div class="rest-name">${r.name}</div>
      <div class="rest-cuisine">${r.cuisine}</div>
      <div class="rest-meta"><span class="rest-stars">★</span><span class="rest-rating">${r.rating}</span><span>⏱ ${r.time}</span></div>
    </div>
  </div>`).join('')}
</div>

<div class="sec-head mt24">
  <div><div class="sec-title">Recent Orders</div><div class="sec-sub">Quick reorder</div></div>
  <button class="btn btn-outline btn-sm" onclick="goto('orders')">View all</button>
</div>
${DB.orders.filter(o=>o.customer===S.user.name).slice(0,2).map(o=>`
  <div class="card mb12" style="cursor:default">
    <div class="card-body-sm flex fai fjb">
      <div>
        <div class="flex fai gap10"><span class="fw7">${o.id}</span>${sp(o.status)}</div>
        <div class="tm tsm mt4">${o.rest} · ${o.items}</div>
        <div class="tm txs mt4">${o.date} · ${o.time}</div>
      </div>
      <div style="text-align:right">
        <div class="lora fw7" style="font-size:16px;color:var(--orange)">₹${o.amt}</div>
        <div class="flex gap6 mt8">
          <button class="btn btn-xs btn-outline" onclick="S.trackOrder='${o.id}';goto('track')">Track</button>
          <button class="btn btn-xs btn-ghost" onclick="toast('Reorder placed! 🎉')">Reorder</button>
        </div>
      </div>
    </div>
  </div>
`).join('')}`;
};

/* ─────── CUSTOMER: RESTAURANTS ─────── */
PAGES['restaurants']=()=>`
<div class="search-wrap">
  <span class="search-icon">🔍</span>
  <input placeholder="Search restaurants or cuisines…" oninput="filterRests(this.value)"/>
</div>
<div class="chips">
  ${['All','North Indian','Italian','Chinese','American','Japanese','Mexican'].map((c,i)=>`
    <div class="chip${i===0?' active':''}" onclick="filterCuisine('${c}',this)">${c}</div>
  `).join('')}
</div>
<div class="sec-head">
  <div class="sec-title">All Restaurants <span style="font-size:14px;color:var(--muted);font-weight:400">(${DB.restaurants.length})</span></div>
</div>
<div class="rest-grid">
${DB.restaurants.map(r=>{
  const active=S.restaurantActiveStates[r.id];
  return `<div class="rest-card${!active?' closed':''}" data-n="${r.name.toLowerCase()}" data-cu="${r.cuisine}" onclick="S.selectedRest=${r.id};goto('menu')">
    <div class="rest-cover" style="background:${r.bg}">
      <span>${r.emoji}</span>
      <span class="rest-open-tag" style="background:${active?'rgba(234,244,238,.9)':'rgba(252,234,234,.9)'};color:${active?'#2D6047':'#8B3232'};font-size:10px;font-weight:700;">
        ${active?'● Open':'● Closed'}
      </span>
    </div>
    <div class="rest-body">
      <div class="rest-name">${r.name}</div>
      <div class="rest-cuisine">${r.cuisine}</div>
      <div class="rest-meta"><span class="rest-stars">★</span><span class="rest-rating">${r.rating}</span><span>⏱ ${r.time}</span></div>
    </div>
  </div>`;
}).join('')}
</div>`;

/* ─────── CUSTOMER: MENU ─────── */
PAGES['menu']=()=>{
  const r=DB.restaurants.find(x=>x.id===S.selectedRest)||DB.restaurants[0];
  const items=DB.menus[r.id]||[];
  const cats=[...new Set(items.map(i=>i.cat))];
  const active=S.restaurantActiveStates[r.id];
  return `
<button class="btn btn-ghost btn-sm mb16" onclick="goto('restaurants')">← Back</button>
<div class="rest-hero-strip">
  <div class="rest-hero-em">${r.emoji}</div>
  <div style="flex:1">
    <div class="rest-hero-name">${r.name}</div>
    <div class="rest-hero-meta">
      <span>${r.cuisine}</span><span>★ ${r.rating}</span><span>⏱ ${r.time}</span>
      <span class="badge ${active?'badge-green':'badge-red'}">${active?'Open':'Closed'}</span>
    </div>
  </div>
  <button class="btn btn-outline btn-sm" onclick="goto('ratings')">⭐ Reviews</button>
</div>
${!active?'<div class="warn-banner info-banner mb16">⚠️ This restaurant is currently closed. You can still browse the menu.</div>':''}
<div class="chips">
  <div class="chip active" onclick="filterMenu('All',this)">All</div>
  ${cats.map(c=>`<div class="chip" onclick="filterMenu('${c}',this)">${c}</div>`).join('')}
</div>
<div class="menu-grid" id="menuGrid">
${items.map(item=>{
  const inCart=S.cart[item.id];
  return `<div class="menu-card" data-cat="${item.cat}">
    <span class="menu-em">${item.emoji}</span>
    <div class="menu-name">${item.name}</div>
    <div class="menu-desc">${item.desc}</div>
    <span class="badge badge-muted">${item.cat}</span>
    <div class="menu-foot" style="margin-top:12px">
      <div class="menu-price">₹${item.price}</div>
      ${inCart&&inCart.qty>0?`
        <div class="qty-ctrl">
          <button class="qty-btn" onclick="removeFromCart(${item.id})">−</button>
          <span class="qty-n" data-qid="${item.id}">${inCart.qty}</span>
          <button class="qty-btn" onclick="addToCart(${item.id},${r.id})">+</button>
        </div>`:`
        <button class="btn btn-primary btn-xs" onclick="addToCart(${item.id},${r.id})">+ Add</button>
      `}
    </div>
  </div>`;
}).join('')}
</div>
<div id="floatCart" class="float-cart ${cartCount()>0?'visible':''}" onclick="goto('cart')">
  <div class="fc-count" id="fcN">${cartCount()}</div>
  <span>View Cart</span>
  <span class="fc-sep">·</span>
  <span id="fcT">₹${cartTotal()}</span>
  <span>→</span>
</div>`;
};

/* ─────── CUSTOMER: CART ─────── */
PAGES['cart']=()=>{
  const items=Object.values(S.cart);
  if(!items.length) return `<div class="empty"><div class="empty-ico">🛒</div><div class="empty-title">Your cart is empty</div><div class="empty-desc">Browse restaurants and add some delicious items</div><button class="btn btn-primary" onclick="goto('restaurants')">Browse Restaurants</button></div>`;
  const sub=cartSubtotal();
  const del=40;
  const tax=Math.round(sub*.05);
  let disc=0;
  if(S.promoApplied){
    if(typeof S.promoApplied.disc==='number') disc=S.promoApplied.disc;
  }
  const total=sub+del+tax-disc;
  return `
<div class="g2-aside">
  <div>
    <div class="card mb16">
      <div class="card-head"><div class="card-title">Order Items</div><span class="badge badge-orange">${cartCount()} items</span></div>
      <div class="card-body">
        ${items.map(ci=>`
          <div class="cart-item">
            <div class="cart-em">${ci.item.emoji||'🍽️'}</div>
            <div class="cart-info">
              <div class="cart-name">${ci.item.name}</div>
              <div class="cart-unit">₹${ci.item.price} each</div>
            </div>
            <div class="qty-ctrl" style="margin:0 12px">
              <button class="qty-btn" onclick="changeQty(${ci.item.id},-1)">−</button>
              <span class="qty-n">${ci.qty}</span>
              <button class="qty-btn" onclick="changeQty(${ci.item.id},1)">+</button>
            </div>
            <div class="cart-price">₹${ci.qty*ci.item.price}</div>
          </div>`).join('')}
      </div>
    </div>

    <div class="card">
      <div class="card-head"><div class="card-title">Delivery Address</div><button class="btn btn-outline btn-sm" onclick="openOverlay('addrOverlay')">Change</button></div>
      <div class="card-body-sm">
        <div class="flex gap8 fai">
          <span style="font-size:18px">📍</span>
          <div>
            <div class="fw6">${S.userProfile.name} · ${S.userProfile.phone||'9876543210'}</div>
            <div class="tm tsm mt4">${S.deliveryAddr}</div>
          </div>
        </div>
      </div>
    </div>
  </div>

  <div>
    <div class="card">
      <div class="card-head"><div class="card-title">Order Summary</div></div>
      <div class="card-body">
        <div class="promo-row">
          <input id="promoInput" placeholder="Enter promo code" value="${S.promoApplied?S.promoApplied.code:''}" style="text-transform:uppercase"/>
          <button class="btn btn-outline btn-sm" onclick="applyPromo()">Apply</button>
        </div>
        ${S.promoApplied?`<div class="promo-applied">✓ ${S.promoApplied.label} <span style="margin-left:auto;cursor:pointer;color:var(--red)" onclick="removePromo()">✕ Remove</span></div>`:''}
        <div class="tm tsm mb12">Try: <code>WELCOME20</code>, <code>FLAT50</code>, <code>SAVE10</code></div>

        <hr class="div">
        <div class="sum-row"><span class="tm">Subtotal</span><span>₹${sub}</span></div>
        <div class="sum-row"><span class="tm">Delivery fee</span><span>₹${del}</span></div>
        <div class="sum-row"><span class="tm">GST (5%)</span><span>₹${tax}</span></div>
        ${disc>0?`<div class="sum-row"><span class="col-green">Promo discount</span><span class="col-green">−₹${disc}</span></div>`:''}
        <div class="sum-total"><span>Total</span><span class="col-orange lora">₹${total}</span></div>

        <hr class="div">
        <div class="fld"><label>Payment Method</label>
          <select class="fld select" style="width:100%;padding:9px 13px;border:1.5px solid var(--border);border-radius:var(--r-xs);font-size:13px;outline:none;background:var(--bg)">
            <option>Cash on Delivery</option>
            <option>UPI / GPay / PhonePe</option>
            <option>Credit / Debit Card</option>
            <option>Net Banking</option>
          </select>
        </div>
        <button class="btn btn-primary btn-full btn-lg mt8" onclick="placeOrder()">Place Order · ₹${total} →</button>
        <div class="tm tsm mt12" style="text-align:center">🔒 Secured by 256-bit SSL encryption</div>
      </div>
    </div>
  </div>
</div>`;
};

/* ─────── CUSTOMER: ORDER CONFIRMED ─────── */
PAGES['order-confirm']=()=>{
  const o=S.confirmedOrder||{id:'ORD-XXXX',rest:'Restaurant',items:'Items',amt:0,time:'--:--'};
  return `
<div class="success-wrap">
  <div class="success-ring">🎉</div>
  <div class="success-title">Order Placed Successfully!</div>
  <div class="success-sub">Your order has been sent to ${o.rest}. You'll get a confirmation shortly.</div>
  <div class="success-order-box">
    <div class="flex fjb fai mb12">
      <span class="lora fw7" style="font-size:16px">${o.id}</span>
      ${sp('PLACED')}
    </div>
    <div class="flex fjb"><span class="tm tsm">Restaurant</span><span class="fw6">${o.rest}</span></div>
    <hr class="div" style="margin:10px 0">
    <div class="flex fjb"><span class="tm tsm">Items</span><span class="fw6 tsm" style="max-width:200px;text-align:right">${o.items}</span></div>
    <hr class="div" style="margin:10px 0">
    <div class="flex fjb"><span class="tm tsm">Total Paid</span><span class="lora fw7 col-orange">₹${o.amt}</span></div>
    <div class="flex fjb mt8"><span class="tm tsm">Ordered at</span><span class="tsm">${o.time}</span></div>
  </div>
  <div class="order-timeline-mini">
    <div class="otm-step"><div class="otm-dot done"></div><span>Placed</span></div>
    <div class="otm-line"></div>
    <div class="otm-step"><div class="otm-dot"></div><span>Confirmed</span></div>
    <div class="otm-line"></div>
    <div class="otm-step"><div class="otm-dot"></div><span>Preparing</span></div>
    <div class="otm-line"></div>
    <div class="otm-step"><div class="otm-dot"></div><span>Delivery</span></div>
    <div class="otm-line"></div>
    <div class="otm-step"><div class="otm-dot"></div><span>Done</span></div>
  </div>
  <div class="flex gap12 mt24">
    <button class="btn btn-outline" onclick="S.trackOrder=S.confirmedOrder?.id;goto('track')">📍 Track Order</button>
    <button class="btn btn-primary" onclick="goto('restaurants')">Order More →</button>
  </div>
</div>`;
};

/* ─────── CUSTOMER: MY ORDERS ─────── */
PAGES['orders']=()=>`
${DB.orders.find(o=>o.status==='OUT_FOR_DELIVERY')?`<div class="info-banner">🛵 &nbsp;<strong>ORD-1002</strong> is out for delivery — arriving in ~15 minutes!</div>`:''}
${DB.orders.concat(S.confirmedOrder?[{...S.confirmedOrder,customer:S.user.name}]:[]).filter(o=>o.customer===S.user.name||['Rahul Mehta'].includes(o.customer)).map(o=>`
<div class="card mb12">
  <div class="card-body-sm">
    <div class="flex fai fjb mb8">
      <div class="flex fai gap10">
        <span class="fw7 lora" style="font-size:15px">${o.id}</span>
        ${sp(o.status)}
      </div>
      <div class="lora fw7 col-orange" style="font-size:17px">₹${o.amt}</div>
    </div>
    <div class="fw6 tsm">${o.rest}</div>
    <div class="tm tsm mt4">${o.items}</div>
    <div class="tm txs mt4">${o.date||'Dec 18'} · ${o.time}</div>
    <hr class="div">
    <div class="flex gap8">
      <button class="btn btn-outline btn-xs" onclick="S.trackOrder='${o.id}';goto('track')">📍 Track</button>
      ${o.status==='DELIVERED'?`<button class="btn btn-ghost btn-xs" onclick="goto('ratings')">⭐ Rate</button>`:''}
      <button class="btn btn-ghost btn-xs" onclick="toast('Support ticket created for ${o.id}')">🆘 Help</button>
      <button class="btn btn-ghost btn-xs" onclick="toast('Reorder placed! 🎉')">🔄 Reorder</button>
      ${o.status==='PLACED'?`<button class="btn btn-danger btn-xs" onclick="toast('Order ${o.id} cancellation requested')">Cancel</button>`:''}
    </div>
  </div>
</div>`).join('')}`;

/* ─────── CUSTOMER: TRACK ─────── */
PAGES['track']=()=>{
  const o=DB.orders.find(x=>x.id===S.trackOrder)||DB.orders[0];
  const si=['PLACED','CONFIRMED','PREPARING','OUT_FOR_DELIVERY','DELIVERED'].indexOf(o.status);
  const steps=[
    {ico:'📋',label:'Order Placed',sub:'Received by system'},
    {ico:'✅',label:'Confirmed',sub:'Restaurant confirmed'},
    {ico:'👨‍🍳',label:'Being Prepared',sub:'Chef is cooking your order'},
    {ico:'🛵',label:'Out for Delivery',sub:'Agent picked up your order'},
    {ico:'🎉',label:'Delivered',sub:'Enjoy your meal!'},
  ];
  const agent=o.agentId?DB.agents.find(a=>a.id===o.agentId):null;
  return `
<button class="btn btn-ghost btn-sm mb16" onclick="goto('orders')">← Back to Orders</button>
<div class="g2-aside">
  <div>
    <div class="track-card mb16">
      <div class="card-head">
        <div><div class="card-title">${o.id}</div><div class="tm tsm mt4">${o.rest} · ${o.date||'Dec 18'}</div></div>
        ${sp(o.status)}
      </div>
      <div class="track-steps">
        ${steps.map((s,i)=>{
          const cls=i<si?'done':i===si?'active':'pending';
          const log=DB.statusLog[i];
          return `<div class="track-step ${cls}">
            <div class="track-dot">${i<si?'✓':s.ico}</div>
            <div class="track-info">
              <div class="track-label">${s.label}</div>
              <div class="track-sub">${i<=si?(log?log.time+' · '+log.note:s.sub):'Pending'}</div>
            </div>
          </div>`;
        }).join('')}
      </div>
    </div>
    ${agent?`<div class="card"><div class="card-body-sm flex fai gap12">
      <div style="width:40px;height:40px;border-radius:50%;background:var(--orange-bg);display:flex;align-items:center;justify-content:center;font-size:20px;flex-shrink:0">🛵</div>
      <div><div class="fw7">${agent.name}</div><div class="tm tsm">${agent.phone} · Delivery Agent</div></div>
      <button class="btn btn-outline btn-sm" style="margin-left:auto" onclick="toast('Calling ${agent.name}...')">📞 Call</button>
    </div></div>`:''}
  </div>

  <div style="display:flex;flex-direction:column;gap:16px">
    <div class="card">
      <div class="card-head"><div class="card-title">Order Details</div></div>
      <div class="card-body-sm">
        <div class="tm tsm mb4">Items</div>
        <div class="fw6 tsm mb12">${o.items}</div>
        <hr class="div">
        <div class="flex fjb mb8"><span class="tm tsm">Delivery to</span></div>
        <div class="tsm fw6 mb12">${S.deliveryAddr}</div>
        <hr class="div">
        <div class="flex fjb"><span class="tm">Total paid</span><span class="lora fw7 col-orange">₹${o.amt}</span></div>
      </div>
    </div>
    <div class="card">
      <div class="card-head"><div class="card-title">Status Log</div><span class="txs tm" style="font-style:italic">Auto-logged by DB trigger</span></div>
      <div style="padding:8px 16px 12px">
        ${DB.statusLog.slice(0,si+1).map((l,i)=>`
          <div class="flex fai gap10" style="padding:8px 0;border-bottom:1px solid var(--border)">
            <div style="width:8px;height:8px;border-radius:50%;background:${i===si?'var(--orange)':'var(--green)'};flex-shrink:0"></div>
            <div style="flex:1"><span class="fw6 tsm">${l.status.replace(/_/g,' ')}</span><span class="tm txs"> · ${l.note}</span></div>
            <span class="txs tm">${l.time}</span>
          </div>`).join('')}
      </div>
    </div>
  </div>
</div>`;
};

/* ─────── CUSTOMER: RATINGS ─────── */
PAGES['ratings']=()=>`
<div class="g2" style="align-items:start">
  <div class="card">
    <div class="card-head"><div class="card-title">Write a Review</div></div>
    <div class="card-body">
      <div class="fld"><label>Restaurant</label>
        <select class="fld" style="width:100%;padding:9px 13px;border:1.5px solid var(--border);border-radius:var(--r-xs);font-size:13px;outline:none;background:var(--bg)" onchange="S.ratingRest=parseInt(this.value)">
          ${DB.restaurants.map(r=>`<option value="${r.id}">${r.name}</option>`).join('')}
        </select>
      </div>
      <div class="fld"><label>Link to Order (optional)</label>
        <select class="fld" style="width:100%;padding:9px 13px;border:1.5px solid var(--border);border-radius:var(--r-xs);font-size:13px;outline:none;background:var(--bg)">
          <option>Select an order…</option>
          ${DB.orders.filter(o=>o.status==='DELIVERED').map(o=>`<option>${o.id} · ${o.rest}</option>`).join('')}
        </select>
      </div>
      <div class="fld"><label>Your Rating</label>
        <div class="star-row" style="margin-bottom:4px">
          ${[1,2,3,4,5].map(i=>`<span class="star${i<=S.ratingVal?' on':''}" id="st${i}" onclick="setRating(${i})">★</span>`).join('')}
        </div>
        <div class="tm tsm" id="ratingLbl">${['','Poor','Fair','Good','Very Good','Excellent'][S.ratingVal]||'Tap a star to rate'}</div>
      </div>
      <div class="fld"><label>Your Review</label>
        <textarea class="fld" id="rvText" rows="3" placeholder="Share your honest experience…"></textarea>
      </div>
      <button class="btn btn-primary btn-full" onclick="submitRating()">Submit Review</button>
    </div>
  </div>

  <div>
    <div class="sec-title mb16">Recent Reviews</div>
    ${[
      {name:'Rahul M.',rest:'Spice Garden',   r:5, txt:'Best Butter Chicken in Chennai! Perfect spice level, will definitely reorder.', t:'2 days ago'},
      {name:'Priya S.',rest:'Pizza Republic', r:4, txt:'Fresh ingredients, great pizza. Delivery was slightly slow but worth the wait.',t:'4 days ago'},
      {name:'Amit K.', rest:'Wok & Roll',     r:5, txt:'Best Chinese food in the city! Spring rolls are absolute perfection.',         t:'1 week ago'},
      {name:'Meena I.',rest:'Burger Barn',    r:3, txt:'Decent burgers but fries were cold on arrival. Packaging needs improvement.',  t:'1 week ago'},
    ].map((rv,i)=>`
      <div class="review-card">
        <div class="flex fai gap10 mb8">
          <div style="width:34px;height:34px;border-radius:50%;background:${['var(--orange-bg)','var(--green-bg)','var(--amber-bg)','var(--blue-bg)'][i]};display:flex;align-items:center;justify-content:center;font-family:Lora,serif;font-size:13px;font-weight:700;color:${['var(--orange)','var(--green)','var(--amber)','var(--blue)'][i]};flex-shrink:0">${rv.name[0]}</div>
          <div style="flex:1"><div class="fw7 tsm">${rv.name}</div><div class="tm txs">${rv.rest} · ${rv.t}</div></div>
          <div class="review-stars">${'★'.repeat(rv.r)}${'☆'.repeat(5-rv.r)}</div>
        </div>
        <div class="tsm">${rv.txt}</div>
      </div>`).join('')}
  </div>
</div>`;

/* ─────── CUSTOMER: PROFILE ─────── */
PAGES['profile']=()=>`
<div class="profile-banner">
  <div class="profile-av-big">${S.user.av}</div>
  <div style="position:relative;z-index:1">
    <div class="profile-name">${S.userProfile.name}</div>
    <div class="profile-meta">${S.userProfile.email} · ${S.role.charAt(0).toUpperCase()+S.role.slice(1)}</div>
    <div class="profile-meta mt4">Member since Jan 2024</div>
  </div>
</div>

<div class="g2" style="align-items:start">
  <div class="card">
    <div class="card-head"><div class="card-title">Edit Profile</div></div>
    <div class="card-body">
      <div class="g2">
        <div class="fld"><label>Full Name</label><input id="pf-name" value="${S.userProfile.name}"/></div>
        <div class="fld"><label>Phone</label><input id="pf-phone" value="${S.userProfile.phone||'9876543210'}"/></div>
      </div>
      <div class="fld"><label>Email</label><input id="pf-email" value="${S.userProfile.email}"/></div>
      <div class="fld"><label>Delivery Address</label><textarea id="pf-addr" rows="2">${S.userProfile.address}</textarea></div>
      <button class="btn btn-primary" onclick="saveProfile()">Save Changes</button>
    </div>
  </div>
  <div style="display:flex;flex-direction:column;gap:16px">
    ${S.role==='customer'?`
    <div class="card"><div class="card-head"><div class="card-title">Order Stats</div></div>
      <div class="card-body-sm">
        ${[['Total Orders','12','📦'],['Total Spent','₹8,420','💰'],['Restaurants Tried','5','🏪'],['Reviews Given','3','⭐']].map(([l,v,i])=>`
          <div class="flex fai fjb" style="padding:8px 0;border-bottom:1px solid var(--border)">
            <span class="flex gap8 fai"><span style="font-size:16px">${i}</span><span class="tm tsm">${l}</span></span>
            <span class="fw7">${v}</span>
          </div>`).join('')}
      </div>
    </div>
    <div class="card"><div class="card-head"><div class="card-title">Favourite Restaurants</div></div>
      <div class="card-body-sm">
        ${DB.restaurants.slice(0,3).map(r=>`
          <div class="flex fai gap10" style="padding:8px 0;border-bottom:1px solid var(--border);cursor:pointer" onclick="S.selectedRest=${r.id};goto('menu')">
            <span style="font-size:18px">${r.emoji}</span>
            <div style="flex:1"><div class="fw6 tsm">${r.name}</div><div class="tm txs">${r.cuisine}</div></div>
            <span class="tm txs">★ ${r.rating}</span>
          </div>`).join('')}
      </div>
    </div>`:''}
    <div class="card"><div class="card-body-sm">
      <button class="btn btn-danger btn-full btn-sm" onclick="doLogout()">← Logout</button>
    </div></div>
  </div>
</div>`;

/* ─────── SELLER: DASHBOARD ─────── */
PAGES['s-dash']=()=>`
<div class="kpi-row">
  <div class="kpi" style="--kpi-color:var(--orange)"><span class="kpi-icon">🆕</span><div class="kpi-label">New Orders</div><div class="kpi-value">3</div><div class="kpi-sub"><span class="kpi-up">↑ 2</span> vs yesterday</div></div>
  <div class="kpi" style="--kpi-color:var(--amber)"><span class="kpi-icon">👨‍🍳</span><div class="kpi-label">In Kitchen</div><div class="kpi-value">2</div><div class="kpi-sub">Being prepared</div></div>
  <div class="kpi" style="--kpi-color:var(--green)"><span class="kpi-icon">✅</span><div class="kpi-label">Delivered Today</div><div class="kpi-value">14</div><div class="kpi-sub"><span class="kpi-up">↑ 18%</span></div></div>
  <div class="kpi" style="--kpi-color:var(--slate)"><span class="kpi-icon">💰</span><div class="kpi-label">Today's Revenue</div><div class="kpi-value">₹6,840</div><div class="kpi-sub"><span class="kpi-up">↑ 14%</span> vs avg</div></div>
</div>
<div class="g2">
  <div class="card">
    <div class="card-head"><div class="card-title">Recent Orders</div><button class="btn btn-outline btn-sm" onclick="goto('s-orders')">View all</button></div>
    <div class="tbl-wrap"><table class="tbl">
      <thead><tr><th>Order ID</th><th>Customer</th><th>Amount</th><th>Status</th></tr></thead>
      <tbody>
        ${DB.orders.slice(0,4).map(o=>`<tr>
          <td style="font-family:monospace;font-size:12px">${o.id}</td>
          <td class="fw6">${o.customer}</td>
          <td class="col-orange fw7">₹${o.amt}</td>
          <td>${sp(o.status)}</td>
        </tr>`).join('')}
      </tbody>
    </table></div>
  </div>
  <div class="card">
    <div class="card-head"><div class="card-title">Revenue (Last 6 Months)</div></div>
    <div class="card-body-sm">
      <div class="col-chart">
        ${[['Jul',38],['Aug',52],['Sep',47],['Oct',68],['Nov',72],['Dec',95]].map(([m,v])=>`
          <div class="col-bar-wrap">
            <div class="col-bar" style="height:${v}%;background:${v===95?'var(--green)':'var(--orange)'}"></div>
            <div class="col-lbl">${m}</div>
          </div>`).join('')}
      </div>
    </div>
    <div class="card-head" style="border-top:1px solid var(--border);border-bottom:none"><div class="card-title">Low Stock Alert</div></div>
    <div style="padding:8px 16px 12px">
      ${S.sellerItems.filter(i=>i.stock<=10).slice(0,3).map(i=>`
        <div class="flex fai fjb" style="padding:7px 0;border-bottom:1px solid var(--border)">
          <span class="tsm fw6">${i.emoji||'🍽️'} ${i.name}</span>
          <span class="badge ${i.stock<=5?'badge-red':'badge-amber'}">${i.stock} left</span>
        </div>`).join('')||'<div class="tm tsm" style="padding:8px 0">All items well stocked ✓</div>'}
    </div>
  </div>
</div>`;

/* ─────── SELLER: ORDERS ─────── */
PAGES['s-orders']=()=>`
<div class="kpi-row">
  <div class="kpi" style="--kpi-color:var(--slate)"><span class="kpi-icon">📥</span><div class="kpi-label">Placed</div><div class="kpi-value">${DB.orders.filter(o=>o.status==='PLACED').length}</div></div>
  <div class="kpi" style="--kpi-color:var(--amber)"><span class="kpi-icon">🍳</span><div class="kpi-label">Preparing</div><div class="kpi-value">${DB.orders.filter(o=>o.status==='PREPARING').length}</div></div>
  <div class="kpi" style="--kpi-color:var(--blue)"><span class="kpi-icon">🛵</span><div class="kpi-label">Out for Delivery</div><div class="kpi-value">${DB.orders.filter(o=>o.status==='OUT_FOR_DELIVERY').length}</div></div>
  <div class="kpi" style="--kpi-color:var(--green)"><span class="kpi-icon">✅</span><div class="kpi-label">Delivered</div><div class="kpi-value">${DB.orders.filter(o=>o.status==='DELIVERED').length}</div></div>
</div>
<div class="card">
  <div class="card-head"><div class="card-title">All Orders</div>
    <select class="status-sel" onchange="toast('Filtered')">
      <option>All Statuses</option><option>PLACED</option><option>CONFIRMED</option>
      <option>PREPARING</option><option>OUT_FOR_DELIVERY</option><option>DELIVERED</option>
    </select>
  </div>
  <div class="tbl-wrap"><table class="tbl">
    <thead><tr><th>Order ID</th><th>Customer</th><th>Items</th><th>Amount</th><th>Time</th><th>Status</th><th>Action</th></tr></thead>
    <tbody>
      ${DB.orders.map(o=>`<tr>
        <td style="font-family:monospace;font-size:12px">${o.id}</td>
        <td class="fw6">${o.customer}</td>
        <td class="tm tsm" style="max-width:180px;overflow:hidden;text-overflow:ellipsis;white-space:nowrap">${o.items}</td>
        <td class="col-orange fw7">₹${o.amt}</td>
        <td class="tm tsm">${o.time}</td>
        <td>${sp(o.status)}</td>
        <td>
          <select class="status-sel" onchange="updateOrderStatus('${o.id}',this.value);this.value=''">
            <option value="">Update →</option>
            <option value="CONFIRMED">Confirm</option>
            <option value="PREPARING">Preparing</option>
            <option value="OUT_FOR_DELIVERY">Out for Delivery</option>
            <option value="DELIVERED">Delivered</option>
          </select>
        </td>
      </tr>`).join('')}
    </tbody>
  </table></div>
</div>`;

/* ─────── SELLER: MENU CRUD ─────── */
PAGES['s-menu']=()=>`
<div class="sec-head">
  <div><div class="sec-title">Menu Management</div><div class="sec-sub">Spice Garden · ${S.sellerItems.length} items</div></div>
  <button class="btn btn-primary" onclick="S.editItemId=null;document.getElementById('addItemTitle').textContent='Add Menu Item';openOverlay('addItemOverlay')">+ Add Item</button>
</div>
<div class="card">
  <div class="tbl-wrap"><table class="tbl">
    <thead><tr><th>Item</th><th>Category</th><th>Price</th><th>Stock</th><th>Available</th><th>Actions</th></tr></thead>
    <tbody>
      ${S.sellerItems.map(item=>`<tr>
        <td><div class="flex fai gap10"><span style="font-size:18px">${item.emoji||'🍽️'}</span><div><div class="fw7 tsm">${item.name}</div><div class="tm txs">${item.desc?.substring(0,40)||''}</div></div></div></td>
        <td><span class="badge badge-muted">${item.cat}</span></td>
        <td class="col-orange fw7">₹${item.price}</td>
        <td><span class="badge ${item.stock>10?'badge-green':item.stock>0?'badge-amber':'badge-red'}">${item.stock} left</span></td>
        <td>
          <label class="flex fai gap8" style="cursor:pointer">
            <input type="checkbox" ${item.available!==false?'checked':''} onchange="toggleItemAvail(${item.id})" style="accent-color:var(--green);width:15px;height:15px">
            <span class="tsm">${item.available!==false?'Yes':'No'}</span>
          </label>
        </td>
        <td>
          <div class="flex gap6">
            <button class="btn btn-ghost btn-xs" onclick="editItem(${item.id})">✏️ Edit</button>
            <button class="btn btn-danger btn-xs" onclick="deleteItem(${item.id})">🗑️</button>
          </div>
        </td>
      </tr>`).join('')}
    </tbody>
  </table></div>
</div>`;

/* ─────── SELLER: REVENUE ─────── */
PAGES['s-revenue']=()=>`
<div class="kpi-row">
  <div class="kpi" style="--kpi-color:var(--green)"><span class="kpi-icon">💰</span><div class="kpi-label">Total Revenue</div><div class="kpi-value">₹84,200</div><div class="kpi-sub"><span class="kpi-up">↑ 14%</span> this month</div></div>
  <div class="kpi" style="--kpi-color:var(--orange)"><span class="kpi-icon">📦</span><div class="kpi-label">Total Orders</div><div class="kpi-value">312</div><div class="kpi-sub">This month</div></div>
  <div class="kpi" style="--kpi-color:var(--amber)"><span class="kpi-icon">📊</span><div class="kpi-label">Avg Order Value</div><div class="kpi-value">₹270</div><div class="kpi-sub">Per order</div></div>
  <div class="kpi" style="--kpi-color:var(--slate)"><span class="kpi-icon">⭐</span><div class="kpi-label">Avg Rating</div><div class="kpi-value">4.5</div><div class="kpi-sub">From 98 reviews</div></div>
</div>
<div class="g2">
  <div class="card">
    <div class="card-head"><div class="card-title">Monthly Revenue (₹k)</div></div>
    <div class="card-body-sm">
      <div class="col-chart">
        ${[['Jan',42],['Feb',58],['Mar',51],['Apr',74],['May',68],['Jun',95]].map(([m,v])=>`
          <div class="col-bar-wrap">
            <div class="col-bar" style="height:${v}%;background:${v===95?'var(--green)':'var(--orange)'}"></div>
            <div class="col-lbl">${m}</div>
          </div>`).join('')}
      </div>
    </div>
  </div>
  <div class="card">
    <div class="card-head"><div class="card-title">Revenue by Category</div></div>
    <div class="card-body-sm bar-chart">
      ${[['Main Course',72,'o'],['Breads',48,'a'],['Rice',35,'g'],['Starters',28,'r'],['Drinks',18,'s']].map(([l,v,c])=>`
        <div class="bar-row"><span class="bar-label">${l}</span><div class="bar-track"><div class="bar-fill bf-${c}" style="width:${v}%"></div></div><span class="bar-val">${v}%</span></div>`).join('')}
    </div>
  </div>
</div>
<div class="card mt16">
  <div class="card-head"><div class="card-title">Monthly Breakdown</div></div>
  <div class="tbl-wrap"><table class="tbl">
    <thead><tr><th>Month</th><th>Orders</th><th>Revenue</th><th>Avg Value</th><th>Growth</th></tr></thead>
    <tbody>
      ${[['December 2024',78,'₹21,060','₹270','↑ 14%'],['November 2024',72,'₹18,504','₹257','↑ 8%'],['October 2024',68,'₹17,136','₹252','↑ 5%'],['September 2024',65,'₹15,990','₹246','↓ 2%']].map(([m,o,r,a,g])=>`
        <tr><td class="fw6">${m}</td><td>${o}</td><td class="col-orange fw7">${r}</td><td>${a}</td><td><span class="badge ${g.includes('↑')?'badge-green':'badge-red'}">${g}</span></td></tr>`).join('')}
    </tbody>
  </table></div>
</div>`;

/* ─────── SELLER: TOP ITEMS ─────── */
PAGES['s-topitems']=()=>`
<div class="g2">
  <div class="card">
    <div class="card-head"><div class="card-title">Top Items by Qty Sold</div></div>
    <div class="card-body-sm bar-chart">
      ${[['Butter Chicken',100,'o'],['Garlic Naan',89,'a'],['Chicken Biryani',74,'g'],['Dal Makhani',58,'s'],['Mango Lassi',45,'b']].map(([n,v,c])=>`
        <div class="bar-row"><span class="bar-label">${n}</span><div class="bar-track"><div class="bar-fill bf-${c}" style="width:${v}%"></div></div><span class="bar-val">${v}%</span></div>`).join('')}
    </div>
  </div>
  <div class="card">
    <div class="card-head"><div class="card-title">Top Items by Revenue</div></div>
    <div class="card-body-sm bar-chart">
      ${[['Butter Chicken',100,'o'],['Chicken Biryani',85,'g'],['Paneer Tikka',62,'a'],['Dal Makhani',55,'r'],['Garlic Naan',22,'s']].map(([n,v,c])=>`
        <div class="bar-row"><span class="bar-label">${n}</span><div class="bar-track"><div class="bar-fill bf-${c}" style="width:${v}%"></div></div><span class="bar-val">${v}%</span></div>`).join('')}
    </div>
  </div>
</div>
<div class="card mt16">
  <div class="card-head"><div class="card-title">Full Top Items Table</div></div>
  <div class="tbl-wrap"><table class="tbl">
    <thead><tr><th>Rank</th><th>Item</th><th>Category</th><th>Qty Sold</th><th>Revenue</th><th>Rating</th><th>Trend</th></tr></thead>
    <tbody>
      ${[['🥇','Butter Chicken','Main Course',142,'₹39,760','4.8','↑ 12%'],['🥈','Garlic Naan','Breads',128,'₹7,680','4.6','↑ 8%'],['🥉','Chicken Biryani','Rice',98,'₹31,360','4.7','↑ 5%'],['4️⃣','Dal Makhani','Main Course',87,'₹19,140','4.5','↓ 2%'],['5️⃣','Mango Lassi','Drinks',75,'₹6,000','4.4','↑ 3%']].map(([r,n,c,q,rv,rat,t])=>`
        <tr><td style="font-size:18px">${r}</td><td class="fw7">${n}</td><td><span class="badge badge-muted">${c}</span></td><td>${q} orders</td><td class="col-orange fw7">${rv}</td><td><span style="color:var(--amber)">★</span> ${rat}</td><td><span class="badge ${t.includes('↑')?'badge-green':'badge-red'}">${t}</span></td></tr>`).join('')}
    </tbody>
  </table></div>
</div>`;

/* ─────── ADMIN: DASHBOARD ─────── */
PAGES['a-dash']=()=>`
<div class="kpi-row">
  <div class="kpi" style="--kpi-color:var(--orange)"><span class="kpi-icon">💰</span><div class="kpi-label">Platform Revenue</div><div class="kpi-value">₹4.02L</div><div class="kpi-sub"><span class="kpi-up">↑ 18%</span> this month</div></div>
  <div class="kpi" style="--kpi-color:var(--green)"><span class="kpi-icon">👥</span><div class="kpi-label">Total Users</div><div class="kpi-value">1,248</div><div class="kpi-sub"><span class="kpi-up">+42</span> this week</div></div>
  <div class="kpi" style="--kpi-color:var(--amber)"><span class="kpi-icon">🏪</span><div class="kpi-label">Active Restaurants</div><div class="kpi-value">${DB.restaurants.filter(r=>S.restaurantActiveStates[r.id]).length} / ${DB.restaurants.length}</div><div class="kpi-sub">1 temporarily closed</div></div>
  <div class="kpi" style="--kpi-color:var(--blue)"><span class="kpi-icon">📦</span><div class="kpi-label">Total Orders</div><div class="kpi-value">1,412</div><div class="kpi-sub">84 pending today</div></div>
</div>
<div class="g2">
  <div class="card">
    <div class="card-head"><div class="card-title">Revenue by Restaurant</div></div>
    <div class="card-body-sm bar-chart">
      ${DB.restaurants.sort((a,b)=>b.rev-a.rev).map((r,i)=>`
        <div class="bar-row">
          <span class="bar-label">${r.emoji} ${r.name.split(' ')[0]}</span>
          <div class="bar-track"><div class="bar-fill bf-${['o','g','a','r','s','b'][i]}" style="width:${Math.round(r.rev/97800*100)}%"></div></div>
          <span class="bar-val">₹${(r.rev/1000).toFixed(0)}k</span>
        </div>`).join('')}
    </div>
  </div>
  <div class="card">
    <div class="card-head"><div class="card-title">Live Activity Feed</div></div>
    <div style="padding:6px 16px 12px">
      ${DB.orders.map(o=>`
        <div class="flex fai gap10" style="padding:9px 0;border-bottom:1px solid var(--border)">
          <div style="width:8px;height:8px;border-radius:50%;background:${{DELIVERED:'var(--green)',PLACED:'var(--slate)',CONFIRMED:'var(--amber)',PREPARING:'var(--orange)',OUT_FOR_DELIVERY:'var(--blue)'}[o.status]};flex-shrink:0"></div>
          <div style="flex:1"><span class="fw6 tsm">${o.id}</span><span class="tm txs"> · ${o.customer}</span><div>${sp(o.status)}</div></div>
          <span class="txs tm">${o.time}</span>
        </div>`).join('')}
    </div>
  </div>
</div>
<div class="card mt16">
  <div class="card-head"><div class="card-title">Platform Quick Stats</div></div>
  <div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(150px,1fr));gap:0">
    ${[['Avg Delivery','28 min','🚀'],['Platform Rating','4.5 ★','⭐'],['Peak Hour','7–8 PM','🕖'],['Best Restaurant','Pizza Republic','🏆'],['Top Customer','Amit Kumar','👑'],['Repeat Rate','68%','🔄']].map(([l,v,ic])=>`
      <div style="padding:18px 20px;border-right:1px solid var(--border);border-bottom:1px solid var(--border)">
        <div style="font-size:20px;margin-bottom:6px">${ic}</div>
        <div class="txs tm" style="text-transform:uppercase;letter-spacing:.5px;margin-bottom:4px">${l}</div>
        <div class="fw7" style="font-size:14px">${v}</div>
      </div>`).join('')}
  </div>
</div>`;

/* ─────── ADMIN: USERS ─────── */
PAGES['a-users']=()=>`
<div class="sec-head">
  <div><div class="sec-title">User Management</div><div class="sec-sub">${DB.users.length} total users</div></div>
  <button class="btn btn-primary" onclick="toast('Invite flow would open here')">+ Invite User</button>
</div>
<div class="search-wrap"><span class="search-icon">🔍</span><input placeholder="Search by name or email…"/></div>
<div class="chips">
  ${['All','customer','seller','admin'].map((r,i)=>`
    <div class="chip${i===0?' active':''}" onclick="filterUsers('${r}',this)">${r.charAt(0).toUpperCase()+r.slice(1)}</div>`).join('')}
</div>
<div class="card">
  <div class="tbl-wrap"><table class="tbl">
    <thead><tr><th>User</th><th>Email</th><th>Role</th><th>Orders</th><th>Total Spent</th><th>Joined</th><th>Actions</th></tr></thead>
    <tbody>
      ${DB.users.map((u,i)=>`
        <tr data-role="${u.role}">
          <td><div class="flex fai gap10">
            <div style="width:30px;height:30px;border-radius:50%;background:${['var(--orange-bg)','var(--green-bg)','var(--amber-bg)','var(--blue-bg)','var(--slate-bg)'][i%5]};display:flex;align-items:center;justify-content:center;font-family:Lora,serif;font-size:12px;font-weight:700;color:${['var(--orange)','var(--green)','var(--amber)','var(--blue)','var(--slate)'][i%5]};flex-shrink:0">${u.av}</div>
            <span class="fw7 tsm">${u.name}</span>
          </div></td>
          <td class="tm tsm">${u.email}</td>
          <td><span class="badge ${u.role==='admin'?'badge-orange':u.role==='seller'?'badge-green':'badge-slate'}">${u.role}</span></td>
          <td>${u.orders||'—'}</td>
          <td class="fw6">${u.spent?'₹'+u.spent.toLocaleString():'—'}</td>
          <td class="tm tsm">${u.joined}</td>
          <td><button class="btn btn-ghost btn-xs" onclick="toast('View ${u.name} profile')">View</button></td>
        </tr>`).join('')}
    </tbody>
  </table></div>
</div>`;

/* ─────── ADMIN: RESTAURANTS ─────── */
PAGES['a-restaurants']=()=>`
<div class="sec-head">
  <div><div class="sec-title">Restaurant Management</div><div class="sec-sub">${DB.restaurants.length} restaurants, ${Object.values(S.restaurantActiveStates).filter(Boolean).length} active</div></div>
</div>
<div class="card">
  <div class="tbl-wrap"><table class="tbl">
    <thead><tr><th>Restaurant</th><th>Owner</th><th>Cuisine</th><th>Rating</th><th>Orders</th><th>Revenue</th><th>Status</th><th>Actions</th></tr></thead>
    <tbody>
      ${DB.restaurants.map(r=>{
        const active=S.restaurantActiveStates[r.id];
        return `<tr>
          <td><div class="flex fai gap10"><span style="font-size:20px">${r.emoji}</span><span class="fw7">${r.name}</span></div></td>
          <td class="tm tsm">${r.owner}</td>
          <td>${r.cuisine}</td>
          <td><span style="color:var(--amber)">★</span> <span class="fw7">${r.rating}</span></td>
          <td>${r.orders}</td>
          <td class="col-orange fw7">₹${r.rev.toLocaleString()}</td>
          <td><span class="badge ${active?'badge-green':'badge-red'}">${active?'Active':'Inactive'}</span></td>
          <td>
            <div class="flex gap6">
              <button class="btn btn-ghost btn-xs" onclick="toast('View ${r.name}')">View</button>
              <button class="btn btn-xs ${active?'btn-danger':''}" style="${!active?'background:var(--green-bg);color:var(--green2);border:1.5px solid rgba(58,125,92,.2)':''}" onclick="toggleRestaurant(${r.id})">${active?'Disable':'Enable'}</button>
            </div>
          </td>
        </tr>`;}).join('')}
    </tbody>
  </table></div>
</div>`;

/* ─────── ADMIN: ALL ORDERS ─────── */
PAGES['a-orders']=()=>`
<div class="kpi-row">
  ${[['PLACED','sp-placed'],['CONFIRMED','sp-confirmed'],['PREPARING','sp-preparing'],['OUT_FOR_DELIVERY','sp-out'],['DELIVERED','sp-delivered']].map(([s,cls])=>`
    <div class="kpi" style="--kpi-color:var(--orange);padding:14px 16px">
      <div class="kpi-label">${s.replace(/_/g,' ')}</div>
      <div class="kpi-value" style="font-size:22px">${DB.orders.filter(o=>o.status===s).length}</div>
    </div>`).join('')}
</div>
<div class="card">
  <div class="card-head"><div class="card-title">All Orders</div>
    <div class="flex gap8">
      <select class="status-sel"><option>All Statuses</option><option>PLACED</option><option>CONFIRMED</option><option>PREPARING</option><option>OUT_FOR_DELIVERY</option><option>DELIVERED</option></select>
      <select class="status-sel"><option>All Restaurants</option>${DB.restaurants.map(r=>`<option>${r.name}</option>`).join('')}</select>
    </div>
  </div>
  <div class="tbl-wrap"><table class="tbl">
    <thead><tr><th>Order ID</th><th>Customer</th><th>Restaurant</th><th>Items</th><th>Amount</th><th>Status</th><th>Time</th></tr></thead>
    <tbody>
      ${DB.orders.map(o=>`<tr>
        <td style="font-family:monospace;font-size:12px">${o.id}</td>
        <td class="fw7">${o.customer}</td>
        <td>${o.rest}</td>
        <td class="tm tsm" style="max-width:160px;overflow:hidden;text-overflow:ellipsis;white-space:nowrap">${o.items}</td>
        <td class="col-orange fw7">₹${o.amt}</td>
        <td>${sp(o.status)}</td>
        <td class="tm tsm">${o.time}</td>
      </tr>`).join('')}
    </tbody>
  </table></div>
</div>`;

/* ─────── ADMIN: ANALYTICS ─────── */
PAGES['a-analytics']=()=>`
<div class="kpi-row">
  <div class="kpi" style="--kpi-color:var(--orange)"><span class="kpi-icon">🕖</span><div class="kpi-label">Peak Hour</div><div class="kpi-value">7–8 PM</div><div class="kpi-sub">Highest order volume</div></div>
  <div class="kpi" style="--kpi-color:var(--green)"><span class="kpi-icon">🏆</span><div class="kpi-label">Best Restaurant</div><div class="kpi-value" style="font-size:16px">Pizza Republic</div><div class="kpi-sub">₹97,800 revenue</div></div>
  <div class="kpi" style="--kpi-color:var(--amber)"><span class="kpi-icon">🚀</span><div class="kpi-label">Avg Delivery</div><div class="kpi-value">28 min</div><div class="kpi-sub">Platform average</div></div>
  <div class="kpi" style="--kpi-color:var(--blue)"><span class="kpi-icon">👑</span><div class="kpi-label">Top Customer</div><div class="kpi-value" style="font-size:16px">Amit Kumar</div><div class="kpi-sub">19 orders placed</div></div>
</div>
<div class="g2">
  <div class="card">
    <div class="card-head"><div class="card-title">Peak Order Hours</div></div>
    <div class="card-body-sm">
      <div class="col-chart">
        ${[['12pm',35],['1pm',45],['2pm',20],['6pm',60],['7pm',100],['8pm',85],['9pm',62]].map(([h,v])=>`
          <div class="col-bar-wrap">
            <div class="col-bar" style="height:${v}%;background:${v===100?'var(--green)':'var(--orange)'}"></div>
            <div class="col-lbl">${h}</div>
          </div>`).join('')}
      </div>
    </div>
  </div>
  <div class="card">
    <div class="card-head"><div class="card-title">Top 5 Customers</div></div>
    <div class="card-body-sm bar-chart">
      ${[['Amit Kumar',19],['Rahul Mehta',12],['Priya Sharma',8],['Sneha Raj',6],['Karan Doshi',5]].map(([n,o],i)=>`
        <div class="bar-row"><span class="bar-label">${n}</span><div class="bar-track"><div class="bar-fill bf-${['o','g','a','r','s'][i]}" style="width:${Math.round(o/19*100)}%"></div></div><span class="bar-val">${o} orders</span></div>`).join('')}
    </div>
  </div>
</div>
<div class="g2 mt16">
  <div class="card">
    <div class="card-head"><div class="card-title">Avg Delivery Time by Restaurant</div></div>
    <div class="card-body-sm bar-chart">
      ${[['Burger Barn',22,'g'],['Wok & Roll',25,'g'],['Spice Garden',28,'a'],['Pizza Republic',32,'a'],['Taco Fiesta',35,'o']].map(([n,m,c])=>`
        <div class="bar-row"><span class="bar-label">${n}</span><div class="bar-track"><div class="bar-fill bf-${c}" style="width:${Math.round(m/35*100)}%"></div></div><span class="bar-val">${m} min</span></div>`).join('')}
    </div>
  </div>
  <div class="card">
    <div class="card-head"><div class="card-title">Platform Revenue by Month</div></div>
    <div class="card-body-sm">
      <div class="col-chart">
        ${[['Sep',55],['Oct',68],['Nov',74],['Dec',100]].map(([m,v])=>`
          <div class="col-bar-wrap">
            <div class="col-bar" style="height:${v}%;background:${v===100?'var(--green)':'var(--orange)'}"></div>
            <div class="col-lbl">${m}</div>
          </div>`).join('')}
      </div>
    </div>
  </div>
</div>
<div class="card mt16">
  <div class="card-head"><div class="card-title">Full Restaurant Analytics</div></div>
  <div class="tbl-wrap"><table class="tbl">
    <thead><tr><th>Restaurant</th><th>Cuisine</th><th>Orders</th><th>Revenue</th><th>Avg Delivery</th><th>Rating</th><th>Status</th></tr></thead>
    <tbody>
      ${DB.restaurants.sort((a,b)=>b.rev-a.rev).map(r=>`
        <tr>
          <td><span style="font-size:17px">${r.emoji}</span> <span class="fw7">${r.name}</span></td>
          <td>${r.cuisine}</td>
          <td>${r.orders}</td>
          <td class="col-orange fw7">₹${r.rev.toLocaleString()}</td>
          <td>${20+Math.floor(r.id*3)} min</td>
          <td><span style="color:var(--amber)">★</span> ${r.rating}</td>
          <td><span class="badge ${S.restaurantActiveStates[r.id]?'badge-green':'badge-red'}">${S.restaurantActiveStates[r.id]?'Active':'Inactive'}</span></td>
        </tr>`).join('')}
    </tbody>
  </table></div>
</div>`;

/* ═══════════════════════════════════════════
   INIT
═══════════════════════════════════════════ */
document.getElementById('topDate').textContent=new Date().toLocaleDateString('en-IN',{weekday:'short',day:'numeric',month:'short'});
