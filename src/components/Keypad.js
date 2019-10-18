// Code Keypad Component Here
export default class Keypad extends React.Component {
 
  tickle = () => {
    console.log('Tee hee!');
  }
 
  render() {
    return (
		<button onClick={this.tickle}>Tickle me!</button>
    );
  }
}