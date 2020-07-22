
class fullScreen {
  /**
   * @description: 全屏初始化
   * @param {Function} fn 用户浏览器不支持全屏的回调
   */
  constructor(fn) {
    this.prefixName = ""; // 浏览器前缀
    this.isFullscreenData = true; // 浏览器是否支持全屏
    this.isFullscreen(fn);
  }
  /**
   * @description: 将传进来的元素全屏
   * @param {String} domName 要全屏的dom名称
   */
  Fullscreen(domName) {
    const element = document.querySelector(domName);
    const methodName =
      this.prefixName === ""
        ? "requestFullscreen"
        : `${this.prefixName}RequestFullScreen`;
    element[methodName]();
  }
  // 退出全屏
  exitFullscreen() {
    const methodName =
      this.prefixName === ""
        ? "exitFullscreen"
        : `${this.prefixName}ExitFullscreen`;
    document[methodName]();
  }
  /**
   * @description: 监听进入/离开全屏
   * @param {Function} enter 进入全屏的回调
   *@param {Function} quit 离开全屏的回调
   */
  screenChange(enter, quit) {
    if (!this.isFullscreenData) return;
    const methodName = `on${this.prefixName}fullscreenchange`;
    document[methodName] = (e) => {
      if (this.isElementFullScreen()) {
        enter && enter(e); // 进入全屏回调
      } else {
        quit && quit(e); // 离开全屏的回调
      }
    };
  }
  /**
   * @description: 浏览器无法进入全屏时触发,可能是技术原因，也可能是用户拒绝：比如全屏请求不是在事件处理函数中调用,会在这里拦截到错误
   * @param {Function} enterErrorFn 回调
   */
  screenError(enterErrorFn) {
    const methodName = `on${this.prefixName}fullscreenerror`;
    document[methodName] = (e) => {
      enterErrorFn && enterErrorFn(e);
    };
  }
  /**
   * @description: 是否支持全屏+判断浏览器前缀
   * @param {Function} fn 不支持全屏的回调函数 这里设了一个默认值
   */
  isFullscreen(fn) {
    var fullscreenEnabled;
    // 判断浏览器前缀
    if (document.fullscreenEnabled) {
      fullscreenEnabled = document.fullscreenEnabled;
    } else if (document.webkitFullscreenEnabled) {
      fullscreenEnabled = document.webkitFullscreenEnabled;
      this.prefixName = "webkit";
    } else if (document.mozFullScreenEnabled) {
      fullscreenEnabled = document.mozFullScreenEnabled;
      this.prefixName = "moz";
    } else if (document.msFullscreenEnabled) {
      fullscreenEnabled = document.msFullscreenEnabled;
      this.prefixName = "ms";
    }
    if (!fullscreenEnabled) {
      this.isFullscreenData = false;
      fn && fn(); // 执行不支持全屏的回调
    }
  }
  /**
   * @description: 检测有没有元素处于全屏状态
   * @return 布尔值
   */
  isElementFullScreen() {
    const fullscreenElement =
      document.fullscreenElement ||
      document.msFullscreenElement ||
      document.mozFullScreenElement ||
      document.webkitFullscreenElement;
    if (fullscreenElement === null) {
      return false; // 当前没有元素在全屏状态
    } else {
      return true; // 有元素在全屏状态
    }
  }
}

fullscreen_class_is_loaded = 1;


var full = new fullScreen(() => {
  show_msg("不支持全屏", 5000);
});

full.screenError((e) => {
  show_msg("进去全屏失败", 5000);
});
// 全屏请求必须在事件处理函数中调用，否则将会被拒绝。

function toFull() {
  full.Fullscreen("html");
  document.getElementById("click_to_full").style.display = "none";
  document.getElementById("click_exit_full").style.display = "inline";
}

// 退出全屏 退出到上次的状态
function exitFull() {
  full.exitFullscreen();
  document.getElementById("click_exit_full").style.display = "none";
  document.getElementById("click_to_full").style.display = "inline";
}

//全屏状态改变事件
const obj = {
  enter: (e) => {
    // 如果退出全屏 退出的还是全屏状态，将会触发进入全屏的回调，这种情况比较少 注意一下
    // show_msg("进入全屏", 2000);
    document.getElementById("click_to_full").style.display = "none";
    document.getElementById("click_exit_full").style.display = "inline";
  },
  quit: (e) => {
    // show_msg("退出全屏", 2000);
    // 通常不会出现嵌套的情况
    document.getElementById("click_to_full").style.display = "inline";
    document.getElementById("click_exit_full").style.display = "none";
  },
};
full.screenChange(obj.enter, obj.quit);

document.getElementById("click_to_full").style.display = "inline";
document.getElementById("click_exit_full").style.display = "none";

fullscreen_start_is_ok = 1;
