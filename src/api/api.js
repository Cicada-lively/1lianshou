import axios from 'axios';
import Vue from 'vue';
import config from '../config/globlePara.js';

var domainUrl = config.domainUrl;

axios.defaults.timeout = 500000;

axios.interceptors.request.use(function (request) {
  request.headers.UserToken = GetQueryString('usertoken');
  request.headers.ModuleUrl = GetEcodeUrl();
  return request;
}, function (error) {
  return Promise.reject(error);
});
axios.interceptors.response.use(function (response) {
  // Do something with response data
  // if (response.data.success == 0) {
  //   if (response.data.err.code == '200001') {
  //     ///没有登录信息，跳到登陆页面
  //     top.window.location.href = 'http://www.baidu.com';
  //   }
  // }
  return response;
}, function (error) {
  return Promise.reject(error);
});

//获取编码后的网页地址
function GetEcodeUrl() {
  return encodeURIComponent(window.location.href);
}
//取网址里的参数 
function GetQueryString(name) {
  var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)");
  var href = window.location.href;
  var index = href.indexOf('?');
  var r = href.substr(index + 1).match(reg);
  if (r != null) {
    return decodeURIComponent(r[2])
  }
  return null;
}

//请求方式
function get(url, params) {
  var httpInput = {
    params: params
  };
  return axios.get(url, httpInput);
}

function post(url, params) {
  return axios.post(url, params);
}

function upload(url, params) {
  let config = {
    headers: {
      'Content-Type': 'multipart/form-data'
    }
  }
  return axios.post(url, params, config);
}


export default {
  GetQueryString: GetQueryString,
  GetEcodeUrl: GetEcodeUrl,
  //公司相关接口
  company: {
    //获取列表信息   
    getcompanylist: function (params) {
      return post(domainUrl + 'api/company/list', params);
    },
    //新建接口   
    createcompanylist: function (params) {
      return post(domainUrl + 'api/company/add', params);
    },
    //编辑接口  
    editcompanylist: function (params) {
      return post(domainUrl + 'api/company/update', params);
    },
    // //删除接口   
    // deletecompanylist: function (params) {
    //   return post(domainUrl, '', params);
    // },
    //编辑获取信息   
    geteditcompanylist: function (params) {
      return post(domainUrl + 'api/company/get', params);
    }
  },
  //任务相关接口
  task:{
    //公司列表(目前暂用公司列表页面的接口)
    getCompanyList: function (params) {
      return post(domainUrl + 'api/company/list', params);
    },
    //接口数据源
    getInterfaceList: function (params) {
      return post(domainUrl + 'api/BillingInfo/GetBillingListForAdmin', params);
    },
    //任务列表
    getTaskList: function (params) {
      return post(domainUrl + 'api/BillingInfo/GetBillingListForAdmin', params);
    },
    //保存任务基本信息
    saveTaskInfo: function (params) {
      return post(domainUrl + 'api/BillingInfo/GetBillingListForAdmin', params);
    },
    //获取任务中源和目的的属性对应关系
    getMappingInfo: function (params) {
      return post(domainUrl + 'api/BillingInfo/GetBillingListForAdmin', params);
    },
    //保存对应关系
    saveMappingInfo: function (params) {
      return post(domainUrl + 'api/BillingInfo/GetBillingListForAdmin', params);
    },    
    //删除任务
    delTask: function (params) {
      return post(domainUrl + 'api/BillingInfo/GetBillingListForAdmin', params);
    }
  }
}
