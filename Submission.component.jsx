function Submission(){
    return(
        <div onSubmit={this.onSubmit}>
            <h1>Upload the resume txt file</h1>
            <input type={file} name='file'/>
        </div>
    )
}