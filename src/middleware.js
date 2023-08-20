import { NextResponse } from "next/server";

export const middleware = (req) => {
    let verify = req.cookies.get('isLogin');
    let url = req.url

    if(!verify && url.includes('/admin')){
        return NextResponse.redirect('http://localhost:3000/users/home')
    }
    if(verify && url === 'http://localhost:3000/users/home'){
        return NextResponse.redirect('http://localhost:3000/admin')
    }

} 