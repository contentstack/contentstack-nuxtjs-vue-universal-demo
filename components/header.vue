<template>
  <nav v-if="headers"  id="mainNav" class="navbar navbar-default navbar-fixed-top navbar-custom">
    <div class="container">
      <!-- Brand and toggle get grouped for better mobile display -->
      <div class="navbar-header page-scroll">
        <button type="button" class="navbar-toggle" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1">
          <span class="sr-only">Toggle navigation</span> Menu <i class="fa fa-bars"></i>
        </button>
        <a class="navbar-brand" href="#page-top">{{headers.title | exist }}</a>
      </div>

      <!-- Collect the nav links, forms, and other content for toggling -->
      <div class="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
        <ul class="nav navbar-nav navbar-right">
          <li class="hidden">
            <a href="#page-top"></a>
          </li>
          <li v-for="head in headers.menu" class="page-scroll">
            <a v-bind:href="head.hash_link | exist | addHash">{{head.title | exist }}</a>
          </li>
        </ul>
      </div>
      <!-- /.navbar-collapse -->
    </div>
    <!-- /.container-fluid -->
  </nav>

</template>

<script>
  export default {
    props: ['headers'],
    filters:{
      addHash: function (value){
        return "#"+value
      },
      exist: function (entry){
        if(entry){
          return entry
        }else{
          return
        }

      }
    }
  }
</script>


