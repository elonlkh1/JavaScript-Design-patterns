var checkObj=()=>{
    //这是一个类 如果别人调用 需要new
    this.checkName=()=>{
        return 'a';
    }
    this.checkPhone=()=>{

    }

}
var a =new checkObj();
//console.log(a.checkName()); //a 需要