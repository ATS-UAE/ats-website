export function checkColor(darkBackGround: boolean, scrolled: boolean, withBorder?: boolean){
    if(withBorder){
        if(darkBackGround) return false
        else return true        
    }else {
        if(darkBackGround) return scrolled
        else return !scrolled
    }
}