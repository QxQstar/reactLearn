/**
 * Created by Administrator on 2016/9/18.
 */
var DisplayTime = React.createClass({
    getInitialState:function(){
        var date = new Date();
        return {
            y:date.getFullYear(),
            m:date.getMonth() + 1,
            d:date.getDate(),
            h:date.getHours(),
            mi:date.getMinutes(),
            s:date.getSeconds()
        }
    },
    componentDidMount:function(){
        this.changeTime();
    },
    changeTime:function(){
        var _self = this;
        setInterval(function(){
            var date = new Date();
            _self.setState({
                y:date.getFullYear(),
                m:date.getMonth() + 1,
                d:date.getDate(),
                h:date.getHours(),
                mi:date.getMinutes(),
                s:date.getSeconds()
            });
        },1000);
    },
    render:function(){
        return (
            <p>It is{this.state.y}-{this.state.m}-{this.state.d}-{this.state.h}-{this.state.mi}-{this.state.s}</p>
            );
    }
});
ReactDOM.render(<DisplayTime/>,document.getElementById('content'));