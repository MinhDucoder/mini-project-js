export function validRegister(user){
    if(!user.email || !user.password || !user.confirmPass){
        return false
    }
    if(user.password !== user.confirmPass){
        return false
    }
    return true
}

export function validLogin(user){
    
    if(!user.email || !user.password ){
        return false
    }
    if(email === '' || password === ''){
        alert('ban phai nhap day du thong tin')
    }
    return true
}