let a=0
  function dis(val)
        {   
            if(val=='+' || val=='-' || val=='*' || val=='/' || val==".")
            {
                a=0
            }
            if (a==1)
            {
                document.getElementById("result").value = "" 
                a=0
            }
            if (val=='+' || val=='-' || val=='*' || val=='/' || val=="."){
                let x = document.getElementById("result").value
                if (x.slice(-1)=="*" || x.slice(-1)=="/" || x.slice(-1)=="+" || x.slice(-1)=="-" || x.slice(-1)=="." || x==""){
                    let y = x.slice(0, -1)+val
                    document.getElementById("result").value = y 
                }
                else  document.getElementById("result").value+=val
            }
            else  document.getElementById("result").value+=val
        }
  function solve()
        {
            let x = document.getElementById("result").value
            let y = eval(x)
            document.getElementById("result").value = y
            a=1
        }
  function clr()
        {
            document.getElementById("result").value = ""
        }
  function del()
        {
            let x = document.getElementById("result").value
            let y = x.slice(0, -1)
            document.getElementById("result").value = y
        }