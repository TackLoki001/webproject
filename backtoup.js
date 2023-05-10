// 获取回到首页按钮元素
const backToTopBtn = document.querySelector('back-to-top');

// 添加滚动事件监听器
window.addEventListener('scroll', () => {
  // 如果页面滚动超过 500 像素，则显示回到首页按钮
  if (window.pageYOffset > 50) {
    backToTopBtn.classList.add('show');
  } else {
    backToTopBtn.classList.remove('show');
  }
});

// 添加点击事件监听器
backToTopBtn.addEventListener('click', () => {
  // 让页面滚动回顶部
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
});
