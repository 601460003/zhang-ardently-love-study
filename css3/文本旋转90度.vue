

<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Title</title>
</head>
<body>
<div class="header">
  <div class="flipy"><span>10-1(星期一)</span> </div>
  <div class="flipy"><span>10-1(星期一)</span> </div>
  <div class="flipy"><span>10-1(星期一)</span> </div>
  <div class="flipy"><span>10-1(星期一)</span> </div>
  <div class="flipy"><span>10-1(星期一)</span> </div>
</div>
<style>
  .header{
    position: absolute;
    top: 0;
    bottom: 0;
  }
  .flipy{
    width:120px;
    height:28px;
    text-align:center;
    color: #fff;
    transform:rotate(-90deg);
    font-size: 16px;
    background: red;
    margin-top: 95px;
    /*margin-left: -53px;*/
  }
  span{
    padding: 0 10px;
  }
</style>
</body>
</html>


