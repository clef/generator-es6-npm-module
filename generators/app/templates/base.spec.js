<%_ if (answers['module:jql']) { _%>
import * as module from '../src/index.jql'
<%_ } else { _%>
import * as module from '../src'
<%_ } _%>

describe("<%= answers['module:name'] %>", () => {
  it("should pass", () => {
    expect(true).to.equal(true)
  })
})
