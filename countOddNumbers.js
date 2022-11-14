var countOdds = function(low, high) {
    if (low % 2 == 0 && high % 2==0){
        return(high-low)/ 2
    }
    if (high-low==1){
        return 1
    }
    return (high-low) / 2 + 1
};