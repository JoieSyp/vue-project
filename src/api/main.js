import {fetch} from './fetch';
import api from './url';

// 展示各种书籍列表  命名调用接口的名字  domainTxt书籍范围 searchId是书籍的Id 默认为all
export function booksList(domainTxt,searchID){      
     return fetch({
     	// api.booksList是引用url里面的数据
     	url:api.bookInfo+'search',
        method:'get',//请求方法
        params:{   //传过去的参数
        	q:domainTxt,
        	fields:searchID || 'all'
        }
     })
}




