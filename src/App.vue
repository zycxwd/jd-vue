<template>
  <div id="app">
    <img src="./assets/logo.png" />
    123


    <ul>
      <li>
        123
      </li>
    </ul>
    <router-view />
  </div>
</template>

<script>
export default {
  name: "App",
  mounted() {
    function add() {
      var _args = [].slice.call(arguments);
      var adder = function() {
        var _add = function() {
          let arr = [].slice.call(arguments)
          _args.push.apply(_args,arr)
          console.log(_args)
          return _add;
        };
        _add.toString = function() {
          return _args.reduce(function(a, b) {
            return a *b;
          });
        };
        return _add;
      };
      return adder.apply(null, _args);
    }
    console.log(add(2,2)(2,3)(12))
  },
  methods: {}
};
</script>

<style lang="scss" >
#app {
 ul{
   li{
  color: blue;

   }
 }
}
</style>
