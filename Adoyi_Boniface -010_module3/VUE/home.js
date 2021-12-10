const Home = { template: ` <div class="container" > 

          <div class="mb-2"  style ="background: silver;  border-radius: 10px; height: 230px; margin-bottom: 40px;">
          <h3 style ="textAlign: center;" ><br> Contact Manager</h3>
          <p> &nbsp; &nbsp;&nbsp; This is a portfolio project to showcase knowledge of:</p>
          <ol style = "listStyleType: lower-roman;">
          <li> Vue Components and Vuex.</li>
          <li> React Router. </li>
          <li> Component state management.</li>
          <li> Context api for global state management. </li>
          <li> Making asynchronous calls to the Json placeholder fake rest api using "async/await".</li>

          </ol>

      

        </div>






<div class="card card-body mb-3" v-for= "users in users" :key = "users.id" style="border: 1px solid silver; padding: 10px; margin-bottom: 10px;" ><h4>{{users.name}} <i  @click="toogle" class="fas fa-sort-down" style= "cursor: pointer">
</i> <i  class="fas fa-times" style="color: red; float: right; cursor: pointer;"></i>

<i  data-toggle="modal" data-target="#myModal" class="fas fa-edit" style="color: black; float: right; cursor: pointer; marginRight: 1rem;">   
</i>


<ul  v-if=isVisible class="list-group"> 

   
    <li  class="list-group-item" > <b>Email: </b> {{users.email}}</li>
    <li  class="list-group-item" > <b>Phone: </b>{{users.phone}} </li>
    
    
    </ul>
   
    </h4>
    </div>
    

    <div id="myModal" class="modal fade" role="dialog">
  <div class=" modal-dialog modal-lg">

    <!-- Modal content-->
    <div class="modal-content">
      <div class="modal-header">
        <button type="button" class="close" data-dismiss="modal">&times;</button>
        <h4 class="modal-title">Edit Contact</h4>
      </div>
      <div class="modal-body">
      <div class="container">
  
      <form >
        <div class="form-group">
          <label for="name">Name:</label>
          <input type="text" class="form-control" id="name" placeholder="Enter name" name="name" style="width:850px">
        </div>
        <div class="form-group">
          <label for="email">Email</label>
          <input type="text" class="form-control" id="email" placeholder="Enter Email" name="email" style="width:850px">
        </div>
        <div class="form-group">
          <label for="phone">Phone</label>
          <input type="text" class="form-control" id="phone" placeholder="Enter phone" name="phone" style="width:850px">
        </div>
        
       <button style="background-color: #1a1919; color: #fff; outline: none; border: none; width:850px;" type="submit" class="btn btn-default" >Update</button> 
      </form>
    </div>
    
      </div>
      <div class="modal-footer" >
     
        <button type="button" class="btn btn-default" data-dismiss="modal">Close</button>
      </div>
    </div>

  </div>
</div>
    </div>

    
`,

    data(){
    
        return{
            users :[],
            isVisible: false

        }
    },

    methods:{
            refreshData(){
                axios.get('https://jsonplaceholder.typicode.com/users')
                .then((response)=> {
                    this.users= response.data;
                });
            },
            toogle(){
                this.isVisible = !this.isVisible;
            },

              
    },
    mounted:function(){
        this.refreshData();
    }









}