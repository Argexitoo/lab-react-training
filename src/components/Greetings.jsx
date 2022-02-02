
function Greetings({lang, children}) {
    let greeting = '';
    switch (lang) {
      case 'es':
        greeting = 'Hola ';
        break;

      case 'en':
        greeting = 'Hello ';
        break;

      case 'de':
        greeting = 'Hallo ';
        break;

      case 'fr':
        greeting = 'Bonjour ';
        break;

      default:
        greeting = 'Hola ';
        break;
    }
    return (
        <div>
            {greeting}
            {children}
        </div>
    )
}
    
export default Greetings