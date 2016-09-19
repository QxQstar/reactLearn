/**
 * Created by Administrator on 2016/9/19.
 */
//例子一
var TextInput = React.createClass({
    render:function(){
        return <input type='text' className='text' ref='input'/>;
    },
    componentDidMount:function(){
        console.log(this.refs.input);
    },
    check:function(){
        console.log('我是组件中的方法');
    }
});
ReactDOM.render(<TextInput/>,document.getElementById('content1'));
//例子二
var DivBox = React.createClass({
    render:function(){
        return <TextInput ref='TextInputClass'/>;
    },
    componentDidMount:function(){
        this.refs.TextInputClass.check();
    }
});
ReactDOM.render(<DivBox/>,document.getElementById('content2'));

//例子三
var Div = React.createClass({
    render:function(){
        return <div ref={function(curDivNode){console.log(curDivNode);}}>
                    kfjdk
                </div>
    },
    check:function(){
        console.log('我是组件方法')
    }
});
ReactDOM.render(<Div/>,document.getElementById('content3'));
//例子四
var OutDiv = React.createClass({
    render:function(){
        return <Div ref={function(outDivNode){
            outDivNode.check();
//            console.log(outDivNode)
        }}/>
    }

});
ReactDOM.render(<OutDiv/>,document.getElementById('content4'));
//例子五
ReactDOM.render(<Div/>,document.getElementById('content5'));
ReactDOM.render(<OutDiv/>,document.getElementById('content5'));
//例子六
var Liu = React.createClass({
    render:function(){
        return <StateLess ref='stateless'/>
    },
    componentDidMount:function(){
        console.log(this.refs.stateless);
    }
});
function StateLess(){
    return <p>StateLess</p>
}
ReactDOM.render(<Liu/>,document.getElementById('content6'));