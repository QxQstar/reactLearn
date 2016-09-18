/**
 * Created by Administrator on 2016/9/18.
 */
var DisplayTime = React.createClass({
    getInitialState:function(){
        return {
            time:false
        }
    },
    componentDidMount:function(){
        this.changeTime();
    },
    changeTime:function(){
        var _self = this;
        setInterval(function(){
            _self.setState({
                time:!_self.state.time
            });
        },1000);
    },
    render:function(){
        var date = new Date();
        var time = {
            y:date.getFullYear(),
            m:date.getMonth() + 1,
            d:date.getDate(),
            h:date.getHours(),
            mi:date.getMinutes(),
            s:date.getSeconds()
        };
        return (
                <div>
                    <input type='text'/>
                    <p>It is{time.y}-{time.m}-{time.d}-{time.h}-{time.mi}-{time.s}</p>
                </div>

            );
    }
});
ReactDOM.render(<DisplayTime/>,document.getElementById('content'));