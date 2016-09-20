/**
 * Created by Administrator on 2016/9/20.
 */
var ContentBox = React.createClass({
    getInitialState:function(){
        return {
            name:"on"
        }
    },
    render:function(){
        return <Content switch = {this.clickEvent}  name={this.state.name}/>;
    },
    clickEvent:function(event){
        this.setState({
            name:this.state.name === "on" ? "off" : "on"
        });
    }
});
var Content = React.createClass({
    render:function(){
        return <p style={{cursor:"pointer"}} onClick = {this.props.switch} className = {this.props.name}>{this.props.name}</p>
    },
    componentWillReceiveProps:function(strimg){
        console.log(strimg.name);
    },
    componentDidUpdate:function(one,two){
        console.log(one,two);
    }
});
ReactDOM.render(<ContentBox name='world'/>,document.getElementById('content'));