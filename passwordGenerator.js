function generatePassword(passwordLength) {
    let newPassword = "";
    const possibilities = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()";
    
    for(let i=0; i < passwordLength; i++){
      const randomIdx = Math.floor(Math.random() * possibilities.length);
      newPassword += possibilities[randomIdx];
    }
    
    return newPassword;
  }
  
  let password = generatePassword(10);
  console.log(`Generated password: ${password}`);