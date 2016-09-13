/**
 * Created by Administrator on 2016/9/13.
 */
//    例子一
var Content1 = React.createClass({
    getInitialState:function(){
        return {
            "color":"red",
            "size":"small",
            "attitude":"like"
        }
    },
    render:function(){
        return (
            <div>{this.state.color + ","+ this.state.size + "," + this.state.attitude}</div>
            );
    }
});
ReactDOM.render(<Content1/>,document.getElementById('content1'));


//    例子二
var ContentList = React.createClass({
    getInitialState:function(){
        return {
            data:[]
        }
    },
    componentDidMount:function(){
        var _self = this;
        $.getJSON(_self.props.url,function(data){
            _self.setState({
                data:data
            });
        });
    },
    render:function(){
        var content = this.state.data.map(function(item){
                        return <ContentItem data={item}/>
                    });
        return <ul className='contentList'>
                    {content}
                </ul>
    }
});
var ContentItem = React.createClass({
    render:function(){
        return (
            <li className="item">
                <span>{this.props.data.id}</span>
                <span>{this.props.data.author}</span>
                <span>{this.props.data.text}</span>
            </li>
            );
    }
});
ReactDOM.render(<ContentList url='comments.json'/>,document.getElementById('contentList'));