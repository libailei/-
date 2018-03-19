var baiAlert = function(title,message) {
  var t = `
  <div class="alert-container">
    <div class="alert-mask">
    </div>
    <div class="alert-alert">
      <div class="alert-title">${title}</div>
      <div class="alert-message">${message}</div>
      <div class="alert-buttons">
        <button class="alert-button">ok</button>
      </div>
    </div>
  </div>
</body>

  `
  var alertCss = `
  <style class="alert-container">
     .alert-mask {
     position: fixed;
     top: 0px;
     width: 100%;
     height: 100%;
     z-index: 100;
     opacity: 0.5;
     background: black;
   }
   .alert-alert {
    position: fixed;
    width: 300;
    width: 300px;
    z-index: 101;
  }
  .alert-title {
    text-align: center;
    font-size: 30px;
    background: red;
  }
  .alert-message {
    text-align: center;
    font-size: 30px;
    background: blue;
  }
  .alert-buttons {
    background: yellowgreen;
  }
  .alert-button {
    width: 100%;
    background: yellowgreen;
    border: 0px;
  }
  .alert-alert {
    margin: 0 auto;
    position: fixed;
    width: 300px;
    z-index: 101;
    transform: translateX(-50%);
    left: 50%;
    top: 50%;
  }
  `
  $('body').append(t)
  $('head').append(alertCss)
  $(".alert-button").on('click',function(){
    $("alert-container").remove()
  })
}


/*
title 是 string
message 是 string
callback 是一个接受一个 bool 类型参数的函数

这个函数生成一个上课所说的弹窗插入页面
弹窗包含 title 作为标题 和 message 作为信息
还包含一个 OK 按钮 和一个 Cancel 按钮
点击 OK 按钮关闭弹窗, 调用 callback(true)
点击 Cancel 按钮关闭弹窗, 调用 callback(false)
*/
var baiAlert = function(title,message,callback) {
  var t = `
  <div class="alert-container">
    <div class="alert-mask">
    </div>
    <div class="alert-alert">
      <div class="alert-title">${title}</div>
      <div class="alert-message">${message}</div>
      <div class="alert-buttons">
      <button class="alert-button" type="button" data-type="ok">ok</button>
      <button class="alert-button" type="button" data-type="cancle">cancle</button>
      </div>
    </div>
  </div>
</body>

  `
  var alertCss = `
  <style class="alert-container">
     .alert-mask {
     position: fixed;
     top: 0px;
     width: 100%;
     height: 100%;
     z-index: 100;
     opacity: 0.5;
     background: black;
   }
   .alert-alert {
    position: fixed;
    width: 300;
    width: 300px;
    z-index: 101;
  }
  .alert-title {
    text-align: center;
    font-size: 30px;
    background: red;
  }
  .alert-message {
    text-align: center;
    font-size: 30px;
    background: blue;
  }
  .alert-buttons {
    background: yellowgreen;
    font-size: 0;

  }
  .alert-button {
    background: yellowgreen;
    width: 50%;
    font-size: 30px;
    margin: 0;
  }
  .alert-alert {
    margin: 0 auto;
    position: fixed;
    width: 300px;
    z-index: 101;
    transform: translateX(-50%);
    left: 50%;
    top: 50%;
  }
  `
  $('body').append(t)
  $('head').append(alertCss)
  var callback = function(r){
    console.log(r)
  }
  $(".alert-button").on('click',function(){
    var type = $(event.target).data("type")
    if (type == "ok") {
      callback(true)
    }
    if (type == "cancle") {
      callback(false)
    }
    $(".alert-container").remove()

  })

}


/*
title 是 string
callback 是一个如下的函数
function(clickOk, input) {
    // clickOk 是一个 bool 表明点击的是 OK 还是 Cancel
    // input 是 string
}

这个函数生成一个上课所说的弹窗插入页面
弹窗包含 title 作为标题
包含一个 input 让用户输入信息
还包含一个 OK 按钮 和一个 Cancel 按钮
点击 OK 按钮关闭弹窗, 调用 callback(true, 输入的内容)
点击 Cancel 按钮关闭弹窗, 调用 callback(false)
*/

var baiAlert = function(title,callback){
  var t = `
  <div class="alert-container">
    <div class="alert-mask">
    </div>
    <div class="alert-alert">
      <div class="alert-title">${title}</div>
      <input type="text" />
      <div class="alert-buttons">
      <button class="alert-button" type="button" data-type="ok">ok</button>
      <button class="alert-button" type="button" data-type="cancle">cancle</button>
      </div>
    </div>
  </div>
</body>

  `
  var alertCss = `
  <style class="alert-container">
     .alert-mask {
     position: fixed;
     top: 0px;
     width: 100%;
     height: 100%;
     z-index: 100;
     opacity: 0.5;
     background: black;
   }
   .alert-alert {
    position: fixed;
    width: 300;
    width: 300px;
    z-index: 101;
  }
  .alert-title {
    text-align: center;
    font-size: 30px;
    background: red;
  }

  .alert-buttons {
    background: yellowgreen;
    font-size: 0;

  }
  .alert-button {
    background: yellowgreen;
    width: 50%;
    font-size: 30px;
    margin: 0;
  }
  .alert-alert {
    margin: 0 auto;
    position: fixed;
    width: 300px;
    z-index: 101;
    transform: translateX(-50%);
    left: 50%;
    top: 50%;
  }
  `
  $('body').append(t)
  $('head').append(alertCss)
  var callback = function(clickOk,input){
    console.log(r)
  }
  $(".alert-button").on('click',function(){
    var type = $(event.target).data("type")
    if (type == "ok") {
      callback(true)
    }
    if (type == "cancle") {
      callback(false)
    }
    $(".alert-container").remove()

  })

}
