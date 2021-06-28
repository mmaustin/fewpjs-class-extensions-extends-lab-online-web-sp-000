class Polygon {
    constructor(array){
        this.array = array;
    }

    get countSides(){
        return this.array.length;
    }

    get perimeter(){
        let total = 0;
        for(let num of this.array){
            total += num;
        }
        return total;
    }

}

class Triangle extends Polygon{

    get isValid(){
        if((this.array[0] + this.array[1]) > this.array[2] && (this.array[0] + this.array[2]) > this.array[1] && (this.array[1] + this.array[2]) > this.array[0]){
            return true;
        } else {
            return false;
        }
    }

}


class Square extends Polygon{
    get isValid(){
        if(this.array[0] === this.array[1] && this.array[0] === this.array[2] && this.array[0] === this.array[3]){
            return true;
        } else {
            return false;
        }
    }

    get area(){
        return this.array[0] * this.array[0];
    }
}