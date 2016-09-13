/**
 * Created by Administrator on 2016/9/12.
 */
//    例子一
//创建一个组件
var Content = React.createClass({
    render:function(){
        return (
            <div>
                <h2>{this.props.author}</h2>
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


//例子二
var ContentItem = React.createClass({
        render:function(){
            return (
                <li className='item'>
                    <span>{this.props.name}</span>
                    <span>{this.props.age}</span>
                    <span>{this.props.desc}</span>
                </li>
            );
    }
});
var data=[
    {"age":"20","name":"Lisa","description":"一个优秀的作家"},
    {"age":"23","name":"jon","description":"一个新晋作家"}
]
var ContentList = React.createClass({
    render:function(){
      var content = this.props.data.map(function(data){
           return <ContentItem name={data.name} age={data.age} desc={data.description}/>
       });
        return (<ul className='list'>{content}</ul>);
    }
});

ReactDOM.render(<ContentList data={data}/>,document.getElementById('list'));