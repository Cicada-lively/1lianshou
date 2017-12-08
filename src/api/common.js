//公用方法////////////////////////////////////////////////////
'use strict';



var ArrayFunction = {};
ArrayFunction = {
  /**
   * 删除数组中的指定元素，返回不包含指定元素的新数组(arr:数组 item:元素)
   */
  RemoveElement: function (arr, item) {
    var result = [];
    arr.forEach(function (element) {
      if (element != item) {
        result.push(element);
      }
    });
    return result;
  },
  /**
   * 找到数组中元素的下标
   */
  GetIndex: function (arr, item) {
    for (var i = 0; i < arr.length; i++) {
      if (arr[i] == item) {
        return i;
      }
      return -1;
    }
  },

  /**
   * 得到原数组中指定属性组成的新数组
   * @param {*} arr 原数组 [{id:1,name:22}]
   * @param {*} props 需要的属性数组（支持多个属性）['id','name']
   * （props的length为1时，返回的是这个属性的值得数组；大于1时返回多个属性组成的新数组）
   */
  Select: function (arr, props) {
    var list = [];
    //检查参数
    var ckArr = Object.prototype.toString.call(arr) == '[object Array]';
    var ckProps = Object.prototype.toString.call(props) == '[object Array]';
    if (ckArr && ckProps && props.length > 0) {
      arr.forEach(function (objArr) {
        if (props.length == 1) {
          list.push(objArr[props[0]]);
        } else {
          var tempObj = {};          
          props.forEach(function (prop) {
            tempObj[prop] = objArr[prop]
          });
          list.push(tempObj);
        }
      });
    }
    return list;
  },
  /**
   * 得到原数组中指定属性值相同的对象组成新数组
   * @param {*} arr 原数组 [{id:1,name:22}]
   * @param {*} props 要匹配的属性对象（支持多个属性）{id:name,name:22}
   * @param {*} count 属性的数量
   */
  GetNewFromExist: function (arr, props, count) {
    var list = [];
    //检查参数
    var ckArr = Object.prototype.toString.call(arr) == '[object Array]';
    var ckProps = Object.prototype.toString.call(props) == '[object Object]';
    var ckCount = (Object.prototype.toString.call(count) == '[object Number]' && count > 0);
    if (ckArr && ckProps && ckCount) {
      arr.forEach(function (objArr) {
        var sameCount = 0;
        for (var keyArr in objArr) {
          for (var key in props) {
            if (keyArr == key && objArr[keyArr] == props[key]) {
              sameCount += 1;
            }
          }
        }
        if (sameCount == count) {
          list.push(objArr);
        }
      });
    }
    return list;
  },
  /**
   * 得到原数组中指定属性值相同的对象的下标
   * arr:原数组，props:要匹配的属性对象（支持多个属性），count:属性的数量
   * arr=[{id:1,name:22}];props={id:name,name:22},count=2;
   */
  GetIndexByProp: function (arr, props, count) {
    var index = -1;
    //检查参数
    var ckArr = Object.prototype.toString.call(arr) == '[object Array]';
    var ckProps = Object.prototype.toString.call(props) == '[object Object]';
    var ckCount = (Object.prototype.toString.call(count) == '[object Number]' && count > 0);
    if (ckArr && ckProps && ckCount) {
      for (var i = 0; i < arr.length; i++) {
        var objArr = arr[i];
        var sameCount = 0;
        for (var keyArr in objArr) {
          for (var key in props) {
            if (keyArr == key && objArr[keyArr] == props[key]) {
              sameCount += 1;
            }
          }
        }
        if (sameCount == count) {
          index = i;
        }
      }
    }
    return index;
  }
};
var delComma = {};
delComma = {
  strReplace: function (newstr, oldstr) {
    var newstr1 = oldstr.replace(/\n/g, ','); //回车变逗号
    var newstr2 = newstr1.replace(/\s+/g, ""); //去掉空格
    var newstr3 = newstr2.split(',');
    newstr = '';
    for (var i = 0; i < newstr3.length; i++) {
      if (newstr3[i] == '') {
        continue;
      } else {
        newstr += newstr3[i];
        newstr += ',';
      }
    }
    if (newstr.substring(newstr.length - 1) == ',') {
      newstr = newstr.substring(0, newstr.length - 1);
    } else {
      newstr = newstr;
    }
    return newstr;
  }
}

export default {
  array: ArrayFunction,
  clearStr: delComma
}
