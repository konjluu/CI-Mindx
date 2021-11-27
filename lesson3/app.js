class Input{
    $container;

    constructor(_type,_placePass){
        this.$container=document.createElement("input");
        this.$container.type= _type;
        this.$container.placePass=_placePass;
    }

    render(){
        return this.$container;
    }
}

const passWord = new Input ('Pass Word', 'Enter Pass Word');
document.getElementById("root").appendChild(passWord.render());

