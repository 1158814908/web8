<template>
     <div>
      <div v-for="(index,key) in studentInformation" v-bind:key="key">
          <span>{{index.id}}</span>
          <span>{{index.name}}</span>
          <span>{{index.class}}</span>
          <span>{{index.address}}</span>
          <span>{{index.active}}</span>
      </div>
  </div>
</template>