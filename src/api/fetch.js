import axios from 'axios'; //引用文件

export function fetch(options){
    return new Promise((resolve,reject)=>{
    	const instance=axios.create({
    		// instance创建一个axios实例，可以自定义配置，可在axios文档中查看详情
    		// 所有的请求都会带上这些配置，比如全局都要用的身份信息
    		headers:{
    			'Content-type':'application/json',
    			//'toKen':global.token,token从全局变量那里传过来
    		},
    		timeout:30*1000 //30秒超时
    	});
    	instance(options)
    	.then(response=>{
             // 请求成功之后的操作
             resolve(response); //把请求成功的数据发到引用请求的地方
    	})
    	.catch(error=>{
    		console.log('请求异常信息'+error);
    		reject(error);
    	})

    })


}