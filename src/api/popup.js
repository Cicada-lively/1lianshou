'use strict';

/**
 * Notice弹窗
 * @param {*所在页面Vue对象} e 
 * @param {*警告框类型} type 
 * @param {*标题} title 
 * @param {*内容} desc 
 */
function notice(e, type, title, desc) {
  type = type ? type : 'info';
  var option = {
    title: title ? title : '',
    desc: desc ? desc : ''
  }
  if (type == 'info') {
    e.$Notice.info(option);
  } else if (type == 'success') {
    e.$Notice.success(option);
  } else if (type == 'warning') {
    e.$Notice.warning(option);
  } else if (type == 'error') {
    e.$Notice.error(option);
  }
}

export default {
  alert: function (e, type, title, desc) {
    return notice(e, type, title, desc)
  }
};
