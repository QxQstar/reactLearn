/**
 * Created by star on 2016/10/20.
 */
var ReactCSSTransitionAnimation = require('react-addons-css-transition-group');
var React = require('react');
var ReactDOM = require('react-dom');
var data = ['one','two','three'];
var Control = React.createClass({
    getInitialState:function(){
        return {
            'items':this.props.data
        }
    },
    addItem:function(){
        var newItems = this.state.items.concat('four');
        this.setState({
            'items':newItems
        });
    },
    removeItem:function(i){
        var newItems = this.state.items;
        newItems.splice(i,1);
        this.setState({
            'items':newItems
        });
    },
    render:function(){
        var $this = this;
        var List = this.state.items.map(function(value,index){
            return <div key={value} onClick = {$this.removeItem.bind($this,index)}> { value}</div>
        });
        return (
            <div>
                <button onClick={this.addItem}>add Item</button>
                <ReactCSSTransitionAnimation
                    transitionName={ {
                      enter: 'enter',
                      leave: 'leave',
                      appear: 'appear'
                    } }
                    transitionEnterTimeout={500}
                    transitionLeaveTimeout={300}
                    transitionAppear = {true}
                    transitionAppearTimeout={500}>
                    {List}
                </ReactCSSTransitionAnimation>
            </div>
        )
    }
});
ReactDOM.render(<Control data={data}/> ,document.getElementById('content'));