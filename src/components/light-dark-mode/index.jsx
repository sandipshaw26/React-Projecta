import useLocalStorage from "./useLocalStorage"
import './theme.css'
export default function LightDarkMode(){

const[theme, setTheme] = useLocalStorage('theme','dark')
function handleToggleTheme(){
    setTheme(theme === 'dark' ? 'light':'dark');
}
console.log(theme);

return <div className="lightdark" data-theme={theme}>
    <div className="container">
        <p>Welcome To The {theme} World!</p>
        <p className="mode"></p>
        <button onClick={handleToggleTheme}>Change Theme</button>
    </div>
</div>
}