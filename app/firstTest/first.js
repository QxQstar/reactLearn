/**
 * Created by Administrator on 2016/9/12.
 */
//    ����һ
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




    //���Ӷ�
var Content3 = React.createClass({
    render:function(){
        return (
            //����ʹ��class����Ϊ���ﲻ��������html��ǩ
            <div className='other'>
                <h1>Another way</h1>
                <Content1/>
                <Content2/>
            </div>
            );
    }
});
ReactDOM.render(<Content3/>,document.getElementById('contentOther'));
