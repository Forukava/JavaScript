function solve([speed, area]){


let covl = (limit, speed) => {
    if(limit >= speed){
        console.log()
        return
    }
    let overLimit = speed - limit
    if(overLimit <= 20){
        console.log('speeding')
    }else if (overLimit <= 40){
        console.log('excessive speeding')
    }else if(overLimit > 40){
        console.log('reckless driving')
    }
}
switch(area){
    case 'motorway':
        covl(130,speed)
        break;
    case 'interstate':
            covl(90,speed)
            break;
    case 'city':
        covl(50,speed)
        break;
    case 'residential':
        covl(20,speed)
        break;
    default:
        break;
    }
}
solve([30, 'city'])