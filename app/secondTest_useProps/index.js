/**
 * Created by Administrator on 2016/9/12.
 */
//    例子一
//创建一个组件
var Content = React.createClass({
    render:function(){
        return (
            <div>
                <h1>{this.props.author}</h1>
                <span>{this.props.time}</span>
                <p>{this.props.children}</p>
            </div>
            );
    }
});
ReactDOM.render(
                <Content author="Jon" time='2016-06-07'>
                    附近的咖啡机的的减肥的会计法肯定积分抵扣的空间发的卡
                </Content>,
                document.getElementById('content')
                );