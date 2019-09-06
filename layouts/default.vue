<template>
  <div id="page-top">
    <nuxt/>
  </div>
</template>

<script>

export default {
  head: {
    meta: [
      { name: 'viewport', content: 'width=device-width, initial-scale=1' }
    ],
    link: [
     { rel: 'icon', type: 'image/x-icon', href: 'https://nuxtjs.org/favicon.ico' },
     { rel: 'stylesheet', href: '/css/bootstrap.min.css' },
     { rel: 'stylesheet', href: '/css/freelancer.min.css' },
     { rel: 'stylesheet', href: '/css/style.css' },
     { rel: 'stylesheet', href: 'https://maxcdn.bootstrapcdn.com/font-awesome/4.4.0/css/font-awesome.min.css' },
     { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Montserrat:400,700' },
     { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Lato:400,700,400italic,700italic' }
    ]
  }

}
</script>


