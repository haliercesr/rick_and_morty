import style from "../Form/Form.module.css"

function Form (){
    
    return (
        <div >;
         <Form>
            <div className={style.form}>
            <label>Email</label>
            <input/>
            </div>
            <div>
            <label>Password</label>
            <input/>
            </div>
            <button>Submit</button>
         </Form>
        </div>
   );
}

export default Form;