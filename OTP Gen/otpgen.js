function otpgen() {
    let opt = "";   

    for (let i = 1; i <= 4; i++) {
        opt += Math.floor(Math.random() * 10);
    }

    console.log(opt);  
}

otpgen();
