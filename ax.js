async function getData(){
    // let id1=document.getElementById("roll").value;
    // let name1=document.getElementById("name").value;
    // let age1=document.getElementById("age").value;
    // let branch1=document.getElementById("bran").value;

     const res = await axios.get("http://localhost:3000/students");
        const students = res.data;

        const tableBody = document.getElementById("studList");
        tableBody.innerHTML = ""; // Clear previous content

        // Create table header
    

        // Populate table with student data
        students.forEach(student => {
            const row = document.createElement("tr");
            row.innerHTML = `<td>${student.id}</td><td>${student.name}</td><td>${student.age}</td><td>${student.branch}</td><td><button onclick="delete1(${student.id})">delete</button></td> `;
            tableBody.appendChild(row);
        });

}
function postData(){
    let id1=document.getElementById("roll").value;
    let name1=document.getElementById("name").value;
    let age1=document.getElementById("age").value;
    let branch1=document.getElementById("bran").value;
    if (!id1 || !name1 || !age1 || !branch1) {
        console.log("Please fill in all required fields.");
        return; // Prevent form submission
    }
    axios.post("http://localhost:3000/students",{
        id:id1,
        name:name1,
        age:age1,
        branch:branch1,
    })
    .then((res)=>console.log(res.data))
.catch((err)=>console.log(err));
}
function deleteData(){
    let id=document.getElementById("roll").value;
    console.log(id)
    axios.delete(`http://localhost:3000/students/${id}`)
.then((res)=>console.log(res.data))
.catch((err)=>console.log(err));
}
function patchData(){
    let id1=document.getElementById("roll").value;
    
    let name1=document.getElementById("name").value;
    let branch1=document.getElementById("bran").value;
    axios.patch(`http://localhost:3000/students/${id1}`,{
        
        name:name1,
        branch:branch1,
    })
    .then((res)=>console.log(res.data))
.catch((err)=>console.log(err));
}

function delete1(id){
    axios.delete(`http://localhost:3000/students/${id}`)
.then((res)=>console.log(res.data))
.catch((err)=>console.log(err));
}



