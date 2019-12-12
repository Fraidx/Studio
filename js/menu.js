function getCost(){
    let cost = 0;

        return function getSum(){
            cost += 10;
            console.log(cost);
        };
};
const buyOne = getCost();
buyOne();
