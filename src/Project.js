const Project = () => {
    return (  
        <>
       <div>
        <form>
            <div>
                <label>name</label>
                <input type="text" placeholder="name" name="name"/>
            </div>
            <div>
                <label>email</label>
                <input type="email" placeholder="email" name="email"/>
            </div>
            <button type="submit">add</button>
        </form>
       </div>
        </>
    );
}
 
export default Project;