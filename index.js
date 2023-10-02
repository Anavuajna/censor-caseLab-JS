function censor() {
    let paramsArr = []
    return function (str1, str2 = '') {
        if (str2){
            paramsArr.push([str1, str2])
        } 
        else {
            for (let pair of paramsArr){
                str1 = str1.replace(new RegExp(pair[0], 'gi'), pair[1])
            }
            return str1
        }
    }
}

const changeScene = censor();
changeScene('PHP', 'JS'); 
changeScene('backend', 'frontend'); 
console.log(changeScene('PHP is the most popular programming language for backend Web-development'))