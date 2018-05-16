module.exports = { 
  plugins: { 
    'autoprefixer': {browsers: 'last 5 version'}, 
    "postcss-pxtorem": {
	  "rootValue": 32,
	  "propList": ["*"]
	}
  } 
}