class InputGroup{
    $container;
    $labelEle;
    $inputEle;
    $errorEle;

    _errorEle='';

    constructor(_type,_labelName,_placeholder){
        this.$container=document.createElement("div");
        this.$container.setAttribute("class","flex flex-col mb-4")

        this.$labelEle=document.createElement("label");
        this.$labelEle.textContent= _labelName;
        this.$labelEle.setAttribute("class","text-white front-bold mb-1")

        this.$inputEle=document.createElement("input");
        this.$inputEle.type= _type;
        this.$inputEle.placeholder=_placeholder;
        this.$inputEle.setAttribute("class","py-2  px-4 rounded-xl ")

        this.$errorEle=document.createElement("p");
  
    }

    setError(message){
        if(message!=""){
            this.$errorEle.textContent="";
            this.$errorEle.setAttribute("class","text-red-700 text-md font-bold");
        }
    }

    getInputValue(){
        return this.$inputEle.value;
    }

    render(){
        this.$container.appendChild(this.$labelEle);
        this.$container.appendChild(this.$inputEle);
        this.$container.appendChild(this.$errorEle);
        this.$container.appendChild(this.$errorEle);

        return this.$container;
    }
}
 export default InputGroup;