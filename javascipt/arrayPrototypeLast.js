function Custom(array){
    this.array=array

    this.last=function(){
        return this.array.length>0?this.array[this.array.length-1]:-1
    }
}

const array=new Custom([1,2,3,4,5])

console.log(array.last())




