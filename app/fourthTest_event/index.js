/**
 * Created by Administrator on 2016/9/13.
 */
    //����һ
var ContentForm = React.createClass({
    render:function(){
        return (
            <form name='form'>
                <FormElement/>
            </form>
            );
    }
});
var FormElement = React.createClass({
    getInitialState:function(){
        return {data:""}
    },
    change:function(event){
        this.setState({
            data:event.target.value
        });

    },
    render:function(){
        return (
            <div>
                <input onChange={this.change}/>
                <FormSpan show={this.state.data}/>
            </div>
            );
    }
});
var FormSpan = React.createClass({
    render:function(){
        return <span>{this.props.show}</span>
    }
});
ReactDOM.render(<ContentForm/>,document.getElementById('content'));




// ���Ӷ�
var ContentBox = React.createClass({
    getInitialState:function(){
        return {
            data:[]
        }
    },
    formSubmit:function(addContent){
        var list = this.state.data.concat([addContent]);
        this.setState({
            data:list
        });
    },
   render:function(){
       return (
           <div>
               <From onContentSubmit = {this.formSubmit}/>
               <List item ={this.state.data}/>
           </div>
           );
   }
});
var From = React.createClass({
    text:"",
    insertListItem:function(event){
        event.preventDefault();
        var item =  this.text;
        this.props.onContentSubmit(item);
    },
    changeText:function(event){
        this.text = event.target.value;
    },
    render:function(){
        return (
            <form onSubmit={this.insertListItem}>
                <input type='text' onChange={this.changeText}/>
                <input type='submit' value='ok'/>
            </form>
            );
    }
});
var List = React.createClass({
    render:function(){
        var listArr = this.props.item;
        var list = listArr.map(function(item){
            return <li>{item}</li>
        });
        return <ul className='contentList'>
                {list}
                </ul>
    }
});
ReactDOM.render(<ContentBox/>,document.getElementById('content2'));
