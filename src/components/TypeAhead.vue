<template>
  <div class="typeahead">
    <input class="input" placeholder="Start typing..." v-model="input"
           @keyup.down="inputDown"
           @keyup.up="inputUp"
           @keyup.enter="selectValue"
    />
    <ul class="results" v-show="input.length">
      <li v-for="(item, index) in filteredData" :key="item.id" :class="{ selected: selected === index}"
          @mouseup="mouseSelect(index)">{{item.name}}</li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'TypeAhead',
  watch: {
    input: function () {
      this.selected = 0
    }
  },
  computed: {
    filteredData () {
      return this.array.filter(item => item.name.substring(0, this.input.length).toLowerCase() === this.input.toLowerCase()).splice(0, 5)
    }
  },
  props: {
    data: {
      type: Array,
      required: false
    }
  },
  data () {
    return {
      selected: -1,
      input: '',
      array: [
        { 'id': 1, 'name': 'Tarik Pasic' },
        { 'id': 2, 'name': 'Tare Pasic' },
        { 'id': 3, 'name': 'Tarili Kitic' },
        { 'id': 4, 'name': 'Taro Lipa' },
        { 'id': 5, 'name': 'Tea Larsson' },
        { 'id': 6, 'name': 'Tolga Smith' },
        { 'id': 7, 'name': 'Elena Kitic' },
        { 'id': 8, 'name': 'Dua Lipa' },
        { 'id': 9, 'name': 'Zara Larsson' },
        { 'id': 10, 'name': 'Jorja Smith' },
        { 'id': 11, 'name': 'Adriana Lima' }
      ]
    }
  },
  methods: {
    inputDown () {
      if (this.selected < 4) { this.selected++ }
    },
    inputUp () {
      if (this.selected > 0) { this.selected-- }
    },
    selectValue () {
      this.input = this.filteredData[this.selected].name
    },
    mouseSelect (index) {
      this.selected = index
      this.selectValue()
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .typeahead {
    position: relative;
    display: -ms-flexbox;
    display: -webkit-box;
    display: flex;
    -ms-flex-wrap: wrap;
    flex-wrap: wrap;
    -ms-flex-align: stretch;
    -webkit-box-align: stretch;
    align-items: stretch;
    width: 100%;
  }
  .input {
    /*width: 100%;*/
    /*min-height: 32px;*/
    /*padding: 5px 12px;*/
    margin-top: -1px;
    height: 42px;
    font-size: 14px;
    -webkit-box-shadow: none;
    box-shadow: none;
    border-radius: 3px;
    border: 1px solid rgba(44, 52, 63, .15);
    line-height: 1.25;
    color: #6c757d;
    opacity: 1;
    min-height: calc(2.25rem + 2px);
    padding: 3px 12px;
    -webkit-transition: all 350ms cubic-bezier(0.215, 0.61, 0.355, 1);
    transition: all 350ms cubic-bezier(0.215, 0.61, 0.355, 1);
    position: relative;
    -ms-flex: 1 1 auto;
    -webkit-box-flex: 1;
    flex: 1 1 auto;
    width: 1%;
    margin-bottom: 0;
  }
  .results {
    position: absolute;
    top: 100%;
    left: 0;
    z-index: 1000;
    display: list-item;
    width: 100%;
    float: left;
    min-width: 10rem;
    padding: 0.5rem 0;
    margin: 0.125rem 0 0;
    font-size: 1rem;
    color: #212529;
    text-align: left;
    list-style: none;
    background-color: #fff;
    background-clip: padding-box;
    border: 1px solid rgba(0, 0, 0, .15);
    border-radius: 0.25rem;
  }
  .results li {
    padding: 5px .50rem;
    margin: 0 .25rem;
    cursor: pointer;
    border-radius: 4px;
  }
  .results li:hover {
    background-color: whitesmoke;
  }
  .selected {
    background-color: blue;
    color: whitesmoke;
  }
  .results .selected:hover{
    background-color: blue;
    color: whitesmoke;
  }
</style>
