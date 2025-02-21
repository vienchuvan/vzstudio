<template>
  <div class="wrap mt-5">
    <h2>Bảng giá </h2>
    <div class="w-100 mt-3" style="border-bottom: 1px dotted"></div>
  <div class="container mt-5">
    <div class="row price-list">
      <div class="col-md-3 col-sm-6">
        <div class="price-title">
          <h4>Basic</h4>
        </div>
        <div class="plan-price">
          <h2><span>$</span>9.99 <span>P/M</span></h2>
        </div>
        <ul class="plan-features list-unstyled">
          <li><i class="fa fa-check"></i> 5 Members</li>
          <li><i class="fa fa-check"></i> 10 MySql</li>
          <li><i class="fa fa-check"></i> 100 GB Bandwith</li>
          <li><i class="fa fa-check"></i> 10 GB Storage</li>
        </ul>
        <div class="plan-link">
          <a class="btn btn-bordered" href="#">Choose Plan</a>
        </div>
      </div>
      <!--pricing 1 col end-->

      <div class="col-md-3 col-sm-6">
        <div class="price-title">
          <h4>Starter</h4>
        </div>
        <div class="plan-price">
          <h2><span>$</span>19.99 <span>P/M</span></h2>
        </div>
        <ul class="plan-features list-unstyled">
          <li><i class="fa fa-check"></i> 25 Members</li>
          <li><i class="fa fa-check"></i> 50 MySql</li>
          <li><i class="fa fa-check"></i> 500 GB Bandwith</li>
          <li><i class="fa fa-check"></i> 50 GB Storage</li>
        </ul>
        <div class="plan-link">
          <a class="btn btn-bordered" href="#">Choose Plan</a>
        </div>
      </div>
      <!--pricing 2 col end-->

      <div class="col-md-3 col-sm-6 popular">
        <div class="price-title">
          <h4>Pro</h4>
        </div>
        <div class="plan-price">
          <h2><span>$</span>29.99 <span>P/M</span></h2>
        </div>
        <ul class="plan-features list-unstyled">
          <li><i class="fa fa-check"></i> 50 Members</li>
          <li><i class="fa fa-check"></i> 100 MySql</li>
          <li><i class="fa fa-check"></i> 1 TB Bandwith</li>
          <li><i class="fa fa-check"></i> 100 GB Storage</li>
        </ul>
        <div class="plan-link">
          <a class="btn btn-bordered" href="#">Choose Plan</a>
        </div>
      </div>
      <!--pricing 3 col end-->

      <div class="col-md-3 col-sm-6">
        <div class="price-title">
          <h4>Ultimate</h4>
        </div>
        <div class="plan-price">
          <h2><span>$</span>99.99 <span>P/M</span></h2>
        </div>
        <ul class="plan-features list-unstyled">
          <li><i class="fa fa-check"></i> Unlimited Team</li>
          <li><i class="fa fa-check"></i> Unlimited MySql</li>
          <li><i class="fa fa-check"></i> 50 TB Bandwith</li>
          <li><i class="fa fa-check"></i> Unlimited Storage</li>
        </ul>
        <div class="plan-link">
          <a class="btn btn-bordered" href="#">Choose Plan</a>
        </div>
      </div>
      <!--pricing 4 col end-->
    </div>
    <!--price-list end-->
  </div>
</div>
</template>

<style lang="css" scoped>
.price-list {
font-weight: 400;
font-style: normal;
font-family:'Roboto';
}
.price-list{
}
.price-title{
background:none repeat scroll 0 0 #ecf0f3;
border:1px solid #ddd;
}
.price-title h4{
color:#666;
font-family:open sans;
font-size:20px;
font-weight:300;
letter-spacing:2px;
margin:0;
padding:10px;
text-align:center;
text-transform:uppercase;
}
.plan-price{
border-left:1px solid;
border-right:1px solid;
border-color:#ccc;
}
.plan-price h2{
color:#666;
font-size:40px;
margin:0;
padding:20px;
text-align:center;
}
.plan-price h2 span{
font-family:open sans;
font-size:15px;
font-weight:300;
margin-bottom:0;
padding-right:8px;
vertical-align:middle;
}
.plan-features{
border:1px solid #ddd;
margin:0;
}
.plan-features li{
border-bottom:1px solid #ccc;
font-size:16px;
padding:15px 15px 15px 25px;
}
.plan-features li:last-child{
border-bottom:0px solid;
}
.plan-link{
border:1px solid #ddd;
text-align:center;
border-top:0px solid;
}
.plan-link a.btn-bordered{
font-size:16px;
letter-spacing:2px;
margin:10px 0;
text-transform:uppercase;
}
.popular{
}
.popular .price-title{
background-color:#57bddb;
}
.popular .price-title h4{
color:#fff;
}
.popular .plan-link a.btn-bordered{
background:#57bddb;
color:#fff;
}
.popular .plan-link,.popular .plan-features li, .popular .price-title, .popular .plan-features, .popular .plan-price{
border-color:#57bddb;
}
btn-bordered{
border-radius:0;
margin-top:15px;
}
.btn-bordered{
border:2px solid #57bddb;
color:#57bddb;
background:transparent;
}
.btn-bordered:hover{
color:#57bddb;
opacity:.7;
}
</style>