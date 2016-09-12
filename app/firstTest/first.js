/**
 * Created by Administrator on 2016/9/12.
 */
//    例子一
var Content1 = React.createClass({
    render:function(){
        return <p>hello react </p>
    }
});
var Content2 = React.createClass({
    render:function(){
        return (
            React.createElement('div',{"className":"twice"},"hello react twice")
            );
    }
});
ReactDOM.render(<div>
                    <Content1/>
                    <Content2/>
                </div>,
                document.getElementById('content')
               );




    //例子二
var Content3 = React.createClass({
    render:function(){
        return (
            //不能使用class，因为这里不是真正的html便签
            <div className='other'>
                <h1>Another way</h1>
                <Content1/>
                <Content2/>
            </div>
            );
    }
});
ReactDOM.render(<Content3/>,document.getElementById('contentOther'));
