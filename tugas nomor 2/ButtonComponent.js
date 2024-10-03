class MyButton extends React.Component {
    handleClick = () => {
      alert(this.props.message);
    };
  
    render() {
      return (
        <button onClick={this.handleClick} style={{ margin: "10px" }}>
          {this.props.children}
        </button>
      );
    }
  }