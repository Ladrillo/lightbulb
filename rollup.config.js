import { uglify } from 'rollup-plugin-uglify'
import babel from 'rollup-plugin-babel'

export default {
  input: 'src/index.js',
  external: ['react', 'prop-types'],
  output: {
    format: 'esm',
    name: 'lightbulb',
    globals: {
      react: "React"
    }
  },
  plugins: [
    babel({
      exclude: "node_modules/**"
    }),
    // uglify(),
  ],
}
