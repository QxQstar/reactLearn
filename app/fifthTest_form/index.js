/**
 * Created by Administrator on 2016/9/18.
 */
//例子一
var Input = React.createClass({
    render:function(){
        return <input type='text' defaultValue='hi'/>
    }
});
ReactDOM.render(<Input/>,document.getElementById('content'));

//例子二
var UserInput = React.createClass({
    getInitialState:function(){
        return {
            value:""
        }
    },
    valueChange:function(event){
        event.stopPropagation();
        this.setState({
            value:event.target.value
        })
    },
    render:function(){
        return <input type='text' value={this.state.value} onChange={this.valueChange}/>
    }
});
ReactDOM.render(<UserInput/>,document.getElementById('content2'));

//例子三
var Select=React.createClass({
    getInitialState: function(){
           return {
               value:'C'
           }
    },
    selectChange:function(event){
        event.stopPropagation();
        this.setState({
            value:event.target.value
        });
    },
    render:function(){
        return (
            <select value={this.state.value} onChange={this.selectChange}>
                <option value="A">Apple</option>
                <option value="B">Banana</option>
                <option value="C">Cranberry</option>
            </select>
            );
    }
});
ReactDOM.render(<Select/>,document.getElementById('select'));