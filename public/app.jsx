var GreeterMessage = React.createClass({
  render:function(){
    return (
      <div>
        <h1>Some H1</h1>
        <p>Some Paragraph.</p>
      </div>
    )
  }
});

var GreeterForm = React.createClass({
  render: function(){
    return(
      <div>
      <form>

          <input type="text" ref="name"/>

          <button>
              Set Name
          </button>

      </form>
    </div>
    )
  }
})

var Greeter = React.createClass({
    getDefaultProps: function() {
        return {name: "React", message: "This is from a react component"};
    },

    getInitialState: function() {
        return {name: this.props.name}
    },

    onButtonClick: function(e) {
        e.preventDefault();
        var name = this.refs.name.value;
        this.refs.name.value = "";
        if (typeof name === 'string' && name.length > 0) {
            this.setState({name: name});
        }

    },

    render: function() {
        var name = this.state.name;
        var message = this.props.message;
        return (
            <div>

                <h1>Hello {name}!</h1>

                <p>
                    {message}
                </p>

                <form onSubmit={this.onButtonClick}>

                    <input type="text" ref="name"/>

                    <button>
                        Set Name
                    </button>

                </form>
                <GreeterMessage/>
                <GreeterForm/>

            </div>
        )
    }
});

ReactDOM.render(
    <Greeter message="My message"/>, document.getElementById('app'))
