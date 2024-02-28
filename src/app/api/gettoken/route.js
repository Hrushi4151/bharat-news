import { NextResponse } from "next/server";


export async function POST(req,res){
  
        let body=await req.json();
        let slug=body.url;
        let url
        console.log(slug)
        if(slug!=null)
        { 
          console.log("1111111111111")
          url=`https://taazatime.com/${slug}`
          console.log(url)
        }
        else{
          console.log("222222")

           url=`https://taazatime.com`
        }
        const myres = await fetch(url, {
                  method: "GET",
                  headers: {
                    "Accept": "*/*",
                    "Content-Type": "text.html;charset=UTF-8",
          }
        });
        const response = (await myres.text()).toString();
        // console.log(response);
          
      return NextResponse.json({"status":200,response});

}
