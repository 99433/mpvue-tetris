<template>
  <div class="app" :style="{'padding-bottom': paddingBottom, 'padding-top': paddingTop, 'transform': transform, 'margin-top': marginTop}">
    <div class="rect">
      <Decorate/>
      <div class="screen">
        <div class="panel">
          <Matrix :propMatrix="matrix" :cur="cur" :reset="reset" />
          <Logo :cur="!!cur" :reset="reset" />
          <div class="state">
            <Point :cur="!!cur" :max="max" :point="points" />
            <p>{{pContent}}</p>
            <Number :number='cur ? clearLines : startLines' />
            <p>{{level}}</p>
            <Number :number='cur?speedRun:speedStart' :length="1" />
            <p>{{nextText}}</p>
            <Next :data="next" />
            <div class="bottom">
              <Music :data="music" />
              <Pause :data="pause" />
              <Number :propTime="true" />
            </div>
          </div>
        </div>
      </div>
    </div>
    <Keyboard :filling='filling' />
  </div>
</template>

<style lang="css" src="./app.css"></style>
<style lang="css" src="./loader.css"></style>

<script src="./app.js"></script>
