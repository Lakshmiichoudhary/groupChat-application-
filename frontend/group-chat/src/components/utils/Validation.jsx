export const Validaion = (name,email,phoneNo,password) => {
    if(!name || !email || !phoneNo || !password){
        return "All Fields Are Require"
    }

    const isName = /^[a-zA-Z .]+$/.test(name);
    const isEmail = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(email);
    const isPassword = /^(?=.*\S)[^\s]{6,}$/.test(password);
    const isPhone = /^[0-9\-+]{10,10}$/.test(phoneNo);;

    if (!isName) return "Invalid Name";

    if (!isEmail) return "Enter a valid Email";

    if (!isPassword) return "Password must be at least 6 characters";

    if (!isPhone) return "Enter a Valid Phone Number";

    return null;

}