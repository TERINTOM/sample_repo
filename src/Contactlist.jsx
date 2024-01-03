import ButtonWrapper from "./ButtonWrapper";

const Contactlist = () => {
    return ( 
        <>
      <form>
        <input type="email" id="email"/>
        <input type="password" id="password"/>
        <input type="checkbox" id="rememberme"/>
        <input type="submit" onClick={remember}/>

      </form>
      <script>
        const rmchck=document.getElementbyid('rememberme'),
        passinput=documetn.getElementbyid('password'),
        emailinput=documetn.getElementbyid('email');
        if(localStorage.checkbox && localStorage.checkbox!==""){
            rmChck.setAttribute('checked','checked');
            passinput.value=localStorage.password;
            emailinput.value=localStorage.password;


        }
        else{
            rmchck.removeAttribute('checked');
            passinput.value='';
            emailinput.vlaue='';

        }
         function remember(){
            if(rmchck.checked && emaiiinput.value!==''&&passinput.value!==''){
                localStorage.email=emailinput.value;
                localStorage.password=passinput.value;
                localStorage.rememberme=rmchck.vlaue;


            }else{
                localStorage.email='';
                localStorage.passinput='';
                localStorage.rememberme='';
            }
         }
      </script>
    
        </>
     );
}
 
export default Contactlist;