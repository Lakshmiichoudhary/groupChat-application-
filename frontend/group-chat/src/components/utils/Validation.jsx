export const Validaion = (name,email,phoneNo,password) => {
    if(!name || !email || !phoneNo || !password){
        return "All Fields Are Require"
    }

    const isEmail = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(email)
    const ispassword = /^(?=.*\S)[^\s]{6,}$/.test(password)
    const isPhone = /^[0-9\-+]+$/.test(phoneNo)
    
    if(!isEmail) return "Enter a valid Email"

    if(!ispassword) return "password should at least contain 6 digit"

    if(!isPhone) return "Enter a Valid Phone Number"

    return null;

}