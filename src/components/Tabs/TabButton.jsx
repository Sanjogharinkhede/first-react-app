import "./Tabs.css"
export default function TabButton(props){
    return (
        <>
        <li><button>{props.children}</button></li>
        </>
    )
}
export  function TabButton2({children}){
    return (
        <>
        <li><button>{children}</button></li>
        </>
    )
}
export  function TabButton3({label}){
    return (
        <>
        <li><button>{label}</button></li>
        </>
    )
}