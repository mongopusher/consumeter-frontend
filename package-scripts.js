module.exports = {
  scripts: {
    start: {
      prod: 'ng serve',
      default: 'ng serve --watch --configuration development',
    },
    test: {
      default: 'ng test',
    },
    build: {
      default: 'ng build',
    }
  }
}
